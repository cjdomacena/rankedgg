import { DEFAULT_HERO_TREND } from "./../../utils/constants";
import { filterHeroes, filterTeams } from "./../../utils/index";
import { TAghsShard, THero, TTeam } from "./../types/index";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const BASE_URL = "https://api.opendota.com/api";

const queryConfig = {
  refetchOnWindowFocus: false,
  staleTime: 15 * 60 * 1000, // 15 minutes
  cacheTime: 15 * 60 * 1000,
};

export const useInitialHeroes = () => {
  return useQuery(
    ["initialHeroes"],
    async () => {
      const req = await fetch(`${BASE_URL}/constants/heroes`);
      const res = await req.json();
      return res;
    },
    {
      ...queryConfig,
      select: React.useCallback((data: THero[]) => data, []),
    }
  );
};

export const useHeroes = () => {
  return useQuery(
    ["heroes"],
    async () => {
      const req = await fetch(`${BASE_URL}/constants/heroes`);
      const res = await req.json();
      const toArrayData: THero[] = Object.values(res);
      const agility = filterHeroes("agi", toArrayData);
      const intelligence = filterHeroes("int", toArrayData);
      const strength = filterHeroes("str", toArrayData);
      return {
        agility: agility,
        intelligence: intelligence,
        strength: strength,
      };
    },
    {
      ...queryConfig,
    }
  );
};

export const useHeroStats = () => {
  return useQuery(
    ["heroStats"],
    async () => {
      const req = await fetch(`${BASE_URL}/heroStats`);
      const res = await req.json();
      return res;
    },
    { ...queryConfig, placeholderData: DEFAULT_HERO_TREND }
  );
};

export const useGetSingleMatch = (teamA: string, teamB: string) => {
  const teamAList = "teamA=" + teamA.split(",").join("&teamA=");
  const teamBList = "&teamB=" + teamB.split(",").join("&teamB=");
  const url = `${BASE_URL}/findMatches?${teamAList}${teamBList}`;
  const placeholderData = [
    {
      match_id: 6670102409,
      teama: [59, 6, 26, 81, 91],
      teamb: [57, 112, 18, 80, 61],
      teamawin: false,
      start_time: 1658322712,
    },
  ];

  return useQuery(
    [teamAList, teamBList],
    async () => {
      const req = await fetch(url);
      const res = await req.json();
      return res;
    },
    { ...queryConfig, placeholderData }
  );
};

export const useGetPublicMatches = () => {
  return useQuery(
    ["public_matches"],
    async () => {
      const req = await fetch(`${BASE_URL}/publicMatches?mmr_descending=1`);
      const res = await req.json();
      return res;
    },
    { ...queryConfig }
  );
};

export const useGetProMatches = () => {
  return useQuery(
    ["proMatches"],
    async () => {
      const req = await fetch(`${BASE_URL}/proMatches`);
      const res = await req.json();
      return res;
    },
    { ...queryConfig }
  );
};

export const useHeroAbilities = () => {
  return useQuery(
    ["abilities"],
    async () => {
      const req = await fetch(`${BASE_URL}/constants/hero_abilities`);
      const res = await req.json();
      return res;
    },
    { ...queryConfig }
  );
};

export const useAllAbilities = () => {
  return useQuery(
    ["all-abilities"],
    async () => {
      const req = await fetch(`${BASE_URL}/constants/abilities`);
      const res = await req.json();
      return res;
    },
    { ...queryConfig }
  );
};

export const useAghsShardDesc = () => {
  return useQuery(
    ["aghs"],
    async () => {
      const req = await fetch(`${BASE_URL}/constants/aghs_desc`);
      const res = await req.json();
      return res;
    },
    {
      ...queryConfig,
      select: React.useCallback((data: TAghsShard[]) => data, []),
    }
  );
};

export const useGetMatch = (matchId: string | number) => {
  return useQuery(
    [matchId],
    async () => {
      const req = await fetch(`${BASE_URL}/matches/${matchId}`);
      const res = await req.json();
      return res;
    },
    { ...queryConfig }
  );
};

export const useGetTeams = () => {
  return useQuery(
    ["teams"],
    async () => {
      const req = await fetch(`${BASE_URL}/teams`);
      const res = await req.json();
      return res;
    },
    {
      ...queryConfig,
      select: React.useCallback((data: TTeam[]) => filterTeams(data), []),
    }
  );
};

export const useGetMatchUp = (id: number | string) => {
  return useQuery(
    ["matchup", id],
    async () => {
      const req = await fetch(`${BASE_URL}/heroes/${id}/matchups`);
      const res = await req.json();
      return res;
    },
    {
      ...queryConfig,
    }
  );
};

export const useGetTeam = (id: number | string) => {
  return useQuery(
    ["team", id],
    async () => {
      const req = await fetch(`${BASE_URL}/teams/${id}`);
      const res = await req.json();
      return res;
    },
    {
      ...queryConfig,
    }
  );
};

export const useGetTeamHeroes = (id: number | string) => {
  return useQuery(
    ["teamHeroes", id],
    async () => {
      const req = await fetch(`${BASE_URL}/teams/${id}/heroes`);
      const res = await req.json();
      return res;
    },
    {
      ...queryConfig,
    }
  );
};

export const useGetPlayers = (id: number | string) => {
  return useQuery(
    ["players", id],
    async () => {
      const req = await fetch(`${BASE_URL}/teams/${id}/players`);
      const res = await req.json();
      return res;
    },
    {
      ...queryConfig,
    }
  );
};

export const useGetHeroBenchmark = (id: number | string) => {
  return useQuery(
    ["benchmark", id],
    async () => {
      const req = await fetch(`${BASE_URL}/benchmarks?hero_id=${id}`);
      const res = await req.json();
      return res;
    },
    {
      ...queryConfig,
    }
  );
};
