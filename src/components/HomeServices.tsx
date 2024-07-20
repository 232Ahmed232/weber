
"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Tabs } from "@/components/ui/tabs";
import Image from "next/image";

import React from 'react'


const DummyContent = (props:any) => {

    const includedFeatures = [
        'User Friendly',
        'Scaleable',
        'Clean Code',
        'Mondern Design',
    ]
    return (
        <div className="bg-slate-200 py-2 sm:py-3">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                
                <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                    <h3 className="text-2xl font-bold tracking-tight text-gray-900">About</h3>

                        <p className="mt-6 text-base leading-7 text-gray-600">
                            {props.para}
                        </p>
                        <div className="mt-10 flex items-center gap-x-4">
                            <h4 className="flex-none text-sm font-semibold leading-6 text-green-600">What’s included</h4>
                            <div className="h-px flex-auto bg-gray-100" />
                        </div>
                        <ul
                            role="list"
                            className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                        >
                            {includedFeatures.map((feature) => (
                                <li key={feature} className="flex gap-x-3">
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                        <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                            <div className="mx-auto max-w-xs px-8">
                                <p className="text-base font-semibold text-gray-600">Pay once, own it forever</p>
                                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                    <span className="text-3xl font-bold tracking-tight text-gray-900">{props.price}</span>
                                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD</span>
                                </p>
                                <a
                                    href="#"
                                    className="mt-10 block w-full rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    {props.ph}
                                </a>
                                <p className="mt-6 text-xs leading-5 text-gray-600">
                                    Invoices and receipts available for easy company reimbursement
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



function HomeServices() {
    const words = `Services With Best Offers`
    const tabs = [
        {
            title: "Web Development",
            value: "product",
            content: (
                <div className="w-full  relative  rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-green-700 to-green-100">
                    {/* <p>Product Tab</p> */}
                    <DummyContent para={`Experienced web developer with expertise in HTML, CSS, JavaScript, and modern frameworks like React and Angular. Skilled in backend technologies such as Node.js and databases like MongoDB. Passionate about creating dynamic, user-friendly web applications. Committed to staying updated with industry trends. Let's connect to collaborate on innovative projects!`}  price={"$50-$100"} ph={"0319-8323781"}/>
                </div>
            ),
        },
        {
            title: "App Development",
            value: "services",
            content: (
                <div className="w-full  relative  rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-green-700 to-green-100">
                    <DummyContent  para={"Experienced app developer specializing in iOS and Android platforms. Proficient in Swift, Kotlin, and cross-platform frameworks like Flutter and React Native. Passionate about creating intuitive, high-performance mobile applications. Committed to continuous learning and innovation. Let's connect to bring your app ideas to life and build amazing user experiences!"} price={"80$-120$"} ph={"+92 336 9322330"}/>
                </div>
            ),
        },
        {
            title: "Graphic Design",
            value: "playground",
            content: (
                <div className="w-full  relative  rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-green-700 to-green-100">
                    <DummyContent  para={"Creative graphic designer with expertise in Adobe Creative Suite, including Photoshop, Illustrator, and InDesign. Skilled in branding, print design, and digital graphics. Passionate about delivering visually compelling designs that communicate effectively. Committed to staying current with design trends. Let's connect to bring your vision to life through stunning visuals!"} price={"$50-$100"} ph={"+92 334 8980951"}/>
                </div>
            ),
        },
       
       
    ];

    return (
        <div className="max-h-2xl ">
            <h1 className="min-[320px]:text-2xl min-[320px]:text-center min-[320px]:mt-16    ">
                <TextGenerateEffect words={words} className="text-green-800 " />
            </h1>
            <div className="min-[320px]:h-[90rem] md:h-[55rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-20">
                <Tabs tabs={tabs} />
            </div>
        </div>
    )
}



export default HomeServices