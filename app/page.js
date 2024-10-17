
"use client"
import Hero from "./components/hero";
import DataHub from "./components/datahub";
import Link from "next/link";
import DPEContent from "./components/dpecontent";
import LandingpageTools from "./components/landingTool"
import LandingVideos from "./components/landingvideo"


export default function Home() {
  return (
    <div className="bg-[#E1F2FD]">
    
     <Hero />
     <DataHub/>
      <section className="bg-[#E1F2FD]">
      <div className="text-[#1C1D32]" >
      <h2 className="text-4xl flex items-center justify-center font-bold mb-4 pt-12">DPE Contents</h2>
        <p className="text-sm font-bold  flex items-center justify-center">
        Search for answers to your digital privacy problems by checking out all of DPE's very own content.
        </p>
      </div>

      <div className=" m-auto max-w-3xl">
         <Link href="/tutorial" className="text-[#1C1D32] underline mt-8 flex items-end justify-end">
         <p>View All</p>
         </Link>
        <DPEContent/>
      </div>
      </section>

       <section>

       <div className=" text-center py-6">
     <h1 className="text-3xl text-[#171939] font-bold mb-2">Library of Resources</h1>
     <p className="text-lg mb-6">Check out curated tools, videos, and articles to protect you online.</p>
     </div>
       </section>
        <LandingpageTools />

        <LandingVideos />
  
    </div>
  );
}
