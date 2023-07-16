import React from "react";
import Image from "next/image";
import Init1 from "@/assets/images/init1.svg";
import Init2 from "@/assets/images/init2.svg";
import Init3 from "@/assets/images/init3.svg";
import Init4 from "@/assets/images/init4.svg";
import Init5 from "@/assets/images/init5.svg";
import Init6 from "@/assets/images/init6.svg";
import Init7 from "@/assets/images/init7.svg";

function InitiativesCard1({ images, texts }) {
  return (
    <div className="flex justify-center p-[1%] w-11/12 mx-auto flex-wrap">
      {images.map((image, index) => (
        <div
          className=" w-[280px] h-[304px] bg-primary shadow-md border rounded-lg m-3"
          key={index}
        >
          <figure>
            <Image src={image} className="border rounded-lg "/>
          </figure>
          <div className=" h-[135px]  ">
            <p className="text-body-big font-klima text-center  hover:font-black text-[#2A2A2A]">{texts[index]}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
function InitiativesCard2({ images, texts }) {
  return (
    <div className="flex justify-center p-[1%] flex-wrap w-11/12 mx-auto">
      {images.map((image, index) => (
        <div
          className="w-[280px] h-[304px] bg-primary shadow-md border rounded-lg m-3"
          key={index}
        >
          <figure>
            <Image src={image} className="border rounded-lg "/>
          </figure>
          <div className=" h-[135px]  z-50">
            <p className="text-body-big font-klima text-center  hover:font-black text-[#2A2A2A]">{texts[index]}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function Initiatives() {
  const Image1 = [Init1, Init2, Init3, Init4];
  const Image2 = [ Init5, Init6, Init7];
  const Text1 = ["NOVA, Carbon-Neutral Baby", "New Tree for New life", "Tree for Farmers", "One Student, One Tree"];
  const Text2 = ["Plant & Greet", "Trees for Sparrows", "Tree for Elephants"];

  return (
    <div className="pt-[5%] bg-[#FDFAF3]">
      <h1 className="text-center text-black text-heading-3 lg:text-heading-2 font-squada-one">
        Our Initiatives
      </h1>
      <p className="w-full lg:w-1/2 mx-auto text-center klima text-black text-2xl p-[2%]">
        At Seerakku, we are dedicated to creating a sustainable future through
        our various initiatives. Join us in making a positive impact and
        contributing to environmental conservation with the following programs:
      </p>
      <div className="flex justify-center">
        <button className="bg-accent text-white  border-hidden rounded-full p-3">
          View Details
        </button>
      </div>

      <div >
      
        <InitiativesCard1 images={Image1} texts={Text1} />
      </div>
      <InitiativesCard2 images={Image2} texts={Text2} />
    </div>
  );
}

export default Initiatives;
