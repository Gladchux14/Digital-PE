import Link from 'next/link';
import { FaCopyright } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#171939] border border-[#2196F3] text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
       
        <div className="w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
          <Link href="/">
            <img src="/DPE-logo.png" alt="Logo" className="mx-auto md:mx-0 w-32 md:w-40" />
          </Link>
        </div>

    
        <div className="w-full md:w-auto text-center md:text-left">
          <p className="flex justify-center md:justify-start items-center text-sm mb-4 md:mb-0">
            <FaCopyright className="mr-1" /> {new Date().getFullYear()} Digital Privacy Education Platform. All rights reserved.
          </p>
       
          <div className="flex flex-col md:flex-row justify-center md:justify-start items-center text-sm space-y-2 md:space-y-0 md:space-x-6">
            <Link href="/privacy-policy">
              <p className="hover:text-gray-300">Privacy Policy</p>
            </Link>
            <span className="hidden md:inline-block">|</span>
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
