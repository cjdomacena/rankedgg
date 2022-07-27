import React from "react";

type Props = {
  imgSrc: string;
  name: string;
  roles: string[];
};

const HeroHeader = ({ imgSrc, name, roles }: Props) => {
  return (
    <div className="text-lg flex items-center mb-4 w-fit ">
      <img src={imgSrc} className="w-auto h-16 object-fill rounded shadow" />
      <h4 className=" p-2 w-fit text-gray-100 font-semibold tracking-wide text-2xl">{name}</h4>
      <div className="flex gap-2 flex-wrap">
        {roles.map((role) => (
          <p key={`role-${role}`} className="badge">
            {role}
          </p>
        ))}
      </div>
    </div>
  );
};

export default HeroHeader;
