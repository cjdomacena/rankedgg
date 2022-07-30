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
    <div className="w-full p-2 bg-neutral">
      <ul className="2xl:flex xl:flex lg:flex md:flex block justify-between gap-1 text-center ">
        <li className="text-xs">{formatStartTime(startTime, duration)}</li>
        <li className="text-xs">{leagueName}</li>
        <li className="text-xs">{matchId}</li>
      </ul>
    </div>
  );
};

export default ProMatchDetails;
