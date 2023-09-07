"use client";

import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { useContext, useEffect, useRef } from "react";
import { OverlayDispatchContext } from "@/context/OverlayProvider";

function DonateButton({text="Donate Today", className}: {text?: string, className?: string}){
    const icon = useRef(null)
    const overlayDispatch = useContext(OverlayDispatchContext)
    
    useEffect(() => {
        gsap.from(icon.current, {
            scale: 0.6,
            repeat: -1,
            duration: 0.75,
            repeatDelay: 1,
            ease: "bounce.out"
        })
    }, [])

    return (
        <button className={`button-primary text-body-bold flex gap-md ${className}`} onClick={() => {overlayDispatch({type: "open", component: "DonateMenu"})}}>
            {/* <Link href={""} className="flex gap-md"> */}
                <FontAwesomeIcon icon={faHeart} className="w-[16px]" ref={icon} />
                <span>{text}</span>
            {/* </Link> */}
        </button>
    )
}

export default DonateButton;