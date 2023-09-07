import Image, { StaticImageData } from "next/image";

function ReverseInfoCard({cardImage, alt='', title, description}:{cardImage:StaticImageData, alt:string, title:string, description:string}){
    return(
        <section className="py:4 lg:p-12  section-container-tear bg-primary-lite ">
            <div className="lg:flex pt-8">
                <div className="p-4 lg:mr-4 basis-6/12">
                    <h3 className="text-4xl lg:text-5xl font-squada-one uppercase">{title}</h3>
                    <p className="py-4 lg:text-xl" dangerouslySetInnerHTML={{__html:description}}></p>
                </div>
                <div className="lg:p-4 basis-6/12 flex-auto h-[300px] lg:h-[450px]">
                    <Image className="lg:rounded-md h-full w-full object-center" src={cardImage} alt={alt} style={{objectFit: "cover"}}></Image>
                </div>
            </div>
        </section>
    )
}

export default ReverseInfoCard