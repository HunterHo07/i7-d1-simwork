'use client';

import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Clock, 
  Calendar, 
  Rocket,
  Users,
  Globe,
  Smartphone,
  Brain,
  Zap,
  Target,
  Award,
  TrendingUp
} from 'lucide-react';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import { Card, CardContent } from '@/components/ui/Card';

export default function RoadmapPage() {
  const roadmapPhases = [
    {
      phase: 'Phase 1',
      title: 'MVP Launch',
      status: 'completed',
      timeline: 'Q4 2023 - Q1 2024',
      description: 'Core platform with essential features',
      features: [
        '2.5D Office Environment',
        'Developer & Designer Stations',
        'Basic Quest System',
        'User Profiles & XP',
        'Recruiter Dashboard',
        'Real-time Analytics'
      ],
      icon: CheckCircle,
      color: 'text-accent-green',
      bgColor: 'bg-accent-green/10',
      borderColor: 'border-accent-green/30'
    },
    {
      phase: 'Phase 2',
      title: 'Enhanced Experience',
      status: 'in-progress',
      timeline: 'Q2 2024 - Q3 2024',
      description: 'Expanded roles and advanced features',
      features: [
        'PM & Data Analyst Stations',
        'AI Prompt Engineering Lab',
        'Advanced Quest Chains',
        'Team Collaboration Tools',
        'Custom Quest Builder',
        'API Integration'
      ],
      icon: Clock,
      color: 'text-accent-cyan',
      bgColor: 'bg-accent-cyan/10',
      borderColor: 'border-accent-cyan/30'
    },
    {
      phase: 'Phase 3',
      title: 'Scale & Mobile',
      status: 'planned',
      timeline: 'Q4 2024 - Q1 2025',
      description: 'Mobile apps and global expansion',
      features: [
        'iOS & Android Apps',
        'Offline Mode Support',
        'Multi-language Support',
        'Regional Servers',
        'Enterprise SSO',
        'White-label Solutions'
      ],
      icon: Smartphone,
      color: 'text-accent-purple',
      bgColor: 'bg-accent-purple/10',
      borderColor: 'border-accent-purple/30'
    },
    {
      phase: 'Phase 4',
      title: 'AI & VR Revolution',
      status: 'future',
      timeline: 'Q2 2025 - Q4 2025',
      description: 'Next-generation immersive experiences',
      features: [
        'VR/AR Office Environments',
        'AI-Powered Quest Generation',
        'Intelligent Skill Matching',
        'Predictive Analytics',
        'Voice Interactions',
        'Holographic Meetings'
      ],
      icon: Brain,
      color: 'text-accent-orange',
      bgColor: 'bg-accent-orange/10',
      borderColor: 'border-accent-orange/30'
    }
  ];
  
  const upcomingFeatures = [
    {
      title: 'Advanced Analytics Dashboard',
      description: 'Deep insights into candidate performance and hiring patterns',
      eta: 'Q2 2024',
      icon: TrendingUp,
      priority: 'High'
    },
    {
      title: 'Multiplayer Collaboration',
      description: 'Real-time team challenges and collaborative quests',
      eta: 'Q3 2024',
      icon: Users,
      priority: 'Medium'
    },
    {
      title: 'Skill Certification System',
      description: 'Industry-recognized certificates for completed quest trees',
      eta: 'Q4 2024',
      icon: Award,
      priority: 'High'
    },
    {
      title: 'Global Talent Marketplace',
      description: 'Connect verified talent with opportunities worldwide',
      eta: 'Q1 2025',
      icon: Globe,
      priority: 'Medium'
    }
  ];
  
  const milestones = [
    { date: 'Dec 2023', event: 'Beta Launch', status: 'completed' },
    { date: 'Feb 2024', event: '10K Users', status: 'completed' },
    { date: 'Apr 2024', event: 'Series A Funding', status: 'completed' },
    { date: 'Jun 2024', event: 'Enterprise Partnerships', status: 'in-progress' },
    { date: 'Sep 2024', event: 'Mobile App Launch', status: 'planned' },
    { date: 'Dec 2024', event: '100K Users', status: 'planned' },
    { date: 'Mar 2025', event: 'Global Expansion', status: 'planned' },
    { date: 'Jun 2025', event: 'VR Platform', status: 'future' }
  ];
  
  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-5 h-5 text-accent-green" />;
      case 'in-progress': return <Clock className="w-5 h-5 text-accent-cyan" />;
      case 'planned': return <Calendar className="w-5 h-5 text-accent-purple" />;
      case 'future': return <Rocket className="w-5 h-5 text-accent-orange" />;
      default: return <Calendar className="w-5 h-5 text-neutral-400" />;
    }
  };
  
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'text-accent-red';
      case 'Medium': return 'text-accent-orange';
      case 'Low': return 'text-accent-green';
      default: return 'text-neutral-400';
    }
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
    <main className="min-h-screen bg-primary-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-cyber-grid opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="gradient-text">Product Roadmap</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-neutral-300 max-w-3xl mx-auto"
          >
            Our journey to revolutionize hiring through immersive simulation technology. See what's coming next.
          </motion.p>
        </div>
      </section>
      
      {/* Roadmap Phases */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-12"
          >
            {roadmapPhases.map((phase, index) => (
              <motion.div key={phase.phase} variants={itemVariants}>
                <Card 
                  variant="glass" 
                  className={`${phase.borderColor} hover:shadow-glow transition-all duration-300`}
                >
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Phase Info */}
                      <div className="lg:col-span-1">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className={`p-3 rounded-xl ${phase.bgColor}`}>
                            <phase.icon className={`w-8 h-8 ${phase.color}`} />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-neutral-100">
                              {phase.title}
                            </h3>
                            <p className={`text-sm font-medium ${phase.color}`}>
                              {phase.phase}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2 mb-4">
                          {getStatusIcon(phase.status)}
                          <span className="text-sm text-neutral-400">
                            {phase.timeline}
                          </span>
                        </div>
                        
                        <p className="text-neutral-300">
                          {phase.description}
                        </p>
                      </div>
                      
                      {/* Features */}
                      <div className="lg:col-span-2">
                        <h4 className="text-lg font-semibold text-neutral-100 mb-4">
                          Key Features
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {phase.features.map((feature, featureIndex) => (
                            <div 
                              key={featureIndex}
                              className="flex items-center space-x-3 p-3 bg-neutral-800/50 rounded-lg"
                            >
                              {phase.status === 'completed' ? (
                                <CheckCircle className="w-5 h-5 text-accent-green flex-shrink-0" />
                              ) : phase.status === 'in-progress' ? (
                                <Clock className="w-5 h-5 text-accent-cyan flex-shrink-0" />
                              ) : (
                                <div className="w-5 h-5 border-2 border-neutral-600 rounded-full flex-shrink-0" />
                              )}
                              <span className="text-neutral-200 text-sm">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Upcoming Features */}
      <section className="py-20 bg-gradient-to-b from-primary-800 to-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              <span className="gradient-text">Upcoming Features</span>
            </h2>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Exciting new capabilities coming to SimWork in the near future.
            </p>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {upcomingFeatures.map((feature, index) => (
              <motion.div key={feature.title} variants={itemVariants}>
                <Card variant="glass" className="h-full hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-xl bg-neutral-800">
                        <feature.icon className="w-6 h-6 text-accent-cyan" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-neutral-100">
                            {feature.title}
                          </h3>
                          <span className={`text-xs font-medium px-2 py-1 rounded-full ${getPriorityColor(feature.priority)}`}>
                            {feature.priority}
                          </span>
                        </div>
                        <p className="text-neutral-300 mb-3">
                          {feature.description}
                        </p>
                        <div className="text-sm text-accent-cyan">
                          ETA: {feature.eta}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              <span className="gradient-text">Key Milestones</span>
            </h2>
            <p className="text-xl text-neutral-300">
              Major achievements and upcoming targets on our journey.
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-cyan via-accent-purple to-accent-orange"></div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.date}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative flex items-center space-x-6"
                >
                  {/* Timeline Dot */}
                  <div className={`relative z-10 w-4 h-4 rounded-full ${
                    milestone.status === 'completed' ? 'bg-accent-green' :
                    milestone.status === 'in-progress' ? 'bg-accent-cyan' :
                    milestone.status === 'planned' ? 'bg-accent-purple' :
                    'bg-accent-orange'
                  }`}>
                    <div className={`absolute inset-0 rounded-full animate-ping ${
                      milestone.status === 'in-progress' ? 'bg-accent-cyan' : ''
                    }`}></div>
                  </div>
                  
                  {/* Milestone Content */}
                  <div className="flex-1 bg-neutral-800/50 rounded-lg p-4 border border-neutral-700">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-neutral-100">
                          {milestone.event}
                        </h3>
                        <p className="text-sm text-neutral-400">
                          {milestone.date}
                        </p>
                      </div>
                      {getStatusIcon(milestone.status)}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
