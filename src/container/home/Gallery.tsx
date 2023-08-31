'use client';
import * as nova_images from "@/assets/images/gallery/nova";
import Image from "next/image";
import { useEffect } from "react";
import { PhotoAlbum } from "react-photo-album";

function Gallery(){
    const gallery_names: string[] = [
        "nova", "new tree new life", "one student one life", "plant & greet", "tree for farmers", "tree for sparrows", "tree for elephants"
    ];

    const gallery_images = {
        "nova": [...Object.values(nova_images)]
    }

    useEffect(() => {
        console.log(gallery_images)
    }, [])

    return (
        <section className="section-container">
            <div className="text-center">
                <h1 className="font-squada-one text-heading-3 lg:text-center uppercase text-dark-text mb-large">
                    OUR GALLERY
                </h1>
                <div className="flex-wrap gap-large hidden lg:flex mb-large">
                    {gallery_names.map((item: string, index: number) => (
                        <span className="border-2 border-black rounded-full font-squada-one text-heading-6 px-6 py-2 capitalize text-dark-text" key={index}>{item}</span>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-large">
                    {gallery_images['nova'].map((item: any, index: number) => (
                        <div className="w-full aspect-video overflow-hidden rounded-xl" key={index}>
                            <Image src={item} alt="Gallery image" className="w-full h-auto object-cover" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Gallery