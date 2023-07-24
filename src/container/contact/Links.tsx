import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";

function Links(){
    return (
        <div className="bg-primary-lite p-large xl:p-xl 2xl:p-xxl rounded-2xl lg:rounded-3xl">
            <div className="flex flex-col gap-8 break-word">
                <h3 className="text-subheading text-black">Follow us on</h3>
                <div className="flex gap-large">
                    <Link href="" target="_blank" className="h-[2.1rem] inline-block text-secondary"><FontAwesomeIcon className="h-full w-auto" icon={faFacebook} /></Link>
                    <Link href="" target="_blank" className="h-[2.1rem] inline-block text-secondary"><FontAwesomeIcon className="h-full w-auto" icon={faYoutube} /></Link>
                    <Link href="" target="_blank" className="h-[2.1rem] inline-block text-secondary"><FontAwesomeIcon className="h-full w-auto" icon={faInstagram} /></Link>
                </div>
                <h3 className="text-subheading text-black">Email us</h3>
                <p className="flex items-center gap-3 text-subheading-regular lg:text-subheading text-secondary">
                    <span className="h-[1.8rem] inline-block text-secondary"><FontAwesomeIcon className="h-full w-auto" icon={faEnvelope} /></span>
                    <Link href="mailto:climateaction@seerakku.in" target="_blank" className="inline-block text-secondary underline underline-offset-4">climateaction@seerakku.in</Link>
                </p>
                <h3 className="text-subheading text-black">Call us</h3>
                <p className="flex items-center gap-3 text-subheading-regular lg:text-subheading text-secondary p-md bg-primary">
                    <span className="h-[1.8rem] inline-block text-secondary"><FontAwesomeIcon className="h-full w-auto" icon={faPhone} /></span>
                    <span className="inline-block text-secondary">+91 6379248007</span>
                </p>
                <h3 className="text-subheading text-black">Address</h3>
                <p className="flex items-center gap-3 text-subheading-regular lg:text-subheading text-secondary">
                    <span className="h-[1.8rem] inline-block text-secondary"><FontAwesomeIcon className="h-full w-auto" icon={faLocationDot} /></span>
                    <span className="inline-block text-secondary">Chennai, Tamilnadu, India.</span>
                </p>
            </div>
        </div>
    )
}

export default Links