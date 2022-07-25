import React from 'react'

type Props = {
	icon: JSX.Element;
	title: string | JSX.Element | JSX.Element[]
	className?:string | null
}

const PageHeader = ({icon, title, className = null}: Props) => {
  return (
    <div className={`flex ${className ? className : 'items-center'}`}>
      {icon}
      {typeof title === "string" ? (
        <h1 className="text-white text-2xl font-black">{title}</h1>
      ) : (
        title
      )}
    </div>
  );
}

export default PageHeader