"use client";
import Image from "next/image";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="home" className="w-full min-h-screen bg-gradient-to-b from-blue-900 to-blue-100 flex items-center py-0 md:py-32">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:px-35">

        {/* LEFT CONTENT */}
        <motion.div
          className="max-w-xl text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-pink-400 uppercase tracking-widest text-sm mb-2 font-semibold">
            Aspiring AI/ML Engineer
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            Hello I&apos;m  <span className="text-pink-500 font-mono">Mashego Mabeloane</span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8">
            Software Developer building intelligent, real-world solutions with LLMs and AI.  
            Passionate about machine learning, automation, and scalable applications that solve real problems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/files/Mashego_Mabeloane_resume.pdf" // ❗ IMPORTANT: Update this path to your actual CV file
              download 
               className="inline-flex items-center justify-center 
                     px-8 py-3 border border-transparent text-base 
                     font-medium rounded-md text-white bg-pink-600 
                     hover:bg-pink-900 transition-colors shadow-lg"
              >
              Download CV
            </a>
          </div>
        </motion.div>

        {/* IMAGE RIGHT SIDE */}
        <motion.div
          className="mt-8 md:mt-0 flex justify-center md:justify-end w-full md:w-auto"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Wrapper for the spinning border */}
          <div className="relative rounded-full p-1">
            {/* Spinning border */}
            <div
              className="absolute inset-0 rounded-full border-4 border-pink-500 border-t-transparent animate-spin"
              style={{ animationDuration: '10s' }}
            ></div>

            {/* Profile Image */}
            <div className="relative rounded-full overflow-hidden w-48 sm:w-64 md:w-72 lg:w-80 h-48 sm:h-64 md:h-72 lg:h-80">
              <Image
                src="/images/image.jpg"
                alt="Profile Image"
                width={300}  // specify actual width
                height={300} // specify actual height
                className="rounded-full w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
