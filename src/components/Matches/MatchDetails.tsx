import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { formatDuration, formatStartTime } from "../../../utils";
import { GAME_MODES } from "../../../utils/constants";

type Props = {
  gameMode: number;
  startTime: number;
  duration:number;
  avgMMR: number | null
};

const MatchDetails = ({ gameMode, startTime, duration, avgMMR }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center w-full whitespace-nowrap">
      <p
        className=" text-xs flex items-center gap-1 justify-center tooltip tooltip-top tooltip-info text-center"
        data-tip="Duration">
        <AiOutlineClockCircle />
        {formatDuration(duration)}
      </p>

      <p className="text-xs capitalize text-center">
        {GAME_MODES[gameMode].name.split("_").join(" ")}
      </p>
      <p className="text-xs text-center">{formatStartTime(startTime)}</p>
      <p className="text-xs">
        Avg MMR:{" "}
        {avgMMR ? (
          <span className=" text-white font-semibold">{avgMMR}</span>
        ) : (
          <span className="text-white semibold">NA</span>
        )}
      </p>
    </div>
  );
};

export default MatchDetails;
