"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";
import { TypeAnimation } from 'react-type-animation';


export default function ImagesSliderDemo() {
  const images = [
    "https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/project-single.jpg",
    "https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/post-2.jpg",
    "https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/service-img-4.jpg",
  ];
  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
        <TypeAnimation

      sequence={[
        // Same substring at the start will only be typed out once, initially
        'We Bulit',
        4000, // wait 1s before replacing "Mice" with "Hamsters"
        'We Innovate',
        4000,
        'We Create',
        4000,
        'We Publish',
        4000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Contact now →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
