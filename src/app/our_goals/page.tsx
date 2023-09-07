import { PageHeader } from "@/component";
import * as CardImages from "@/assets/images/our_golas"
import Image, { StaticImageData } from "next/image";


type CardType = {
    title: string,
    description: string,
    backgroundimage: StaticImageData,
    cardStyle: string
}

const staticCard:CardType = {
        title:'NO POVERTY',
        description: `We provide agroforestry opportunities for farmers to improve their livelihoods and promote sustainable land use practices.`,
        backgroundimage: CardImages.no_poverty,
        cardStyle: ''
    }

const cards:CardType[] = [
    {
        title: 'Clearn Water & Sanitation',
        description: "We work towards restoring water sources through reforestation and watershed management initiatives.",
        backgroundimage: CardImages.cleanwater,
        cardStyle: ''

    },
    {
        title: 'ZERO HUNGER',
        description: 'Our afforestation initiatives provide food and habitat for wildlife, while our agroforestry programs promote sustainable farming practices and help increase crop yields.',
        backgroundimage: CardImages.zero_hunger,
        cardStyle: 'tear'
    },
    {
        title: 'CLIMATE ACTION',
        description: 'Seerakku is committed to promoting coastal plantation and marine conservation initiatives to protect and preserve marine ecosystems.',
        backgroundimage: CardImages.climate_action,
        cardStyle: ''
    },
    {
        title: 'LIFE BELOW WATER',
        description:'Seerakku is committed to promoting coastal plantation and marine conservation initiatives to protect and preserve marine ecosystems.',
        backgroundimage: CardImages.life_below_water,
        cardStyle: 'tear'
    },
    {
        title: 'PARTNERSHIP FOR THE GOALS',
        description:'We work with local communities, government bodies, and other organizations to achieve our sustainability goals and positively impact the environment and local communities in India.',
        backgroundimage: CardImages.parntership,
        cardStyle: ''
    }
]

function getCard(cardImage:StaticImageData, title:string, description:string, alt:string=''){
    return(
        <div className="mt-8 first-letter:py:6 lg:p-12 lg:flex">
            <div className="p-4 basis-6/12">
                <h3 className="text-4xl lg:text-5xl font-squada-one uppercase">{title}</h3>
                <p className="py-4 lg:text-xl" dangerouslySetInnerHTML={{__html:description}}></p>
            </div>
            <div className="p-4 lg:px-16 basis-6/12 flex-auto h-[300px] lg:h-[400px]">
                <Image className="rounded-md h-full w-full object-center" src={cardImage} alt={alt} style={{objectFit: "cover"}}></Image>
            </div>
        </div>
    )
}

function tearCard(cardImage:StaticImageData, title:string, description:string, alt:string=''){
    return(
        <section className="py-8 section-container-tear bg-primary-lite">
            <div className="lg:flex pt-8">
                <div className="p-4 lg:px-16 basis-6/12 flex-auto h-[300px] lg:h-[400px]">
                    <Image className="lg:rounded-md h-full w-full object-center" src={cardImage} alt={alt} style={{objectFit: "cover"}}></Image>
                </div>
                <div className="p-4 lg:mr-4 basis-6/12">
                    <h3 className="text-4xl lg:text-5xl font-squada-one uppercase">{title}</h3>
                    <p className="py-4 lg:text-xl" dangerouslySetInnerHTML={{__html:description}}></p>
                </div>
            </div>
        </section>
    )
}

function OurGoals(){
    return(
        <>
            <PageHeader backgroundimage="/images/forest_with_water.png" title="Our Goals" description="Working towards the United Nations' Sustainable Development Goals, Seerakku focuses on the following areas:"></PageHeader>
            <section className="py:4 lg:p-12  section-bottom-tear bg-primary-lite text-body-big">
                <div className="lg:flex ">
                    <div className="p-4 lg:px-16 basis-6/12 flex-auto h-[300px] lg:h-[400px]">
                        <Image className="rounded-xl h-full w-full object-center" src={staticCard.backgroundimage} alt='' style={{objectFit: "cover"}}></Image>
                    </div>
                    <div className="p-4 lg:mr-4 basis-6/12">
                        <h3 className="text-4xl lg:text-5xl font-squada-one uppercase">{staticCard.title}</h3>
                        <p className="py-4 lg:text-xl" dangerouslySetInnerHTML={{__html:staticCard.description}}></p>
                    </div>
                </div>
            </section>
            <section className="text-body-big">
                {cards.map((card) => (
                        // Use the ternary operator to conditionally render components
                        card.cardStyle === '' ? (
                            getCard(card.backgroundimage, card.title, card.description)
                        ) : (
                            tearCard(card.backgroundimage, card.title, card.description)
                        )
                ))}
            </section>
        </>
    )
}

export default OurGoals