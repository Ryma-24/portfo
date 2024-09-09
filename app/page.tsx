import Experiences from "@/components/experience";
import Footer from "@/components/footer";
import Header from "@/components/headers";
import MesProjets from "@/components/projets";



export default function Home() {
  return (
   
     
      <main className="bg-neutral-950 bg-[radial-gradient(ellipse_50%_90%_at_50%_-30%,rgba(120,119,198,0.3),rgba(255,255,255,0))] overflow-x-hidden">
      
        <Header />
        <Experiences/>
        <MesProjets/>
       <Footer/>

     </main>
          
     
        
  );
}


/*bg-neutral-950 bg-[radial-gradient(ellipse_50%_90%_at_50%_-30%,rgba(120,119,198,0.3),rgba(255,255,255,0))]*/