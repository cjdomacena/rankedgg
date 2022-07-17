import { ColumnDef, flexRender, getCoreRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { FiTrendingUp } from "react-icons/fi";
import { useHeroStats } from "../api";
type Props = {};
type TRow = {
  id: number;
  name: string | JSX.Element;
  icon: string | JSX.Element;
  localized_name: string;
  pickRate: number;
};

const TrendingHeroes = (props: Props) => {
  const {data:heroes, isLoading, isFetched, isError} = useHeroStats();
  const [data, setData] = useState(() => [
    {
      id: 1,
      name: <div className=" w-12 h-8 bg-gray-500 animate-pulse"></div>,
      icon: <div className=" w-8 h-8 bg-gray-500 animate-pulse"></div>,
      localized_name: "string",
      pickRate: 15,
    },
    {
      id: 2,
      name: <div className=" w-12 h-8 bg-gray-500 animate-pulse"></div>,
      icon: <div className=" w-8 h-8 bg-gray-500 animate-pulse"></div>,
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
      cell: (hero) => (
        <div>
          {isLoading ? (
            hero.getValue()
          ) : (
            <img className="w-fit" src={`http://cdn.dota2.com/${hero.getValue()}`} />
          )}
        </div>
      ),
      header: (hero) => (
        <h4 className="w-fit font-black" title="Hero">
          Hero
        </h4>
      ),
    },
    {
      accessorKey: "localized_name",
      cell: (hero) => hero.getValue(),
      header: () => (
        <h4 className="w-fit font-black" title="Hero Name">
          Name
        </h4>
      ),
    },
  ];
  const table = useReactTable({
	data,
	columns,
	getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  })

  useEffect(() => {
    setData(heroes)
  },[isFetched])

  return (
    <section className="p-8 h-full w-full text-neutral-300 font-noto-sans">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold tracking-wide text-white flex items-center">
          <FiTrendingUp className="w-6 h-6 mr-2" />
          Trending Heroes
        </h1>
        <div className="my-12 text-neutral-300 rounded border border-gray-700  w-full">
          <table className="table table-compact w-full">
            <thead className=" bg-neutral-900 text-neutral-500 text-xs">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id} className="">
                  {headerGroup.headers.map((header) => (
                    <th key={header.id} className="p-2 " >
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody className="text-xs">
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
        <button onClick={() => table.nextPage()} className="text-white">Next</button>
      </div>
    </section>
  );
};

export default TrendingHeroes;
