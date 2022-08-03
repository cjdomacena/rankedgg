import { Menu } from "@headlessui/react";
import React from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { Link } from "react-router-dom";

type Props = {};

const MobileMenu = (props: Props) => {
  return (<div className="relative z-50 2xl:invisible xl:invisible lg:invisible block">
    <Menu>
      <div>
        <Menu.Button className="inline-flex p-2 bg-white/5  rounded">
          <BiMenuAltRight className="w-6 h-6 mr-1" aria-hidden="true" />
          Menu
        </Menu.Button>
      </div>
      <Menu.Items
        as="ul"
        className="absolute right-6 top-12  bg-base-100 w-auto p-2 text-lg whitespace-nowrap rounded ring-2 ring-white/5 shadow space-y-2">
        <Link to="/">
          <Menu.Item as="li" className="hover:bg-white/5 rounded px-1">
            <p className="p-1">Home</p>
          </Menu.Item>
        </Link>
        <Link to="/heroes/all">
          <Menu.Item as="li" className="hover:bg-white/5 rounded px-1">
            <p className="p-1">Heroes</p>
          </Menu.Item>
        </Link>
        <Link to="/matches/public">
          <Menu.Item as="li" className="hover:bg-white/5 rounded px-1">
            <p className="p-1">Public Matches</p>
          </Menu.Item>
        </Link>
        <Link to="/matches/professional">
          <Menu.Item as="li" className="hover:bg-white/5 rounded px-1">
            <p className="p-1">Pro Matches</p>
          </Menu.Item>
        </Link>
      </Menu.Items>
    </Menu>
  </div>)
};

export default MobileMenu;
