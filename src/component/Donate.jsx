import React from "react";
import Image from "next/image";
import Ellipse from "@/assets/images/Ellipse.svg";
import Support from "@/assets/images/support.svg";
import Patches from "@/assets/images/patches.svg";


function Donate() {
  return (
    <div className="relative bg-[#CFFDE1] ">
      <Image src={Ellipse} className="absolute -top-32 right-[15%] lg:right-[25%] " />

      <div className="flex flex-col lg:flex-row gap-20 p-[10%] ">
        <div className="basis-1/2">
          <Image src={Support} className="w-auto h-auto" />
        </div>
        <div className="basis-1/2">
          <h1 className="font-squada-one text-black text-heading-3 lg:text-heading-2">
            Support For Sustainability
          </h1>
          <p className="text-black my-[5%]">
            Your donation can help us continue our important work in creating a
            sustainable future. Every contribution, no matter the size, makes a
            difference. Join us in our mission and make a donation today.
            Together, we can build a greener and more equitable world.
          </p>
          <div className="flex justify-between flex-wrap">
            <button className="btn btn-warning border rounded-full m-1 btn-lg klima-regular">
              $ 50
            </button>
            <button className="btn bg-white text-black hover:text-white klima-regular border rounded-full m-1 btn-lg">
              $ 100
            </button>
            <button className="btn bg-white text-black hover:text-white klima-regular border rounded-full m-1 btn-lg">
              $ 200
            </button>
            <button className="btn bg-white text-black hover:text-white klima-regular border rounded-full m-1 btn-lg">
              $ 500
            </button>
          </div>
          <input type="text" placeholder="Enter the Amount" className="input input-bordered border rounded-full bg-white w-full max-w-md my-[5%]" />
          <button className="btn btn-warning border rounded-full border-hidden block btn-lg klima-regular hover:bg-accent">
          ❤ Donate Now
        </button>
        </div>
      </div>
      
    </div>
  );
}

export default Donate;
