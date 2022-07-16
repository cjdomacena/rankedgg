import { THero } from "./../src/types/index";
export const filterHeroes = (type: string, heroes: THero[]) => {
  const filteredHeroes = heroes.filter((hero) => hero.primary_attr === type);
  return filteredHeroes;
};

export const filterSearchHero = (q: string, heroList: string[]) => {
  const index = heroList.findIndex(el => {
    if(el.includes(q)) {
      return true;
    }
  })
  if(index === -1) {
    return false
  }
};
