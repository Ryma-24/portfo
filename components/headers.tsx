"use client"

import { motion } from 'framer-motion'
import { LucideArrowBigDownDash } from 'lucide-react'
import Head from "next/head"
import { useEffect, useState } from "react"
import TypewriterText from './typewriter'

const Header:React.FC = () => {

  const [opacity, setOpacity] = useState(1)
  const [imageOpacity, setImageOpacity] = useState(0)
  const [textOpacity, setTextOpacity] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(0)
    }, 3000)
    return () => clearTimeout(timer)
  },[])

  useEffect(() => {
    const timer = setTimeout(() =>{
      setImageOpacity(1)
    }, 7000)

    return () => clearTimeout(timer)
  },[])

  useEffect(() => {
    const timer = setTimeout(() =>{
      setTextOpacity(1)
    }, 3600)
  return () => clearTimeout(timer)
  },[])


  return ( 

    <>
    <Head>
    <link href="https://fonts.googleapis.com/css2?family=Macondo&family=Shadows+Into+Light&display=swap" rel="stylesheet">
    </link>
    </Head>

       
       <div className="flex  flex-col items-center justify-center
       md:flex md:flex-row md:items-center md:justify-center md:h-screen
       lg:flex lg:flex-row lg:items-center lg:justify-center lg:h-screen
       ">
      
      

     
        <div className='flex flex-col'>
        <div  className="hidden text-white md:flex md:px-10 md:text-6xl md:w-96 md:absolute md:h-44 md:inset-1 py-24 " style={{fontFamily: 'Macondo, cursive', opacity: textOpacity}} >
           <TypewriterText />
      </div>
     
      <div   
         
      className=" hidden bottom-0 z-20 right--20 md:block">
        <motion.div
      
             className='absolute bottom-20 left-64'
                 initial={  {y: 0}}
                 animate={{y:[0, -30,0,-50,0,-50, 0, -50,0,-50,-0]}}
                 transition={{duration:5 , loop:Infinity, ease:"easeInOut", repeat:1000}}>

        <LucideArrowBigDownDash
     
            style={{ color:'red',cursor:'pointer' , opacity:textOpacity,transitionDuration:'20s' }} size={64} />
        </motion.div>  
      </div>
        </div>

      <div className='relative flex justify-center w-full mr-3
       md:relative md:bottom-56 md:w-[300px]
       lg:absolute lg:right-auto lg:bottom-auto lg:top-16 lg:w-96 
       xl: xl:right-auto xl:bottom-auto xl:top-16 xl:w-2/5
       '>
     <motion.img
      className='flex ml-20 rounded-xl 
      md:absolute md:left-44
      lg:absolute lg:left-60 lg:w-full lg:h-auto'
      src="/images/codeur.webp"
      alt="Codeur"
      initial={{x: -300, opacity:4}}
      animate={{x: -35, opacity:4}}
      transition={{duration:7}}
      style={{width:'', height: ''}}
      />
      </div>


      <div className='
      absolute flex w-16 left-12 ml-4 text-xs 
      md:absolute md:left-96  md:top-9 md:ml-28 md:my-44
      lg:absolute lg:left-auto lg:right-96  
      xl:absolute xl:left-auto xl:right-auto xl:py-20 xl:-mr-28  ' 
      style={{opacity: textOpacity}}
      >
     <TypewriterText/>
      </div>

      </div>

     
        
    </>
  )
}
 export default Header



