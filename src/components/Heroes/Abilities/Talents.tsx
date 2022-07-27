import React from "react";

type Props = {
  valueLeft: string;
  valueRight: string;
  level: number;
};

const Talents = ({ valueLeft, valueRight, level }: Props) => {
  return (
    <div className="text-xs w-full space-y-2 bg-neutral p-4 rounded">
      <span className=" rounded bg-white/20 inline-block h-fit w-fit p-2 text-center font-bold text-sm">
        {level}
      </span>
      <p className="bg-white/5 p-2 rounded ml-auto  inline-block w-full">{valueLeft}</p>
      <p className="bg-white/5 p-2 rounded  inline-block w-full">{valueRight}</p>
    </div>
  );
};

export default Talents;
