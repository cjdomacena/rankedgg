import React from "react";

type Props = {
  className?: string;
  children: JSX.Element | JSX.Element[];
};

const PrimaryLayout = ({ className = "", children }: Props) => {
  return <section className={`py-4 h-full w-full ${className}`}>{children}</section>;
};

export default PrimaryLayout;
