import React from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import { THeroStat } from "../../../pages/Hero";

type Props = {
  icon: JSX.Element | JSX.Element[];
  title: string;
  stats: THeroStat[];
};

const HeroStat = ({ icon, title, stats }: Props) => {
  return (
    <div className="w-full">
      <div className="text-lg flex items-center">
        {icon}
        <p className=" p-2 w-fit text-gray-100 font-semibold tracking-wide">{title}</p>
      </div>
      <ul className="text-xs bg-neutral p-4 rounded grid  gap-x-6 gap-y-2 drop-shadow-2xl w-full 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-2 ">
        {stats.map((stat, index) =>
          stat.hasTooltip ? (
            <li className="flex items-center" key={`${title}-${index}`}>
              <div
                className="cursor-pointer tooltip tooltip-right tooltip-accent z-10"
                data-tip={stat.tooltipInfo}>
                <AiFillInfoCircle className="w-4 h-4 mr-1" />
              </div>
              <div className="flex gap-2">
                <p>{stat.title}: </p>
                <p>{stat.value}</p>
              </div>
            </li>
          ) : (
            <li key={`${title}-${index}`}>
              <div className="flex gap-2">
                <p>{stat.title}: </p>
                <p>{stat.value}</p>
              </div>
            </li>
          ),
        )}
      </ul>
    </div>
  );
};
export default HeroStat;
