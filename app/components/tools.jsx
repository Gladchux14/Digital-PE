import { useEffect, useState } from 'react';

const AllTools = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setTools(data.tools));
  }, []);

  return (
    <div className="bg-[#E1F2FD] mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {tools.map((tool, index) => (
          <div key={index} className="border border-[#9c9c9c] rounded-lg p-4 mt-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold mb-2">{tool.title}</h2>
            <p className="text-base mb-4">{tool.description}</p>
            <a href={tool.link}>
              <p className="flex items-center text-[#2196F3] hover:underline">
                Learn More
              </p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTools;

