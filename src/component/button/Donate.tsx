"use client";

import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

function DonateButton({className}: {className?: string}){
    const icon = useRef(null)

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
        <button className={`button-primary text-body-bold ${className}`}>
            <Link href={""} className="flex gap-md">
                <FontAwesomeIcon icon={faHeart} className="w-[16px]" ref={icon} />
                <span>Donate Today</span>
            </Link>
        </button>
    )
}

export default DonateButton;