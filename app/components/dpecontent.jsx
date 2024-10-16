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
              className=" h-55 object-cover mb-4 rounded-t-md" 
            />
            <p className="text-[#1C1D32] font-bold text-[13px] pb-3 px-3">{card.description}</p>
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
