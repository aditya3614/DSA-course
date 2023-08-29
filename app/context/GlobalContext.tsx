"use client"
import React, { createContext, useContext, Dispatch, SetStateAction, useState, ReactNode } from 'react';

interface ContextProps {
  totalScore: number;
  setTotalScore: Dispatch<SetStateAction<number>>;
  currentDay: number;
  setCurrentDay: Dispatch<SetStateAction<number>>;
  day2Access: boolean;
  setDay2Access: Dispatch<SetStateAction<boolean>>;
  day3Access: boolean;
  setDay3Access: Dispatch<SetStateAction<boolean>>;
  day4Access:boolean,
  setDay4Access:Dispatch<SetStateAction<boolean>>
  day5Access:boolean,
  setDay5Access:Dispatch<SetStateAction<boolean>>
  day6Access:boolean,
  setDay6Access:Dispatch<SetStateAction<boolean>>
  day7Access:boolean,
  setDay7Access:Dispatch<SetStateAction<boolean>>
  day8Access:boolean,
  setDay8Access:Dispatch<SetStateAction<boolean>>
  day9Access:boolean,
  setDay9Access:Dispatch<SetStateAction<boolean>>
  day10Access:boolean,
  setDay10Access:Dispatch<SetStateAction<boolean>>
  
  // ... (similarly, add typings for other state variables)
}

const GlobalContext = createContext<ContextProps | undefined>(undefined);

export const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
  const [totalScore, setTotalScore] = useState(0);
  const [currentDay, setCurrentDay] = useState(1);
  const [day2Access, setDay2Access] = useState(false);
  const [day3Access, setDay3Access] = useState(false);
  const [day4Access,setDay4Access]=useState(false);
    const [day5Access,setDay5Access]=useState(false);
    const [day6Access,setDay6Access]=useState(false);
    const [day7Access,setDay7Access]=useState(false);
    const [day8Access,setDay8Access]=useState(false);
    const [day9Access,setDay9Access]=useState(false);
    const [day10Access,setDay10Access]=useState(false);
  // ... (similarly, initialize other state variables)

  return (
    <GlobalContext.Provider value={{
      totalScore, setTotalScore,
      currentDay, setCurrentDay,
      day2Access, setDay2Access,
      day3Access, setDay3Access,
      day4Access,setDay4Access,day5Access,setDay5Access,day6Access,setDay6Access,day7Access,setDay7Access,day8Access,setDay8Access,day9Access,setDay9Access,day10Access,setDay10Access
      // ... (similarly, provide other state variables)
    }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalContextProvider');
  }
  return context;
};
