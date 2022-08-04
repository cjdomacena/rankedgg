import { TbCircleDotted } from "react-icons/tb";

export const DefaultLoading = () => {
  return (
    <div className="min-h-screen h-full w-screen  overflow-x-hidden bg-[#101729] absolute top-0 z-[99999] grid place-items-center">
      <div className="inline-flex items-center gap-2">
        <TbCircleDotted className="  w-6 h-6 animate-spin-slow" />
        <h1 className="text-white text-2xl font-black">RankedGG</h1>
      </div>
    </div>
  );
};
