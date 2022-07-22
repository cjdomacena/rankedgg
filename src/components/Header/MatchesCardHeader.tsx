import React from "react";

type Props = {
  isRadiantWin: boolean;
  heroes?: string[] | number[];
  isRadiant: boolean;
};



const MatchesCardHeader = ({ isRadiant, isRadiantWin, heroes }: Props) => {
  return (
    <div>
      <p className="text-white">{isRadiant ? "Radiant" : "Dire"}</p>
      <p className="text-xs font-semibold xl:text-left lg:text-left md:text-left text-center">
        {isRadiantWin && isRadiant ? (
          <span className="text-green-500">Victory</span>
        ) : !isRadiantWin && !isRadiant ? (
          <span className="text-green-500">Victory</span>
        ) : (
          <span className="text-red-500">Defeat</span>
        )}
      </p>
    </div>
  );
};

export default MatchesCardHeader;
