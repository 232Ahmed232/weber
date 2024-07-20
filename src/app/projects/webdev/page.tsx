"use client"
import React from 'react'
import   BackgroundBoxesDemo from '@/components/boxes'
import Card from '@/components/Cards'
import {data} from "@/data"

function page() {
  return (
    <div>

        <BackgroundBoxesDemo/>
        <div className="flex justify-around lg:flex-row min-[320px]:flex-col">
        {data.map(ele => <Card name={ele.name} key={ele.name} about={ele.about} img={ele.img} />)}
        </div>
    </div>
  )
}

export default page
