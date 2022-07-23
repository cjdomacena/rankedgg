import React from "react";
import { getAbilityImage } from "../../../../utils";
import { Attributes } from "../../../types";

type Props = {
  values: {
    header: string | Attributes;
    value: number | string;
  }[];
  type: Attributes;
  primaryAttr: keyof typeof Attributes |  string;
};
// const colors = [{agi:"#ec3d06"}, "#26e030", "#00d9ec"];
const AttributeStats = ({ values, type, primaryAttr }: Props) => {
 const attrColors = {
   agi: "bg-[#26e030]",
   str: "bg-[#ec3d06]",
   int: "bg-[#00d9ec]",
 };

  return (
    <ul className="flex gap-4 text-xs items-center bg-black p-4 rounded 2xl:w-auto xl:w-auto lg:w-auto md:w-fit sm:w-full xs:w-full w-full ">
      <li className="flex items-center gap-1">
        <img src={getAbilityImage(type as string)} className="w-6 h-6" />
        {Attributes[primaryAttr] === type ? (
          <p className={`text-xs px-2 ${attrColors[primaryAttr]}  text-black font-semibold rounded-full`}>Primary</p>
        ) : null}
      </li>
      {values.map((value, index) => (
        <li key={`${type}-${index}`}>
          <p>{value.header}</p>
          <p>{value.value}</p>
        </li>
      ))}
    </ul>
  );
};

export default AttributeStats;
