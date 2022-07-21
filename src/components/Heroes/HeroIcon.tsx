import React from "react";
import { getImageUrl } from "../../../utils";
import {HEROES} from '../../../utils/heroes'
type Props = {
  heroIndex: number | string;
  isLoading?:boolean
};
const HeroIcon = ({ heroIndex, isLoading }: Props) => {
  if(isLoading) {
    return <div className=" w-8 h-8 bg-gray-700 animate-pulse"></div>
  }
  return (
    <div className="w-auto h-auto  tooltip tooltip-top tooltip-info" data-tip={HEROES[heroIndex].localized_name}>
      <img src={getImageUrl(heroIndex, '')} loading="eager" />
    </div>
  );
};

export default HeroIcon;
