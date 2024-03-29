import { useState, useEffect } from "react";

// https://www.reddit.com/r/reactjs/comments/l2yz8h/how_to_check_if_image_exists/

export const ImageExists = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) => {
  const [error, setError] = useState(false);

  const onError = () => {
    setError(true);
  };

  return error ? (
    <img
      src={`https://cdn.cloudflare.steamstatic.com//apps/dota2/images/abilities/invoker_empty1_md.png `}
      className={`rounded ${className}`}
    />
  ) : (
    <img src={src} alt={alt} onError={onError} className={`rounded ${className}`} />
  );
};

export const TeamImageExists = ({
  src,
  isRadiantWin,
  isRadiant,
}: {
  src: string | null;
  isRadiantWin: boolean;
  isRadiant: boolean;
}) => {
  const [error, setError] = useState(false);

  const onError = () => {
    setError(true);
  };

  return error ? (
    <div
      className={`w-20 h-20 grid place-items-center ring ${
        isRadiantWin && isRadiant
          ? " ring-emerald-500"
          : !isRadiant && !isRadiantWin
          ? " ring-emerald-500"
          : "ring-red-500"
      }`}>
      <h1 className="font-black text-white text-sm text-center">
        {isRadiant ? "Radiant Team" : "Dire Team"}
      </h1>
    </div>
  ) : isRadiant ? (
    <img
      src={src ?? ""}
      onError={onError}
      className={`w-24 h-24  p-0.5  ${isRadiantWin ? "ring-emerald-500" : "ring-red-500"}`}
    />
  ) : (
    <img
      src={src ?? ""}
      onError={onError}
      className={`w-24 h-24  p-0.5  ${!isRadiantWin ? "ring-emerald-500" : "ring-red-500"} `}
    />
  );
};

export const useOnClickOutside = (ref: any, handler: any) => {
  useEffect(
    () => {
      const listener = (event: any) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler],
  );
};
