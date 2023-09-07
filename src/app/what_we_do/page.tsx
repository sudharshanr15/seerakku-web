import { PageHeader } from "@/component";
import InfoCard from "@/component/info_card";
import { StaticImageData } from "next/image";
import card_image from '@/assets/images/what-we-do_5.png'
import ReverseInfoCard from "@/component/reverse_info_card";


type CardType = {
    title: string,
    description: string,
    backgroundimage: StaticImageData,
    cardStyle: string
}

const cards:CardType[] = [
    {
        title:'Tree Planting',
        description: `Seerakku, we believe in the power of trees to combat climate change and restore ecosystems.\
        We actively engage in tree planting initiatives, where we plant and nurture a variety of tree species. By doing so,\
        we aim to increase green cover, improve air quality, and provide habitats for wildlife.`,
        backgroundimage: card_image,
        cardStyle: ''
    },
    {
        title: 'WATER RESTORATION',
        description: " Water is a precious resource, and we work towards restoring and conserving it.<br><br>\
        We strive to protect and replenish water sources through reforestation and watershed management projects.<br><br>\
        Our efforts focus on preserving water quality, enhancing groundwater recharge, and ensuring sustainable water management practices.",
        backgroundimage: card_image,
        cardStyle: 'tear'

    },
    {
        title: 'Afforestation',
        description: 'Promoting afforestation is a key aspect of our work. We establish and maintain new forests and woodlands,\
        contributing to the conservation of biodiversity and the protection of natural habitats.<br><br>\
        Afforestation not only sequesters carbon dioxide but also provides numerous ecological, economic, and social benefits.',
        backgroundimage: card_image,
        cardStyle: ''
    },
    {
        title: 'Costal Plantation',
        description: 'Protecting our coastlines and marine ecosystems is crucial for a sustainable future.<br><br>\
        Seerakku actively engages in coastal zplantation initiatives, where we plant mangroves, dune vegetation,\
        and other coastal plants.<br><br> These plantations help prevent coastal erosion, support marine biodiversity,\
        and act as natural buffers against natural disasters.',
        backgroundimage: card_image,
        cardStyle: 'tear'
    },
    {
        title: 'Agroforestry',
        description:'We promote agroforestry as a sustainable farming practice integrating trees with agriculture.<br><br>\
        By combining tree planting with crop cultivation, we help farmers improve their livelihoods, enhance soil health,\
        conserve water, and diversify their income sources. Agroforestry contributes to food security, climate resilience,\
        and sustainable land use.',
        backgroundimage: card_image,
        cardStyle: ''
    }
]

function what_wedo(){
    return (
        <>
            <PageHeader 
                title="WHAT WE DO"  
                description=' Through our efforts, we strive to create a sustainable future for all and mitigate the effects of climate change.' 
                backgroundimage = '/images/what_we_do.png'
            />
            <div>
                {cards.map((card, index) => (
                    // Use the ternary operator to conditionally render components
                    card.cardStyle === '' ? (
                        <InfoCard
                            key={index}
                            cardImage={card.backgroundimage}
                            alt="Card Image"
                            title={card.title}
                            description={card.description}
                        />
                    ) : (
                        <ReverseInfoCard
                            key={index}
                            cardImage={card.backgroundimage}
                            alt="Card Image"
                            title={card.title}
                            description={card.description}
                        />
                    )
                ))}
            </div>
            {/* <InfoCard cardImage={card_image} alt="Card Image" title="Tree Planting" description={description}></InfoCard>
            <ReverseInfoCard cardImage={card_image} alt="Card Image" title="Tree Planting" description={description}></ReverseInfoCard> */}
        </>
    )
}

export default what_wedo;