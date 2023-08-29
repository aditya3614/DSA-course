'use client';
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { useGlobalContext } from "./context/GlobalContext"
export default function IndexPage() {
  const {totalScore,setTotalScore}=useGlobalContext();
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-3xl text-center font-extrabold leading-tight tracking-tighter md:text-4xl">
          Welcome to Rocketry <br className="hidden sm:inline" />
          
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
        A 10-Day Journey into the Basics of Rockets for 12-15 Year Olds
        </p>
       
      </div>
      <div className="my-2 flex flex-col sm:w-3/4  sm:ml-40  gap-2" >
      <h3 className="text-base  leading-tight font-bold tracking-tighter">Course Overview</h3>
      <p>Embark on an exhilarating 10-day adventure with Rocketry Adventures, designed to introduce 12-15 year old students to the captivating world of rockets. Our comprehensive course is crafted to provide a hands-on learning experience, catering to various learning styles and levels. From understanding the fundamental principles of rocketry to building simple prototypes, this course will ignite curiosity and inspire young minds to reach for the stars.</p>
      <li>
        <b className="text-base">Comprehensive Introduction</b>: Explore the captivating history and principles of rockets, unveiling their significance in space exploration.
        </li>
        <li>
        <b className="text-base">Hands-on Experiments</b>: Engage in interactive activities like crafting and launching paper rockets, and assembling basic prototypes for experiential learning.
        </li>
      </div>
      
      <div className="flex  items-center  justify-center gap-4">
      
        <Link
          href="/course"
        
          rel="noreferrer"
          className={buttonVariants()}
        >
          Lets Start!
        </Link>
        
      </div>
    </section>
  )
}
