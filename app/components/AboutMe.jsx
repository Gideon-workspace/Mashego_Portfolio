"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import jsIcon from "../../public/images/js.png";
import reactIcon from "../../public/images/react.png";
import nodeIcon from "../../public/images/node.png";
import MySql from "../../public/images/Mysql.png";
import supabase from "../../public/images/supabase.png";
import firebase from "../../public/images/firebase.png";
import tailwindcss from "../../public/images/tailwindcss.png";
import nextjs from "../../public/images/nextjs.png";
import machineLearning from "../../public/images/machine-learning.png";
import dataScience from "../../public/images/data-science.png";
import hiking from "../../public/images/hiking.png";
import study from "../../public/images/study.png";
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
    description: "Built full-stack applications and gained proficiency in React ecosystem. But mainly worked in the backend using Node.js, Express, and databases like MySQL,Firebase and Supabase.",
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
    title: "Backend Engineering",
    description: "Built backend services for a Trailo hiking logbook platform using JavaScript with Node.js, Express, and Supabase. Implemented RESTful APIs and wrote unit tests using Jest. Integrated weather forecasting via a third-party API (OpenWeather) and real-time distance and duration tracking using GeoJSON with the Google Maps API. Implemented data persistence using Chrome localStorage.",
    icon: hiking,
  },
  {
    year: "2025",
    title: "Quantitative Risk Analyst Intern",
    description: "Processed and cleaned financial datasets for major South African banks (FNB, ABSA, NEDBANK, Standard Bank) using Python and Excel. Performed exploratory analysis to produce visual summaries of key trends for supervisors and find features with the strongest predictive power to be used to train the machine learning model.",
    icon: dataScience,
  },
  {
    year: "2025",
    title: "Machine Learning Basics",
    description: "Learned classification, regression, and clustering algorithms using Python and built a simple ML model (Naive Bayes).",
    icon: machineLearning,
  },
  {
    year: "2025",
    title: "Backend Engineering",
    description: "Engineered the backend for a StudyBuddy using JavaScript (Node.js, Express, and Supabase). Designed and deployed the Machine Learning Model that classify students looking at their grades and attendance percentages and integrated it in StuddyBuddy web app.Implemented secure user authentication using Firebase services.Planning to integrate real-time chat functionality using Firebase services,Curated Websites and Youtube video recommendation for concept enhancement based on the subjects students are currently studying that day. Planning to utilize LLM APIs to generate personalized study plans and quizzes for students based on their learning progress and areas of improvement.",
    icon: study,
  },
];

export default function AboutTimeline() {
  const duplicatesPerIcon = 3;
  const [positions, setPositions] = useState([]);

  // Generate floating icons positions once after mount (client-side)
  useEffect(() => {
    const floatingIconsList = baseIcons.flatMap(icon =>
      Array.from({ length: duplicatesPerIcon }, () => icon)
    );

    const generatedPositions = floatingIconsList.map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      duration: 12 + Math.random() * 8,
      delay: Math.random() * 2,
      rotate: [0, 15, -15, 0],
      moveX: [
        Math.random() * window.innerWidth,
        Math.random() * window.innerWidth,
        Math.random() * window.innerWidth,
      ],
      moveY: [
        Math.random() * window.innerHeight,
        Math.random() * window.innerHeight,
        Math.random() * window.innerHeight,
      ],
    }));

    // Wrap setState in requestAnimationFrame to avoid cascading render warning
    requestAnimationFrame(() => {
      setPositions(generatedPositions);
    });
  }, []);

  // Floating icons list
  const floatingIconsList = baseIcons.flatMap(icon =>
    Array.from({ length: duplicatesPerIcon }, () => icon)
  );

  return (
    <section id="AboutMe" className="relative w-full bg-gradient-to-b from-blue-100 to-white py-20 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 -left-30 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>

      {/* Floating tech icons */}
      {positions.length > 0 &&
        floatingIconsList.map((icon, index) => {
          const pos = positions[index];
          return (
            <motion.div
              key={index}
              className="absolute opacity-70 drop-shadow-lg"
              initial={{ x: pos.x, y: pos.y }}
              animate={{
                x: [pos.x, ...pos.moveX, pos.x],
                y: [pos.y, ...pos.moveY, pos.y],
                rotate: pos.rotate,
              }}
              transition={{
                duration: pos.duration,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                delay: pos.delay,
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
              className={`flex w-full relative items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
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
                <p className="mt-2 text-gray-600">{item.description.replace(/'/g, "&apos;")}</p>
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
