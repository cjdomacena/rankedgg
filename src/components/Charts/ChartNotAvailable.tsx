import React from 'react'

type Props = {}

const ChartNotAvailable = (props: Props) => {
  return (
    <div className="flex-grow">
      <div className="p-4 my-8">
        <div className="w-full h-60 bg-black/40  grid place-items-center">
          <h4 className="text-xs text-gray-500">Data not yet available.</h4>
        </div>
      </div>
      <div className="my-8 p-4">
        <div className="w-full h-60 bg-black/40  grid place-items-center">
          <h4 className="text-xs text-gray-500">Data not yet available.</h4>
        </div>
      </div>
    </div>
  );
}

export default ChartNotAvailable