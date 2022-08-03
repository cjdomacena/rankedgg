
import PageHeaderBG from "../components/Header/PageHeaderBG";
import PrimaryLayout from "../components/Layouts/PrimaryLayout";
type Props = {};

const Home = (props: Props) => {

  return (
    <PrimaryLayout>
      <PageHeaderBG />
      <div className=" h-[calc(80vh-80px)] w-full grid place-items-center">
        <div className=" text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">RankedGG</h1>
            <p className="py-6">Some interesting things about the website.</p>
          </div>
        </div>
      </div>
    </PrimaryLayout>
  );
};

export default Home;
