import { BiWorld, BiMap } from "react-icons/bi";
import { CLUSTERS, GAME_MODES, REGIONS } from "../../utils/constants";
import { useGetPublicMatches } from "../api";
import PublicMatchesCard from "../components/Cards/PublicMatchesCard";
import PageHeader from "../components/Header/PageHeader";
import PublicMatchCardHeader from "../components/Header/PublicMatchCardHeader";
import PublicMatchesHeader from "../components/Header/PublicMatchesHeader";
import PrimaryLayout from "../components/Layouts/PrimaryLayout";
import PublicMatchesLayout from "../components/Layouts/PublicMatchesLayout";
import { CgGames } from "react-icons/cg";
import { HiOutlineIdentification } from "react-icons/hi";
import PublicMatchesFooter from "../components/Cards/PublicMatchesFooter";
import { TPublicMatches } from "../types";
import PublicMatchesHeroIcons from "../components/Layouts/PublicMatchesHeroIcons";
import HeroIcon from "../components/Heroes/HeroIcon";

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
  const { data: matches, isError, isLoading, isFetched } = useGetPublicMatches();
 
  if (matches && isFetched) {
    return (
      <PrimaryLayout className="mb-12">
        <div className="container mx-auto p-4 flex items-center space-x-2">
          <PageHeader icon={<BiWorld className="mr-1 w-6 h-6" />} title="Public Matches" />
  
          <p className="badge badge-success mt-1 badge-md badge-outline">Top</p>
        </div>
        <PublicMatchesLayout>
          {matches.slice(0, 25).map((match: TPublicMatches, index: number) => (
            <div className="rounded  w-auto ring ring-gray-700" key={`${match.match_id}-${index}`}>
              <div className="bg-gray-800 space-y-2 p-4 rounded border-gray-600">
                <PublicMatchesHeader startTime={match.start_time} duration={match.duration} />
                <div className="space-y-2">
                  <PublicMatchCardHeader isRadiant={true} isRadiantWin={match.radiant_win} />
                  <PublicMatchesHeroIcons ids={match.radiant_team.split(",")} type="radiant" />
                </div>
                <div className="space-y-2">
                  <PublicMatchCardHeader isRadiant={false} isRadiantWin={match.radiant_win} />
                  <PublicMatchesHeroIcons ids={match.dire_team.split(",")} type="dire" />
                </div>
              </div>
              <PublicMatchesFooter match={match} />
            </div>
          ))}
        </PublicMatchesLayout>
      </PrimaryLayout>
    );
  } 
  if(isLoading) {
   return (
     <PrimaryLayout>
       <div className="container mx-auto p-4">
         <PageHeader icon={<BiWorld className="mr-1 w-6 h-6" />} title="Public Matches" />
       </div>
       <PublicMatchesLayout>
         {[0, 1, 2, 3, 4, 5].map((item, index) => (
           <div className="rounded  w-auto ring ring-gray-700 flex gap-1" key={index}>
             <HeroIcon isLoading={true} heroIndex={1} />
             <HeroIcon isLoading={true} heroIndex={1} />
             <HeroIcon isLoading={true} heroIndex={1} />
             <HeroIcon isLoading={true} heroIndex={1} />
             <HeroIcon isLoading={true} heroIndex={1} />
             <HeroIcon isLoading={true} heroIndex={1} />
             <HeroIcon isLoading={true} heroIndex={1} />
           </div>
         ))}
       </PublicMatchesLayout>
     </PrimaryLayout>
   );
  }

};

export default PublicMatches;
