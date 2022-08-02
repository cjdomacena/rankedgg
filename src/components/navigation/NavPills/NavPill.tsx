import React, { useId } from "react";
import { FiChevronDown } from "react-icons/fi";
import { Menu } from "@headlessui/react";
import PillItem from "./PillItem";
import { Link } from "react-router-dom";
type Props = {
  text: string;
  pills?: { text: string; icon: JSX.Element, path:string }[];
  link?:string
};

const NavPill: React.FC<Props> = ({ text, pills, link }) => {
  const id = useId();
  if (pills) {
    return (
      <li className="text-sm font-semibold text-gray-300 relative">
        <Menu>
          <Menu.Button className="flex items-center py-2 px-3 rounded   hover:bg-neutral">
            {text}
            <FiChevronDown className="ml-1" />
          </Menu.Button>
          <Menu.Items
            className="absolute top-12 right-0 p-1 w-44 rounded-sm  text-sm space-y-1 border border-secondary/10 z-50 bg-[#0f1729]"
            as="ul">
            {pills
              ? pills.map((pill, index) => (
                  <Menu.Item
                    as="li"
                    tabIndex={index}
                    className=" rounded hover:bg-neutral cursor-pointer"
                    key={`${text}-${id}-${index}`}>
                    <PillItem icon={pill.icon} text={pill.text} path={pill.path} />
                  </Menu.Item>
                ))
              : null}
          </Menu.Items>
        </Menu>
      </li>
    );
  }

return (
  <li className="text-sm font-semibold text-gray-300 flex items-center cursor-pointer hover:bg-neutral transition-colors rounded">
    <Link to={link ?? ''}>
      <p className="flex items-center py-2 px-3  ">{text}</p>
    </Link>
  </li>
);
};

export default NavPill;
