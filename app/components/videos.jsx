import Link from 'next/link';

const Videos = () => {
  const cardData = [
    {
      image: '/DPECONTENT/content2.png', 
      description: 'How Do Password Managers Work?',
      link: 'https://www.youtube.com/watch?v=DI72oBhMgWs', 
    },
    {
      image: '/DPECONTENT/content2.png',
      description: 'By Cybersecurity Safe: Lock Your Digital Door.',
      link: 'https://www.youtube.com/watch?v=w_EKb2eOgkc',
    },
    {
      image: '/DPECONTENT/content2.png',
      description: 'Data Privacy and Consent by Dr. Fred Cate.',
      link: 'https://www.youtube.com/watch?v=2iPDpV8ojHA',
    },
    {
      image: '/DPECONTENT/content2.png',
      description: 'How data brokers sold my identity by Madhumita Murgia.',
      link: 'https://www.youtube.com/watch?v=AU66C6HePfg',
    },
    {
      image: '/DPECONTENT/content2.png',
      description: 'There’s Virtually Nothing You Can Do To Protect Your Online Privacy.',
      link: 'https://www.youtube.com/watch?v=vc7_TKN0kfw',
    },
    {
      image: '/DPECONTENT/content2.png',
      description: 'Your Human Firewall – by Rob May.',
      link: 'https://www.youtube.com/watch?v=BpdcVfq2dB8',
    },
    {
      image: '/DPECONTENT/content2.png',
      description: 'Confessions of a cyber spy hunter by Eric Winsborrow.',
      link: 'https://www.youtube.com/watch?v=YiUN35Ikdfw',
    },
    {
      image: '/DPECONTENT/content2.png',
      description: 'Why Do I Care So Much About Privacy? By Erin Murphy.',
      link: 'https://www.youtube.com/watch?v=0aXIXozAsOE',
    },
    {
      image: '/DPECONTENT/content2.png',
      description: 'They"re watching you 😱 Protect your online PRIVACY! ',
      link: 'https://www.youtube.com/watch?v=acWkkLaEsrU',
    },
    {
      image: '/DPECONTENT/content2.png',
      description: 'Data Brokers: Last Week Tonight with John Oliver (HBO) .',
      link: 'https://www.youtube.com/watch?v=wqn3gR1WTcA',
    },
  ];

  return (
    <section className="pb-16 pt-4 flex items-center justify-center text-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 m-auto max-w-3xl pb-4">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-white text-[#1C1D32] rounded-md shadow-md pb-4 transition-transform transform duration-75 hover:scale-105"
          >
            <img
              src={card.image}
              alt={card.title}
              className=" object-cover mb-4 rounded-t-md" 
            />
            <p className="text-[#1C1D32] text-[20px] font-bold  pb-3 px-3 md:text-[14px]">{card.description}</p>
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

export default Videos;
