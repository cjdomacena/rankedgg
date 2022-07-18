import { flexRender, Header, HeaderGroup } from "@tanstack/react-table";
import React from "react";
import { THeroTrend } from "../../types";

type Props = {
  headerItem: HeaderGroup<THeroTrend>;
};

const TableHeaderItem = ({ headerItem }: Props) => {
  return (
    <tr>
      {headerItem.headers.map((header) => (
        <td key={header.id}>
          {header.isPlaceholder ? null : (
            <h4 className="p-1">{flexRender(header.column.columnDef.header, header.getContext())}</h4>
          )}
        </td>
      ))}
    </tr>
  );
};

export default TableHeaderItem;
