type Props = {
  src: string | null,
  isSearched?: boolean,
}

const HeroIcon:React.FC<Props> = ({src, isSearched = false}) => {
  const BASE_URL = "http://cdn.dota2.com";
  return (
    <div className="w-full hover:-translate-x-1 hover:-translate-y-1 transition-transform  rounded ">
      {src === null ? (
        <div className=" h-24 w-full bg-slate-900 animate-pulse"></div>
      ) : (
        <img src={`${BASE_URL}/${src}`} className={`w-full h-auto rounded-sm cursor-pointer transition-opacity `} loading="lazy"/>
      )}
    </div>
  );
}

export default HeroIcon