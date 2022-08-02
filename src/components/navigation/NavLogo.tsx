import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
type Props = {};

const NavLogo = (props: Props) => {
  return (
    <Link to="/">
      <div className="p-3 rounded hover:bg-neutral/50 transition-opacity cursor-pointer">
        <img src={logo} />
      </div>
    </Link>
  );
};

export default NavLogo;
