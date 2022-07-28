import { BiCheckCircle, BiXCircle } from 'react-icons/bi';
import HeroIconsLayout from '../Layouts/HeroIconsLayout';

type Props = {
	isRadiantWin: boolean,
	radiantTeam: string,
	direTeam: string
}

const PublicHeroes = ({radiantTeam, direTeam, isRadiantWin}: Props) => {
  return (
    <div className="flex gap-4 p-3 mt-1 items-center rounded flex-col w-full shadow-2xl border border-black/20 bg-white/10">
      <div className="flex items-center gap-2">
        {isRadiantWin ? (
          <BiCheckCircle className="w-5 h-5 text-emerald-500" />
        ) : (
          <BiXCircle className="w-5 h-5 text-red-500" />
        )}
        <HeroIconsLayout ids={radiantTeam.split(",")} type="radiant" />
      </div>
      <div className="flex items-center gap-2">
        {!isRadiantWin ? (
          <BiCheckCircle className="w-5 h-5  text-emerald-500" />
        ) : (
          <BiXCircle className="w-5 h-5 text-red-500" />
        )}
        <HeroIconsLayout ids={direTeam.split(",")} type="dire" />
      </div>
    </div>
  );
}

export default PublicHeroes