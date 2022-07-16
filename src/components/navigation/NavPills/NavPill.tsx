import React, { useId } from "react";
import { FiChevronDown } from "react-icons/fi";
import { Menu } from "@headlessui/react";
import PillItem from "./PillItem";
type Props = {
  text: string;
  pills?: { text: string; icon: JSX.Element }[];
};

const NavPill: React.FC<Props> = ({ text, pills }) => {
  const id = useId();
  if (pills) {
    return (
      <li className="text-sm font-semibold text-neutral-300 relative">
        <Menu>
          <Menu.Button className="flex items-center py-2 px-3 rounded bg-neutral-900 ring-1 ring-neutral-700 hover:bg-neutral-800">
            {text}
            <FiChevronDown className="ml-1" />
          </Menu.Button>
          <Menu.Items
            className="absolute top-12 left-0 p-1 w-44 bg-neutral-800 rounded-sm ring-1 ring-neutral-700 text-sm space-y-1"
            as="ul">
            {pills
              ? pills.map((pill, index) => (
                  <Menu.Item
                    as="li"
                    tabIndex={index}
                    className=" rounded hover:bg-neutral-500 cursor-pointer"
                    key={`${text}-${id}-${index}`}>
                    <PillItem icon={pill.icon} text={pill.text} />
                  </Menu.Item>
                ))
              : null}
          </Menu.Items>
        </Menu>
      </li>
    );
  }

return (
  <li className="text-sm font-semibold text-neutral-300 flex items-center cursor-pointer hover:text-neutral-400 transition-colors">
    <p className="flex items-center py-2 px-3 rounded bg-neutral-900 ring-1 ring-neutral-700 hover:bg-neutral-800">
      {text}
    </p>
  </li>
);
};

export default NavPill;
