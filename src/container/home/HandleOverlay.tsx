"use client";

import { OverlayDispatchContext } from "@/context/OverlayProvider";
import { useSearchParams } from "next/navigation";
import { useContext } from "react";

function HandleOverlay() {
    const searchParams = useSearchParams()
    const payment_id = searchParams.get("payment_id")
    const overlay_context = useContext(OverlayDispatchContext);

    if(payment_id != null){
        overlay_context({type: "open", component: "DonateThanks"})
    }

    return <></>
}

export default HandleOverlay;