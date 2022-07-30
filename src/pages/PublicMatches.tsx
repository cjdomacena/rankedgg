import { BiWorld } from "react-icons/bi";
import { useGetPublicMatches } from "../api";
import PageHeader from "../components/Header/PageHeader";
import PrimaryLayout from "../components/Layouts/PrimaryLayout";
import { TPublicMatches } from "../types";
import { useState } from "react";
import PageHeaderBG from "../components/Header/PageHeaderBG";
import { motion } from "framer-motion";
import PublicHeroes from "../components/Matches/PublicHeroes";
import PublicMatchInfo from "../components/Matches/PublicMatchInfo";

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

  switch (status) {
    case "loading": {
      return (
        <PrimaryLayout className="my-12">
          <PageHeaderBG>
            <div className="container mx-auto p-4">
              <PageHeader icon={<BiWorld className="mr-1 w-6 h-6" />} title="Public Matches" />
            </div>
          </PageHeaderBG>
          <div className="container mx-auto p-4">
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
        <PrimaryLayout className="my-12">
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
        <div className="w-full">
          <PrimaryLayout className="my-12">
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
            <div className="container h-auto mx-auto p-8">
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
                    <PublicMatchInfo
                      cluster={match.cluster}
                      gameMode={match.game_mode}
                      matchId={match.match_id}
                      avgMMR={match.avg_mmr}
                      startTime={match.start_time}
                      duration={match.duration}
                    />
                    <PublicHeroes
                      isRadiantWin={match.radiant_win}
                      direTeam={match.dire_team}
                      radiantTeam={match.radiant_team}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </PrimaryLayout>
        </div>
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
