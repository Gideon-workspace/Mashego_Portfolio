"use client"; 
import Image from "next/image";
import hikingImg from "../../public/images/hiking.jpg";
import freelanceImg from "../../public/images/freelance.jpg";
import robot from "../../public/images/ml.jpg";
import decisionTree from "../../public/images/decision-tree.png";
import naiveBayes from "../../public/images/naive-bayes.png";
import NaiveBayes from "../../public/images/NB2.png";
import { motion } from "framer-motion";

const projects = [

  {
    title: "Freelancio: Freelance Marketplace",
    description:
      "A dynamic freelance marketplace connecting skilled freelancers with clients. Features include secure payments, real-time messaging, and a robust review system to ensure trust and quality.",
    image: freelanceImg,
    tech: ["JavaScript", "ReactJS", "Node.js", "Express", "MongoDB", "TailwindCSS"],
    link: "https://victorious-tree-0efc89c00.6.azurestaticapps.net/",
  },
    {
    title: "Trailo: Hiking Logbook",
    description:
      "A full-featured web platform modernizing the traditional hiking logbook. Users can track, plan, and socialize around outdoor activities with detailed hike logging, collaborative trip planning, and a social feed.",
    image: hikingImg,
    tech: [
      "JavaScript",
      "ReactJS",
      "Node.js",
      "Supabase",
      "TailwindCSS",
      "Mapbox API",
      "OpenWeather API",
    ],
    link: "https://hiking-logbook-fchkhdddb7hrghau.southafricanorth-01.azurewebsites.net/",
  },
  
     {
    title: "Machine Learning Model:Naive Bayes-Food Reviews Classifier",
    description:
      "Built a Naive Bayes classifier from scratch to classify food reviews as positive or negative on a dataset that contains 21 food reviews. Implemented preprocessing, tokenization, probability calculation, and prediction logic without using pre-built libraries for the core algorithm.",
    image: naiveBayes,
    tech: [
      "Python",
      
    ],
    link: "https://nbviewer.org/github/Gideon-workspace/Naive-Bayes-Classifying-Food-Reviews/blob/main/ML%20Lab%201.1%20-%20Naive%20Bayes%20Pt%201%20(4).ipynb?flush_cache=true",
  },
   {
    title: "Machine Learning Model:Naive Bayes-Digit and Banknotes Classification",
    description:
      "A collection of Naive Bayes classifiers implemented from scratch, demonstrating binary and multiclass classification on real-world datasets. The projects include Banknote Legitimacy Classification and Handwritten Digit Classification, highlighting the mathematical foundations of Naive Bayes.Banknote Legitimacy Classification – Detect whether banknotes are genuine or counterfeit based on statistical features.Digit Classification – Recognize handwritten digits from pixel data.",
    image: NaiveBayes,
    tech: [
      "Python",
      
    ],
    link: "https://nbviewer.org/github/Gideon-workspace/Naive-Bayes-Banknotes-and-Digit-Classification/blob/main/ML%20Lab%201.2%20-%20Naive%20Bayes%20Pt%202.ipynb",
  },
  
];

export default function ProjectsDeck() {
  return (
    <section
      id="projects"
      className="w-full py-20 rounded-b-4xl bg-gradient-to-b from-blue-50 to-white overflow-hidden shadow-xl"
    >
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-bold text-center text-black mb-16">
          My Projects
        </h2>

        {/* Deck of cards - Corrected Hybrid Layout */}
        <div 
          // Default (Mobile): flex-col for stacking, items-center to center the cards
          // Medium (md:): grid layout with 2 columns, justify-items-center for centering cards in the grid
          className="flex flex-col items-center px-2 gap-8
                     md:grid md:grid-cols-3 lg:grid-cols-3 md:justify-items-center md:items-start md:max-w-7xl md:mx-auto "
        >
          {projects.map((project, index) => (
              <motion.a
              href={project.link}
              key={index}
              className="w-full max-w-lg bg-white p-6 rounded-xl shadow-lg cursor-pointer"
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, amount: 0.3 }} 
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              whileHover={{ scale: 1.03, y: -3, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }} // hover animation
            >
              <div className="relative h-58 w-full rounded-xl overflow-hidden mb-3">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="rounded-xl"
                />
              </div>
              <h3 className="text-xl text-black font-semibold mb-1">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm mb-2">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((techItem, idx) => (
                  <span
                    key={idx}
                    className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-xs font-semibold"
                  >
                    {techItem}
                  </span>
                ))}
              </div>
           </motion.a>

          ))}
        </div>
      </div>
    </section>
  );
}