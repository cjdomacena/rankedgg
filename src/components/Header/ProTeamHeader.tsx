import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

type Props = {
  isRadiantWin: boolean;
  teamName: string | JSX.Element;
  score: number;
  teamId: number;
};

const ProTeamHeader = ({ isRadiantWin, teamName, score, teamId }: Props) => {
  const navigate = useNavigate();
  return (
    <div className="text-lg text-white font-semibold flex items-center gap-2">
      {isRadiantWin ? (
        <FaCheckCircle className="text-green-500" />
      ) : (
        <AiFillCloseCircle className="text-red-500" />
      )}
      <button
        onClick={() => navigate(`/teams/${teamId}`)}
        disabled={teamId ? false : true}
      >
        <h4>
          <span className={`${teamId ? "hover:underline" : ""}`}>
            {teamName}
          </span>{" "}
          <span className="text-sm font-bold">{score}</span>
        </h4>
      </button>
    </div>
  );
};

export default ProTeamHeader;
