import React, { useId, useState } from "react";
import { useHeroes } from "../api";
import HeroIcon from "../components/Heroes/HeroIcon";
import AllHeroLayout from "../components/Layouts/AllHeroLayout";

const AllHeroes: React.FC = () => {
  const { status, data } = useHeroes();
  const id = useId();
  const placeHolderItems = [0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12];
  const [searchInput, setSearch] = useState<string>("");

  if (status === "loading") {
    return (
      <section className="py-12 h-full w-full bg-gradient-to-b from-black via-black to-gray-900">
        <AllHeroLayout type="Strength">
          {placeHolderItems.map((item) => (
            <HeroIcon key={`${id}-${item}-strength`} src={null} />
          ))}
        </AllHeroLayout>
        <AllHeroLayout type="Agility">
          {placeHolderItems.map((item) => (
            <HeroIcon key={`${id}-${item}-agility`} src={null} />
          ))}
        </AllHeroLayout>
        <AllHeroLayout type="Intelligence">
          {placeHolderItems.map((item) => (
            <HeroIcon key={`${id}-${item}-intelligence`} src={null} />
          ))}
        </AllHeroLayout>
      </section>
    );
  } else if (status === "success" && data) {
    return (
      <section className="p-8 h-full w-full bg-gradient-to-b from-black/60 via-black to-gray-900">
        <div className="container mx-auto p-4 font-noto-sans text-2xl font-bold flex justify-between text-white">
          <h1 className="text-white">All Heroes</h1>
          <input
            className="text-sm font-normal px-2 py-1 bg-slate-800 rounded text-neutral-300 ring-slate-600 focus:outline-none focus:ring"
            placeholder="Search Hero"
            value={searchInput}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <AllHeroLayout type="Strength">
          {data.strength.map((hero) => (
            <HeroIcon
              src={hero.img}
              key={`${id}-${hero.id}`}
            />
          ))}
        </AllHeroLayout>
        <AllHeroLayout type="Agility">
          {data.agility.map((hero) => (
            <HeroIcon src={hero.img} key={`${id}-${hero.id}`} />
          ))}
        </AllHeroLayout>
        <AllHeroLayout type="Intelligence">
          {data.intelligence.map((hero) => (
            <HeroIcon src={hero.img} key={`${id}-${hero.id}`} />
          ))}
        </AllHeroLayout>
      </section>
    );
  } else {
    return <div>Oops something went wrong...</div>;
  }
};

export default AllHeroes;
