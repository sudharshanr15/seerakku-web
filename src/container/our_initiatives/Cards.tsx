import Image, { StaticImageData } from "next/image"
import { our_initiatives_1, our_initiatives_2, our_initiatives_3, our_initiatives_4, our_initiatives_5, our_initiatives_6, our_initiatives_7 } from "@/assets/images"
import TearSection from "./TearSection"

type CardData = {
    id: number,
    title: string,
    desc: string,
    image: StaticImageData
}

const data: CardData[] = [
    {
        id: 1,
        title: "NOVA",
        desc: `NOVA, Carbon-Neutral Baby: NOVA is our flagship initiative that focuses on offsetting carbon emissions associated with newborns. <br/><br/>We believe that every child deserves a sustainable and healthy future. Through NOVA, we plant trees and create food forests in the name of each newborn, ensuring a carbon-neutral footprint for their lifetime.<br/><br/>Join us in celebrating the birth of a child while contributing to a greener planet.`,
        image: our_initiatives_1
    },
    {
        id: 2,
        title: "NEW TREE FOR NEW LIFE",
        desc: `Through our program, we celebrate the arrival of a new life by partnering with hospitals, and planting a tree in honor of the newborn.<br/><br/>This initiative symbolizes growth, vitality, and the interconnectedness of all living beings.<br/><br/>By planting trees, we create a legacy of sustainability and contribute to reforestation efforts.`,
        image: our_initiatives_2
    },
    {
        id: 3,
        title: "ONE STUDENT : ONE LIFE",
        desc: `Education and environmental stewardship go hand in hand. Through our "One Student, One Tree" initiative, we encourage students to actively participate in tree planting activities.<br/><br/>For each student involved, we plant a tree in their name, fostering a sense of environmental responsibility and connecting them to nature. <br/><br/>By empowering students as guardians of the environment, we sow the seeds for a sustainable future.`,
        image: our_initiatives_3
    },
    {
        id: 4,
        title: "PLANT & GREET",
        desc: `This initiative brings communities together through tree-planting events. Participants have the opportunity to plant trees while enjoying the company of others.<br/><br/>This program not only promotes environmental conservation but also cultivates a sense of togetherness and joy in making a positive impact.`,
        image: our_initiatives_4
    },
    {
        id: 5,
        title: "TREE FOR FARMERS",
        desc: `Through our "Trees For Farmers" initiative, we collaborate with local farmers to establish agroforestry systems.<br/><br/>By integrating trees with agricultural practices, we help farmers improve their livelihoods, enhance soil health, and promote sustainable land use.<br/><br/>Together, we work towards achieving food security, economic prosperity, and environmental sustainability.`,
        image: our_initiatives_5
    },
    {
        id: 6,
        title: "TREE FOR SPARROWS",
        desc: `Our "Trees For Sparrows" program aims to create mini sanctuaries for sparrows in urban areas.
        <br/><br/>
        By implementing the Miyawaki Forest technique, we establish dense forests that provide food, shelter, and nesting opportunities for these beloved birds. 
        <br/><br/>
        Through this initiative, we enhance biodiversity, protect sparrow populations, and restore ecological balance.`,
        image: our_initiatives_6
    },
    {
        id: 7,
        title: "TREE FOR ELEPHANTS",
        desc: `Our "Trees For Elephants" initiative focuses on the conservation of elephants and their habitats. <br/><br/>We plant trees in areas crucial for elephant conservation, providing them with food sources, shelter, and safe corridors.<br/><br/>By safeguarding these majestic creatures, we contribute to the preservation of biodiversity and the protection of natural ecosystems.`,
        image: our_initiatives_7
    },
]


function Cards(){
    return (
        <>
        {data.map((item, index) => {
            let is_odd = (index % 2) != 0
            let is_last = (data.length -1) == index
            return (
                <section className={`${is_odd ? 'bg-primary-lite section-container-tear' : ''} ${is_last ? "after:content-[]" : ""}`} key={index}>
                    <div className="section-container">
                        <div className="flex items-center flex-wrap">
                            <div className={`w-full lg:w-1/2 ${is_odd ? "lg:order-2" : ''}`}>
                                <Image src={item.image} alt="Get Involved image" className="w-full max-w-[632px] lg:mx-auto" unoptimized />
                            </div>
                            <div className={`w-full lg:w-1/2 p-large ${is_odd ? "lg:order-1" : ''}`}>
                                <h3 className="text-heading-2 mb-large font-squada-one uppercase">{item.title}</h3>
                                <p className="mb-large text-body-big" dangerouslySetInnerHTML={{__html: item.desc}}></p>
                            </div>
                        </div>
                    </div>
                </section>
            )
        })}
        {/* <section>
            <div className="section-container">
                <div className="flex items-center flex-wrap">
                    <div className="w-full lg:w-1/2">
                        <Image src={get_involved_1} alt="Get Involved image" className="w-full max-w-[632px] lg:mx-auto" unoptimized />
                    </div>
                    <div className="w-full lg:w-1/2 p-large">
                        <h3 className="text-heading-2 mb-large font-squada-one uppercase">BECOME A VOLUNTEER</h3>
                        <p className="mb-large text-body-big">Join our dedicated team of volunteers and actively participate in our initiatives.<br/><br/>Whether it's tree planting, water restoration, coastal plantation, or agroforestry, your time and effort can make a significant difference.<br/><br/>As a volunteer, you'll have the opportunity to connect with nature, learn new skills, and contribute directly to the well-being of our planet.</p>
                    </div>
                </div>
            </div>
        </section>
        <TearSection>
            <div className="section-container">
                <div className="flex items-center flex-wrap">
                    <div className="w-full lg:w-1/2">
                        <Image src={get_involved_1} alt="Get Involved image" className="w-full max-w-[632px] lg:mx-auto" unoptimized />
                    </div>
                    <div className="w-full lg:w-1/2 p-large">
                        <h3 className="text-heading-2 mb-large font-squada-one uppercase">BECOME A VOLUNTEER</h3>
                        <p className="mb-large text-body-big">Join our dedicated team of volunteers and actively participate in our initiatives.<br/><br/>Whether it's tree planting, water restoration, coastal plantation, or agroforestry, your time and effort can make a significant difference.<br/><br/>As a volunteer, you'll have the opportunity to connect with nature, learn new skills, and contribute directly to the well-being of our planet.</p>
                    </div>
                </div>
            </div>
        </TearSection> */}
        </>
    )
}

export default Cards