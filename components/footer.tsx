"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
 



const Footer = () => {

  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const handleMouseEnter = (id:number) => setHoveredId(id) 

  const handleMouseLeave = () => setHoveredId(null)

  const MotionImage = motion(Image)


return (
<footer
      className="  bg-neutral-950 bg-[radial-gradient(ellipse_50%_90%_at_50%_-30%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"> 
      <section className=" flex items-center justify-center space-x-5 md:space-x-14 h-44 md:h-72 sm:h-screen md:items-center  md:justify-center md:py-4">
      
      <a href="https://www.google.com/intl/fr/gmail/about/" target='_blank' rel='noopener noreferrer'>
      <MotionImage
             onMouseEnter={() => handleMouseEnter(1)}
             onMouseLeave={handleMouseLeave}
          
             src='/images/mail.png'
              className='h-10 cursor-pointer'
              alt=''
              width={40}
              height={40}
                 initial={{y: 0}}
                 animate={hoveredId === 1 ?  {} : {y:[0, -10,0,-10,0,-10, 0]}}
                 transition={hoveredId === 1 ? {} :{duration:5 , loop:Infinity, ease:"easeInOut", repeat:1000}}>
     
        </MotionImage>  
        </a>

        <a href='https://linkedin.com/in/aymar-mompere-4125b02a1' target='_blank' rel='noopener noreferrer'>
        <MotionImage
               onMouseEnter={() => handleMouseEnter(2)}
               onMouseLeave={handleMouseLeave}

             src='/images/linkedin.png'
              className='h-10 cursor-pointer'
              width={40}
              height={40}
              alt=''
              initial={{y: 0}}
                 animate={hoveredId === 2 ? {} :{y:[0, -10,0,-10,0]}}
                 transition={hoveredId === 2 ? {}: {duration:5 , loop:Infinity, ease:"easeInOut", repeat:1000}}>
     
        </MotionImage>
        </a>

        <a href="https://x.com/AymarRyma" target='_blank' rel='noopener noreferrer'>
        <MotionImage
                   onMouseEnter={() => handleMouseEnter(3)}
                   onMouseLeave={handleMouseLeave}

             src='/images/twiter.png'
             alt=''
              className='h-10 cursor-pointer'
              width={40}
              height={40}
              initial={{y: 0}}
                 animate={hoveredId === 3 ? {} :{y:[0, -10,0,-10,0]}}
                 transition={hoveredId === 3 ? {} :{duration:5 , loop:Infinity, ease:"easeInOut", repeat:1000}}>
     
        </MotionImage> 
        </a>


        <a href="https://github.com/Ryma-24" target="_blank" rel='"noopener noreferrer'>
        <MotionImage
        
                   onMouseEnter={() => handleMouseEnter(4)}
                   onMouseLeave={handleMouseLeave}

             src='/images/github.png'
             alt='' 
             className='h-10 cursor-pointer bg-blue-600 rounded-md'
             height={40}
             width={40}
             
             style={{color:'blue'}}
                 initial={{y: 0}}
                 animate={hoveredId === 4 ? {} :{y:[-10, 0,-10,0,-10, 0,-10]}}
                 transition={hoveredId === 4 ? {} :{duration:5 , loop:Infinity, ease:"easeInOut", repeat:1000}}>
     
        </MotionImage> 
        </a>

       
   
</section>
<p className='text-white font-extralight flex items-center justify-center text-sm'>© 2024 Aymar Mompere. Tous droits réservés.
</p>
</footer>
)
}

export default Footer