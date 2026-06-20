import { constructMetadata } from '@/app/utils/seo';

export const metadata = constructMetadata({
  title: 'Blog - PC Driver Info',
  description: 'Learn more about blog at PC Driver Info. We provide clear, plain-English advice and troubleshooting steps for device drivers.',
});

import React from 'react'
import BlogHero from '../components/blog/BlogHero'
import EditorsPick from '../components/blog/EditorsPick'
import LatestArticle from '../components/blog/LatestArticle'
import WantTopic from '../components/blog/WantTopic'
import JsonLd from '../components/seo/JsonLd'

function page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'PC Driver Info Blog',
    description: 'Read the latest guides, troubleshooting tips, and advice about device drivers from the PC Driver Info editorial team.',
    url: 'https://pcdriverinfo.com/blog/',
  };

  return (
    <>
    <JsonLd data={jsonLd} />
    <BlogHero />
    <EditorsPick />
    <LatestArticle />
    <WantTopic />
    </>
  )
}

export default page
