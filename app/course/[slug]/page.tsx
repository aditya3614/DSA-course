"use client"
import React from 'react'
import { usePathname,useRouter } from 'next/navigation';
import Content from './content';
import { useGlobalContext } from '@/app/context/GlobalContext';
import Link from "next/link"
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

const Page = () => {
  const router = usePathname();
  
  const {totalScore,setTotalScore}=useGlobalContext();
   
  
  return (
    <div className='flex flex-col items-center'>
     <Content/>
      <div className='flex gap-6'>
      <Link
          href={`${router}/test`}
        
          rel="noreferrer"
          className={buttonVariants()}
        >
          give test
        </Link>
        <Link
          href={`${router}/AskAI`}
        
          rel="noreferrer"
          className={buttonVariants()}
        >
          Ask AI
        </Link>
      </div>
      
   
    </div>
  )
}

export default Page