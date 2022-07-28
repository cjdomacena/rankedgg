import React from 'react'
import { BiCheckCircle, BiXCircle } from 'react-icons/bi';

type Props = {
  radiantName: string;
  radiantWin: boolean;
  radiantScore: number;
  direScore: number;
  direName: string;
};

const ProMatch = ({radiantName, radiantWin, radiantScore, direScore, direName}: Props) => {
  return (
    <div className="bg-black/40 w-full rounded p-4 shadow-2xl border-black/20 border">
      <div className="flex gap-4 items-center justify-between">
        <div className="flex items-center gap-1 w-36 justify-start tooltip" data-tip={radiantName}>
          {radiantWin ? (
            <BiCheckCircle className="text-green-500" />
          ) : (
            <BiXCircle className="text-red-500" />
          )}
          <h1
            className={`${
              radiantWin ? "text-white" : "font-normal text-gray-400"
            } text-xs truncate w-24 text-left`}>
            {radiantName}
          </h1>
        </div>
        <div className="text-xs whitespace-nowrap tooltip" data-tip="Score">
          <p className="text-gray-100 font-bold">
            {radiantScore} : {direScore}
          </p>
          <p className="text-gray-400">Match Score</p>
        </div>
        <div className="flex items-center gap-1 w-36 justify-end tooltip" data-tip={direName}>
          <h1
            className={`${
              !radiantWin ? "text-white" : "font-normal text-gray-400"
            } text-xs truncate w-24 text-right`}>
            {direName}
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
}

export default ProMatch