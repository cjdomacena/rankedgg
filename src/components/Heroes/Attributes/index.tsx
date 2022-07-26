import React from "react";
import { calculateAttributeLevel, getAbilityImage } from "../../../../utils";
import { Attributes } from "../../../types";

type Props = {
  values: {
    id: string;
    header: string | Attributes;
    value: number | string;
  }[];
  type: Attributes;
  level: number;
  gain: number
};
const AttributeStats = ({ values, type, level, gain }: Props) => {
  return (
    <>
      <ul className=" grid grid-cols-3 text-xs  bg-neutral border border-black/50 p-4 rounded  ">
        <li>
          <img src={getAbilityImage(type as string)} className="w-8 h-8" />
        </li>
        {values.map((value, index) => (
          <li key={`${type}-${index}`}>
            <p>{value.header}</p>
            <p>
              {value.id === "attribute"
                ? calculateAttributeLevel(Number(value.value), level, Number(gain))
                : value.value}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AttributeStats;
