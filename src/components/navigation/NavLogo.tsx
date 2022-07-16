import DotaLogo from "../Logo/DotaLogo";

type Props = {}

const NavLogo = (props: Props) => {
  return (
    <div className="flex gap-2 items-center">
      <DotaLogo className="w-10  h-10 fill-neutral-800 hover:fill-neutral-200 transition-all duration-500 hover:text-black" />
      <div>
        <h1 className="text-neutral-200 font-noto-sans font-black leading-none">Dota Buffer</h1>
        <p className="text-xs text-neutral-400">More buffer than dotabuff</p>
      </div>
    </div>
  );
}

export default NavLogo