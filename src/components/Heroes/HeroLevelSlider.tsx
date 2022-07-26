import React, { Dispatch, SetStateAction } from 'react'

type Props = {
	imgSrc: string,
	level: number,
	setLevel: Dispatch<SetStateAction<number>>
}

const HeroLevelSlider = ({imgSrc, level, setLevel}: Props) => {
  return (
    <div className="w-full h-auto bg-neutral flex items-center p-4 rounded">
      <div className="p-1 rounded-full">
        <img src={imgSrc} className="w-auto h-auto object-fill" />
      </div>
      <input
        type="range"
        min="1"
        max="30"
        step="1"
        value={level}
        className="w-full bg-transparent range range-xs mt-0.5 mx-4 opacity-90 flex-grow "
        onChange={(e: any) => setLevel(e.currentTarget.value)}
      />
      <span className="text-xs mt-1 whitespace-nowrap">Level {level}</span>
    </div>
  );
}

export default HeroLevelSlider