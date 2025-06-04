'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Palette, 
  Users, 
  Database, 
  Brain,
  Coffee,
  Monitor,
  Printer
} from 'lucide-react';

const OfficeEnvironment = ({ onWorkstationClick, activeWorkstation }) => {
  const canvasRef = useRef(null);
  const [hoveredStation, setHoveredStation] = useState(null);
  const [character, setCharacter] = useState({ x: 0, y: 0 }); // Will be set responsively
  const [keys, setKeys] = useState({});
  const [isMoving, setIsMoving] = useState(false);
  const [canvasSize, setCanvasSize] = useState({ width: 800, height: 600 });

  // Responsive workstation positioning based on canvas size
  const getResponsiveWorkstations = (canvasWidth, canvasHeight) => [
    {
      id: 'developer',
      name: 'Developer Station',
      icon: Code,
      x: canvasWidth * 0.25, // 15% from left
      y: canvasHeight * 0.45, // 75% from top
      width: Math.max(100, canvasWidth * 0.12), // Responsive width
      height: Math.max(60, canvasHeight * 0.08), // Responsive height
      color: '#00f5ff',
      description: 'Code, debug, and build applications'
    },
    {
      id: 'designer',
      name: 'Design Bay',
      icon: Palette,
      x: canvasWidth * 0.45, // 35% from left
      y: canvasHeight * 0.42, // 72% from top
      width: Math.max(100, canvasWidth * 0.12),
      height: Math.max(60, canvasHeight * 0.08),
      color: '#8b5cf6',
      description: 'Create stunning visual designs'
    },
    {
      id: 'pm',
      name: 'PM Boardroom',
      icon: Users,
      x: canvasWidth * 0.65, // 55% from left
      y: canvasHeight * 0.45, // 75% from top
      width: Math.max(120, canvasWidth * 0.14), // Slightly larger
      height: Math.max(80, canvasHeight * 0.1),
      color: '#10b981',
      description: 'Manage projects and teams'
    },
    {
      id: 'data',
      name: 'Data Station',
      icon: Database,
      x: canvasWidth * 0.35, // 25% from left
      y: canvasHeight * 0.65, // 85% from top
      width: Math.max(100, canvasWidth * 0.12),
      height: Math.max(60, canvasHeight * 0.08),
      color: '#f59e0b',
      description: 'Analyze data and create insights'
    },
    {
      id: 'ai',
      name: 'AI Prompt Lab',
      icon: Brain,
      x: canvasWidth * 0.55, // 45% from left
      y: canvasHeight * 0.65, // 85% from top
      width: Math.max(100, canvasWidth * 0.12),
      height: Math.max(60, canvasHeight * 0.08),
      color: '#ef4444',
      description: 'Master AI interactions'
    }
  ];

  // Responsive furniture positioning
  const getResponsiveFurniture = (canvasWidth, canvasHeight) => [
    {
      type: 'coffee',
      icon: Coffee,
      x: canvasWidth * 0.1,
      y: canvasHeight * 0.3,
      size: Math.max(20, canvasWidth * 0.03)
    },
    {
      type: 'printer',
      icon: Printer,
      x: canvasWidth * 0.8,
      y: canvasHeight * 0.25,
      size: Math.max(25, canvasWidth * 0.04)
    },
    {
      type: 'monitor',
      icon: Monitor,
      x: canvasWidth * 0.75,
      y: canvasHeight * 0.15,
      size: Math.max(25, canvasWidth * 0.035)
    }
  ];
  
  // Keyboard movement
  useEffect(() => {
    const handleKeyDown = (e) => {
      setKeys(prev => ({ ...prev, [e.key.toLowerCase()]: true }));
    };

    const handleKeyUp = (e) => {
      setKeys(prev => ({ ...prev, [e.key.toLowerCase()]: false }));
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  // Character movement with keyboard
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const moveSpeed = Math.max(2, rect.width * 0.005); // Responsive move speed

    const interval = setInterval(() => {
      setCharacter(prev => {
        let newX = prev.x;
        let newY = prev.y;
        let moved = false;

        if (keys['w'] || keys['arrowup']) {
          newY -= moveSpeed;
          moved = true;
        }
        if (keys['s'] || keys['arrowdown']) {
          newY += moveSpeed;
          moved = true;
        }
        if (keys['a'] || keys['arrowleft']) {
          newX -= moveSpeed;
          moved = true;
        }
        if (keys['d'] || keys['arrowright']) {
          newX += moveSpeed;
          moved = true;
        }

        setIsMoving(moved);

        // Responsive boundary checking
        const characterRadius = Math.max(15, rect.width * 0.02);
        newX = Math.max(characterRadius, Math.min(rect.width - characterRadius, newX));
        newY = Math.max(characterRadius, Math.min(rect.height - characterRadius, newY));

        return { x: newX, y: newY };
      });
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, [keys]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Focus canvas for keyboard events
    canvas.focus();

    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();

    // Update canvas size state and character position if not set
    setCanvasSize({ width: rect.width, height: rect.height });

    // Set character to center if not positioned yet
    if (character.x === 0 && character.y === 0) {
      setCharacter({
        x: rect.width * 0.5,
        y: rect.height * 0.4
      });
    }

    // Set canvas size
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';
    ctx.scale(dpr, dpr);

    // Get responsive positions
    const responsiveWorkstations = getResponsiveWorkstations(rect.width, rect.height);
    const responsiveFurniture = getResponsiveFurniture(rect.width, rect.height);

    const draw = () => {
      // Clear canvas
      ctx.clearRect(0, 0, rect.width, rect.height);

      // Draw floor grid
      ctx.strokeStyle = 'rgba(0, 245, 255, 0.1)';
      ctx.lineWidth = 1;
      for (let x = 0; x < rect.width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, rect.height);
        ctx.stroke();
      }
      for (let y = 0; y < rect.height; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(rect.width, y);
        ctx.stroke();
      }

      // Draw workstations
      responsiveWorkstations.forEach(station => {
        const isHovered = hoveredStation === station.id;
        const isActive = activeWorkstation === station.id;
        
        // Station base
        ctx.fillStyle = isActive ? station.color : 
                       isHovered ? `${station.color}80` : 
                       'rgba(255, 255, 255, 0.1)';
        ctx.fillRect(station.x, station.y, station.width, station.height);
        
        // Station border
        ctx.strokeStyle = station.color;
        ctx.lineWidth = isHovered || isActive ? 3 : 1;
        ctx.strokeRect(station.x, station.y, station.width, station.height);
        
        // Station glow effect
        if (isHovered || isActive) {
          ctx.shadowColor = station.color;
          ctx.shadowBlur = 20;
          ctx.strokeRect(station.x, station.y, station.width, station.height);
          ctx.shadowBlur = 0;
        }
        
        // Station label (responsive font size)
        ctx.fillStyle = '#ffffff';
        const fontSize = Math.max(10, rect.width * 0.012);
        ctx.font = `${fontSize}px Inter`;
        ctx.textAlign = 'center';
        ctx.fillText(
          station.name,
          station.x + station.width / 2,
          station.y + station.height + Math.max(15, rect.height * 0.03)
        );
      });
      
      // Draw character (responsive size)
      ctx.save();

      const baseRadius = Math.max(10, rect.width * 0.015);
      const shadowOffset = Math.max(12, rect.width * 0.02);
      const shadowWidth = Math.max(8, rect.width * 0.012);
      const shadowHeight = Math.max(4, rect.width * 0.006);

      // Character shadow
      ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
      ctx.beginPath();
      ctx.ellipse(character.x, character.y + shadowOffset, shadowWidth, shadowHeight, 0, 0, Math.PI * 2);
      ctx.fill();

      // Character body
      const radius = isMoving ? baseRadius * 1.1 : baseRadius;
      ctx.fillStyle = isMoving ? '#00ffff' : '#00f5ff';
      ctx.beginPath();
      ctx.arc(character.x, character.y, radius, 0, Math.PI * 2);
      ctx.fill();

      // Character glow
      ctx.shadowColor = isMoving ? '#00ffff' : '#00f5ff';
      ctx.shadowBlur = isMoving ? baseRadius * 1.3 : baseRadius;
      ctx.beginPath();
      ctx.arc(character.x, character.y, radius, 0, Math.PI * 2);
      ctx.fill();

      // Character border
      ctx.shadowBlur = 0;
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = Math.max(1, rect.width * 0.002);
      ctx.beginPath();
      ctx.arc(character.x, character.y, baseRadius, 0, Math.PI * 2);
      ctx.stroke();

      ctx.restore();
    };
    
    draw();
    
    const handleResize = () => {
      const newRect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = newRect.width * dpr;
      canvas.height = newRect.height * dpr;
      canvas.style.width = newRect.width + 'px';
      canvas.style.height = newRect.height + 'px';
      ctx.scale(dpr, dpr);
      draw();
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [hoveredStation, activeWorkstation, character]);
  
  const handleCanvasClick = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Get current responsive workstations
    const responsiveWorkstations = getResponsiveWorkstations(rect.width, rect.height);

    // Check if clicked on a workstation
    const clickedStation = responsiveWorkstations.find(station =>
      x >= station.x && x <= station.x + station.width &&
      y >= station.y && y <= station.y + station.height
    );

    if (clickedStation) {
      onWorkstationClick(clickedStation);
    } else {
      // Move character to clicked position
      setCharacter({ x, y });
    }
  };

  const handleCanvasMouseMove = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Get current responsive workstations
    const responsiveWorkstations = getResponsiveWorkstations(rect.width, rect.height);

    const hoveredStation = responsiveWorkstations.find(station =>
      x >= station.x && x <= station.x + station.width &&
      y >= station.y && y <= station.y + station.height
    );

    setHoveredStation(hoveredStation?.id || null);
  };
  
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
      {/* Canvas for 2.5D environment */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full cursor-pointer focus:outline-none"
        onClick={handleCanvasClick}
        onMouseMove={handleCanvasMouseMove}
        tabIndex={0}
      />
      
      {/* Interactive UI Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Workstation tooltips */}
        {(() => {
          const canvas = canvasRef.current;
          if (!canvas) return null;
          const rect = canvas.getBoundingClientRect();
          const responsiveWorkstations = getResponsiveWorkstations(rect.width, rect.height);

          return responsiveWorkstations.map(station => (
            <motion.div
              key={station.id}
              className={`absolute pointer-events-none transition-opacity duration-300 ${
                hoveredStation === station.id ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                left: station.x + station.width / 2,
                top: station.y - 60,
                transform: 'translateX(-50%)'
              }}
            >
              <div className="bg-neutral-900/90 backdrop-blur-sm border border-neutral-700 rounded-lg p-3 text-center">
                <div className="flex items-center justify-center mb-2">
                  <station.icon className="w-5 h-5 mr-2" style={{ color: station.color }} />
                  <span className="text-neutral-100 font-semibold text-sm">
                    {station.name}
                  </span>
                </div>
                <p className="text-neutral-400 text-xs">
                  {station.description}
                </p>
              </div>
            </motion.div>
          ));
        })()}
        
        {/* Character info */}
        <motion.div
          className="absolute bg-neutral-900/80 backdrop-blur-sm border border-accent-cyan rounded-lg p-2 text-xs text-neutral-100 pointer-events-none"
          style={{
            left: character.x + 20,
            top: character.y - 40,
          }}
          animate={{
            opacity: isMoving ? [1, 0.8, 1] : [0.7, 1, 0.7],
            scale: isMoving ? [1, 1.1, 1] : 1,
          }}
          transition={{
            duration: isMoving ? 0.5 : 2,
            repeat: Infinity,
          }}
        >
          {isMoving ? 'Moving...' : 'You'}
        </motion.div>
      </div>
      
      {/* Instructions */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-neutral-900/90 backdrop-blur-sm border border-neutral-700 rounded-lg p-4 text-center pointer-events-none">
        <p className="text-neutral-300 text-sm mb-2">
          <span className="text-accent-cyan">WASD/Arrow Keys</span> to move •
          <span className="text-accent-cyan">Click</span> workstations to interact
        </p>
        <div className="flex items-center justify-center space-x-4 text-xs text-neutral-400">
          <span>⌨️ WASD Movement</span>
          <span>🖱️ Click to Interact</span>
          <span>🎯 Complete Quests</span>
          <span>🏆 Earn XP</span>
        </div>
        <div className="text-xs text-accent-cyan mt-2">
          💡 Tip: Workstations are located in the bottom area for easy access
        </div>
      </div>
      
      {/* Ambient particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent-cyan rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default OfficeEnvironment;
