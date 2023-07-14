import { DonateButton } from "./button";
import Image from "next/image";
import logo from "../../public/logo/logo.svg";
import neulancers_logo from "../../public/logo/neulancers-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
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
    href: "",
  },

]

function Footer(){
  return (
    <footer className="footer-section section-container-tear after:content-[]">
      <div className="section-container">
        <div className="text-surface-color p-md lg:p-0">
          <div className="flex flex-wrap lg:flex-nowrap w-full gap-xl">
            <div className="w-full lg:w-1/2 flex flex-col gap-large">
              <h2 className="font-squada-one text-heading-1 uppercase">DONATE FOR BETTER FUTURE</h2>
              <p className="text-body-big">Your donation can help us continue our important work in creating a sustainable future. Every contribution, no matter the size, makes a difference. Join us in our mission and make a donation today. Together, we can build a greener and more equitable world.</p>
              <DonateButton text="Donate Today" className="text-subheading w-fit" />
            </div>
            <div className="w-full lg:w-1/2">{}
              <div className="flex flex-col gap-xl">
                <div className="flex gap-4">
                  <Image src={logo} alt="Brand Logo" className="w-[3.2rem]" />
                  <span className="text-heading-4 font-squada-one">Seeraku</span>
                </div>
                <div className="flex flex-col gap-8 text-body-bold lg:text-subheading">
                  <p className="inline-flex items-center">
                    <span className="w-[1.5rem] inline-block"><FontAwesomeIcon className="w-full h-auto" icon={faEnvelope} /></span>
                    <span className="ms-3">climateaction@seerakku.in</span>
                  </p>
                  <p className="inline-flex items-center">
                    <span className="w-[1.5rem] inline-block"><FontAwesomeIcon className="w-full h-auto" icon={faPhone} /></span>
                    <span className="ms-3">+91 6379248007</span>
                  </p>
                  <p className="inline-flex items-center">
                    <span className="w-[1.5rem] inline-block"><FontAwesomeIcon className="w-full h-auto" icon={faLocationDot} /></span>
                    <span className="ms-3">Chennai, Tamilnadu, India.</span>
                  </p>
                </div>
                <div className="flex gap-6">
                  <a href="" target="_blank" className="h-[2.7rem] hover:text-primary transition-colors duration-500">
                    <FontAwesomeIcon icon={faYoutube} className="h-full w-auto" />
                  </a>
                  <a href="" target="_blank" className="h-[2.7rem] hover:text-primary transition-colors duration-500">
                    <FontAwesomeIcon icon={faInstagram} className="h-full w-auto" />
                  </a>
                  <a href="" target="_blank" className="h-[2.7rem] hover:text-primary transition-colors duration-500">
                    <FontAwesomeIcon icon={faFacebook} className="h-full w-auto" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-xxl">
            <div className="flex flex-wrap justify-between gap-md">
              <div className="flex flex-wrap w-full lg:w-auto font-squada-one gap-large">
                {nav_list.map((item, index) => (
                  <Link href={item.href} key={index} className="text-subheading-regular">{item.name}</Link>
                ))}
              </div>
              <div className="text-body w-full lg:w-auto text-white flex items-center">
                  <p>Crafted with <span className="font-bold">&#x2661;</span> by</p>
                  <p className="ms-1 w-[5.22rem]"><Image src={neulancers_logo} className="w-full h-auto" alt="Neulancers Logo" /></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;