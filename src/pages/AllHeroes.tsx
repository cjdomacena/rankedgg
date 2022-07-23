import React, { useId, useState } from "react";
import { filterSearchHero, formatHeroName } from "../../utils";
import { useHeroes } from "../api";
import HeroImage from "../components/Heroes/HeroImage";
import AllHeroLayout from "../components/Layouts/AllHeroLayout";
import { HERO_LIST } from "../../utils/constants";
import { FiGrid } from "react-icons/fi";
import PrimaryLayout from "../components/Layouts/PrimaryLayout";
import PageHeader from "../components/Header/PageHeader";
import PageHeaderBG from "../components/Header/PageHeaderBG";
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
      <PrimaryLayout>
        <div className="container mx-auto font-bold flex justify-between text-neutral-300 items-center p-4 flex-wrap gap-2">
          <PageHeader icon={<FiGrid className="w-6 h-6 mr-2" />} title="All Heroes" />
          <input
            className=" input input-md input-secondary rounded-sm xl:w-auto lg:w-auto md:w-auto w-full"
            placeholder="Search Hero"
            value={searchInput}
            onChange={handleSearchInput}
            onFocus={() => setIsSearching((prev) => !prev)}
          />
        </div>
        <div className="container mx-auto ">
          <AllHeroLayout type="Strength">
            {placeHolderItems.map((item) => (
              <HeroImage key={`${id}-${item}-strength`} src={null} className="bg-gray-600" />
            ))}
          </AllHeroLayout>
          <AllHeroLayout type="Agility">
            {placeHolderItems.map((item) => (
              <HeroImage key={`${id}-${item}-agility`} src={null} className="bg-gray-600" />
            ))}
          </AllHeroLayout>
          <AllHeroLayout type="Intelligence">
            {placeHolderItems.map((item) => (
              <HeroImage key={`${id}-${item}-intelligence`} src={null} className="bg-gray-600" />
            ))}
          </AllHeroLayout>
        </div>
      </PrimaryLayout>
    );
  } else if (status === "success" && data) {
    return (
      <PrimaryLayout>
        <PageHeaderBG>
          <div className="container mx-auto flex justify-between text-neutral-300 items-center py-4 px-8 flex-wrap gap-2">
            <PageHeader icon={<FiGrid className="w-6 h-6 mr-2" />} title="All Heroes" />
            <input
              className=" input input-md input-accent rounded-sm xl:w-auto lg:w-auto md:w-auto w-full"
              placeholder="Search Hero"
              value={searchInput}
              onChange={handleSearchInput}
              onFocus={() => setIsSearching((prev) => !prev)}
            />
          </div>
        </PageHeaderBG>
        <div className="container mx-auto pt-8 pb-10 px-8">
          <AllHeroLayout type="Strength">
            {data.strength.map((hero) => (
              <HeroImage
                src={hero.img}
                key={`${id}-${hero.id}`}
                className={
                  matches.includes(formatHeroName(hero.localized_name))
                    ? formatHeroName(hero.localized_name)
                    : "opacity-30"
                }
                heroName={formatHeroName(hero.localized_name)}
              />
            ))}
          </AllHeroLayout>
          <AllHeroLayout type="Agility">
            {data.agility.map((hero) => (
              <HeroImage
                src={hero.img}
                key={`${id}-${hero.id}`}
                className={
                  matches.includes(formatHeroName(hero.localized_name))
                    ? "opacity-100" //formatHeroName(hero.localized_name)
                    : "opacity-30"
                }
                heroName={formatHeroName(hero.localized_name)}
              />
            ))}
          </AllHeroLayout>
          <AllHeroLayout type="Intelligence">
            {data.intelligence.map((hero) => (
              <HeroImage
                src={hero.img}
                key={`${id}-${hero.id}`}
                className={
                  matches.includes(formatHeroName(hero.localized_name))
                    ? "opacity-100" //formatHeroName(hero.localized_name)
                    : "opacity-30"
                }
                heroName={formatHeroName(hero.localized_name)}
              />
            ))}
          </AllHeroLayout>
        </div>
      </PrimaryLayout>
    );
  } else {
    return <div>Oops something went wrong...</div>;
  }
};

export default AllHeroes;
