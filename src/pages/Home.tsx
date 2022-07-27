import React from 'react'
import { HERO_ICONS } from '../../utils/constants'
import PageHeaderBG from '../components/Header/PageHeaderBG'
import HeroIcon from '../components/Heroes/HeroIcon'
import PrimaryLayout from '../components/Layouts/PrimaryLayout'

type Props = {}

const Home = (props: Props) => {

 
  return (
    <PrimaryLayout className="min-h-screen">
      <PageHeaderBG>
        <div></div>
      </PageHeaderBG>
    </PrimaryLayout>
  );
}

export default Home