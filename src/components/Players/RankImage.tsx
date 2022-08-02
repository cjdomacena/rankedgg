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
  avg_mmr: number;
};

const RankImage = ({ avg_mmr }: Props) => {
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
  } else {
    return <img src={rank0} alt="Uncalibrated" className="w-8 h-8" />;
  }
};

export default RankImage;
