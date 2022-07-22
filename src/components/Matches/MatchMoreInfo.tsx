import React from 'react'
import { CLUSTERS, REGIONS } from '../../../utils/constants'
import MatchTime from './MatchTime'

type Props = {
	matchId: number
	server: number
  startTime: number,
  avgMMR: number | null
}

const MatchMoreInfo = ({server, matchId, startTime, avgMMR}: Props) => {
  return (
    <div className="w-fit border  p-4 space-y-1  text-white rounded-r">
      <div className="w-auto whitespace-nowrap">
        <h1 className="text-sm ">See Match Details</h1>
        <p className="text-xs text-gray-300">Match ID: {matchId}</p>
        {/* <p
          className="text-xs text-gray-300 tooltip tooltip-top tooltip-info whitespace-nowrap"
          data-tip="Server">
          {REGIONS[CLUSTERS[server]]}
        </p> */}
      </div>
      {/* <MatchTime
        startTime={startTime}
        avgMMR={avgMMR}
        className="xl:hidden lg:hidden md:hidden block"
      /> */}
    </div>
  );
}

export default MatchMoreInfo