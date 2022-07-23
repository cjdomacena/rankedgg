import { FiTrendingUp } from "react-icons/fi";
import { cleanHeroStats } from "../../utils";
import { useHeroStats } from "../api";
import ErrorComponent from "../components/Error";
import PageHeader from "../components/Header/PageHeader";
import PageHeaderBG from "../components/Header/PageHeaderBG";
import PrimaryLayout from "../components/Layouts/PrimaryLayout";
import Table from "../components/Table/Table";
type Props = {};

const TrendingHeroes = (props: Props) => {
  const { data: heroes, status } = useHeroStats();

  switch (status) {
    case "success": {
      return (
        <PrimaryLayout>
          <div className="mx-auto h-full ">
            <PageHeaderBG>
              <div className="container mx-auto py-4 px-8">
                <div>
                  <PageHeader
                    icon={<FiTrendingUp className="w-6 h-6 mr-2" />}
                    title="Trending Heroes"
                  />
                </div>
              </div>
            </PageHeaderBG>
            <div className="container mx-auto p-4">
              <Table heroStats={cleanHeroStats(heroes)} />
            </div>
          </div>
        </PrimaryLayout>
      );
    }
    case "loading": {
      return (
        <PrimaryLayout>
          <div className="mx-auto container h-full p-4 ">
            <div className="indicator">
              <PageHeader
                icon={<FiTrendingUp className="w-6 h-6 mr-2" />}
                title="Trending Heroes"
              />
              <span className="indicator-item badge badge-info badge-sm animate-pulse indicator-bottom indicator-start top-6  left-16">
                Loading
              </span>
            </div>
          </div>
        </PrimaryLayout>
      );
    }
    case "error": {
      return <ErrorComponent />;
    }
    default: {
      return <ErrorComponent />;
    }
  }
};

export default TrendingHeroes;
