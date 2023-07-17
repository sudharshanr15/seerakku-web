import { Form, Links } from "@/container/contact"

function Contact(){
    return (
        <section className="section-container">
            <div className="flex flex-wrap lg:flex-nowrap gap-large">
                <div className="w-full lg:w-1/3 h-full">
                    <Links />
                </div>
                <div className="w-full lg:w-2/3">
                    <Form />
                </div>
            </div>
        </section>
    )
}

export default Contact