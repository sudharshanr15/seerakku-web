import Link from "next/link";

type Button = {
    text: string,
    icon?: JSX.Element,
    href?: string,
    className?: string,
}

function Button({ text, icon=<></>, href = "", className = "" }: Button){
    return (
        <button className={className} >
            <Link href={href} className="flex justify-center items-center gap-md">
                {icon}
                {text}
            </Link>
        </button>
    )
}

export default Button