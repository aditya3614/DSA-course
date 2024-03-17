"use client"

import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

import { useGlobalContext } from "./context/GlobalContext"

export default function IndexPage() {
  const { totalScore, setTotalScore } = useGlobalContext()
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-3xl text-center font-extrabold leading-tight tracking-tighter md:text-4xl">
          Welcome to DSAspire <br className="hidden sm:inline" />
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          A 10-Day Journey into the Basics of Data Structure and Algorithm.
        </p>
      </div>
      <div className="my-2 flex flex-col sm:w-3/4  sm:ml-40  gap-2">
        <h3 className="text-base  leading-tight font-bold tracking-tighter">
          Course Overview
        </h3>
        <p>
          Embark on an exhilarating 10-day journey with Data Structures and
          Algorithms Exploration, tailored for college students eager to delve
          into the dynamic realm of computer science. Our immersive course is
          meticulously curated to offer hands-on learning opportunities,
          accommodating diverse learning styles and skill levels. From grasping
          the foundational concepts of data structures to mastering algorithmic
          techniques, this course will ignite your curiosity and empower you to
          tackle complex computational challenges with confidence. Join us as we
          embark on this exciting adventure to unlock the potential of data
          structures and algorithms, guiding you towards a future filled with
          innovation and technological excellence.
        </p>
        <li>
          <b className="text-base">Comprehensive Introduction</b>: Embark on an
          immersive exploration of the foundational principles of Data
          Structures and Algorithms (DSA), unveiling their profound significance
          in the realm of computer science and problem-solving .
          <br />
        </li>
        <li>
          <b className="text-base">Hands-on Experiments</b>: Dive into
          interactive activities designed to reinforce your understanding of DSA
          concepts. Engage in practical exercises like implementing basic data
          structures in Python and solving algorithmic problems to gain
          invaluable hands-on experience.
        </li>
      </div>

      <div className="flex  items-center  justify-center gap-4">
        <Link href="/course" rel="noreferrer" className={buttonVariants()}>
          Lets Start!
        </Link>
      </div>
    </section>
  )
}
