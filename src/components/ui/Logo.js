'use client';

import { motion } from 'framer-motion';

const Logo = ({ size = 'md', className = '', showText = true, animated = true }) => {
  const sizes = {
    sm: { icon: 'w-8 h-8', text: 'text-lg' },
    md: { icon: 'w-10 h-10', text: 'text-xl' },
    lg: { icon: 'w-12 h-12', text: 'text-2xl' },
    xl: { icon: 'w-16 h-16', text: 'text-3xl' },
  };
  
  const iconVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: { 
      scale: 1, 
      rotate: 0,
      transition: { 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        duration: 0.8 
      }
    },
    hover: { 
      scale: 1.1, 
      rotate: 5,
      transition: { duration: 0.2 }
    }
  };
  
  const textVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: { delay: 0.3, duration: 0.5 }
    }
  };
  
  const LogoIcon = () => (
    <motion.div
      className={`${sizes[size].icon} relative`}
      variants={animated ? iconVariants : {}}
      initial={animated ? "initial" : false}
      animate={animated ? "animate" : false}
      whileHover={animated ? "hover" : false}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Outer Ring */}
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="url(#gradient1)"
          strokeWidth="2"
          fill="none"
          className="animate-spin"
          style={{ animationDuration: '8s' }}
        />
        
        {/* Inner Hexagon */}
        <polygon
          points="50,15 75,30 75,60 50,75 25,60 25,30"
          stroke="url(#gradient2)"
          strokeWidth="2"
          fill="url(#gradient3)"
          className="animate-pulse"
        />
        
        {/* Center Brain/Circuit Pattern */}
        <g transform="translate(50,50)">
          {/* Central Node */}
          <circle cx="0" cy="0" r="8" fill="url(#gradient4)" />
          
          {/* Neural Connections */}
          <line x1="-15" y1="-10" x2="15" y2="10" stroke="#00f5ff" strokeWidth="1.5" opacity="0.8" />
          <line x1="-15" y1="10" x2="15" y2="-10" stroke="#8b5cf6" strokeWidth="1.5" opacity="0.8" />
          <line x1="-20" y1="0" x2="20" y2="0" stroke="#00f5ff" strokeWidth="1.5" opacity="0.6" />
          <line x1="0" y1="-20" x2="0" y2="20" stroke="#8b5cf6" strokeWidth="1.5" opacity="0.6" />
          
          {/* Outer Nodes */}
          <circle cx="-15" cy="-10" r="3" fill="#00f5ff" />
          <circle cx="15" cy="-10" r="3" fill="#8b5cf6" />
          <circle cx="-15" cy="10" r="3" fill="#8b5cf6" />
          <circle cx="15" cy="10" r="3" fill="#00f5ff" />
          <circle cx="-20" cy="0" r="2" fill="#00f5ff" />
          <circle cx="20" cy="0" r="2" fill="#8b5cf6" />
          <circle cx="0" cy="-20" r="2" fill="#8b5cf6" />
          <circle cx="0" cy="20" r="2" fill="#00f5ff" />
        </g>
        
        {/* Gradients */}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f5ff" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#00f5ff" />
          </linearGradient>
          <radialGradient id="gradient3" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(0, 245, 255, 0.1)" />
            <stop offset="100%" stopColor="rgba(139, 92, 246, 0.05)" />
          </radialGradient>
          <radialGradient id="gradient4" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00f5ff" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </radialGradient>
        </defs>
      </svg>
    </motion.div>
  );
  
  return (
    <motion.div 
      className={`flex items-center space-x-3 ${className}`}
      whileHover={animated ? { scale: 1.05 } : {}}
      transition={{ duration: 0.2 }}
    >
      <LogoIcon />
      {showText && (
        <motion.div
          variants={animated ? textVariants : {}}
          initial={animated ? "initial" : false}
          animate={animated ? "animate" : false}
          className="flex flex-col"
        >
          <span className={`font-display font-bold gradient-text ${sizes[size].text}`}>
            SimWork
          </span>
          <span className="text-xs text-neutral-400 -mt-1">
            Future of Work
          </span>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Logo;
