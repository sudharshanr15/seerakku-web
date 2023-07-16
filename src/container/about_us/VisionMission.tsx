function VisionMission(){
    return (
        <section className="flex flex-wrap lg:flex-nowrap vision-mission-container">
            <div className="w-full lg:w-1/2 vision">
                <div className="overlay px-xxl py-xl h-full">
                    <h2 className="text-heading-3 uppercase font-squada-one mb-large">Vision</h2>
                    <p className="text-body-big">Our vision is a carbon-neutral India where individuals and organizations prioritize sustainable practices.</p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 mission">
                <div className="overlay px-xxl py-xl h-full text-white">
                    <h2 className="text-heading-3 uppercase font-squada-one mb-large">Mission</h2>
                    <p className="text-body-big">Our mission is to create a sustainable future by enabling individuals to offset their carbon footprint and fund reforestation projects. We believe that every action counts and that by working together, we can create a positive impact on the planet.</p>
                </div>
            </div>
        </section>
    )
}

export default VisionMission;