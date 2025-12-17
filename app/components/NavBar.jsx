"use client"; // ← Add this at the very top

import { useState } from "react";
import Image from "next/image";
import brain from "../../public/images/brain.png";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 p-5 sticky top-0 z-50 shadow-md">
      <div className="max-w-8xl mx-auto flex justify-between items-center">
        {/* LOGO */}
        <span className=" text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-pink-500 font-mono italic">Mashego.AI</span>
          <Image src="/images/brain.png" alt=" logo" width={30} height={30} />
        </span>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#home" className="text-white hover:text-pink-500 transition">Home</a>
          <a href="#projects" className="text-white hover:text-pink-500 transition">Projects</a>
          <a href="#services" className="text-white hover:text-pink-500 transition">Services</a>
          <a href="#contact" className="text-white hover:text-pink-500 transition">Contact</a>
          <a
            href="#contact"
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-5 py-2 rounded-xl font-semibold shadow-lg transition-all duration-300"
          >
            Hire Me
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2 px-4">
          <a href="#home" className="block text-white hover:text-pink-500 transition">Home</a>
          <a href="#AboutMe" className="block text-white hover:text-pink-500 transition">About Me</a>
           <a href="#projects" className="block text-white hover:text-pink-500 transition">Projects</a>
          <a href="#services" className="block text-white hover:text-pink-500 transition">Services</a>
          <a href="#contact" className="block text-white hover:text-pink-500 transition">Contact</a>
          <a
            href="#contact"
            className="block bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-5 py-2 rounded-xl font-semibold shadow-lg transition-all duration-300 text-center"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
