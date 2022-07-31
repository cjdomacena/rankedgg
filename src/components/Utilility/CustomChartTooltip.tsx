import { FaCoins } from "react-icons/fa";

type Props = {
  active?: boolean;
  payload?: {
    value: any;
  }[];
  label?: string;
  children?: JSX.Element | JSX.Element[] | null;
};

const CustomChartToolip = ({ active, payload, label, children }: Props) => {
  if (active && payload && payload.length && !children) {
    return (
      <div className="bg-black/50 p-2 text-xs text-white ring-0 tracking-widest">
        <p>{label}</p>
        <p className="flex items-center space-x-1">
          <FaCoins className="mx-1" />
          {`${payload[0].value < 0 ? "Dire" : "Radiant"}: `}
          <p>+{Math.abs(payload[0].value)}</p>
        </p>
      </div>
    );
  }
  return <>{children}</>;
};

export default CustomChartToolip;
