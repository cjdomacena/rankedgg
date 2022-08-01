import { ATTRIBUTE_LEVELS, GAME_MODES, XP_LEVEL } from "./constants";
import {
  Attributes,
  BenchMarkType,
  TAghsShard,
  TAllAbilities,
  THero,
  THeroTrend,
} from "./../src/types/index";
import { HEROES } from "./heroes";
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

export const getImageUrl = (heroIndex: number | null | string, src: string = "") => {
  return heroIndex
    ? import.meta.env.VITE_IMAGE_CDN + HEROES[heroIndex].icon
    : import.meta.env.VITE_IMAGE_CDN + src;
};

export const getAbilityImage = (type: string) => {
  return (
    import.meta.env.VITE_IMAGE_CDN +
    `apps/dota2/images/dota_react/icons/hero_${type.toLowerCase()}.png`
  );
};

export const getHeroAbilityImage = (src: string) => {
  return import.meta.env.VITE_IMAGE_CDN + src;
};

export const formatDuration = (duration: number) => {
  if (!Number.isNaN(duration) && Number.isFinite(duration)) {
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);
    if (String(seconds).length < 2) {
      return `${minutes}:0${seconds}`;
    }
    return `${minutes}:${seconds}`;
  }
  return null;
};

export const formatStartTime = (startTime: number, duration: number) => {
  // THANK YOU!! https://stackoverflow.com/questions/13903897/javascript-return-number-of-days-hours-minutes-seconds-between-two-dates

  const startDate = new Date((startTime + duration) * 1000);
  const today = new Date();
  let delta = Math.abs(today.valueOf() - startDate.valueOf()) / 1000;
  const result = {};
  // calculate (and subtract) whole days
  const days = Math.floor(delta / 86400);
  result["days"] = days;
  delta -= days * 86400;

  // calculate (and subtract) whole hours
  const hours = Math.floor(delta / 3600) % 24;
  result["hours"] = hours;
  delta -= hours * 3600;

  // calculate (and subtract) whole minutes
  const minutes = Math.floor(delta / 60) % 60;
  result["minutes"] = minutes;
  delta -= minutes * 60;

  if (result["days"] > 0 && result["days"] < 27) {
    return result["days"] > 1 ? `${result["days"]} days ago` : `${result["days"]} day ago`;
  } else if (result["hours"] > 0) {
    return result["hours"] > 1 ? `${result["hours"]} hours ago` : `${result["hours"]} hour ago`;
  } else if (result["minutes"] > 0) {
    return result["minutes"] > 1
      ? `${result["minutes"]} minutes ago`
      : `${result["minutes"]} minute ago`;
  } else {
    return new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(startDate);
  }
};

export const calculateAttackSpeedInSec = (attack_rate: number, base_agi: number) => {
  const attackSpeed = attack_rate / (1 + base_agi / 100);
  return Math.round((attackSpeed + Number.EPSILON) * 100) / 100;
};

export const calculateRegen = (base_str: number) => {
  const MULTIPLIER = 0.1;
  return MULTIPLIER * base_str;
};

export const calculateAttackSpeed = (attack_rate: number, base_agi: number) => {
  return Math.round((1.62 / (attack_rate / (1 + (1.25 * base_agi) / 100))) * 100);
};

export const calculateMinMaxDamage = (
  base_agi: number,
  base_int: number,
  base_str: number,
  base_attack_min: number,
  base_attack_max: number,
  primary_attr: string,
  rangeSlider: number,
  gain: number = 1,
) => {
  let attribute = 0;
  switch (primary_attr) {
    case "agi":
      attribute = base_agi;
      break;
    case "int":
      attribute = base_int;
      break;
    case "str":
      attribute = base_str;
      break;
    default:
      attribute = 1;
      break;
  }

  const addedLevels = ATTRIBUTE_LEVELS[rangeSlider] ?? 0;
  return {
    min: Math.floor(attribute + (base_attack_min + rangeSlider * gain) + addedLevels),
    max: Math.floor(attribute + base_attack_max + rangeSlider * gain + addedLevels),
  };
};

export const calculateArmor = (
  base_armor: number,
  base_agi: number,
  agi_gain: number,
  rangeSlider: number,
) => {
  const armorModifer = 0.16;
  const addedLevels = ATTRIBUTE_LEVELS[rangeSlider] ?? 0;

  const armor =
    base_armor +
    (base_agi +
      ((rangeSlider - 1) * agi_gain +
        (rangeSlider - 1) * (agi_gain * armorModifer) +
        addedLevels * armorModifer)) /
      6;

  return armor.toFixed(1);
};

export const calculateAttributeLevel = (base: number, level: number, gain: number) => {
  const addedLevels = ATTRIBUTE_LEVELS[level] ?? 0;
  return Math.round(base + (level - 1) * gain + addedLevels);
};

export const calculateHealth = (
  base_health: number,
  base_str: number,
  str_gain: number,
  level: number,
  type: string,
) => {
  let multiplier = 18;
  if (type === "str") {
    multiplier = 22.5;
  }
  const hpFromStrength = Math.round((str_gain * (level - 1) + base_str) * multiplier);
  const addedLevels = ATTRIBUTE_LEVELS[level] ?? 0;
  return hpFromStrength + addedLevels + 200;
};

export const calculateMana = (
  base_health: number,
  base_int: number,
  int_gain: number,
  level: number,
  type: string,
) => {
  let multiplier = 12;
  if (type === "int") {
    multiplier = 75;
  }
  const hpFromInt = Math.round((int_gain * (level - 1) + base_int) * multiplier);
  const addedLevels = ATTRIBUTE_LEVELS[level] ?? 0;
  return hpFromInt + addedLevels + 75;
};

export const getPrimaryGain = (
  primary_attr: keyof typeof Attributes | string,
  agi_gain: number,
  str_gain: number,
  int_gain: number,
) => {
  switch (primary_attr) {
    case "agi":
      return agi_gain;
    case "str":
      return str_gain;
    case "int":
      return int_gain;
    default:
      return 0;
  }
};

export const getAbilityInfo = (abilityList: string[], allAbilities: TAllAbilities[]) => {
  const abilities: TAllAbilities[] = [];
  abilityList.map((ability: string) => abilities.push(allAbilities[ability]));
  return abilities;
};

export const getAghsShardDesc = (heroId: number, aghsShardList: TAghsShard[]) => {
  const result = aghsShardList.find((desc) => desc.hero_id === heroId);
  return result ?? null;
};

export const getGameModeName = (gameMode: string | number) => {
  return GAME_MODES[gameMode].name.split("_").join(" ");
};

export const getHeroLevel = (xp: number) => {
  if (xp === XP_LEVEL[XP_LEVEL.length - 1]) {
    return 30;
  }

  if (xp >= 0 && xp <= XP_LEVEL[XP_LEVEL.length - 1]) {
    const tXP = [...XP_LEVEL];
    tXP.push(xp);

    const sortedXP = tXP.sort((a, b) => a - b);
    return sortedXP.findIndex((e) => e === xp);
  }
  return 0;
};

export const getHighlightedPlayers = (
  players: any,
  type: keyof typeof BenchMarkType,
  title: string,
) => {
  const result: { heroId: number; value: number; name: string; title: string; isRadiant: boolean }[] =
    [];
  players.map((player: any) => {
    const { hero_id, name, personaname, isRadiant } = player;
    result.push({
      heroId: hero_id,
      value: player[type],
      name: name ?? personaname,
      title: title,
      isRadiant: isRadiant,
    });
  });

  const sortedResult = result.sort((a: any, b: any) => Number(b.value) - Number(a.value));
  return sortedResult[0] ?? null;
};
