import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { formatDuration, formatStartTime } from "../../../utils";
import { GAME_MODES } from "../../../utils/constants";

type Props = {
  gameMode: number;
  duration: number;

};

const MatchDetails = ({ gameMode, duration, }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center w-full whitespace-nowrap space-y-0.5">
      <p
        className=" text-xs flex items-center gap-1 justify-center tooltip tooltip-top tooltip-info text-center"
        data-tip="Duration">
        <AiOutlineClockCircle />
        {formatDuration(duration)}
      </p>

      <p className="text-xs capitalize text-center">
        {GAME_MODES[gameMode].name.split("_").join(" ")}
      </p>
      
    </div>
  );
};

export default MatchDetails;
