import { Link } from "react-router-dom";
import logo from "../../assets/LOGO.png";
type Props = {};

const NavLogo = (props: Props) => {
  return (
    <div className=" w-[381px]">
      <div className="w-fit">
        <Link to="/">
          <div className="p-3 rounded hover:bg-white/5 transition-opacity cursor-pointer w-fit bg-neutral/50">
            <img src={logo} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavLogo;
