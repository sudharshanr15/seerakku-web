"use client";

import Image from "next/image"
import Link from "next/link";

import logo from "../../public/logo/logo.svg";
import { DonateButton } from "./button";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Donate from "./Donate";
import { menu } from "@/assets/icons";

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

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (isMenuOpen) {
      gsap.fromTo(".navbar-narrow", {
        xPercent: 100,
      }, {
        xPercent: 0,
        duration: 0.4,
        ease: "power1.out"
      })
    }
  }, [isMenuOpen])

  function onMenu() {
    if (isMenuOpen) {
      gsap.to(".navbar-narrow", {
        xPercent: 100,
        duration: 0.2,
        ease: "power1.out"
      })

      setTimeout(() => {
        setIsMenuOpen(e => (
          !e
        ))
      }, 250)
    } else {
      setIsMenuOpen(e => (
        !e
      ))
    }
  }

  function onLink(){
    onMenu()
  }

  return (
    <header className="sticky top-0 bg-surface-color z-[10000]">
      <nav className="flex flex-row p-large justify-between items-center bg-surface-color">
        <Link href={"/"} className="inline-flex items-center gap-4">
          <Image src={logo} alt="Brand Logo" className="w-12" unoptimized />
          <span className="text-heading-4 font-squada-one text-secondary">Seeraku</span>
        </Link>
        <ul className="flex-row gap-16 font-squada-one text-dark-text hidden xl:flex">
          {nav_list.map((item, index) => (
            <li className="nav-link text-subheading-regular">
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <DonateButton className="hidden xl:flex" />
        <button className="xl:hidden" onClick={onMenu}>
          <Image src={menu} className="w-[4rem]" alt="Menu Icon" />
        </button>
      </nav>
      {isMenuOpen && (
        <nav className="navbar-narrow fixed h-screen w-screen top-0 left-0 bg-surface-color px-large py-xl z-[10000]">
          <div className="flex flex-col items-center">
            <header className="flex justify-between w-full">
              <Link href={"/"} className="inline-flex items-center gap-4">
                <Image src={logo} alt="Brand Logo" className="w-12" unoptimized />
                <span className="text-heading-4 font-squada-one text-secondary">Seeraku</span>
              </Link>
              <button onClick={onMenu}>
                <FontAwesomeIcon icon={faXmark} className="w-[2.5rem] h-[2.5rem]" />
              </button>
            </header>
            <ul className="flex flex-col my-xxl gap-xl text-center">
              {nav_list.map((item, index) => (
                <li className="text-dark text-subheading-regular font-squada-one nav-link" onClick={onLink}>
                  <Link href={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul>
            <DonateButton />
          </div>
        </nav>
      )}
    </header>
  )
}

export default Navbar