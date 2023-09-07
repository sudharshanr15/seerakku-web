import Carousel from "@/component/Carousel";
import Donate from "@/component/Donate";
import React from "react";
import Image from "next/image";

import Patches from "@/assets/images/patches.svg";
import Patches2 from "@/assets/images/patches2.svg";
import Patches3 from "@/assets/images/patches3.svg";

import Initiatives from "@/component/Initiatives";
import GetInvolved from "@/component/GetInvolved";
import Sponsers from "@/component/Sponsers";
import { Hero } from "@/container/home";
import HandleOverlay from "@/container/home/HandleOverlay";
import { Gallery } from "@/container/home";

function page() {
  return (
    <>
      <HandleOverlay />
      <Hero />
      <Donate />
      <Initiatives />
      <GetInvolved />
      <Gallery isShowAllImages={false} isViewAllBtn={true}/>
      <Sponsers />
    </>
  );
}

export default page;
