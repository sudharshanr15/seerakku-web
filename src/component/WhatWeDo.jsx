import React from "react";

function WhatWeDo() {
  return (
    <div className="h-full bg-surface-color">
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-heading-3 font-squada-one text-secondary">
          What We Do
        </h1>
        <p className="w-1/2 klima-regular text-body-big text-center text-black pt-10">
          Seerakku's initiatives focus on{" "}
          <span className="font-black text-black">
            tree planting, water restoration, afforestation, coastal plantation,
            and agroforestry,
          </span>
          working towards the UN's Sustainable Development Goals. Through our
          efforts, we strive to create a sustainable future for all and mitigate
          the effects of climate change.
        </p>
      </div>
    </div>
  );
}

export default WhatWeDo;
