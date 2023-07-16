import React from "react";
import Image, { StaticImageData } from "next/image";
import Init1 from "@/assets/images/init1.svg";
import Init2 from "@/assets/images/init2.svg";
import Init3 from "@/assets/images/init3.svg";
import Init4 from "@/assets/images/init4.svg";
import Init5 from "@/assets/images/init5.svg";
import Init6 from "@/assets/images/init6.svg";
import Init7 from "@/assets/images/init7.svg";
import { our_initiatives_1, our_initiatives_2, our_initiatives_3, our_initiatives_4, our_initiatives_5, our_initiatives_6, our_initiatives_7 } from "@/assets/images";
import Button from "./Button";

type InitiativesType = {
  title: string,
  image: StaticImageData
}

const Initiatives_list = [
  {
    title: "NOVA, Carbon-Neutral Baby",
    image: our_initiatives_1,
  },
  {
    title: "New Tree for New life",
    image: our_initiatives_2,
  },
  {
    title: "Tree for Farmers",
    image: our_initiatives_3,
  },
  {
    title: "One Student, One Tree",
    image: our_initiatives_4,
  },
  {
    title: "Plant & Green",
    image: our_initiatives_5,
  },
  {
    title: "Trees for Sparrows",
    image: our_initiatives_6,
  },
  {
    title: "Tree for Elephants",
    image: our_initiatives_7,
  },
]

function Card({title, image}: InitiativesType){
  return (
    <div className="group w-full sm:max-w-[17.4rem] relative">
      <Image src={image} alt={title} className="w-full h-auto" />
      <div className="absolute bottom-0 left-0 right-0 bg-primary p-large h-[40%] inline-flex items-center justify-center group-hover:h-[80%] group-hover:font-squada-one transition-all duration-300">
        <h3 className="text-body-big group-hover:text-heading-4 text-center transition-all duration-600">{title}</h3>
      </div>
    </div>
  )
}

function Initiatives() {
  const Image1 = [Init1, Init2, Init3, Init4];
  const Image2 = [ Init5, Init6, Init7];
  const Text1 = ["NOVA, Carbon-Neutral Baby", "New Tree for New life", "Tree for Farmers", "One Student, One Tree"];
  const Text2 = ["Plant & Greet", "Trees for Sparrows", "Tree for Elephants"];

  return (
    <section className="section-container">
      <div className="flex flex-col gap-large items-center">
        <h1 className="text-center text-black text-heading-3 lg:text-heading-2 font-squada-one">
          Our Initiatives
        </h1>
        <p className="w-full lg:w-1/2 mx-auto text-center klima text-black text-2xl">
          At Seerakku, we are dedicated to creating a sustainable future through
          our various initiatives. Join us in making a positive impact and
          contributing to environmental conservation with the following programs:
        </p>
        <Button text="View Details" className="button-accent w-fit" />
        <div className="flex flex-wrap gap-large justify-center max-w-[75rem]">
          {Initiatives_list.map((item, index) => (
            <Card {...item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Initiatives;
