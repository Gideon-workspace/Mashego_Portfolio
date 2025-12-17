"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import profileImg from "../../public/images/aboutMe.jpg";

import jsIcon from "../../public/images/js.png";
import reactIcon from "../../public/images/react.png";
import nodeIcon from "../../public/images/node.png";
import MySql from "../../public/images/Mysql.png";
import supabase from "../../public/images/supabase.png";
import firebase from "../../public/images/firebase.png";
import tailwindcss from "../../public/images/tailwindcss.png";
import nextjs from "../../public/images/nextjs.png";
import machineLearning from "../../public/images/machine-learning.png";
import ml from "../../public/images/ml.png";
import dataScience from "../../public/images/data-science.png";
import hiking from "../../public/images/hiking.png";
import freelance from "../../public/images/freelance.png";

// Base tech icons
const baseIcons = [
  jsIcon, reactIcon, nodeIcon, MySql, supabase, firebase, tailwindcss, nextjs,
];

// Timeline milestones
const milestones = [
  {
    year: "2023",
    title: "Started Learning Web Development",
    description: "Focused on HTML, CSS, JavaScript basics.",
    icon: jsIcon,
  },
  {
    year: "2024",
    title: "React & Next.js Projects",
    description: "Built full-stack applications and gained proficiency in React ecosystem. but mainly worked in the backend using Node.js, Express, and databases like MySQL and Supabase.",
    icon: reactIcon,
  },
  {
    year: "2025",
    title: "Backend Engineering",
    description: "Built backend services for a freelancing platform (Freelancio) using JavaScript with Node.js, Express, and Supabase. Implemented secure user authentication, RESTful APIs, a real-time chat system, and job posting functionality.",
    icon: freelance,
  },
  {
    year: "2025",
    title: "Data Analytic Intern",
    description: " Processed and cleaned financial datasets for major South African banks (FNB, ABSA, NEDBANK, Standard Bank) using Python and Excel. Performed exploratory analysis to produce visual summaries of key trends for supervisors and find features with the strongest predictive power to be used to train the machine learning model.",
    icon: dataScience,
  },
  {
    year: "2025",
    title: "Machine Learning Basics",
    description: "Learned classification, regression, and clustering algorithms using Python and build simple ML model(Naive Bayes).",
    icon: machineLearning,
  },
 
  {
    year: "2025",
    title: "Backend Engineering",
    description: "Engineered the backend for a Hiking Logbook platform using JavaScript (Node.js, Express, and Supabase). Designed and implemented core features including hike activity logging, weather-informed trip planning, and real-time distance and duration tracking. Developed comprehensive automated test coverage using Jest and Supertest to ensure API reliability, performance, and correctness.",
    icon: hiking,
  },
];

export default function AboutTimeline() {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const duplicatesPerIcon = 3; // Number of duplicates per icon
    const floatingIcons = baseIcons.flatMap(icon =>
      Array.from({ length: duplicatesPerIcon }, () => icon)
    );

    const generatePositions = floatingIcons.map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight, // spread across full vertical height
    }));

    setPositions(generatePositions);
  }, []);

  // Use duplicated floatingIcons in the render
  const duplicatesPerIcon = 3;
  const floatingIconsList = baseIcons.flatMap(icon =>
    Array.from({ length: duplicatesPerIcon }, () => icon)
  );

  return (
    <section id = "AboutMe" className="relative w-full bg-gradient-to-b from-blue-100 to-white py-20 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 -left-30 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>

      {/* Floating tech icons */}
      {positions.length > 0 &&
        floatingIconsList.map((icon, index) => {
          const moveX = [Math.random() * window.innerWidth, Math.random() * window.innerWidth, Math.random() * window.innerWidth];
          const moveY = [Math.random() * window.innerHeight, Math.random() * window.innerHeight, Math.random() * window.innerHeight];

          return (
            <motion.div
              key={index}
              className="absolute opacity-70 drop-shadow-lg"
              initial={{ x: positions[index].x, y: positions[index].y }}
              animate={{
                x: [positions[index].x, ...moveX, positions[index].x],
                y: [positions[index].y, ...moveY, positions[index].y],
                rotate: [0, 15, -15, 0],
              }}
              transition={{
                duration: 12 + Math.random() * 8,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            >
              <Image src={icon} width={30} height={30} alt="tech icon" />
            </motion.div>
          );
        })}

      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-5xl font-extrabold text-center text-pink-600 mb-20">
          About Me
        </h2>

        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-pink-500"></div>

        <div className="space-y-16">
          {milestones.map((item, index) => (
            <motion.div
              key={index}
              className={`flex w-full relative items-center ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-black p-6 rounded-xl shadow-lg w-80 relative z-10">
                {item.icon && (
                  <Image src={item.icon} width={40} height={40} alt="icon" className="mb-2" />
                )}
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <span className="text-pink-500 font-medium">{item.year}</span>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </div>

              {/* Timeline circle */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-pink-500 rounded-full z-20"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Section separator */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 500 50" preserveAspectRatio="none" className="w-full h-12">
          <path d="M0,50 C150,0 350,100 500,50 L500,0 L0,0 Z" fill="#f0f9ff" />
        </svg>
      </div>
    </section>
  );
}
