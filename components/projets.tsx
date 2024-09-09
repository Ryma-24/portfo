"use client"

import { Card, CardContent } from "./ui/card"
import { ScrollArea } from "./ui/scroll-area"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip"

import Image from "next/image"





const MesProjets = () => {
  return (
    <>
    
      <h1 className="relative flex items-center justify-center rounded-md text-3xl border h-24 top-14  hover:text-red-500 text-red-900 md:bottom-16 md:top-auto md:items-start md:justify-start md:h-auto  md:text-5xl md:text-white md:border-none md:uppercase md:font-mono md:relative md:left-10 md:underline md:overflow-hidden">
        Mes projets 
      </h1>

    
      <div className=" flex flex-col items-center justify-center mt-24 h-full space-y-10 md:space-y-0 auto md:mt-auto md:flex md:flex-row md:items-center md:space-x-5 md:justify-center md:w-screen md:h-full md:text-white md:overflow-auto">
    

    <ScrollArea className="  w-72 h-80 sm:w-auto md:h-80 md:w-5/12 rounded-md border">
       <Card className=" w-80 h-96 md:h-auto md:w-auto bg-neutral-950 bg-[radial-gradient(ellipse_50%_90%_at_50%_-30%,rgba(120,119,198,0.3),rgba(255,255,255,0))] ">  
        
        <CardContent>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
         <Image src="/images/siteconv.jpeg" alt="" width={100} height={100} className="relative block right-4 w-96  md:block md:h-auto md:right-auto md:w-full md:relative"/>
            </TooltipTrigger>
            <TooltipContent className="hidden md:block bg-gradient-to-r from-slate-300 to-slate-500 text-gray-900 bottom-0 translate-y-96 " >
              <p className="font-mono w-96 " > React et TypeScript, ce site web allie design moderne et fonctionnalités interactives, offrant une plateforme robuste et facilement maintenable.</p>
            </TooltipContent>
         </Tooltip>
         </TooltipProvider>
         </CardContent>
     </Card>      
    </ScrollArea>


    <p className="text-white flex flex-col items-center justify-center font-mono h-full w-80  md:w-full text-center text-xs md:text-center mt-4 md:hidden">
    Conçu en React et TypeScript, ce site web allie design moderne et fonctionnalités interactives, offrant une plateforme robuste et facilement maintenable.
  </p>
    
    
    <ScrollArea className=" w-72 h-80 md:h-80 md:w-5/12 rounded-md border">
       <Card className="w-80 h-96 md:h-auto md:w-auto bg-neutral-950 bg-[radial-gradient(ellipse_50%_90%_at_50%_-30%,rgba(120,119,198,0.3),rgba(255,255,255,0))] ">
        <CardContent>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              
         <Image src="/images/sitespace.jpeg" alt="" width={300} height={100} className="absolute right-0 w-full h-full object-cover md:block md:h-auto md:w-full md:relative"  />
              
            </TooltipTrigger>
          <TooltipContent className=" bg-gradient-to-r from-indigo-900 to-indigo-600 text-gray-200 bottom-0 translate-y-96 md:block hidden" >
              <p className="font-mono w-96 " > Site E-commerce avec React, TypeScript et Next.js. Plateforme intégrant Stripe pour des paiements sécurisés, offrant des composants réactifs et une optimisation serveur avancée.</p>
          </TooltipContent>
         </Tooltip>
         </TooltipProvider>
        </CardContent>
     </Card>      
    </ScrollArea>

    <p className="text-white flex flex-col items-center justify-center font-mono h-full w-80  md:w-full text-center text-xs md:text-center mt-4 md:hidden">
    Conçu en React et TypeScript, ce site web allie design moderne et fonctionnalités interactives, offrant une plateforme robuste et facilement maintenable.
  </p>
   
     </div>



     <div className=" flex flex-col items-center justify-center mt-10 h-full space-y-10 md:space-y-0 auto md:-mt-24 md:flex md:flex-row md:items-center md:space-x-5 md:justify-center md:w-screen md:h-screen  md:text-white md:overflow-auto">


     <ScrollArea className=" w-72 h-80 md:h-80 md:w-5/12 rounded-md border">
     <Card className="w-60 md:h-auto md:w-auto bg-neutral-950 bg-[radial-gradient(ellipse_50%_90%_at_50%_-30%,rgba(120,119,198,0.3),rgba(255,255,255,0))] ">
        <CardContent>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
            
          <Image src="/images/store.jpeg" alt="" width={300} height={100} className="absolute right-0  md:block md:h-auto md:w-full md:relative"  />
          
          </TooltipTrigger>
          <TooltipContent className="hidden md:block bg-gradient-to-r from-pink-300 to-stone-300 text-gray-900 bottom-0 translate-y-80 " >
              <p className="font-mono w-96 " > Tableau de Bord E-commerce avec React et Next.js Interface d'administration optimisée, avec un back-end conçu en Next.js pour une gestion efficace et performante.</p>
          </TooltipContent>
         </Tooltip>
         </TooltipProvider>
        </CardContent>
     </Card>      
    </ScrollArea> 

    
    <p className="text-white flex flex-col items-center justify-center font-mono h-full w-80  md:w-full text-center text-xs md:text-center mt-4 md:hidden">
    Tableau de Bord E-commerce avec React et Next.js Interface d'administration optimisée, avec un back-end conçu en Next.js pour une gestion efficace et performante.
  </p>
   


    <ScrollArea className=" w-72 h-80 md:h-80 md:w-5/12 rounded-md border">
       <Card className="w-72 md:h-auto md:w-auto bg-neutral-950 bg-[radial-gradient(ellipse_50%_90%_at_50%_-30%,rgba(120,119,198,0.3),rgba(255,255,255,0))] ">
        <CardContent>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
          
          <Image src="/images/dialog.jpeg" alt="" width={250} height={100} className="absolute right-0 w-full h-full object-cover md:block md:h-auto md:w-full md:relative"  />
            
          </TooltipTrigger>
          <TooltipContent className="hidden md:block bg-gradient-to-r from-pink-300 to-stone-300 text-gray-900 bottom-0 translate-y-80 ease-out" >
              <p className="font-mono w-96 " > Page Web avec Formulaire dynamique, React et Next.js pour un traitement efficace des données, offrant ainsi une intégration transparente et une performance accrue.</p>
          </TooltipContent>
         </Tooltip>
         </TooltipProvider>
        </CardContent>
     </Card>      
    </ScrollArea> 

    <p className="text-white flex flex-col items-center justify-center font-mono h-full w-80  md:w-full text-center text-xs md:text-center md:hidden">
    Page Web avec Formulaire dynamique, React et Next.js pour un traitement efficace des données, offrant ainsi une intégration transparente et une performance accrue.
  </p>
    
 
     </div>

   

    </>
  )
}

export default MesProjets