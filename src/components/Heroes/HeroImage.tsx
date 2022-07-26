import { Link } from "react-router-dom";
import { getImageUrl } from "../../../utils";

type Props = {
  src: string | null,
  isSearched?: boolean,
  className?: string
  heroName?:string
  id?: string | number
}

const HeroImage: React.FC<Props> = ({ src, isSearched = false, className, heroName, id }) => {
  return (
    <div
      className={`w-full hover:scale-125 border border-gray-800 transition-transform rounded ${className} tooltip tooltip-primary capitalize hover:z-20`}
      data-tip={heroName}>
      {src === null ? (
        <div className=" h-24 w-full bg-slate-900 animate-pulse"></div>
      ) : (
        <Link to={`/heroes/${id}`}>
          <img
            src={getImageUrl(null, src)}
            className={`w-full h-auto rounded-sm cursor-pointer transition-opacity `}
            loading="eager"
          />
        </Link>
      )}
    </div>
  );
};

export default HeroImage;