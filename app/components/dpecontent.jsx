import Image from 'next/image';
import Link from 'next/link';

const DPEContent = () => {
  const cardData = [
    {
      image: '/DPECONTENT/content1.png', 
      description: 'The DPE Guide to VPNs and Setting up One for Your Gadget.',
      link: 'tutorial/guides/guidevpn', 
    },
    {
      image: '/DPECONTENT/content2.png',
      description: 'How to Set Up 2FA on Popular Platforms.',
      link: 'tutorial/guides/guide2fa',
    },
    {
      image: '/DPECONTENT/content3.png',
      description: 'Why securing your accounts is important.',
      link: 'tutorial/guides/guidesecure',
    },
  ];

  return (
    <section className="pb-16 px-5 pt-4 flex items-center justify-center text-center">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 m-auto max-w-6xl pb-4">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="bg-white text-[#1C1D32] rounded-md shadow-md pb-6 transition-transform transform duration-75 hover:scale-105"
        >
          <Image 
            src={card.image}
            alt={card.title}
            width={100} height={48}
            className="w-full h-48 object-cover mb-5 rounded-t-md" 
          />
          <p className="text-[#1C1D32] text-[16px] font-bold md:text-[14px] lg:text-[16px] pb-3 px-3">{card.description}</p>
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

export default DPEContent;
