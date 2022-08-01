import { useParams } from "react-router-dom";
import { formatDuration, formatStartTime, getHeroLevel, getImageUrl } from "../../utils";
import PageHeaderBG from "../components/Header/PageHeaderBG";
import PrimaryLayout from "../components/Layouts/PrimaryLayout";
import GoldAdvantage from "../components/Charts/GoldAdvantage";
import PlayerGPMChart from "../components/Charts/PlayerGPMChart";
import { useEffect, useState } from "react";
import ChartLayout from "../components/Layouts/ChartLayout";
import ChartHeader from "../components/Charts/ChartHeader";
import { FaCheckCircle, FaCoins } from "react-icons/fa";
import { TbSwords } from "react-icons/tb";
import { GiAbdominalArmor, GiAxeSword, GiShatteredSword } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
import { useGetMatch } from "../api";
import ErrorComponent from "../components/Error";
import ProMatchLayout from "../components/Layouts/ProMatchLayout";
import ProTeamHeader from "../components/Header/ProTeamHeader";
import PlayerMatchInfo from "../components/Players";
import { GAME_MODES } from "../../utils/constants";
import TextLoading from "../components/Utilility/TextLoading";

type Props = {};

const Match = (props: Props) => {
  const { id } = useParams();

  const [isTeam, setIsTeam] = useState<boolean>(true);
  const [isXP, xpTeamToggle] = useState<boolean>(true);
  const [radiantTeam, setRadiantTeam] = useState<any>(null);
  const [direTeam, setDireTeam] = useState<any>(null);
  const { data: match, status, isFetched, isError } = useGetMatch(id ?? "");
  const level = getHeroLevel;

  useEffect(() => {
    if (match && isFetched && status === "success") {
      const rTeam = match.players.filter((player: any) => player.player_slot <= 10);
      const dTeam = match.players.filter((player: any) => player.player_slot > 10);
      setRadiantTeam(rTeam);
      setDireTeam(dTeam);
    }
  }, [status]);

  // Gets XP || Gold Team Advantage

  // https://github.com/odota/web/blob/master/src/components/Visualizations/Graph/MatchGraph.jsx
  // players XP || players gold avantage
  // const playerAdvantage = (type: string) => {
  //   const data: any = [];
  //   const keys: any = [];
  //   if (testData.players[0] && testData.players && testData.players[0][type]) {
  //     testData.players[0][type].forEach((_: any, index: number) => {
  //       const obj = { time: `${index}:00` };
  //       testData.players.map((player) => {
  //         const hero = player.hero_id;
  //         obj[hero] = player[type][index];
  //       });
  //       data.push(obj);
  //     });
  //     testData.players.map((p) => {
  //       keys.push(Number(p.hero_id));
  //     });
  //   }

  //   return { data, keys };
  // };

  // const { data: gold, keys: goldKeys } = playerAdvantage("gold_t");
  // const { data: xp, keys: xpKeys } = playerAdvantage("xp_t");
  // const { data: goldTeamAdv } = teamAdvantage("gold");
  // const { data: xpTeamAdv } = teamAdvantage("xp");
  if (isError) {
    return <ErrorComponent />;
  }

  switch (status) {
    case "success": {
      return (
        <PrimaryLayout className="">
          <PageHeaderBG />
          <div className=" bg-black/30">
            <div className="container mx-auto px-8 py-4 gap-2 flex justify-between items-center">
              <div>
                <h4 className="text-sm font-semibold">{match.match_id} </h4>
                <p className="text-sm">{formatDuration(match.duration)}</p>
                <p className="text-sm capitalize">
                  {GAME_MODES[match.game_mode].name.split("_").join(" ")}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm">{match.league.name}</p>
                <p className="text-sm capitalize">{match.league.tier}</p>
                <p className="text-sm">{formatStartTime(match.start_time, match.duration)}</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-8 container mx-auto gap-4 p-4">
            <div className="2xl:col-span-2 xl:col-span-2 col-span-8">
              <div className="w-full  h-auto rounded p-4">
                <div>
                  <ProTeamHeader
                    isRadiantWin={match.radiant_win}
                    teamName={match.radiant_team.name}
                    score={match.radiant_score}
                  />
                  <ProMatchLayout>
                    {radiantTeam &&
                      radiantTeam.map((player: any) => (
                        <div
                          className="p-4 bg-black/30 w-full flex gap-4 items-center rounded min-w-[150px]"
                          key={player.account_id}>
                          <div>
                            <img src={getImageUrl(player.hero_id, "")} className="w-8 h-8" />
                            <p className="text-xs mt-2 text-center w-fit mx-auto">
                              {level(player.xp_t[player.xp_t.length - 1])}
                            </p>
                          </div>
                          <div className="space-y-0.5">
                            {/* <p>{}</p> */}
                            <h4>{player.name ? player.name : player.personaname}</h4>
                            <p className="text-xs flex items-center">
                              {player.kills}/{player.deaths}/{player.assists}
                            </p>
                            <div className="pt-2 flex items-center gap-2">
                              <div
                                className="flex items-center text-xs tooltip"
                                data-tip="Hero Damage">
                                <GiShatteredSword className="w-4 h-4 mr-1" />
                                {new Intl.NumberFormat("en-US").format(
                                  Number(player.hero_damage ?? 0),
                                )}
                              </div>
                              <div
                                className="flex items-center text-xs tooltip"
                                data-tip="Net Worth">
                                <FaCoins className="mr-2" />
                                {new Intl.NumberFormat("en-US").format(
                                  Number(player.net_worth ?? 0),
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </ProMatchLayout>
                </div>
              </div>
              <div className="w-full  h-auto rounded p-4">
                <ProTeamHeader
                  isRadiantWin={!match.radiant_win ? true : false}
                  teamName={match.dire_team.name}
                  score={match.dire_score}
                />
                <ProMatchLayout>
                  {direTeam &&
                    direTeam.map((player: any) => {
                      return <PlayerMatchInfo player={player} key={player.account_id} />;
                    })}
                </ProMatchLayout>
              </div>
            </div>
            <ChartLayout breakPointMax="8" breakPointMin="3" isLoading={!match}>
              <ChartHeader title="Gold" toggle={isTeam} setToggle={setIsTeam} />

              {isTeam ? (
                <GoldAdvantage match={match} type="gold" />
              ) : (
                <PlayerGPMChart match={match} type="gold" />
              )}
            </ChartLayout>
            <ChartLayout breakPointMax="8" breakPointMin="3" isLoading={!match}>
              <ChartHeader title="XP" toggle={isXP} setToggle={xpTeamToggle} />

              {isXP ? (
                <GoldAdvantage match={match} type="xp" />
              ) : (
                <PlayerGPMChart match={match} type="xp" />
              )}
            </ChartLayout>
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
