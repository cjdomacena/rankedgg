type Props = {
  active?: boolean;
  payload?: {
    value: any;
  }[];
  label?: string;
  children?: JSX.Element | JSX.Element[] | null
};

const CustomChartToolip = ({ active, payload, label, children}: Props) => {
  if (active && payload && payload.length && !children) {
    return (
      <div className="bg-black/50 p-2 text-xs text-white ring-0 tracking-widest">
        <p>{label}</p>
        <p>{`${payload[0].value < 0 ? 'Dire' : 'Radiant'}: ${payload[0].value}`}</p>
       
      </div>
    );
  }
  return <>{children}</>;
};

export default CustomChartToolip;
