import { useRef, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useOnClickOutside } from "../../../utils/hooks";

type Props = {};

const MobileMenu = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef<any>(null);
  useOnClickOutside(ref, () => setIsOpen(false))

  return (
    <div
      className="relative z-[999] 2xl:hidden xl:hidden lg:hidden inline-block "
      ref={ref}>
      <div>
        <div>
          <button
            className="inline-flex p-2 bg-white/5  rounded"
            onClick={() => setIsOpen((prev) => !prev)}>
            <BiMenuAltRight className="w-6 h-6 mr-1" aria-hidden="true" />
            Menu
          </button>
        </div>
        {isOpen ? (
          <ul className="absolute right-0 top-12  bg-base-100  p-2 text-lg whitespace-nowrap rounded ring-2 ring-white/5 shadow space-y-2 w-56">
            <Link to="/">
              <li className="hover:bg-white/5 rounded px-1">
                <p className="p-1">Home</p>
              </li>
            </Link>
            <Link to="/heroes/all">
              <li className="hover:bg-white/5 rounded px-1">
                <p className="p-1">Heroes</p>
              </li>
            </Link>
            <Link to="/matches/public">
              <li className="hover:bg-white/5 rounded px-1">
                <p className="p-1">Public Matches</p>
              </li>
            </Link>
            <Link to="/matches/professional">
              <li className="hover:bg-white/5 rounded px-1">
                <p className="p-1">Pro Matches</p>
              </li>
            </Link>
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default MobileMenu;
