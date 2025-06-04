'use client';

import { forwardRef } from 'react';
import { motion } from 'framer-motion';

const Card = forwardRef(({ 
  children, 
  variant = 'default', 
  className = '', 
  hover = true,
  glow = false,
  ...props 
}, ref) => {
  const baseClasses = 'rounded-xl transition-all duration-300';
  
  const variants = {
    default: 'bg-neutral-800/50 border border-neutral-700 backdrop-blur-sm',
    glass: 'bg-white/5 border border-white/10 backdrop-blur-md',
    solid: 'bg-neutral-800 border border-neutral-700',
    gradient: 'bg-gradient-to-br from-primary-800 to-primary-700 border border-accent-cyan/20',
    neon: 'bg-primary-800/80 border border-accent-cyan neon-border',
  };
  
  const hoverClasses = hover ? 'hover:scale-105 hover:shadow-glow-lg cursor-pointer' : '';
  const glowClasses = glow ? 'shadow-glow animate-glow-pulse' : '';
  
  const classes = `${baseClasses} ${variants[variant]} ${hoverClasses} ${glowClasses} ${className}`;
  
  return (
    <motion.div
      ref={ref}
      className={classes}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { 
        scale: 1.02,
        boxShadow: '0 0 30px rgba(0, 245, 255, 0.3)'
      } : {}}
      {...props}
    >
      {children}
    </motion.div>
  );
});

Card.displayName = 'Card';

const CardHeader = forwardRef(({ children, className = '', ...props }, ref) => (
  <div ref={ref} className={`p-6 pb-0 ${className}`} {...props}>
    {children}
  </div>
));

CardHeader.displayName = 'CardHeader';

const CardContent = forwardRef(({ children, className = '', ...props }, ref) => (
  <div ref={ref} className={`p-6 ${className}`} {...props}>
    {children}
  </div>
));

CardContent.displayName = 'CardContent';

const CardFooter = forwardRef(({ children, className = '', ...props }, ref) => (
  <div ref={ref} className={`p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
));

CardFooter.displayName = 'CardFooter';

const CardTitle = forwardRef(({ children, className = '', ...props }, ref) => (
  <h3 ref={ref} className={`text-xl font-semibold text-neutral-100 ${className}`} {...props}>
    {children}
  </h3>
));

CardTitle.displayName = 'CardTitle';

const CardDescription = forwardRef(({ children, className = '', ...props }, ref) => (
  <p ref={ref} className={`text-neutral-300 mt-2 ${className}`} {...props}>
    {children}
  </p>
));

CardDescription.displayName = 'CardDescription';

export { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription };
