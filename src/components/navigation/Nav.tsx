import NavLogo from "./NavLogo";
import NavPill from "./NavPills/NavPill";
import { BiWorld } from "react-icons/bi";
import { IoPeopleOutline } from "react-icons/io5";
import { FiGrid, FiTrendingUp } from "react-icons/fi";
type Props = {};

const Nav = (props: Props) => {
  const matchesPills = [
    {
      text: "Public Matches",
      icon: <BiWorld className="mr-1" />,
      path: "/public-matches",
    },
    {
      text: "Pro Matches",
      icon: <IoPeopleOutline className="mr-1" />,
      path: "/pro-matches",
    },
  ];

  const heroesPills = [
    {
      text: "All Heroes",
      icon: <FiGrid className="mr-1" />,
      path: "/all-heroes",
    },
    {
      text: "Trending Heroes",
      icon: <FiTrendingUp className="mr-1" />,
      path: "/trending-heroes",
    },
  ];

  return (
    <header className="w-full h-auto font-noto-sans shadow">
      <nav className="p-4 flex text-neutral-50 gap-12 items-center">
        <NavLogo />
        <ul className="hidden gap-4 xl:flex lg:flex md:hidden sm:hidden xs:hidden ">
          <NavPill text="Heroes" pills={heroesPills} />
          <NavPill text="Matches" pills={matchesPills} />
          <NavPill text="Teams" />
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
