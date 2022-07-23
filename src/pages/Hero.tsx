import { useState } from "react";
import { calculateAttackSpeed, calculateRegen, formatHeroName } from "../../utils";
import PageHeader from "../components/Header/PageHeader";
import PageHeaderBG from "../components/Header/PageHeaderBG";
import HeroIcon from "../components/Heroes/HeroIcon";
import PrimaryLayout from "../components/Layouts/PrimaryLayout";
import { TbBow, TbSword, TbSwords } from "react-icons/tb";
import AttributeStats from "../components/Heroes/Attributes";
import { Attributes } from "../types";
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



const Hero = (props: Props) => {
  
  
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
        {
          header: "Health",
          value: hero.base_health,
        },
        {
          header: "Regen",
          value: "+" + calculateRegen(hero.base_str),
        },
      ],
    },
    {
      type: Attributes.agi,
      values: [
        {
          header: Attributes.agi,
          value: hero.base_agi,
        },
        {
          header: "Gain / level",
          value: `+${hero.agi_gain}`,
        },

        {
          header: "Attack Speed",
          value: hero.base_agi,
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

        {
          header: "Mana",
          value: hero.base_mana,
        },
      ],
    },
  ]);


  return (
    <PrimaryLayout>
      <PageHeaderBG>
        <div className="container mx-auto p-4 capitalize ">
          <div className="flex items-center gap-2">
            <PageHeader
              icon={<HeroIcon heroIndex={hero.id} className="w-6 h-6 mr-1" />}
              title={formatHeroName(hero.localized_name)}
            />
            <div className="flex badge badge-md">
              {hero.attack_type === "Melee" ? (
                <TbSword className="mr-1" />
              ) : (
                <TbBow className="mr-1" />
              )}
              <p>{hero.attack_type}</p>
            </div>
          </div>
        </div>
      </PageHeaderBG>
      <div className="container mx-auto my-4">
        <div className="w-fit space-y-2">
          <div className="text-lg flex items-center">
            <p className=" p-2 w-fit text-gray-100 font-semibold tracking-wide">Attributes</p>
          </div>
          {attributes.map((attribute, index) => (
            <AttributeStats
              values={attribute.values}
              type={attribute.type}
              key={`${attribute.type}-${index}`}
              primaryAttr={hero.primary_attr}
            />
          ))}
          <div className="w-full ">
            <div className="text-lg flex items-center">
              <TbSwords className="w-6 h-6" />
              <p className=" p-2 w-fit text-gray-100 font-semibold tracking-wide">Attack</p>
            </div>
            <ul>
              <li>
                <p>Attack Speed</p>
                <p>
                  {Math.round(
                    (1.7 / (hero.attack_rate / (1 + (1.25 * hero.base_agi) / 100))) * 100,
                  )}
                  <span className="text-xs">({calculateAttackSpeed(hero.attack_rate, hero.base_agi)}s)</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </PrimaryLayout>
  );
};

export default Hero;
