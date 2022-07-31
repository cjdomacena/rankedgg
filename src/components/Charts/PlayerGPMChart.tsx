import { useEffect, useState } from "react";
import { FaClock } from "react-icons/fa";
import { ResponsiveContainer, XAxis, Tooltip, CartesianGrid, Line, LineChart } from "recharts";
import { getImageUrl } from "../../../utils";
import { PLAYER_COLORS } from "../../../utils/constants";
import { ImageExists } from "../../../utils/hooks";
import { useInitialHeroes } from "../../api";
import CustomChartToolip from "./../Utilility/CustomChartTooltip";
import {testData} from '../../../utils/testData'
type Props = {
  data:
    | {
        id: string;
        value: number;
      }[]
    | any;
  keys: number[];
  type?: string
};

const PlayerGPMChart = ({ data, keys, type }: Props) => {
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

  return (
    <>
      <ResponsiveContainer width="100%" height="100%" className="rounded-b bg-black/50">
        <LineChart data={data} margin={{ left: 20, top: 20, bottom: 0, right: 30 }}>
          {heroes && imgUrls ? (
            <Tooltip
              content={({ label, active, payload, }) => {
                const sortedData = payload?.sort((a, b) => Number(b.value) - Number(a.value));
                return (
                  <CustomChartToolip>
                    <div className="rounded ring ring-white/10 bg-gray-900">
                      <p className=" p-2 rounded-t flex text-sm justify-center border-b-2 border-white/10  items-center">
                        <FaClock className="w-3 h-3 mr-1" />
                        {label}
                      </p>
                      <ul className="text-sm rounded-b">
                        {sortedData?.map((data, i) => (
                          <li
                            key={`${data.value}-${i}`}
                            className={`text-xs  flex item p-2`}
                            style={{
                              color: data.color,
                            }}>
                            <ImageExists
                              src={imgUrls[data.dataKey ?? ""]}
                              alt={""}
                              className=" w-6 h-6 mr-1"
                            />
                            {` ${new Intl.NumberFormat('en-US').format(Number(data.value))}`}
                          </li>
                        ))}
                      </ul>
                    </div>
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
          {testData.players.map((player, i:number) => {
            const playerColor = PLAYER_COLORS[player.player_slot];
            return (
              <Line
                dot={false}
                dataKey={player.hero_id}
                stroke={playerColor}
                name={player.player_slot + ""}
                strokeWidth={2}
              />
            );
          })}
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default PlayerGPMChart;
