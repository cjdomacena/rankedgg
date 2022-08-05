import React from "react";
import { Link } from "react-router-dom";
import { formatStartTime } from "../../../utils";
import { ImageExists } from "../../../utils/hooks";

type Props = {
  team: any;
  index?: number;
};

const TeamCard = ({ team, index }: Props) => {
  return (
    <div className="p-2 bg-black/30 w-full rounded flex justify-center shadow-xl relative ">
      <div className="px-4 pt-8 pb-6 text-center">
        <ImageExists
          src={team.logo_url ?? ""}
          alt={team.name}
          className="w-auto h-24 mx-auto"
        />

        <div className="mt-4">
          <Link
            to={`/teams/${team.team_id}`}
            className="cursor-pointer hover:underline"
          >
            <h1 className="text-center text-white font-bold text-lg">
              {team.name}
            </h1>
          </Link>
          <p className="text-sm">{team.tag}</p>
        </div>
        <div className="mt-4">
          <ul className="flex justify-between gap-4">
            <li>
              <p className="text-2xs">Rating</p>
              <p className="text-white font-semibold">{team.rating}</p>
            </li>
            <li>
              <p className="text-2xs">Wins</p>
              <p className="text-white font-semibold">{team.wins}</p>
            </li>
            <li>
              <p className="text-2xs">Losses</p>
              <p className="text-white font-semibold">{team.losses}</p>
            </li>
          </ul>
        </div>
        <div className="mt-4 text-xs">
          <p>Last Match</p>
          <p className="text-white">
            {formatStartTime(team.last_match_time, 0)}
          </p>
        </div>
      </div>

      {index ? (
        <span className="badge absolute right-4 top-4">#{index}</span>
      ) : null}
    </div>
  );
};

export default TeamCard;
