import { DonateButton } from "./button";
import Image from "next/image";
import logo from "../../public/logo/logo.svg";
import neulancers_logo from "@/assets/images/Neulancers_standard.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const nav_list = [
  {
    name: "About us",
    href: "",
  },
  {
    name: "Our Initiatives",
    href: "/our_initiatives",
  },
  {
    name: "Our Focus Area",
    href: "/focus_area",
  },
  {
    name: "Get Involved",
    href: "/get_involved",
  },
  {
    name: "Contact us",
    href: "/contact",
  },

]

function Footer(){
  return (
    <footer className="footer-section section-container-tear after:content-[] mt-8">
      <div className="section-container">
        <div className="text-surface-color p-md lg:p-0">
          <div className="lg:flex gap-10">
            <div className="basis-1/2">
              <h2 className="font-squada-one text-heading-4 lg:text-heading-1 uppercase">DONATE FOR BETTER FUTURE</h2>
              <p className="text-xl lg:text-body-big my-4">Your donation can help us continue our important work in creating a sustainable future. Every contribution, no matter the size, makes a difference. Join us in our mission and make a donation today. Together, we can build a greener and more equitable world.</p>
              <DonateButton text="Donate Today" className="mt-4" />
            </div>
            <div className="hidden lg:block basis-1/4 my-4 lg:m-0">
              <div className="">
                  <ul className="flex flex-col justify-center items-center gap-6 lg:gap-10">
                    {nav_list.map((item, index) => (
                      <li className="text-body-big font-squada-one">
                        <Link href={item.href} key={index} className="">{item.name}</Link>
                      </li>
                    ))}
                  </ul>
              </div>
            </div>
            <div className="basis-1/4 mt-4 lg:mt-0">
              <div className="flex flex-col gap-4 lg:gap-8">
                <div className="flex gap-4 items-center">
                  <Image src={logo} alt="Brand Logo" className="w-[3.2rem]" />
                  <span className="text-heading-4 font-squada-one">Seerakku</span>
                </div>
                <div className="flex flex-col gap-4 lg:gap-6 text-body-bold lg:text-subheading">
                  <a href='mailto:climateaction@seerakku.in' className="inline-flex items-center">
                    <span className=" w-6 h-6"><FontAwesomeIcon className="w-full h-full" icon={faEnvelope} /></span>
                    <span className="ms-3">climateaction@seerakku.in</span>
                  </a>
                  <a href='tel:+91 6379248007' className="inline-flex items-center">
                    <span className=" w-6 h-6"><FontAwesomeIcon className="w-full h-full" icon={faPhone} /></span>
                    <span className="ms-3">+91 6379248007</span>
                  </a>
                  <a href="https://goo.gl/maps/yXWX1TnG6QGJjdm16" className="inline-flex items-center">
                    <span className="w-6 h-6"><FontAwesomeIcon className="w-full h-full" icon={faLocationDot} /></span>
                    <span className="ms-3">Chennai, Tamilnadu, India.</span>
                  </a>
                </div>
                <div className="flex gap-6">
                  <a href="" target="_blank" className="h-10 hover:text-primary transition-colors duration-500">
                    <FontAwesomeIcon icon={faYoutube} className="h-full w-auto" />
                  </a>
                  <a href="" target="_blank" className="h-10 hover:text-primary transition-colors duration-500">
                    <FontAwesomeIcon icon={faInstagram} className="h-full w-auto" />
                  </a>
                  <a href="" target="_blank" className="h-10 hover:text-primary transition-colors duration-500">
                    <FontAwesomeIcon icon={faFacebook} className="h-full w-auto" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end h-14 my-4">
            <span className="mx-1">Crafted with <FontAwesomeIcon className="animate-bounce" icon={faHeart}/> &nbsp; by </span>
            <Image src={neulancers_logo} alt="Neulancers Logo" className="h-14 w-24 lg:w-48 object-contain"></Image>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;