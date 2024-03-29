import React from 'react'
import { FaDownload } from 'react-icons/fa';
import { formatDuration, formatStartTime } from '../../../utils';
import { GAME_MODES } from '../../../utils/constants';

type Props = {
  matchId: number;
  matchDuration: number;
  gameMode: number;
  leagueName: string;
  tier: string;
  startTime: number;
  replayUrl: string | null;
};

const ProMatchHeader = ({matchId, matchDuration, gameMode, leagueName, tier, startTime, replayUrl}: Props) => {
  return (
    <div className="w-full bg-black/20 shadow">
      <div className="container mx-auto px-4 py-4 gap-2 flex justify-between items-center">
        <div>
          <p className="text-sm capitalize">{GAME_MODES[gameMode].name.split("_").join(" ")}</p>
          <h4 className="text-sm font-semibold">{matchId} </h4>
          <p className="text-sm">{formatDuration(matchDuration)}</p>
        </div>
        <div className="text-right">
          <a className="btn btn-xs gap-2 mb-1" href={replayUrl ?? ""}>
            <FaDownload />
            {replayUrl ? "Replay" : "Replay not available."}
          </a>
          <p className="text-sm">{leagueName}</p>
          <p className="text-sm">{formatStartTime(startTime, matchDuration)}</p>
          <p className="text-sm capitalize">{tier}</p>
        </div>
      </div>
    </div>
  );
}

export default ProMatchHeader