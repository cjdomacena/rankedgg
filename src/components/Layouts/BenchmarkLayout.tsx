import React from "react";

type Props = {
  children: JSX.Element[];
};

const BenchmarkLayout = ({ children }: Props) => {
  return (
    <div className="w-full 2xl:col-span-6 xl:col-span-6 lg:col-span-6 col-span-8 mx-auto rounded p-4 my-8 grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 grid-cols-1 gap-5 place-content-between ">
      {children}
    </div>
  );
};

export default BenchmarkLayout;
