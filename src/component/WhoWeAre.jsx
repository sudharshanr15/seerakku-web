import React from "react";
import Image from "next/image";
import whoweare from "../assets/images/whoweare.svg";
function WhoWeAre() {
  return (
    <div className="h-full bg-surface-color">
      <div className="flex flex-col lg:flex-row p-2 lg:p-32 gap-5 lg:gap-10">
        <Image src={whoweare} />
        <div>
          <h1 className="text-heading-3 font-squada-one px-10 pt-10 pb-5 text-[#2A2A2A]">
            Who We Are
          </h1>
          <p className="text-body-big pb-5 px-10 text-[#2A2A2A]">
            We are a non-profit organization committed to mitigating the effects
            of climate change through a range of initiatives in India.
          </p>
          <button className="btn btn-warning border rounded-full border-hidden block klima-regular hover:bg-accent ml-10 mb-10">
            ❤ Donate Now
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row h-[950px] lg:h-[368px] ">
        <div className="basis-1/2 bg-secondary">
          <h1 className="text-[#2A2A2A] text-heading-3 font-squada-one px-10 pt-10 pb-5">
            Vision
          </h1>
          <p className="text-[#2A2A2A] klima-regular text-body-big px-10 ">
            Our vision is a carbon-neutral India where individuals and
            organizations prioritize sustainable practices.
          </p>
        </div>
        <div className="basis-1/2 bg-accent">
          <h1 className="text-heading-3 font-squada-one px-10 pt-10 pb-5 text-surface-color">
            MISSION
          </h1>
          <p className="klima regular text-body-big px-10 text-surface-color">
            Our mission is to create a sustainable future by enabling
            individuals to offset their carbon footprint and fund reforestation
            projects. We believe that every action counts and that by working
            together, we can create a positive impact on the planet.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
