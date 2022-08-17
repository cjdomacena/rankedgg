import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import React, { useEffect, useState } from "react";
import { THeroTrend } from "../../types";
import TableHeaderRow from "./TableHeaderRow";
import rank_1 from "../../assets/rank_icon_1.png";
import rank_2 from "../../assets/rank_icon_2.png";
import rank_3 from "../../assets/rank_icon_3.png";
import rank_4 from "../../assets/rank_icon_4.png";
import rank_5 from "../../assets/rank_icon_5.png";
import rank_6 from "../../assets/rank_icon_6.png";
import rank_7 from "../../assets/rank_icon_7.png";
import rank_8 from "../../assets/rank_icon_8.png";
import PlayerRankIcon from "./PlayerRankIcon";
import { COLUMN_HEADERS, DEFAULT_HERO_TREND } from "../../../utils/constants";
import TableBodyRow from "./TableBodyRow";

type Props = {
  heroStats: THeroTrend[] | null;
};

const defaultVal: THeroTrend[] = [
  {
    id: 1,
    name: "npc_dota_hero_antimage",
    localized_name: "Anti-Mage",
    icon: "/apps/dota2/images/dota_react/heroes/icons/antimage.png?",
    hero_id: 1,
    pro_ban: 406,
    pro_pick: 74,
    pro_win: 38,
    pro_wr: 13,
    "1_pick": 41185,
    "1_win": 22958,
    "1_wr": 55.74,
    "2_pick": 60684,
    "2_win": 32906,
    "2_wr": 54.23,
    "3_pick": 57065,
    "3_win": 30593,
    "3_wr": 53.61,
    "4_pick": 40662,
    "4_win": 21238,
    "4_wr": 52.23,
    "5_pick": 21628,
    "5_win": 11149,
    "5_wr": 51.55,
    "6_pick": 9530,
    "6_win": 4923,
    "6_wr": 51.66,
    "7_pick": 4301,
    "7_win": 2140,
    "7_wr": 49.76,
    "8_pick": 1135,
    "8_win": 539,
    "8_wr": 47.49,
    turbo_picks: 250102,
    turbo_wins: 126983,
  },
];

const hiddenColumns = {
  icon: false,
  "1_pick": false,
  "1_win": false,
  "2_pick": false,
  "2_win": false,
  "3_pick": false,
  "3_win": false,
  "4_pick": false,
  "4_win": false,
  "5_pick": false,
  "5_win": false,
  "6_pick": false,
  "6_win": false,
  "7_pick": false,
  "7_win": false,
  "8_pick": false,
  "8_win": false,
  id: false,
  name: false,
  hero_id: false,
  turbo_picks: false,
  turbo_wins: false,
};

const getRankIcon = (rank: string) => {
  const tempRank = rank.split("_");
  switch (tempRank[0]) {
    case "1" || 1: {
      if (tempRank[1] === "wr") {
        return <PlayerRankIcon rank={"WR %"} title={"Herald Win Rate"} imgSrc={rank_1} />;
      }
      return <PlayerRankIcon rank={"pr"} title={"Herald Pick Rate"} imgSrc={rank_1} />;
    }
    case "2" || 2: {
      if (tempRank[1] === "wr") {
        return <PlayerRankIcon rank={"WR %"} title={"Guardian Win Rate"} imgSrc={rank_2} />;
      }
      return <PlayerRankIcon rank={"pr"} title={"Guardian Pick Rate"} imgSrc={rank_2} />;
    }
    case "3" || 3: {
      if (tempRank[1] === "wr") {
        return <PlayerRankIcon rank={"WR %"} title={"Crusader Win Rate"} imgSrc={rank_3} />;
      }
      return <PlayerRankIcon rank={"pr"} title={"Crusader Pick Rate"} imgSrc={rank_3} />;
    }
    case "4" || 4: {
      if (tempRank[1] === "wr") {
        return <PlayerRankIcon rank={"WR %"} title={"Archon Win Rate"} imgSrc={rank_4} />;
      }
      return <PlayerRankIcon rank={"PR"} title={"Archon Pick Rate"} imgSrc={rank_4} />;
    }
    case "5" || 5: {
      if (tempRank[1] === "wr") {
        return <PlayerRankIcon rank={"WR %"} title={"Legend Win Rate"} imgSrc={rank_5} />;
      }
      return <PlayerRankIcon rank={"PR"} title={"Legend Pick Rate"} imgSrc={rank_5} />;
    }
    case "6" || 6: {
      if (tempRank[1] === "wr") {
        return <PlayerRankIcon rank={"WR %"} title={"Ancient Win Rate"} imgSrc={rank_6} />;
      }
      return <PlayerRankIcon rank={"PR"} title={"Ancient Pick Rate"} imgSrc={rank_6} />;
    }
    case "7" || 7: {
      if (tempRank[1] === "wr") {
        return <PlayerRankIcon rank={"WR %"} title={"Divine Win Rate"} imgSrc={rank_7} />;
      }
      return <PlayerRankIcon rank={"PR"} title={"Divine Pick Rate"} imgSrc={rank_7} />;
    }
    case "8" || 8: {
      if (tempRank[1] === "wr") {
        return <PlayerRankIcon rank={"WR %"} title={"Immortal Win Rate"} imgSrc={rank_8} />;
      }
      return <PlayerRankIcon rank={"PR"} title={"Immortal Pick Rate"} imgSrc={rank_8} />;
    }
    default:
      return <p className="tooltip tooltip-bottom" data-tip="Pro Win Rate">{rank.split("_").join(" ")}</p>;
  }
};

const Table: React.FC<Props> = ({ heroStats }) => {
  const progressBarKeys = [
    "pro_wr",
    "1_wr",
    "2_wr",
    "3_wr",
    "4_wr",
    "5_wr",
    "6_wr",
    "7_wr",
    "8_wr",
  ];
  const [data, setData] = useState<THeroTrend[]>(DEFAULT_HERO_TREND);
  const [sorting, setSorting] = useState<SortingState>([]);

  const columnData: any = Object.keys(defaultVal[0]).map((key, index) => {
    if (progressBarKeys.indexOf(key) === -1) {
      return {
        accessorKey: key,
        cell: (item: any) => item.getValue(),
        header: (
          <p className="tooltip tooltip-bottom " data-tip={COLUMN_HEADERS[index]}>
            {COLUMN_HEADERS[index].split('_').join(" ")}
          </p>
        ),
      };
    } else {
      return {
        accessorKey: key,
        cell: (item: any) =>
          !isNaN(item.getValue()) ? (
            <div
              data-tip={`${item.getValue()}%`}
              className="tooltip tooltip-bottom w-16 h-auto z-0 flex flex-col items-start gap-1">
              <p className="text-xs text-gray-400">{item.getValue()} %</p>
              <progress
                className={`progress  border border-gray-800 ${
                  item.getValue() < 50 ? "progress-error" : "progress-success"
                }`}
                value={item.getValue()}
                max={100}
              />
            </div>
          ) : (
            <div
              data-tip={`0%`}
              className="tooltip tooltip-bottom w-16 h-auto  z-0 flex flex-col items-start gap-1">
              <p className="text-xs text-gray-400">{0} %</p>
              <progress
                className="progress progress-info border border-gray-800"
                value={0}
                max={100}
              />
            </div>
          ),
        header: getRankIcon(key),
      };
    }
  });
  const columns: ColumnDef<THeroTrend>[] = columnData;

  useEffect(() => {
    if (heroStats) {
      setData(heroStats);
    }
  }, [heroStats]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: { columnVisibility: hiddenColumns, sorting},
    initialState: {
      pagination: {
        // Custom initial state to modify the defaults
        //pageIndex: 0,
        pageSize: 150
      },
    },
  });

  return (
    <div className="text-neutral-300  overflow-x-auto h-full p-8 ">
      <table className="table  w-full h-full">
        <TableHeaderRow headerGroup={table.getHeaderGroups()} />
        <tbody className="text-xs">
          <TableBodyRow tableRowModel={table.getRowModel()}/>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
