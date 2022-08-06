import { useEffect, useId, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetPlayers, useGetTeam, useGetTeamHeroes } from "../api";
import HeroMatchupCard from "../components/Heroes/Matchups/HeroMatchupCard";
import PrimaryLayout from "../components/Layouts/PrimaryLayout";
import PlayerCard from "../components/Players/PlayerCard";
import TeamCard from "../components/Teams/TeamCard";
import FilterWinsAndGames from "../components/Utilility/FilterWinsAndGames";
import TeamLoading from "../components/Utilility/TeamLoading";
import { TPlayers, TTeam } from "./../types";
import TeamMatches from "./TeamMatches";

type Props = {};

const Team = (props: Props) => {
  const { id } = useParams();
  const { data: t } = useGetTeam(Number(id));
  const { data: p } = useGetPlayers(Number(id));
  const { data: h } = useGetTeamHeroes(Number(id));

  const uid = useId();

  const [players, setPlayers] = useState<TPlayers[] | null>(null);
  const [team, setTeam] = useState<TTeam | null>(null);
  const [heroes, setHeroes] = useState<any>(null);
  const [wins, setWins] = useState<number>(25);
  const [games, setGames] = useState<number>(50);
  const [isInitialWins, setIsInitialWins] = useState<boolean>(true);
  const [isInitialGames, setIsInitialGames] = useState<boolean>(true);
  const [matchInterval, setMatchInterval] = useState<number>(1);
  const navigate = useNavigate();

  useEffect(() => {
    if (t) {
      if (t.hasOwnProperty("error") || t.length === 0) {
        navigate(`/error/team-not-found`);
      }
      setTeam(t);
    }
    if (p) {
      if (p.hasOwnProperty("error") || p.length === 0) {
        navigate(`/error/team-not-found`);
      }
      setPlayers(p);
    }
    if (h) {
      if (h.hasOwnProperty("error") || h.length === 0) {
        navigate(`/error/team-not-found`);
      }
      setHeroes(h);
    }

    return () => {
      setTeam(null);
      setPlayers(null);
      setHeroes(null);
    };
  }, [t, p, id, h]);

  return (
    <PrimaryLayout>
      <div className="w-full  bg-black/30">
        <div className="container mx-auto">
          <div className="text-sm breadcrumbs mb-4 p-4">
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/teams"}>Teams</Link>
              </li>
              <li className="font-bold">
                <Link to={"/"}>{team?.tag ?? ""}</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container mx-auto my-12 p-4">
        {team ? (
          <div className="w-full grid place-items-center">
            <TeamCard team={team} />
          </div>
        ) : (
          <TeamLoading />
        )}
        <div className="divider w-full my-12">Recent Matches</div>
        <div className="w-full flex justify-end">
          <select
            className="select select-bordered w-fit max-w-xs mb-4"
            defaultValue={matchInterval}
            onChange={(e) => setMatchInterval(Number(e.target.value))}
          >
            <option value={matchInterval} disabled>
              Past {matchInterval} month
            </option>
            <option value={1}>1 month</option>
            <option value={2}>2 months</option>
            <option value={3}>3 months</option>
            <option value={4}>4 months</option>
            <option value={5}>5 months</option>
            <option value={6}>6 months</option>
          </select>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,550px),1fr))] gap-12">
          <TeamMatches
            teamLogo={team?.logo_url ?? ""}
            teamName={team?.name ?? ""}
            id={team?.team_id ?? 0}
            interval={matchInterval}
          />
        </div>
        <div className="divider w-full my-12">Active Players</div>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,250px),1fr))] gap-4">
          {players
            ? players.map((player, index: number) =>
                player.is_current_team_member ? (
                  <PlayerCard
                    player={player}
                    key={`${uid}-${index}-${player.account_id ?? index}`}
                    max={players[0].wins ?? 100}
                  />
                ) : null
              )
            : [0, 1, 2, 3, 4].map((n) => (
                <div
                  className="bg-black/30 h-32 animate-pulse rounded"
                  key={n}
                ></div>
              ))}
        </div>
        <div className="divider my-12">Former Players</div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,250px),1fr))] gap-4">
          {players
            ? players.map((player, index: number) =>
                !player.is_current_team_member ? (
                  <PlayerCard
                    player={player}
                    key={`${uid}-${index}-${player.account_id ?? index}`}
                    max={players[0].wins ?? 100}
                  />
                ) : null
              )
            : [0, 1, 2, 3, 4].map((n) => (
                <div
                  className="bg-black/30 h-32 animate-pulse rounded"
                  key={n}
                ></div>
              ))}
        </div>
        <div className="divider my-12">Heroes</div>
        {heroes && heroes.length > 0 ? (
          <FilterWinsAndGames
            maxGames={heroes[0].games_played}
            maxWins={heroes[0].wins}
            wins={wins}
            setWins={setWins}
            games={games}
            setGames={setGames}
            isInitialWins={isInitialWins}
            isInitialGames={isInitialGames}
            setIsInitialGames={setIsInitialGames}
            setIsInitialWins={setIsInitialWins}
          />
        ) : null}
        <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,350px),1fr))] gap-4 p-4">
          {heroes
            ? heroes.map((hero: any, index: number) =>
                heroes.length > 0 ? (
                  hero.wins >= (wins === 0 || isInitialWins ? 25 : wins) &&
                  hero.games_played >=
                    (games === 0 || isInitialGames ? 50 : games) ? (
                    <HeroMatchupCard
                      hero={hero}
                      max={heroes[0].wins}
                      key={`Team_heroes-${hero.hero_id}-${index}-${uid}`}
                    />
                  ) : null
                ) : (
                  <div className="text-center  w-full mx-auto p-2 text-gray-400 text-xs">
                    <span className="w-fit p-2 bg-black/30 rounded">
                      No Data available.
                    </span>
                  </div>
                )
              )
            : [0, 1, 2, 3, 4, 5, 6, 7].map((n) => (
                <div
                  className="bg-black/30 h-32 animate-pulse rounded"
                  key={`Team-heroes-${n}`}
                ></div>
              ))}
        </div>
      </div>
    </PrimaryLayout>
  );
};

export default Team;
