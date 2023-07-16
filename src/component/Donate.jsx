import React from "react";
import Image from "next/image";
import Ellipse from "@/assets/images/Ellipse.svg";
import Support from "@/assets/images/support.svg";
import Patches from "@/assets/images/patches.svg";
import { DonateButton } from "./button";

import Link from "next/link";


function Donate() {
  return (
    <section className="section-container-tear bg-primary-lite before:content-[]">
      <div className="section-container relative">
        <Link href={""} className="absolute top-0 right-1/2 lg:right-0 translate-x-1/2 z-10 max-w-[9rem] lg:max-w-[16rem] -translate-y-1/2 lg:-translate-x-1/2">
          <Image src={Ellipse} className="w-full h-auto" />
        </Link>
        <div className="flex flex-col gap-md lg:flex-row">
          <div className="basis-1/2">
            <div className="max-w-[43rem] mx-auto">
              <Image src={Support} alt="Support Tree" className="w-full h-auto" unoptimized />
            </div>
          </div>
          <div className="basis-1/2 lg:p-xl flex flex-col gap-large">
            <h1 className="font-squada-one text-heading-3 lg:text-heading-2">
              Support For<br/>Sustainability
            </h1>
            <p className="text-body-big">
              Your donation can help us continue our important work in creating a
              sustainable future. Every contribution, no matter the size, makes a
              difference. Join us in our mission and make a donation today.
              Together, we can build a greener and more equitable world.
            </p>
            <div className="flex gap-large flex-wrap">
              <button className="btn text-body-big btn-warning border rounded-2xl font-klima p-5 bg-primary">
                $ 50
              </button>
              <button className="btn text-body-big bg-white font-klima border rounded-2xl p-5 ">
                $ 100
              </button>
              <button className="btn text-body-big bg-white font-klima border rounded-2xl p-5 ">
                $ 200
              </button>
              <button className="btn text-body-big bg-white font-klima border rounded-2xl p-5 ">
                $ 500
              </button>
            </div>
            <input type="text" placeholder="Enter the Amount" className="p-4 border rounded-2xl bg-white w-full max-w-xl" />
            <DonateButton className="w-fit" />
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default Donate;
