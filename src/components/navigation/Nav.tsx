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
    },
    {
      text: "Pro Matches",
      icon: <IoPeopleOutline className="mr-1" />,
    },
  ];

  const heroesPills = [
    {
      text: "All Heroes",
      icon: <FiGrid className="mr-1" />,
    },
    {
      text: "Trending Heroes",
      icon: <FiTrendingUp className="mr-1" />,
    },
  ];

  return (
    <header className="w-full bg-black h-auto  border-b border-b-white/10 font-noto-sans">
      <nav className="p-4 flex text-neutral-50 gap-12 items-center">
        <NavLogo />
        <ul className="flex gap-4">
          <NavPill text="Heroes" pills={heroesPills} />
          <NavPill text="Matches" pills={matchesPills} />
          <NavPill text="Teams" />
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
