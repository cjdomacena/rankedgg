import React from 'react'
import { formatStartTime } from '../../../utils';
import { CLUSTERS, GAME_MODES, REGIONS } from '../../../utils/constants';
import rank0 from "../../assets/rank_icon_0.png";
import rank1 from "../../assets/rank_icon_1.png";
import rank2 from "../../assets/rank_icon_2.png";
import rank3 from "../../assets/rank_icon_3.png";
import rank4 from "../../assets/rank_icon_4.png";
import rank5 from "../../assets/rank_icon_5.png";
import rank6 from "../../assets/rank_icon_6.png";
import rank7 from "../../assets/rank_icon_7.png";
import rank8 from "../../assets/rank_icon_8.png";

type Props = {
	cluster: string | number,
	gameMode: string | number,
	matchId: string | number,
	avgMMR: number | null,
	startTime: number,
	duration: number

}
 const getRankImage = (avg_mmr: number | null) => {
   if (!avg_mmr) {
     return <img src={rank0} alt="Uncalibrated" className="w-8 h-8" />;
   }
   if (avg_mmr > 0 && avg_mmr <= 770 - 1) {
     return <img src={rank1} alt="Herald Rank" className="w-8 h-8" />;
   } else if (avg_mmr >= 770 && avg_mmr <= 1540 - 1) {
     return <img src={rank2} alt="Guardian Rank" className="w-8 h-8" />;
   } else if (avg_mmr >= 1540 && avg_mmr <= 2310 - 1) {
     return <img src={rank3} alt="Crusader Rank" className="w-8 h-8" />;
   } else if (avg_mmr >= 2310 && avg_mmr <= 3080 - 1) {
     return <img src={rank4} alt="Archon Rank" className="w-8 h-8" />;
   } else if (avg_mmr >= 3080 && avg_mmr <= 3850 - 1) {
     return <img src={rank5} alt="Legend Rank" className="w-8 h-8" />;
   } else if (avg_mmr >= 3850 && avg_mmr <= 4620 - 1) {
     return <img src={rank6} alt="Ancient Rank" className="w-8 h-8" />;
   } else if (avg_mmr >= 4620 && avg_mmr <= 5420 - 1) {
     return <img src={rank7} alt="Divine Rank" className="w-8 h-8" />;
   } else if (avg_mmr >= 5420) {
     return <img src={rank8} alt="Immortal Rank" className="w-8 h-8" />;
   }
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
 }


const PublicMatchInfo = ({cluster, gameMode, matchId, avgMMR, startTime, duration}: Props) => {
  return (
    <div className="h-auto flex items-end gap-2 justify-between">
      <div>
        <p className="text-xs capitalize">{REGIONS[CLUSTERS[cluster]].toLowerCase()}</p>
        <p className="text-xs text-left capitalize">
          {GAME_MODES[gameMode].name.split("_").join(" ")}
        </p>
        <p className="text-xs font-semibold hover:underline cursor-pointer">{matchId}</p>
      </div>
      <div>
        <p
          className="tooltip 2xl:tooltip-bottom xl:tooltip-bottom lg:tooltip-bottom tooltip-left z-10 mb-0 text-2xs flex h-fit w-fit ml-auto"
          data-tip={`Avg. MMR - ${getRankName(avgMMR)}`}>
          {getRankImage(avgMMR)}
        </p>

        <p className="text-xs">{formatStartTime(startTime, duration)}</p>
      </div>
    </div>
  );
}

export default PublicMatchInfo