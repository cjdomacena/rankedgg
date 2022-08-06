import { useEffect, useState } from "react";
import { BiCheckCircle, BiXCircle } from "react-icons/bi";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { filterTeamMatches, formatStartTime } from "../../utils";
import { ImageExists } from "../../utils/hooks";
import { useGetTeamMatches } from "../api";
import { TTeamMatches } from "../types";
type Props = {
  teamLogo: string;
  teamName: string;
  id: number;
  interval: number;
};
const TeamMatches = ({ id, interval }: Props) => {
  const { data } = useGetTeamMatches(id);
  const [matches, setMatches] = useState<TTeamMatches[] | null>(null);
  useEffect(() => {
    if (data) {
      if (!data.hasOwnProperty("error") || data.length > 0) {
        setMatches(filterTeamMatches(data, interval));
      }
    }
    return () => {
      setMatches(null);
    };
  }, [data, interval, id]);
  return (
    <>
      {matches && matches.length > 0
        ? matches.map((match: TTeamMatches) => (
            <div key={`team-matches-${match.match_id}-${match.duration}`}>
              <div className="flex justify-between px-1 mb-2">
                <p className="text-2xs max-w-[220px] truncate">
                  {match.league_name}
                </p>
                <div>
                  <p className="text-2xs ">
                    {formatStartTime(match.start_time, match.duration)}
                  </p>
                </div>
              </div>
              <div
                className="p-4 rounded w-full flex bg-black/30  items-center
               2xl:flex-nowrap
              xl:flex-nowrap lg:flex-nowrap flex-wrap
             justify-between ring-2 ring-white/5
              "
              >
                <div className={`flex items-center`}>
                  <div className="flex items-center gap-2 justify-start w-24">
                    {(match.radiant && match.radiant_win) ||
                    (!match.radiant && !match.radiant_win) ? (
                      <p className="flex items-center gap-1 justify-center">
                        <BiCheckCircle className="text-green-500 w-4 h-4" />
                        <span className="text-2xs  font-bold text-white mt-1">
                          Victory
                        </span>
                      </p>
                    ) : (
                      <p className="flex items-center gap-1 justify-center">
                        <BiXCircle className="text-red-500 w-4 h-4" />
                        <span className="text-2xs   mt-1">Defeat</span>
                      </p>
                    )}
                  </div>
                  <span className="text-center 2xl:w-fit xl:w-fit lg:w-fit w-full">
                    vs
                  </span>
                  <Link to={`/teams/${match.opposing_team_id}`}>
                    <div
                      className="flex items-center w-24 tooltip"
                      data-tip={match.opposing_team_name}
                    >
                      <ImageExists
                        src={match.opposing_team_logo}
                        alt={match.opposing_team_name}
                        className="w-auto h-8 mx-auto"
                      />
                    </div>
                  </Link>
                </div>
                <Link
                  to={`/matches/professional/${match.match_id}`}
                  className="flex whitespace-nowrap justify-self-end btn btn-sm rounded"
                >
                  <button className="text-xs">Match Details</button>
                  <FaArrowCircleRight className="ml-1" />
                </Link>
              </div>
            </div>
          ))
        : [0, 1, 2, 3, 4, 5].map((n) => (
            <div
              className="bg-black/30 h-24 w-full animate-pulse"
              key={`team-matches-${n}`}
            ></div>
          ))}
    </>
  );
};

export default TeamMatches;
