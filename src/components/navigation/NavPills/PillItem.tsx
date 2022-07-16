import React from 'react'
import {Link,} from 'react-router-dom'
type Props = {
	text:string,
	icon: JSX.Element | JSX.Element[],
  path: string
}

const PillItem:React.FC<Props> = ({text, icon, path}) => {
  return (
    <Link to={path}>
      <h1 className="p-2 flex items-center">
        {icon}
        <span>{text}</span>
      </h1>
    </Link>
  );
}

export default PillItem