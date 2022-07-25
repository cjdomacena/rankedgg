import React from "react";
import { getImageUrl } from "../../../utils";

type Props = {
  children: JSX.Element | JSX.Element[];
};

const PageHeaderBG = ({ children }: Props) => {
  return (
    <div className="w-full h-auto  text-white relative">
      <img src={getImageUrl(null, "/apps/dota2/images/dota_react/heroes/bane.png?")} className="absolute w-full h-64 -z-10 blur-[160px]"/>
      <div className="">{children}</div>
    </div>
  );
};

export default PageHeaderBG;
