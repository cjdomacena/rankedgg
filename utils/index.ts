import { HERO_LIST, HERO_ICONS } from "./constants";
import { THero, THeroTrend } from "./../src/types/index";
export const filterHeroes = (type: string, heroes: THero[]) => {
  const filteredHeroes = heroes.filter((hero) => hero.primary_attr === type);
  return filteredHeroes;
};

export const filterSearchHero = (q: string, heroList: string[]): string[] => {
  const filteredHeroes = heroList.filter((hero) => {
    if (hero.includes(q.toLowerCase())) {
      return hero;
    }
  });
  return filteredHeroes;
};

export const formatHeroName = (name: string): string => {
  return name.split("-").join(" ").toLowerCase();
};

export const sortHeroesBy = () => {};

export const getPercentWinRate = (wins: number, picks: number) => {
  const total = (wins * 100) / picks;
  return Number(total.toPrecision(5));
};

export const cleanHeroStats = (heroStats: any) => {
  const cleanedHeroStats: any = [];
  const selectedKeys: string[] = [
    "id",
    "name",
    "localized_name",
    "icon",
    "hero_id",
    "turbo_picks",
    "turbo_wins",
    "pro_ban",
    "pro_win",
    "pro_pick",
    "1_pick",
    "1_win",
    "2_pick",
    "2_win",
    "3_pick",
    "3_win",
    "4_pick",
    "4_win",
    "5_pick",
    "5_win",
    "6_pick",
    "6_win",
    "7_pick",
    "7_win",
    "8_pick",
    "8_win",
  ];
  heroStats.map((stat: THeroTrend) => {
    let tempObj: any = {};
    Object.entries(stat).forEach(([key, value]) => {
      if (selectedKeys.indexOf(key.toString()) >= 0) {
        tempObj[key] = value;

        const tempKey = key.split("_");
        if (tempKey.length > 1 && isNaN(Number(tempKey[0])) === false) {
          tempObj[`${tempKey[0]}_wr`] = getPercentWinRate(
            stat[`${tempKey[0]}_win`],
            stat[`${tempKey[0]}_pick`],
          );
        }
        if (tempKey[0] === "pro") {
          tempObj[`${tempKey[0]}_wr`] = getPercentWinRate(
            stat[`${tempKey[0]}_win`],
            stat[`${tempKey[0]}_pick`],
          );
        }
      }
    });
    cleanedHeroStats.push(tempObj);
  });
  return cleanedHeroStats;
};

export const getImageUrl = (heroIndex: number | null, src: string = "") => {
  return heroIndex
    ? import.meta.env.VITE_IMAGE_CDN + HERO_ICONS[heroIndex]
    : import.meta.env.VITE_IMAGE_CDN + src;
};
