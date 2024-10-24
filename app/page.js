
"use client"
import Hero from "./components/hero";
import DataHub from "./components/datahub";
import Link from "next/link";
import DPEContent from "./components/dpecontent";
import LandingpageTools from "./components/landingTool"
import LandingVideos from "./components/landingvideo"
import LandingArticle from "./components/landingarticle"

import { useEffect, useState } from 'react';

export default function Home() {

  const [toolsData, setToolsData] = useState([]);
  const [videosData, setVideosData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json'); // Fetching from the public directory
        const data = await response.json();
        
        setToolsData(data.tools);
        setVideosData(data.videos);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-[#E1F2FD]">
    
     <Hero toolsData={toolsData} videosData={videosData} />
     <DataHub/>
      <section className="bg-[#E1F2FD] p-6">
      <div className="text-[#1C1D32]" >
      <h2 className="text-4xl flex items-center justify-center font-bold mb-4 pt-12">DPE Contents</h2>
        <p className=" text-[18px] md:text-md font-bold  flex items-center justify-center text-center">
        Search for answers to your digital privacy problems by checking out all of DPE&apos;s very own content.
        </p>
      </div>

      <div className=" m-auto max-w-3xl">
         <Link href="/tutorial" className="text-[#1C1D32] underline mt-8 flex items-end justify-end">
         <p>View All</p>
         </Link>
        <DPEContent/>
      </div>
      </section>

       <section  className=" p-6">

       <div className=" text-center ">
     <h1 className="text-3xl text-[#171939] font-bold mb-2">Library of Resources</h1>
     <p className="text-lg mb-6">Check out curated tools, videos, and articles to protect you online.</p>
     </div>
       </section>
        <LandingpageTools />

        <LandingVideos />

        <LandingArticle />
   
    <section className="bg-[#171939] py-10">
      <div className="max-w-5xl mx-auto  flex flex-col md:flex-row items-center justify-between px-5">
       
        <div>
          <h1 className="text-2xl sm:ml-2 md:text-3xl md:max-w-72   mb-8 font-bold text-[#ffff]">
            How To Choose CyberSecurity Solution
          </h1>
        </div>

        <div className=" flex flex-col items-center justify-end md:text-end" >
          <h3 className="text-xl max-w-80  text-[#9c9c9c] mb-5">
          Having difficulties choosing the right cybersecurity tools for your Digital Privacy?
          </h3>
          <Link href="/resources">
            <button className="bg-[#2196F3] mt-4  px-4 py-2 rounded-md hover:bg-[#2196F3]">
            Check all resources
            </button>
          </Link>
        </div>
      </div>
    </section>
  
    </div>
  );
}
