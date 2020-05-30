import React from 'react'
import HeaderSorter from './header-sorter'
import TableNotes from './table-notes'
import PercentageOverview from './percentage-overview'
import TableTitle from './table-title'
import anhpiNotes from './anhpi-notes'
import { RaceTable } from './breakdown-tables'
import stateStyle from './state.module.scss'

export default ({ state }) => {
  const stateData = state
  const notes = {
    otherDeath: stateData.otherDeathNotes,
    otherPos: stateData.otherPosNotes,
    whiteDeath: stateData.whiteDeathNotes,
    whitePos: stateData.whitePosNotes,
    twoDeath: stateData.twoDeathNotes,
    twoPos: stateData.twoPosNotes,
    aianDeath: stateData.aianDeathNotes,
    aianPos: stateData.aianPosNotes,
    nhpiDeath: stateData.nhpiDeathNotes,
    nhpiPos: stateData.nhpiPosNotes,
    asianDeath: stateData.asianDeathNotes,
    asianPos: stateData.asianPosNotes,
    latinXDeath: stateData.latinXDeathNotes,
    latinXPos: stateData.latinXPosNotes,
    blackDeath: stateData.blackDeathNotes,
    blackPos: stateData.blackPosNotes,
  }
  anhpiNotes(stateData, notes)

  const groupedNotes = [...new Set(Object.values(notes))]
    .reverse()
    .filter(value => value && value.trim().length && value)

  return (
    <div>
      <div className={stateStyle.stateOverview}>
        <PercentageOverview
          stateName={state.name}
          dataType="race and ethnicity"
          casePercent={state.knownRaceEthPos}
          deathPercent={state.knownRaceEthDeath}
          className={stateStyle.totals}
        />
        <div className={stateStyle.note}>
          <HeaderSorter stateName={state.name} stateReports="race/ethnicity" />
        </div>
      </div>
      <TableTitle
        titleText="Cases and deaths by race/ethnicity"
        state={stateData.state}
      />
      <RaceTable
        data={stateData}
        type="Race/ethnicity"
        notes={notes}
        groupedNotes={groupedNotes}
        noPositives={!stateData.anyPosData}
        noDeaths={!stateData.anyDeathData}
        isCombined
      />
      <p>
        * Hispanic or Latino ethnicity, any race. All other race categories in
        this table are defined as Not Hispanic or Latino.
      </p>
      <TableNotes
        state={stateData.state}
        stateName={stateData.name}
        groupedNotes={groupedNotes}
      />
    </div>
  )
}
