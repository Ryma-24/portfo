"use client"

import { LaptopMinimal } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"


const Experiences = () => {
  return(
 <>
    
    <h1 className=" relative flex items-center justify-center text-center h-24 rounded-md text-3xl border text-red-900
     md:border-none md:relative md:top-16 md:flex md:items-center md:font-mono md:uppercase md:underline md:justify-start md:left-10 md:-tracking-tighter md:text-5xl md:text-white hover:text-red-500 hover:drop-shadow-2xl
     xl:text-5xl
     ">Mes competences</h1>

    <div className=" flex flex-col items-center justify-center mt-10 h-full space-y-10 
    md:space-y-0 auto md:mt-auto md:flex md:flex-row md:items-center md:space-x-5 md:justify-center md:w-screen md:h-screen md:text-white md:overflow-auto">
      
      <Card className=" w-64 h-72 shadow-lg bg-slate-400 shadow-white hover:shadow hover:scale-125 duration-200
       md:w-80 md:h-64 
       xl:w-[400px] xl:h-80
       ">
        <CardHeader>
          <CardTitle className="flex">
            <LaptopMinimal style={{}} size={60} />
              <p className=" ml-3 pb-4 h-4
               md:pb-0 md:mb-0 md:ml-5 md:h-auto md:mt-2 
               xl:text-3xl
               " style={{fontFamily: 'Roboto, sans-serif'}}>
              Software devlopement
              </p>
             </CardTitle>
        </CardHeader>
          <CardContent className="flex" >
           
            <p className=" mx-1 font-serif 
            md:pb-0 md:mx-3
            xl:text-xl
              " >
            Compétences en programmation fonctionnelle et
             orientée objet avec des langages tels JavaScript et TypeScript,
             Python.
            </p>

            <div className="w-2 h-32 border-l my--8 ml-2 bg-blue-700">
            </div>
          </CardContent>
      </Card>


      <Card className="w-64 h-72 bg-slate-400 shadow-white shadow-lg hover:shadow hover:scale-95 duration-200 
      md:w-80 md:h-64
      xl:w-[400px] xl:h-80">
        <CardHeader>
          <CardTitle className="flex">
          <svg id="Layer_1" height="44" viewBox="0 0 66 66" width="51" xmlns="http://www.w3.org/2000/svg"><g><path d="m60.3 10.2c-4-3.3-10.5-2.4-15.5-1-3.1-5.3-7.3-8.2-11.8-8.2s-8.7 2.9-11.9 8.3c-5-1.4-11.5-2.3-15.5 1-6.6 5.3-.8 16 4.6 22.7-5.4 6.7-11.2 17.4-4.5 22.8 4 3.3 10.5 2.4 15.5 1 3.1 5.3 7.3 8.2 11.8 8.2s8.7-2.9 11.9-8.3c5 1.4 11.5 2.3 15.5-1 6.6-5.4.8-16.1-4.6-22.8 5.4-6.5 11.2-17.3 4.5-22.7zm-2.4 42.6c-2.7 2.2-7.9 1.3-11.2.5 1.8-4.1 3-8.9 3.5-14.2 1.1-1 2.1-2 3-3.1 3.5 4.4 8.9 13.3 4.7 16.8zm-24.9 8.3c-2.9 0-5.7-2-8.1-5.6 2.6-1 5.3-2.3 8.1-3.8 2.8 1.5 5.5 2.8 8.1 3.8-2.4 3.6-5.2 5.6-8.1 5.6zm-24.9-8.3c-4.2-3.5 1.2-12.4 4.7-16.8.9 1 1.9 2 3 3.1.5 5.2 1.7 10.1 3.5 14.2-3.3.8-8.5 1.6-11.2-.5zm0-39.6c2.6-2.2 7.9-1.3 11.2-.5-1.8 4.1-3 8.9-3.5 14.2-1.1 1-2.1 2-3 3.1-3.5-4.4-8.9-13.3-4.7-16.8zm24.9-8.3c2.9 0 5.7 2 8.1 5.6-2.6 1-5.3 2.3-8.1 3.8-2.8-1.5-5.5-2.8-8.1-3.8 2.4-3.6 5.2-5.6 8.1-5.6zm24.9 8.3c1 .8 1.5 2 1.5 3.6 0 3.4-2.3 8.1-6.2 13.2-.9-1-1.9-2-3-3.1-.5-5.2-1.7-10.1-3.5-14.2 3.3-.8 8.5-1.6 11.2.5zm-24.9 34c-4.7-2.8-9.3-6.2-13.4-10-.2-2.8-.2-5.6 0-8.5 4.1-3.8 8.8-7.2 13.4-10 4.7 2.8 9.3 6.2 13.4 10 .2 2.8.2 5.6 0 8.5-4.1 3.9-8.8 7.3-13.4 10zm3.9-30.6c2.1-1 4.1-1.9 6-2.6 1.2 2.6 2.1 5.7 2.7 9-2.4-2.1-5.5-4.4-8.7-6.4zm-7.8 0c-3.2 2-6.2 4.2-8.8 6.3.6-3.3 1.6-6.4 2.7-9 2 .8 4 1.7 6.1 2.7zm0 32.8c-2.1 1-4.1 1.9-6 2.6-1.2-2.6-2.1-5.7-2.7-9 2.5 2.2 5.5 4.4 8.7 6.4zm7.8 0c3.2-2 6.2-4.2 8.8-6.3-.6 3.3-1.6 6.3-2.7 9-2-.8-4-1.7-6.1-2.7z"/><path d="m33 26.4c-3.9 0-7.1 3-7.1 6.6s3.2 6.6 7.1 6.6 7.1-3 7.1-6.6-3.2-6.6-7.1-6.6z"/></g></svg>
           
            <p className=" ml-3 pb-4 h-4
             md:pb-0 md:mb-0 md:ml-5 md:h-auto md:mt-2
             xl:text-3xl
             " style={{fontFamily: 'Roboto, sans-serif'}}>
            fullstack dev.
            React, Next.js
            </p>
          </CardTitle>
          </CardHeader>
          <CardContent className="flex" >
          
            <p className="  mx-1 font-serif
             md:pb-0 md:mx-3
             xl:text-xl
             ">
            Attiré par le développement web en HTML, CSS, JS,TS, React et NextJS,
            j&apos;apprécie le front-end que le back-end.
            </p>

            <div className=" mr-1 w-3 h-32 mt-1.5 ml-6 border-l bg-white">
            </div>
            </CardContent>
      </Card>


      <Card className="w-64 h-72 bg-slate-400 shadow-white shadow-lg hover:shadow hover:scale-125 duration-200 
      md:w-80 md:h-64 
      xl:w-[400px] xl:h-80">
        <CardHeader>
          <CardTitle className="flex">
            
          <svg id="Layer_1" height="56" width="44" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m16 0h-8c-1.103 0-2 .897-2 2v20c0 1.103.897 2 2 2h8c1.103 0 2-.897 2-2v-20c0-1.103-.897-2-2-2zm-4 23c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1zm5-3h-10v-17h10z"/></svg>
            <p className=" ml-3 pb-4 h-4 
            md:pb-0 md:mb-0 md:ml-5 md:h-auto md:mt-2
             xl:text-3xl
            
            " style={{fontFamily: 'Roboto, sans-serif'}}>
              React native <br />
              Android, ios
            </p>
          </CardTitle>
          </CardHeader>
          
          <CardContent className="flex" >
          
          <p className="   font-serif 
          md:pb-0 md:mx-3 
          xl:text-xl">
        Développement d&apos;applications mobiles avec React Native,sur iOS et Android,
         un domaine d&apos;innovation et d&apos;expérience utilisateur.
          </p>

          <div className=" mr-1 w-3 h-32 mt-1.5 ml-6 border-l bg-red-800">
            </div>
          </CardContent>    
      </Card>

    </div> 
    </>
  )
}

export default Experiences


/**/
