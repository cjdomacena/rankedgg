import { IoPeopleOutline } from "react-icons/io5";
import { useGetProMatches } from "../api";
import PageHeader from "../components/Header/PageHeader";
import PrimaryLayout from "../components/Layouts/PrimaryLayout";
import { useState } from "react";
import ErrorComponent from "../components/Error";
import { formatStartTime } from "../../utils";

type Props = {};

const ProMatches = (props: Props) => {
  enum stat {
    "success",
    "loading",
    "error"
  }
  // const { data: matches, status } = useGetProMatches();
  const status:any = "success";
  const matches = [
	{
		"match_id": 6672903922,
		"duration": 1949,
		"start_time": 1658499787,
		"radiant_team_id": 6568822,
		"radiant_name": "Burning Fire",
		"dire_team_id": 8769466,
		"dire_name": "EZ KATKA",
		"leagueid": 14401,
		"league_name": "European Pro League Season 2",
		"series_id": 687723,
		"series_type": 1,
		"radiant_score": 25,
		"dire_score": 43,
		"radiant_win": false
	},]
  const [show, setShow] = useState<number>(15);
  const handleChange = (e: any) => {
    setShow(e.currentTarget.value);
  };

  switch (status) {
    case "loading": {
      return (
        <PrimaryLayout>
          <div className="container mx-auto p-4">
            <PageHeader icon={<IoPeopleOutline className="mr-1 w-6 h-6" />} title="Pro Matches" />
          </div>
          <div className="container mx-auto p-4 flex flex-wrap gap-4">
            <div className="p-4 bg-gray-600 animate-pulse w-full rounded"></div>
            <div className="p-4 bg-gray-600 animate-pulse w-full rounded"></div>
            <div className="p-4 bg-gray-600 animate-pulse w-full rounded"></div>
          </div>
        </PrimaryLayout>
      );
    }
    case "error": {
      return <ErrorComponent />;
    }
    case "success": {
      return (
        <PrimaryLayout>
          <div className="container mx-auto p-4 flex items-center gap-4 justify-between flex-wrap">
            <div className="flex items-center gap-1">
              <PageHeader icon={<IoPeopleOutline className="mr-1 w-6 h-6" />} title="Pro Matches" />
              <span className=" badge">Top</span>
            </div>
            <div>
              <p>
                Showing
                <select
                  className="text-white font-semibold bg-gray-800 rounded  ring-gray-600 ring-2 mx-2"
                  value={show}
                  onChange={handleChange}>
                  <option value={15}>15</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                  <option value={matches.length}>{matches.length}</option>
                </select>
                of <span className="text-white font-bold">{matches.length} </span>
                results
              </p>
            </div>
          </div>
          <div className="container mx-auto p-4">
            <div className=" bg-gray-700 w-fit rounded p-4 border-l-4 border-l-info  shadow-xl">
              <div className="flex gap-4 pb-2">
                <div>
                  <h1 className="text-sm  font-bold">{matches[0].radiant_name}</h1>
                  <p className="text-xs font-bold">Radiant</p>
                </div>
                <div>
                  <h1 className="text-sm  font-bold">{matches[0].dire_name}</h1>
                  <p className="text-xs font-bold">Dire</p>
                </div>
              </div>
              <p className="  text-blue-300 text-xs">{matches[0].league_name}</p>
             
            </div>
          </div>
        </PrimaryLayout>
      );
    }
    default: {
      return <ErrorComponent />;
    }
  }
};

export default ProMatches;
