import React from "react";
import { getImageUrl } from "../../../utils";
import {HEROES} from '../../../utils/heroes'
type Props = {
  heroIndex: number | string;
  isLoading?:boolean
  className?:string
  isRadiant: boolean
};
const HeroIcon = ({ heroIndex, isLoading, className, isRadiant}: Props) => {
  if(isLoading) {
    return <div className=" w-8 h-8 bg-gray-700 animate-pulse"></div>
  }
  return (
    <div
      className={`w-8 h-8  tooltip tooltip-top tooltip-info ${className}  rounded-full p-1 `}
      data-tip={HEROES[heroIndex].localized_name}>
      <img
        src={getImageUrl(heroIndex, "")}
        loading="lazy"
        className={`${!isRadiant ? "custom-shadow" : "custom-shadow-radiant"}`}
      />
    </div>
  );
};

export default HeroIcon;
