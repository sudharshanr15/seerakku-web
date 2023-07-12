import React from "react";
import Image from "next/image";
import tojoinus from "@/assets/images/tojoinus.svg"
import donateus from "@/assets/images/donateus.svg"
import partnerus from "@/assets/images/partnerus.svg"

function GetInvolved() {
  return (
    <div className="bg-[#CFFDE1] h-full">
      <div className="pt-[5%]">
        <h1 className="text-black squada-regular text-6xl text-center">
          GET INVOLVED
        </h1>
        <p className="w-3/4 mx-auto text-center text-black text-2xl pt-[2%]">
          Together, let's take action and create a sustainable future for all.
          Choose your preferred way of getting involved and{" "}
          <span className="font-black text-black ">
            join Seerakku in making a lasting difference.
          </span>
        </p>
        <div className="flex justify-center mt-[3%]">
          <button className="btn btn-success text-white btn-lg border rounded-full">
            View Details
          </button>
        </div>

        <div className="flex flex-wrap justify-between w-3/4 mx-auto">
          <Image src={tojoinus} />
          <Image src={donateus} />
          <Image src={partnerus} />


        </div>
      </div>
    </div>
  );
}

export default GetInvolved;
