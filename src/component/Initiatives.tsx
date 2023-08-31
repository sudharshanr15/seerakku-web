import React from "react";
import Image, { StaticImageData } from "next/image";
import Init1 from "@/assets/images/init1.svg";
import Init2 from "@/assets/images/init2.svg";
import Init3 from "@/assets/images/init3.svg";
import Init4 from "@/assets/images/init4.svg";
import Init5 from "@/assets/images/init5.svg";
import Init6 from "@/assets/images/init6.svg";
import Init7 from "@/assets/images/init7.svg";
import Support from "@/assets/images/support.svg";
import { our_initiatives_1, our_initiatives_2, our_initiatives_3, our_initiatives_4, our_initiatives_5, our_initiatives_6, our_initiatives_7 } from "@/assets/images";
import Button from "./Button";
import Link from "next/link";

function Initiatives() {
  const Image1 = [Init1, Init2, Init3, Init4];
  const Image2 = [ Init5, Init6, Init7];
  const Text1 = ["NOVA, Carbon-Neutral Baby", "New Tree for New life", "Tree for Farmers", "One Student, One Tree"];
  const Text2 = ["Plant & Greet", "Trees for Sparrows", "Tree for Elephants"];
  const initiatives_list = [
    "NOVA", "New Tree New Life", "One Student One Life", "Plant & Greet", "Tree for Farmers", "Tree for Sparrows", "Tree for Elephants"
  ];

  return (
    <section className="section-container">
      <div className="flex gap-large justify-between">
        <div className="w-100 lg:w-1/2 flex flex-col gap-large">
          <h1 className="text-dark-text text-heading-3 lg:text-heading-2 font-squada-one uppercase">
            Our Initiatives
          </h1>
          <p className="w-full klima text-black text-2xl">
            At Seerakku, we are dedicated to creating a sustainable future through
            our various initiatives. Join us in making a positive impact and
            contributing to environmental conservation with the following programs:
          </p>
          <div className="flex-wrap gap-md hidden lg:flex">
            {initiatives_list.map((item: string, index: number) => (
                <span className="border-2 border-black rounded-full font-squada-one text-heading-6 px-6 py-2 capitalize text-dark-text" key={index}>{item}</span>
            ))}
          </div>
          <Link href={"/our_initiatives"} className="button-accent w-fit">View Details</Link>
        </div>
        <div className="hidden lg:block w-1/2">
          <div className="max-w-[39.5rem] mx-auto">
            <Image src={Support} className="w-100 h-auto" alt="Support Image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Initiatives;
