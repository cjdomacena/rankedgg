import { getHeroAbilityImage } from "../../../../utils";
import { TAllAbilities } from "../../../types";
import { ImageExists } from "../../../../utils/hooks";
import { useState } from "react";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import Talents from "./Talents";
type Props = {
  abilities: TAllAbilities[];
  talents: {
    name: string;
    level: number | string;
  }[];
  allAbilities: any;
};

const Abilities = ({ abilities, talents, allAbilities }: Props) => {
  const [isOpen, setIsOpen] = useState(true);
  const [talentOpen, setTalentOpen] = useState(true);
  const getAbilityManaCost = (abilities: any, key: string) => {
    if (abilities) {
      if (Array.isArray(abilities)) {
        return abilities.map((ability: string, index: number) =>
          index !== abilities.length - 1 ? (
            <li key={`${key}-${ability}-${index}`}> {ability} / </li>
          ) : (
            <li key={`${key}-${ability}-${index}`}>{ability}</li>
          ),
        );
      }
      return <li key={"ability-default"}>{abilities}</li>;
    } else {
      return <li key={"ability-not-available"}>N/A</li>;
    }
  };
  return (
    <div className=" space-y-4">
      <div className="bg-neutral/80 p-4 rounded flex justify-between items-center">
        <h1>Abilities</h1>
        <button
          className="rounded-full p-1 bg-white/5 text-white hover:bg-white/20 transition-all"
          onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? <AiFillCaretUp className="w-4 h-4" /> : <AiFillCaretDown className="w-4 h-4" />}
        </button>
      </div>
      {isOpen ? (
        <div className=" grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
          {abilities.map((ability: TAllAbilities, index: number) => {
            return !ability.img.includes("generic_hidden") ? (
              <div
                className="flex gap-4 bg-neutral/80 p-4 items-center rounded"
                key={`ability-${index}-${ability.dname}`}>
                <div
                  className="flex flex-col gap-1 tooltip  z-10"
                  data-tip={ability.dname}
                  key={ability.dname}>
                  <ImageExists alt={ability.dname} src={getHeroAbilityImage(ability.img)} />
                </div>

                <div className="flex flex-col gap-2">
                  <div className="text-xs">
                    <h4>Mana Cost </h4>
                    <ul className="flex text-xs gap-1">
                      {getAbilityManaCost(ability.mc, "mana-cost")}
                    </ul>
                  </div>
                  <div className="text-xs">
                    <h4>Cooldown </h4>
                    <ul className="flex text-xs gap-1">
                      {getAbilityManaCost(ability.cd, "ability-cooldown")}
                    </ul>
                  </div>
                </div>
              </div>
            ) : null;
          })}
        </div>
      ) : null}
      <div className="space-y-4 auto">
        <div className="bg-neutral/80 p-4 rounded flex justify-between items-center w-full">
          <h1>Talents</h1>
          <button
            className="rounded-full p-1 bg-white/5 text-white hover:bg-white/20 transition-all"
            onClick={() => setTalentOpen((prev) => !prev)}>
            {talentOpen ? (
              <AiFillCaretUp className="w-4 h-4" />
            ) : (
              <AiFillCaretDown className="w-4 h-4" />
            )}
          </button>
        </div>
        {talentOpen ? (
          <div className="flex flex-col w-full justify-center items-center gap-2">
            <Talents
              valueLeft={allAbilities[talents[0].name].dname ?? "NA"}
              valueRight={allAbilities[talents[1].name].dname ?? "NA"}
              level={10}
            />
            <Talents
              valueLeft={allAbilities[talents[2].name].dname ?? "NA"}
              valueRight={allAbilities[talents[3].name].dname ?? "NA"}
              level={15}
            />
            <Talents
              valueLeft={allAbilities[talents[4].name].dname ?? "NA"}
              valueRight={allAbilities[talents[5].name].dname ?? "NA"}
              level={20}
            />
            <Talents
              valueLeft={allAbilities[talents[6].name].dname ?? "NA"}
              valueRight={allAbilities[talents[7].name].dname ?? "NA"}
              level={25}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Abilities;