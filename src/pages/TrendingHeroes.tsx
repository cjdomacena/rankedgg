import React from 'react'
import { FiTrendingUp } from 'react-icons/fi'

type Props = {}

const TrendingHeroes = (props: Props) => {
  return (
	<section className="p-8 h-full w-full text-neutral-300 font-noto-sans">
		<div className='container mx-auto'>
			<h1 className='text-2xl font-bold tracking-wide text-white flex items-center'>
				<FiTrendingUp className='w-6 h-6 mr-2' />
				Trending Heroes
			</h1>
		</div>
	</section>
  )
}

export default TrendingHeroes