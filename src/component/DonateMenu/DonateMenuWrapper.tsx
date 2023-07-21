'use client';

import DonateMenu2 from "./DonateMenu2";
import { useContext } from "react"
import { OverlayContext, OverlayDispatchContext } from "@/context/OverlayProvider"


function DonateMenuWrapper(){
    const overflow = useContext(OverlayContext)
    const overlayDispatch = useContext(OverlayDispatchContext)

    return (
        (overflow == true) ? <DonateMenu2 /> : <></>
    )
}

export default DonateMenuWrapper