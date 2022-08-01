import React from "react";

type Props = {
  children: JSX.Element | JSX.Element[];
  className?: string;
};

const ProMatchLayout = ({ children, className }: Props) => {
  return (
    <div
      className={`grid gap-2 w-full grid-cols-[repeat(auto-fit,minmax(250px,1fr))] mt-2 ${className}`}>
      {children}
    </div>
  );
};

export default ProMatchLayout;
