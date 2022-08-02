import React from 'react'
import PageHeaderBG from '../Header/PageHeaderBG';
import PrimaryLayout from '../Layouts/PrimaryLayout';
import TextLoading from './TextLoading';

type Props = {}

const MatchLoading = (props: Props) => {
  return (
    <>
      <div className=" bg-black/30">
        <div className="container mx-auto px-8 py-4 gap-2 flex justify-between items-center">
          <div className="w-56 space-y-2">
            <TextLoading />
            <TextLoading />
            <TextLoading />
          </div>
          <div className="w-56 space-y-2">
            <TextLoading />
            <TextLoading />
            <TextLoading />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-8 container mx-auto gap-4 p-8">
        <div className="2xl:col-span-2 xl:col-span-2 col-span-8">
          <div className="w-full h-12 bg-black/40 animate-pulse"></div>
          <div className="space-y-4 mt-4">
            <div className="w-full h-36 bg-black/40 animate-pulse"></div>
            <div className="w-full h-36 bg-black/40 animate-pulse"></div>
            <div className="w-full h-36 bg-black/40 animate-pulse"></div>
          </div>
        </div>
        <div className="2xl:col-span-3 xl:col-span-3 col-span-8">
          <div className="w-full h-96 bg-black/40 animate-pulse"></div>
        </div>
        <div className="2xl:col-span-3 xl:col-span-3 col-span-8">
          <div className="w-full h-96 bg-black/40 animate-pulse"></div>
        </div>
      </div>
    </>
  );
}

export default MatchLoading