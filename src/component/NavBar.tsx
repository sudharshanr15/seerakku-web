"use client";

import Image from "next/image"
import Link from "next/link";

import logo from "../../public/logo/logo.svg";
import { DonateButton } from "./button";
import { useEffect, useState, useContext, useRef } from "react";
import { gsap } from "gsap";
import { faXmark, faAngleUp} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { menu } from "@/assets/icons";
import { usePathname } from "next/navigation";
import { OverlayContext, OverlayDispatchContext } from "@/context/OverlayProvider"

type NavbarLinkType = {
    [k: string]: {
        name: string,
        href: string,
        sub_menu?: {
            name: string,
            href: string
        }[]
    }
}

const nav_list:NavbarLinkType = {
    'About Us' : {
                      name: "About Us",
                      href: "",
                      sub_menu: [
                        {
                          name: 'Who we are',
                          href: '/who_we_are'
                        },
                        {
                          name: 'What we do',
                          href: '/what_we_do'
                        }
                      ]
    },
    'Our Initiatives': {
                          name: "Our Initiatives",
                          href: "",
                          sub_menu: [
                            {
                              name: 'Our Initiatives',
                              href: '/our_initiatives'
                            },
                            {
                              name: 'Our Gallery',
                              href: '/our_gallery'
                            }
                          ]
    },
    'Our Focus Area':{
                        name: "Our Focus Area",
                        href: "/our_goals",
    },
    'Get Involved':{
                        name: "Get Involved",
                        href: "/get_involved",
    },
    'Contact Us':{
                        name: "Contact Us",
                        href: "/contact",
    }
}

function Navbar() {
  const overflow = useContext(OverlayContext)
  const overlayDispatch = useContext(OverlayDispatchContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const [activeSubmenu, setActiveSubmenu] = useState("")
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
  const tl = useRef()

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

  useEffect(()=>{
    if(isSubMenuOpen){
      gsap.fromTo(('.navbar-submenu-wrapper'),{
          height: 0,
          duration: 0.5,

        },{
          duration: 0.5,
          height:100,
          ease: 'power3.out'
        })
    }else{
      gsap.fromTo(('.navbar-submenu-wrapper'),{
          height: 100
        },{
          yPercent: -100,
          duration: 0.5,
          height:0
        })
    }
  },[isSubMenuOpen])

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

  function onNavSubMenuEnter(indexkey:string){
    if(!activeSubmenu && indexkey){
      setActiveSubmenu(indexkey)
      setIsSubMenuOpen(!isSubMenuOpen)
    }else if(activeSubmenu != indexkey){
      setActiveSubmenu(indexkey )
    }else{
      setIsSubMenuOpen(!isSubMenuOpen)
      setActiveSubmenu('')
    }
  }


  return (
    <header className="sticky top-0 bg-surface-color z-50">
      <nav className="flex flex-row p-large justify-between items-center bg-surface-color">
        <Link href={"/"} className="inline-flex items-center gap-4">
          <Image src={logo} alt="Brand Logo" className="w-12" unoptimized />
          <span className="text-heading-4 font-squada-one text-secondary">Seerakku</span>
        </Link>
        <ul className="text-2xl font-squada-one gap-8 hidden lg:flex relative">
          {Object.entries(nav_list).map(([key, value], index) => (
            <li key={index} className="w-full whitespace-nowrap">
              <div className="relative" >
                {value.sub_menu ? (<button key={key} onClick={()=>{onNavSubMenuEnter(key)}}>{value.name}<FontAwesomeIcon className="ml-3 h-5 w-5" icon={faAngleUp} /></button>) : (<Link href={value.href}>{value.name} <div className={pathname == value.href ? 'border-b-4 border-primary w-8/12 ' : ''}></div></Link>)}
                  {value.sub_menu && activeSubmenu===value.name && isSubMenuOpen &&  (
                    <ul className="absolute top-12 bg-surface-color px-4 rounded-md navbar-submenu-wrapper overflow-hidden" onMouseLeave={()=>{onNavSubMenuEnter(key)}}>
                      {value.sub_menu.map((subMenuItem, subIndex) => (
                        <li key={subIndex} onClick={()=>{setIsSubMenuOpen(!isSubMenuOpen); setActiveSubmenu('')}} className="my-2">
                                <Link href={subMenuItem.href}>{subMenuItem.name}<div className={pathname == subMenuItem.href ? 'border-b-4 m-x-auto border-primary w-7/12' : ''}></div></Link>
                        </li>
                      ))}
                    </ul>
                  )}
              </div>
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
                <span className="text-heading-4 font-squada-one text-secondary">Seerakku</span>
              </Link>
              <button onClick={onMenu}>
                <FontAwesomeIcon icon={faXmark} className="w-[2.5rem] h-[2.5rem]" />
              </button>
            </header>
            <ul className="flex flex-col my-xxl gap-xl text-center">
              {Object.entries(nav_list).map(([key,value], index) => (
                <li className="text-dark text-subheading-regular font-squada-one nav-link">
                  <div className="relative" >
                      {value.sub_menu ? (<button key={key} onClick={()=>{onNavSubMenuEnter(key)}}>{value.name}</button>) : (<Link className="flex flex-col items-center" onClick={onLink} href={value.href}>{value.name} <div className={pathname == value.href ? 'border-b-4 m-x-auto border-primary w-6/12' : ''}></div></Link>)}
                        {value.sub_menu && activeSubmenu===value.name && isSubMenuOpen &&  (
                          <ul onClick={onLink} className=" bg-surface-color p-2 rounded-md navbar-submenu-wrapper overflow-hidden">
                            {value.sub_menu.map((subMenuItem, subIndex) => (
                              <li key={subIndex} onClick={()=>{setIsSubMenuOpen(!isSubMenuOpen); setActiveSubmenu('')}} className="my-3">
                                <Link className="flex flex-col items-center" href={subMenuItem.href}>{subMenuItem.name}<div className={pathname == subMenuItem.href ? 'border-b-4 m-x-auto border-primary w-6/12' : ''}></div></Link>
                              </li>
                            ))}
                          </ul>
                        )}
                    </div>
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