"use client"
import { useState } from 'react';
import Image from 'next/image';

const Hero = ({ toolsData, videosData }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length > 0) {
      const filteredTools = toolsData.filter((tool) =>
        tool.title.toLowerCase().includes(query.toLowerCase())
      );
      const filteredVideos = videosData.filter((video) =>
        video.description.toLowerCase().includes(query.toLowerCase())
      );
      
      setFilteredSuggestions([...filteredTools, ...filteredVideos]);
    } else {
      setFilteredSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    if (suggestion.title) {
      setSearchQuery(suggestion.title); 
    } else if (suggestion.description) {
      setSearchQuery(suggestion.description);
    }
    setFilteredSuggestions([]);
  };

  return (
    <section className="h-screen sm:p-6 bg-cover bg-center text-[#171939] flex flex-col text-center justify-center items-center"
      style={{ backgroundImage: "url('/HERO SECTION BACKGROUND.png')" }}
    >
      <div className="text-center p-4">
        <h1 className="text-4xl md:text-5xl text-[#171939] font-normal mb-4 max-w-3xl m-auto" style={{ letterSpacing: '3.84px', lineHeight: '62px' }}>
          Control Your{' '}
          <Image src="/data.png" alt="data svg" width={180} height={180} className="inline-block align-middle" />{' '}
          Before It Controls <span className="text-[#2196F3]">You</span>
        </h1>
        <p className="text-[#171939] text-lg font-semibold md:text-xl m-auto max-w-md mb-8">
          Digital privacy: The knowledge you need to safeguard your privacy online.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center px-4 gap-6 w-full max-w-lg mx-auto mt-14">
          <div className="relative w-full sm:w-auto">
            <input
              type="text"
              className="sm:w-36 p-3 border border-[#2196F3] rounded-md text-[#2196F3] pr-8"
              placeholder="Search for your solution"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            {/* <Image
              src="/search-normal.svg"
              alt="search icon"
              width={4}
              height={4}
              className="w-4 h-4 absolute right-3 top-1/2 transform sm:-translate-y-2.5 -translate-y-1/2"
            /> */}
            {filteredSuggestions.length > 0 && (
              <ul className="absolute z-10 w-full bg-white border text-[12px] border-gray-300 rounded-md text-black mt-1">
                {filteredSuggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="cursor-pointer hover:bg-gray-200 p-2"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion.title || suggestion.description}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button className="sm:w-auto bg-[#2196F3] text-[#171939] p-3 rounded-md hover:bg-white">
            Click for Answers
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
