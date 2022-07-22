type Props = {
	children: JSX.Element | JSX.Element[]
  isReverse?:boolean
}

const MatchLayout = ({children, isReverse = false}: Props) => {
  return (
    <div
      className={`flex gap-4 items-center p-4 ${
        isReverse
          ? "2xl:flex-row xl:flex-row-reverse lg:flex-row-reverse md:flex-row-reverse"
          : "2xl:flex-row xl:flex-row lg:flex-row md:flex-row"
      } flex-col justify-center xl:w-fit lg:w-fit md:w-fit w-full xl:text-left lg:text-left md:text-left text-center 2xl:mx-0 xl:mx-0 lg:mx-0 mx-auto`}>
      {children}
    </div>
  );
}

export default MatchLayout;