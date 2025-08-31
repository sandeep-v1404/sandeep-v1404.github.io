import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  description?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      {description && (
        <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
      )}
    </motion.div>
  );
};

export default SectionTitle;