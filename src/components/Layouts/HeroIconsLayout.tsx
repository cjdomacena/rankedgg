import React from 'react'
import HeroIcon from '../Heroes/HeroIcon'

type Props = {
	ids: number[] | string[]
	type:string
}

const HeroIconsLayout = ({ ids, type }: Props) => {
  return (
    <ul className="flex gap-1 items-center ">
      {ids.map((id, index) => (
        <li key={`${type}-${id}-${index}`}>
          <HeroIcon heroIndex={id} />
        </li>
      ))}
    </ul>
  );
};

export default HeroIconsLayout;