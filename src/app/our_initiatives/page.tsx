import { PageHeader } from "@/component";
import { Cards, JoinUs } from "@/container/our_initiatives/index";
import type { Metadata } from 'next'
import { our_initiatives_1 } from "@/assets/images";
import Image from "next/image";
import {Button} from "@/component";

export const metadata: Metadata = {
  title: "Our Initiatives"
}

function OurInitiatives(){
    return (
        <main>
            <PageHeader title="OUR INITIATIVES" description="At Seerakku, we are dedicated to creating a sustainable future through our various initiatives. Join us in making a positive impact and contributing to environmental conservation with the following programs" />
            <section className='bg-primary-lite section-bottom-tear'>
                    <div className="section-container">
                        <div className="flex items-center flex-wrap">
                            <div className='w-full lg:w-1/2'>
                                <Image src={our_initiatives_1} alt="Get Involved image" className="w-full max-w-[632px] lg:mx-auto" unoptimized />
                            </div>
                            <div className='w-full lg:w-1/2 p-large'>
                                <h3 className="text-heading-2 mb-large font-squada-one uppercase">Nova</h3>
                                <p className="mb-large text-body-big">NOVA, Carbon-Neutral Baby: NOVA is our flagship initiative that focuses on offsetting carbon emissions associated with newborns. <br/><br/>We believe that every child deserves a sustainable and healthy future. Through NOVA, we plant trees and create food forests in the name of each newborn, ensuring a carbon-neutral footprint for their lifetime.<br/><br/>Join us in celebrating the birth of a child while contributing to a greener planet.</p>
                                <Button text="See Gallery" href="/our_gallery" className="bg-accent px-10 py-3 rounded-full text-white font-bold font-xl"></Button>
                            </div>
                        </div>
                    </div>
                </section>
            <Cards />
            <JoinUs />
        </main>
    )
}

export default OurInitiatives;