import { Dispatch, SetStateAction } from 'react'
import { FaArrowCircleDown } from 'react-icons/fa'

type Props = {
	show:number,
	total:number,
	increment: number
	setShow: Dispatch<SetStateAction<number>>
}

const ShowMore = ({show, total, increment, setShow}: Props) => {
  return (
    <>
      {show < total ? (
        <div className="container mx-auto p-4 grid place-items-center">
          <button
            className="flex items-center hover:bg-neutral p-3 rounded transition-colors"
            onClick={() =>
              setShow(() => (show + increment < total ? show + increment : total))
            }>
            View More <FaArrowCircleDown className="ml-1 animate-bounce" />
          </button>
          <button
            className="text-xs p-2 text-white"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            Back to Top
          </button>
        </div>
      ) : (
        <div className="container mx-auto p-4 grid place-items-center">
          <p>End of Matches</p>
          <button
            className="text-xs p-2 text-white"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            Back to Top
          </button>
        </div>
      )}
    </>
  );
}

export default ShowMore