"use client";

import Image from "next/image"
import Link from "next/link";

import logo from "../../public/logo/logo.svg";
import { DonateButton } from "./button";
import { useEffect, useState, useContext } from "react";
import { gsap } from "gsap";
import { faXmark, faAngleUp} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { menu } from "@/assets/icons";
import { usePathname } from "next/navigation";
import { OverlayContext, OverlayDispatchContext } from "@/context/OverlayProvider"

// const nav_list = [
//   {
//     name: "About Us",
//     href: "",
//     sub_menu: [
//       {
//         name: 'Who we are',
//         href: '/who_we_are'
//       },
//       {
//         name: 'What we do',
//         href: '/what_we_do'
//       }
//     ]
//   },
//   {
//     name: "Our Initiatives",
//     href: "",
//     sub_menu: [
//       {
//         name: 'Our Initiatives',
//         href: '/our_initiatives'
//       },
//       {
//         name: 'Our Gallery',
//         href: '/our_gallery'
//       }
//     ]
//   },
//   {
//     name: "Our Focus Area",
//     href: "/focus_area",
//   },
//   {
//     name: "Get Involved",
//     href: "/get_involved",
//   },
//   {
//     name: "Contact us",
//     href: "/contact",
//   },

// ]

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
                        },
                        {
                          name: 'Our Story',
                          href: '/our_story'
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

  function onNavLinkClick(e: any){
      e.preventDefault()
      setActiveSubmenu(e.target.dataset.name)
      console.log(e)
      setIsSubMenuOpen(!isSubMenuOpen)
  }


  function onNavSubMenuEnter(indexkey:string){
    setActiveSubmenu(indexkey )
    setIsSubMenuOpen(!isSubMenuOpen)
  }

  function onNavSubMenuLeave(event:any){
    setActiveSubmenu("")
    setIsSubMenuOpen(!isSubMenuOpen)
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
                {value.sub_menu ? (<button key={key} onClick={()=>{onNavSubMenuEnter(key)}}>{value.name}<FontAwesomeIcon className="ml-3 h-5 w-5" icon={faAngleUp} /></button>) : (<Link href={value.href}>{value.name}</Link>)}
                  {value.sub_menu && activeSubmenu===value.name && isSubMenuOpen &&  (
                    <ul className="absolute top-10 bg-surface-color p-3">
                      {value.sub_menu.map((subMenuItem, subIndex) => (
                        <li key={subIndex}>
                          <Link href={subMenuItem.href}>{subMenuItem.name}</Link>
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
              {Object.values(nav_list).map((item, index) => (
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


// {/* <ul className="flex-row justify-around font-squada-one text-dark-text hidden xl:flex">
//   {/* {Object.values(nav_list).map((item, index) => (
//     'sub_menu' in item ? (
//       <li className={` nav-link text-subheading-regular h-0 ${pathname === item.href ? 'active' : ''}`} key={index}>
//         <button className="px-8 text-center" onClick={()=>{setActiveSubMenu(!isActiveSubMenu); subMenus = index;}}>{item.name}</button>
//         {isActiveSubMenu && get_subMenu()}
//       </li>
//     ) : (
//       <li className={`px-8 nav-link text-subheading-regular ${pathname === item.href ? 'active' : ''}`} key={index}>
//         <Link href={item.href}>{item.name}</Link>
//       </li>
//     )
// ))} */}
//     {
//       Object.values(nav_list).map((item, index) => (
//         // <li className={`px-8 nav-link text-subheading-regular h-0 ${pathname === item.href ? 'active' : ''}`} key={index}>
//         //   {
//         //     ('sub_menu' in item) ? (<button className="px-8 text-center" onClick={onNavLinkClick}>{item.name}</button>) : (<Link href={item.href}>{item.name}</Link>)
//         //   }
//         // </li>
//             'sub_menu' in item ? (
//             <li className={` nav-link text-subheading-regular h-0 ${pathname === item.href ? 'active' : ''}`} key={index}>
//               <button className="px-8 text-center" onClick={onNavLinkClick}>{item.name}</button>
//               {isSubMenuOpen && get_subMenu()}
//             </li>
//           ) : (
//             <li className={`px-8 nav-link text-subheading-regular ${pathname === item.href ? 'active' : ''}`} key={index}>
//               <Link href={item.href}>{item.name}</Link>
//             </li>
//           )
//       ))
//     }
// </ul> */}