import React from "react";
import { getPlayerImage } from "../../../utils";
import { TPlayers } from "../../types";
import PlayerImage from "./PlayerImage";

type Props = {
  player: TPlayers;
  max: number;
};

const PlayerCard = ({ player, max }: Props) => {
  return (
    <div className="bg-black/30 p-4 space-y-2 rounded shadow flex items-center gap-4">
      <PlayerImage src={getPlayerImage(player.account_id ?? "")} />
      <div className="flex-grow">
        {player.name ? (
          <h1>{player.name}</h1>
        ) : (
          <h1 className="text-2xs text-gray-400">Name not available</h1>
        )}
        <div className="w-full">
          <label className="label p-0">
            <span className="label-text-alt">
              {player.wins ?? "Not available"} Wins
            </span>
            <span className="label-text-alt">{player.games_played} games</span>
          </label>
          <progress
            className="progress w-full progress-info bg-white/20"
            value={player.wins ?? 0}
            max={max}
          />
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
