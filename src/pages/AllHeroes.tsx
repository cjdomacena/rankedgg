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
import ErrorComponent from "../components/Error";
const AllHeroes: React.FC = () => {
  const { status, data, isError } = useHeroes();
  const id = useId();

  const [searchInput, setSearch] = useState<string>("");
  const [matches, setMatches] = useState<string[]>(HERO_LIST);

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const q = e.target.value;
    if (q.length === 0) {
      setMatches(HERO_LIST);
    }
    setSearch(q);
    if (q.length > 0) {
      const partialMatches = filterSearchHero(q, HERO_LIST);
      setMatches(partialMatches);
    }
  };

  if (isError) {
    return <ErrorComponent />;
  }

  switch (status) {
    case "success": {
      return (
        <PrimaryLayout className="h-full flex items-center min-h-screen">
          <div className="w-full h-full">
            <PageHeaderBG>
              <div className="container mx-auto flex justify-between text-neutral-300 items-center pt-4 px-12 flex-wrap gap-2">
                <PageHeader icon={<FiGrid className="w-6 h-6 mr-2" />} title="All Heroes" />
                <input
                  className=" input input-sm ring ring-neutral rounded xl:w-auto lg:w-auto md:w-auto w-full"
                  placeholder="Search Hero"
                  value={searchInput}
                  onChange={handleSearchInput}
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
                    id={hero.id}
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
                    id={hero.id}
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
                    id={hero.id}
                  />
                ))}
              </AllHeroLayout>
            </div>
          </div>
        </PrimaryLayout>
      );
    }
    default: {
      return (
        <PrimaryLayout>
          <div className="container mx-auto font-bold flex justify-between text-neutral-300 items-center p-4 flex-wrap gap-2 h-full mt-12">
            <PageHeaderBG />
            <PageHeader icon={<FiGrid className="w-6 h-6 mr-2" />} title="All Heroes" />
            <input
              className=" input input-md input-secondary rounded-sm xl:w-auto lg:w-auto md:w-auto w-full"
              placeholder="Search Hero"
              disabled={true}
            />
          </div>
          <div className="container mx-auto p-4 space-y-8">
            <div className=" h-36 w-full bg-black/30 rounded animate-pulse"></div>
            <div className=" h-36 w-full bg-black/30 rounded animate-pulse"></div>
            <div className=" h-36 w-full bg-black/30 rounded animate-pulse"></div>
          </div>
        </PrimaryLayout>
      );
    }
  }
};

export default AllHeroes;
