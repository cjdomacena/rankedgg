import { BiWorld } from "react-icons/bi";
import { useGetPublicMatches } from "../api";
import PageHeader from "../components/Header/PageHeader";
import PrimaryLayout from "../components/Layouts/PrimaryLayout";
import { TPublicMatches } from "../types";
import HeroIconsLayout from "../components/Layouts/HeroIconsLayout";
import MatchesCardHeader from "../components/Header/MatchesCardHeader";
import MatchesLayout from "../components/Layouts/MatchesLayout";
import MatchDetails from "../components/Matches/MatchDetails";
import MatchLayout from "../components/Layouts/MatchLayout";
import { useState } from "react";
import { CLUSTERS, REGIONS } from "../../utils/constants";
import { formatDuration } from "../../utils";

type Props = {};

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
  //   },
  // ];
  const { data: matches, status } = useGetPublicMatches();
  const [show, setShow] = useState<number>(15);
  const handleChange = (e: any) => {
    setShow(e.currentTarget.value);
  };

  switch (status) {
    case "loading": {
      return (
        <PrimaryLayout>
          <div className="container mx-auto p-4">
            <PageHeader icon={<BiWorld className="mr-1 w-6 h-6" />} title="Public Matches" />
          </div>
          <div className="container mx-auto p-4 flex flex-wrap gap-4">
            <div className="p-4 bg-gray-600 animate-pulse w-full rounded"></div>
            <div className="p-4 bg-gray-600 animate-pulse w-full rounded"></div>
            <div className="p-4 bg-gray-600 animate-pulse w-full rounded"></div>
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
        <PrimaryLayout>
          <div className="container mx-auto p-4 flex items-center gap-4 justify-between flex-wrap">
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
          <div className="container h-auto mx-auto p-4 flex flex-wrap gap-4">
            <div className="w-full mx-auto  grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-12">
              {matches.slice(0, show).map((match: TPublicMatches, index: number) => (
                <div key={`${match.match_seq_num}-${index}`}>
                  <MatchDetails
                    duration={match.duration}
                    gameMode={match.game_mode}
                    startTime={match.start_time}
                    matchId={match.match_id}
                  />

                  <MatchesLayout
                    isRadiantWin={match.radiant_win}
                    key={`card-${match.match_id}-${index}`}>
                    <MatchLayout>
                      <MatchesCardHeader isRadiant={true} isRadiantWin={match.radiant_win} />
                      <HeroIconsLayout ids={match.radiant_team.split(",")} type="radiant" />
                    </MatchLayout>
                    <div className=" w-24 text-center p-4 2xl:mx-0 xl:mx-0 lg:mx-0 mx-auto">
                      <h4 className="text-white font-black">{formatDuration(match.duration)}</h4>
                      <p className="text-xs">Duration</p>
                    </div>
                    <MatchLayout isReverse={true}>
                      <HeroIconsLayout ids={match.dire_team.split(",")} type="dire" />
                      <MatchesCardHeader isRadiant={false} isRadiantWin={match.radiant_win} />
                    </MatchLayout>
                  </MatchesLayout>
                </div>
              ))}
            </div>
          </div>
        </PrimaryLayout>
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
