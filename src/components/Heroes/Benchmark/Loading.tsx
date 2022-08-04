type Props = {
  title: string;
};

const HeroAreaBenchmarkLoading = ({ title }: Props) => {
  return (
    <div className="w-full h-auto bg-black/40 p-2 rounded-lg">
      <div className="p-2">
        <h1 className="ml-1 mt-2 badge">{title}</h1>
      </div>
      <div className="h-64 w-full  rounded bg-black/30 animate-pulse"></div>
    </div>
  );
};

export default HeroAreaBenchmarkLoading;
