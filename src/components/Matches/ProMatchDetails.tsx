import React from "react";
import { FiArrowRightCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
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
    <div className="w-full px-4 py-2 bg-neutral">
      <ul className="2xl:flex xl:flex lg:flex md:flex block justify-between  text-center gap-2">
        <li className="text-xs">{formatStartTime(startTime, duration)}</li>
        <li className="text-xs pl-4 text-center">{leagueName}</li>
        <li className="text-xs text-white hover:text-gray-300 transition-colors">
          <Link to={`/matches/professional/${matchId}`}>
            <button className="flex items-center mx-auto">
              Match Details
              <FiArrowRightCircle className="w-4 h-4 ml-2" />
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ProMatchDetails;
