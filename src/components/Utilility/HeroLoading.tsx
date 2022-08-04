import PrimaryLayout from "../Layouts/PrimaryLayout";

export const HeroLoading = () => {
  return (
    <PrimaryLayout className="self-center p-4 my-4 ">
      <div className="container mx-auto h-full grid grid-cols-7 gap-4">
        <div className="w-full   2xl:col-span-5 xl:col-span-5 lg:col-span-5 col-span-7 flex flex-col gap-4">
          <div className="w-full p-12 bg-neutral animate-pulse"></div>
          <div className="w-full p-8 bg-neutral animate-pulse"></div>
          <div className="w-full p-12 bg-neutral animate-pulse"></div>
          <div className="w-full p-12 bg-neutral animate-pulse"></div>
          <div className="w-full p-12 bg-neutral animate-pulse"></div>

          <div className="w-full p-12 bg-neutral animate-pulse"></div>
        </div>
        <div className=" w-full 2xl:col-span-2 xl:col-span-2 lg:col-span-2 col-span-7 flex flex-col gap-4">
          <div className="w-full p-24 bg-neutral animate-pulse"></div>
          <div className="w-full p-24 bg-neutral animate-pulse"></div>
          <div className="w-full p-12 bg-neutral animate-pulse"></div>
        </div>
      </div>
    </PrimaryLayout>
  );
};
