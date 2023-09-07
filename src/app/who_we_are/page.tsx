import { PageHeader } from "@/component";
import Image from "next/image";
import { what_we_do_3 as card_image } from "@/assets/images";
import { DonateButton } from "@/component/button";
import Link from "next/link";
import { OurBoard } from "@/container/about_us";

function who_weare(){
    return (
        <>
            <PageHeader 
                title="WHO WE ARE"  
                description=' Through our efforts, we strive to create a sustainable future for all and mitigate the effects of climate change.' 
                backgroundimage = '/images/what_we_do.png'
            />
            <section className="grid grid-cols-1 text-lg">
                <div className="p-4 lg:hidden">
                    <div className="h-[330px]">
                        <Image className="rounded-3xl object-cover h-full w-full" alt="image" src={card_image}></Image>
                    </div>
                    <h2 className="font-squada-one text-heading-4 mt-4 uppercas">WHO WE ARE</h2>
                    <p className="my-4">We are a non-profit organization committed to mitigating the effects of climate change through a range of initiatives in India.</p>
                    <DonateButton text="Donate Us"></DonateButton>
                </div>
                <div className="lg:order-2 lg:my-10">
                    <div className="lg:flex lg:p-8 lg:gap-10">
                        <div className="p-4 basis-6/12">
                            <h2 className="font-squada-one uppercase text-heading-4 text-secondary lg:text-heading-2">what we do</h2>
                            <p className="my-4 lg:text-body-big lg:leading-9">Seerakku's initiatives focus <span className="font-semibold">on tree planting, water restoration, afforestation, coastal plantation, and agroforestry,</span> working towards the UN's Sustainable Development Goals. Through our efforts, we strive to create a sustainable future for all and mitigate the effects of climate change.</p>
                            <Link className='bg-accent p-3 rounded-full block text-center text-white font-semibold text-xl lg:w-6/12' href='/what_we_do'>Discover Our Work</Link>
                        </div>
                        <div className="h-[370px] lg:h-[470px] basis-6/12">
                            <Image src={card_image} alt="image" className="object-cover h-full w-full lg:rounded-xl"></Image>
                        </div>
                    </div>
                </div>
                <div className="lg:order-1 section-bottom-tear bg-primary-lite lg:py-8 my-10 lg:my-0">
                    <div className="lg:flex  lg:p-8 lg:gap-10">
                        <div className="h-[370px] lg:h-[470px] basis-6/12">
                            <Image src={card_image} alt='our vision image' className="object-cover h-full w-full lg:rounded-xl"></Image>
                        </div>
                        <div className="p-4 basis-6/12">
                            <h2 className="font-squada-one uppercase text-heading-4 lg:text-heading-2 text-secondary">OUR VISON & MISSION</h2>
                            <p className="mt-4 lg:text-body-big"><span className="font-semibold">Our vision</span> is a carbon-neutral India where individuals and organizations prioritize sustainable practices.</p>
                            <p className="mt-4 lg:text-body-big"><span className="font-semibold">Our mission</span> is to create a sustainable future by enabling individuals to offset their carbon footprint and fund reforestation projects. We believe that every action counts and that by working together, we can create a positive impact on the planet.</p>
                        </div>
                    </div>
                </div>
                <div className="lg:order-3 bg-primary-lite lg:py-8">
                    <div className="flex flex-col lg:flex-row lg:p-8 lg:gap-10">
                        <div className="h-[420px] lg:h-[620px] lg:basis-6/12">
                            <Image src={card_image} alt='our vision image' className="object-cover h-full w-full lg:rounded-xl"></Image>
                        </div>
                        <div className="p-4 lg:basis-6/12">
                            <h2 className="font-squada-one uppercase text-heading-4 lg:text-heading-2 text-secondary">our story</h2>
                            <p className="mt-4 lg:text-body-big">Seerakku was born alongside the birth of our baby. We the co-founders, 
                            Dinesh Kshatriyan ( A  Socialpreneur, Sustainable Innovator, Environmental Advocate, and Tech Enthusiast) and Janaganandhini D
                            ( An Environmental Advocate ), had our baby girl in the year 2023, March 3rd.<br/><br/>As we are also filled with a
                            sense of responsibility to ensure a safe and sustainable future for our children and for generations to come. So, 
                            we were planning to offset our baby’s future carbon emissions with a food forest.<br/><br/>With the help of farmers
                            in Krishnagiri district Shivalingapuram village, I and my wife have planted a thousand trees, shrubs, and plants
                            that provide food and habitat for local wildlife and absorb and store carbon from the atmosphere, 
                            We named this as a NOVA initiative.</p>

                        </div>
                    </div>
                </div>
                <div className="lg:order-3 bg-primary-lite section-bottom-tear">
                    <div className="flex flex-col lg:flex-row lg:p-8 lg:gap-10">
                        <div className="p-4 lg:basis-6/12">
                            <p className="mt-4 lg:text-body-big lg:leading-9">As our baby grows, the food forest will grow with her, providing a constant reminder
                            of the love and hope that inspired the NOVA initiative. And that NFT will continue to symbolize the importance of 
                            individual action in creating a sustainable future.<br/><br/>After getting massive satisfaction from doing good for
                            nature and our child, we decided to do this for every newborn in India.<br/><br/>So we founded an NGO called 
                            <span className="font-semibold"> Seerakku ( Seerakku is a Tamil word that means "Regulate" )</span>.</p>
                            <Link className="bg-primary p-3 rounded-full block w-6/12 text-center font-bold my-8" href={'/our_initiatives'}>See Our Initiatives</Link>
                        </div>
                        <div className="h-[420px] lg:h-[620px] lg:basis-6/12">
                            <Image src={card_image} alt='our vision image' className="object-cover h-full w-full lg:rounded-xl"></Image>
                        </div>
                    </div>
                </div>  
                <div className="lg:order-4">
                    <OurBoard></OurBoard>
                </div>
            </section>
        </>
    )
}

export default who_weare;