import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { Link } from "react-router-dom";

type Props = {};

const MobileMenu = (props: Props) => {
  return (
    <div className="relative z-50 2xl:hidden xl:hidden lg:hidden block">
      <Menu>
        <div>
          <Menu.Button className="inline-flex p-2 bg-white/5  rounded">
            <BiMenuAltRight className="w-6 h-6 mr-1" />
            Menu
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95">
          <Menu.Items className="absolute right-0 top-12  bg-base-100 p-2 text-lg  rounded ring-2 ring-white/5 flex flex-col items-end gap-2 w-56">
            <Menu.Item as="button" className="hover:bg-white/5 rounded px-1">
              <Link to="/">
                <p className="p-1">Home</p>
              </Link>
            </Menu.Item>

            <Menu.Item as="button" className="hover:bg-white/5 rounded px-1">
              <Link to="/heroes/all">
                <p className="p-1">Heroes</p>
              </Link>
            </Menu.Item>

            <Menu.Item as="button" className="hover:bg-white/5 rounded px-1">
              <Link to="/matches/public">
                <p className="p-1">Public Matches</p>
              </Link>
            </Menu.Item>

            <Menu.Item as="button" className="hover:bg-white/5 rounded px-1">
              <Link to="/matches/professional">
                <p className="p-1">Pro Matches</p>
              </Link>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default MobileMenu;
