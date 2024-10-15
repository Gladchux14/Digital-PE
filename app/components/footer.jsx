import Link from 'next/link';
import { FaCopyright } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#171939] text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
       
        <div className="text-2xl font-bold mb-4 md:mb-0">
          <Link href="/">
            <img src="/DPE-logo.png" alt="Logo" />
          </Link>
        </div>

      
        <div className="text-center md:text-left md:flex md:items-center md:space-x-6 mr-24">
          <p className="flex items-center justify-center md:justify-start text-sm">
            <FaCopyright className="mr-1" /> {new Date().getFullYear()} Digital Privacy Education Platform. All rights reserved.
          </p>
          <div className="flex justify-center md:justify-start text-sm">
            <Link href="/privacy-policy">
              <p className="hover:text-gray-300">Privacy and Policy</p>
            </Link>
            <span className="mx-2">|</span>
            <Link href="/terms-of-service">
              <p className="hover:text-gray-300">Terms of Service</p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
