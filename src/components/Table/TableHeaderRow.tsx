import { HeaderGroup } from "@tanstack/react-table";
import { THeroTrend } from "../../types";
import TableHeaderItem from "./TableHeaderItem";

type Props = {
  headerGroup: HeaderGroup<any>[];
};

const TableHeaderRow = ({ headerGroup }:Props): JSX.Element => {
  return (
    <thead>
      {headerGroup.map((header) => (
        <TableHeaderItem headerItem={header} key={header.id} />
      ))}
    </thead>
  );
};

export default TableHeaderRow;
