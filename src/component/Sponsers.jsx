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
        <h1 className="text-center text-black text-heading-3 lg:text-heading-2 font-squada-one ">
          Our Sponsors
        </h1>
        <div className="flex justify-center pt-[3%] flex-wrap relative overflow-hidden">
          <Image src={Kauvery} className="object-cover w-[279px] "/>
          <div className="absolute inset-0 flex items-center justify-center p-4 bg-primary bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity  w-[279px] mx-auto"><button className="bg-accent text-black border-hidden p-2 rounded-lg">View website</button></div>
        </div>
        <h1 className="text-center text-black text-heading-3 lg:text-heading-2 font-squada-one mt-[3%]">
          Our Partners
        </h1>
        <div className="flex justify-evenly px-10 py-10 flex-wrap gap-2">
          <div className="relative overflow-hidden">
            <Image src={growWithUs} className="object-cover w-[279px] "/>
            <div className="absolute inset-0 flex items-center justify-center p-4 bg-primary bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity  w-[279px] "><button className="bg-accent text-black border-hidden p-2 rounded-lg">View website</button></div>
          </div>
          <div className="relative overflow-hidden">
            <Image src={Neulancers} className="object-cover w-[279px] "/>
            <div className="absolute inset-0 flex items-center justify-center p-4 bg-primary bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity  w-[279px] "><button className="bg-accent text-black border-hidden p-2 rounded-lg">View website</button></div>
          </div>
          <div className="relative overflow-hidden">
            <Image src={Pasumai} className="object-cover w-[279px] "/>
            <div className="absolute inset-0 flex items-center justify-center p-4 bg-primary bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity  w-[279px] "><button className="bg-accent text-black border-hidden p-2 rounded-lg">View website</button></div>
          </div>
          <div className="relative overflow-hidden">
            <Image src={Beyond} className="object-cover w-[279px] "/>
            <div className="absolute inset-0 flex items-center justify-center p-4 bg-primary bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity  w-[279px] "><button className="bg-accent text-black border-hidden p-2 rounded-lg">View website</button></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsers;
