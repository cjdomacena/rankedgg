import { DEFAULT_HERO_TREND } from './../../utils/constants';
import { filterHeroes, cleanHeroStats } from "./../../utils/index";
import { THero, TFilteredHeroes } from "./../types/index";
import { useQuery } from "react-query";
import { Dispatch, SetStateAction } from "react";

const BASE_URL = "https://api.opendota.com/api";

const queryConfig = {
  refetchOnWindowFocus: false,
  staleTime: 15 * 60 * 1000, // 15 minutes
};

export const useHeroes = () => {
  return useQuery(
    ["heroes"],
    async () => {
      const req = await fetch(`${BASE_URL}/constants/heroes`);
      const res = await req.json();
      const toArrayData:THero[] = Object.values(res);
      const agility = filterHeroes("agi", toArrayData);
      const intelligence = filterHeroes("int", toArrayData);
      const strength = filterHeroes("str", toArrayData);
       return { agility: agility, intelligence: intelligence, strength: strength};
    },
    {
      ...queryConfig,
    },
  );
};

export const useHeroStats = () => {
  return useQuery(['heroStats'], async () => {
    const req = await fetch(`${BASE_URL}/heroStats`);
    const res = await req.json();
    return res;
  },{...queryConfig, placeholderData: DEFAULT_HERO_TREND})
}