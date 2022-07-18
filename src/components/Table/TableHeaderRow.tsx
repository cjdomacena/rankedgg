import { HeaderGroup } from "@tanstack/react-table";
import React from "react";
import { THeroTrend } from "../../types";
import TableHeaderItem from "./TableHeaderItem";

type Props = {
  headerGroup: HeaderGroup<THeroTrend>[];
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
