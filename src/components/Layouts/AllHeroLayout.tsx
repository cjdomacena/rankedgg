import React from "react";

type Props = {
  children: JSX.Element | JSX.Element[],
  type: string,
};

const AllHeroLayout: React.FC<Props> = ({ children, type }) => {
  return (
    <section className="text-neutral-100 container mx-auto space-y-4 p-4">
      <div className="flex space-x-1 items-center">
        <img
          src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_${type.toLowerCase()}.png`}
          className=" w-6"
        />
        <h1 className="font-bold tracking-wide text-neutral-400 uppercase">{type}</h1>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(90px,1fr))] gap-4  ">{children}</div>
    </section>
  );
};

export default AllHeroLayout;
