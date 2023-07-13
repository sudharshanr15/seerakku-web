import React from 'react'
import HeroSection from "@/component/HeroSection";
import WhoWeAre from "@/component/WhoWeAre";
import WhatWeDo from "@/component/WhatWeDo";

function page() {
  return (
    <div>
      <HeroSection />
      <WhoWeAre />
      <WhatWeDo />
    </div>
  )
}

export default page