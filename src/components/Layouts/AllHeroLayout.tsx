import React from "react";
import { getAbilityImage } from "../../../utils";

type Props = {
  children: JSX.Element | JSX.Element[],
  type: string,
};

const AllHeroLayout: React.FC<Props> = ({ children, type }) => {
  return (
    <section className="text-neutral-100 space-y-4  p-4">
      <div className="flex gap-4 items-center">
        <div className="flex space-x-1 items-center">
          <img src={getAbilityImage(type)} className=" w-6" />
          <h1 className="font-bold tracking-wide text-neutral-400 uppercase">{type}</h1>
        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(90px,1fr))] gap-4  ">{children}</div>
    </section>
  );
};

export default AllHeroLayout;
