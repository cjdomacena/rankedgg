type Props = {
  active?: boolean;
  payload?: {
    value: any;
  }[];
  label?: string;
  children?: JSX.Element | JSX.Element[] | null;
  icon?: JSX.Element;
};

const CustomChartToolip = ({ active, payload, label, children, icon }: Props) => {
  if (active && payload && payload.length && !children) {
    
      return (
        <div className="bg-black/50 p-2 text-xs text-white ring-0 tracking-widest">
          <p>{label}</p>
          <div className="flex items-center space-x-1">
            {icon}
            {`${payload[0].value < 0 ? "Dire" : "Radiant"}: `}
            <p>+{Math.abs(payload[0].value)}</p>
          </div>
        </div>
      );
  }
  return <>{children}</>;
};

export default CustomChartToolip;
