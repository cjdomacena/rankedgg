type Props = {
  src: string | null,
  isSearched?: boolean,
  className?: string
}

const HeroIcon:React.FC<Props> = ({src, isSearched = false, className}) => {
  const BASE_URL = "http://cdn.dota2.com";
  return (
    <div className={`w-full hover:scale-150 transition-transform rounded ${className}`}>
      {src === null ? (
        <div className=" h-24 w-full bg-slate-900 animate-pulse"></div>
      ) : (
        <img src={`${BASE_URL}/${src}`} className={`w-full h-auto rounded-sm cursor-pointer transition-opacity `} loading="eager"/>
      )}
    </div>
  );
}

export default HeroIcon