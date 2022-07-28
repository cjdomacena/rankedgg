import React from "react";

type Props = {
  valueLeft: string;
  valueRight: string;
  level: number;
};

const Talents = ({ valueLeft, valueRight, level }: Props) => {
  return (
    <div className="text-xs w-full rounded bg-white/5">
      <p className="rounded ml-auto  flex justify-between w-full space-x-2 p-4">
        {" "}
        {valueLeft}
        <span className="font-bold">Level: {level}</span>
      </p>
      <p className="bg-black/30 rounded   flex justify-between w-full p-4">
        {valueRight}

        <span className="font-bold">Level: {level}</span>
      </p>
    </div>
  );
};

export default Talents;
