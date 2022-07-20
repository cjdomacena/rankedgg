import React, { useId, useState } from "react";
import { filterSearchHero, formatHeroName } from "../../utils";
import { useHeroes } from "../api";
import HeroIcon from "../components/Heroes/HeroIcon";
import AllHeroLayout from "../components/Layouts/AllHeroLayout";
import { HERO_LIST } from "../../utils/constants";
import { FiGrid } from "react-icons/fi";
const AllHeroes: React.FC = () => {
  const { status, data } = useHeroes();
  const id = useId();
  const placeHolderItems = [0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12];
  const [searchInput, setSearch] = useState<string>("");
  const [matches, setMatches] = useState<string[]>(HERO_LIST);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const q = e.target.value;
    if (q.length === 0) {
      setMatches(HERO_LIST);
    }
    setSearch(q);
    if (q.length > 0) {
      setIsSearching(true);
      const partialMatches = filterSearchHero(q, HERO_LIST);
      setMatches(partialMatches);
    }
  };

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
      <section className="h-full w-full ">
        <div className="container mx-auto font-noto-sans text-2xl font-bold flex justify-between text-neutral-300 items-center p-4 flex-wrap gap-2">
          <div className="flex items-center">
            <FiGrid className="w-6 h-6 mr-2" />
            <h1 className="text-neutral-300">All Heroes</h1>
          </div>

          <input
            className=" input input-md input-secondary rounded-sm xl:w-auto lg:w-auto md:w-auto w-full"
            placeholder="Search Hero"
            value={searchInput}
            onChange={handleSearchInput}
            onFocus={() => setIsSearching((prev) => !prev)}
          />
        </div>
        <div className="container mx-auto">
          <AllHeroLayout type="Strength">
            {data.strength.map((hero) => (
              <HeroIcon
                src={hero.img}
                key={`${id}-${hero.id}`}
                className={
                  matches.includes(formatHeroName(hero.localized_name))
                    ? formatHeroName(hero.localized_name)
                    : "opacity-30"
                }
              />
            ))}
          </AllHeroLayout>
          <AllHeroLayout type="Agility">
            {data.agility.map((hero) => (
              <HeroIcon
                src={hero.img}
                key={`${id}-${hero.id}`}
                className={
                  matches.includes(formatHeroName(hero.localized_name))
                    ? "opacity-100" //formatHeroName(hero.localized_name)
                    : "opacity-30"
                }
              />
            ))}
          </AllHeroLayout>
          <AllHeroLayout type="Intelligence">
            {data.intelligence.map((hero) => (
              <HeroIcon
                src={hero.img}
                key={`${id}-${hero.id}`}
                className={
                  matches.includes(formatHeroName(hero.localized_name))
                    ? "opacity-100" //formatHeroName(hero.localized_name)
                    : "opacity-30"
                }
              />
            ))}
          </AllHeroLayout>
        </div>
      </section>
    );
  } else {
    return <div>Oops something went wrong...</div>;
  }
};

export default AllHeroes;
