import { useParams } from "react-router-dom";
import PageHeaderBG from "../components/Header/PageHeaderBG";
import PrimaryLayout from "../components/Layouts/PrimaryLayout";
import GoldAdvantage from "../components/Charts/GoldAdvantage";
import PlayerGPMChart from "../components/Charts/PlayerGPMChart";
import { useEffect, useState } from "react";
import ChartLayout from "../components/Layouts/ChartLayout";
import ChartHeader from "../components/Charts/ChartHeader";
import { useGetMatch } from "../api";
import ErrorComponent from "../components/Error";
import ProMatchLayout from "../components/Layouts/ProMatchLayout";
import ProTeamHeader from "../components/Header/ProTeamHeader";
import PlayerMatchInfo from "../components/Players";
import TextLoading from "../components/Utilility/TextLoading";
import ProMatchHeader from "../components/Header/ProMatchHeader";
import MatchIdNotFound from "../components/Utilility/MatchIdNotFound";
import BenchmarkLayout from "../components/Layouts/BenchmarkLayout";
import Benchmark from "../components/Players/Benchmark";
import { getHighlightedPlayers } from "../../utils";

const Match = () => {
  const { id } = useParams();

  const [isTeam, setIsTeam] = useState<boolean>(true);
  const [isXP, xpTeamToggle] = useState<boolean>(true);
  const [radiantTeam, setRadiantTeam] = useState<any>(null);
  const [direTeam, setDireTeam] = useState<any>(null);
  const { data: match, status, isFetched, isError } = useGetMatch(id ?? "");
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

  if (isError) {
    return <ErrorComponent />;
  }

  switch (status) {
    case "success": {
      if (match.hasOwnProperty("error") || !match.radiant_score || !match.dire_score) {
        return <MatchIdNotFound matchId={id ?? ""} />;
      }
      return (
        <PrimaryLayout className="">
          <PageHeaderBG />

          <div className="container mx-auto mt-4">
            <ProMatchHeader
              matchId={match.match_id}
              matchDuration={match.duration}
              gameMode={match.game_mode}
              leagueName={match.league.name}
              tier={match.league.tier}
              startTime={match.start_time}
            />
          </div>
          <div className="container mx-auto block 2xl:flex xl:flex ">
            <div >
              <div className="w-full  h-auto rounded p-4">
                <div>
                  <ProTeamHeader
                    isRadiantWin={match.radiant_win}
                    teamName={
                      match.radiant_team?.name ?? (
                        <span className="text-xs text-gray-400">Team name not available.</span>
                      )
                    }
                    score={match.radiant_score ?? 0}
                  />
                  <ProMatchLayout>
                    {radiantTeam &&
                      radiantTeam.map((player: any) => (
                        <PlayerMatchInfo player={player} key={player.account_id} />
                      ))}
                  </ProMatchLayout>
                </div>
              </div>
              <div className="w-full  h-auto rounded p-4">
                <ProTeamHeader
                  isRadiantWin={!match.radiant_win ? true : false}
                  teamName={
                    match.dire_team?.name ?? (
                      <span className="text-xs text-gray-400">Team name not available.</span>
                    )
                  }
                  score={match.dire_score ?? 0}
                />
                <ProMatchLayout>
                  {direTeam &&
                    direTeam.map((player: any) => {
                      return <PlayerMatchInfo player={player} key={player.account_id} />;
                    })}
                </ProMatchLayout>
              </div>
            </div>
            <div className="flex-grow">
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
        </PrimaryLayout>
      );
    }
    default: {
      return (
        <PrimaryLayout>
          <PageHeaderBG />
          <div className=" bg-black/30">
            <div className="container mx-auto px-8 py-4 gap-2 flex justify-between items-center">
              <div className="w-56 space-y-2">
                <TextLoading />
                <TextLoading />
                <TextLoading />
              </div>
              <div className="w-56 space-y-2">
                <TextLoading />
                <TextLoading />
                <TextLoading />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-8 container mx-auto gap-4 p-8">
            <div className="2xl:col-span-2 xl:col-span-2 col-span-8">
              <div className="w-full h-12 bg-black/40 animate-pulse"></div>
              <div className="space-y-4 mt-4">
                <div className="w-full h-36 bg-black/40 animate-pulse"></div>
                <div className="w-full h-36 bg-black/40 animate-pulse"></div>
                <div className="w-full h-36 bg-black/40 animate-pulse"></div>
              </div>
            </div>
            <div className="2xl:col-span-3 xl:col-span-3 col-span-8">
              <div className="w-full h-96 bg-black/40 animate-pulse"></div>
            </div>
            <div className="2xl:col-span-3 xl:col-span-3 col-span-8">
              <div className="w-full h-96 bg-black/40 animate-pulse"></div>
            </div>
          </div>
        </PrimaryLayout>
      );
    }
  }
};

export default Match;
