import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const articlesData = [
  {
    imageUrl: "/article/article-1.png", 
    title: "The Battle for Digital Privacy Is Reshaping the Internet",
    description: "As Apple and Google enact privacy changes, businesses are grappling with the fallout, Madiso...",
    link: "https://www.nytimes.com/2021/09/16/technology/digital-privacy.html",
  },
  {
    imageUrl: "/article/article-2.png",
    title: "5 Digital Privacy Examples: How to Reclaim Privacy",
    description: "We show you five digital privacy examples that will help you reclaim your privacy...",
    link: "https://epic.org/issues/consumer-privacy/social-media-privacy/",
  },
  {
    imageUrl: "/article/article-3.png",
    title: "Too many social media platforms are built on excessive collection",
    description: "Over the past two decades, social media platforms have become vast and powerful tools for connecting, communicating...",
    link: "https://www.pewresearch.org/internet/2023/10/18/how-americans-view-data-privacy/",
  },
  {
    imageUrl: "/article/article-1.png",
    title: "How Americans View Data Privacy ",
    description: "The share of Americans who say they are very or somewhat concerned about government use of ...",
    link: "https://www.pewresearch.org/internet/2023/10/18/how-americans-view-data-privacy/",
  },
  {
    imageUrl: "/article/article-2.png",
    title: "Privacy in a digital world ",
    description: "Technological progress has created a situation of severe tension and incompatibility between the right to privacy and the extensive data pooling on which the digital economy is based.",
    link: "https://techcrunch.com/2019/09/26/privacy-queen-of-human-rights-in-a-digital-world/",
  },
  {
    imageUrl: "/article/article-3.png",
    title: "Do digital natives value their online privacy?",
    description: "For many digital natives, the internet serves as a source of communication, networking, learning, and even income. A widespread adoption of digital platforms...",
    link: "https://networkreadinessindex.org/do-digital-natives-value-their-online-privacy/",
  },
  {
      imageUrl: "/article/article-2.png",
      title: "Digital Privacy: A Fundamental Human Right and a Win for Businesses ",
      description: "Many believe that digital privacy, like privacy itself, is a fundamental human right, necessary to protect...",
      link: "/https://wickr.com/digital-privacy-a-fundamental-human-right-and-a-win-for-businesses/",
    },
    {
      imageUrl: "/article/article-1.png",
      title: "Privacy reform is important ",
      description: "Digital Rights Watch is an Australian organisation that advocates for privacy, democracy, fairness a...",
      link: "https://digitalrightswatch.org.au/2022/10/11/privacy-reform-is-important/",
    },
  {
    imageUrl: "/article/article-3.png",
    title: "What is GDPR, the EU’s new data protection law?",
    description: "What is the GDPR? Europe’s new data privacy and security law includes hundreds of pages’ worth...",
    link: "https://gdpr.eu/what-is-gdpr/",
  },
  
];


const Articles = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-10 bg-[#E1F2FD] m-auto space-y-6">
      {articlesData.map((article, index) => (
        <div
          key={index}
          className="border flex flex-col sm:flex-row rounded-lg gap-4 md:gap-6 lg:gap-3 overflow-hidden p-4 hover:shadow-lg transition-shadow space-y-4 lg:space-y-0"
        >
     
          
          <div className="flex-shrink-0 w-full sm:w-1/3">

            <Image 
              src={article.imageUrl}
              alt={article.title}
              width={100}
              height={100}
              className="w-full object-cover"
            />

          </div>

      
          <div className="flex flex-col items-start justify-center space-y-2 ml-0 sm:ml-4">
            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-3xl max-w-md font-semibold text-start mb-2 sm:mb-4 lg:mb-[26px]">
              {article.title}
            </h2>

           
            <div className="flex flex-col sm:flex-row md:flex-row items-start sm:items-center gap-4 sm:gap-36">
              <p className="text-md lg:text-xl max-w-md">{article.description}</p>

              <a
                href={article.link}
                className="flex items-center text-sm sm:text-lg md:text-md  lg:text-xl text-[#2196F3] hover:underline"
              >
                Read More <FaArrowRight className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Articles;
