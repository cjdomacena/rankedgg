import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaCheckCircle } from "react-icons/fa";

type Props = {
  isRadiantWin: boolean;
  teamName: string | JSX.Element;
  score: number;
};

const ProTeamHeader = ({ isRadiantWin, teamName, score }: Props) => {
  return (
    <div className="text-lg text-white font-semibold flex items-center gap-2">
      {isRadiantWin ? (
        <FaCheckCircle className="text-green-500" />
      ) : (
        <AiFillCloseCircle className="text-red-500" />
      )}
      <h4>
        {teamName} <span className="text-sm font-bold">{score}</span>
      </h4>
    </div>
  );
};

export default ProTeamHeader;
