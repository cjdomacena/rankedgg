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
        {isRadiantWin ? "Win" : !isRadiantWin && !isRadiant ? "Win" : "Lose"}
      </p>
    </div>
  );
};

export default MatchesCardHeader;
