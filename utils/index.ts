import { HERO_LIST, HERO_ICONS, ATTRIBUTE_LEVELS } from "./constants";
import { THero, THeroTrend } from "./../src/types/index";
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
    `/apps/dota2/images/dota_react/icons/hero_${type.toLowerCase()}.png`
  );
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

export const calculateHealthTotal = (base_str: number, base_health: number) => {
  const MULTIPLIER = 0.1;
  return base_health + base_str * MULTIPLIER;
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
    min: Math.floor(attribute + (base_attack_min + (rangeSlider - 1) * gain) + addedLevels),
    max: Math.floor(attribute + base_attack_max + (rangeSlider - 1) * gain + addedLevels),
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

  return armor.toFixed(2);
};
