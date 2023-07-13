import { PageHeader } from "@/component"
import { Cards } from "@/container/focus_area"

function FocusArea(){
    return (
        <main>
            <PageHeader title="Our Focus Area" />
            <section className="section-container">
                <div className="lg:p-xl lg:pb-0">
                    <h2 className="text-heading-1 font-squada-one uppercase mb-large">OUR GOALS</h2>
                    <p className="text-body-big">Working towards the United Nations' Sustainable Development Goals, Seerakku focuses on the following areas:</p>
                </div>
            </section>
            <Cards />
        </main>
    )
}

export default FocusArea