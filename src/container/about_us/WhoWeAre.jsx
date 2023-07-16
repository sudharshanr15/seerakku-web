import React from "react";
import Image from "next/image";
import whoweare from "../../assets/images/whoweare.svg";
import { DonateButton } from "@/component/button";

function WhoWeAre() {
  return (
    <section className="section-container">
      <div className="flex flex-wrap lg:flex-nowrap">
        <div className="w-full lg:w-1/2">
          <Image src={whoweare} alt="Who we are" className="w-full" />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-large p-md lg:p-xl">
          <h2 className="text-heading-3 font-squada-one text-dark-text uppercase">WHO WE ARE</h2>
          <p className="text-body-big text-dark-text">We are a non-profit organization committed to mitigating the effects of climate change through a range of initiatives in India.</p>
          <DonateButton className="w-fit" />
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;
