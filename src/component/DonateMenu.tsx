'use client';

import Image from "next/image";
import logo from "../../public/logo/logo.svg";

import { donate_menu_bg } from "@/assets/images";
import { DonateButton } from "./button";
import { useRef, useState, useEffect } from "react";
import Button from "./Button";


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

function Input({ placeholder = "", ref_d, value, onChange }: {
    placeholder: string,
    ref_d?: any,
    value?: string | number,
    onChange?: () => void
}) {
    return (
        <div className="p-md bg-surface-color text-center text-secondary font-body border-secondary border-[1px] rounded-2xl w-full max-w-[27rem]">
            <input type="text" className="bg-surface-color outline-none w-full text-center" placeholder={placeholder} value={value} ref={ref_d} />
        </div>
    )
}


function DonateMenu() {
    const [selectedAmount, setSelectedAmount]: [number, any] = useState(0);
    const [activeAmount, setActiveAmount] = useState(-1)
    const inputAmount = useRef(null)

    enum StepsStatus {
        Inactive = "inactive",
        Active = "active",
        Completed = "completed"
    }
    
    const [stepsList, setStepsList] = useState([
        {
            id: 1,
            name: "Select the amount",
            status: StepsStatus.Active
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

    function onStepsChange(){
        setStepsList(prev => {
            let new_list = prev

            new_list = new_list.map((item, index) => {
                let status = null;

                if((index+1) <= activeStep ){
                    status = StepsStatus.Completed
                }else{
                    status = StepsStatus.Inactive
                }

                return {
                    ...item,
                    status: status
                }
            })


            new_list[activeStep].status = StepsStatus.Active

            return new_list
        })

        setActiveStep(prev => (++prev))

    }

    function onEditAmount(){
        setActiveStep(0)
        onStepsChange()
    }

    function Step1(){
        const [amountList, setAmountList] = useState([
            {
                id: 0,
                value: 50,
                isActive: false
            },
            {
                id: 1,
                value: 100,
                isActive: false
            },
            {
                id: 2,
                value: 200,
                isActive: false
            },
            {
                id: 3,
                value: 500,
                isActive: false
            }
        ])

        function onDonate(){
            let input_value = inputAmount.current?.value
            if(input_value == false && activeAmount == -1){
                console.log("TODO: Throw error")
                return
            }else if(input_value != false){
                input_value = Number(input_value)
                if(Number.isNaN(input_value)){
                    console.log("TODO: Throw error")
                    return   
                }
                setSelectedAmount(input_value)
            }else{
                setSelectedAmount(amountList[activeAmount].value)
            }
            onStepsChange()
            // if(activeAmount == -1 && inputAmount.current)
        }


        function onPriceClicked(e: any) {
            let active_index = e.target.dataset.key

            setAmountList((prev) => {

                let new_list = amountList.map(item => (
                    {
                        ...item,
                        isActive: (item.id == active_index ? true : false)
                    }
                ))

                return new_list
            })
            e.target.dataset.status = "active"
            setActiveAmount(active_index)

            // setInputAmount(amountList[active_index].value)            
        }


        return (
            <div className="flex flex-col gap-10 items-center">
                <div className="flex gap-large">
                    {amountList.map((item) => (
                        <ValueButton text={item.value} key={item.id} index={item.id} isActive={activeAmount == item.id} click={onPriceClicked} />
                    ))}
                </div>
                <Input placeholder="Enter the amount" ref_d={inputAmount}  />
                <button className="button-primary hover: w-full" onClick={onDonate}>Donate</button>
            </div>
        )
    }

    function Step2(){
        return (
            <div className="flex flex-col gap-10 items-center">
                <div className="flex flex-col lg:flex-row items-start lg:items-center">
                    <h3 className="text-body-big">you are donating <span className="text-subheading text-secondary">{selectedAmount}</span> for Future</h3>
                    <button className="bg-primary-lite rounded-3xl mt-4 lg:ms-4 text-body-big py-2 px-6 text-secondary" onClick={onEditAmount}>Edit</button>
                </div>
                <Input placeholder="Enter your name" />
                <Input placeholder="Enter your phone number" />
                <Input placeholder="Enter Email ID" />
                <button className="button-primary hover: w-full" onClick={onStepsChange}>Next</button>
            </div>
        )
    }

    function Step3(){
        return (
            <div className="flex flex-col gap-10 items-center">
                <div className="flex flex-col lg:flex-row items-start lg:items-center">
                    <h3 className="text-body-big">you are donating <span className="text-subheading text-secondary">{selectedAmount}</span> for Future</h3>
                    <button className="bg-primary-lite rounded-3xl mt-4 lg:ms-4 text-body-big py-2 px-6 text-secondary" onClick={onEditAmount}>Edit</button>
                </div>
                <Input placeholder="Enter your UPI ID" />
                <button className="button-primary hover: w-full" onClick={onStepsChange}>Submit</button>
            </div>
        )
    }

    return (
        <section className="p-0 lg:section-container fixed top-0 bottom-0 left-0 w-full h=full overflow-auto z-[10000] shadow-2xl bg-secondary bg-opacity-50 max-h-screen">
            <div className="flex flex-col lg:flex-row justify-center mx-auto max-w-[79.75rem]">
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
                            <div className="flex gap-md">
                                <Image src={logo} alt="Brand Logo" className="w-[3.2rem] h-auto" />
                                <span className="font-squada-one text-heading-4">SEERAKKU</span>
                            </div>
                            <div className="flex flex-col lg:flex-row gap-md mt-12">
                                {stepsList.map((item, index) => (
                                    <div className="group flex gap-md text-body-big items-center data-[status=inactive]:opacity-50" key={index} data-status={item.status}>
                                        <span className="bg-primary group-data-[status=completed]:bg-primary-lite group-data-[status=active]:text-white group-data-[status=active]:bg-secondary aspect-square w-9 inline-flex items-center justify-center">{item.id}</span>
                                        <span className="">{item.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="bg-white flex justify-center">
                        <div className="p-md">
                            {
                                activeStep == 3 ? <Step3 /> : ( activeStep == 2 ? <Step2 /> : <Step1 />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DonateMenu;