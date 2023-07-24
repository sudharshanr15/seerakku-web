'use client';

import Image from "next/image"
import Link from "next/link"
import logo from "../../../public/logo/logo.svg";
import Button from "../Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { OverlayDispatchContext } from "@/context/OverlayProvider";
import { useContext , useEffect } from "react";
import { gsap } from "gsap";

function DonateThanks(){
    const overlayDispatch = useContext(OverlayDispatchContext)

    useEffect(() => {
        gsap.fromTo(".menu-container", {
            yPercent: -150,
        }, {
            yPercent: 0,
            duration: 0.5,
            ease: "power2.out"
        })
    }, [])

    function handleClose(){
        gsap.fromTo(".menu-container", {
            yPercent: 0,
        }, {
            yPercent: 150,
            duration: 0.5,
            ease: "power2.out"
        }).eventCallback("onComplete", () => {
            overlayDispatch({type: 'close'})
        })
    }

    return(
        <section className="flex flex-col items-center justify-center p-0 donate-thanks-container lg:section-container fixed top-0 bottom-0 left-0 w-full h-full overflow-auto z-50 bg-secondary bg-opacity-50 backdrop-blur-sm">
            <div className="w-full h-full lg:h-auto max-w-[80rem] mx-auto relative p-xxl donate-thanks-img menu-container">
                <button className="hidden lg:block absolute top-10 right-10 h-[2.5rem] text-white" onClick={handleClose}>
                    <FontAwesomeIcon icon={faXmark} className="h-full w-auto" />
                </button>
                <div className="flex flex-col justify-between lg:flex-row gap-large h-full">
                    <div className="w-full lg:w-1/2">
                        <div className="flex items-end justify-center h-full">
                            <div className="flex items-center gap-md">
                                <Image src={logo} alt="Brand Logo" className="w-[3.2rem] h-auto" />
                                <span className="text-heading-4 font-squada-one lg:text-heading-1 text-white">Seerakku</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 text-center lg:text-start">
                        <h1 className="text-heading-4 lg:text-heading-1 font-squada-one text-white mb-large">THANK YOU FOR YOU DONATION FOR THE BETTER FUTURE</h1>
                        <p className="text-heading-4 lg:text-heading-4 text-white font-squada-one">we mailed you invoice</p>
                        <div className="hidden lg:block mt-xl">
                            <Button text="Share with your Friends" className="block w-fit button-accent mb-large" />
                            <div className="flex gap-md text-white mb-xl">
                                <Link href="" target="_blank" className="h-[2.13rem]">
                                    <FontAwesomeIcon icon={faFacebook} className="h-full w-auto" />
                                </Link>
                                <Link href="" target="_blank" className="h-[2.13rem]">
                                    <FontAwesomeIcon icon={faInstagram} className="h-full w-auto" />
                                </Link>
                            </div>
                            <Link href="/" className="block w-fit button-primary" onClick={handleClose}>Go back Home</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-surface-color p-md flex flex-col items-center gap-md lg:hidden w-full">
                <Link href="/" className="block w-fit button-primary" onClick={handleClose}>Go back Home</Link>
                <Button text="Share with your Friends" className="block w-fit button-accent" />
                <div className="flex gap-md">
                    <Link href="" target="_blank" className="h-[2.13rem]">
                        <FontAwesomeIcon icon={faFacebook} className="h-full w-auto" />
                    </Link>
                    <Link href="" target="_blank" className="h-[2.13rem]">
                        <FontAwesomeIcon icon={faInstagram} className="h-full w-auto" />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default DonateThanks