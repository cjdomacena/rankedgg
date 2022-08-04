import pageBg from "./../../assets/pagebg.jpg";

type Props = {
  children?: JSX.Element | JSX.Element[] | null;
};

const PageHeaderBG = ({ children }: Props) => {
  return (
    <div className="w-full   text-white relative">

      {/* <img
        src={pageBg}
        className="absolute top-1/2 bottom-1/2 w-full max-h-screen z-[-99] blur-[280px] select-none"
      /> */}
      <div>{children}</div>
    </div>
  );
};

export default PageHeaderBG;
