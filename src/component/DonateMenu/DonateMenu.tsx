'use client';

import Image from "next/image";
import logo from "../../../public/logo/logo.svg";

import { donate_menu_bg } from "@/assets/images";
import { useRef, useState, useEffect, useId } from "react";


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

function DonateMenu({className=""}) {
    const [selectedAmount, setSelectedAmount]: [number, any] = useState(0);
    const [activeAmountItem, setActiveAmountItem] = useState(-1)
    const inputAmount = useRef(null)

    const inputName = useRef(null)
    const inputPhone = useRef(null)
    const inputEmail = useRef(null)

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

    useEffect(() => {
        changeStep()
    }, [activeStep])

    function changeStep(){
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
    }

    function onStepsChange(){
        console.log(inputName.current.value)
        console.log(inputEmail.current.value)
        setActiveStep(prev => (++prev))
    }

    function onEditAmount(){
        setActiveStep(1)
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
            if(input_value == false && activeAmountItem == -1){
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
                setSelectedAmount(amountList[activeAmountItem].value)
            }
            onStepsChange()
            // if(activeAmountItem == -1 && inputAmount.current)
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
            setActiveAmountItem(active_index)

            // setInputAmount(amountList[active_index].value)            
        }


        return (
            <div className={`flex flex-col gap-10 items-center ${activeStep == 1 ? "block" : "hidden"} step-1`}>
                <div className="flex gap-large">
                    {amountList.map((item) => (
                        <ValueButton text={item.value} key={item.id} index={item.id} isActive={activeAmountItem == item.id} click={onPriceClicked} />
                    ))}
                </div>
                <div className="p-md bg-surface-color text-center text-secondary font-body border-secondary border-[1px] rounded-2xl w-full max-w-[27rem]">
                    <input type="text" className="bg-surface-color outline-none w-full text-center" placeholder="Enter the amount" ref={inputAmount} />
                </div>
                <button className="button-primary hover: w-full" onClick={onDonate}>Donate</button>
            </div>
        )
    }

    function Step2(){
        return (
            <div className={`flex flex-col gap-10 items-center ${activeStep == 2 ? "block" : "hidden"} step-2`}>
                <div className="flex flex-col lg:flex-row items-start lg:items-center">
                    <h3 className="text-body-big">you are donating <span className="text-subheading text-secondary">{selectedAmount}</span> for Future</h3>
                    <button className="bg-primary-lite rounded-3xl mt-4 lg:ms-4 text-body-big py-2 px-6 text-secondary" onClick={onEditAmount}>Edit</button>
                </div>
                <div className="p-md bg-surface-color text-center text-secondary font-body border-secondary border-[1px] rounded-2xl w-full max-w-[27rem] input-1">
                    <input type="text" className="bg-surface-color outline-none w-full text-center" placeholder="Enter your name" ref={inputName} />
                </div>
                <div className="p-md bg-surface-color text-center text-secondary font-body border-secondary border-[1px] rounded-2xl w-full max-w-[27rem] input-2">
                    <input type="text" className="bg-surface-color outline-none w-full text-center" placeholder="Enter your phone number" ref={inputPhone} />
                </div>
                <div className="p-md bg-surface-color text-center text-secondary font-body border-secondary border-[1px] rounded-2xl w-full max-w-[27rem] input-3">
                    <input type="text" className="bg-surface-color outline-none w-full text-center" placeholder="Enter Email ID" ref={inputEmail} />
                </div>
                <button className="button-primary hover: w-full" onClick={onStepsChange}>Next</button>
            </div>
        )
    }

    function Step3(){
        return (
            <div className={`flex flex-col gap-10 items-center ${activeStep == 3 ? "block" : "hidden"} step-3`}>
                <div className="flex flex-col lg:flex-row items-start lg:items-center">
                    <h3 className="text-body-big">you are donating <span className="text-subheading text-secondary">{selectedAmount}</span> for Future</h3>
                    <button className="bg-primary-lite rounded-3xl mt-4 lg:ms-4 text-body-big py-2 px-6 text-secondary" onClick={onEditAmount}>Edit</button>
                </div>
                <div className="p-md bg-surface-color text-center text-secondary font-body border-secondary border-[1px] rounded-2xl w-full max-w-[27rem]">
                    <input type="text" className="bg-surface-color outline-none w-full text-center" placeholder="Enter your UPI ID" />
                </div>
                <button className="button-primary hover: w-full" onClick={onSubmit}>Submit</button>
            </div>
        )
    }

    function onSubmit(){
        // const data = {
        //     amount: selectedAmount,
        //     name: inputName.current.value,
        //     email: inputEmail.current.value,
        //     phone: inputPhone.current.value
        // }
        // console.log(inputName.current.value)
    }

    return (
        <section className={`p-0 lg:section-container fixed top-0 bottom-0 left-0 w-full h=full overflow-auto z-[10000] shadow-2xl bg-secondary bg-opacity-50 max-h-screen ${className}`}>
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
                            <Step1 />
                            <Step2 />
                            <Step3 />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DonateMenu;