import React from "react";
import Image, { StaticImageData } from "next/image";

import { what_we_do_1, what_we_do_2, what_we_do_3, what_we_do_4, what_we_do_5 } from "@/assets/images";

type WhatWeDoType = {
  image: StaticImageData,
  title: string,
  text: string
}

const WhatWeDoList_1: WhatWeDoType[] = [
  {
    image: what_we_do_1,
    title: "Tree Planting",
    text: "At Seerakku, we believe in the power of trees to combat climate change and restore ecosystems. We actively engage in tree planting initiatives, where we plant and nurture a variety of tree species. By doing so, we aim to increase green cover, improve air quality, and provide habitats for wildlife.",
  },
  {
    image: what_we_do_2,
    title: "Water Restoration",
    text: " Water is a precious resource, and we work towards restoring and conserving it. We strive to protect and replenish water sources through reforestation and watershed management projects. Our efforts focus on preserving water quality, enhancing groundwater recharge, and ensuring sustainable water management practices."
  }
]

const WhatWeDoList_2: WhatWeDoType[] = [
  {
    image: what_we_do_3,
    title: "Afforestation",
    text: "Promoting afforestation is a key aspect of our work. We establish and maintain new forests and woodlands, contributing to the conservation of biodiversity and the protection of natural habitats. Afforestation not only sequesters carbon dioxide but also provides numerous ecological, economic, and social benefits.",
  },
  {
    image: what_we_do_4,
    title: "Costal Plantation",
    text: "Protecting our coastlines and marine ecosystems is crucial for a sustainable future. Seerakku actively engages in coastal zplantation initiatives, where we plant mangroves, dune vegetation, and other coastal plants. These plantations help prevent coastal erosion, support marine biodiversity, and act as natural buffers against natural disasters."
  },
  {
    image: what_we_do_5,
    title: "Agroforestry",
    text: "We promote agroforestry as a sustainable farming practice integrating trees with agriculture. By combining tree planting with crop cultivation, we help farmers improve their livelihoods, enhance soil health, conserve water, and diversify their income sources. Agroforestry contributes to food security, climate resilience, and sustainable land use."
  }
]

function WhatWeDo() {
  return (
    <section className="section-container">
      <div className="flex flex-col gap-large text-dark-text">
        <h1 className="text-heading-3 font-squada-one lg:text-center">
          What We Do
        </h1>
        <p className="lg:w-1/2 mx-auto text-body-big lg:text-center">
          Seerakku's initiatives focus on{" "}
          <span className="text-subheading">
            tree planting, water restoration, afforestation, coastal plantation,
            and agroforestry,
          </span>
          working towards the UN's Sustainable Development Goals. Through our
          efforts, we strive to create a sustainable future for all and mitigate
          the effects of climate change.
        </p>
        <div className="flex flex-wrap gap-large">
          <div className="grid gap-large gap-cols-1 lg:grid-cols-2">
            {WhatWeDoList_1.map((item, index) => (
              <div className="lg:p-large" key={index}>
                <div className="flex flex-col gap-xl">
                  <Image src={item.image} alt={item.title} className="w-full h-auto" unoptimized />
                  <h2 className="text-heading-4 font-squada-one lg:text-center">{item.title}</h2>
                  <p className="text-body-big">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid gap-large gap-cols-1 lg:grid-cols-3">
            {WhatWeDoList_2.map((item, index) => (
              <div className="lg:p-large" key={index}>
                <div className="flex flex-col gap-xl">
                  <Image src={item.image} alt={item.title} className="w-full h-auto" unoptimized />
                  <h2 className="text-heading-4 font-squada-one lg:text-center">{item.title}</h2>
                  <p className="text-body-big">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
