import React, { ReactElement } from "react";
import Image, { StaticImageData } from "next/image";
import tojoinus from "@/assets/images/tojoinus.svg";
import donateus from "@/assets/images/donateus.svg";
import partnerus from "@/assets/images/partnerus.svg";
import { Button } from "@/component";
import { FontAwesomeIconProps, FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightDots, faArrowTrendUp, faHeart } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

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
    <div className="w-full bg-surface-color flex flex-col items-center gap-xl p-large lg:py-xxl justify-between rounded-2xl outline-accent outline-4 hover:outline hover:drop-shadow-lg transition-all duration-400 md:even:scale-105 lg:even:scale-110 md:even:outline">
      <Image src={image} alt={text} />
      <div className="text-heading-3 font-squada-one text-center text-secondary" dangerouslySetInnerHTML={{__html: title.replaceAll(" ", "<br/>")}}>
      </div>
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
          <h2 className="font-squada-one text-heading-3 lg:text-center uppercase text-dark-text">
            GET INVOLVED
          </h2>
          <p className="text-body-big text-center">
            Together, let's take action and create a sustainable future for all.
            Choose your preferred way of getting involved and{" "}
            <span className="text-subheading">
              join Seerakku in making a lasting difference.
            </span>
          </p>
          <Link href="get_involved" className="button-accent w-fit">View Details</Link>
          <div className="flex flex-wrap md:flex-nowrap gap-xl max-w-[81rem] mt-8">
            {InvolvedList.map((item, index) => (
              <Card {...item} key={index} />
            ))}
          </div>
      </div>
    </section>
  );
}

export default GetInvolved;
