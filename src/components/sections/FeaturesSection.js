'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, 
  Palette, 
  Users, 
  Database, 
  Brain, 
  Play, 
  Trophy, 
  BarChart3,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Card, CardContent } from '../ui/Card';
import Button from '../ui/Button';
import MiniDemoModal from '../ui/MiniDemoModal';

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [showMiniDemo, setShowMiniDemo] = useState(false);
  const [demoType, setDemoType] = useState('office');
  
  const features = [
    {
      icon: Code,
      title: 'Developer Station',
      description: 'Cloud-based IDE with real coding challenges',
      details: 'Complete coding tasks using a full-featured development environment. Debug real code, implement features, and solve problems just like in actual work scenarios.',
      demo: 'Live code editor with syntax highlighting, debugging tools, and version control integration.',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: Palette,
      title: 'Design Bay',
      description: 'Interactive design canvas and prototyping tools',
      details: 'Create stunning designs using professional-grade tools. Work on real client briefs, design systems, and user experience challenges.',
      demo: 'Drag-and-drop design interface with layers, components, and real-time collaboration.',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10'
    },
    {
      icon: Users,
      title: 'PM Boardroom',
      description: 'Project management and team coordination',
      details: 'Lead virtual teams, manage sprints, and coordinate complex projects. Practice stakeholder communication and strategic planning.',
      demo: 'Interactive project boards, timeline management, and team communication tools.',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10'
    },
    {
      icon: Database,
      title: 'Data Station',
      description: 'Analytics and data processing challenges',
      details: 'Analyze real datasets, create visualizations, and derive actionable insights. Work with SQL, Python, and modern analytics tools.',
      demo: 'Interactive data tables, chart builders, and SQL query interfaces.',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500/10'
    },
    {
      icon: Brain,
      title: 'AI Prompt Lab',
      description: 'AI interaction and prompt engineering',
      details: 'Master the art of AI communication. Create effective prompts, fine-tune models, and build AI-powered solutions.',
      demo: 'Chat interface with AI models, prompt optimization tools, and response analysis.',
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-cyan-500/10'
    }
  ];
  
  const benefits = [
    {
      icon: Play,
      title: 'Real-World Simulation',
      description: 'Experience actual work scenarios, not theoretical tests'
    },
    {
      icon: Trophy,
      title: 'Skill Verification',
      description: 'Earn verified badges and certificates for completed quests'
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Detailed insights into strengths, weaknesses, and growth areas'
    }
  ];
  
  const nextFeature = () => {
    setActiveFeature((prev) => (prev + 1) % features.length);
  };
  
  const prevFeature = () => {
    setActiveFeature((prev) => (prev - 1 + features.length) % features.length);
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-800 via-primary-900 to-primary-800" />
      <div className="absolute inset-0 bg-cyber-grid opacity-10" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
          >
            <span className="gradient-text">Immersive Workstations</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-neutral-300 max-w-3xl mx-auto"
          >
            Experience real work environments with professional tools and realistic challenges
          </motion.p>
        </motion.div>
        
        {/* Feature Carousel */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Feature Details */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={`inline-flex p-3 rounded-xl mb-6 ${features[activeFeature].bgColor}`}>
                    {(() => {
                      const IconComponent = features[activeFeature].icon;
                      return <IconComponent className="w-8 h-8 text-white" />;
                    })()}
                  </div>
                  
                  <h3 className="text-3xl font-bold text-neutral-100 mb-4">
                    {features[activeFeature].title}
                  </h3>
                  
                  <p className="text-lg text-neutral-300 mb-6">
                    {features[activeFeature].details}
                  </p>
                  
                  <div className="bg-neutral-800/50 p-4 rounded-lg border border-neutral-700 mb-6">
                    <p className="text-sm text-neutral-400 mb-2">Demo Preview:</p>
                    <p className="text-neutral-200">{features[activeFeature].demo}</p>
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button
                      variant="primary"
                      size="lg"
                      onClick={() => {
                        const stationMap = {
                          'Developer Station': 'coding',
                          'Design Bay': 'design',
                          'PM Boardroom': 'office',
                          'Data Station': 'office',
                          'AI Prompt Lab': 'office'
                        };
                        setDemoType(stationMap[features[activeFeature].title] || 'office');
                        setShowMiniDemo(true);
                      }}
                    >
                      Watch Demo
                    </Button>
                    <a href="/demo">
                      <Button variant="secondary" size="lg">
                        Try Live
                      </Button>
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
            
            {/* Feature Visualization */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl p-8 border border-neutral-700">
                {/* Mock Interface */}
                <div className="bg-primary-900 rounded-lg p-6 mb-4">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeFeature}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-3"
                    >
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className="flex items-center space-x-3">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${features[activeFeature].color}`}></div>
                          <div className="h-2 bg-neutral-700 rounded flex-1"></div>
                          <div className="h-2 w-16 bg-neutral-600 rounded"></div>
                        </div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>
                
                {/* Navigation */}
                <div className="flex justify-between items-center">
                  <button
                    onClick={prevFeature}
                    className="p-2 rounded-lg bg-neutral-700 hover:bg-neutral-600 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  
                  <div className="flex space-x-2">
                    {features.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveFeature(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === activeFeature 
                            ? 'bg-accent-cyan scale-125' 
                            : 'bg-neutral-600 hover:bg-neutral-500'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <button
                    onClick={nextFeature}
                    className="p-2 rounded-lg bg-neutral-700 hover:bg-neutral-600 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <Card variant="glass" className="h-full text-center hover:shadow-glow transition-all duration-300">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <benefit.icon className="w-12 h-12 mx-auto text-accent-cyan group-hover:text-accent-purple transition-colors duration-300" />
                  </div>
                  <h4 className="text-xl font-semibold text-neutral-100 mb-4">
                    {benefit.title}
                  </h4>
                  <p className="text-neutral-400">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Auto-advance feature carousel */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-accent-cyan/10 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      {/* Mini Demo Modal */}
      <MiniDemoModal
        isOpen={showMiniDemo}
        onClose={() => setShowMiniDemo(false)}
        demoType={demoType}
      />
    </section>
  );
};

export default FeaturesSection;
