import { FiTrendingUp } from "react-icons/fi";
import { cleanHeroStats } from "../../utils";
import { useHeroStats } from "../api";
import Table from "../components/Table/Table";
type Props = {};

const TrendingHeroes = (props: Props) => {
  const {data:heroes, isLoading, isFetched, isError} = useHeroStats();
  return (
    <section className="p-8 h-full w-full text-neutral-300 font-noto-sans">
      <div className="mx-auto container h-full">
        <h1 className="text-2xl font-bold tracking-wide text-white flex items-center">
          <FiTrendingUp className="w-6 h-6 mr-2" />
          Trending Heroes
        </h1>
          {isFetched ? <Table isLoading={false} heroStats={cleanHeroStats(heroes)} /> : null}
      </div>
    </section>
  );
};

export default TrendingHeroes;
