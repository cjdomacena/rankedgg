import React from 'react'
import { FiChevronDown, FiGrid, FiTrendingUp } from "react-icons/fi";
type Props = {
	text:string,
	icon: JSX.Element | JSX.Element[]
}

const PillItem:React.FC<Props> = ({text, icon}) => {
  return (
    <h1 className="p-2 flex items-center">
      {icon}
	  <span>{text}</span>
    </h1>
  );
}

export default PillItem