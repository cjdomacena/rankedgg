import React from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import {
  calculateAttackSpeed,
  calculateMinMaxDamage,
  getPrimaryGain,
  calculateArmor,
} from "../../../../utils";
import { THero, THeroStat } from "../../../types";

type Props = {
  icon: JSX.Element | JSX.Element[];
  title: string;
  stats: THeroStat[];
  level: number;
  hero: THero;
};

const HeroStat = ({ icon, title, stats, level, hero }: Props) => {
  const getValueById = (id: string, value: string | JSX.Element | number) => {
    switch (id) {
      case "damage": {
        const { min, max } = calculateMinMaxDamage(
          hero.base_agi,
          hero.base_int,
          hero.base_str,
          hero.base_attack_min,
          hero.base_attack_max,
          hero.primary_attr,
          level - 1,
          getPrimaryGain(hero.primary_attr, hero.agi_gain, hero.str_gain, hero.int_gain),
        );
        return (
          <>
            {min} - {max}
          </>
        );
      }
      case "armor": {
        return <>{calculateArmor(hero.base_armor, hero.base_agi, hero.agi_gain, level)}</>;
      }
      default: {
        return value;
      }
    }
  };

  return (
    <div className="w-full">
      <div className="text-lg flex items-center">
        {icon}
        <p className=" p-2 w-fit text-gray-100 font-semibold tracking-wide">{title}</p>
      </div>
      <ul className="text-xs bg-neutral p-4 rounded grid  gap-x-2 gap-y-2 drop-shadow-2xl w-full 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-2 ">
        {stats.map((stat, index) =>
          stat.hasTooltip ? (
            <li className="flex " key={`${title}-${index}`}>
              <div
                className="cursor-pointer tooltip tooltip-right tooltip-accent z-10"
                data-tip={stat.tooltipInfo}>
                <AiFillInfoCircle className="w-4 h-4 mr-1" />
              </div>
              <div className="flex gap-1 ">
                <p>{stat.title}: </p>
                <p>{getValueById(stat.id, stat.value)}</p>
              </div>
            </li>
          ) : (
            <li key={`${title}-${index}`}>
              <div className="flex gap-1">
                <p>{stat.title}: </p>
                <p>{getValueById(stat.id, stat.value)}</p>
              </div>
            </li>
          ),
        )}
      </ul>
    </div>
  );
};
export default HeroStat;
