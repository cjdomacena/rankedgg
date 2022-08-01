import React from "react";

type Props = {
  children: JSX.Element | JSX.Element[] | null;
  breakPointMax: string;
  breakPointMin: string;
  isLoading?: boolean;
};

const ChartLayout = ({ children, breakPointMax = "8", breakPointMin = "3", isLoading }: Props) => {
  return (
    <div
      className={`w-full 2xl:col-span-3 xl:col-span-3 lg:col-span-3 col-span-8 mx-auto max-h-72 rounded p-4 my-8 ${
        isLoading ? "animate-pulse bg-black/30" : null
      }`}>
      {children ?? ''}
    </div>
  );
};

export default ChartLayout;
