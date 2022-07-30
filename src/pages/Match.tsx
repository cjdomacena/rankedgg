import React from "react";
import { useParams } from "react-router-dom";
import { formatDuration, getGameModeName } from "../../utils";
import {testData } from "../../utils/constants";
import { TeamImageExists } from "../../utils/hooks";
import PageHeaderBG from "../components/Header/PageHeaderBG";
import PrimaryLayout from "../components/Layouts/PrimaryLayout";
import { GiSwordsEmblem } from "react-icons/gi";

type Props = {};

const Match = (props: Props) => {
  const { id } = useParams();

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
      <div className="container mx-auto p-4 space-y-12 flex flex-col">
        <div className="flex flex-col 2xl:w-fit xl:w-fit lg:w-fit w-full space-y-4 ">
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
          <div className="rounded space-y-4">
           
          </div>
        </div>
      </div>
    </PrimaryLayout>
  );
};

export default Match;
