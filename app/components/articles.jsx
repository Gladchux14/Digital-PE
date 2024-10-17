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

// const Articles = () => {
//   return (
//     <div className=" p-10  bg-[#E1F2FD] gap-4 m-auto">
//       {articlesData.map((article, index) => (
//         <div
//           key={index}
//           className="border rounded-lg overflow-hidden p-4 gap-5 space-y-4 hover:shadow-lg transition-shadow"
//         >
     
//           <div className=" bg-gray-200">
//             <img
//               src={article.imageUrl}
//               alt={article.title}
//               className=" "
//             />
//           </div>

      
//           <div className="flex flex-col justify-between h-full">
//             <h2 className="text-xl font-bold mb-2">{article.title}</h2>

        
//             <div className="flex justify-between items-center">
//               <p className="text-base">{article.description}</p>

//               <a href={article.link} className="flex items-center text-[#2196F3] hover:underline">
//                 Read More <FaArrowRight className="ml-2" />
//               </a>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Articles;

const Articles = () => {
    return (
      <div className="px-10 bg-[#E1F2FD] m-auto space-y-6"> 
        {articlesData.map((article, index) => (
          <div
            key={index}
            className="border flex rounded-lg overflow-hidden p-4 hover:shadow-lg transition-shadow space-y-4"
          >
            {/* Image Div */}
            <div className="w-full h-40 bg-gray-200">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
  
            {/* Title and Description Div */}
            <div className="flex flex-col justify-between h-full space-y-2">
              <h2 className="text-xl font-bold">{article.title}</h2>
  
              {/* Description and Link Div */}
              <div className="flex justify-between items-center">
                <p className="text-base">{article.description}</p>
  
                <a
                  href={article.link}
                  className="flex items-center text-[#2196F3] hover:underline"
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