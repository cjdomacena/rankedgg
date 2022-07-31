import React from "react";

type Props = {
  children: JSX.Element | JSX.Element[];
  breakPointMax: string;
  breakPointMin: string;
};

const ChartLayout = ({ children, breakPointMax = '8', breakPointMin = '3' }: Props) => {
  return (
    <div
      className={`w-full 2xl:col-span-${breakPointMin} xl:col-span-${breakPointMin} lg:col-span-${breakPointMin} col-span-${breakPointMax} mx-auto max-h-72 rounded p-4 mb-12`}>
      {children}
    </div>
  );
};

export default ChartLayout;
