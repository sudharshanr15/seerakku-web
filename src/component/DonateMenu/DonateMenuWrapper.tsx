'use client';

import DonateMenu from "./DonateMenu";
import { useContext } from "react"
import { OverlayContext, OverlayDispatchContext } from "@/context/OverlayProvider"


function DonateMenuWrapper(){
    const overflow = useContext(OverlayContext)
    const overlayDispatch = useContext(OverlayDispatchContext)

    return (
        (overflow == true) ? <DonateMenu /> : <></>
    )
}

export default DonateMenuWrapper