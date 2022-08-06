import { Dispatch, SetStateAction, useState } from "react";

type Props = {
  maxWins: number;
  maxGames: number;
  wins: number;
  setWins: Dispatch<SetStateAction<number>>;
  games: number;
  setGames: Dispatch<SetStateAction<number>>;
  setIsInitialWins: Dispatch<SetStateAction<boolean>>;
  setIsInitialGames: Dispatch<SetStateAction<boolean>>;
  isInitialWins: boolean;
  isInitialGames: boolean;
};

const FilterWinsAndGames = ({
  maxWins,
  maxGames,
  wins,
  games,
  setWins,
  setGames,
  isInitialWins,
  setIsInitialWins,
  isInitialGames,
  setIsInitialGames,
}: Props) => {
  return (
    <div className="flex gap-4 2xl:flex-nowrap xl:flex-nowrap lg:flex-nowrap flex-wrap mb-4 rounded px-4">
      <div className="input input-group-md flex items-center relative focus-within:ring-2 focus-within:ring-neutral w-full ring-2 ring-white/5">
        <input
          type="number"
          placeholder={`Wins > (Default: ${25})`}
          className="appearance-none input input-ghost focus:outline-0 px-1 w-full"
          min={1}
          max={Number(maxWins)}
          onChange={(e) => {
            setIsInitialWins(false);
            setWins(Number(e.currentTarget.value));
          }}
          value={wins === 0 || isInitialWins ? "" : wins}
        />
        <button
          className="absolute top-2 right-2 z-20"
          onClick={() => setWins(0)}
        >
          <kbd className="kbd kbd-md">Clear</kbd>
        </button>
      </div>

      <div className="input input-group-md flex items-center relative focus-within:ring-2 focus-within:ring-neutral w-full ring-2 ring-white/5">
        <input
          type="number"
          placeholder={`Games > (Default: ${50})`}
          className="appearance-none input input-ghost focus:outline-0 px-1 w-full"
          min={1}
          max={maxGames}
          onChange={(e) => {
            setIsInitialGames(false);
            setGames(Number(e.currentTarget.value));
          }}
          value={games === 0 || isInitialGames ? "" : games}
        />

        <button
          className="absolute top-2 right-2 z-20"
          onClick={() => setGames(0)}
        >
          <kbd className="kbd kbd-md">Clear</kbd>
        </button>
      </div>
    </div>
  );
};

export default FilterWinsAndGames;
