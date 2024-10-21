import Image from 'next/image';
import Link from 'next/link';

const LandingVideos = () => {
  const cardData = [
    {
      image: '/thumbnail/vid-1.png', 
      description: 'How Do Password Managers Work?',
      link: 'https://www.youtube.com/watch?v=DI72oBhMgWs', 
    },
    {
      image: '/thumbnail/vid-2.png',
      description: 'By Cybersecurity Safe: Lock Your Digital Door.',
      link: 'https://www.youtube.com/watch?v=w_EKb2eOgkc',
    },
    {
      image: '/thumbnail/vid-3.png',
      description: 'Data Privacy and Consent by Dr. Fred Cate.',
      link: 'https://www.youtube.com/watch?v=2iPDpV8ojHA',
    },
    {
      image: '/thumbnail/vid-4.png',
      description: 'How data brokers sold my identity by Madhumita Murgia.',
      link: 'https://www.youtube.com/watch?v=AU66C6HePfg',
    },
    {
      image: '/thumbnail/vid-5.png',
      description: 'There&quots Virtually Nothing You Can Do To Protect Your Online Privacy.',
      link: 'https://www.youtube.com/watch?v=vc7_TKN0kfw',
    },
    {
      image: '/thumbnail/vid-6.png',
      description: 'Your Human Firewall by Rob May.',
      link: 'https://www.youtube.com/watch?v=BpdcVfq2dB8',
    },
    {
      image: '/thumbnail/vid-7.png',
      description: 'Confessions of a cyber spy hunter by Eric Winsborrow.',
      link: 'https://www.youtube.com/watch?v=YiUN35Ikdfw',
    },
    {
      image: '/thumbnail/vid-8.png',
      description: 'Why Do I Care So Much About Privacy? By Erin Murphy.',
      link: 'https://www.youtube.com/watch?v=0aXIXozAsOE',
    },
    {
      image: '/thumbnail/vid-9.png',
      description: 'They"re watching you 😱 Protect your online PRIVACY! ',
      link: 'https://www.youtube.com/watch?v=acWkkLaEsrU',
    },
    {
      image: '/thumbnail/vid-10.png',
      description: 'Data Brokers: Last Week Tonight with John Oliver (HBO) .',
      link: 'https://www.youtube.com/watch?v=wqn3gR1WTcA',
    },
  ];

  return (
    <section className="pb-16 px-4 pt-8 max-w-5xl m-auto  items-center justify-center text-center">
        <div className=" flex justify-between items-center mx-6  pb-3 m-auto">
          <p className=" font-bold text-xl">Videos</p>
         <Link href="/resources" className="text-[#1C1D32]  underline mt-5 flex items-end justify-end">
         <p>View All</p>
         </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 m-auto  pb-4">
        {cardData.slice(0, 3).map((card, index) => (
          <div
            key={index}
            className="bg-white mx-4 text-[#1C1D32] rounded-md shadow-md pb-6  transition-transform transform duration-75 hover:scale-105"
          >
            <Image
              src={card.image}
              alt={card.description}
              width={200} height={200}
              className=" w-full mb-4 rounded-t-md object-cover" 
            />
            <p className="text-[#1C1D32] text-[20px] font-bold pb-3 px-3 md:text-[14px]">{card.description}</p>
            <Link href={card.link}>
              <p className="text-[#2196F3] flex items-center justify-center">
                Read more
                <span className="ml-2">&rarr;</span> 
              </p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LandingVideos;
