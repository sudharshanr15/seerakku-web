import Image, { StaticImageData } from "next/image";
import { get_involved_1, get_involved_2, get_involved_3, page_tear, page_tear_bottom } from "@/assets/images";
import { Button } from "@/component";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightDots, faArrowTrendUp, faHeart } from "@fortawesome/free-solid-svg-icons";
import { ReactElement } from "react";

type ButtonType = {
    text: string,
    icon?: ReactElement,
    href?: string,
    className?: string,
}

type CardData = {
    id: number,
    title: string,
    desc: string,
    image: StaticImageData,
    button: ButtonType
}

const ButtonIcon = ({icon}: any) => (
    <FontAwesomeIcon icon={icon} className="w-[28px]" />
)

const data: CardData[] = [
    {
        id: 1,
        title: "BECOME A VOLUNTEER",
        desc: "Join our dedicated team of volunteers and actively participate in our initiatives.\
        Whether it's tree planting, water restoration, coastal plantation, or agroforestry, your time and effort can make a significant difference.\
         As a volunteer, you'll have the opportunity to connect with nature, learn new skills, and contribute directly to the well-being of our planet.",
        image: get_involved_1,
        button: {
            text: "Join Us",
            icon: <ButtonIcon icon={faArrowUpRightDots} />
        }
    },
]


function Card(){
    return (
        <>
        <section>
            <div className="section-container">
                <div className="flex items-center flex-wrap">
                    <div className="w-full lg:w-1/2">
                        <Image src={get_involved_1} alt="Get Involved image" className="w-full max-w-[632px] lg:mx-auto" unoptimized />
                    </div>
                    <div className="w-full lg:w-1/2 p-large">
                        <h3 className="text-heading-2 mb-large font-squada-one uppercase">BECOME A VOLUNTEER</h3>
                        <p className="mb-large text-body-big">Join our dedicated team of volunteers and actively participate in our initiatives.<br/><br/>Whether it's tree planting, water restoration, coastal plantation, or agroforestry, your time and effort can make a significant difference.<br/><br/>As a volunteer, you'll have the opportunity to connect with nature, learn new skills, and contribute directly to the well-being of our planet.</p>
                        <Button text="Join Us" className="text-primary" icon={<ButtonIcon icon={faArrowUpRightDots} />} />
                    </div>
                </div>
            </div>
        </section>
        <section className="bg-primary-lite relative">
            <div className="absolute top-0 left-0 right-0 -translate-y-1/2 lg:-translate-y-3/4">
                <Image src={page_tear} className="w-full" alt="Page tear" unoptimized />
            </div>
            <div className="section-container">
                <div className="flex items-center flex-wrap">
                    <div className="w-full lg:w-1/2">
                        <Image src={get_involved_2} alt="Get Involved image" className="w-full max-w-[632px] lg:mx-auto" unoptimized />
                    </div>
                    <div className="w-full lg:w-1/2 p-large">
                        <h3 className="text-heading-2 mb-large font-squada-one uppercase">BECOME A PARTNER</h3>
                        <p className="mb-large text-body-big">Collaboration is essential in driving sustainable change. If you represent an organization, institution, or community group that shares our vision, we invite you to become a partner.<br/><br/>By working together, we can leverage our collective resources, knowledge, and networks to implement impactful projects and create a greener and healthier future.</p>
                        <Button text="Become Partner" className="text-primary" icon={<ButtonIcon icon={faArrowTrendUp} />} />
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 translate-y-2/3 lg:translate-y-1/4">
                <Image src={page_tear_bottom} className="w-full" alt="Page tear" unoptimized />
            </div>
        </section>
        <section>
            <div className="section-container">
                <div className="flex items-center flex-wrap">
                    <div className="w-full lg:w-1/2">
                        <Image src={get_involved_3} alt="Get Involved image" className="w-full max-w-[632px] lg:mx-auto" unoptimized />
                    </div>
                    <div className="w-full lg:w-1/2 p-large">
                        <h3 className="text-heading-2 mb-large font-squada-one uppercase">DONATE</h3>
                        <p className="mb-large text-body-big">Support our organization financially by making a donation.<br/><br/>Your contribution, no matter the size, directly funds our initiatives and helps us implement projects that promote sustainability, biodiversity, and environmental conservation.<br/><br/>Your generosity enables us to continue our important work and create a positive impact on the planet.</p>
                        <Button text="Donate Now" className="text-primary" icon={<ButtonIcon icon={faHeart} />} />
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Card