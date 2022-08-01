import PageHeaderBG from '../components/Header/PageHeaderBG'
import PrimaryLayout from '../components/Layouts/PrimaryLayout'
import Benchmark from '../components/Players/Benchmark';
type Props = {}

const Home = (props: Props) => {

 
  return (
    <PrimaryLayout>
      <PageHeaderBG />
      <div className="w-full h-auto  grid grid-cols-12">
      <div className='h-full'></div>
      </div>

      <Benchmark />
    </PrimaryLayout>
  );
}

export default Home