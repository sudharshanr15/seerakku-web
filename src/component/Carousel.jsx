"use client";
import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Pagination } from "swiper/modules";

export default function App() {
  return (
    <div>
      <div className="hidden">
        <Swiper
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          effect={"fade"}
          modules={[Pagination, EffectFade]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="h-1/2 bg-carousel-bg ">hello</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-1/2 bg-carousel-bg ">hi</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-1/2 bg-carousel-bg ">how r u</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-1/2 bg-carousel-bg ">who r u</div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="h-[600px] w-full bg-carousel-bg bg-cover"></div>
    </div>
  );
}
