import { BiWorld, BiXCircle, BiCheckCircle } from "react-icons/bi";
import { useGetPublicMatches } from "../api";
import PageHeader from "../components/Header/PageHeader";
import PrimaryLayout from "../components/Layouts/PrimaryLayout";
import { TPublicMatches } from "../types";
import HeroIconsLayout from "../components/Layouts/HeroIconsLayout";
import { useRef, useState } from "react";
import { formatStartTime } from "../../utils";
import PageHeaderBG from "../components/Header/PageHeaderBG";
import { GAME_MODES } from "../../utils/constants";
import rank0 from "../assets/rank_icon_0.png";
import rank1 from '../assets/rank_icon_1.png'
import rank2 from "../assets/rank_icon_2.png";
import rank3 from "../assets/rank_icon_3.png";
import rank4 from "../assets/rank_icon_4.png";
import rank5 from "../assets/rank_icon_5.png";
import rank6 from "../assets/rank_icon_6.png";
import rank7 from "../assets/rank_icon_7.png";
import rank8 from "../assets/rank_icon_8.png";
import {motion} from 'framer-motion';

type Props = {};

const container = {
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const child = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const PublicMatches = (props: Props) => {
  // const matches = [
  //   {
  //     match_id: 6671497709,
  //     match_seq_num: 5579045354,
  //     radiant_win: false,
  //     start_time: 1658411551,
  //     duration: 459,
  //     avg_mmr: null,
  //     num_mmr: null,
  //     lobby_type: 0,
  //     game_mode: 22,
  //     avg_rank_tier: 21,
  //     num_rank_tier: 3,
  //     cluster: 182,
  //     radiant_team: "86,84,28,103,44",
  //     dire_team: "22,123,89,81,40",
  //   },
  //   {
  //     match_id: 6671497709,
  //     match_seq_num: 5579045354,
  //     radiant_win: false,
  //     start_time: 1658411551,
  //     duration: 459,
  //     avg_mmr: null,
  //     num_mmr: null,
  //     lobby_type: 0,
  //     game_mode: 22,
  //     avg_rank_tier: 21,
  //     num_rank_tier: 3,
  //     cluster: 182,
  //     radiant_team: "86,84,28,103,44",
  //     dire_team: "22,123,89,81,40",
  //   }]
  // ;
  const { data: matches, status } = useGetPublicMatches();
  const [show, setShow] = useState<number>(50);
  const handleChange = (e: any) => {
    setShow(e.currentTarget.value);
  };
  const scrollRef = useRef<any>(null)

  const getRankImage = (avg_mmr: number | null) => {
      if(!avg_mmr) {
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
        return <img src={rank7} alt="Ancient Rank" className="w-8 h-8" />;
      } else if (avg_mmr >= 5420 ) {
        return <img src={rank8} alt="Ancient Rank" className="w-8 h-8" />;
      }
  }


  switch (status) {
    case "loading": {
      return (
        <PrimaryLayout>
          <PageHeaderBG>
            <div className="container mx-auto p-4">
              <PageHeader icon={<BiWorld className="mr-1 w-6 h-6" />} title="Public Matches" />
            </div>
          </PageHeaderBG>
          <div className="container mx-auto p-4" >
            <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-10">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15].map((loading) => (
                <div
                  className="w-full h-36 bg-black/80 animate-pulse rounded"
                  key={`placeholder-${loading}`}></div>
              ))}
            </div>
          </div>
        </PrimaryLayout>
      );
    }
    case "error": {
      return (
        <PrimaryLayout>
          <div className="container mx-auto p-4 grid place-items-center h-[calc(80vh)]">
            <div>
              <h1 className="text-white text-4xl"> Something went wrong...</h1>
              <p className="text-center">Please reload the page.</p>
            </div>
          </div>
        </PrimaryLayout>
      );
    }
    case "success": {
      return (
        <motion.div ref={scrollRef} className="w-full">
          <PrimaryLayout>
            <PageHeaderBG>
              <div className="container mx-auto py-4 px-8 flex items-center gap-4 justify-between flex-wrap">
                <div className="flex items-center gap-1">
                  <PageHeader icon={<BiWorld className="mr-1 w-6 h-6" />} title="Public Matches" />
                  <span className=" badge">Top</span>
                </div>
                <div>
                  <p>
                    Showing
                    <select
                      className="text-white font-semibold bg-gray-800 rounded  ring-gray-600 ring-2 mx-2"
                      value={show}
                      onChange={handleChange}>
                      <option value={15}>15</option>
                      <option value={25}>25</option>
                      <option value={50}>50</option>
                      <option value={matches.length}>{matches.length}</option>
                    </select>
                    of <span className="text-white font-bold">{matches.length} </span>
                    results
                  </p>
                </div>
              </div>
            </PageHeaderBG>
            <motion.div
              className="container h-auto mx-auto p-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ root: scrollRef }}>
              <motion.div
                className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-10 items-end"
                variants={container}
                initial="hidden"
                animate="show">
                {matches.slice(0, show).map((match: TPublicMatches) => (
                  <motion.div
                    className="2xl:w-fit xl:w-fit lg:w-fit md:w-fit w-full"
                    key={match.match_id}
                    variants={child}>
                    <div className="h-auto flex items-end gap-2 justify-between">
                      <div>
                        <p className="text-xs font-semibold hover:underline cursor-pointer">
                          {match.match_id}
                        </p>
                        <p className="capitalize text-xs">
                          {GAME_MODES[match.game_mode].name.split("_").join(" ")}
                        </p>
                      </div>
                      <div>
                        <p
                          className="tooltip tooltip-bottom z-10 mb-0 text-2xs flex h-fit w-fit ml-auto"
                          data-tip={"Average MMR"}>
                          {getRankImage(match.avg_mmr)}
                          {/* <TbMathAvg className="w-4 h-4 mr-1" /> {match.avg_mmr ?? "NA"} */}
                        </p>
                        <p className="text-xs text-right capitalize">
                          {GAME_MODES[match.game_mode].name.split("_").join(" ")}
                        </p>
                        <p className="text-xs">
                          {formatStartTime(match.start_time, match.duration)}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4 p-3 mt-1 items-center rounded flex-col w-full shadow-2xl border border-black/20 bg-white/10">
                      <div className="flex items-center gap-2">
                        {match.radiant_win ? (
                          <BiCheckCircle className="w-5 h-5 text-emerald-500" />
                        ) : (
                          <BiXCircle className="w-5 h-5 text-red-500" />
                        )}
                        <HeroIconsLayout ids={match.radiant_team.split(",")} type="radiant" />
                      </div>
                      <div className="flex items-center gap-2">
                        {!match.radiant_win ? (
                          <BiCheckCircle className="w-5 h-5  text-emerald-500" />
                        ) : (
                          <BiXCircle className="w-5 h-5 text-red-500" />
                        )}
                        <HeroIconsLayout ids={match.dire_team.split(",")} type="dire" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </PrimaryLayout>
        </motion.div>
      );
    }
    default: {
      return (
        <PrimaryLayout className=" scroll-smooth">
          <div className="container mx-auto p-4 grid place-items-center h-[calc(80vh)]">
            <div>
              <h1 className="text-white text-4xl"> Something went wrong...</h1>
              <p className="text-center">Please reload the page.</p>
            </div>
          </div>
        </PrimaryLayout>
      );
    }
  }
};

export default PublicMatches;
