import { useState } from "react";
import {
  calculateArmor,
  calculateAttackSpeed,
  calculateAttackSpeedInSec,
  calculateMinMaxDamage,
  calculateRegen,
  getImageUrl,
} from "../../utils";
import PrimaryLayout from "../components/Layouts/PrimaryLayout";
import { TbSwords } from "react-icons/tb";
import AttributeStats from "../components/Heroes/Attributes";
import { Attributes } from "../types";
import { FaShieldAlt, FaRunning, FaDna } from "react-icons/fa";
import HeroStat from "../components/Heroes/Attributes/HeroStat";

type Props = {};
const hero = {
  id: 1,
  name: "npc_dota_hero_antimage",
  localized_name: "Anti-Mage",
  primary_attr: "agi",
  attack_type: "Melee",
  roles: ["Carry", "Escape", "Nuker"],
  img: "/apps/dota2/images/dota_react/heroes/antimage.png?",
  icon: "/apps/dota2/images/dota_react/heroes/icons/antimage.png?",
  base_health: 200,
  base_health_regen: 0.25,
  base_mana: 75,
  base_mana_regen: 0,
  base_armor: 0,
  base_mr: 25,
  base_attack_min: 29,
  base_attack_max: 33,
  base_str: 21,
  base_agi: 24,
  base_int: 12,
  str_gain: 1.6,
  agi_gain: 2.8,
  int_gain: 1.8,
  attack_range: 150,
  projectile_speed: 0,
  attack_rate: 1.4,
  move_speed: 310,
  turn_rate: null,
  cm_enabled: true,
  legs: 2,
};

export type THeroStat = {
  hasTooltip: boolean;
  tooltipInfo: string;
  title: string;
  value: string | number | JSX.Element;
};

const Hero = (props: Props) => {
  const armorModifer = 0.16;
  const [attributes, setAttributes] = useState([
    {
      type: Attributes.str,
      values: [
        {
          header: Attributes.str,
          value: hero.base_str,
        },
        {
          header: "Gain / level",
          value: `+${hero.str_gain}`,
        },
      ],
    },
    {
      type: Attributes.agi,
      values: [
        {
          header: Attributes.agi,
          value: `${hero.base_agi}`,
        },
        {
          header: "Gain / level",
          value: `+${hero.agi_gain}`,
        },
      ],
    },
    {
      type: Attributes.int,
      values: [
        {
          header: Attributes.int,
          value: hero.base_int,
        },
        {
          header: "Gain / level",
          value: `+${hero.int_gain}`,
        },
      ],
    },
  ]);
  const [rangeSlider, setRangeSlider] = useState(1);
  const handleRange = (e: any) => {
    setRangeSlider(e.currentTarget.value);
  };

  const getPrimaryGain = () => {
    switch (hero.primary_attr) {
      case "agi":
        return hero.agi_gain;
      case "str":
        return hero.str_gain;
      case "int":
        return hero.int_gain;
      default:
        return 0;
    }
  };

  const { min, max } = calculateMinMaxDamage(
    hero.base_agi,
    hero.base_int,
    hero.base_str,
    hero.base_attack_min,
    hero.base_attack_max,
    hero.primary_attr,
    rangeSlider,
    getPrimaryGain(),
  );
  const imgUrl = getImageUrl(null, hero.img);

  const attackStats = {
    icon: <TbSwords className="w-6 h-6" />,
    title: "Attack",
    stats: [
      {
        hasTooltip: true,
        tooltipInfo: "Nice",
        title: "Attack Speed",
        value: (
          <>
            {calculateAttackSpeed(hero.attack_rate, hero.base_agi)}
            <span className="text-xs">{` (${calculateAttackSpeedInSec(
              hero.attack_rate,
              hero.base_agi,
            )}s)`}</span>
          </>
        ),
      },
      {
        hasTooltip: true,
        tooltipInfo: "Nice",
        title: "Attack Range",
        value: hero.attack_range,
      },
      {
        hasTooltip: false,
        tooltipInfo: "",
        title: "Damage",
        value: (
          <>
            {min} - {max}
          </>
        ),
      },
    ],
  };

  const defenseStats = {
    icon: <FaShieldAlt className="w-6 h-6" />,
    title: "Defense",
    stats: [
      {
        hasTooltip: false,
        tooltipInfo: "Nice",
        title: "Armor",
        value: <>{calculateArmor(hero.base_armor, hero.base_agi, hero.agi_gain, rangeSlider)}</>,
      },
      {
        hasTooltip: false,
        tooltipInfo: "Nice",
        title: "Magic Resistance",
        value: hero.base_mr + "%",
      },
    ],
  };

  const mobilityStats = {
    icon: <FaRunning className="w-6 h-6" />,
    title: "Mobility",
    stats: [
      {
        hasTooltip: false,
        tooltipInfo: "Movement Speed",
        title: "Movement Speed",
        value: hero.move_speed,
      },
      {
        hasTooltip: false,
        tooltipInfo: "",
        title: "Turn Rate",
        value: hero.turn_rate ?? 0,
      },
    ],
  };

  const attrColors = {
    agi: "text-[#26e030]",
    str: "text-[#ec3d06]",
    int: "text-[#00d9ec]",
  };

  return (
    <PrimaryLayout className="self-center p-4 my-4">
      <div className="container mx-auto h-full grid grid-cols-7  overflow-x-hidden gap-4 grid-flow-row-dense">
        <img
          src={imgUrl}
          className="w-screen h-2/4 absolute top-0 -z-10 blur-[160px] opacity-1 left-0 select-none"
        />

        <section className="flex flex-wrap  w-full 2xl:col-span-2 lg:col-span-2  col-span-7 ">
          <div className="2xl:w-fit xl:w-fit lg:w-fit w-full space-y-8">
            <div className="w-full space-y-4">
              {/* Attack */}
              <HeroStat
                icon={attackStats.icon}
                title={attackStats.title}
                stats={attackStats.stats}
              />
              {/* Defense */}
              <HeroStat
                icon={defenseStats.icon}
                title={defenseStats.title}
                stats={defenseStats.stats}
              />
              {/* Mobility */}
              <HeroStat
                icon={mobilityStats.icon}
                title={mobilityStats.title}
                stats={mobilityStats.stats}
              />
            </div>

            {/* Attributes */}
            <div className="w-full">
              <div className="text-lg flex items-center">
                <div className="flex items-center">
                  <FaDna className="w-5 h-5" />
                  <p className=" w-fit p-2 text-gray-100 font-semibold tracking-wide">Attributes</p>
                </div>
                <div
                  className={`text-xs px-2 py-1 rounded-full text-neutral mt-1  ${
                    attrColors[hero.primary_attr]
                  } `}>
                  Primary: <span className="font-bold">{Attributes[hero.primary_attr]}</span>
                </div>
              </div>
              <div className="space-y-4">
                {attributes.map((attribute, index) => (
                  <AttributeStats
                    values={attribute.values}
                    type={attribute.type}
                    key={`${attribute.type}-${index}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="w-full  2xl:col-span-5 lg:col-span-5  col-span-7 h-fit 2xl:order-last lg:order-last order-first">
          <div className="text-lg flex items-center mb-4">
           <img src={imgUrl} className="w-auto h-16 object-fill" />
            <h4 className=" p-2 w-fit text-gray-100 font-semibold tracking-wide text-2xl">{hero.localized_name}</h4>
          </div>
          <div className="w-full h-auto bg-neutral flex items-center p-4 rounded">
            <div className="p-1 rounded-full bg-white/10">
              <img src={getImageUrl(hero.id, "")} className="w-6 h-6 " />
            </div>
            <input
              type="range"
              min="1"
              max="30"
              step="1"
              value={rangeSlider}
              className="w-full bg-transparent range range-xs mt-0.5 mx-4 opacity-90 flex-grow "
              onChange={handleRange}
            />
            <span className="text-xs mt-1 whitespace-nowrap">Level {rangeSlider}</span>
          </div>
        </section>
      </div>
    </PrimaryLayout>
  );
};

export default Hero;
