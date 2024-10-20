import { useState } from 'react';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  
  const suggestions = [
    "How to set up 2FA on popular platforms",
    "How to secure my account online",
    "VPNs and setting up one for your gadget",
    "How Do Password Managers Work?",
  ];

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length > 0) {
 
      const filtered = suggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions([]);
    }
  };


  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setFilteredSuggestions([]);
  };


  const handleSearch = () => {
    if (searchQuery) {
  
      console.log('Searching for:', searchQuery);
    }
  };

  return (
    <section
      className="h-screen sm:p-6 bg-cover bg-center text-[#171939] flex flex-col text-center justify-center items-center"
      style={{ backgroundImage: "url('/HERO SECTION BACKGROUND.png')" }} 
    >
      <div className="text-center">
        <h1
          className="text-4xl md:text-5xl font-normal mb-4 max-w-3xl m-auto"
          style={{ letterSpacing: "3.84px", lineHeight: "62px" }}
        >
          Control Your{' '}
          <img
            src="/data.png"
            alt="data svg"
            className="inline-block align-middle " 
            style={{ verticalAlign: 'middle' }}
          />{' '}
          Before It Controls <span className="text-[#2196F3]">You</span>
        </h1>

        <p className=" text-lg font-semibold md:text-xl m-auto max-w-md mb-8">
          Digital privacy: The knowledge you need to safeguard your privacy online.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center px-4 gap-6 w-full max-w-lg mx-auto mt-14">
        <div className="relative w-full sm:w-auto">
  <input
    type="text"
    className="w-full sm:w-64 p-3 border border-[#2196F3] rounded-md text-[#2196F3] pr-10"
    placeholder="Search for your solution"
    value={searchQuery}
    onChange={handleSearchChange}
  />
  <img
    src="/search-normal.svg"
    alt="search icon"
    className="w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2"
  />

  {filteredSuggestions.length > 0 && (
    <ul className="absolute z-10 w-full bg-white border text-[12px] border-gray-300 rounded-md text-black mt-1">
      {filteredSuggestions.map((suggestion, index) => (
        <li
          key={index}
          className="cursor-pointer hover:bg-gray-200 p-2"
          onClick={() => handleSuggestionClick(suggestion)}
        >
          {suggestion}
        </li>
      ))}
    </ul>
  )}
</div>


  <button
    onClick={handleSearch}
    className=" sm:w-auto bg-[#2196F3] text-[#171939] p-3 rounded-md hover:bg-white"
  >
    Click for Answers
  </button>
</div>

      </div>
    </section>
  );
};

export default Hero;
