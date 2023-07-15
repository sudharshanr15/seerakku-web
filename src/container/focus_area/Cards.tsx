import Image, { StaticImageData } from "next/image"

import { focus_area_1, focus_area_2, focus_area_3, focus_area_4, focus_area_5, focus_area_6 } from "@/assets/images"

type CardData = {
    title: string,
    desc: string,
    image: StaticImageData
}

const data: CardData[] = [
    {
        title: "NO POVERTY",
        desc: `We provide agroforestry opportunities for farmers to improve their livelihoods and promote sustainable land use practices.`,
        image: focus_area_1
    },
    {
        title: "CLEAN WATER & SANITATION",
        desc: ` We work towards restoring water sources through reforestation and watershed management initiatives.`,
        image: focus_area_2
    },
    {
        title: "ZERO HUNGER",
        desc: ` Our afforestation initiatives provide food and habitat for wildlife, while our agroforestry programs promote sustainable farming practices and help increase crop yields.`,
        image: focus_area_3
    },
    {
        title: "CLIMATE ACTION",
        desc: ` Seerakku is committed to promoting coastal plantation and marine conservation initiatives to protect and preserve marine ecosystems.`,
        image: focus_area_4
    },
    {
        title: "LIFE BELOW WATER",
        desc: ` Seerakku is committed to promoting coastal plantation and marine conservation initiatives to protect and preserve marine ecosystems.`,
        image: focus_area_5
    },
    {
        title: "PARTNERSHIP FOR THE GOALS",
        desc: `We work with local communities, government bodies, and other organizations to achieve our sustainability goals and positively impact the environment and local communities in India.`,
        image: focus_area_6
    },
]


function Cards(){
    return (
        <>
            {data.map((item, index) => {
                let is_odd = (index % 2) != 0
                return (
                    <section className={`${is_odd ? 'bg-primary-lite section-container-tear' : ''}`} key={index}>
                        <div className="section-container">
                            <div className="flex items-center flex-wrap">
                                <div className={`w-full lg:w-1/4 ${is_odd ? "lg:order-2" : ''}`}>
                                    <Image src={item.image} alt="Get Involved image" className="w-full max-w-[19.75rem] lg:mx-auto" unoptimized />
                                </div>
                                <div className={`w-full lg:w-3/4 p-large ${is_odd ? "lg:order-1" : ''}`}>
                                    <h3 className="text-heading-2 mb-large font-squada-one uppercase">{item.title}</h3>
                                    <p className="mb-large text-body-big" dangerouslySetInnerHTML={{__html: item.desc}}></p>
                                </div>
                            </div>
                        </div>
                    </section>
                )
            })}
        </>
    )
}

export default Cards