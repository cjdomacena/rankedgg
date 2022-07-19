import { flexRender, Header, HeaderGroup } from "@tanstack/react-table";
import { THeroTrend } from "../../types";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
type Props = {
  headerItem: HeaderGroup<THeroTrend>;
};

 const SortType = (type: {type: string} | null) => {
   if (type) {
     switch (type.type) {
       case "asc":
         return <AiFillCaretUp className="w-4 h-4 pr-1" />;
       case "desc":
         return <AiFillCaretDown />;
       default:
         return null;
     }
   }
   return null;
 };

const TableHeaderItem = ({ headerItem }: Props) => {
 

  return (
    <tr>
      {headerItem.headers.map((header, index) =>
        index !== 0 ? (
          <td key={header.id} colSpan={header.colSpan} className="py-0">
            <div onClick={header.column.getToggleSortingHandler()}>
              {header.isPlaceholder ? null : (
                <h4 className="flex items-center gap-1 cursor-pointer">
                  {flexRender(header.column.columnDef.header, header.getContext())}
                  <SortType type={(header.column.getIsSorted() as string) ?? null} />
                </h4>
              )}
            </div>
          </td>
        ) : (
          <th className="bg-gray-800" key={header.id}>
            <div className="flex items-center gap-2 ">
              <div
                className="flex items-center cursor-pointer"
                onClick={header.column.getToggleSortingHandler()}>
                <span>Hero</span>
                <SortType type={(header.column.getIsSorted() as string) ?? null} />
              </div>
                <div>
                  <input type="text" className="input input-bordered input-xs " placeholder="Enter Hero Name"
                  value={(header.column.getFilterValue() ?? '') as string}
                  onChange={e => header.column.setFilterValue(e.target.value)}
                  />
                </div>
            </div>
          </th>
        ),
      )}
    </tr>
  );
};

export default TableHeaderItem;
