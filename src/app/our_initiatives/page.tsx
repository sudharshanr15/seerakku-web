import { PageHeader } from "@/component";
import { Cards, JoinUs } from "@/container/our_initiatives/index";

function OurInitiatives(){
    return (
        <main>
            <PageHeader title="OUR INITIATIVES" />
            <section className="section-container">
                <div className="lg:p-xl lg:pb-0">
                    <h2 className="text-heading-1 font-squada-one uppercase mb-large">OUR INITIATIVES</h2>
                    <p className="text-body-big">At Seerakku, we are dedicated to creating a sustainable future through our various initiatives. Join us in making a positive impact and contributing to environmental conservation with the following programs:</p>
                </div>
            </section>
            <Cards />
            <JoinUs />
        </main>
    )
}

export default OurInitiatives;