"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"

function Testimonials() {
    const words = `Testimonial`
    const testimonials = [
        {
            quote:
                "They took our vision and turned it into a reality, creating a sleek and responsive website that exceeded our expectations. Their attention to detail was remarkable, ensuring every feature and functionality worked seamlessly across all devices.",
            name: "Charles Dickens",
            title: "Web Development",
        },
        {
            quote:
                "I had the privilege of collaborating with Mussub on an app development project, and I am thoroughly impressed by their exceptional skills and dedication. Mussub possesses a deep understanding of mobile technologies and user-centric design principles, which was evident in every aspect of the app they developed.",
            name: "William Ruffalo",
            title: "App  Development",
        },

        
        {
            quote:
                "They have a keen eye for detail and a deep understanding of design principles, which was evident in every concept they presented. From logos to marketing materials, Yahya consistently delivered designs that exceeded our expectations.",
            name: "Herman ",
            title: "Design",
        },
    ];
    return (
        <div className="h-[50rem] ">

            <div className="h-[40rem] bg-grey-600 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
                <h1 className="min-[320px]:text-2xl min-[320px]:text-center min-[320px]:m-auto  ">
                    <TextGenerateEffect words={words} className="text-green-800   " />
                </h1>
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
            </div>
        </div>
    )
}

export default Testimonials