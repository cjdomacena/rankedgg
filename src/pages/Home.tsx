import { Link } from "react-router-dom";
import PageHeaderBG from "../components/Header/PageHeaderBG";
import PrimaryLayout from "../components/Layouts/PrimaryLayout";
import HomeCard from "../components/navigation/HomeCard";
import MatchIdSearch from "../components/navigation/MatchIdSearch";
type Props = {};

const Home = (props: Props) => {
  return (
    <PrimaryLayout>
      <PageHeaderBG />
      <div className="w-full grid place-items-center bg-base-300 ">
        <div className="text-center my-12">
          <h1 className="text-5xl font-bold">RankedGG</h1>
          <p className="py-6">Search by Match ID</p>
          <div className="w-fit">
            <MatchIdSearch />
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-12 mb-8">
        <div className="w-full divider">Category</div>
      </div>
      <div className="container mx-auto p-4 flex gap-4 justify-center flex-wrap">
        <HomeCard to="/heroes/all" title="Heroes" />
        <HomeCard to="/matches/public" title="Public Matches" />
        <HomeCard to="/matches/professional" title="Pro Matches" />
        <HomeCard to="/teams" title="Pro Teams" />
      </div>
    </PrimaryLayout>
  );
};

export default Home;
