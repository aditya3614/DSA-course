"use client"
import React from 'react'
import Cardd from '../Component/Card'
import Link from 'next/link';

import {useState,useContext} from 'react';

import { useGlobalContext } from '../context/GlobalContext';

 

const Page = () => {
  
  const {currentDay,setCurrentDay,day2Access,day3Access,day4Access,day5Access,day6Access,day7Access,day8Access,day9Access,day10Access,setDay2Access,setDay3Access,setDay4Access,setDay5Access,setDay6Access,setDay7Access,setDay8Access,setDay9Access,setDay10Access}=useGlobalContext();
  

  const day1points = ["Brief history of rockets.", "Components: Payload, Propulsion, Guidance.", "Importance of rockets in space exploration.","tdtyedydyd"];
  return (
  
    <div className=''>
      <div className='sm:p-7 sm:ml-0 ml-20 pt-2  grid sm:grid-cols-4 grid-col-1 gap-4'>

      <div onClick={()=>{setCurrentDay(1)}}>
       <Link key="day-1" href={`/course/day-1`} >
        <div className=''>
          <Cardd  day={1} blur={true} desc=" Introduction to Rockets"  dayList={day1points} ></Cardd>
        </div>
        </Link>
       </div> 

        <div onClick={()=>{setCurrentDay(2)}} >
        <Link key="day-2" href={day2Access?`/course/day-2`:''}  >
        <div>
          {
            day2Access?<Cardd day={2} blur={true} desc="Newton's Laws and Rocket Propulsion" dayList={day1points} ></Cardd> :
            <Cardd day={2} blur={false} desc="Newton's Laws and Rocket Propulsion" dayList={day1points} ></Cardd>  
          }
        </div>
        </Link>
        </div>



        <div onClick={()=>{setCurrentDay(3)}}>
        <Link key="day-1" href={day3Access?`/course/day-3`:''} >
        <div>
          {
            day3Access?<Cardd day={3} blur={true} desc="Rocket Design and Aerodynamics" dayList={day1points}></Cardd>      :
            <Cardd day={3} blur={false} desc="Rocket Design and Aerodynamics" dayList={day1points}></Cardd>      
          }
        </div>
        </Link>
        </div>



        <div onClick={()=>{setCurrentDay(4)}}>
        <Link key="day-1" href={day4Access?`/course/day-4`:''} >
        <div>
        {
            day4Access?<Cardd day={4} blur={true} desc="Rocket Propellants" dayList={day1points}></Cardd>          :
            <Cardd day={4} blur={false} desc="Rocket Propellants" dayList={day1points}></Cardd>          
        }
        </div>
        </Link>
        </div>


        <div onClick={()=>{setCurrentDay(5)}}>
        <Link key="day-1" href={day5Access?`/course/day-5`:''} >
        <div>
        {
            day5Access? <Cardd day={5} blur={true} desc="Payload and Instruments" dayList={day1points}></Cardd>:
            <Cardd day={5} blur={false} desc="Payload and Instruments" dayList={day1points}></Cardd>                    
         }
        </div>
        </Link>
        </div>



        <div onClick={()=>{setCurrentDay(6)}}>
        <Link key="day-1" href={day6Access?`/course/day-6`:''}>
        <div>
        {
            day6Access?<Cardd day={6} blur={true} desc="Space Exploration" dayList={day1points}></Cardd>:
            <Cardd day={6} blur={false} desc="Space Exploration" dayList={day1points}></Cardd>                    
        }
        </div>
        </Link>
        </div>

        
        <div onClick={()=>{setCurrentDay(7)}}>
        <Link key="day-1" href={day7Access?`/course/day-7`:''} >
        <div>
        {
            day7Access?<Cardd day={7} blur={true} desc="Rocket Launch and Trajectory" dayList={day1points}></Cardd>:
            <Cardd day={7} blur={false} desc="Rocket Launch and Trajectory" dayList={day1points}></Cardd>                    
        }
        </div>
        </Link>
        </div>


        <div onClick={()=>{setCurrentDay(8)}}>
        <Link key="day-1" href={day8Access?`/course/day-8`:''} >
        <div>
        {
            day8Access?<Cardd day={8} blur={false} desc="Orbital Mechanics" dayList={day1points}></Cardd> :
            <Cardd day={8} blur={false} desc="Orbital Mechanics" dayList={day1points}></Cardd>                   
        }
        </div>
        </Link>
        </div>

        <div onClick={()=>{setCurrentDay(9)}}>
        <Link key="day-1" href={day9Access?`/course/day-9`:''} >
        <div>
        {
            day9Access?<Cardd day={9} blur={true} desc="Re-entry and Landing" dayList={day1points}></Cardd>:
            <Cardd day={9} blur={false} desc="Re-entry and Landing" dayList={day1points}></Cardd>                    
         }
        </div>
        </Link>
        </div>



        <div onClick={()=>{setCurrentDay(10)}}>
        <Link key="day-1" href={day10Access?`/course/day-10`:''} >
        <div>
        {
            day10Access?<Cardd day={10} blur={true}  desc="Future of Rocket" dayList={day1points}></Cardd>:
            <Cardd day={10} blur={false}  desc="Future of Rocket" dayList={day1points}></Cardd>                    
        }
        </div>
        </Link>
        </div>

      </div>

    </div>
    
  )
}

export default Page