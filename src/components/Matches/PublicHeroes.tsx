import { BiCheckCircle, BiXCircle } from 'react-icons/bi';
import HeroIconsLayout from '../Layouts/HeroIconsLayout';

type Props = {
  isRadiantWin: boolean,
  radiantTeam: number[],
  direTeam: number[]
}

const PublicHeroes = ({ radiantTeam, direTeam, isRadiantWin }: Props) => {
  console.log(radiantTeam)
  return (
    <div className="flex gap-4 p-3 mt-1 items-center rounded flex-col w-full shadow-2xl border border-black/20 bg-black/30">
      <div className="flex items-center gap-2">
        {isRadiantWin ? (
          <BiCheckCircle className="w-5 h-5 text-emerald-500" />
        ) : (
          <BiXCircle className="w-5 h-5 text-red-500" />
        )}
        <HeroIconsLayout ids={radiantTeam} type="radiant" />
      </div>
      <div className="flex items-center gap-2">
        {!isRadiantWin ? (
          <BiCheckCircle className="w-5 h-5  text-emerald-500" />
        ) : (
          <BiXCircle className="w-5 h-5 text-red-500" />
        )}
        <HeroIconsLayout ids={direTeam} type="dire" />
      </div>
    </div>
  );
}

export default PublicHeroes