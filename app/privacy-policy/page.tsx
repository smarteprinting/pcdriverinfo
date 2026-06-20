import { constructMetadata } from '@/app/utils/seo';

export const metadata = constructMetadata({
  title: 'Privacy Policy - PC Driver Info',
  description: 'Learn more about privacy-policy at PC Driver Info. We provide clear, plain-English advice and troubleshooting steps for device drivers.',
});

import React from 'react'
import LegalPolicyHero from '../components/legel-policy/LegalPolicyHero'
import PrivacyPolicyContent from './PrivacyPolicyContent'

function page() {


const privacyPolicyHeroData = {
  title: "Privacy Policy",
  description: "How we handle your information",
  note:
    "Plain-English explanations of what we collect, why we collect it, and the choices you have.",
}
  return (
    <>
    <LegalPolicyHero {...privacyPolicyHeroData} />
    <PrivacyPolicyContent />
    </>
  )
}

export default page
