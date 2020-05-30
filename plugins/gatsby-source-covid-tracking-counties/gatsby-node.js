const fetch = require('node-fetch')
const crypto = require('crypto')
const parse = require('csv-parse/lib/sync')

const formatCountyDate = county => {
  const cases = parseInt(county.cases, 10)
  const deaths = parseInt(county.deaths, 10)
  return {
    date: county.date,
    cases,
    deaths,
  }
}

exports.sourceNodes = ({ actions, createNodeId, reporter }, configOptions) => {
  return new Promise((resolve, reject) => {
    const { createNode } = actions
    const countyResults = {}
    const demographics = require(configOptions.demographics)
    fetch(configOptions.nytimesUrl)
      .then(response => response.text())
      .then(results => {
        const counties = parse(results, {
          columns: true,
          skip_empty_lines: true,
        })
        counties.forEach(county => {
          const fipsKey =
            county.fips === '' && county.county === 'New York City'
              ? 'nyc'
              : county.fips
          if (typeof countyResults[fipsKey] === 'undefined') {
            countyResults[fipsKey] = {
              name: county.county,
              state: county.state,
              fips: fipsKey,
              current: formatCountyDate(county),
              demographics: demographics.find(
                element => element.fips === fipsKey,
              ),
              history: [],
            }
          }
          countyResults[fipsKey].history.push(formatCountyDate(county))
          if (county.date > countyResults[fipsKey].current.date) {
            countyResults[fipsKey].current = formatCountyDate(county)
          }
        })
        Object.keys(countyResults).forEach(fips => {
          const county = countyResults[fips]
          const digest = crypto
            .createHash('md5')
            .update(JSON.stringify(county))
            .digest('hex')
          const nodeTemplate = {
            id: createNodeId(`${configOptions.type}.${fips}`),
            children: [],
            parent: null,
            internal: {
              type: configOptions.type,
              contentDigest: digest,
            },
          }

          createNode({ ...county, ...nodeTemplate })
        })
        if (Object.keys(countyResults).length < 1000) {
          reject('There were not enough counties fetched')
        }
        reporter.success(
          `Imported ${Object.keys(countyResults).length} counties`,
        )
        resolve()
      })
      .catch(error => {
        reject(`Could not fetch counties: ${error}`)
      })
  })
}
