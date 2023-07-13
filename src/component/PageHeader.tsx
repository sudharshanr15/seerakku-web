type PropType = {
    title: string
}

function PageHeader({title}: PropType){
    return (
        <header className="page-header">
            <h1 className="text-big-text font-squada-one text-white break-word text-center p-4 uppercase">{title}</h1>
        </header>
    )
}

export default PageHeader