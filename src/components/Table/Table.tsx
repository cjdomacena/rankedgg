import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React, { useEffect, useState } from "react";
import { cleanHeroStats } from "../../../utils";
import { THeroTrend } from "../../types";
import TableHeaderRow from "./TableHeaderRow";

type Props = {
  heroStats: any | null;
  isLoading: boolean;
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

const columnHeaderVal = [
  "id",
  "name",
  "Name",
  "icon",
  "hero_id",
  "pro ban",
  "pro_pick",
  "pro win",
  "pro_wr (%)",
  "1_pick",
  "1_win",
  "1_wr (%)",
  "2_pick",
  "2_win",
  "2_wr (%)",
  "3_pick",
  "3_win",
  "3_wr (%)",
  "4_pick",
  "4_win",
  "4_wr (%)",
  "5_pick",
  "5_win",
  "5_wr (%)",
  "6_pick",
  "6_win",
  "6_wr (%)",
  "7_pick",
  "7_win",
  "7_wr (%)",
  "8_pick",
  "8_win (%)",
  "8_wr",
  "turbo_picks",
  "turbo_wins",
];

const hiddenColumns = {
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
};

const Table: React.FC<Props> = ({ heroStats, isLoading }) => {
  const [data, setData] = useState(defaultVal);

  const columnData = Object.keys(defaultVal[0]).map((key,index) => {
    return {
      accessorKey: key,
      cell: (item: any) => item.getValue(),
      header: columnHeaderVal[index],
    };
  });
  const columns: ColumnDef<THeroTrend>[] = columnData;

  useEffect(() => {
    if (heroStats) {
      setData(cleanHeroStats(heroStats));
    }
  }, [heroStats]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: { columnVisibility: hiddenColumns },
  });

  return (
    <table className="table table-zebra w-full">
      <TableHeaderRow headerGroup={table.getHeaderGroups()} />
      <tbody className="text-xs">
        {table.getRowModel().rows.map((row, index) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
            ))}
          </tr>
          
        ))}
      </tbody>
    </table>
  );
};

export default Table;
