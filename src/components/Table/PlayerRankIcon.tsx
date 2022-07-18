import React from "react";

type Props = {
  rank: string;
  imgSrc: string;
};

const PlayerRankIcon = ({ rank, imgSrc }: Props) => {
  return (
    <p className="flex items-center justify-center tooltip tooltip-bottom" data-tip={rank}>
      <img src={imgSrc} className="w-6 h-auto" placeholder={rank} />
	  PR
    </p>
  );
};

export default PlayerRankIcon;
