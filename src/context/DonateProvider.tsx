'use client';

import { createContext, useContext, useEffect, useState } from "react";

const DonateContext = createContext(null);
const DonateUpdateContext = createContext(null);

export function useDonateMenu(){
    return useContext(DonateContext)
}

export function useDonateUpdate(){
    return useContext(DonateUpdateContext)
}

function DonateProvider({children}){
    const [open, setOpen] = useState(false)

    useEffect(() => {
        console.log(open)
    }, [open])

    function toggleOpen(){
        setOpen(prev => ( !prev ))
    }
    
    return (
        <DonateContext.Provider value={open}>
            <DonateUpdateContext.Provider value={toggleOpen}>
                {children}
            </DonateUpdateContext.Provider>
        </DonateContext.Provider>
    )
}

export default DonateProvider;