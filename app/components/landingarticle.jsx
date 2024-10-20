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
 
];

const LandingArticle = () => {
  return (
    <div className=" sm:px-6 md:px-8 max-w-6xl bg-[#E1F2FD] m-auto px-4 ">
      {articlesData.slice(0, 3).map((article, index) => ( 
        <div
          key={index}
          className="border mb-6 flex flex-col sm:flex-row rounded-lg gap-2 md:gap-4 lg:gap-3 overflow-hidden  hover:shadow-lg transition-shadow "
        >
        
          <div className="flex-shrink-0  sm:w-1/3">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full object-cover"
            />
          </div>

        
          <div className="flex flex-col items-start justify-center space-y-2 ml-0 sm:ml-4">
            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-3xl max-w-md font-semibold text-start mb-2 sm:mb-4 lg:mb-[32px]">
              {article.title}
            </h2>

            <div className="flex flex-col lg:flex-row items-start sm:items-center  ">
              <p className="text-md md:max-w-lg lg:text-xl max-w-md">{article.description}</p>

              <a
                href={article.link}
                className="flex items-center justify-end text-sm sm:text-lg md:text-md lg:text-md text-[#2196F3] hover:underline"
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

export default LandingArticle;
