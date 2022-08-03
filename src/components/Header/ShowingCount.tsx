import React, { Dispatch, SetStateAction } from "react";

type Props = {
  show: number;
  setShow: Dispatch<SetStateAction<number>>;
  total: number;
};

const ShowingCount = ({ show, total, setShow }: Props) => {
  return (
    <div>
      <p>
        Showing
        <select
          className="text-white font-semibold bg-gray-800 rounded  ring-gray-600 ring-2 mx-2"
          value={show}
          onChange={(e) => setShow(Number(e.currentTarget.value))}>
          <option value={15}>15</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={total}>{total}</option>
        </select>
        of <span className="text-white font-bold">{total} </span>
        results
      </p>
    </div>
  );
};

export default ShowingCount;
