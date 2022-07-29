import { IoPeopleOutline } from "react-icons/io5";
import { useGetProMatches } from "../api";
import PageHeader from "../components/Header/PageHeader";
import PrimaryLayout from "../components/Layouts/PrimaryLayout";
import { useState } from "react";
import ErrorComponent from "../components/Error";
import PageHeaderBG from "../components/Header/PageHeaderBG";
import { formatStartTime } from "../../utils";
import { BiCheckCircle, BiTrophy, BiXCircle } from "react-icons/bi";
import ProMatch from "../components/Matches/ProMatch";
import { TProMatch } from "../types";
import ProMatchDetails from "../components/Matches/ProMatchDetails";

type Props = {};

const ProMatches = (props: Props) => {
  // enum stat {
  //   "success",
  //   "loading",
  //   "error",
  // }
  const { data: matches, status } = useGetProMatches();
  // const status: any = "success";
  // const matches = [
  //   {
  //     match_id: 6681976191,
  //     duration: 909,
  //     start_time: 1659030407,
  //     radiant_team_id: 8745588,
  //     radiant_name: "КИБЕР WORLD",
  //     dire_team_id: 8599174,
  //     dire_name: "lightwaves",
  //     leagueid: 14376,
  //     league_name: "Соревнования по электронным играм «Е-динство»",
  //     series_id: 689820,
  //     series_type: 1,
  //     radiant_score: 28,
  //     dire_score: 9,
  //     radiant_win: true,
  //   },
  //   {
  //     match_id: 6681932591,
  //     duration: 692,
  //     start_time: 1659028363,
  //     radiant_team_id: 8745588,
  //     radiant_name: "КИБЕР WORLD",
  //     dire_team_id: 8599174,
  //     dire_name: "lightwaves",
  //     leagueid: 14376,
  //     league_name: "Соревнования по электронным играм «Е-динство»",
  //     series_id: 689806,
  //     series_type: 1,
  //     radiant_score: 28,
  //     dire_score: 2,
  //     radiant_win: true,
  //   },
  //   {
  //     match_id: 6681916815,
  //     duration: 1794,
  //     start_time: 1659027681,
  //     radiant_team_id: 8545488,
  //     radiant_name: "cybercats",
  //     dire_team_id: 8598633,
  //     dire_name: "Pari Parni",
  //     leagueid: 14389,
  //     league_name: "ESL One Malaysia 2022 Qualifiers powered by Intel",
  //     series_id: 689794,
  //     series_type: 2,
  //     radiant_score: 37,
  //     dire_score: 13,
  //     radiant_win: true,
  //   },
  //   {
  //     match_id: 6681916645,
  //     duration: 2154,
  //     start_time: 1659027638,
  //     radiant_team_id: 5014799,
  //     radiant_name: "Nemiga Gaming",
  //     dire_team_id: 8390848,
  //     dire_name: "Into The Breach",
  //     leagueid: 14389,
  //     league_name: "ESL One Malaysia 2022 Qualifiers powered by Intel",
  //     series_id: 689793,
  //     series_type: 1,
  //     radiant_score: 37,
  //     dire_score: 17,
  //     radiant_win: true,
  //   },
  //   {
  //     match_id: 6681908786,
  //     duration: 1588,
  //     start_time: 1659027602,
  //     radiant_team_id: 8605863,
  //     radiant_name: "Entity",
  //     dire_team_id: 8721219,
  //     dire_name: "BetBoom Team",
  //     leagueid: 14389,
  //     league_name: "ESL One Malaysia 2022 Qualifiers powered by Intel",
  //     series_id: 689790,
  //     series_type: 1,
  //     radiant_score: 19,
  //     dire_score: 11,
  //     radiant_win: true,
  //   },
  //   {
  //     match_id: 6681902461,
  //     duration: 2160,
  //     start_time: 1659027609,
  //     radiant_team_id: 36,
  //     radiant_name: "Natus Vincere",
  //     dire_team_id: 8599101,
  //     dire_name: "Gaimin Gladiators",
  //     leagueid: 14389,
  //     league_name: "ESL One Malaysia 2022 Qualifiers powered by Intel",
  //     series_id: 689788,
  //     series_type: 1,
  //     radiant_score: 22,
  //     dire_score: 33,
  //     radiant_win: false,
  //   },
  //   {
  //     match_id: 6681886596,
  //     duration: 1719,
  //     start_time: 1659026245,
  //     radiant_team_id: 6568822,
  //     radiant_name: "Burning Fire",
  //     dire_team_id: 8701706,
  //     dire_name: "Zorka",
  //     leagueid: 14401,
  //     league_name: "European Pro League Season 2",
  //     series_id: 689747,
  //     series_type: 1,
  //     radiant_score: 10,
  //     dire_score: 39,
  //     radiant_win: false,
  //   },
  //   {
  //     match_id: 6681867862,
  //     duration: 2405,
  //     start_time: 1659025385,
  //     radiant_team_id: 8598757,
  //     radiant_name: "The Brood",
  //     dire_team_id: 8205424,
  //     dire_name: "The Cut",
  //     leagueid: 14367,
  //     league_name: "Thunderpick Bitcoin Series",
  //     series_id: 689764,
  //     series_type: 1,
  //     radiant_score: 32,
  //     dire_score: 52,
  //     radiant_win: false,
  //   },
  //   {
  //     match_id: 6681772688,
  //     duration: 1971,
  //     start_time: 1659021494,
  //     radiant_team_id: 6568822,
  //     radiant_name: "Burning Fire",
  //     dire_team_id: 8701706,
  //     dire_name: "Zorka",
  //     leagueid: 14401,
  //     league_name: "European Pro League Season 2",
  //     series_id: 689747,
  //     series_type: 1,
  //     radiant_score: 38,
  //     dire_score: 26,
  //     radiant_win: true,
  //   },
  //   {
  //     match_id: 6681759885,
  //     duration: 2405,
  //     start_time: 1659021102,
  //     radiant_team_id: 8598757,
  //     radiant_name: "The Brood",
  //     dire_team_id: 8205424,
  //     dire_name: "The Cut",
  //     leagueid: 14367,
  //     league_name: "Thunderpick Bitcoin Series",
  //     series_id: 689764,
  //     series_type: 1,
  //     radiant_score: 26,
  //     dire_score: 47,
  //     radiant_win: false,
  //   },
  //   {
  //     match_id: 6681742965,
  //     duration: 1708,
  //     start_time: 1659020346,
  //     radiant_team_id: 8784806,
  //     radiant_name: "bebes crew",
  //     dire_team_id: 8780302,
  //     dire_name: "PLAYER ONE",
  //     leagueid: 14376,
  //     league_name: "Соревнования по электронным играм «Е-динство»",
  //     series_id: 689758,
  //     series_type: 1,
  //     radiant_score: 45,
  //     dire_score: 19,
  //     radiant_win: true,
  //   },
  // ];
  const [show, setShow] = useState<number>(15);
  const handleChange = (e: any) => {
    setShow(e.currentTarget.value);
  };

  switch (status) {
    case "loading": {
      return (
        <PrimaryLayout>
          <PageHeaderBG>
            <div className="container mx-auto p-4">
              <PageHeader icon={<IoPeopleOutline className="mr-1 w-6 h-6" />} title="Pro Matches" />
            </div>
          </PageHeaderBG>
          <div
            className="container mx-auto p-8 grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] 
            gap-x-4 gap-y-12">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((placeholder) => (
              <div
                className="p-4 bg-gray-600 animate-pulse h-24 w-full rounded"
                key={`placeholder-${placeholder}`}></div>
            ))}
          </div>
        </PrimaryLayout>
      );
    }
    case "error": {
      return <ErrorComponent />;
    }
    case "success": {
      return (
        <PrimaryLayout>
          <PageHeaderBG>
            <div className="container mx-auto py-4 px-8  flex items-center gap-4 justify-between flex-wrap">
              <div className="flex items-center gap-1">
                <PageHeader
                  icon={<IoPeopleOutline className="mr-1 w-6 h-6" />}
                  title="Pro Matches"
                />
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
          <div
            className="container mx-auto p-8 grid 
            2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 grid-cols-1
            gap-x-4 gap-y-12
             items-end
            ">
            {matches.slice(0, show).map((match: TProMatch) => (
              <div className="w-full relative" key={match.match_id}>
                <ProMatchDetails
                  leagueName={match.league_name}
                  seriesType={match.series_type}
                  startTime={match.start_time}
                  duration={match.duration}
                  matchId={match.match_id}
                />
                <ProMatch
                  radiantName={match.radiant_name}
                  radiantWin={match.radiant_win}
                  radiantScore={match.radiant_score}
                  direScore={match.dire_score}
                  direName={match.dire_name}
                />
              </div>
            ))}
          </div>
        </PrimaryLayout>
      );
    }
    default: {
      return <ErrorComponent />;
    }
  }
};

export default ProMatches;
