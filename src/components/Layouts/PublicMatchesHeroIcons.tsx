import React from 'react'
import HeroIcon from '../Heroes/HeroIcon'

type Props = {
	ids: number[] | string[]
	type:string
}

const PublicMatchesHeroIcons = ({ids, type}: Props) => {
  return (
    <ul className='flex gap-4'>
      {ids.map((id, index) => (
        <li key={`${type}-${id}-${index}`}>
          <HeroIcon heroIndex={id} />
        </li>
      ))}
    </ul>
  );
}

export default PublicMatchesHeroIcons