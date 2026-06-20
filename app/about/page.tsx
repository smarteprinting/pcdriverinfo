import { constructMetadata } from '@/app/utils/seo';

export const metadata = constructMetadata({
  title: 'About - PC Driver Info',
  description: 'Learn more about about at PC Driver Info. We provide clear, plain-English advice and troubleshooting steps for device drivers.',
});

import React from 'react'
import AboutHero from '../components/about/AboutHero'
import WantUs from '../components/home/WantUs'
import AboutContent from '../components/about/AboutContent'
import OurMission from '../components/about/OurMission'
import OurStory from '../components/about/OurStory'
import OurJourney from '../components/about/OurJourney'
import WhatWeDoAndDont from '../components/about/WhatWeDoAndDont'
import EditorialStandards from '../components/about/EditorialStandards'
import JsonLd from '../components/seo/JsonLd'
import AboutPcDriverInfoHome from '../components/home/AboutPcDriverInfoHome';

function page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About PC Driver Info',
    description: 'Learn more about the PC Driver Info mission to provide clear, plain-English advice and troubleshooting steps for device drivers.',
    url: 'https://pcdriverinfo.com/about/',
  };

  return (
    <>
    <JsonLd data={jsonLd} />
    <AboutHero />
    <AboutPcDriverInfoHome />
    <OurMission />
    <OurStory />
    <OurJourney />
    <WhatWeDoAndDont />
    <EditorialStandards />
    <AboutContent />
    <WantUs />
    </>
  )
}

export default page
