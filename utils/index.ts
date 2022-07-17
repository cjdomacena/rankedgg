import { THero } from "./../src/types/index";
export const filterHeroes = (type: string, heroes: THero[]) => {
  const filteredHeroes = heroes.filter((hero) => hero.primary_attr === type);
  return filteredHeroes;
};

export const filterSearchHero = (q: string, heroList: string[]):string[] => {
    const filteredHeroes = heroList.filter((hero) => {
      if (hero.includes(q.toLowerCase())) {
        return hero;
      }
    });
    return filteredHeroes;
};

export const formatHeroName = (name:string):string => {
  return name.split('-').join(' ').toLowerCase();
}

export const sortHeroesBy = () => {};
