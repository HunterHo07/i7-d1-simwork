'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Play, Users, Map, FileText, UserPlus } from 'lucide-react';
import Logo from './Logo';
import Button from './Button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navItems = [
    { name: 'Home', href: '/', icon: null },
    { name: 'Demo', href: '/demo', icon: Play },
    { name: 'Pitch Deck', href: '/pitch', icon: FileText },
    { name: 'Why Us', href: '/why-us', icon: Users },
    { name: 'Roadmap', href: '/roadmap', icon: Map },
  ];
  
  const navVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  
  const mobileMenuVariants = {
    hidden: { 
      opacity: 0, 
      x: "100%",
      transition: { duration: 0.3 }
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.3,
        staggerChildren: 0.1
      }
    }
  };
  
  const mobileItemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  };
  
  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-primary-900/95 backdrop-blur-md border-b border-neutral-800' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Logo size="md" />
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="relative text-neutral-300 hover:text-accent-cyan transition-colors duration-300 font-medium"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <span className="flex items-center space-x-2">
                    {item.icon && <item.icon size={16} />}
                    <span>{item.name}</span>
                  </span>
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-cyan to-accent-purple"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>
            
            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <a href="/signin">
                <Button variant="secondary" size="sm">
                  Sign In
                </Button>
              </a>
              <a href="/signup">
                <Button variant="primary" size="sm">
                  <UserPlus size={16} className="mr-2" />
                  Get Started
                </Button>
              </a>
            </div>
            
            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 rounded-lg text-neutral-300 hover:text-accent-cyan hover:bg-neutral-800 transition-colors duration-300"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            
            {/* Mobile Menu Panel */}
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="fixed top-0 right-0 h-full w-80 bg-primary-800/95 backdrop-blur-md border-l border-neutral-700 z-50 lg:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-neutral-700">
                  <Logo size="sm" />
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg text-neutral-300 hover:text-accent-cyan hover:bg-neutral-700 transition-colors duration-300"
                  >
                    <X size={20} />
                  </button>
                </div>
                
                {/* Navigation Items */}
                <div className="flex-1 py-6">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      variants={mobileItemVariants}
                      className="flex items-center space-x-3 px-6 py-4 text-neutral-300 hover:text-accent-cyan hover:bg-neutral-700/50 transition-colors duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.icon && <item.icon size={20} />}
                      <span className="font-medium">{item.name}</span>
                    </motion.a>
                  ))}
                </div>
                
                {/* CTA Buttons */}
                <div className="p-6 border-t border-neutral-700 space-y-3">
                  <a href="/signin">
                    <Button variant="outline" size="md" className="w-full">
                      Sign In
                    </Button>
                  </a>
                  <a href="/signup">
                    <Button variant="primary" size="md" className="w-full">
                      <UserPlus size={16} className="mr-2" />
                      Get Started
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
