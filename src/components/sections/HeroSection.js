'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Zap, Users, Target } from 'lucide-react';
import Button from '../ui/Button';
import ThreeBackground from '../3d/ThreeBackground';

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const phrases = [
    'Prove your skills. Play your job.',
    'Not a test—real work, simulated.',
    'Discover talent in action.',
    'The open-world job trial.'
  ];
  
  // Typing animation effect
  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 1000 : 2000;
    
    const timer = setTimeout(() => {
      if (!isDeleting && typedText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      } else {
        setTypedText(prev => 
          isDeleting 
            ? prev.slice(0, -1)
            : currentPhrase.slice(0, prev.length + 1)
        );
      }
    }, typingSpeed);
    
    return () => clearTimeout(timer);
  }, [typedText, currentPhraseIndex, isDeleting, phrases]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };
  
  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };
  
  const stats = [
    { icon: Users, value: '10K+', label: 'Active Users' },
    { icon: Target, value: '95%', label: 'Accuracy Rate' },
    { icon: Zap, value: '60%', label: 'Faster Hiring' }
  ];
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <ThreeBackground />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-primary-800/60 to-primary-700/80" />
      
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20" />
      
      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Main Heading */}
        <motion.div variants={itemVariants} className="mb-8">
          <motion.h1 
            className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-6"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="gradient-text">SimWork</span>
          </motion.h1>
          
          <motion.h2 
            className="text-xl sm:text-2xl lg:text-4xl font-semibold text-neutral-200 mb-4"
            variants={itemVariants}
          >
            The Future of Work Simulation
          </motion.h2>
          
          {/* Typing Animation */}
          <motion.div 
            variants={itemVariants}
            className="h-16 flex items-center justify-center"
          >
            <span className="text-lg sm:text-xl lg:text-2xl text-accent-cyan font-mono">
              {typedText}
              <span className="animate-blink">|</span>
            </span>
          </motion.div>
        </motion.div>
        
        {/* Description */}
        <motion.p 
          variants={itemVariants}
          className="text-lg sm:text-xl text-neutral-300 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Enter an immersive 2.5D office environment where you interact with real tools to complete 
          job-relevant quests. Prove your skills through action, not just words.
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <a href="/demo">
            <Button
              variant="primary"
              size="xl"
              className="group"
            >
              <Play size={20} className="mr-2 group-hover:animate-pulse" />
              Start Demo
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
          
          <a href="/pitch">
            <Button
              variant="secondary"
              size="xl"
            >
              Watch Pitch
            </Button>
          </a>
        </motion.div>
        
        {/* Stats */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={floatingVariants}
              animate="animate"
              style={{ animationDelay: `${index * 0.5}s` }}
              className="glass-effect p-6 rounded-xl text-center group hover:shadow-glow transition-all duration-300"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-accent-cyan group-hover:text-accent-purple transition-colors" />
              <div className="text-2xl font-bold text-neutral-100 mb-1">{stat.value}</div>
              <div className="text-sm text-neutral-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-accent-cyan rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-accent-cyan rounded-full mt-2"
            />
          </motion.div>
          <p className="text-xs text-neutral-400 mt-2">Scroll to explore</p>
        </motion.div>
      </motion.div>
      
      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 border border-accent-purple rounded-full opacity-20"
        animate={{ 
          rotate: 360,
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity }
        }}
      />
      
      <motion.div
        className="absolute bottom-20 right-10 w-16 h-16 border border-accent-cyan rounded-lg opacity-20"
        animate={{ 
          rotate: -360,
          y: [-20, 20, -20]
        }}
        transition={{ 
          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          y: { duration: 3, repeat: Infinity }
        }}
      />
      
      <motion.div
        className="absolute top-1/2 right-20 w-12 h-12 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-full opacity-10"
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity 
        }}
      />
    </section>
  );
};

export default HeroSection;
