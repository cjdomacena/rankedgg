import React from 'react'

type Props = {
	icon: JSX.Element;
	title: string
}

const PageHeader = ({icon, title}: Props) => {
  return (
	<div className='flex items-center'>
		{icon}
		<h1 className='text-gray-300 text-2xl font-black'>{title}</h1>
	</div>
  )
}

export default PageHeader