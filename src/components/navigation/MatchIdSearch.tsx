import { ChangeEvent, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

type Props = {};

const MatchIdSearch = (props: Props) => {
  const [q, setQ] = useState<number | string>("");
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (Number(e.currentTarget.value) === 0) {
      setQ("");
    }
    setQ(Number(e.currentTarget.value));
  };

  return (
    <div className="input input-group-md flex items-center relative focus-within:ring-2 focus-within:ring-neutral">
      <FaSearch className="" />
      <input
        className="appearance-none input input-ghost focus:outline-0 px-1"
        placeholder="Enter Match ID"
        type="number"
        pattern="[0-9]*"
        value={q}
        onChange={handleChange}
        onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
      />
      {typeof q === "number" || q === "e" ? (
        <button onClick={() => setQ("")} className="bg-none rounded-md  space-x-1">
          <kbd className="kbd bg-white/5 mr-2 w-fit">Clear</kbd>
        </button>
      ) : (
        <div className=" w-16 h-full"></div>
      )}
      <button
        onClick={() => navigate(`/matches/${q}`)}
        className="bg-none rounded-md hover:bg-white/5 space-x-1 cursor-pointer"
        disabled={q ? false : true}
        >
        <kbd className="kbd bg-white/5">Search</kbd>
      </button>
    </div>
  );
};

export default MatchIdSearch;
