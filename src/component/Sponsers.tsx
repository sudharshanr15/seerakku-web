import React from "react";
import Image, { StaticImageData } from "next/image";
import Kauvery from "@/assets/images/kauvery.svg";
import growWithUs from "@/assets/images/growwithus.svg";
import Neulancers from "@/assets/images/neulancers.svg";
import Pasumai from "@/assets/images/pasumai thagyagam46.svg";
import Beyond from "@/assets/images/beyond sustainability.svg";
import Button from "./Button";

type SponsorsType = {
  title: string,
  link: string,
  image: StaticImageData
}

const SponsorsList: SponsorsType[] = [
  {
    title: "Kauvery Hospital",
    link: "",
    image: Kauvery,
  }
]

const PartnersList: SponsorsType[] = [
  {
    title: "Neulancers",
    link: "https://neulancers.com",
    image: Neulancers,
  },
  {
    title: "Pasumai",
    link: "",
    image: Pasumai,
  },
  {
    title: "Beyond Sustainability",
    link: "",
    image: Beyond
  }
]

function Card({title, link, image}: SponsorsType){
  return (
    <div className="relative w-full lg:max-w-[18.5rem]">
      <div className="p-md">
        <Image src={image} alt={title} className="w-full h-auto" />
        <div className="absolute top-0 left-0 w-full h-full bg-opacity-80 bg-primary opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="flex w-full h-full items-center justify-center">
            <Button href={link} text="Visit website" className="button-accent w-fit" />
          </div>
        </div>
      </div>
    </div>
  )
}

function Sponsers() {
  return (
    <section className="section-container our-sponsors-section">
      <div className="flex flex-col gap-large items-center px-xl">
        <h2 className="text-heading-3 font-squada-one text-center uppercase">OUR SPONSORS</h2>
        <div className="flex flex-wrap gap-large w-full justify-center">
          {SponsorsList.map((item, index) => (
            <Card {...item} key={index} />
          ))}
        </div>
        <h2 className="text-heading-3 font-squada-one text-center uppercase">OUR PARTNERS</h2>
        <div className="flex flex-wrap gap-large w-full justify-center">
          {PartnersList.map((item, index) => (
            <Card {...item} key={index} />
          ))}
        </div>
      </div>    
    </section>
  );
}

export default Sponsers;
