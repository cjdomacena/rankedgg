import { Dispatch, SetStateAction } from "react";
import {
  ResponsiveContainer,
  XAxis,
  Tooltip,
  Area,
  ReferenceLine,
  CartesianGrid,
  ComposedChart,
  YAxis,
  ReferenceArea,
} from "recharts";
import CustomChartTooltip from "./../Utilility/CustomChartTooltip";
type Props = {
  data: {
    id: string;
    value: number;
  }[];
  setter: Dispatch<SetStateAction<boolean>>;
  isActive: boolean;
};

const GoldAdvantage = ({ data, setter, isActive }: Props) => {
  const dataMin = Math.floor(Math.min(...data.map((i: any) => i.value)));
  const dataMax = Math.ceil(Math.max(...data.map((i: any) => i.value))) + (Math.abs(dataMin / 2));

  const gradientOffset = () => {
    const dataMax = Math.max(...data.map((i: any) => i.value));
    const dataMin = Math.min(...data.map((i: any) => i.value));

    if (dataMax <= 0) {
      return 0;
    }
    if (dataMin >= 0) {
      return 1;
    }

    return dataMax / (dataMax - dataMin);
  };

  return (
    <>
      <ResponsiveContainer width="100%" height="100%" className="rounded-b bg-black/50">
        <ComposedChart data={data} margin={{ left: 20, top: 20, bottom: 0, right: 30 }}>
          <Tooltip
            content={({ label, payload, active }: any) => (
              <CustomChartTooltip active={active} payload={payload} label={label} />
            )}
          />
          <defs>
            <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset={gradientOffset()} stopColor="#10b981" stopOpacity={1} />
              <stop offset={gradientOffset()} stopColor="#ef4444" stopOpacity={1} />
            </linearGradient>
          </defs>
          <Area
            type="natural"
            dataKey="value"
            stackId="1"
            fill="url(#splitColor)"
            stroke="url(#splitColor)"
            strokeWidth={2.5}
            strokeOpacity={1}
          />
          <CartesianGrid horizontal={false} strokeOpacity={0.2} />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 12, fill: "gray" }}
            tickLine={false}
            orientation="bottom"
          />
          <YAxis
            type="number"
            tickFormatter={(value) =>
              value !== 0 ? `${Number(value).toLocaleString("en-US")}` : value
            }
            tick={{ fontSize: 12, fill: "gray" }}
            axisLine={true}
            tickLine={false}
            domain={[dataMin, dataMax]}
          />
          <ReferenceLine y={0} stroke="white" strokeDasharray="3 3" />
          <ReferenceArea y1={0} y2={dataMax} fill="green" opacity={0.2} />
          <ReferenceArea y1={1} y2={dataMin} fill="red" opacity={0.2} />
          <ReferenceArea />
        </ComposedChart>
      </ResponsiveContainer>
    </>
  );
};

export default GoldAdvantage;
