import { FiTrendingUp } from "react-icons/fi";
import { cleanHeroStats } from "../../utils";
import { useHeroStats } from "../api";
import PageHeader from "../components/Header/PageHeader";
import PrimaryLayout from "../components/Layouts/PrimaryLayout";
import Table from "../components/Table/Table";
type Props = {};

const TrendingHeroes = (props: Props) => {
  const {data:heroes, isLoading, isFetched, isError} = useHeroStats();
  return (
    <PrimaryLayout>
      <div className="mx-auto container h-full p-4">
        <PageHeader icon={<FiTrendingUp className="w-6 h-6 mr-2" />} title="Trending Heroes" />
        {isFetched ? <Table isLoading={false} heroStats={cleanHeroStats(heroes)} /> : null}
      </div>
    </PrimaryLayout>
  );
};

export default TrendingHeroes;
