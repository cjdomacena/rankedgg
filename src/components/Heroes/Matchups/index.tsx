import { useState } from "react";
import { GiFist } from "react-icons/gi";
import { useGetMatchUp } from "../../../api";
import { TMatchup } from "../../../types";
import ErrorComponent from "../../Error";
import FilterWinsAndGames from "../../Utilility/FilterWinsAndGames";
import HeroMatchupCard from "./HeroMatchupCard";

type Props = {
  id: string | number;
};

const MatchUps = ({ id }: Props) => {
  const { data: matchups, status } = useGetMatchUp(id);
  const [wins, setWins] = useState<number>(25);
  const [games, setGames] = useState<number>(50);
  const [isInitialWins, setIsInitialWins] = useState(true);
  const [isInitialGames, setIsInitialGames] = useState(true);
  switch (status) {
    case "success": {
      return (
        <div>
          <div className="px-4 rounded flex justify-between items-center">
            <h1 className="font-medium text-gray-100 whitespace-nowrap text-lg flex items-center gap-1">
              <GiFist className="w-6 h-6" />
              Hero Matchups
            </h1>
            <div className="divider w-full ml-2"></div>
          </div>
          <div className="p-4 space-y-2">
            {matchups.length > 0 ? (
              <>
                <FilterWinsAndGames
                  maxGames={matchups[0].games_played}
                  maxWins={matchups[0].wins}
                  wins={wins}
                  setWins={setWins}
                  games={games}
                  setGames={setGames}
                  isInitialWins={isInitialWins}
                  isInitialGames={isInitialGames}
                  setIsInitialGames={setIsInitialGames}
                  setIsInitialWins={setIsInitialWins}
                />
                <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,400px),1fr))] gap-4 p-4">
                  {matchups.map((hero: TMatchup) =>
                    hero.wins >= (wins === 0 || isInitialWins ? 25 : wins) &&
                    hero.games_played >=
                      (games === 0 || isInitialGames ? 50 : games) ? (
                      <HeroMatchupCard
                        hero={hero}
                        max={matchups[0].wins}
                        key={hero.hero_id}
                      />
                    ) : null
                  )}
                </div>
              </>
            ) : (
              <div className="text-center  w-full mx-auto p-2 text-gray-400 text-xs">
                <span className="w-fit p-2 bg-black/30 rounded">
                  No Data available.
                </span>
              </div>
            )}
          </div>
        </div>
      );
    }
    case "error": {
      return <ErrorComponent />;
    }
    default: {
      return (
        <div className="space-y-2">
          <div className="px-4 rounded flex justify-between items-center">
            <h1 className="font-medium text-gray-100 whitespace-nowrap text-lg flex items-center gap-1">
              <GiFist className="w-6 h-6" />
              Hero Matchups
            </h1>
            <div className="divider w-full ml-2"></div>
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,340px),1fr))] gap-4 p-4">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((hero: number) => (
              <div
                className="w-full p-4 inline-flex gap-4 items-center bg-base-300 rounded "
                key={hero}
              >
                <div className="w-6 h-6 bg-black/30"></div>
                <div className="w-full">
                  <label className="label p-0">
                    <span className="label-text-alt">0 Wins</span>
                    <span className="label-text-alt">0 games played</span>
                  </label>
                  <progress className="progress w-full bg-white/20" />
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
};

export default MatchUps;
