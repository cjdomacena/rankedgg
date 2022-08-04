import React, { useEffect, useId, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ImageExists } from "../../utils/hooks";
import { useGetPlayers, useGetTeam } from "../api";
import PrimaryLayout from "../components/Layouts/PrimaryLayout";
import PlayerCard from "../components/Players/PlayerCard";
import TeamCard from "../components/Teams/TeamCard";
import TeamLoading from "../components/Utilility/TeamLoading";
import { TPlayers, TTeam } from "./../types";

type Props = {};

const Team = (props: Props) => {
  const { id } = useParams();
  const { data: t } = useGetTeam(Number(id));
  const { data: p } = useGetPlayers(Number(id));
  const uid = useId();

  const [players, setPlayers] = useState<TPlayers[] | null>(null);

  const [team, setTeam] = useState<TTeam | null>(null);
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
  }, [t, p, id]);
  

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
        {team ? <TeamCard team={team} index={1} /> : <TeamLoading />}
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
                ) : null,
              )
            : [0, 1, 2, 3, 4].map((n) => (
                <div className="bg-black/30 h-32 animate-pulse rounded" key={n}></div>
              ))}
        </div>
        <div className="divider my-12">Former Players</div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,250px),1fr))] gap-4">
          {/* ${uid}-${index}-${player.account_id ?? index} */}
          {players
            ? players.map((player, index: number) =>
                !player.is_current_team_member ? (
                  <PlayerCard
                    player={player}
                    key={`${uid}-${index}-${player.account_id ?? index}`}
                    max={players[0].wins ?? 100}
                  />
                ) : null,
              )
            : [0, 1, 2, 3, 4].map((n) => (
                <div className="bg-black/30 h-32 animate-pulse rounded" key={n}></div>
              ))}
        </div>
      </div>
    </PrimaryLayout>
  );
};

export default Team;
