import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, className = '', children }) => {
  return (
    <section id={id} className={`py-20 ${className}`}>
      <div className="container mx-auto px-6">
        {children}
      </div>
    </section>
  );
};

export default Section;