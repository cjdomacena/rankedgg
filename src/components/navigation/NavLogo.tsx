import DotaLogo from "../Logo/DotaLogo";
import {Link} from 'react-router-dom'
import logo from '../../assets/LOGO.png'
type Props = {}

const NavLogo = (props: Props) => {
  return (
    <div className="px-3 py-3 rounded hover:bg-neutral/50 transition-opacity cursor-pointer">
      <Link to="/">
        <img src={logo} />
      </Link>
     
    </div>
  );
}

export default NavLogo