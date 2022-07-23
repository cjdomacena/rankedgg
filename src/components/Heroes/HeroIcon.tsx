import React from "react";
import { getImageUrl } from "../../../utils";
import {HEROES} from '../../../utils/heroes'
type Props = {
  heroIndex: number | string;
  isLoading?:boolean
  className?:string
};
const HeroIcon = ({ heroIndex, isLoading, className}: Props) => {
  if(isLoading) {
    return <div className=" w-8 h-8 bg-gray-700 animate-pulse"></div>
  }
  return (
    <div
      className={`w-8 h-8  tooltip tooltip-top tooltip-info ${className}`}
      data-tip={HEROES[heroIndex].localized_name}>
      <img src={getImageUrl(heroIndex, "")} loading="lazy" />
    </div>
  );
};

export default HeroIcon;
