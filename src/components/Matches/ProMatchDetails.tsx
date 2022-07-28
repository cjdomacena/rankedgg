import React from "react";
import { formatStartTime } from "../../../utils";

type Props = {
  leagueName: string;
  seriesType: number;
  startTime: number;
  duration: number;
  matchId: number;
};

const ProMatchDetails = ({
  leagueName,
  seriesType,
  startTime,
  duration,
  matchId,
}: Props) => {
  return (
    <div className="flex items-start w-full p-1 text-gray-400 justify-between font-medium">
      <ul>
        <li>
          <div className="tooltip z-20" data-tip={leagueName}>
            <p className="text-xs truncate  w-36 text-left">{leagueName}</p>
          </div>
        </li>
        <li className="text-xs">Best of {seriesType}</li>
      </ul>
      <ul className="text-right">
        <li className="text-xs mt-0.5">{formatStartTime(startTime, duration)}</li>
        <li className="text-xs mt-1">{matchId}</li>
      </ul>
    </div>
  );
};

export default ProMatchDetails;
