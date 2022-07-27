import React from "react";
import { useState } from "react";


// https://www.reddit.com/r/reactjs/comments/l2yz8h/how_to_check_if_image_exists/

export const ImageExists = ({ src, alt }: {src:string, alt:string}) => {
  const [error, setError] = useState(false);

  const onError = () => {
    setError(true);
  };

  return error ? (
    <img
      src={`https://cdn.cloudflare.steamstatic.com//apps/dota2/images/abilities/invoker_empty1_md.png`}
      className="rounded"
    />
  ) : (
    <img src={src} alt={alt} onError={onError} className="rounded" />
  );
};
