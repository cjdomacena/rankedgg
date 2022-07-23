import React from "react";

type Props = {
  children: JSX.Element | JSX.Element[];
};

const PageHeaderBG = ({ children }: Props) => {
  return (
    <div className="w-full h-auto bg-gradient-to-r from-info/20 via-info/40 to-[#ec3124]/60 text-white">
      <div className="bg-black/60  py-2">{children}</div>
    </div>
  );
};

export default PageHeaderBG;
