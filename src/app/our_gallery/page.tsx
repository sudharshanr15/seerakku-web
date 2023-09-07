import { PageHeader } from "@/component";
import Gallery from "@/component/Gallery";

function OurGallery(){
    return(
        <>
            <PageHeader 
                title="OUR GALLERY"  
                description='Through our efforts, we strive to create a sustainable future for all and mitigate the effects of climate change.' 
                backgroundimage = '/images/what_we_do.png'
            />
            <Gallery></Gallery>
        </>
    )
}

export default OurGallery