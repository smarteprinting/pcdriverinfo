import React from 'react'

import { constructMetadata } from '@/app/utils/seo';

export const metadata = constructMetadata({
  title: 'Drivers - PC Driver Info',
  description: 'Learn more about drivers at PC Driver Info. We provide clear, plain-English advice and troubleshooting steps for device drivers.',
});


import DriversHero from '../components/drivers/DriversHero'
import DriversWhatWeCover from '../components/drivers/DriversWhatWeCover'
import WantUs from '../components/home/WantUs'
import JsonLd from '../components/seo/JsonLd'
import WhereDriversLive from '../components/home/WhereDriversLive';
import AboutPcDriverInfoHome from '../components/home/AboutPcDriverInfoHome';

function page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'All Device Drivers',
    description: 'Browse our comprehensive guides and troubleshooting steps for all major hardware device drivers including printer, scanner, audio, graphics, network, and USB.',
    url: 'https://pcdriverinfo.com/drivers/',
  };

  return (
    <>
    <JsonLd data={jsonLd} />
    <DriversHero />
    <DriversWhatWeCover />
     <WhereDriversLive />
     <AboutPcDriverInfoHome />
    <WantUs />
    </>
  )
}

export default page
