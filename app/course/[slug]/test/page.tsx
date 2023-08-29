'use client';
import { useState } from 'react';
import { quiz } from '@/app/quizData';
import Link from 'next/link';
import { useGlobalContext } from '@/app/context/GlobalContext';
import { buttonVariants } from '@/components/ui/button';
import Confetti from 'react-confetti'
const Page=()=>{

    const [activeQuestion,setActiveQuestion]=useState(0);
    const [selectedAnswer,setSelectedAnswer]=useState(false);
    const [checked,setChecked]=useState(false);
    const [selectedAnswerIndex,setSelectedAnswerIndex]=useState(-1)
    const [showResult,setShowResult]=useState(false);
    const [result,setResult]=useState({
        score:0,
        correctAnswers:0,
        wrongAnswers:0,
    })

    const {currentDay,setCurrentDay,setTotalScore,day2Access,day3Access,day4Access,day5Access,day6Access,day7Access,day8Access,day9Access,day10Access,setDay2Access,setDay3Access,setDay4Access,setDay5Access,setDay6Access,setDay7Access,setDay8Access,setDay9Access,setDay10Access}=useGlobalContext();
    const {Questions1,Question2,Question3,Question4,Question5,Question6}=quiz;
    const Questions=currentDay==1?Questions1:currentDay==2?Question2:currentDay==3?Question3:currentDay==4?Question4:currentDay==5?Question5:currentDay==6?Question6:currentDay==7?Questions1:currentDay==8?Questions1:currentDay==9?Questions1:currentDay==10?Questions1:Questions1;
    const {Question,answer,correctAnswer}=Questions[activeQuestion];
   
   

    const onAnswerSelected=(Answer:string,SelectedQuestion:string,idx:number)=>{
        setChecked(true);
        setSelectedAnswerIndex(idx);
        if(Answer===correctAnswer){
            setSelectedAnswer(true);
        }else{
          console.log(SelectedQuestion);
           
            setSelectedAnswer(false);
        }
    }

    const nextQuestion = () => {
        setSelectedAnswerIndex(-1);
        setResult((prev) =>
          selectedAnswer
            ? {
                ...prev,
                score: prev.score +5,
                correctAnswers: prev.correctAnswers + 1,
              }
            : {
              
                ...prev,
                wrongAnswers: prev.wrongAnswers + 1,
                
              }
        );
        if (activeQuestion !== Questions.length - 1) {
          setActiveQuestion((prev) => prev + 1);
        } else {
          setActiveQuestion(0);
          setShowResult(true);
        }
        setChecked(false);
      };
      if(showResult==true){
        setTotalScore(result.correctAnswers);
        {currentDay==1?setDay2Access(true):
          currentDay==2?setDay3Access(true):
          currentDay==3?setDay4Access(true):
          currentDay==4?setDay5Access(true):
          currentDay==5?setDay6Access(true):
          currentDay==6?setDay7Access(true):
          currentDay==7?setDay8Access(true):
          currentDay==8?setDay9Access(true):
          currentDay==9?setDay10Access(true):
          setDay10Access(true);
          }
          
      }


    return(
    <div>
          <div className='flex flex-col items-center'>
                <h1 className="text-2xl font-semibold">Day-{currentDay} Test</h1>
                {showResult?<></>:<h3>Question: {activeQuestion+1}/{Questions.length}</h3>}
            </div>
        <div className='flex flex-col items-center mt-16 px-7 '>
            <div className=' bg-indigo-500 text-white rounded-md px-5 py-8'> 
                {!showResult?(<div>
                    <h3 className='text-xl font-bold mb-8'>{Questions[activeQuestion].Question}</h3>
                  <ul>
                    <div className='grid sm:grid-cols-2 grid-cols-1 gap-4'>
                    {Questions[activeQuestion].answer.map((data,idx)=>(
                       <li key={idx} className={`${selectedAnswerIndex===idx?'bg-indigo-900':'hover:bg-yellow-500'} p-5 rounded-md bg-indigo-400`} onClick={()=>{onAnswerSelected(data,Questions[activeQuestion].Question,idx)}} > {data}</li>
                    ))}                  
                    </div>
                    </ul>
                    <div className="text-black w-full mt-8 flex items-center justify-center">
                    {
                            checked?<button className='hover:bg-green-300 w-1/4 rounded bg-green-200' onClick={nextQuestion}>
                                {activeQuestion==Questions.length-1?'Finish':'Next'}
                            </button>:<button className="bg-white rounded w-1/4" disabled>
                            {activeQuestion==Questions.length-1?'Finish':'Next'}
                            </button>
                    }
                    </div>
                    
                </div>):(<div className='flex flex-col items-center gap-4'>
                    <h1 className='text-2xl font-extrabold' >Result</h1>
            <h3 className="font-semibold">Overall {(result.score / 25) * 100}%</h3>
            <p className='font-semibold'>
              Total Questions: <span>{Questions.length}</span>
            </p>
            
            <p className='font-semibold'>
              Correct Answers: <span>{result.correctAnswers}</span>
            </p>
            <p className='font-semibold'>
              Wrong Answers: <span>{result.wrongAnswers}</span>
            </p>

            {(result.score/25)*100<50?<div className='flex flex-col items-center'>
                <p>Your score is below 50% so you can not move forward you have to relearn Day {currentDay} topics and you can also take help from our AI chatbot in understanding efficiently</p>
            <Link href={`/course/day-${currentDay}`}><button  className={buttonVariants()}>Go back to day{currentDay} Learning</button></Link>
            </div>:<div className='flex flex-col gap-4 items-center'>
            <Confetti
      width={1000}
      height={600}
    /><></>
    <h2 className='font-semibold'>Congrats you have scored more than 50% in your hence you are eligible to move forward, you day {currentDay+1} Course is unlocked now!!</h2>
   
    <Link href='/course' className={buttonVariants()}>Unlock new course</Link>
         
              </div>}


                </div>)}
            </div>
        </div>
    </div>
    );
};
export default Page;