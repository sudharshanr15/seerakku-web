'use client';

import Image from "next/image";
import { donate_menu_bg } from "@/assets/images";
import logo from "../../../public/logo/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect } from "react";
import { OverlayDispatchContext } from "@/context/OverlayProvider";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export async function create_payment_request(body: any){
    var headers = new Headers();
    headers.append("Content-Type", "application/json");

    let data = {
        "buyer_name": body.name,
        "email": body.email,
        "phone": body.phone,
        "amount": body.amount
    }

    const res = await fetch("/api/create_payment", {
        method: "POST",
        body: JSON.stringify(data),
        headers: headers
    })

    return await res
}

function ValueButton({ text, click, index, isActive = false }: {
    text: number,
    index: number,
    click?: (e: any) => void,
    isActive?: boolean
}) {
    return (
        <button className={`data-[status=active]:bg-primary bg-surface-color p-md lg:p-large rounded-2xl text-body-big`} data-key={index} data-status={isActive ? "active" : "inactive"} onClick={click}>
            {text}
        </button>
    )
}

enum StepsStatus {
    Inactive = "inactive",
    Active = "active",
    Completed = "completed"
}

function DonateMenu2(){
    const overlayDispatch = useContext(OverlayDispatchContext)
    const [inputValues, setInputValues]: [{
        amount: string | number,
        name: string,
        email: string,
        phone: string,
        upi: string
    }, any] = useState({
        amount: "",
        name: "",
        email: "",
        phone: "",
        upi: ""
    })

    const [stepsList, setStepsList] = useState([
        {
            id: 1,
            name: "Select the amount",
            status: StepsStatus.Inactive
        },
        {
            id: 2,
            name: "Enter the Details",
            status: StepsStatus.Inactive
        },
        {
            id: 3,
            name: "Payment",
            status: StepsStatus.Inactive
        }
    ])

    const [activeStep, setActiveStep] = useState(1)

    const amountList = [
        {
            id: 0,
            value: 50
        },
        {
            id: 1,
            value: 100
        },
        {
            id: 2,
            value: 200
        },
        {
            id: 3,
            value: 500
        }
    ]
    const [selectedAmount, setSelectedAmount] = useState(-1)

    useEffect(() => {
        let new_list = null;

        let active_step = activeStep;

        new_list = stepsList.map((item, index) => {
            let status = null;
            
            if(index+1 == active_step){
                status = StepsStatus.Active
            }else if(index+1 < active_step){
                status = StepsStatus.Completed
            }else{
                status = StepsStatus.Inactive
            }

            return {
                ...item,
                status: status
            }
        })
        setStepsList(new_list)
    }, [activeStep])

    function handleStepChange(to: number = 0){
        if(to > 0){
            setActiveStep(to)
            return
        }
        setActiveStep(prev => (
            ++prev
        ))
    }

    useEffect(() => {
        let amount = amountList[selectedAmount]?.value
        if(amount !== undefined)
            setInputValues((prev: any) => ({
                ...prev,
                amount: String(amount)
            }))

    }, [selectedAmount])

    function handleInputChange(e: any){
        const {name, value} = e.target;
        setInputValues((prev: any) => ({
            ...prev,
            [name]: value
        }))
    }

    function onDonate(){
        let amount: string | number = inputValues.amount
        amount = String(amount)
        if(amount.length == 0){
            toast.error("Amount should not be empty", {
                position: 'top-right',
                autoClose: 5000,
                closeOnClick: true,
                pauseOnHover: true,
                theme: "dark"
            })
            return
        }

        amount = Number(amount)
        if(Number.isNaN(amount)){
            toast.error("Amount should contain only numbers", {
                position: 'top-right',
                autoClose: 5000,
                closeOnClick: true,
                pauseOnHover: true,
                theme: "dark"
            })
            return
        }
        inputValues.amount = amount
        handleStepChange()
    }

    async function handleSubmit(){
        let res = await create_payment_request(inputValues)
        const data = await res.json()
        if(!res.ok){
            Object.values(data['data']).forEach((item: any) => {
                let value: any = Object.values(item)[0]
                toast.error(value, {
                    position: 'top-right',
                    autoClose: 5000,
                    closeOnClick: true,
                    pauseOnHover: true,
                    theme: "dark"
                })
            })

            return
        }

        localStorage.setItem("payment_res", JSON.stringify(data.data))
        window.location.href = data.data.longurl
    }

    return (
        <section className="p-0 lg:section-container fixed top-0 bottom-0 left-0 w-full h-full overflow-auto z-50 max-h-screen bg-secondary bg-opacity-50">
            <div className="flex flex-col lg:flex-row justify-center mx-auto max-w-[79.75rem] transition-all duration-500">
                <div className="w-full lg:w-1/2 max-w-[38.68rem] relative">
                    <Image src={donate_menu_bg} alt="Donate Image" className="w-full h-auto" unoptimized />
                    <div className="p-xl text-white absolute bottom-0 lg:bottom-[10%] left-0 text-center">
                        <h2 className="font-squada-one text-heading-3 mb-6">For the sustainable future</h2>
                        <p className="text-subheading-regular">Together, let's take action and create a sustainable future for all.</p>
                        <p className="text-subheading-regular mb-8 hidden lg:block">your donations tax deductable <br/>ess than 2% goes to<br/>Administration</p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 bg-white">
                    <div className="bg-surface-color">
                        <div className="p-large">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-md">
                                    <Image src={logo} alt="Brand Logo" className="w-[3.2rem] h-auto" />
                                    <span className="font-squada-one text-heading-4">SEERAKKU</span>
                                </div>
                                <button className="h-[2.5rem]" onClick={() => {overlayDispatch({type: 'close'})}}>
                                    <FontAwesomeIcon icon={faXmark} className="h-full w-auto" />
                                </button>
                            </div>
                            <div className="flex flex-col lg:flex-row gap-md mt-12">
                                {stepsList.map((item, index) => (
                                    <div className="group flex gap-md text-body-big items-center data-[status=inactive]:opacity-50 transition-all duration-300" key={index} data-status={item.status}>
                                        <span className="bg-primary group-data-[status=completed]:bg-primary-lite group-data-[status=active]:text-white group-data-[status=active]:bg-secondary aspect-square w-9 inline-flex items-center justify-center">{item.id}</span>
                                        <span className="">{item.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="bg-white flex justify-center">
                        <div className="p-md">
                            <div className={`${activeStep == 1 ? 'flex' : 'hidden'} flex-col gap-10 items-center step-1`}>
                                <div className="flex gap-large">
                                    {amountList.map((item, index) => (
                                        <ValueButton text={item.value} key={index} index={item.id} isActive={selectedAmount == item.id} click={() => {setSelectedAmount(item.id)}} />
                                    ))}
                                </div>
                                <div className="p-md bg-surface-color text-center text-secondary font-body border-secondary border-[1px] rounded-2xl w-full max-w-[27rem]">
                                    <input type="text" className="bg-surface-color outline-none w-full text-center" name="amount" placeholder="Enter the amount" value={inputValues.amount} onChange={handleInputChange} />
                                </div>
                                <button className="button-primary hover: w-full" onClick={onDonate}>Donate</button>
                            </div>

                            <div className={`${activeStep == 2 ? 'flex' : 'hidden'} flex-col gap-10 items-center step-2`} key={"activeStep"}>
                                <div className="flex flex-col lg:flex-row items-start lg:items-center">
                                    <h3 className="text-body-big">you are donating <span className="text-subheading text-secondary">{inputValues.amount}</span> for Future</h3>
                                    <button className="bg-primary-lite rounded-3xl mt-4 lg:ms-4 text-body-big py-2 px-6 text-secondary" onClick={() => {handleStepChange(1)}}>Edit</button>
                                </div>
                                <div className="p-md bg-surface-color text-center text-secondary font-body border-secondary border-[1px] rounded-2xl w-full max-w-[27rem] input-1">
                                    <input type="text" className="bg-surface-color outline-none w-full text-center" name="name" placeholder="Enter your name" value={inputValues.name} onChange={handleInputChange} />
                                </div>
                                <div className="p-md bg-surface-color text-center text-secondary font-body border-secondary border-[1px] rounded-2xl w-full max-w-[27rem] input-2">
                                    <input type="text" className="bg-surface-color outline-none w-full text-center" name="phone" placeholder="Enter your phone number" value={inputValues.phone} onChange={handleInputChange} />
                                </div>
                                <div className="p-md bg-surface-color text-center text-secondary font-body border-secondary border-[1px] rounded-2xl w-full max-w-[27rem] input-3">
                                    <input type="text" className="bg-surface-color outline-none w-full text-center" name="email" placeholder="Enter Email ID" value={inputValues.email} onChange={handleInputChange} />
                                </div>
                                <button className="button-primary hover: w-full" onClick={handleStepChange}>Next</button>
                            </div>

                            <div className={`${activeStep == 3 ? 'flex' : 'hidden'} flex-col gap-10 items-center step-3`}>
                                <div className="flex flex-col lg:flex-row items-start lg:items-center">
                                    <h3 className="text-body-big">you are donating <span className="text-subheading text-secondary">{inputValues.amount}</span> for Future</h3>
                                    <button className="bg-primary-lite rounded-3xl mt-4 lg:ms-4 text-body-big py-2 px-6 text-secondary" onClick={() => {handleStepChange(1)}}>Edit</button>
                                </div>
                                <div className="p-md bg-surface-color text-center text-secondary font-body border-secondary border-[1px] rounded-2xl w-full max-w-[27rem]">
                                    <input type="text" className="bg-surface-color outline-none w-full text-center" name="upi" placeholder="Enter your UPI ID" value={inputValues.upi} onChange={handleInputChange} />
                                </div>
                                <button className="button-primary hover: w-full" onClick={handleSubmit}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DonateMenu2;