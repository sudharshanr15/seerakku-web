import Image from "next/image";
import { get_involved_1, page_tear, page_tear_bottom } from "@/assets/images";

const data = [
    {
        id: 1,
        title: "BECOME A VOLUNTEER",
        desc: "Join our dedicated team of volunteers and actively participate in our initiatives.\
        Whether it's tree planting, water restoration, coastal plantation, or agroforestry, your time and effort can make a significant difference.\
         As a volunteer, you'll have the opportunity to connect with nature, learn new skills, and contribute directly to the well-being of our planet."
    }
]

function Card(){
    return (
        <>
        <section>
            <div className="section-container">
                <div className="items-center lg:columns-2">
                    <div>
                        <Image src={get_involved_1} alt="Get Involved image" unoptimized />
                    </div>
                    <div className="p-large">
                        <h3 className="text-heading-2 mb-large font-squada-one">Become A volunteer</h3>
                        <p className="mb-large">Join our dedicated team of volunteers and actively participate in our initiatives.<br/><br/>Whether it's tree planting, water restoration, coastal plantation, or agroforestry, your time and effort can make a significant difference.<br/><br/>As a volunteer, you'll have the opportunity to connect with nature, learn new skills, and contribute directly to the well-being of our planet.</p>
                        <button className="button-primary">Join us</button>
                    </div>
                </div>
            </div>
        </section>
        <section className="bg-primary-lite relative">
            <div className="absolute top-0 left-0 right-0 -translate-y-3/4">
                <Image src={page_tear} className="w-full" alt="Page tear" unoptimized />
            </div>
            <div className="section-container">
                <div className="items-center lg:columns-2">
                    <div>
                        <Image src={get_involved_1} alt="Get Involved image" unoptimized />
                    </div>
                    <div className="p-large">
                        <h3 className="text-heading-2 mb-large font-squada-one">Become A volunteer</h3>
                        <p className="mb-large">Join our dedicated team of volunteers and actively participate in our initiatives.<br/><br/>Whether it's tree planting, water restoration, coastal plantation, or agroforestry, your time and effort can make a significant difference.<br/><br/>As a volunteer, you'll have the opportunity to connect with nature, learn new skills, and contribute directly to the well-being of our planet.</p>
                        <button className="button-primary">Join us</button>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 translate-y-1/4">
                <Image src={page_tear_bottom} className="w-full" alt="Page tear" unoptimized />
            </div>
        </section>
        <section>
            <div className="section-container">
                <div className="items-center lg:columns-2">
                    <div>
                        <Image src={get_involved_1} alt="Get Involved image" unoptimized />
                    </div>
                    <div className="p-large">
                        <h3 className="text-heading-2 mb-large font-squada-one">Become A volunteer</h3>
                        <p className="mb-large">Join our dedicated team of volunteers and actively participate in our initiatives.<br/><br/>Whether it's tree planting, water restoration, coastal plantation, or agroforestry, your time and effort can make a significant difference.<br/><br/>As a volunteer, you'll have the opportunity to connect with nature, learn new skills, and contribute directly to the well-being of our planet.</p>
                        <button className="button-primary">Join us</button>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Card