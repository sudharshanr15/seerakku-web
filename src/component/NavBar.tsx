"use client";

import Image from "next/image"
import Link from "next/link";

import logo from "../../public/logo/logo.svg";
import { DonateButton } from "./button";
import { useEffect } from "react";
import { gsap } from "gsap";

function Navbar(){
  useEffect(() => {
    gsap.from(".nav-link.active::after", {
      scale: 0,
      duration: 1
    })
  }, [])
  return (
    <header className="sticky top-0 p-large bg-surface-color">
      <nav className="flex flex-row justify-between items-center bg-surface-color">
        <Link href={"/"} className="inline-flex items-center gap-4">
          <Image src={logo} alt="Brand Logo" className="w-12" unoptimized />
          <span className="text-heading-4 font-squada-one text-secondary">Seeraku</span>
        </Link>
        <ul className="flex-row gap-16 font-squada-one text-dark-text hidden xl:flex">
          <li className="nav-link text-subheading-regular active">
            <Link href={""}>About us</Link>
          </li>
          <li className="nav-link text-subheading-regular">
            <Link href={""}>Our initiatives</Link>
          </li>
          <li className="nav-link text-subheading-regular">
            <Link href={""}>Our Focus Area</Link>
          </li>
          <li className="nav-link text-subheading-regular">
            <Link href={""}>Get Involved</Link>
          </li>
          <li className="nav-link text-subheading-regular">
            <Link href={""}>Contact Us</Link>
          </li>
        </ul>
        <DonateButton />
      </nav>
    </header>
  )
}

export default Navbar