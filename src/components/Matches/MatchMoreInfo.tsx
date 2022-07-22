import React from 'react'
import { CLUSTERS, REGIONS } from '../../../utils/constants'

type Props = {
	matchId: number
	server: number
}

const MatchMoreInfo = ({server, matchId}: Props) => {
  return (
    <div className=" max-h-40 xl:w-1/2 lg:w-1/2 md:w-1/2 w-full p-4 space-y-1 bg-blue-600 text-white rounded-r">
      <h1 className="text-sm">See Match Details</h1>
      <p className="text-xs text-gray-300">Match ID: {matchId}</p>
      <p className="text-xs text-gray-300 tooltip tooltip-top tooltip-info" data-tip="Server">
        {REGIONS[CLUSTERS[server]]}
      </p>
    </div>
  );
}

export default MatchMoreInfo