'use client';

import { useState } from "react";
import * as nova_images from "@/assets/images/gallery/nova";
import * as new_tree_new_life from '@/assets/images/gallery/new_tree_new_life'
import Image from "next/image";
import { useEffect } from "react";
import PhotoAlbum from "react-photo-album";
import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Link from "next/link";
import { Result } from "postcss";

type GalleryProps = {
  isShowAllImages?: boolean;
  isViewAllBtn?:boolean;
};


const Gallery: React.FC<GalleryProps> = ({isShowAllImages=true, isViewAllBtn=false}) => {

    function getGalleryImages(key:Object){
        let images_array = [...Object.values(key)]
        if(isShowAllImages)
            return images_array
        return images_array.slice(0,6)
    }

    const [isGalleryOpen, setGalleryOpen] = useState(false)
    const [activeGalleryName, setActiveGalleryName] = useState("nova")

    const galleryImg:any = {
        'nova' : {
            name : 'nova',
            images : getGalleryImages(nova_images)
        },
        'new tree new life':{
            name: 'new tree new life',
            images: getGalleryImages(new_tree_new_life)
        },
        'one student one life':{
            name: 'one student one life'
        },
        'plant & greet':{
            name: 'plant & greet'
        },
        'tree for farmers':{
            name:'tree for farmers'
        },
        'tree for sparrows':{
            name:'tree for sparrows'
        },
        'tree for elephants':{
            name:'tree for elephants'
        }
    }

    // useEffect(() => {
    //     console.log(gallery_images)
    // }, [])

    function openGallery(){
        setActiveGalleryName("nova")
        setGalleryOpen(true)
    }

    return(
        <>
            <section className="section-container my-8">
                <p className="font-squada-one text-heading-4 lg:text-heading-3 text-center uppercase">
                    <h2>Our Gallery</h2>
                </p>
                <div className="my-8 hidden lg:block">
                    <ul className="flex flex-wrap gap-y-6 gap-x-10">
                        {
                            Object.keys(galleryImg).map((name)=>(
                                <li className={`rounded-full border-2 border-dark-text ${name === activeGalleryName && 'bg-accent text-white border-white'}`}>
                                    <button className="uppercase font-squada-one text-body-big px-12 py-3" onClick={()=>{setActiveGalleryName(name)}}>
                                        {name}
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="my-6 lg:my-12">
                    {activeGalleryName && <PhotoAlbum layout="masonry" photos={galleryImg[activeGalleryName].images} columns={(containerWidth)=>{if(containerWidth < 400) return 2; return 3;}}></PhotoAlbum>}
                </div>
                {!isShowAllImages && 
                    <div>
                        <Link href="/our_gallery" className="bg-accent py-2 lg:py-3 rounded-full text-white text-lg lg:text-xl font-semibold mx-auto border block w-4/12 lg:w-2/12 text-center">View All</Link>
                    </div>
                }
            </section>
        </>
    )
}

export default Gallery

//  return (
//         <section className="section-container">
//             <div className="text-center">
//                 <h1 className="font-squada-one text-heading-3 lg:text-center uppercase text-dark-text mb-large">
//                     OUR GALLERY
//                 </h1>
//                 <div className="flex-wrap gap-large hidden lg:flex mb-large">
//                     {gallery_names.map((item: string, index: number) => (
//                         <span className="border-2 border-black rounded-full font-squada-one text-heading-6 px-6 py-2 capitalize text-dark-text" key={index}>{item}</span>
//                     ))}
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-4 gap-large">
//                     {Object.keys(gallery_images).map((item: any, index: number) => (
//                         <div className="w-full aspect-video overflow-hidden rounded-xl" data-name={item} onClick={openGallery} key={index}>
//                             <Image src={gallery_images[item][0]} alt="Gallery image" className="w-full h-auto object-cover" />
//                         </div>
//                     ))}
//                     {
//                         isGalleryOpen && (
//                             <Lightbox
//                                 slides={gallery_images[activeGalleryName]}
//                                 open={true}
//                                 close={() => setGalleryOpen(false)}
//                             />
//                         )
//                     }
//                 </div>
//             </div>
//         </section>
//     )