import React from 'react'
import { BiWorld } from 'react-icons/bi';
import PageHeader from '../components/Header/PageHeader';
import PrimaryLayout from '../components/Layouts/PrimaryLayout'

type Props = {}

const PublicMatches = (props: Props) => {
  return (
    <PrimaryLayout>
      <div className='container mx-auto p-4'>
        <PageHeader icon={<BiWorld className="mr-1 w-6 h-6" />} title="Public Matches" />
      </div>
    </PrimaryLayout>
  );
}

export default PublicMatches