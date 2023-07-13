import React from "react";
import Image from "next/image";
import logo from "@/assets/images/logowhite.svg";
import Neulancers from "@/assets/images/neulancers.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapLocation,
} from "@fortawesome/free-solid-svg-icons";

import {
  faYoutube,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="bg-black">
      <div className="flex flex-col lg:flex-row w-3/4 mx-auto p-[3%] gap-20 lg:gap-40">
        <div className="basis-[50%]">
          <h1 className="text-7xl text-white font-squada-one">
            Donate For Better Future
          </h1>
          <p className="pt-[3%]">
            Your donation can help us continue our important work in creating a
            sustainable future. Every contribution, no matter the size, makes a
            difference. Join us in our mission and make a donation today.
            Together, we can build a greener and more equitable world.
          </p>
          <button className="btn btn-warning border rounded-full btn-sm klima-regular mt-[3%] hover:bg-accent border-hidden">
            ❤ Donate Now
          </button>
        </div>
        <div className="basis-[50%]">
          <Image src={logo} />
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="w-[30px] my-[3%] ml-[3%] text-white"
            />
            <span className="ml-3 font-black text-white">
              climateaction@seerakku.in
            </span>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faPhone}
              className="w-[30px] my-[3%] ml-[3%] text-white"
            />
            <span className="ml-3 font-black text-white">+91 6379248007</span>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faMapLocation}
              className="w-[30px] my-[3%] ml-[3%] text-white"
            />
            <span className="ml-3 font-black text-white">
              Chennai,Tamilnadu,India
            </span>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faYoutube}
              className="w-[30px] my-[3%] ml-[3%] text-white hover:text-primary"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="w-[30px] my-[3%] ml-[3%] text-white hover:text-primary"
            />
            <FontAwesomeIcon
              icon={faFacebook}
              className="w-[30px] my-[3%] ml-[3%] text-white hover:text-primary"
            />
          </div>
        </div>
      </div>
      <hr className="border-white border-[2px]"/>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between">
        <div className="flex w-4/5 mx-auto gap-10 p-[2%] flex-wrap">
            <p className="text-white">About us</p>
            <p className="text-white">Our Focus Area</p>
            <p className="text-white">Our Initiatives</p>
            <p className="text-white">Get Involved</p>
            <p className="text-white">Contact us</p>

        </div>
        <div className="flex items-center mr-[3%]">
          <p>Created with ♡ by</p>
          <Image src={Neulancers} className="w-[100px] h-[50px] bg-white"/>

        </div>

      </div>
    </div>
  );
}

export default Footer;
