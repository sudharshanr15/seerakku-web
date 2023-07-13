import { Button } from "@/component"

function JoinUs(){
    return (
        <section className="section-container-tear bg-primary-lite">
            <div className="section-container flex flex-col lg:items-center gap-xl">
                <h2 className="text-heading-1 uppercase font-squada-one">JOIN US</h2>
                <p className="text-body-big">Join us in these initiatives and be a part of the positive change we are creating. Together, we can make a lasting impact on the environment, foster sustainability, and ensure a better future for all.</p>
                <div className="flex flex-col lg:flex-row gap-4">
                    <Button className="button-primary w-fit" text="Become volunteer" />
                    <Button className="button-accent w-fit" text="Partner with us" />
                </div>
            </div>
        </section>
    )
}

export default JoinUs