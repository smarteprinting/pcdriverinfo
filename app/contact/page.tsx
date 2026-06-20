import { constructMetadata } from '@/app/utils/seo';

export const metadata = constructMetadata({
  title: 'Contact - PC Driver Info',
  description: 'Learn more about contact at PC Driver Info. We provide clear, plain-English advice and troubleshooting steps for device drivers.',
});

import React from 'react'
import ContactHero from '../components/contact/ContactHero'
import ContactForm from '../components/contact/ContactForm'
import ContactFaq from '../components/contact/ContactFaq'
import JsonLd from '../components/seo/JsonLd'

function page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact PC Driver Info',
    description: 'Get in touch with the PC Driver Info team for support, questions, or feedback.',
    url: 'https://pcdriverinfo.com/contact/',
  };

  return (
   <>
   <JsonLd data={jsonLd} />
   <ContactHero />
   <ContactForm />
   <ContactFaq />
   </>
  )
}

export default page
