import { Link, useParams } from "react-router-dom";

type Props = {};

const PageNotFound = (props: Props) => {
  const { message } = useParams();

  return (
    <section className="grid place-items-center w-full">
      <div>
        <h1 className="text-white font-semibold text-3xl text-center capitalize">
          {message?.split("-").join(" ") ?? "404 | Page not Found."}
        </h1>
        <ul className="flex text  gap-4 justify-center mt-4 flex-wrap text-sm">
          <li className=" underline-offset-2 hover:underline">
            <Link to="/">Home</Link>
          </li>
          <li className=" underline-offset-2 hover:underline">
            <Link to="/heroes/all">Heroes</Link>
          </li>
          <li className=" underline-offset-2 hover:underline">
            <Link to="/matches/professional">Pro Matches</Link>
          </li>
          <li className=" underline-offset-2 hover:underline">
            <Link to="/matches/public">Public Matches</Link>
          </li>
          <li className=" underline-offset-2 hover:underline">
            <Link to="/teams">Teams</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PageNotFound;
