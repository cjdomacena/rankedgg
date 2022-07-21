import React from "react";
import { AiOutlineClockCircle, AiOutlineCheckCircle, AiOutlineClose } from "react-icons/ai";
import { formatDuration, formatStartTime } from "../../../utils";

type Props = {
  startTime: number;
  duration: number;
};

const PublicMatchesHeader = ({ startTime, duration }: Props) => {
  return (
    <div className="flex items-center p-1 justify-between">
      <p className="text-xs">{formatStartTime(startTime)}</p>
      <div className="w-fit flex items-center gap-1">
        <AiOutlineClockCircle className="w-4 h-4" />
        <span className="text-sm">{formatDuration(duration)}</span>
      </div>
    </div>
  );
};

export default PublicMatchesHeader;
