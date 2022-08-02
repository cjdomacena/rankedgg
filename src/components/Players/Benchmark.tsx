import React from "react";
import { getHighlightedPlayers, getImageUrl } from "../../../utils";
import { testData } from "../../../utils/testData";

type Props = {
  props: {
    name: string;
    title: string;
    isRadiant: boolean;
    heroId: number;
    value: number;
  } | null;
};

const Benchmark = ({ props }: Props) => {
  if (props) {
    return (
      <div className="container mx-auto ">
        <div
          className={`grid p-4 place-items-center shadow-2xl   bg-white/5 rounded  w-full ring-2 ring-neutral`}>
          {props.value ? (
            <div className="text-center text-2xs min-h-[100px]">
              <img
                src={getImageUrl(props.heroId, "")}
                className={`w-9 h-9 ${
                  props.isRadiant ? "custom-shadow-radiant" : "custom-shadow"
                } mx-auto mb-2 -z-10`}
              />
              <h2 className="font-bold leading-0 text-base text-white">
                {props.name ?? (
                  <span className="text-xs font-normal text-gray-400">Name not available</span>
                )}
              </h2>
              <p>{props.title}</p>
              <p className="text-white font-bold text-sm">{props.value ?? "NA"}</p>
            </div>
          ) : (
            <div className="text-center text-2xs min-h-[100px] grid place-items-center">
              <div className="flex flex-col justify-center">
                <span>{props.title}</span>
                <span className="text-xs font-normal text-gray-400">Data not available</span>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
  return (
    <div className="container mx-auto my-12">
      <div
        className={`grid p-4 place-items-center shadow-lg w-full  bg-black/20 rounded gap-1  h-auto ring-2 ring-blue-50/30 `}>
        <h4 className="text-xs">Data not available.</h4>
      </div>
    </div>
  );
};

export default Benchmark;
