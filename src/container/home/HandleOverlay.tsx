"use client";

import { OverlayDispatchContext } from "@/context/OverlayProvider";
import { useSearchParams } from "next/navigation";
import { useContext, useEffect } from "react";

function HandleOverlay() {
    const searchParams = useSearchParams()
    const payment_id = searchParams.get("payment_id")
    const overlay_context = useContext(OverlayDispatchContext);

    useEffect(() => {
        if(payment_id !== null){
            console.log("yeh")
            overlay_context({type: "open", component: "DonateThanks"})
        }
    }, [])

    return <></>
}

export default HandleOverlay;