"use client"; 
import Image from "next/image";
import hikingImg from "../../public/images/hiking.jpg";
import freelanceImg from "../../public/images/freelance.jpg";
import noduleDetection from "../../public/images/nodules.png";
import nycTaxi from "../../public/images/nyc-taxi.jpg";
import decisionTree from "../../public/images/145.png";
import naiveBayes from "../../public/images/naive-bayes.png";
import NaiveBayes from "../../public/images/NB2.png";
import studdy from "../../public/images/buddy.jpg";
import modelCollapse from "../../public/images/model_collapse.png";
import dnn from "../../public/images/DNN.png";
import fuelLogbook from "../../public/images/data_analysis.jpg";
import surveillanceBot from "../../public/images/turtlebot.jpg";
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
    link: "https://hiking-logbook-mu.vercel.app/",
  },
  
     {
    title: "Machine Learning Model:Naive Bayes-Food Reviews Classifier",
    description:
      "Built a Naive Bayes classifier from scratch to classify food reviews as positive or negative on a dataset that contains 21 food reviews. Implemented preprocessing, tokenization, probability calculation, and prediction logic without using pre-built libraries for the core algorithm.",
    image: naiveBayes,
    tech: [
      "Python",
      "Numpy",
      
    ],
    link: "https://github.com/Gideon-workspace/Naive-Bayes-Classifying-Food-Reviews/blob/main/ML%20Lab%201.1%20-%20Naive%20Bayes%20Pt%201%20(4).ipynb",
  },
   {
    title: "Machine Learning Model:Naive Bayes-Digit and Banknotes Classification",
    description:
      "A collection of Naive Bayes classifiers implemented from scratch, demonstrating binary and multiclass classification on real-world datasets. The projects include Banknote Legitimacy Classification and Handwritten Digit Classification, highlighting the mathematical foundations of Naive Bayes.Banknote Legitimacy Classification – Detect whether banknotes are genuine or counterfeit based on statistical features.Digit Classification – Recognize handwritten digits from pixel data.",
    image: NaiveBayes,
    tech: [
      "Python",
      "Numpy",
      "Pandas",
      "Matplotlib",
      
    ],
    link: "https://github.com/Gideon-workspace/Naive-Bayes-Banknotes-and-Digit-Classification/blob/main/ML%20Lab%201.2%20-%20Naive%20Bayes%20Pt%202.ipynb",
  },
    {
    title: "Machine Learning Model:Gradient Boosting Decision Tree Classifier",
    description:
      "This project uses Gradient Boosting, an ensemble machine learning algorithm, to classify students based on their exam scores and attendance percentages. The model predicts student performance categories, helping educators and academic systems better understand learning patterns and potential outcomes.This solution is being integrated into StuddyBuddy, a web application currently under development, to support data-driven academic insights.",
    image: decisionTree,
    tech: [
      "Python",
      "Matplotlib",
      "Pandas",
      "Scikit-Learn",
      "Seaborn",
      "Scipy",
      
    ],
    link: "https://github.com/Gideon-workspace/Gradient-Boosting/blob/main/Student_Classification_Model.ipynb",
    
    },


    {
  title: "Machine Learning Model: Random Forest & DNN Classifiers",
  description: "This project implements and evaluates classical and deep learning ensemble models (Random Forest and a Dense Neural Network/MLP) to classify mushrooms as edible or poisonous based on physical traits. Features were optimized using Chi-Square statistical selection, reducing dimensionality while maintaining maximum model robustness. The system analyzes features such as odor and gill color to achieve flawless predictive classification, highlighting feature efficiency in real-world biological datasets.",
  image: dnn,
  tech: [
    "Python",
    "Keras",
    "Scikit-Learn",
    "Scipy",
    "Pandas"
   
  ],
  link: "https://github.com/Gideon-workspace/Multi-Layer-Perceptron"
},

{
  title: "SurveillanceBot: Manual Mapping & Navigation System",
  description: "SurveillanceBot is an autonomous indoor robotic system built using a TurtleBot within a simulated environment. The pipeline seamlessly integrates SLAM for drift-free environment mapping, configuration space obstacle inflation using NumPy vector matrices, optimal pathfinding via a custom A* search algorithm, and precise trajectory tracking powered by a closed-loop Proportional (P) motion controller.",
  image: surveillanceBot,
  tech: [
    "Python",
    "ROS",
    "Gazebo",
    "NumPy",
    "GMapping (SLAM)",
    "A* Algorithm"
  ],
  "link": "https://github.com/Gideon-workspace/SurveillanceBot/tree/main"
},


    
    {
    title: "StuddyBuddy: AI-Powered Academic Assistant(Still Under development)",
    description:
      "StuddyBuddy is a full-stack web application that helps students track study activities, collaborate with peers, and receive personalized academic support using data-driven insights and LLMs. The platform combines a friendly social environment with smart analytics to optimize learning outcomes.",
    image: studdy,
    tech: [
      "JavaScript",
      "Python",
      "ReactJS",
      "Node.js",
      "Firebase",
      "TailwindCSS",
      "YouTube API",
      "LLMs",
      
    ],
    link: "https://studdybuddy-fe152.web.app/",
    },

  {
  title: "Fuel Logbook Analytics & EDA",
  description: 
    "A data science pipeline that performs cleaning, metric unit conversions, and statistical analysis on a global fuel logbook dataset. Features outlier detection, random forest feature importance modeling, and driver behavioral analysis.",
  image: fuelLogbook, // Update this variable name to match your assets
  tech: [
    "Python",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "Scikit-Learn",
    "Jupyter"
  ],
  link: "https://github.com/Gideon-workspace/fuel-efficiency-analysis-eda", // Replace with your actual repo link
},
{
  title: "Model Collapse in Causal Transformers",
  description:
    "A mechanistic interpretability study of how training on self-generated data degrades causal transformers. Combines synthetic data generation and in-context learning experiments with analyses of induction heads, attention circuits, activation patching, and embedding geometry to trace how model collapse changes learned representations and performance.",
  image: modelCollapse, // Update this variable name to match your assets
  tech: [
    "Python",
    "PyTorch",
    "NumPy",
    "Matplotlib",
    "Jupyter",
  ],
  link: "https://github.com/Gideon-workspace/model-collapse", // Replace with your actual repo link
},
{
  title: "NYC Taxi Trips: Geospatial & Time-Series Analysis",
  description:
    "An end-to-end analysis of 1.5 million NYC taxi trips from 2016. Covers outlier removal, feature engineering (distance, speed, day of week), demand patterns by hour, weekday and holiday, and pickup heatmaps. Uses DBSCAN to find late-night and evening hotspots, models airport travel times to JFK and Newark, and compares PCA, t-SNE, and UMAP embeddings with density-based clustering to identify distinct types of trips.",
  image: nycTaxi, // Update this variable name to match your assets
  tech: [
    "Python",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "GeoPandas",
    "Folium",
    "Scikit-Learn",
    "UMAP",
    "Jupyter",
  ],
  link: "https://github.com/Gideon-workspace/nyc-taxi-data-analysis", // Replace with your actual repo link
},
{
  title: "Content-Aware Downsampling for Pulmonary Nodule Detection",
  description:
    "A research project evaluating whether Local Importance-based Pooling (LIP), a content-aware downsampling method from natural image classification, can improve small pulmonary nodule detection in chest X-rays. Benchmarks LIP against standard pooling and strided downsampling across the NODE21 and JSRT datasets.",
  image: noduleDetection, // Update this variable name to match your assets
  tech: [
    "Python",
    "PyTorch",
    "NumPy",
    "OpenCV",
    "Matplotlib",
    "Jupyter",
  ],
  link: "https://github.com/Gideon-workspace/Small-Pulmonary-Nodule-Detection", // Replace with your actual repo link
}

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