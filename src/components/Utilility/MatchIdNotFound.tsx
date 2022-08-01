import React from "react";
import PageHeaderBG from "../Header/PageHeaderBG";
import PrimaryLayout from "../Layouts/PrimaryLayout";
import TextLoading from "./TextLoading";

type Props = {
  matchId: string | number;
};

const MatchIdNotFound = ({ matchId }: Props) => {
  return (
    <PrimaryLayout>
      <PageHeaderBG />
      <div className=" bg-black/30">
        <div className="container mx-auto px-12 py-4 gap-2 flex justify-between items-center">
          <div className="w-full space-y-2">
            <h1>Match ID: {matchId} not found</h1>
          </div>
          <div className="w-56 space-y-2 text-xs">
            <h1>Data not available.</h1>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-8 container mx-auto gap-4 p-8">
        <div className="2xl:col-span-2 xl:col-span-2 col-span-8">
          <div className="w-full h-12 bg-black/40  grid place-items-center">
            <h4 className="text-xs text-gray-500">Data not available.</h4>
          </div>
          <div className="space-y-4 mt-4">
            <div className="w-full h-36 bg-black/40  grid place-items-center">
              <h4 className="text-xs text-gray-500">Data not available.</h4>
            </div>
            <div className="w-full h-36 bg-black/40  grid place-items-center">
              <h4 className="text-xs text-gray-500">Data not available.</h4>
            </div>
            <div className="w-full h-36 bg-black/40  grid place-items-center">
              <h4 className="text-xs text-gray-500">Data not available.</h4>
            </div>
          </div>
        </div>
        <div className="2xl:col-span-3 xl:col-span-3 col-span-8">
          <div className="w-full h-96 bg-black/40  grid place-items-center">
            <h4 className="text-xs text-gray-500">Data not available.</h4>
          </div>
        </div>
        <div className="2xl:col-span-3 xl:col-span-3 col-span-8">
          <div className="w-full h-96 bg-black/40  grid place-items-center">
            <h4 className="text-xs text-gray-500">Data not available.</h4>
          </div>
        </div>
      </div>
    </PrimaryLayout>
  );
};

export default MatchIdNotFound;
