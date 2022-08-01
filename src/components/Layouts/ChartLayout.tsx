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
      className={`w-full rounded p-4 my-8 ${
        isLoading ? "animate-pulse bg-black/30" : null
      }`}>
      {children ?? ''}
    </div>
  );
};

export default ChartLayout;
