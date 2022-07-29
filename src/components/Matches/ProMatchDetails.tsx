import React from "react";
import { formatStartTime } from "../../../utils";

type Props = {
  leagueName: string;
  seriesType: number;
  startTime: number;
  duration: number;
  matchId: number;
};

const ProMatchDetails = ({ leagueName, seriesType, startTime, duration, matchId }: Props) => {
  return (
    <div className="flex items-end w-full p-1 text-gray-400 justify-between font-medium">
      <ul>
        <li>
          <p className="text-xs w-40 text-left">{leagueName}</p>
        </li>
      </ul>
      <ul className="text-right">
        <li className="text-xs mt-0.5">{formatStartTime(startTime, duration)}</li>
        <li className="text-xs mt-1">{matchId}</li>
      </ul>
    </div>
  );
};

export default ProMatchDetails;
