"use client";
import React from "react";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";

import { data } from "@/data"





function page({ params }: any) {
    return (






        <TracingBeam className="px-6 mt-32">
            <div className="max-w-2xl mx-auto antialiased pt-4 relative">
                {data.map((item, index) => {

                    if (item.name == params.project) {
                        return (
                            <div key={`content-${index}`} className="mb-10">
                                <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                                    {item.name}
                                </h2>



                                <div className="text-sm  prose prose-sm dark:prose-invert">
                                    {item?.img && (
                                        <Image
                                            src={item.img}
                                            alt="blog thumbnail"
                                            height="1000"
                                            width="1000"
                                            className="rounded-lg mb-10 object-cover"
                                        />
                                    )}

                                    <h3 className=" text-black  text-2xl w-fit px-4 py-1 mb-4">
                                        About Project
                                    </h3>
                                    {item.about}
                                    {item?.img2 && (
                                        <Image
                                            src={item.img2}
                                            alt="blog thumbnail"
                                            height="1000"
                                            width="1000"
                                            className="rounded-lg mt-8 mb-10 object-cover"
                                        />
                                    )}
                                    <h3 className=" text-black  mt-4 text-2xl w-fit px-4 py-1 mb-4">
                                        Project Summary
                                    </h3>
                                    {item.summary}
                                </div>
                            </div>
                        )
                    }

                }
                )

                }




            </div>
        </TracingBeam>

    )

}

export default page
