import { Button } from "@/component"

type InputType = {
    label: string,
    name: string,
    type?: string,
    id?: string
}

function Input({label, type="text", name, id=""}: Input){
    return (
        <div className="p-md text-secondary font-body border-secondary border-[1px] rounded-2xl">
            <label htmlFor={id} className="block opacity-50">{label}</label>
            <input type={type} className="bg-surface-color outline-none w-full" name={name} id={id} />
        </div>
    )
}

function Textarea({label, name, id=""}: InputType){
    return (
        <div className="p-md text-secondary font-body border-secondary border-[1px] rounded-2xl">
            <label htmlFor={id} className="block opacity-50">{label}</label>
            <textarea name={name} id={id} className="bg-surface-color outline-none w-full"></textarea>
        </div>
    )
}

function Form(){
    return (
        <div className="p-md lg:p-xxl">
            <h2 className="text-heading-3 font-squada-one text-center lg:text-start">Interested in our work at Seerakku? For any questions or thoughts, we'd love to hear from you.</h2>
            <form action="">
                <div className="flex flex-col gap-large mt-large">
                    <Input label="Enter your name" name="name" />
                    <Input type="number" label="Enter your number" name="number" />
                    <Input type="email" label="Enter your Email ID" name="email" />
                    <Textarea label="Tell us about your self" name="about_user" />
                    <Textarea label="Let us know your concern" name="concern" />
                    <Button className="button-primary font-squada-one text-subheading-regular text-center" text="Send"></Button>
                </div>
            </form>
        </div>
    )
}

export default Form