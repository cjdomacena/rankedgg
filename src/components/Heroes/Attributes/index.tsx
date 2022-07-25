import React from "react";
import { getAbilityImage } from "../../../../utils";
import { Attributes } from "../../../types";

type Props = {
  values: {
    header: string | Attributes;
    value: number | string;
  }[];
  type: Attributes;
};
// const colors = [{agi:"#ec3d06"}, "#26e030", "#00d9ec"];
const AttributeStats = ({ values, type }: Props) => {
  return (
    <>
      <ul className=" grid grid-cols-3 text-xs  bg-neutral border border-black/50 p-4 rounded  ">
        <li>
          <img src={getAbilityImage(type as string)} className="w-8 h-8" />
        </li>
        {values.map((value, index) => (
          <li key={`${type}-${index}`}>
            <p>{value.header}</p>
            <p>{value.value}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AttributeStats;
