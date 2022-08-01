import React from "react";
import { BiCheckCircle, BiXCircle } from "react-icons/bi";

type Props = {
  radiantName: string;
  radiantWin: boolean;
  radiantScore: number;
  direScore: number;
  direName: string;
};

const ProMatch = ({ radiantName, radiantWin, radiantScore, direScore, direName }: Props) => {
  return (
    <div className="bg-black/40 w-full rounded p-4 shadow-2xl border-black/20 border">
      <div className="flex gap-4 items-center 2xl:justify-between xl:justify-between lg:justify-between md:justify-between justify-center flex-wrap">
        <div
          className="flex items-center gap-1 w-36  tooltip xl:justify-start lg:justify-start md:justify-start justify-center"
          data-tip={radiantName}>
          {radiantWin ? (
            <BiCheckCircle className="text-green-500" />
          ) : (
            <BiXCircle className="text-red-500" />
          )}
          <h1
            className={`${
              radiantWin ? "text-white font-semibold" : "font-normal text-gray-400"
            } text-sm truncate w-auto 2xl:text-left xl:text-left lg:text-left md:text-left text-center`}>
            {radiantName}
          </h1>
        </div>
        <div
          className="text-lg  tooltip 2xl:w-fit xl:w-fit lg:w-fit md:w-fit w-full"
          data-tip="Score">
          <p className="text-gray-300 font-semibold">
            {radiantScore} - {direScore}
          </p>
        </div>
        <div
          className="flex items-center gap-1 w-36 2xl:justify-end xl:justify-end lg:justify-end md:justify-end justify-center tooltip
          2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-row-reverse
          "
          data-tip={direName}>
          <h1
            className={`${
              !radiantWin ? "text-white font-semibold" : "font-normal text-gray-400"
            } text-sm w-auto 2xl:text-right xl:text-right lg:text-right md:text-right text-center whitespace-nowrap`}>
            {direName ?? "N/A"}
          </h1>
          {!radiantWin ? (
            <BiCheckCircle className="text-green-500 w-4 h-4" />
          ) : (
            <BiXCircle className="text-red-500" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProMatch;
