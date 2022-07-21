import { MdGamepad } from "react-icons/md";
import { BiMap } from 'react-icons/bi'
import {REGIONS, CLUSTERS, GAME_MODES} from '../../../utils/constants';
import {TPublicMatches} from '../../types'
type Props = {
  match: TPublicMatches;
};

const PublicMatchesFooter = ({match}: Props) => {
  return (
    <div className="pt-4 pb-3 px-3 bg-blue-800 h-auto w-full text-gray-100 space-y-2">
      <div className="">
        <h1 className=" flex items-center p-1 text-blue-300">Match ID: {match.match_id}</h1>
        <p className="text-xs px-1">
          Avg MMR: <span className="font-black">{match.avg_mmr ? match.avg_mmr : "NA"}</span>
        </p>
      </div>
      <div className="text-xs  gap-2 text-blue-200 space-y-1">
        <div className="flex">
          <BiMap className="w-4 h-4 mr-0.5" />
          <span className="uppercase whitespace-nowrap">
            {REGIONS[CLUSTERS[match.cluster]].toLowerCase()}
          </span>
        </div>
        <div className="flex">
          <MdGamepad className="w-4 h-4 mr-0.5 " />
          <span className="capitalize whitespace-nowrap">
            {GAME_MODES[match.game_mode].name.split("_").join(" ")}
          </span>
        </div>
      </div>
      <div className="px-1">
        <button className="text-xs font-bold hover:text-white/80 transition-opacity  ">
          View Match Details
        </button>
      </div>
    </div>
  );
}

export default PublicMatchesFooter