import {  useNavigate } from "react-router-dom";

type Props = {
  resetError: any;
};

const ErrorFallback = ({ resetError }: Props) => {
  const navigate = useNavigate();

  return (
    <section className="grid place-items-center w-full h-[100vh]">
      <div className="text-center">
        <h1 className="text-white font-semibold text-3xl text-center">
          404 | Something went wrong.
        </h1>
        <button
          className="text-center mt-4 text-white"
          onClick={() => {
            resetError();
            navigate("/");
          }}>
          Return to Homepage
        </button>
      </div>
    </section>
  );
};

export default ErrorFallback;
