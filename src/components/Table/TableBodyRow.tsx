import { RowModel, flexRender } from '@tanstack/react-table'
import { THeroTrend } from '../../types'

type Props = {
	tableRowModel: RowModel<THeroTrend>
}

const TableBodyRow = ({tableRowModel}:Props) => {
  return (
    <>
      {tableRowModel.rows.map((row) => (
        <tr key={row.id}>
          {row.getVisibleCells().map((cell, index) =>
            index > 0 ? (
              <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
            ) : (
              <td key={cell.id} className="bg-gray-900 z-10">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ),
          )}
        </tr>
      ))}
    </>
  );
}

export default TableBodyRow