"use client";
import React from "react";
import { WavyBackground } from "@/components/ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const instructors = [
    {
      id: 1,
      name: 'Mussub Khan',
      designation: 'App developer',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 2,
      name: 'Ahmed Ali',
      designation: 'Web Developer',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
    },
   
    {
      id: 4,
      name: 'Yahya khan',
      designation: 'Designing Expert',
      image:
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
  ];


function Footer() {
    return (
        <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
        <WavyBackground backgroundFill={"#e7f5e4"} className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl md:text-4xl lg:text-7xl text-black font-bold text-center mb-8">Meet Our Developers</h2>
            <p className="text-base md:text-lg text-black text-center mb-4">Discover the talented professionals who will translate your imagination into reality</p>
            <div className="flex flex-row items-center justify-center mb-10 w-full">
            <AnimatedTooltip items={instructors} />

            </div>
        </WavyBackground>
    </div>
    )
}

export default Footer