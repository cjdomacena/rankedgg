import React from 'react'
import { formatStartTime } from '../../../utils';

type Props = {
	startTime: number,
	avgMMR: number | null
	className?:string,
}

const MatchTime = ({startTime, avgMMR, className}: Props) => {
  return (
    <div className={`${className}`}>
      <p className="text-xs whitespace-nowrap">{formatStartTime(startTime)}</p>
      <p className="text-xs tooltip tooltip-top tooltip-info" data-tip="Average MMR">
        MMR: {avgMMR ? avgMMR : "NA"}
      </p>
    </div>
  );
}

export default MatchTime