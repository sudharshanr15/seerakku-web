import Image from "next/image";

import { page_tear, page_tear_bottom } from "@/assets/images";
import { ReactNode } from "react";

function TearSection({children}: {children: ReactNode}){
    return (
        <section className="bg-primary-lite relative">
            <div className="absolute top-0 left-0 right-0 -translate-y- lg:-translate-y-3/4">
                <Image src={page_tear} className="w-full" alt="Page tear" unoptimized />
            </div>
            {children}
            <div className="absolute bottom-0 left-0 right-0 translate-y-2/3 lg:translate-y-1/4">
                <Image src={page_tear_bottom} className="w-full" alt="Page tear" unoptimized />
            </div>
        </section>
    )
}

export default TearSection