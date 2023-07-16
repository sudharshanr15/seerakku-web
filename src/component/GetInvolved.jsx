import React from "react";
import Image from "next/image";
import tojoinus from "@/assets/images/tojoinus.svg";
import donateus from "@/assets/images/donateus.svg";
import partnerus from "@/assets/images/partnerus.svg";

function Cards({ images, heads, texts, links }) {
  return (
    <div className="flex flex-wrap justify-between w-3/4 mx-auto">
      {images.map((image, index) => (
        <div className=" w-[329px] h-[541px] bg-surface-color shadow-xl border rounded-lg">
          <figure className="px-10 pt-10 flex justify-center">
            <Image src={image} />
          </figure>
          <div className="text-center">
            <h2 className=" h-[110px] text-heading-3 font-squada-one text-secondary">
              {heads[index]}
            </h2>
            <p className="h-[116px] text-body-big text-[#2A2A2A] klima-regular">
              {texts[index]}
            </p>

            <button className="p-3 bg-primary border hover:bg-accent border-hidden rounded-full mt-10 text-black">
              {links[index]}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

function GetInvolved() {
  const Image = [tojoinus, donateus, partnerus];
  const Head = ["BECOME VOLUNTEER ", "DONATE", "BECOME PARTNER"];
  const Text = [
    "Join our dedicated team of volunteers and actively participate in our initiatives. ",
    "Support our organization financially by making a donation. ",
    "Collaboration is essential in driving sustainable change",
  ];
  const Links = ["↗ Join Us", "🖤 Donate", "↝ Partner Us"];

  return (
    <div className="bg-[#CFFDE1] h-full">
      <div className="pt-[5%]">
        <h1 className="text-black font-squada-one text-heading-3 lg:text-heading-2 text-center">
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
          <button className=" border-hidden rounded-full p-3 text-white btn-lg bg-accent">
            View Details
          </button>
        </div>

        <div className="mt-10">
          <Cards images={Image} heads={Head} texts={Text} links={Links} />
        </div>
      </div>
    </div>
  );
}

export default GetInvolved;
