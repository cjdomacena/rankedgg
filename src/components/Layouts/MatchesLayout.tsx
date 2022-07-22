import React from 'react'
import { TPublicMatches } from '../../types'

type Props = {
	isRadiantWin: boolean
  children: JSX.Element | JSX.Element[]
}
// 
// grid grid-cols-[repeat(auto-fill,minmax(950px,1fr))]

const MatchesLayout = ({ isRadiantWin, children }: Props) => {
  return (
    <div
      className={`w-full bg-gray-800 flex justify-center gap-4 shadow-2xl items-center xl:flex-nowrap lg:flex-nowrap md:flex-nowrap flex-wrap  rounded-l border-l-4   ${
        isRadiantWin ? "border-l-green-500" : "border-l-red-500"
      }`}>
      {children}
    </div>
  );
};

export default MatchesLayout