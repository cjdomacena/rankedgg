import React from 'react'
import HeroIcon from '../Heroes/HeroIcon'

type Props = {
	ids: number[] | string[]
	type:string
  reverse?: boolean
}

const HeroIconsLayout = ({ ids, type, reverse = false }: Props) => {
  return (
    <ul className={`flex gap-2 items-center`}>
      {ids.map((id, index) => (
        <li key={`${type}-${id}-${index}`} className=" h-8">
          <HeroIcon heroIndex={id} isRadiant={type === 'radiant' ? true : false} />
        </li>
      ))}
    </ul>
  );
};

export default HeroIconsLayout;