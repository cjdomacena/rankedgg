import { useEffect, useState } from "react";
import {
  calculateArmor,
  calculateAttackSpeed,
  calculateAttackSpeedInSec,
  calculateMinMaxDamage,
  calculateRegen,
  getAbilityInfo,
  getAghsShardDesc,
  getImageUrl,
  getPrimaryGain,
} from "../../utils";
import PrimaryLayout from "../components/Layouts/PrimaryLayout";
import { TbSwords } from "react-icons/tb";
import AttributeStats from "../components/Heroes/Attributes";
import { Attributes, TAllAbilities, THero, THeroStat } from "../types";
import { FaShieldAlt, FaRunning, FaDna } from "react-icons/fa";
import HeroStat from "../components/Heroes/Attributes/HeroStat";
import { Link, useParams } from "react-router-dom";
import { useAghsShardDesc, useAllAbilities, useHeroAbilities, useInitialHeroes } from "../api";
import ErrorComponent from "../components/Error";
import HeroLevelSlider from "../components/Heroes/HeroLevelSlider";
import HeroHeader from "../components/Heroes/HeroHeader";
import Abilities from "../components/Heroes/Abilities";
import HealthAndMana from "../components/Heroes/Attributes/HealthAndMana";
import { AiFillCaretDown } from "react-icons/ai";

type Props = {};

type TAttribute = {
  type: Attributes;
  values: {
    id: string;
    header: Attributes | string;
    value: number | string;
  }[];
  gain: number;
  level: number;
};
type TSingleStat = {
  icon: JSX.Element | JSX.Element[];
  title: string;
  stats: THeroStat[];
};

const Hero = (props: Props) => {
  const attrColors = {
    agi: "text-[#26e030]",
    str: "text-[#ec3d06]",
    int: "text-[#00d9ec]",
  };
  const { id } = useParams();

  // Api Calls
  const { data: heroes, status } = useInitialHeroes();
  const { data: abilities } = useHeroAbilities();
  const { data: allAbilities } = useAllAbilities();
  const { data: aghs } = useAghsShardDesc();

  // States
  const [hero, setHero] = useState<THero | null>(null);
  const [attributes, setAttributes] = useState<null | TAttribute[]>(null);
  const [rangeSlider, setRangeSlider] = useState<number>(1);
  const [attack, setAttackStats] = useState<TSingleStat | null>(null);
  const [defense, setDefenseStats] = useState<TSingleStat | null>(null);
  const [mobility, setMobilityStats] = useState<TSingleStat | null>(null);
  const [heroAbilities, setHeroAbilities] = useState<TAllAbilities[] | null>(null);

  useEffect(() => {
    if (heroes && id) {
      const tempHero: THero = heroes[id];
      setHero(tempHero);
      setAttributes([
        {
          type: Attributes.str,
          values: [
            {
              id: "attribute",
              header: Attributes.str,
              value: tempHero.base_str,
            },
            {
              id: "value",
              header: "Gain / level",
              value: `+${tempHero.str_gain}`,
            },
          ],
          gain: tempHero.str_gain,
          level: 1,
        },
        {
          type: Attributes.agi,
          values: [
            {
              id: "attribute",
              header: Attributes.agi,
              value: `${tempHero.base_agi}`,
            },
            {
              id: "value",
              header: "Gain / level",
              value: `+${tempHero.agi_gain}`,
            },
          ],
          gain: tempHero.agi_gain,
          level: 1,
        },
        {
          type: Attributes.int,
          values: [
            {
              id: "attribute",
              header: Attributes.int,
              value: tempHero.base_int,
            },
            {
              id: "value",
              header: "Gain / level",
              value: `+${tempHero.int_gain}`,
            },
          ],
          gain: tempHero.int_gain,
          level: 1,
        },
      ]);
      const { min, max } = calculateMinMaxDamage(
        tempHero.base_agi,
        tempHero.base_int,
        tempHero.base_str,
        tempHero.base_attack_min,
        tempHero.base_attack_max,
        tempHero.primary_attr,
        rangeSlider,
        getPrimaryGain(
          tempHero.primary_attr,
          tempHero.agi_gain,
          tempHero.str_gain,
          tempHero.int_gain,
        ),
      );
      const attackStat: TSingleStat = {
        icon: <TbSwords className="w-6 h-6" />,
        title: "Attack",
        stats: [
          {
            id: "attackSpeed",
            hasTooltip: false,
            tooltipInfo: "Value might not be accurate",
            title: "Attack Speed",
            value: (
              <>
                {calculateAttackSpeed(tempHero.attack_rate, tempHero.base_agi)}
                <span className="text-xs">{` (${calculateAttackSpeedInSec(
                  tempHero.attack_rate,
                  tempHero.base_agi,
                )}s)`}</span>
              </>
            ),
          },
          {
            id: "attackRange",
            hasTooltip: false,
            tooltipInfo: "Value might not be accurate",
            title: "Attack Range",
            value: tempHero.attack_range,
          },
          {
            id: "damage",
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

      const defenseStat: TSingleStat = {
        icon: <FaShieldAlt className="w-6 h-6" />,
        title: "Defense",
        stats: [
          {
            id: "armor",
            hasTooltip: false,
            tooltipInfo: "Nice",
            title: "Armor",
            value: (
              <>
                {calculateArmor(
                  tempHero.base_armor,
                  tempHero.base_agi,
                  tempHero.agi_gain,
                  rangeSlider,
                )}
              </>
            ),
          },
          {
            id: "magicResist",
            hasTooltip: false,
            tooltipInfo: "Nice",
            title: "Magic Resistance",
            value: tempHero.base_mr + "%",
          },
        ],
      };

      const mobilityStat: TSingleStat = {
        icon: <FaRunning className="w-6 h-6" />,
        title: "Mobility",
        stats: [
          {
            id: "movementSpeed",
            hasTooltip: false,
            tooltipInfo: "Movement Speed",
            title: "Movement Speed",
            value: tempHero.move_speed,
          },
          {
            id: "turnRate",
            hasTooltip: false,
            tooltipInfo: "",
            title: "Turn Rate",
            value: tempHero.turn_rate ?? 0,
          },
        ],
      };
      setAttackStats(attackStat);
      setDefenseStats(defenseStat);
      setMobilityStats(mobilityStat);
    }
  }, [heroes, id]);

  useEffect(() => {
    if (hero && abilities && allAbilities) {
      const temp = getAbilityInfo(abilities[hero.name].abilities, allAbilities);
      setHeroAbilities(temp);
    }
  }, [abilities, allAbilities, id, hero]);

  switch (status) {
    case "error": {
      return <ErrorComponent />;
    }
    case "loading": {
      return (
        <PrimaryLayout className="self-center p-4 my-4 ">
          <div className="container mx-auto h-full grid grid-cols-7 gap-4">
            <div className="w-full   2xl:col-span-5 xl:col-span-5 lg:col-span-5 col-span-7 flex flex-col gap-4">
              <div className="w-full p-12 bg-neutral animate-pulse"></div>
              <div className="w-full p-8 bg-neutral animate-pulse"></div>
              <div className="w-full p-12 bg-neutral animate-pulse"></div>
              <div className="w-full p-12 bg-neutral animate-pulse"></div>
              <div className="w-full p-12 bg-neutral animate-pulse"></div>

              <div className="w-full p-12 bg-neutral animate-pulse"></div>
            </div>
            <div className=" w-full 2xl:col-span-2 xl:col-span-2 lg:col-span-2 col-span-7 flex flex-col gap-4">
              <div className="w-full p-24 bg-neutral animate-pulse"></div>
              <div className="w-full p-24 bg-neutral animate-pulse"></div>
              <div className="w-full p-12 bg-neutral animate-pulse"></div>
            </div>
          </div>
        </PrimaryLayout>
      );
    }
    case "success": {
      if (hero) {
        return (
          <PrimaryLayout className="self-center p-4 my-4 min-h-screen">
            <div className="container mx-auto h-full grid grid-cols-7">
              <img
                src={getImageUrl(null, hero?.img)}
                className="w-screen h-full absolute top-0 -z-10 blur-[160px] opacity-1 left-0 select-none"
                alt={`${hero?.localized_name}'s portrait`}
              />

              <section className="w-full 2xl:col-span-2 xl:col-span-2 lg:col-span-2 col-span-7 mt-20 bg-black/10 h-fit 2xl:p-4 xl:p-4 lg:p-4 p-4">
                <div className="w-full mb-4">
                  <button className="flex bg-black/60 p-4 items-center w-full gap-2 justify-between rounded" disabled>
                    Abilities
                    <AiFillCaretDown />
                  </button>
                </div>
                <div className="w-full space-y-8">
                  <div className="w-full space-y-4">
                    {attack ? (
                      <HeroStat
                        icon={attack?.icon}
                        title={attack?.title}
                        stats={attack?.stats}
                        level={rangeSlider}
                        hero={hero}
                      />
                    ) : null}
                    {defense ? (
                      <HeroStat
                        icon={defense.icon}
                        title={defense.title}
                        stats={defense.stats}
                        level={rangeSlider}
                        hero={hero}
                      />
                    ) : null}
                    {mobility ? (
                      <HeroStat
                        icon={mobility.icon}
                        title={mobility.title}
                        stats={mobility.stats}
                        level={rangeSlider}
                        hero={hero}
                      />
                    ) : null}
                  </div>

                  <div className="w-full">
                    <div className="text-lg flex items-center">
                      <div className="flex items-center">
                        <FaDna className="w-5 h-5" />
                        <p className=" w-fit p-2 text-gray-100 font-semibold tracking-wide">
                          Attributes
                        </p>
                      </div>
                      <div
                        className={`text-xs px-3 py-1 rounded-full  mt-1  ${
                          attrColors[hero?.primary_attr]
                        } border border-white/10`}>
                        Primary: <span className="font-bold">{Attributes[hero?.primary_attr]}</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      {attributes?.map((attribute: TAttribute, index: number) => (
                        <AttributeStats
                          values={attribute.values}
                          type={attribute.type}
                          key={`${attribute.type}-${index}`}
                          level={rangeSlider}
                          gain={attribute.gain}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </section>
              <section className="w-full 2xl:col-span-5 xl:col-span-5 lg:col-span-5 col-span-7 h-fit order-first">
                <div className="2xl:w-5/6 xl:w-3/4 lg:w-3/4 w-full mx-auto space-y-12">
                  <div className="text-sm breadcrumbs">
                    <ul>
                      <li className="text-gray-400">
                        <Link to="/heroes/all">Heroes</Link>
                      </li>
                      <li>
                        <p className="font-medium">{hero.localized_name}</p>
                      </li>
                    </ul>
                  </div>
                  <HeroHeader
                    imgSrc={getImageUrl(null, hero.img)}
                    name={hero.localized_name}
                    roles={hero.roles}
                  />

                  <HeroLevelSlider
                    imgSrc={getImageUrl(hero.id, "")}
                    level={rangeSlider}
                    setLevel={setRangeSlider}
                  />
                  <HealthAndMana
                    level={rangeSlider}
                    baseHealth={hero.base_health}
                    baseMana={hero.base_mana}
                    baseStr={hero.base_str}
                    strGain={hero.str_gain}
                    type={hero.primary_attr}
                    baseInt={hero.base_int}
                    intGain={hero.int_gain}
                  />
                  {heroAbilities ? (
                    <Abilities
                      abilities={heroAbilities}
                      talents={abilities[hero.name].talents}
                      allAbilities={allAbilities}
                      aghsShard={getAghsShardDesc(hero.id, aghs)}
                    />
                  ) : null}
                </div>
              </section>
            </div>
          </PrimaryLayout>
        );
      }
    }
    default: {
      return <h1>Nice</h1>;
    }
  }
};

export default Hero;
