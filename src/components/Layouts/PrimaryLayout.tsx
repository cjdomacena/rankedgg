import React from "react";

type Props = {
  className?: string;
  children: JSX.Element | JSX.Element[];
};

const PrimaryLayout = ({ className = "", children }: Props) => {
  return <section className={`h-full w-full ${className} min-h-[calc(100vh - 80px)]`}>{children}</section>;
};

export default PrimaryLayout;
