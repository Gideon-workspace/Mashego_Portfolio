"use client"; 
import Image from "next/image";
import web from "../../public/images/web.png";
import datacleaning from "../../public/images/data-cleaning.png";
import ml from "../../public/images/ml.png";
import backend from "../../public/images/backend.png";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",   
    description:
      "Building responsive and dynamic web applications using modern technologies like React, Next.js, and Node.js.",
    image: web,
  },
  {
    title: "Backend Engineering",
    description:
      "Designing and implementing robust backend services with Node.js, Express, and databases like MongoDB and Supabase.",
    image: backend,
  },
  {
    title: "Data Analysis",
    description:    
      "Processing and analyzing data to extract insights using Python, Excel, and visualization tools.",
    image: datacleaning,
  },
  {
    title: "Machine Learning",
    description:    
      "Training and deploying machine learning models using Python.",
    image: ml,
  },
];

export default function Services() {
  return (
    <section id = "services" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center text-white mb-20 mt-15">
          My Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center cursor-pointer transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="w-24 h-24 mb-6">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
