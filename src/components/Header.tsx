import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useContent } from '../hooks/useContent';
import IconWrapper from './ui/IconWrapper';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { header } = useContent();

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold"
          >
            {header.logo}
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {header.menuItems.map((item) => (
              <motion.a
                key={item.title}
                href={item.href}
                whileHover={{ scale: 1.1 }}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item.title}
              </motion.a>
            ))}
            <div className="flex items-center space-x-4">
              {Object.entries(header.socialLinks).map(([platform, url]) => (
                <motion.a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-600 hover:text-gray-900"
                >
                  <IconWrapper name={platform} size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4"
          >
            {header.menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="block py-2 text-gray-600 hover:text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </a>
            ))}
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;