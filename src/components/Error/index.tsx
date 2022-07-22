import React from 'react'
import PrimaryLayout from '../Layouts/PrimaryLayout';

type Props = {}

const ErrorComponent = (props: Props) => {
  return (
    <PrimaryLayout className=" scroll-smooth">
      <div className="container mx-auto p-4 grid place-items-center h-[calc(80vh)]">
        <div>
          <h1 className="text-white text-4xl"> Something went wrong...</h1>
          <p className="text-center">Please reload the page.</p>
        </div>
      </div>
    </PrimaryLayout>
  );
}

export default ErrorComponent