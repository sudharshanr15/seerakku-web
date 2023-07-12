import React from "react";
import Image from "next/image";
import Kauvery from "@/assets/images/kauvery.svg";
import growWithUs from "@/assets/images/growwithus.svg";
import Neulancers from "@/assets/images/neulancers.svg";
import Pasumai from "@/assets/images/pasumai thagyagam46.svg";
import Beyond from "@/assets/images/beyond sustainability.svg";
function Sponsers() {
  return (
    <div className="bg-[#FDFAF3] h-full">
      <div className="pt-[5%]">
        <h1 className="text-center text-black text-6xl squada-regular ">
          Our Sponsors
        </h1>
        <div className="flex justify-center pt-[3%] flex-wrap">
          <Image src={Kauvery} />
        </div>
        <h1 className="text-center text-black text-6xl squada-regular mt-[3%]">
          Our Partners
        </h1>
        <div className="flex justify-evenly pt-[3%] flex-wrap">
          <Image src={growWithUs} />
          <Image src={Neulancers} />
          <Image src={Pasumai} />
          <Image src={Beyond} />
        </div>
      </div>
    </div>
  );
}

export default Sponsers;
