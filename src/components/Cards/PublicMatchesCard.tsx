import React from 'react'
import HeroIcon from '../Heroes/HeroIcon'

type Props = {
	id: number | string
}

const PublicMatchesCard = ({id}: Props) => {
  return (
	<li>
		<HeroIcon heroIndex={id} />
	</li>
  )
}

export default PublicMatchesCard