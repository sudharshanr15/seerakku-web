import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { matrix } from "@/assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

type MembersType = {
    image: StaticImageData,
    name: string,
    role: string,
    social_links?: {
        instagram?: string,
        facebook?: string,
        youtube?: string
    }
}

const Members_list: MembersType[] = [
    {
        image: matrix,
        name: "Dinesh Kshatriyan",
        role: "Co-Founder"
    },
    {
        image: matrix,
        name: "Janaganandhini Dinesh",
        role: "Co-Founder"
    },
    {
        image: matrix,
        name: "Padmavathi S",
        role: "Managing Trustee"
    },
]

function OurBoard(){
    return (
        <section className="section-container">
            <h2 className="text-heading-3 font-squada-one text-dark-text uppercase mb-large text-center lg:text-start">OUR BOARD</h2>
            <div className="grid lg:grid-cols-3 gap-large">
                {Members_list.map((item, index) => (
                    <div className="p-large text-center">
                        <div className="bg-primary">
                            <div className="w-full">
                                <Image src={item.image} alt={item.name} className="w-full" unoptimized />
                            </div>
                            <div className="flex flex-col gap-md p-md">
                                <h3 className="text-subheading text-dark-text">{item.name}</h3>
                                <h4 className="text-body-big text-dark-text">{item.role}</h4>
                                <div className="flex justify-center gap-large text-secondary">
                                    <Link href="" className="h-8">
                                        <FontAwesomeIcon className="w-auto h-full" icon={faFacebook} />
                                    </Link>
                                    <Link href="" className="h-8">
                                        <FontAwesomeIcon className="w-auto h-full" icon={faYoutube} />
                                    </Link>
                                    <Link href="" className="h-8">
                                        <FontAwesomeIcon className="w-auto h-full" icon={faInstagram} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>                
                ))}
            </div>
        </section>
    )
}

export default OurBoard;