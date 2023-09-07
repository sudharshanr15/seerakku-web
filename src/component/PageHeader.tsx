import { DonateButton } from "./button";

type PropType = {
    title: string
    description?: string
    backgroundimage?: string
}

function PageHeader({title, description, backgroundimage=''}: PropType){
    return (
        <header style={backgroundimage ? { background: `url(${backgroundimage})`, backgroundPosition: 'top', backgroundSize:'cover', backgroundRepeat:'no-repeat' } : { top: 0 }} className="page-header lg:p-20">
            <h1 className="text-5xl lg:text-big-text font-squada-one text-white break-word px-4 uppercase">{title}</h1>
            <p className="px-5 py-3 text-xl text-white lg:w-7/12 w-10/12">{description}</p>
            <div className="p-5">
                <DonateButton></DonateButton>
            </div>
        </header>
    )
}

export default PageHeader