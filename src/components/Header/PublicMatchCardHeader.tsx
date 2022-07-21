import { AiOutlineCheckCircle, AiOutlineClose } from "react-icons/ai";
type Props = {
  isRadiant: boolean;
  isRadiantWin: boolean;
};

const PublicMatchCardHeader = ({ isRadiant, isRadiantWin }: Props) => {
  switch (isRadiantWin) {
    case true: {
      return (
        <div className="flex items-center gap-1">
          {isRadiant ? (
            <AiOutlineCheckCircle className=" text-green-400" />
          ) : (
            <AiOutlineClose className=" text-red-400" />
          )}
          <p className="text-sm">{isRadiant ? "Radiant" : "Dire"}</p>
        </div>
      );
    }
    case false: {
      return (
        <div className="flex items-center gap-1">
          {!isRadiant ? (
            <AiOutlineCheckCircle className=" text-green-400" />
          ) : (
            <AiOutlineClose className=" text-red-400" />
          )}
          <p className="text-sm">{isRadiant ? "Radiant" : "Dire"}</p>
        </div>
      );
    }
	default: {
		return (
      <div className="flex items-center gap-1">
        <AiOutlineClose className=" text-red-400" />
        <p className="text-sm">Not Available</p>
      </div>
    );
	}
  }
};

export default PublicMatchCardHeader;
