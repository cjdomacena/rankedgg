import React from "react";

type Props = {
  valueLeft: string;
  valueRight: string;
  level: number;
};

const Talents = ({ valueLeft, valueRight, level }: Props) => {
  return (
    <div className="text-xs w-full space-y-2 bg-neutral p-4 rounded">
      <p className="bg-white/5 p-2 rounded ml-auto  flex justify-between w-full space-x-2">
        {" "}
        {valueLeft}
        <span className="font-bold">Level: {level}</span>
      </p>
      <p className="bg-white/5 p-2 rounded   flex justify-between w-full">
        {valueRight}

        <span className="font-bold">Level: {level}</span>
      </p>
    </div>
  );
};

export default Talents;
