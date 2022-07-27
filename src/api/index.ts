import { DEFAULT_HERO_TREND } from "./../../utils/constants";
import { filterHeroes, cleanHeroStats } from "./../../utils/index";
import { THero, TFilteredHeroes } from "./../types/index";
import { useQuery } from "@tanstack/react-query";
import { Dispatch, SetStateAction } from "react";

const BASE_URL = "https://api.opendota.com/api";

const queryConfig = {
  refetchOnWindowFocus: true,
  staleTime: 15 * 60 * 1000, // 15 minutes
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
    },
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
      return { agility: agility, intelligence: intelligence, strength: strength };
    },
    {
      ...queryConfig,
    },
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
    { ...queryConfig, placeholderData: DEFAULT_HERO_TREND },
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
    { ...queryConfig, placeholderData },
  );
};

export const useGetPublicMatches = () => {
  return useQuery(
    ["public_matches"],
    async () => {
      const req = await fetch(`${BASE_URL}/publicMatches`);
      const res = await req.json();
      return res;
    },
    { ...queryConfig },
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
    { ...queryConfig },
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
    { ...queryConfig },
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
     { ...queryConfig },
   );
}
