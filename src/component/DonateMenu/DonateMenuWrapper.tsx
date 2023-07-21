'use client';

import DonateMenu2 from "./DonateMenu2";
import DonateThanks from "./DonateThanks";
import { useContext } from "react"
import { OverlayContext, OverlayDispatchContext } from "@/context/OverlayProvider"


function DonateMenuWrapper(){
    const overflow = useContext(OverlayContext)
    const overlayDispatch = useContext(OverlayDispatchContext)

    if(overflow.status == true){
        switch(overflow.component){
            case "DonateThanks":
                return <DonateThanks />
            case "DonateMenu":
                return <DonateMenu2 />
        }
    }else{
        return <></>
    }
}

export default DonateMenuWrapper