import { useParams } from "react-router-dom";
import { formatDuration, getGameModeName } from "../../utils";
import { testData } from "../../utils/constants";
import { TeamImageExists } from "../../utils/hooks";
import PageHeaderBG from "../components/Header/PageHeaderBG";
import PrimaryLayout from "../components/Layouts/PrimaryLayout";
import GoldAdvantage from "../components/Charts/GoldAdvantage";
import PlayerGPMChart from "../components/Charts/PlayerGPMChart";
import { useState } from "react";
import { FaCoins } from "react-icons/fa";

type Props = {};

const Match = (props: Props) => {
  const { id } = useParams();

  const [isTeam, setIsTeam] = useState<boolean>(true);

  const goldAdv = () => {
    const data: any = [];
    testData.radiant_gold_adv.map((g, index) =>
      data.push({
        name: `${index}:00`,
        value: Number(g),
      }),
    );
    return data;
  };

  // https://github.com/odota/web/blob/master/src/components/Visualizations/Graph/MatchGraph.jsx
  const playerGold = () => {
    const data: any = [];
    const keys: any = [];
    if (testData.players[0] && testData.players && testData.players[0].gold_t) {
      testData.players[0].gold_t.forEach((_, index) => {
        const obj = { time: `${index}:00` };
        testData.players.map((player) => {
          const hero = player.hero_id;
          obj[hero] = player.gold_t[index];
        });
        data.push(obj);
      });
      testData.players.map((p) => {
        keys.push(Number(p.hero_id));
      });
    }

    return { data, keys };
  };

  const { data, keys } = playerGold();
  const t = [
    {
      player: 1,
      1: 5,
      2: 5,
      3: 15,
      4: 140,
    },
    {
      player: 2,
      1: 1,
      2: 15,
      3: 125,
      4: 350,
    },
  ];

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
      <div className="grid grid-cols-7 container mx-auto">
        <div
          className="mx-auto p-4 space-y-12 flex flex-col w-full
        2xl:col-span-2 xl:col-span-2 lg:col-span-3 col-span-7 
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
                  <div className="bg-black/60 w-20 h-20 absolute top-0 rounded-full grid place-items-center">
                    <div className="text-center">
                      <h4 className="text">{testData.radiant_score}</h4>
                      {testData.radiant_win ? (
                        <h4 className="text-sm text-green-500"> Victory</h4>
                      ) : (
                        <h4 className="text-sm text-red-500"> Defeat</h4>
                      )}
                    </div>
                  </div>
                </div>
                <h2 className="text-center max-w-[80] text-sm">{testData.radiant_team.name}</h2>
              </div>
              <div className="text-center relative 2xl:w-fit xl:w-fit lg:w-fit md:w-fit w-full text-xs">
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
                  <div className="bg-black/60 w-20 h-20 absolute top-0 rounded-full grid place-items-center">
                    <div className="text-center">
                      <h4 className="text">{testData.dire_score}</h4>
                      {!testData.radiant_win ? (
                        <h4 className="text-sm text-green-500"> Victory</h4>
                      ) : (
                        <h4 className="text-sm text-red-500"> Defeat</h4>
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
        <div className="w-full 2xl:col-span-5 xl:col-span-5 lg:col-span-5 col-span-7 mx-auto h-80 rounded">
          <div className="bg-black/50 flex items-center justify-center px-6 py-2 rounded-t">
            <h2 className="text-white font-semibold text-sm  flex items-center">
              <FaCoins className="text-[#f4d54b] w-4 h-4 mr-1" />
              {isTeam ? "Team" : "Players"}
            </h2>
            <ul className="text-xs flex btn-group w-fit ml-auto p-4 ">
              <button
                className={`btn btn-xs ${isTeam ? "btn-active" : ""}`}
                onClick={() => setIsTeam(true)}>
                Team
              </button>
              <button
                className={`btn btn-xs ${!isTeam ? "btn-active" : ""}`}
                onClick={() => setIsTeam(false)}>
                Players
              </button>
            </ul>
          </div>
          {isTeam ? (
            <GoldAdvantage data={goldAdv()} setter={setIsTeam} isActive={isTeam} />
          ) : (
            <PlayerGPMChart data={data} keys={keys} />
          )}
        </div>
      </div>
    </PrimaryLayout>
  );
};

export default Match;
