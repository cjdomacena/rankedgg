import DotaLogo from "../Logo/DotaLogo";
import {Link} from 'react-router-dom'
type Props = {}

const NavLogo = (props: Props) => {
  return (
    <div className="flex gap-2 items-center">
      <Link to="/">
        <DotaLogo className="w-10  h-10 fill-neutral-800 hover:fill-neutral-200 transition-all duration-500 hover:text-black" />
      </Link>
      <Link to="/">
        <div>
          <h1 className="text-neutral-200 font-noto-sans font-black leading-none">Dota Buffer</h1>
          <p className="text-xs text-neutral-400">Buffer than Fly`</p>
        </div>
      </Link>
    </div>
  );
}

export default NavLogo