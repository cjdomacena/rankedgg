import React from "react";

type Props = {
  className?: string;
  children: JSX.Element | JSX.Element[];
};

const PrimaryLayout = ({ className = "", children }: Props) => {
  return <section className={`h-full w-full ${className}`}>{children}</section>;
};

export default PrimaryLayout;
