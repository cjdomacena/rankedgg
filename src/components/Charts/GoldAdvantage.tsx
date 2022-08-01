import { Dispatch, SetStateAction } from "react";
import { FaCoins } from "react-icons/fa";
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
  match: any;
  type: string;
};

const GoldAdvantage = ({ match, type }: Props) => {
  const teamAdvantage = () => {
    const data: any = [];
    if (match.radiant_gold_adv && match.radiant_xp_adv) {
      if (type === "gold") {
        match.radiant_gold_adv.map((g: any, index: number) =>
          data.push({
            name: `${index}:00`,
            value: Number(g),
          }),
        );
      }
      if (type === "xp") {
        match.radiant_xp_adv.map((g: any, index: number) =>
          data.push({
            name: `${index}:00`,
            value: Number(g),
          }),
        );
      }
    }

    return { data };
  };
  const { data } = teamAdvantage();

  const dataMin = Math.floor(Math.min(...data.map((i: any) => i.value))) + -Math.abs(2000);
  const dataMax = Math.ceil(Math.max(...data.map((i: any) => i.value))) + Math.abs(dataMin / 2);

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
      {data.length > 0 ? (
        <ResponsiveContainer width="100%" height="100%" className="rounded-b bg-black/50">
          <ComposedChart data={data} margin={{ left: 0, top: 20, bottom: 10, right: 30 }}>
            <Tooltip
              content={({ label, payload, active }: any) => (
                <CustomChartTooltip
                  active={active}
                  payload={payload}
                  label={label}
                  icon={type === "gold" ? <FaCoins className="mr-1" /> : <p className="mr-1">XP</p>}
                />
              )}
            />
            <defs>
              <linearGradient id={`splitColor-${type}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset={gradientOffset()} stopColor="#10b981" stopOpacity={1} />
                <stop offset={gradientOffset()} stopColor="#ef4444" stopOpacity={1} />
              </linearGradient>
            </defs>
            <Area
              type="natural"
              dataKey="value"
              stackId="1"
              fill={`url(#splitColor-${type})`}
              stroke={`url(#splitColor-${type})`}
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
      ) : (
        <div className="grid place-items-center h-64 bg-black/30">
          <h1>Data not available.</h1>
        </div>
      )}
    </>
  );
};

export default GoldAdvantage;
