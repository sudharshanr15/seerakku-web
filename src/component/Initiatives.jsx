import React from "react";
import Image from "next/image";
import Init1 from "@/assets/images/init1.svg"
import Init2 from "@/assets/images/init2.svg"
import Init3 from "@/assets/images/init3.svg"
import Init4 from "@/assets/images/init4.svg"
import Init5 from "@/assets/images/init5.svg"
import Init6 from "@/assets/images/init6.svg"
import Init7 from "@/assets/images/init7.svg"

function Initiatives() {
  return (
    <div className="pt-[5%] bg-[#FDFAF3]">
      <h1 className="text-center text-black text-6xl squada-regular">
        Our Initiatives
      </h1>
      <p className="w-full lg:w-1/2 mx-auto text-center klima-regular text-black text-2xl p-[2%]">
        At Seerakku, we are dedicated to creating a sustainable future through
        our various initiatives. Join us in making a positive impact and
        contributing to environmental conservation with the following programs:
      </p>
      <div className="flex justify-center">
        <button className="btn btn-success text-white btn-lg">
          View Details
        </button>
      </div>

      <div className="flex justify-evenly p-[3%] flex-wrap">
        <Image src={Init1}   className="m-1"/>
        <Image src={Init2}   className="m-1"/>
        <Image src={Init3}   className="m-1"/>
        <Image src={Init4}   className="m-1"/>

      </div>
      <div className="flex justify-evenly p-[3%] flex-wrap">
        <Image src={Init5}   className="m-1"/>
        <Image src={Init6}  className="m-1" />
        <Image src={Init7}   className="m-1"/>
       

      </div>

    </div>
  );
}

export default Initiatives;
