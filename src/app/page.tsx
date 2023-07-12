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

function page() {
  return (
    <section className="bg-white h-full">
      <Carousel />
      <Donate />
      <div className="relative">
        <Image src={Patches} className="w-full absolute -top-2" />
      </div>
      <Initiatives />
      <div className="relative">
        <Image
          src={Patches2}
          className="w-full absolute -top-2 bg-[##FDFAF3] border-none"
        />
      </div>
      <GetInvolved />
      <div className="relative">
        <Image src={Patches3} className="w-full absolute -top-2 " />
      </div>

      <Sponsers />
    </section>
  );
}

export default page;
