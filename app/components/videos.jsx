
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Videos = () => {
  const [videos, setVideos] = useState([]);


  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setVideos(data.videos)); 
  }, []);

  return (
    <section className="pb-16 pt-4 flex items-center gap-6 justify-center text-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 m-auto max-w-7xl pb-4">
        {videos.map((video, index) => (
          <div
            key={index}
            className="bg-white text-[#1C1D32] rounded-md shadow-md pb-4 mt-8 transition-transform transform duration-75 hover:scale-105"
          >
            <div className="w-full overflow-hidden rounded-t-md">
              <Image
                src={video.image}
                alt={video.description}
                width={150}
                height={150}
                className="w-full pb-4 h-48 object-cover"
              />
            </div>
            <p className="text-[#1C1D32] text-[20px] font-bold pb-3 mt-4 px-3 md:text-[16px] lg:text-[18px]">
              {video.description}
            </p>
            <Link href={video.link}>
              <p className="text-[#2196F3] flex items-center justify-center">
                Watch Now
                <span className="ml-2">&rarr;</span>
              </p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Videos;
