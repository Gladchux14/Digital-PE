"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { IoMenu, IoClose } from 'react-icons/io5';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

 
  const [activePath, setActivePath] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Set the active path based on the window's location
      setActivePath(window.location.pathname);
    }
  }, []);
  
    const isActive = (path) => activePath === path;


  return (
    <header className="bg-[#171939] text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-12">
      
        <div className="text-2xl font-bold">
          <Link href="/">
           <Image src="/DPE-logo.png" alt="Logo" width={100} height={100} />
          </Link>
        </div>

   
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-3xl focus:outline-none">
            {isMenuOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>

     
        <nav className="hidden md:flex space-x-6 mr-32">
      <ul className="flex space-x-6">
        <li>
          <Link href="/">
            <p className={`hover:text-[#2196F3] ${isActive('/') ? 'text-[#2196F3]' : ''}`}>Home</p>
          </Link>
        </li>
        <li>
          <Link href="/tutorial">
            <p className={`hover:text-[#2196F3] ${isActive('/tutorial') ? 'text-[#2196F3]' : ''}`}>Tutorials</p>
          </Link>
        </li>
        <li>
          <Link href="/resources">
            <p className={`hover:text-[#2196F3] ${isActive('/resources') ? 'text-[#2196F3]' : ''}`}>Resources</p>
          </Link>
        </li>
        <li>
          <Link href="/community">
            <p className={`hover:text-[#2196F3] ${isActive('/community') ? 'text-[#2196F3]' : ''}`}>Community Forum</p>
          </Link>
        </li>
      </ul>
    </nav>
      </div>
      

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-900 text-white transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } w-9/12`}
      >
        <div className="flex flex-col justify-center items-center h-full space-y-6 text-xl">
          <Link href="/">
            <p onClick={toggleMenu} className="hover:text-[#2196F3]">Home</p>
          </Link>
          <Link href="/tutorial">
            <p onClick={toggleMenu} className="hover:text-[#2196F3]">Tutorial</p>
          </Link>
          <Link href="/resources">
            <p onClick={toggleMenu} className="hover:text-[#2196F3]">Resources</p>
          </Link>
          <Link href="/community-forum">
            <p onClick={toggleMenu} className="hover:text-[#2196F3]">Community Forum</p>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
