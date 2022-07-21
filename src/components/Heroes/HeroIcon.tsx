import React from "react";
import { getImageUrl } from "../../../utils";
import {HEROES} from '../../../utils/heroes'
type Props = {
  heroIndex: number | string;
};
const HeroIcon = ({ heroIndex }: Props) => {
  return (
    <div className="w-auto h-auto  tooltip tooltip-top tooltip-info" data-tip={HEROES[heroIndex].localized_name}>
      <img src={getImageUrl(heroIndex, '')} loading="eager" />
    </div>
  );
};

export default HeroIcon;
