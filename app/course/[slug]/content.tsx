"use client"
import React, { useContext } from 'react'
import { useGlobalContext } from '@/app/context/GlobalContext';
import { studyData } from './studyData';



const Content = () => {
  
  const {totalScore,currentDay,setTotalScore}=useGlobalContext();
  const {day1,day2,day3,day4,day5,day6}=studyData;
  const day=currentDay==1?day1:
            currentDay==2?day2:
            currentDay==3?day3:
            currentDay==4?day4:
            currentDay==5?day5:
            currentDay==6?day6:
            day1
 
  const {title,MainTopicHeading,MainTopicSummary,topic1Heading,topic1Summary,topic2Heading,topic2Summary,topic3Heading,topic3Summary}=day;

  
  return (
    <div>
      <div>
      
        <h1 className="text-3xl mt-2 text-center font-extrabold leading-tight tracking-tighter md:text-4xl">{title}</h1>
        <div className="border-t border-2 border-red-900 mt-2 w-full"></div>
        <h3 className='text-xl font-semibold sm:ml-18 ml-12 mt-8'>{MainTopicHeading}:</h3>
        <p className='text-base sm:ml-18 ml-12 pr-4'>{MainTopicSummary}</p>
        <h4 className='text-base font-semibold sm:ml-18 ml-12 mt-8'>Topic to cover today</h4>
        <h3 className='text-xl font-semibold sm:ml-18 ml-12 mt-2'>1. {topic1Heading}</h3>
        {topic1Summary.map((data,idx)=>(
          <li className='sm:ml-18 ml-12 mt-2 pr-5'>{data}</li>
        ))}
         
        <h3 className='text-xl font-semibold sm:ml-18 ml-12 mt-10'>2. {topic2Heading}</h3>
        {topic2Summary.map((data,idx)=>(
          <li className='sm:ml-18 ml-12 mt-2 pr-5'>{data}</li>
        ))}
          
        <h3 className='text-xl font-semibold sm:ml-18 ml-12 mt-10'>3. {topic3Heading}</h3>
        {topic3Summary.map((data,idx)=>(
          <li className='sm:ml-18 ml-12 mt-2 pr-5'>{data}</li>
        ))}
      </div>
     
    </div>

  )
}

export default Content;