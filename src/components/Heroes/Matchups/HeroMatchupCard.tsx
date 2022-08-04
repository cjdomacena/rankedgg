import HeroIcon from "../HeroIcon";

type Props = {
  hero: any;
  max: number;
};

const HeroMatchupCard = ({ hero, max }: Props) => {
  return (
    <div
      className="w-full p-4 inline-flex gap-4 items-center bg-black/40 ring-2 ring-white/5 rounded"
      key={hero.hero_id}
    >
      <HeroIcon heroIndex={hero.hero_id} isRadiant={true} />
      <div className="w-full">
        <label className="label p-0">
          <span className="label-text-alt">{hero.wins} Wins</span>
          <span className="label-text-alt">{hero.games_played} games</span>
        </label>
        <progress
          className="progress w-full progress-success bg-white/20"
          value={hero.wins}
          max={max}
        />
      </div>
    </div>
  );
};

export default HeroMatchupCard;
