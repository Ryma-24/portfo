"use client"
import { useEffect, useState } from "react"



const Navbar = () => {

const [opacity , setOpacity] = useState(0)

useEffect(() => {
  const timer = setTimeout(() => {
      setOpacity(1)
  }, 3000)
  return () => clearTimeout(timer)
})


  return (
    <div className=" transition opacity duration-1000 h-16 flex justify-between items-center px-4  bg-neutral-950 bg-[radial-gradient(ellipse_50%_80%_at_50%_60%,rgba(120,119,198,0.3),rgba(255,255,255,0))] sm:px-12 lg:px-20 xl:px-48 
    "
    style={{opacity}}
    >
      
      <p className="text-white">Navbar</p>
   
      </div>

    

  )
}

export default Navbar