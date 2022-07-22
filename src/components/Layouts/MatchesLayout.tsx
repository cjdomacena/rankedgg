import React from "react";
import { TPublicMatches } from "../../types";

type Props = {
  isRadiantWin: boolean;
  children: JSX.Element | JSX.Element[];
};
//
// grid grid-cols-[repeat(auto-fill,minmax(950px,1fr))]

const MatchesLayout = ({ isRadiantWin, children }: Props) => {
  return (
    <div
      className={`
      w-full bg-gray-800  flex flex-wrap  items-center rounded 
      xl:border-l-4 
      xl:border-t-0 
      lg:border-t-0 
      lg:border-l-4 
      md:border-l-4 
      md:border-t-0 
      border-t-4 
      xl:border-b-0 
      lg:border-b-0 
      lg:border-r-4 
      md:border-r-4 
      md:border-b-0 
      border-b-4
      ${
        isRadiantWin
          ? "xl:border-l-green-500 lg:border-l-green-500 md:border-l-green-500 border-t-green-500 xl:border-r-red-500 lg:border-r-red-500 md:border-r-red-500 border-b-red-500"
          : "xl:border-l-red-500 lg:border-l-red-500 md:border-l-red-500 border-t-red-500 xl:border-r-green-500 lg:border-r-green-500 md:border-r-green-500 border-b-green-500"
      } xl:justify-between lg:justify-between md:justify-between justify-center`}>
      {children}
    </div>
  );
};

export default MatchesLayout;
