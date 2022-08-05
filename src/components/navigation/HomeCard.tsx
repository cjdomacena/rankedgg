import { Link } from "react-router-dom";
type Props = {
  to: string;
  title: string;
};
const HomeCard = ({ to, title }: Props) => {
  return (
    <Link to={to}>
      <div className=" h-60 w-80 bg-white/5 rounded shadow-xl grid place-items-center hover:-translate-y-2 hover:-translate-x-2 transition-transform">
        <h1 className="text-white text-2xl font-bold">{title}</h1>
      </div>
    </Link>
  );
};

export default HomeCard;
