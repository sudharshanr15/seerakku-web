import Image from "next/image";

import { our_story_1, our_story_2, our_story_3 } from "@/assets/images";

function OurStory() {
    return (
        <section className="section-container-tear bg-primary-lite">
            <div className="flex flex-wrap lg:flex-nowrap section-container">
                <div className="w-full lg:w-1/2 p-md lg:p-xl">
                    <h2 className="text-heading-3 font-squada-one text-dark-text uppercase pb-large">
                        OUR STORY
                    </h2>
                    <p className="text-body-big text-dark-text">
                        Seerakku was born alongside the birth of our baby. We the co-founders, Dinesh Kshatriyan ( A  Socialpreneur, Sustainable Innovator, Environmental Advocate, and Tech Enthusiast) and Janaganandhini D ( An Environmental Advocate ), had our baby girl in the year 2023, March 3rd.
                        <br />
                        <br />
                        As we are also filled with a sense of responsibility to ensure a safe and sustainable future for our children and for generations to come. So, we were planning to offset our baby’s future carbon emissions with a food forest.
                        <br />
                        <br />
                        With the help of farmers in Krishnagiri district Shivalingapuram village, I and my wife have planted a thousand trees, shrubs, and plants that provide food and habitat for local wildlife and absorb and store carbon from the atmosphere, We named this as a NOVA initiative.
                        <br />
                        <br />
                        As our baby grows, the food forest will grow with her, providing a constant reminder of the love and hope that inspired the NOVA initiative. And that NFT will continue to symbolize the importance of individual action in creating a sustainable future.
                        <br />
                        <br />
                        After getting massive satisfaction from doing good for nature and our child, we decided to do this for every newborn in India. So we founded an NGO called Seerakku ( Seerakku is a Tamil word that means "Regulate" ).
                    </p>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-wrap justify-center gap-md">
                        <div className="flex justify-center gap-md w-100">
                            <Image src={our_story_1} alt="Our Story 1" className="max-w-[19.6rem] w-full" />
                            <Image src={our_story_2} alt="Our Story 2" className="max-w-[19.6rem] w-full" />
                        </div>
                        <Image src={our_story_3} alt="Our Story 3" className="max-w-[40rem] w-full" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurStory;