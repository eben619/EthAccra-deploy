import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const FooterSection = () => {
  const [isPoapDropdownOpen, setIsPoapDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsPoapDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-start justify-between py-12 border-b">
          {/* Left Side - Logo */}
          <div className="w-64 mb-6 md:mb-0">
            <div className="relative">
              <Image
                src="/assets/svgs/2025/ETHAccra-circular.svg"
                alt="ETHAccra Logo"
                width={240}
                height={240}
                priority
              />
            </div>
          </div>
          
          {/* Right Side - Text and Icons */}
          <div className="w-full md:w-3/5">
            {/* Community Text */}
            <div className="mb-8">
              <p className="text-black text-xl leading-relaxed mb-6">
                Our vibrant community welcomes developers, designers, researchers, and enthusiasts to push the boundaries of technology in West Africa. Accra is poised to be the epicenter of Ethereum innovation in the region.
              </p>
              <p className="text-black text-xl font-medium">
                Come for the hack, stay for the vibes.
              </p>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              {/* Telegram Icon */}
              <a href="https://t.me/ethaccra" className="block" target="_blank">
                <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" fill="#ffffff"/>
                  </svg>
                </div>
              </a>
              
              {/* X/Twitter Icon */}
              <a href="https://x.com/ETHAccra" className="block" target="_blank">
                <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="#ffffff"/>
                  </svg>
                </div>
              </a>
              
              {/* LinkedIn Icon */}
              <a href="https://linkedin.com/company/ethaccra" className="block" target="_blank">
                <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.366C3.274 4.224 4.194 3.299 5.337 3.299C6.477 3.299 7.401 4.224 7.401 5.366C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z" fill="#ffffff"/>
                  </svg>
                </div>
              </a>
              
              {/* Instagram Icon */}
              <a href="https://instagram.com/ethaccra" className="block" target="_blank">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-orange-400 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163C15.204 2.163 15.584 2.175 16.85 2.233C20.102 2.381 21.621 3.924 21.769 7.152C21.827 8.417 21.838 8.797 21.838 12.001C21.838 15.206 21.826 15.585 21.769 16.85C21.62 20.075 20.105 21.621 16.85 21.769C15.584 21.827 15.206 21.839 12 21.839C8.796 21.839 8.416 21.827 7.151 21.769C3.891 21.62 2.38 20.07 2.232 16.849C2.174 15.584 2.162 15.205 2.162 12C2.162 8.796 2.175 8.417 2.232 7.151C2.381 3.924 3.896 2.38 7.151 2.232C8.417 2.175 8.796 2.163 12 2.163ZM12 0C8.741 0 8.333 0.014 7.053 0.072C2.695 0.272 0.273 2.69 0.073 7.052C0.014 8.333 0 8.741 0 12C0 15.259 0.014 15.668 0.072 16.948C0.272 21.306 2.69 23.728 7.052 23.928C8.333 23.986 8.741 24 12 24C15.259 24 15.668 23.986 16.948 23.928C21.302 23.728 23.73 21.31 23.927 16.948C23.986 15.668 24 15.259 24 12C24 8.741 23.986 8.333 23.928 7.053C23.732 2.699 21.311 0.273 16.949 0.073C15.668 0.014 15.259 0 12 0ZM12 5.838C8.597 5.838 5.838 8.597 5.838 12C5.838 15.403 8.597 18.162 12 18.162C15.403 18.162 18.162 15.403 18.162 12C18.162 8.597 15.403 5.838 12 5.838ZM12 16C9.791 16 8 14.209 8 12C8 9.791 9.791 8 12 8C14.209 8 16 9.791 16 12C16 14.209 14.209 16 12 16ZM18.406 4.155C17.61 4.155 16.965 4.8 16.965 5.595C16.965 6.39 17.61 7.035 18.406 7.035C19.201 7.035 19.845 6.39 19.845 5.595C19.845 4.8 19.201 4.155 18.406 4.155Z" fill="#ffffff"/>
                  </svg>
                </div>
              </a>
              
              {/* Email Icon */}
              <a href="mailto:info@ethaccra.xyz" className="block" target="_blank">
                <div className="w-14 h-14 rounded-full bg-red-500 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#ffffff"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="py-6 flex flex-wrap justify-between items-center text-black">
          <div className="mb-4 md:mb-0">
            <p>All rights reserved 2025</p>
          </div>
          <div className="flex flex-wrap items-center space-x-8">
            {/* POAP Dropdown */}
            <div className="relative mb-2 md:mb-0" ref={dropdownRef}>
              <button
                onClick={() => setIsPoapDropdownOpen(!isPoapDropdownOpen)}
                className="flex items-center space-x-1 hover:underline focus:outline-none"
              >
                <span>POAPs</span>
                <ChevronDown 
                  className={`w-4 h-4 transition-transform ${isPoapDropdownOpen ? 'rotate-180' : ''}`} 
                />
              </button>
              
              {isPoapDropdownOpen && (
                <div className="absolute bottom-full mb-2 left-0 bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-52 z-10">
                  <a 
                    href="https://collections.poap.xyz/collections/ethaccra/12447" 
                    className="block px-4 py-2 hover:bg-gray-50 hover:text-[#FF5CB9]" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    POAP Collection
                  </a>
                  <a 
                    href="https://collectors.poap.xyz/scan" 
                    className="block px-4 py-2 hover:bg-gray-50 hover:text-[#FF5CB9] whitespace-nowrap" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Collected POAPs
                  </a>
                </div>
              )}
            </div>
            
            <a href="#about-us" className="mb-2 md:mb-0 hover:underline">About Us</a>
            <a href="#contact-us" className="mb-2 md:mb-0 hover:underline">Contact Us</a>
            <a href="#faqs" className="mb-2 md:mb-0 hover:underline">FAQs</a>
            <a href="#gallery" className="mb-2 md:mb-0 hover:underline">Gallery</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;