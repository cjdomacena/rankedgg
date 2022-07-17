import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useState } from "react";
import { FiTrendingUp } from "react-icons/fi";
type Props = {};
type TRow = {
  id: number;
  name: string;
  icon: string;
  localized_name: string;
  pickRate: number;
};

const TrendingHeroes = (props: Props) => {
  const [data, setData] = useState(() => [
    {
      id: 1,
      name: "string",
      icon: "/apps/dota2/images/dota_react/heroes/icons/antimage.png?",
      localized_name: "string",
      pickRate: 15,
    },
    {
      id: 2,
      name: "string 2",
      icon: "/apps/dota2/images/dota_react/heroes/icons/antimage.png?",
      localized_name: "string 2",
      pickRate: 11,
    },
  ]);
  const columns: ColumnDef<TRow>[] = [
    {
      accessorKey: "id",
      cell: (hero) => hero.getValue(),
      header: "",
    },
    {
      accessorKey: "icon",
      cell: (hero) => <img className="w-fit" src={`http://cdn.dota2.com/${hero.getValue()}`} />,
      header: (hero) => <h4 className="w-fit">{hero.column.id}</h4>,
    },
    {
      accessorKey: "localized_name",
      cell: (hero) => hero.getValue(),
      header: () => <h4 className="w-fit">Hero</h4>,
    },
    {
      accessorKey: "pickRate",
      cell: (hero) => hero.getValue(),
      header: (hero) => <h4 className="w-fit">{hero.column.id}</h4>,
    },
  ];
  const table = useReactTable({
	data,
	columns,
	getCoreRowModel: getCoreRowModel()
  })

  return (
    <section className="p-8 h-full w-full text-neutral-300 font-noto-sans">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold tracking-wide text-white flex items-center">
          <FiTrendingUp className="w-6 h-6 mr-2" />
          Trending Heroes
        </h1>
        <div className="my-12 text-neutral-300 border rounded border-neutral-800">
          <table className="  bg-black rounded table-fixed w-full">
            <thead className=" bg-neutral-900 text-sm">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id} className="">
                  {headerGroup.headers.map((header) => (
                    <th key={header.id} className="p-2">
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="p-2">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default TrendingHeroes;
