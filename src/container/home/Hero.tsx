"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/bundle';

import { slide_1, slide_2, slide_3, slide_4, slide_5 } from '@/assets/images';

import Image from 'next/image';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';

import styles from "./styles.module.css";
import { DonateButton } from '@/component/button';

const slides = [
    {
        name: "Planting Trees",
        image: slide_1,
    },
    {
        name: "Planting Trees",
        image: slide_2,
    },
    {
        name: "Planting Trees",
        image: slide_3,
    },
    {
        name: "Planting Trees",
        image: slide_4,
    },
    {
        name: "Planting Trees",
        image: slide_5,
    },
]

function Hero(){
    const pagination = {
        clickable: true,
        renderBullet: function(index, className){
            return `<span class="slide_pagination ${className}"></span>`
        }
    }

    return (
        <section className="">
            <Swiper
                pagination={pagination}
                slidesPerView={1}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                effect={'fade'}
                modules={[Autoplay, EffectFade, Pagination]}
                className="hero-slides"
            >
                {slides.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative">
                            <Image src={item.image} alt="Slide Image" className="w-full min-h-[80vh] lg:min-h-none object-cover object-left" unoptimized />
                            <div className="flex flex-col gap-xl section-container w-3/4 absolute top-1/2 -translate-y-1/2 text-surface-color">
                                <h1 className='text-heading-3 lg:text-big-text font-squada-one uppercase'>CREATING A SUSTAINABLE LEGACY</h1>
                                <p className="text-heading-4 lg:text-heading-2 text-primary font-squada-one">Planting Trees</p>
                                <DonateButton className='w-fit' />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default Hero;