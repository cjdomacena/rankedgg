import { useParams } from "react-router-dom";
import { formatDuration, getGameModeName } from "../../utils";
import { testData } from "../../utils/testData";
import { TeamImageExists } from "../../utils/hooks";
import PageHeaderBG from "../components/Header/PageHeaderBG";
import PrimaryLayout from "../components/Layouts/PrimaryLayout";
import GoldAdvantage from "../components/Charts/GoldAdvantage";
import PlayerGPMChart from "../components/Charts/PlayerGPMChart";
import { useState } from "react";
import { FaAngleDoubleUp, FaCoins } from "react-icons/fa";
import { GrUpgrade } from "react-icons/gr";
import ChartLayout from "../components/Layouts/ChartLayout";
import ChartHeader from "../components/Charts/ChartHeader";
import DraftLayout from "../components/Layouts/DraftLayout";

type Props = {};

const Match = (props: Props) => {
  const { id } = useParams();

  const [isTeam, setIsTeam] = useState<boolean>(true);
  const [isXP, xpTeamToggle] = useState<boolean>(true);

  // Gets XP || Gold Team Advantage
  const teamAdvantage = (type: string) => {
    // const key: string = `radiant_${type}_adv`;
    const data: any = [];
    if (type === "gold") {
      testData.radiant_gold_adv.map((g: any, index: number) =>
        data.push({
          name: `${index}:00`,
          value: Number(g),
        }),
      );
    }
    if (type === "xp") {
      testData.radiant_xp_adv.map((g: any, index: number) =>
        data.push({
          name: `${index}:00`,
          value: Number(g),
        }),
      );
    }

    return { data };
  };

  // https://github.com/odota/web/blob/master/src/components/Visualizations/Graph/MatchGraph.jsx
  // players XP || players gold avantage
  const playerAdvantage = (type: string) => {
    const data: any = [];
    const keys: any = [];
    if (testData.players[0] && testData.players && testData.players[0][type]) {
      testData.players[0][type].forEach((_: any, index: number) => {
        const obj = { time: `${index}:00` };
        testData.players.map((player) => {
          const hero = player.hero_id;
          obj[hero] = player[type][index];
        });
        data.push(obj);
      });
      testData.players.map((p) => {
        keys.push(Number(p.hero_id));
      });
    }

    return { data, keys };
  };

  const { data: gold, keys: goldKeys } = playerAdvantage("gold_t");
  const { data: xp, keys: xpKeys } = playerAdvantage("xp_t");
  const { data: goldTeamAdv } = teamAdvantage("gold");
  const { data: xpTeamAdv } = teamAdvantage("xp");

  return (
    <PrimaryLayout className="my-8">
      <PageHeaderBG />
      <div className="container mx-auto">
        <div className=" p-4 breadcrumbs ">
          <ul className="text-sm ">
            <li>Pro Matches</li>
            <li>
              <h1 className="font-bold">{testData.match_id}</h1>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-8 container mx-auto gap-4">
        <div
          className="mx-auto p-4 space-y-12 flex flex-col w-full
        2xl:col-span-2 xl:col-span-2 lg:col-span-8 col-span-8 
        ">
          <div className="flex flex-col w-full space-y-4 ">
            <div className="flex items-center gap-4 text-white w-full bg-black/30 p-4 rounded shadow-2xl ring ring-white/5 flex-wrap justify-center">
              <div className="flex flex-col items-center gap-2 font-bold">
                <div className="relative">
                  <TeamImageExists
                    src={testData.radiant_team.logo_url}
                    isRadiantWin={testData.radiant_win}
                    isRadiant={true}
                  />
                  <div className="bg-black/60 w-full h-full absolute top-0  grid place-items-center">
                    <div className="text-center">
                      <h4 className="text-4xl">{testData.radiant_score}</h4>
                      {testData.radiant_win ? (
                        <h4 className="text-sm text-green-400"> Victory</h4>
                      ) : (
                        <h4 className="text-sm text-red-400"> Defeat</h4>
                      )}
                    </div>
                  </div>
                </div>
                <h2 className="text-center max-w-[80] text-sm">{testData.radiant_team.name}</h2>
              </div>
              <div className="text-center relative  w-full text-xs">
                <p className="font-semibold">{formatDuration(testData.duration)}</p>
                <span className="capitalize text-gray-300">
                  {getGameModeName(testData.game_mode)}
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 font-bold justify-center">
                <div className="relative  w-fit">
                  <TeamImageExists
                    src={testData.dire_team.logo_url}
                    isRadiantWin={testData.radiant_win}
                    isRadiant={false}
                  />
                  <div className="bg-black/60 w-full h-full absolute top-0  grid place-items-center">
                    <div className="text-center">
                      <h4 className="text-4xl">{testData.dire_score}</h4>
                      {!testData.radiant_win ? (
                        <h4 className="text-sm text-green-400"> Victory</h4>
                      ) : (
                        <h4 className="text-sm text-red-400"> Defeat</h4>
                      )}
                    </div>
                  </div>
                </div>
                <h2 className="text-sm font-semibold">{testData.dire_team.name}</h2>
              </div>
            </div>
            <div className="rounded space-y-4"></div>
          </div>
        </div>
        <ChartLayout breakPointMax="8" breakPointMin="3">
          <ChartHeader title="Gold" toggle={isTeam} setToggle={xpTeamToggle} />

          {isTeam ? (
            <GoldAdvantage data={goldTeamAdv} setter={setIsTeam} isActive={isTeam} type="gold" />
          ) : (
            <PlayerGPMChart data={gold} keys={goldKeys} />
          )}
        </ChartLayout>

        <ChartLayout breakPointMax="8" breakPointMin="3">
          <ChartHeader title="XP" toggle={isXP} setToggle={xpTeamToggle} />

          {isXP ? (
            <GoldAdvantage data={xpTeamAdv} setter={xpTeamToggle} isActive={isXP} type="xp" />
          ) : (
            <PlayerGPMChart data={xp} keys={xpKeys} type="xp" />
          )}
        </ChartLayout>
     
      </div>
    </PrimaryLayout>
  );
};

export default Match;
