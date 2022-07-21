import React from 'react'

type Props = {
	children: JSX.Element | JSX.Element[]
}

const PublicMatchesLayout = ({children}: Props) => {
  return (
    <div className="container mx-auto w-full p-2 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-12 my-4">
      {children}
    </div>
  );
}

export default PublicMatchesLayout