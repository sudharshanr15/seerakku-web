import { Button } from "@/component"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowTrendUp, faHandshake } from "@fortawesome/free-solid-svg-icons"

function JoinUs(){
    return (
        <section className="section-container">
            <div className="flex flex-col lg:items-center gap-xl">
                <h2 className="text-heading-1 uppercase font-squada-one">JOIN US</h2>
                <p className="text-body-big">Join us in these initiatives and be a part of the positive change we are creating. Together, we can make a lasting impact on the environment, foster sustainability, and ensure a better future for all.</p>
                <div className="flex flex-col lg:flex-row gap-4">
                    <button className="button-primary w-fit">
                        <FontAwesomeIcon icon={faArrowTrendUp} className="h-6 w-auto" />
                        <span className="ms-md">Become volunteer</span>
                    </button>
                    <button className="button-accent w-fit">
                        <FontAwesomeIcon icon={faHandshake} className="h-6 w-auto" />
                        <span className="ms-md">Partner with us</span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default JoinUs