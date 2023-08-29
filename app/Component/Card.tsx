'use client'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import React from 'react'
import {BiSolidLock} from 'react-icons/bi'

interface cardProp{
    day:number,
    desc:string,
    dayList:string[],
    blur:boolean
}

const Cardd= ({day,desc,dayList,blur}:cardProp) => {
  return (
    <div className="sm:w-full  w-3/4  ">
        
<Card className={`flex ${blur===true ? '' : 'light-blur-container'} flex-col h-[300px] items-center text-center`}>
{blur===false?<BiSolidLock size={70} color="#22312" className="z-10 absolute top-20"/>:<></>}


  <CardHeader >
    <CardTitle>Day {day}</CardTitle>
    <CardDescription className="text-lg font-semibold">{desc}</CardDescription>
  </CardHeader>
  <CardContent className="text-left  overflow-hidden">
    
        {dayList.map((item,index)=>(
            <li className="">{item}</li>
        ))}
    
  </CardContent>
  
</Card>
    </div>
  )
}

export default Cardd;