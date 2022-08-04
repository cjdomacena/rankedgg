import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
type Props = {
  data: {
    value: number | string;
    percentile: number | string;
  }[];
  title: string;
  color: string;
  tooltipTitle?: string;
};
const HeroAreaBenchmark = ({ data, title, color, tooltipTitle }: Props) => {
  return (
    <div className="w-full h-auto bg-black/30 p-2 rounded">
      <div className="p-2">
        <h1 className="ml-1 mt-2 badge">{title}</h1>
      </div>
      <div className="h-64 w-full  rounded">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ bottom: 10, left: -20, right: 20, top: 20 }}
          >
            <CartesianGrid strokeOpacity={0.2} />
            <XAxis
              dataKey={"percentile"}
              tickFormatter={(value) => `${value * 100}%`}
              tick={{ fontSize: 12, fill: "gray" }}
            />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload?.length && payload) {
                  return (
                    <div className="w-auto bg-black/50 text-xs p-2 rounded border-0">
                      <p>
                        {tooltipTitle} - {Number(payload[0].value).toFixed(2)}
                      </p>
                    </div>
                  );
                }
              }}
            />
            <YAxis tick={{ fontSize: 12, fill: "gray" }} />

            <Area
              type="natural"
              dataKey="value"
              stroke="#000"
              fill={color}
              fillOpacity={0.8}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default HeroAreaBenchmark;
