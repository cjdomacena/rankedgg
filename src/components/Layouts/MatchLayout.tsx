type Props = {
	children: JSX.Element | JSX.Element[]
}

const MatchLayout = ({children}: Props) => {
  return <div className="flex gap-4 items-center p-4 w-full max-w-xs flex-wrap  text-center justify-center">{children}</div>;
}

export default MatchLayout;