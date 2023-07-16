import React from 'react'
import type { Metadata } from 'next'
import { OurBoard, OurStory, VisionMission, WhatWeDo, WhoWeAre } from '@/container/about_us';
import { PageHeader } from '@/component';

export const metadata: Metadata = {
  title: "About Us"
}

function page() {
  return (
    <div>
      <PageHeader title='ABOUT US' />
      <WhoWeAre />
      <VisionMission />
      <WhatWeDo />
      <OurStory />
      <OurBoard />
    </div>
  )
}

export default page