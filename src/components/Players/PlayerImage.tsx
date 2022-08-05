import { useState } from "react";
import { IoIosPerson } from "react-icons/io";

type Props = {
  src: string;
};

const PlayerImage = ({ src }: Props) => {
  const [error, setError] = useState<boolean>(false);
  const onError = () => {
    setError(true);
  };

  return error ? (
    <IoIosPerson className="w-16 h-16 text-gray-600 rounded-full ring-2 p-1 ring-white/5" />
  ) : (
    <img
      src={src}
      onError={onError}
      className="w-auto h-16 rounded-full ring-2 ring-white/5"
    />
  );
};

export default PlayerImage;
