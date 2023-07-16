import React from 'react'
import { OurBoard, OurStory, VisionMission, WhatWeDo, WhoWeAre } from '@/container/about_us';
import { PageHeader } from '@/component';

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