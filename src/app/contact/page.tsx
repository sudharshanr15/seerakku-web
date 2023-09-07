import { PageHeader } from "@/component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

function Contact(){
    return (
        <>
            <PageHeader title='Contact Us' description="Interested in our work at Seeraku? For any questions or thoughts, we‘d love to hear from you."></PageHeader>
            <section className="section-container">
                <div className="lg:flex lg:gap-16">
                    <div className="bg-primary-lite rounded-3xl px-6 py-10 lg:pl-10 lg:py-20 lg:pr-28">
                        <h5 className="text-xl font-bold lg:text-heading-6 lg:font-extrabold">Follow Us On</h5>
                        <ul className="flex gap-4 my-2 text-secondary lg:gap-8 lg:mt-4">
                            <li className="h-8 w-8 lg:h-10 lg:w-10">    
                                <a href=''>
                                    <FontAwesomeIcon icon={faFacebook} className="h-full w-auto" />
                                </a>
                            </li>
                            <li className="h-8 w-8 lg:h-10 lg:w-10">
                                <a href=''>
                                    <FontAwesomeIcon icon={faInstagram} className="h-full w-auto" />
                                </a>
                            </li>
                            <li className="h-8 w-8 lg:h-10 lg:w-10">
                                <a href=''>
                                    <FontAwesomeIcon icon={faYoutube} className="h-full w-auto" />
                                </a>
                            </li>
                        </ul>
                        <h5 className="text-xl font-bold mt-6 lg:text-heading-6 lg:font-extrabold lg:mt-12">Email Us</h5>
                        <a className="flex text-secondary text-lg items-center gap-2 my-2 font-semibold" href='mailto:climateaction@seerakku.in lg:mt-3'>
                            <div className="h-8 w-8 lg:h-10 lg:w-10"><span><FontAwesomeIcon icon={faEnvelope} className="h-full w-auto" /></span></div>
                            <span>climateaction@seerakku.in</span>
                        </a>
                        <h5 className="text-xl font-bold mt- lg:text-heading-6 lg:font-extrabold lg:mt-12">Call Us</h5>
                        <a href="tel:+91 6379248007" className="text-secondary flex gap-2 my-2 font-semibold text-lg items-center bg-primary p-2 rounded-xl lg:mt-3">
                            <div className="h-8 w-8 lg:h-10 lg:w-10"><span><FontAwesomeIcon icon={faPhone} className="h-full w-auto" /></span></div>
                            <span>+91 6379248007</span>
                        </a>
                        <h5 className="text-xl font-bold mt-6 lg:text-heading-6 lg:font-extrabold lg:mt-12">Address</h5>
                        <a className="flex text-secondary text-lg items-center gap-2 my-2 font-semibold lg:mt-3" href='https://goo.gl/maps/yXWX1TnG6QGJjdm16'>
                            <div className="h-8 w-8 lg:h-10 lg:w-10"><span><FontAwesomeIcon icon={faLocationDot} className="h-full w-auto" /></span></div>
                            <span>Chennai, Tamilnadu, India.</span>
                        </a>
                    </div>
                    <div className="px-6 py-10 lg:w-6/12 lg:p-0">
                        <p className="text-heading-3 font-squada-one text-center uppercase lg:text-start">Interested in our work at Seeraku? For any questions or thoughts, we‘d love to hear from you.</p>
                        <form action="" className="my-6">
                            <input className="border p-3 border-zinc-800 rounded-xl w-full my-2" type="text" name="name" id="name" placeholder="Enter your name"/>
                            <input className="border p-3 border-zinc-800 rounded-xl w-full my-2" type="tel" name="mobileNumber" id="mobileNumber" placeholder="Enter your number"/>
                            <input className="border p-3 border-zinc-800 rounded-xl w-full my-2" type="email" name="emailID" id="eamilId" placeholder="Enter your Email id"/>
                            <textarea className="resize-none border p-3 border-zinc-800 rounded-xl w-full my-2" name="selfIntro" id="selfIntro" rows={3} placeholder="Tell us about your self"></textarea>
                            <textarea className="resize-none border p-3 border-zinc-800 rounded-xl w-full" name="concern" id="concern" rows={3} placeholder="Tell us about your self"></textarea>
                            <button className="bg-primary p-3 w-full rounded-full my-2 font-squada-one text-xl lg:w-6/12">Send</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact