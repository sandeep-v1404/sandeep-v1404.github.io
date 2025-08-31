import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useSection } from "../hooks/useContent";
import Section from "./ui/Section";
import { Content } from "../data/types";

const Hero = () => {
  const hero = useSection("hero") as Content["hero"];

  return (
    <Section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-blue-600">{hero.name}</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-8">
            {hero.title}
          </h2>
          <p className="text-gray-600 mb-8 text-lg">{hero.description}</p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get in touch
            <ArrowRight className="ml-2" size={20} />
          </motion.a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <img
            src={hero.image}
            alt="Developer workspace"
            className="rounded-lg shadow-2xl"
          />
        </motion.div>
      </div>
    </Section>
  );
};

export default Hero;
