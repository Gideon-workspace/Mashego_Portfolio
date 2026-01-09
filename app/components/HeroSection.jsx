"use client";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="w-full min-h-screen bg-gradient-to-b from-blue-900 to-blue-100 flex items-center py-10 md:py-32"
    >
      <div className="container mx-15 flex flex-col md:flex-row items-center justify-between md:px-16">

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
            Hello I&apos;m{" "}
            <span className="text-pink-500 font-mono">
              Mashego Mabeloane
            </span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg mb-8">
            Software Developer building intelligent, real-world solutions with LLMs and AI.
            Passionate about machine learning, automation, and scalable applications that solve real problems.
          </p>

          {/* CTA + SOCIALS */}
          <div className="flex flex-col items-center md:items-start gap-6">
            {/* Download CV */}
            <a
              href="/files/Mashego_Mabeloane_SE_resume.pdf"
              download
              className="inline-flex items-center justify-center
                px-8 py-3 rounded-md text-white bg-pink-600
                hover:bg-pink-700 transition-colors shadow-lg"
            >
              Download CV
            </a>

            {/* Social Icons */}
            <div className="flex gap-6">
              <a
                href="https://www.linkedin.com/in/gideon-mabeloane/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-full border border-pink-500
                  text-pink-500 hover:bg-pink-500 hover:text-white
                  transition-all duration-300"
              >
                <FaLinkedin size={24} />
              </a>

              <a
                href="https://github.com/Gideon-workspace"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-full border border-pink-500
                  text-pink-500 hover:bg-pink-500 hover:text-white
                  transition-all duration-300"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="mt-10 md:mt-0 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="relative rounded-full p-1">
            <div
              className="absolute inset-0 rounded-full border-4 border-pink-500 border-t-transparent animate-spin"
              style={{ animationDuration: "10s" }}
            />

            <div className="relative rounded-full overflow-hidden w-48 sm:w-64 md:w-72 lg:w-80 h-48 sm:h-64 md:h-72 lg:h-80">
              <Image
                src="/images/image.jpg"
                alt="Profile Image"
                width={320}
                height={320}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
