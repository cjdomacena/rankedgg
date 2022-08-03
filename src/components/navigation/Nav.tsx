import NavLogo from "./NavLogo";
import NavPill from "./NavPills/NavPill";
import { BiWorld, BiWifi, BiMenuAltRight } from "react-icons/bi";
import { IoPeopleOutline } from "react-icons/io5";
import { FiGrid, FiMenu } from "react-icons/fi";
import MatchIdSearch from "./MatchIdSearch";
import { AiFillCloseCircle } from "react-icons/ai";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
type Props = {};

const Nav = (props: Props) => {
  const matchesPills = [
    {
      text: "Public Matches",
      icon: <BiWorld className="mr-1" />,
      path: "/matches/public",
    },
    {
      text: "Pro Matches",
      icon: <IoPeopleOutline className="mr-1" />,
      path: "/matches/professional",
    },
    // {
    //   text: "Live",
    //   icon: <BiWifi className="mr-1" />,
    //   path: "/matches/live",
    // },
  ];

  const heroesPills = [
    {
      text: "All Heroes",
      icon: <FiGrid className="mr-1" />,
      path: "/heroes/all",
    },
    // {
    //   text: "Trending Heroes",
    //   icon: <FiTrendingUp className="mr-1" />,
    //   path: "/heroes/trending",
    // },
  ];

  return (
    <header className="w-full h-auto font-noto-sans shadow-xl">
      <nav className="py-4 px-8  flex text-neutral-50 gap-4 items-center mx-auto justify-between">
        <NavLogo />
        <ul className="hidden gap-2 2xl:flex xl:flex lg:flex  items-center">
          <NavPill text="Heroes" link="heroes/all" />
          <NavPill text="Matches" pills={matchesPills} />
          <NavPill text="Teams" link="/teams" />
        </ul>
        <Menu
          as={"div"}
          className="relative px-4 z-50 2xl:hidden xl:hidden lg:hidden block">
          <Menu.Button className="flex p-2 hover:bg-neutral rounded">
            <BiMenuAltRight className="w-6 h-6 mr-1" />
            Menu
          </Menu.Button>

          <Menu.Items
            as="ul"
            className="absolute right-6 top-12  bg-base-100 w-auto p-2 text-lg whitespace-nowrap rounded ring-2 ring-white/5 shadow space-y-2">
            <Menu.Item as="li" className="hover:bg-white/5 rounded px-1">
              <Link to="/">
                <p className="p-1">Home</p>
              </Link>
            </Menu.Item>
            <Menu.Item as="li" className="hover:bg-white/5 rounded px-1">
              <Link to="/heroes/all">
                <p className="p-1">Heroes</p>
              </Link>
            </Menu.Item>
            <Menu.Item as="li" className="hover:bg-white/5 rounded px-1">
              <Link to="/matches/public">
                <p className="p-1">Public Matches</p>
              </Link>
            </Menu.Item>
            <Menu.Item as="li" className="hover:bg-white/5 rounded px-1">
              <Link to="/matches/professional">
                <p className="p-1">Pro Matches</p>
              </Link>
            </Menu.Item>
          </Menu.Items>
        </Menu>

        <div className="hidden 2xl:flex xl:flex lg:flex items-center gap-2">
          <MatchIdSearch />
          <Link to={"/"}>
            <FaGithub className="w-6 h-6" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
