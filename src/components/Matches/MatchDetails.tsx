
import { AiOutlineClockCircle, AiOutlineNumber } from "react-icons/ai";
import { formatStartTime } from "../../../utils";
import { GAME_MODES } from "../../../utils/constants";
import {MdVideogameAsset} from 'react-icons/md'
type Props = {
  gameMode: number;
  duration: number;
  startTime:number
  matchId: number
};

const MatchDetails = ({ gameMode, duration, startTime, matchId}: Props) => {
  return (
    <div className="flex gap-1 text-white items-center  w-full flex-wrap">
      <p
        className=" text-xs flex items-center gap-1 justify-center tooltip tooltip-top  bg-blue-800  p-2 rounded-tr"
        data-tip="Match ID">
        <span>ID: </span>
        {matchId}
      </p>
      <p
        className="text-xs capitalize tooltip bg-blue-800 p-2 rounded-tr flex items-center gap-1"
        data-tip="Game Mode">
        <MdVideogameAsset className="w-4 h-4" />
        {GAME_MODES[gameMode].name.split("_").join(" ").toLowerCase()}
      </p>
      <p
        className="text-xs bg-blue-800 tooltip p-2 rounded-tr flex items-center gap-1"
        data-tip={`Ended ${formatStartTime(startTime, duration)}`}>
        <AiOutlineClockCircle className="w-4 h-4" />
        {formatStartTime(startTime, duration)}
      </p>
    </div>
  );
};

export default MatchDetails;
