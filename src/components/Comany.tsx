
"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import React from 'react'
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";


function Comany() {
    const words = `IT Start-Up And Service Studio`
    return (
        <>
            <h1 className="min-[320px]:text-2xl min-[320px]:text-center min-[320px]:my-4    ">
                <TextGenerateEffect words={words} className="text-green-800 " />
            </h1>
            <div 
            className="flex lg:items-center min-[320px]:flex-col min-[320px]:w-3/4 min-[320px]:mx-auto justify-around lg:flex-row">
                <BackgroundGradient className="rounded-[22px]   min-[320px]:w-4/4  dark:bg-zinc-900 m-0">
                    <Image
                        src={`https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/about-us-img.jpg`}
                        alt="jordans"
                        height="800"
                        width="800"
                        className="object-contain m-0"
                    />

                </BackgroundGradient>
                <div className="  mx-4 min-[320px]:w-full">
                    <h1 className="text-center my-4 text-3xl italic">Our <span className="text-green-400">Mission!</span> </h1>
                    <div className="flex justify-around  mt-2">
                        <p className=" m-0 w-3/4">In a world driven by technology, out IT company pioneers innovation for a brighter digital future</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="h-16 relative left-0 italic"><path fill="#63E6BE" d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2c0 0 0 0 0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4c0 0 0 0 0 0c19.8 27.1 39.7 54.4 49.2 86.2l160 0zM192 512c44.2 0 80-35.8 80-80l0-16-160 0 0 16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z" /></svg>

                    </div>
                    <div className="flex justify-around  my-8">
                        <p className=" m-0 w-3/4">Boosting business efficiency and growth through IT innovation is our core mission</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16" viewBox="0 0 512 512"><path fill="#63E6BE" d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/></svg>
                    </div>
                    <div className="flex justify-around  my-8">
                        <p className=" m-0 w-3/4">Crafting compelling narratives and data-driven insights,we turn stratagies into stories that resonate</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16" viewBox="0 0 448 512"><path fill="#63E6BE" d="M160 80c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 352c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-352zM0 272c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 160c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48L0 272zM368 96l32 0c26.5 0 48 21.5 48 48l0 288c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48z"/></svg>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Comany