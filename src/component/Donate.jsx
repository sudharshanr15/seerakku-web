import React from "react";
import Image from "next/image";
import Ellipse from "@/assets/images/Ellipse.svg";
import Support from "@/assets/images/support.svg";
import Patches from "@/assets/images/patches.svg";


function Donate() {
  return (
    <div className="relative bg-[#CFFDE1] ">
      <Image src={Ellipse} className="absolute -top-10 lg:-top-32 right-[25%]  w-[142px] lg:w-[254px]  h-[142px] lg:h-[254px]" />

      <div className="flex flex-col lg:flex-row gap-20 p-[10%] ">
        <div className="basis-1/2">
          <Image src={Support} className="w-auto h-auto" />
        </div>
        <div className="basis-1/2">
          <h1 className="font-squada-one text-black text-heading-3 lg:text-heading-2">
            Support For Sustainability
          </h1>
          <p className="text-black my-2 text-body-big">
            Your donation can help us continue our important work in creating a
            sustainable future. Every contribution, no matter the size, makes a
            difference. Join us in our mission and make a donation today.
            Together, we can build a greener and more equitable world.
          </p>
          <div className="flex justify-between flex-wrap">
            <button className="btn btn-warning border rounded-full m-2  lg:m-1  font-klima p-5 bg-primary">
              $ 50
            </button>
            <button className="btn bg-white text-black  font-klima border rounded-full m-2  lg:m-1  p-5 ">
              $ 100
            </button>
            <button className="btn bg-white text-black  font-klima border rounded-full m-2  lg:m-1  p-5 ">
              $ 200
            </button>
            <button className="btn bg-white text-black  font-klima border rounded-full m-2  lg:m-1  p-5 ">
              $ 500
            </button>
          </div>
          <input type="text" placeholder="Enter the Amount" className="p-4 border rounded-full bg-white w-full max-w-xl my-[5%]" />
          <button className="btn btn-warning border rounded-full border-hidden block btn-lg font-klima hover:bg-accent p-5 bg-primary">
          🖤 Donate Now
        </button>
        </div>
      </div>
      
    </div>
  );
}

export default Donate;
