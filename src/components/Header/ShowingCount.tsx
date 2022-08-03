import React, { Dispatch, SetStateAction } from "react";

type Props = {
  show: number;
  setShow: Dispatch<SetStateAction<number>>;
  total: number;
};

const ShowingCount = ({ show, total, setShow }: Props) => {
  return (
    <div className="2xl:w-40 xl:w-40  lg:w-40  md:w-40  w-full">
      <select className="select select-bordered w-full select-md"
      onChange={(e) => setShow(Number(e.target.value))}
      defaultValue={show}
      >
        <option value={show}  disabled>{show}</option>
        <option value={15}>15</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
        <option value={total}>{total}</option>
      </select>
      <label className="label">
        <p className="label-text-alt"></p>
        <p className="label-text-alt">
          Showing <span className="font-bold">{show}</span> of {total} results
        </p>
      </label>
    </div>
  );
};

export default ShowingCount;
