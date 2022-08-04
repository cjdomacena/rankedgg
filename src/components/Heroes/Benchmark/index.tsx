import { ImLab } from "react-icons/im";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { useGetHeroBenchmark } from "../../../api";
import HeroAreaBenchmark from "../../Charts/HeroAreaBenchmark";
import HeroAreaBenchmarkLoading from "./Loading";

type Props = {
  id: string | number;
};

const Benchmark = ({ id }: Props) => {
  const { data: benchmark, status } = useGetHeroBenchmark(id);

  const benchmarkKeys = [
    {
      key: "gold_per_min",
      title: "Gold farmed per min.",
      color: "#f1c21b",
      tooltipTitle: "Gold farmed",
    },
    {
      key: "xp_per_min",
      title: "XP gained per min.",
      color: "#00539a",
      tooltipTitle: "XP gained",
    },
    {
      key: "kills_per_min",
      title: "Kills per min.",
      color: "#fa4d56",
      tooltipTitle: "Kills",
    },
    {
      key: "hero_damage_per_min",
      title: "Hero Damage per min.",
      color: "#8a3ffc",
      tooltipTitle: "Hero damage",
    },
    {
      key: "lhten",
      title: "Last hits at 10 mins.",
      color: "#007d79",
      tooltipTitle: "Last hits",
    },
  ];

  switch (status) {
    case "success": {
      return (
        <div className="my-8">
          <div className="container mx-auto my-8">
            <div className="px-4 rounded flex justify-between items-center">
              <h1 className="font-medium text-gray-100 whitespace-nowrap text-lg flex items-center gap-1">
                <ImLab className="w-5 h-5" />
                Benchmarks
              </h1>
              <div className="divider w-full ml-2"></div>
            </div>
          </div>
          <div className="container mx-auto px-8 h-fit">
            {benchmark && benchmark.result ? (
              <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,500px),1fr))] gap-8">
                {benchmarkKeys.map((b) => (
                  <HeroAreaBenchmark
                    data={benchmark.result[b.key]}
                    title={b.title}
                    color={b.color}
                    tooltipTitle={b.tooltipTitle}
                    key={b.key}
                  />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,500px),1fr))] gap-8">
                <HeroAreaBenchmarkLoading title="Gold per min." />
                <HeroAreaBenchmarkLoading title="XP per min." />
                <HeroAreaBenchmarkLoading title="Kills per min." />
                <HeroAreaBenchmarkLoading title="Hero Dmg. per min." />
                <HeroAreaBenchmarkLoading title="Hero Dmg. per min." />
              </div>
            )}
          </div>
        </div>
      );
    }
    default: {
      return (
        <div className="my-8">
          <div className="container mx-auto ">
            <div className="px-4 rounded flex justify-between items-center">
              <h1 className="font-medium text-gray-100 whitespace-nowrap text-lg flex items-center gap-1">
                <ImLab className="w-5 h-5" />
                Benchmarks
              </h1>
              <div className="divider w-full ml-2"></div>
            </div>
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,500px),1fr))] gap-8 container mx-auto p-4">
            <HeroAreaBenchmarkLoading title="Gold per min." />
            <HeroAreaBenchmarkLoading title="XP per min." />
            <HeroAreaBenchmarkLoading title="Kills per min." />
            <HeroAreaBenchmarkLoading title="Hero Dmg. per min." />
            <HeroAreaBenchmarkLoading title="Hero Dmg. per min." />
          </div>
        </div>
      );
    }
  }
};

export default Benchmark;
