import React from "react";
import { calculateHealth } from "../../../../utils";
import Abilities from "../Abilities";

type Props = {
  level: number;
  baseHealth: number;
  baseMana: number;
  baseStr: number;
  strGain: number;
  type: keyof typeof Abilities | string;
  baseInt: number;
  intGain: number;
};

const HealthAndMana = ({
  level,
  baseHealth,
  baseMana,
  baseStr,
  strGain,
  type,
  baseInt,
  intGain,
}: Props) => {
  const health = calculateHealth(baseHealth, baseStr, strGain, level, type);
  const mana = calculateHealth(baseHealth, baseInt, intGain, level, type);
  const healthTickBarCount = (health = baseHealth, type='health') => {
    const arr = [];
	const divideBy = type === 'health' ? 250 : 500
    const size = Math.round(health / divideBy);
    for (let i = 0; i < size; i++) {
      arr.push(i);
    }
    return arr;
  };

  return (
    <div className="bg-black/30 p-6 rounded space-y-4">
      <div>
        <div className="text-xs leading-relaxed mb-1 flex  justify-between">
          <h3>Health</h3>

          <p className="font-bold">{health}</p>
        </div>
        <div className="w-full flex gap-1">
          {healthTickBarCount(health).map((i, index) => (
            <div
              className={`w-full h-2 bg-green-500 ${index === 0 ? "rounded-l" : ""} ${
                index === healthTickBarCount(health).length - 1 && index !== 0 ? "rounded-r" : ""
              }`}
              key={`health-tick-${i}`}
            />
          ))}
        </div>
      </div>
      <div>
        <div className="text-xs  flex  justify-between items-center mb-1">
          <h3>Mana</h3>

          <p className="font-bold">{mana}</p>
        </div>
        <div className="w-full flex gap-1">
          {healthTickBarCount(mana).map((i, index) => (
            <div
              className={`w-full h-2 bg-blue-500 ${index === 0 ? "rounded-l" : ""} ${
                index === healthTickBarCount(mana).length - 1 && index !== 0 ? "rounded-r" : ""
              }`}
              key={`mana-tick-${i}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthAndMana;
