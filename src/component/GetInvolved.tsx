import React, { ReactElement } from "react";
import Image, { StaticImageData } from "next/image";
import tojoinus from "@/assets/images/tojoinus.svg";
import donateus from "@/assets/images/donateus.svg";
import partnerus from "@/assets/images/partnerus.svg";
import { Button } from "@/component";
import { FontAwesomeIconProps, FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightDots, faArrowTrendUp, faHeart } from "@fortawesome/free-solid-svg-icons";

interface InvolvedType {
  image: StaticImageData,
  title: string,
  text: string,
  link: {
    text: string,
    href: string
  },
  icon: ReactElement
}

const InvolvedList: InvolvedType[] = [
  {
    image: tojoinus,
    title: "BECOME VOLUNTEER",
    text: "Join our dedicated team of volunteers and actively participate in our initiatives.",
    link: {
      text: "Join Us",
      href: ""
    },
    icon: <FontAwesomeIcon icon={faArrowUpRightDots} className="h-6 w-auto" />
  },
  {
    image: donateus,
    title: "DONATE",
    text: "Support our organization financially by making a donation.",
    link: {
      text: "Donate",
      href: ""
    },
    icon: <FontAwesomeIcon icon={faHeart} className="h-6 w-auto" />
  },
  {
    image: tojoinus,
    title: "BECOME PARTNER",
    text: "Collaboration is essential in driving sustainable change.",
    link: {
      text: "Partner Us",
      href: ""
    },
    icon: <FontAwesomeIcon icon={faArrowTrendUp} className="h-6 w-auto" />
  },
]

function Card({image, title, text, link, icon}: InvolvedType){
  return (
    <div className="w-full md:w-2/3 md:max-w-[17.6rem] bg-surface-color flex flex-col items-center gap-large p-large justify-between rounded-2xl outline-accent outline-4 hover:outline hover:drop-shadow-lg transition-all duration-400">
      <Image src={image} alt={text} />
      <h2 className="text-heading-3 font-squada-one text-center">
        {title}
      </h2>
      <p className="text-body-big text-center">
        {text}
      </p>
      <Button icon={icon} href={link.href} className="button-primary" text={link.text} />
    </div>
  )
}

function GetInvolved() {
  return (
    <section className="section-container-tear bg-primary-lite">
      <div className="section-container flex flex-col items-center gap-large">
          <h1 className="font-squada-one text-heading-3 lg:text-center uppercase">
            GET INVOLVED
          </h1>
          <p className="text-body-big text-center">
            Together, let's take action and create a sustainable future for all.
            Choose your preferred way of getting involved and{" "}
            <span className="text-subheading">
              join Seerakku in making a lasting difference.
            </span>
          </p>
          <Button className="button-accent w-fit" text="View Details" />
          <div className="flex flex-wrap gap-xl">
            {InvolvedList.map((item, index) => (
              <Card {...item} key={index} />
            ))}
          </div>
      </div>
    </section>
  );
}

export default GetInvolved;
