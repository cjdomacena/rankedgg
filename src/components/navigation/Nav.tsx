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
import MobileMenu from "./MobileMenu";
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
      <nav className="py-4 2xl:px-8 xl:px-8 lg:px-8 px-2  flex text-neutral-50 gap-4 items-center mx-auto justify-between">
        <NavLogo />
        <ul className="hidden gap-2 2xl:flex xl:flex lg:flex  items-center">
          <NavPill text="Heroes" link="heroes/all" />
          <NavPill text="Matches" pills={matchesPills} />
          <NavPill text="Teams" link="/teams" />
        </ul>
        <MobileMenu />

        <div className="hidden 2xl:flex xl:flex lg:flex items-center gap-2">
          <MatchIdSearch />
          <a href={"https://github.com/cjdomacena/rankedgg"}>
            <FaGithub className="w-6 h-6" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
