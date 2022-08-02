import NavLogo from "./NavLogo";
import NavPill from "./NavPills/NavPill";
import { BiWorld, BiWifi } from "react-icons/bi";
import { IoPeopleOutline } from "react-icons/io5";
import { FiGrid } from "react-icons/fi";
import MatchIdSearch from "./MatchIdSearch";
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
    {
      text: "Live",
      icon: <BiWifi className="mr-1" />,
      path: "/matches/live",
    },
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
      <nav className="py-4  flex text-neutral-50 gap-4 items-center container mx-auto justify-between">
        <NavLogo />
        <ul className="hidden gap-2 xl:flex lg:flex md:hidden sm:hidden xs:hidden items-center">
          <NavPill text="Heroes" link="heroes/all" />
          <NavPill text="Matches" pills={matchesPills} />
          <NavPill text="Teams" link="/" />
          <MatchIdSearch />
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
