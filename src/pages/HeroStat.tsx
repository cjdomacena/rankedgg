import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useInitialHeroes } from "../api";
import MatchUps from "../components/Heroes/Matchups";
import Benchmark from "../components/Heroes/Benchmark";
import PrimaryLayout from "../components/Layouts/PrimaryLayout";

export const HeroStat = () => {
  const { id } = useParams();
  const { data } = useInitialHeroes();
  const [heroName, setHeroName] = useState<string | null>("");
  const navigate = useNavigate();
  useEffect(() => {
    if (data && id) {
      if (data[id]) {
        setHeroName(data[id].localized_name);
      } else {
        navigate("/error/hero-not-found");
      }
    }
  }, [data, id]);

  return (
    <PrimaryLayout>
      <div className="bg-black/20 w-full">
        <div className="container mx-auto">
          <div className="text-sm breadcrumbs p-4 mx-auto">
            <ul>
              <li>
                <Link to="/heroes/all">Heroes</Link>
              </li>
              <li>
                <Link to={`/heroes/${id}`}>{heroName}</Link>
              </li>
              <li className="font-bold ">{"Hero Breakdown"}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-8">
        <MatchUps id={id ?? 0} />
      </div>

      <Benchmark id={Number(id)} />
    </PrimaryLayout>
  );
};
