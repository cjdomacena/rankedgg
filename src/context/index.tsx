import React, {
  createContext,
  Dispatch, 
  SetStateAction,
  useState
} from 'react'
import { THeroes } from '../types'


interface IHeroes {
  heroes: THeroes | null,
  setHeroes: Dispatch<SetStateAction<THeroes | null>>;
}

export const HeroesContext = createContext({} as IHeroes);

export const HeroesProvider = (children: JSX.Element[] | JSX.Element) => {
  const [heroes, setHeroes] = useState<THeroes | null>(null);
  
  return <HeroesContext.Provider value={{heroes, setHeroes}}>{children}</HeroesContext.Provider>;
}
