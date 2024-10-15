
"use client"
import Header from "./components/header";
import Footer from "./components/footer";
import Hero from "./components/hero";
import DataHub from "./components/datahub";
import Link from "next/link";
import DPEContent from "./components/dpecontent";

export default function Home() {
  return (
    <div>
    
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

  
    </div>
  );
}
