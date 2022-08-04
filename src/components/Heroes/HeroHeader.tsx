import { useNavigate } from "react-router-dom";
type Props = {
  imgSrc: string;
  name: string;
  roles: string[];
  heroId: number | string;
};

const HeroHeader = ({ imgSrc, name, roles, heroId }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="text-lg flex items-center mb-4 w-fit gap-4 flex-wrap justify-center">
      <img src={imgSrc} className="w-auto h-auto object-fill rounded shadow" />
      <div className="space-y-4 flex flex-col 2xl:items-start xl:items-start lg:items-start md:items-start items-center">
        <h4 className="w-fit text-gray-100 font-semibold tracking-wide text-2xl">
          {name}
        </h4>
        <div className="flex gap-2 flex-wrap justify-center">
          {roles.map((role) => (
            <p key={`role-${role}`} className="badge">
              {role}
            </p>
          ))}
        </div>

        <button
          className="text-sm bg-neutral p-3 rounded hover:bg-neutral/50 transition-opacity ring-2 ring-white/5"
          onClick={() => navigate(`/heroes/${heroId}/breakdown`)}
        >
          Hero Benchmarks
        </button>
      </div>
    </div>
  );
};

export default HeroHeader;
