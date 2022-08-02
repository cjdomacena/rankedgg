import { useEffect, useId, useState } from "react";
import { useParams } from "react-router-dom";
import { getHighlightedPlayers } from "../../../../utils";
import { useGetMatch } from "../../../api";
import ChartHeader from "../../Charts/ChartHeader";
import ChartNotAvailable from "../../Charts/ChartNotAvailable";
import GoldAdvantage from "../../Charts/GoldAdvantage";
import PlayerGPMChart from "../../Charts/PlayerGPMChart";
import ProMatchHeader from "../../Header/ProMatchHeader";
import ProTeamHeader from "../../Header/ProTeamHeader";
import BenchmarkLayout from "../../Layouts/BenchmarkLayout";
import ChartLayout from "../../Layouts/ChartLayout";
import ProMatchLayout from "../../Layouts/ProMatchLayout";
import PlayerMatchInfo from "../../Players";
import Benchmark from "../../Players/Benchmark";
import MatchIdNotFound from "../../Utilility/MatchIdNotFound";
import MatchLoading from "../../Utilility/MatchLoading";

const MatchBreakdown = () => {
  const { id } = useParams();
  const uid = useId();

  const [isTeam, setIsTeam] = useState<boolean>(true);
  const [isXP, xpTeamToggle] = useState<boolean>(true);
  const [radiantTeam, setRadiantTeam] = useState<any>(null);
  const [direTeam, setDireTeam] = useState<any>(null);
  const { data: match, status, isFetched } = useGetMatch(id ?? "");
  const t = getHighlightedPlayers;

  useEffect(() => {
    if (match && isFetched && status === "success") {
      if (!match.hasOwnProperty("error") || !match.radiant_score || !match.dire_score) {
        const rTeam = match.players.filter((player: any) => player.player_slot <= 10);
        const dTeam = match.players.filter((player: any) => player.player_slot > 10);
        setRadiantTeam(rTeam);
        setDireTeam(dTeam);
      }
    }
  }, [status]);

  switch (status) {
    case "success": {
      if (match.hasOwnProperty("error") || !match.radiant_score || !match.dire_score) {
        return <MatchIdNotFound matchId={id ?? ""} />;
      }
      return (
        <>
          <div className="container mx-auto mt-4">
            <ProMatchHeader
              matchId={match.match_id}
              matchDuration={match.duration}
              gameMode={match.game_mode}
              leagueName={match.league?.name ?? ""}
              tier={match.league?.tier ?? ""}
              startTime={match.start_time}
            />
          </div>
          <div className="container mx-auto block 2xl:flex xl:flex ">
            <div>
              <div className="w-full  h-auto rounded p-4">
                <div>
                  <ProTeamHeader
                    isRadiantWin={match.radiant_win}
                    teamName={
                      match.radiant_team?.name ?? (
                        <span className="text-xs text-gray-400">Radiant</span>
                      )
                    }
                    score={match.radiant_score ?? 0}
                  />
                  <ProMatchLayout>
                    {radiantTeam &&
                      radiantTeam.map((player: any, index: number) => (
                        <PlayerMatchInfo player={player} key={`${uid}-${index}`} />
                      ))}
                  </ProMatchLayout>
                </div>
              </div>
              <div className="w-full  h-auto rounded p-4">
                <ProTeamHeader
                  isRadiantWin={!match.radiant_win ? true : false}
                  teamName={
                    match.dire_team?.name ?? <span className="text-xs text-gray-400">Dire</span>
                  }
                  score={match.dire_score ?? 0}
                />
                <ProMatchLayout>
                  {direTeam &&
                    direTeam.map((player: any, index: number) => {
                      return <PlayerMatchInfo player={player} key={`${uid}-${index}`} />;
                    })}
                </ProMatchLayout>
              </div>
            </div>

            <div className="flex-grow">
              {match.players[0].gold_t ||
              match.players[0].xp_t ||
              match.gold_adv ||
              match.xp_adv ? (
                <>
                  <ChartLayout breakPointMax="8" breakPointMin="3" isLoading={!match}>
                    <ChartHeader title="Gold" toggle={isTeam} setToggle={setIsTeam} />
                    <div className=" h-56">
                      {isTeam ? (
                        <GoldAdvantage match={match} type="gold" />
                      ) : (
                        <PlayerGPMChart match={match} type="gold" />
                      )}
                    </div>
                  </ChartLayout>
                  <ChartLayout breakPointMax="8" breakPointMin="3" isLoading={!match}>
                    <ChartHeader title="XP" toggle={isXP} setToggle={xpTeamToggle} />
                    <div className=" h-56">
                      {isXP ? (
                        <GoldAdvantage match={match} type="xp" />
                      ) : (
                        <PlayerGPMChart match={match} type="xp" />
                      )}
                    </div>
                  </ChartLayout>
                </>
              ) : (
                <ChartNotAvailable />
              )}
              <div className=" divider px-4">Benchmarks</div>
              <BenchmarkLayout>
                <Benchmark props={t(match.players, "kills", "Most Kills")} />
                <Benchmark props={t(match.players, "deaths", "Most Deaths")} />
                <Benchmark props={t(match.players, "assists", "Most Assists")} />
                <Benchmark props={t(match.players, "tower_damage", "Most Tower Damage")} />
                <Benchmark props={t(match.players, "gold_spent", "Most Gold Spent")} />
                <Benchmark props={t(match.players, "obs_placed", "Most Obs Placed")} />
                <Benchmark props={t(match.players, "gold_per_min", "Highest GPM")} />
                <Benchmark props={t(match.players, "hero_damage", "Most Hero DMG")} />
              </BenchmarkLayout>
            </div>
          </div>
        </>
      );
    }
    default: {
      return <MatchLoading />;
    }
  }
};

export default MatchBreakdown;
