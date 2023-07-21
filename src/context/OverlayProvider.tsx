'use client';

import { createContext, useContext, useEffect, useReducer, useState } from "react"

export const OverlayContext = createContext(null)
export const OverlayDispatchContext = createContext(null)

function OverlayProvider({children}: {
    children: React.ReactNode
  }){
    const [overlayOpen, overlayDispatch] = useReducer(handleOverlay, {
        status: false,
        component: ""
    })

    function handleOverlay(status, action){
        switch(action.type){
            case "open":
                return {status: true, component: action.component}
            case "close":
                return {status: false, component: ""}
            case "toggle":
                return !status
            default:
                return status
        }
    }

    useEffect(() => {
        console.log(overlayOpen)
        if(overlayOpen.status == false){
            document.querySelector("body")!.dataset.hasOverlay = "false" 
        }else{
            document.querySelector("body")!.dataset.hasOverlay = "true" 
        }
    }, [overlayOpen])

    return (
        <OverlayContext.Provider value={overlayOpen}>
            <OverlayDispatchContext.Provider value={overlayDispatch}>
                {children}
            </OverlayDispatchContext.Provider>
        </OverlayContext.Provider>
    )
}

export default OverlayProvider