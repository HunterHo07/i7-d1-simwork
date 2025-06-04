'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Pause, RotateCcw } from 'lucide-react';
import Button from './Button';

const MiniDemoModal = ({ isOpen, onClose, demoType = 'office' }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  
  const demoSteps = {
    office: [
      {
        title: "Enter the 2.5D Office",
        description: "Navigate through an immersive office environment",
        visual: "🏢"
      },
      {
        title: "Choose Your Workstation",
        description: "Click on different stations to access role-specific tools",
        visual: "💻"
      },
      {
        title: "Complete Real Tasks",
        description: "Solve actual work problems using professional tools",
        visual: "🎯"
      },
      {
        title: "Earn XP & Badges",
        description: "Track progress and build your verified skill profile",
        visual: "🏆"
      }
    ],
    coding: [
      {
        title: "Real Code Editor",
        description: "Use VS Code interface with syntax highlighting",
        visual: "⌨️"
      },
      {
        title: "Debug Live Issues",
        description: "Fix authentication bugs in real codebase",
        visual: "🐛"
      },
      {
        title: "Run Tests",
        description: "Execute unit tests and see results",
        visual: "✅"
      },
      {
        title: "Git Integration",
        description: "Commit changes and manage version control",
        visual: "📝"
      }
    ],
    design: [
      {
        title: "Design Canvas",
        description: "Use Figma-like interface for creating designs",
        visual: "🎨"
      },
      {
        title: "Brand Guidelines",
        description: "Follow real brand standards and color schemes",
        visual: "🎯"
      },
      {
        title: "Icon Creation",
        description: "Design mobile app icons with consistency",
        visual: "📱"
      },
      {
        title: "Export Assets",
        description: "Generate production-ready design files",
        visual: "📦"
      }
    ]
  };
  
  const steps = demoSteps[demoType] || demoSteps.office;
  
  useEffect(() => {
    if (!isOpen) {
      setCurrentStep(0);
      setIsPlaying(true);
      return;
    }
    
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % steps.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, [isOpen, isPlaying, steps.length]);
  
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };
  
  const restart = () => {
    setCurrentStep(0);
    setIsPlaying(true);
  };
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="bg-neutral-900 border border-neutral-700 rounded-xl shadow-2xl max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-neutral-700">
              <h3 className="text-lg font-semibold text-neutral-100">
                Mini Demo Preview
              </h3>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-neutral-800 text-neutral-400 hover:text-neutral-200 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            {/* Demo Content */}
            <div className="p-6">
              <div className="text-center mb-6">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-6xl mb-4"
                >
                  {steps[currentStep].visual}
                </motion.div>
                
                <motion.h4
                  key={`title-${currentStep}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-xl font-semibold text-neutral-100 mb-2"
                >
                  {steps[currentStep].title}
                </motion.h4>
                
                <motion.p
                  key={`desc-${currentStep}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-neutral-300"
                >
                  {steps[currentStep].description}
                </motion.p>
              </div>
              
              {/* Progress Indicators */}
              <div className="flex justify-center space-x-2 mb-6">
                {steps.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentStep 
                        ? 'bg-accent-cyan scale-125' 
                        : 'bg-neutral-600'
                    }`}
                  />
                ))}
              </div>
              
              {/* Controls */}
              <div className="flex items-center justify-center space-x-3 mb-6">
                <button
                  onClick={restart}
                  className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-accent-cyan transition-all duration-300"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                
                <button
                  onClick={togglePlayPause}
                  className="p-3 rounded-lg bg-accent-cyan hover:bg-accent-purple text-primary-900 transition-all duration-300"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>
              </div>
              
              {/* CTA */}
              <div className="text-center">
                <a href="/demo">
                  <Button variant="primary" size="lg" className="w-full">
                    Try Full Demo
                  </Button>
                </a>
                <p className="text-xs text-neutral-500 mt-2">
                  Experience the complete simulation environment
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MiniDemoModal;
