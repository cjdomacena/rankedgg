import React, { Dispatch, SetStateAction } from "react";
import { FaCoins } from "react-icons/fa";

type Props = {
  title: string;
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
};

const ChartHeader = ({ title, toggle, setToggle }: Props) => {
  return (
    <div className="bg-black/50 flex items-center justify-center px-6 py-2 rounded-t">
      <h2 className="text-white font-semibold text-sm  flex items-center gap-2">
        {title === "Gold" ? (
          <FaCoins className="text-[#f4d54b] w-4 h-4 mr-1" />
        ) : (
          <div className="border h-6 w-6 rounded-full text-2xs grid place-items-center">
            <p className="ml-0.5">{title}</p>
          </div>
        )}

        {toggle ? "Team" : "Players"}
      </h2>
      <ul className="text-xs flex btn-group w-fit ml-auto p-4 ">
        <button
          className={`btn btn-xs ${toggle ? "btn-active" : ""}`}
          onClick={() => setToggle(true)}>
          Team
        </button>
        <button
          className={`btn btn-xs ${!toggle ? "btn-active" : ""}`}
          onClick={() => setToggle(false)}>
          Players
        </button>
      </ul>
    </div>
  );
};

export default ChartHeader;
