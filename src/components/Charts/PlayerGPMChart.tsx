import { useEffect, useState } from "react";
import { ResponsiveContainer, XAxis, Tooltip, CartesianGrid, Line, LineChart } from "recharts";
import { getImageUrl } from "../../../utils";
import { PLAYER_COLORS, testData } from "../../../utils/constants";
import { ImageExists } from "../../../utils/hooks";
import { useInitialHeroes } from "../../api";
import CustomChartToolip from "./../Utilility/CustomChartTooltip";
type Props = {
  data:
    | {
        id: string;
        value: number;
      }[]
    | any;
  keys: number[];
};

const PlayerGPMChart = ({ data, keys }: Props) => {
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
  const [imgUrls, setImgUrls] = useState<any>(null);

  const { data: heroes, isFetched, isError } = useInitialHeroes();

  useEffect(() => {
    if (isFetched && !isError) {
      const urls:any = [];
      keys.map((key) => urls[key] = getImageUrl(null, heroes[key].icon))
      setImgUrls(urls);
    }
  }, [isFetched, isError]);
  console.log(imgUrls)
  return (
    <>
      <ResponsiveContainer width="100%" height="100%" className="rounded-b bg-black/50">
        <LineChart data={data} margin={{ left: 20, top: 20, bottom: 0, right: 30 }}>
          {heroes && imgUrls ? (
            <Tooltip
              content={({ label, active, payload }) => {
                const sortedData = payload?.sort((a, b) => Number(b.value) - Number(a.value));
                return (
                  <CustomChartToolip>
                    <ul className="bg-neutral p-4 text-sm rounded space-y-2">
                      {sortedData?.map((data, i) => (
                        <li key={`${data.value}-${i}`} className="flex">
                         <ImageExists src={imgUrls[data.dataKey ?? '']} alt={""} className=" w-6 h-6" />{` : ${data.value}`}
                        </li>
                      ))}
                    </ul>
                  </CustomChartToolip>
                );
              }}
            />
          ) : null}
          <CartesianGrid horizontal={false} strokeOpacity={0.2} />
          <XAxis
            tick={{ fontSize: 12, fill: "gray" }}
            tickLine={false}
            orientation="bottom"
            dataKey={"time"}
          />
          {testData.players.map((player) => {
            const playerColor = PLAYER_COLORS[player.player_slot];
            return (
              <Line
                dot={false}
                dataKey={player.hero_id}
                stroke={playerColor}
                name={player.hero_id + ""}
              />
            );
          })}
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default PlayerGPMChart;
