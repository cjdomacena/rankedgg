import { BiWorld, BiMap } from "react-icons/bi";
import { CLUSTERS, GAME_MODES, REGIONS } from "../../utils/constants";
import { useGetPublicMatches } from "../api";
import PageHeader from "../components/Header/PageHeader";
import PrimaryLayout from "../components/Layouts/PrimaryLayout";
import { AiOutlineClockCircle } from "react-icons/ai";
import { TPublicMatches } from "../types";
import HeroIconsLayout from "../components/Layouts/HeroIconsLayout";
import HeroIcon from "../components/Heroes/HeroIcon";
import { formatDuration, formatStartTime } from "../../utils";
import MatchesCardHeader from "../components/Header/MatchesCardHeader";
import MatchesLayout from "../components/Layouts/MatchesLayout";
import MatchDetails from "../components/Matches/MatchDetails";
import MatchLayout from "../components/Layouts/MatchLayout";
import MatchMoreInfo from "../components/Matches/MatchMoreInfo";
import MatchTime from "../components/Matches/MatchTime";
import { useState } from "react";

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
                  onChange={(e: any) => setShow(e.currentTarget.value)}>
                  <option value={15}>15</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                  <option value={matches.length}>{matches.length}</option>
                </select>
                of <span className="text-white font-bold">{matches.length} {" "}</span>
                results
              </p>
            </div>
          </div>
          <div className="container mx-auto p-4 flex flex-wrap gap-4">
            {matches.slice(0, show).map((match: TPublicMatches, index: number) => (
              <MatchesLayout
                isRadiantWin={match.radiant_win}
                key={`card-${match.match_id}-${index}`}>
                <MatchTime
                  startTime={match.start_time}
                  avgMMR={match.avg_mmr}
                  className="xl:block lg:block md:block hidden p-4"
                />
                <MatchLayout>
                  <MatchesCardHeader isRadiant={true} isRadiantWin={match.radiant_win} />
                  <HeroIconsLayout ids={match.radiant_team.split(",")} type="radiant" />
                </MatchLayout>
                <MatchDetails duration={match.duration} gameMode={match.game_mode} />
                <MatchLayout>
                  <MatchesCardHeader isRadiant={false} isRadiantWin={match.radiant_win} />
                  <HeroIconsLayout ids={matches[0].dire_team.split(",")} type="dire" />
                </MatchLayout>
                <MatchMoreInfo
                  matchId={match.match_id}
                  server={match.cluster}
                  startTime={match.start_time}
                  avgMMR={match.avg_mmr}
                />
              </MatchesLayout>
            ))}
          </div>
        </PrimaryLayout>
      );
    }
    default: {
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
  }
};

export default PublicMatches;
