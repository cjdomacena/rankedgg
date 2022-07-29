import React from "react";
import { getImageUrl } from "../../../utils";

type Props = {
  children?: JSX.Element | JSX.Element[] | null;
};

const PageHeaderBG = ({ children }: Props) => {
  return (
    <div className="w-full   text-white relative">
      <img
        src={
          "https://images.unsplash.com/photo-1650954933593-6c9342ba0331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1943&q=80"
        }
        className="absolute top-1/2 bottom-1/2 w-full max-h-screen -z-10 blur-[120px] select-none"
      />
      <div>{children}</div>
    </div>
  );
};

export default PageHeaderBG;
