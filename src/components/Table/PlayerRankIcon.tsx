import React from "react";

type Props = {
  rank: string ;
  imgSrc: string | null;
  title:string;
};

const PlayerRankIcon = ({ rank, imgSrc, title}: Props) => {
  return (
    <p className="flex items-center justify-center tooltip capitalize text-xs tooltip-bottom gap-1" data-tip={title}>
     {imgSrc ?  <img src={imgSrc} className="w-6 h-auto" placeholder={rank} /> : null}
	  {rank}
    </p>
  );
};

export default PlayerRankIcon;
