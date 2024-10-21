"use client"

import { useState } from "react"; 
import Videos from "../components/videos";  
import AllTools from "../components/tools";
import Articles from "../components/articles.jsx";

const Resources = () => {
  const [activeTab, setActiveTab] = useState("tools"); 

  const renderContent = () => {
    switch (activeTab) {
      case "tools":
        return <AllTools/>;
      case "videos":
        return <Videos />;
      case "articles":
        return <Articles />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#E1F2FD] mx-auto p-4">
     <div className=" text-center py-6">
     <h1 className="text-3xl text-[#171939] font-bold mb-2">Library of Resources</h1>
     <p className="text-lg mb-6">Check out curated tools, videos, and articles to protect you online.</p>
     </div>

      {/* Navigation Links */}
      <nav className="  sm:gap-2 flex ml-6 space-x-6 text-lg gap-8 mb-8">
        <button
          onClick={() => setActiveTab("tools")}
          className={`hover:text-[#2196F3] ${activeTab === "tools" ? "text-[#2196F3]" : ""}`}
        >
          All Tools
        </button>
        <button
          onClick={() => setActiveTab("videos")}
          className={`hover:text-[#2196F3] ${activeTab === "videos" ? "text-[#2196F3]" : ""}`}
        >
          Videos
        </button>
        <button
          onClick={() => setActiveTab("articles")}
          className={`hover:text-[#2196F3] ${activeTab === "articles" ? "text-[#2196F3]" : ""}`}
        >
          Articles
        </button>
      </nav>

      <hr className="mb-8" />

      {renderContent()}
    </div>
  );
};

export default Resources;
