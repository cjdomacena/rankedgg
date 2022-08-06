import { IoIosPerson } from "react-icons/io";

const PlayerCardLoading = () => {
  return (
    <div className="bg-black/30 p-4 space-y-2 rounded shadow flex items-center gap-4">
      <IoIosPerson className="w-16 h-16 text-gray-600 rounded-full ring-2 p-1 ring-white/5" />
      <div className="flex-grow">
        <h1 className="text-2xs text-gray-400">Loading...</h1>

        <div className="w-full">
          <label className="label p-0">
            <span className="label-text-alt">0 Wins</span>
            <span className="label-text-alt">0 games</span>
          </label>
          <progress className="progress w-full progress-info bg-white/20" />
        </div>
      </div>
    </div>
  );
};

export default PlayerCardLoading;
