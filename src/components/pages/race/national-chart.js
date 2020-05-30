import React from 'react'
import classnames from 'classnames'
import { useStaticQuery, graphql } from 'gatsby'
import nationalChartStyle from './national-chart.module.scss'

const DonutChart = ({ value, children, mobileOnly, desktopOnly }) => (
  <div
    className={classnames(
      nationalChartStyle.donutChart,
      mobileOnly && nationalChartStyle.mobileOnly,
      desktopOnly && nationalChartStyle.desktopOnly,
    )}
  >
    <div
      className={nationalChartStyle.slice}
      style={{ transform: `rotate(${value * 360 + 90}deg)` }}
    />
    <div
      className={nationalChartStyle.slice}
      style={{ transform: 'rotate(-90deg)' }}
    />
    <div className={nationalChartStyle.center}>
      <span>{children}</span>
    </div>
  </div>
)

export default () => {
  const data = useStaticQuery(graphql`
    query {
      covidRaceDataHomepage {
        blackPercentOfPopulation
        blackPercentOfDeath
      }
    }
  `)
  const {
    blackPercentOfPopulation,
    blackPercentOfDeath,
  } = data.covidRaceDataHomepage
  return (
    <div className={nationalChartStyle.wrapper}>
      <h3 className={nationalChartStyle.header}>Black people account for:</h3>
      <div className={nationalChartStyle.charts}>
        <div className={nationalChartStyle.chart}>
          <DonutChart value={blackPercentOfPopulation} mobileOnly />
          <p className={nationalChartStyle.chartLegend}>
            <span className={nationalChartStyle.number}>
              {Math.round(blackPercentOfPopulation * 100)}%
            </span>
            of the US
            <br />
            population
          </p>
          <DonutChart value={blackPercentOfPopulation} desktopOnly />
        </div>
        <div className={nationalChartStyle.versus}>
          <abbr title="versus" aria-label="versus">
            vs.
          </abbr>
        </div>
        <div
          className={classnames(
            nationalChartStyle.chart,
            nationalChartStyle.flip,
          )}
        >
          <DonutChart value={blackPercentOfDeath} />
          <p className={nationalChartStyle.chartLegend}>
            <span className={nationalChartStyle.number}>
              {Math.round(blackPercentOfDeath * 100)}%
            </span>
            of deaths
            <br />
            where race is known
          </p>
        </div>
      </div>
    </div>
  )
}
