import { Link } from "react-router-dom";
import { formatStartTime } from "../../../utils";
import { GAME_MODES } from "../../../utils/constants";
import RankImage from "../Players/RankImage";

type Props = {
  cluster: string | number;
  gameMode: string | number;
  matchId: string | number;
  avgMMR: number | null;
  startTime: number;
  duration: number;
};

const getRankName = (avg_mmr: number | null) => {
  if (!avg_mmr) {
    return "Uncalibrated / NA";
  }
  if (avg_mmr > 0 && avg_mmr <= 770 - 1) {
    return "Herald";
  } else if (avg_mmr >= 770 && avg_mmr <= 1540 - 1) {
    return "Guardian";
  } else if (avg_mmr >= 1540 && avg_mmr <= 2310 - 1) {
    return "Crusader";
  } else if (avg_mmr >= 2310 && avg_mmr <= 3080 - 1) {
    return "Archon";
  } else if (avg_mmr >= 3080 && avg_mmr <= 3850 - 1) {
    return "Legend";
  } else if (avg_mmr >= 3850 && avg_mmr <= 4620 - 1) {
    return "Ancient";
  } else if (avg_mmr >= 4620 && avg_mmr <= 5420 - 1) {
    return "Divine";
  } else if (avg_mmr >= 5420) {
    return "Immortal";
  }
};

const PublicMatchInfo = ({ gameMode, matchId, avgMMR, startTime, duration }: Props) => {
  return (
    <div className="h-auto flex items-end gap-2 justify-between">
      <div>
        <p
          className="tooltip 2xl:tooltip-bottom xl:tooltip-bottom lg:tooltip-bottom tooltip-left z-10 mb-0 text-2xs flex h-fit w-fit mr-auto"
          data-tip={`Avg. MMR - ${getRankName(avgMMR)}`}>
          <RankImage avg_mmr={avgMMR ?? 0} />
        </p>
        <p className="text-xs text-left capitalize">
          {GAME_MODES[gameMode].name.split("_").join(" ")}
        </p>
        <p className="text-xs">{formatStartTime(startTime, duration)}</p>
      </div>
      <div>
        <p className="text-xs text-right capitalize">{matchId}</p>
        <Link to={`/matches/public/${matchId}`}>
          <p className="text-xs font-semibold hover:text-gray-400 cursor-pointer flex items-center">
            View Details
          </p>
        </Link>
      </div>
    </div>
  );
};

export default PublicMatchInfo;
