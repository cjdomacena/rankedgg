import React from "react";
import { getImageUrl, hasProperty } from "../../../utils";
import { HEROES } from "../../../utils/heroes";
type Props = {
  heroIndex: number | string;
  isLoading?: boolean;
  className?: string;
  isRadiant: boolean;
};
const HeroIcon = ({ heroIndex, isLoading, className, isRadiant }: Props) => {
  if (isLoading) {
    return <div className=" w-8 h-8 bg-black/30 animate-pulse"></div>;
  }
  if (hasProperty(HEROES[heroIndex], "localized_name")) {
    return (
      <div
        className={`w-8 h-8  tooltip tooltip-top tooltip-info ${className}  rounded-full p-1 `}
        data-tip={
          hasProperty(HEROES[heroIndex], "localized_name")
            ? HEROES[heroIndex].localized_name
            : ""
        }
      >
        <img
          src={getImageUrl(heroIndex, "")}
          loading="lazy"
          className={`${
            !isRadiant ? "custom-shadow" : "custom-shadow-radiant"
          }`}
        />
      </div>
    );
  } else {
    return <></>;
  }
};

export default HeroIcon;

