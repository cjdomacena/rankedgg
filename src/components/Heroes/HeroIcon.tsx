import React from "react";
import { getImageUrl } from "../../../utils";

type Props = {
  heroIndex: number;
  hero_name: string;
};
const BASE_URL = "https://cdn.cloudflare.steamstatic.com/";
const HeroIcon = ({ heroIndex, hero_name }: Props) => {
  return (
    <div className="w-auto h-auto  tooltip tooltip-top" data-tip={hero_name}>
      <img src={getImageUrl(heroIndex)} loading="eager" />
    </div>
  );
};

export default HeroIcon;
