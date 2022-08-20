import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  createColumnHelper,
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
  "1_win": false,
  "2_win": false,
  "3_win": false,
  "4_win": false,
  "5_win": false,
  "6_win": false,
  "7_win": false,
  "8_win": false,
  id: false,
  name: false,
  hero_id: false,
  turbo_picks: false,
  turbo_wins: false,
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
    "1_pick",
    "2_pick",
    "3_pick",
    "4_pick",
    "5_pick",
    "6_pick",
    "7_pick",
    "8_pick",
  ];
  const [data, setData] = useState<THeroTrend[]>(DEFAULT_HERO_TREND);
  const [sorting, setSorting] = useState<SortingState>([]);
  const columnHelper = createColumnHelper<THeroTrend>()

  const columnData:any = [
    columnHelper.accessor('localized_name', { header: () => <span>Hero</span>, cell: (info) => info.renderValue()}),
    //columnHelper.accessor('pro_ban', { header: () => <span>Pro Ban</span>, cell: (info) => info.renderValue()}),
    //columnHelper.accessor('pro_pick', { header: () => <span>Pro Pick</span>, cell: (info) => info.renderValue()}),
    //columnHelper.accessor('pro_win', { header: () => <span>Pro Win</span>, cell: (info) => info.renderValue()}),
    //columnHelper.accessor('pro_wr', { header: () => <span>Pro WR</span>, cell: (info) => info.renderValue()}),

/*
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
*/

    columnHelper.group({
      id: 'herald-group',
      header: () => <PlayerRankIcon rank={"HERALD"} title={"Herald"} imgSrc={rank_1}/>,
      columns: [
        columnHelper.accessor('1_pick', { header: () => <span>Pick %</span>, cell: (info) => info.renderValue()}),
        columnHelper.accessor('1_wr', { header: () => <span>Win %</span>, cell: (info) => info.renderValue()}),
      ],
    }),
    columnHelper.group({
      id: 'guardian-group',
      header: () => <PlayerRankIcon rank={"GUARDIAN"} title={"Guardian"} imgSrc={rank_2}/>,
      columns: [
        columnHelper.accessor('2_pick', { header: () => <span>Pick %</span>, cell: (info) => info.renderValue()}),
        columnHelper.accessor('2_wr', { header: () => <span>Win %</span>, cell: (info) => info.renderValue()}),
      ],
    }),
    columnHelper.group({
      id: 'crusader-group',
      header: () => <PlayerRankIcon rank={"CRUSADER"} title={"Crusader"} imgSrc={rank_3}/>,
      columns: [
        columnHelper.accessor('3_pick', { header: () => <span>Pick %</span>, cell: (info) => info.renderValue()}),
        columnHelper.accessor('3_wr', { header: () => <span>Win %</span>, cell: (info) => info.renderValue()}),
      ],
    }),
    columnHelper.group({
      id: 'archon-group',
      header: () => <PlayerRankIcon rank={"ARCHON"} title={"Archon"} imgSrc={rank_4}/>,
      columns: [
        columnHelper.accessor('4_pick', { header: () => <span>Pick %</span>, cell: (info) => info.renderValue()}),
        columnHelper.accessor('4_wr', { header: () => <span>Win %</span>, cell: (info) => info.renderValue()}),
      ],
    }),
    columnHelper.group({
      id: 'legend-group',
      header: () => <PlayerRankIcon rank={"LEGEND"} title={"Legend"} imgSrc={rank_5}/>,
      columns: [
        columnHelper.accessor('5_pick', { header: () => <span>Pick %</span>, cell: (info) => info.renderValue()}),
        columnHelper.accessor('5_wr', { header: () => <span>Win %</span>, cell: (info) => info.renderValue()}),
      ],
    }),
    columnHelper.group({
      id: 'ancient-group',
      header: () => <PlayerRankIcon rank={"ANCIENT"} title={"Ancient"} imgSrc={rank_6}/>,
      columns: [
        columnHelper.accessor('6_pick', { header: () => <span>Pick %</span>, cell: (info) => info.renderValue()}),
        columnHelper.accessor('6_wr', { header: () => <span>Win %</span>, cell: (info) => info.renderValue()}),
      ],
    }),
    columnHelper.group({
      id: 'divine-group',
      header: () => <PlayerRankIcon rank={"DIVINE"} title={"Divine"} imgSrc={rank_7}/>,
      columns: [
        columnHelper.accessor('7_pick', { header: () => <span>Pick %</span>, cell: (info) => info.renderValue()}),
        columnHelper.accessor('7_wr', { header: () => <span>Win %</span>, cell: (info) => info.renderValue()}),
      ],
    }),
    columnHelper.group({
      id: 'immortal-group',
      header: () => <PlayerRankIcon rank={"IMMORTAL"} title={"Immortal"} imgSrc={rank_8}/>,
      columns: [
        columnHelper.accessor('8_pick', { header: () => <span>Pick %</span>, cell: (info) => info.renderValue()}),
        columnHelper.accessor('8_wr', { header: () => <span>Win %</span>, cell: (info) => info.renderValue()}),
      ],
    }),
  ]

  /*
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
  */

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
