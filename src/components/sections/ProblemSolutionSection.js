'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, DollarSign, Clock, Users, CheckCircle, Zap, Target, Award } from 'lucide-react';
import { Card, CardContent } from '../ui/Card';

const ProblemSolutionSection = () => {
  const problems = [
    {
      icon: DollarSign,
      title: 'Wrong Hires Waste Money',
      description: 'Average cost of bad hire is $240,000 including salary, training, and lost productivity.',
      stat: '$240K',
      color: 'text-accent-red'
    },
    {
      icon: AlertTriangle,
      title: 'No Proof of Real Skill',
      description: '58% of resumes contain false information about technical skills and experience.',
      stat: '58%',
      color: 'text-accent-orange'
    },
    {
      icon: Clock,
      title: 'Slow Hiring Process',
      description: 'Average 42 days to hire, with 23% of top candidates lost during lengthy processes.',
      stat: '42 Days',
      color: 'text-accent-red'
    },
    {
      icon: Users,
      title: 'Poor Interview Reliability',
      description: '76% of hiring managers admit interviews don\'t predict actual job performance.',
      stat: '76%',
      color: 'text-accent-orange'
    }
  ];
  
  const solutions = [
    {
      icon: Target,
      title: 'Real Skill Assessment',
      description: 'Watch candidates solve actual work problems using real tools in simulated environments.',
      benefit: '3x More Accurate',
      color: 'text-accent-green'
    },
    {
      icon: Zap,
      title: 'Faster Screening',
      description: 'Automated quest-based evaluation reduces screening time by 60% while improving quality.',
      benefit: '60% Faster',
      color: 'text-accent-cyan'
    },
    {
      icon: Award,
      title: 'Gamified Experience',
      description: 'Engaging 2.5D simulation increases candidate completion rates by 90%.',
      benefit: '90% Completion',
      color: 'text-accent-purple'
    },
    {
      icon: CheckCircle,
      title: 'Verified Portfolios',
      description: 'Live task logs and AI-reviewed work create trustworthy skill demonstrations.',
      benefit: '100% Verified',
      color: 'text-accent-green'
    }
  ];
  
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
  
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };
  
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900 via-primary-800 to-primary-900" />
      <div className="absolute inset-0 bg-cyber-grid opacity-5" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-20"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
          >
            <span className="gradient-text">The Hiring Crisis</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-neutral-300 max-w-3xl mx-auto"
          >
            Traditional hiring methods are broken. We're fixing them with immersive simulation technology.
          </motion.p>
        </motion.div>
        
        {/* Problems Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-20"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-2xl sm:text-3xl font-bold text-center mb-12 text-accent-red"
          >
            The Problems We Solve
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((problem, index) => (
              <motion.div
                key={problem.title}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 30px rgba(239, 68, 68, 0.3)'
                }}
                className="group"
              >
                <Card variant="glass" className="h-full border-red-500/20 hover:border-red-500/40 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4">
                      <problem.icon className={`w-12 h-12 mx-auto ${problem.color} group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                    <div className={`text-3xl font-bold mb-2 ${problem.color}`}>
                      {problem.stat}
                    </div>
                    <h4 className="text-lg font-semibold text-neutral-100 mb-3">
                      {problem.title}
                    </h4>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      {problem.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="h-px bg-gradient-to-r from-transparent via-accent-cyan to-transparent mb-20"
        />
        
        {/* Solutions Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h3 
            variants={itemVariants}
            className="text-2xl sm:text-3xl font-bold text-center mb-12 text-accent-green"
          >
            Our Revolutionary Solutions
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 30px rgba(0, 245, 255, 0.3)'
                }}
                className="group"
              >
                <Card variant="glass" className="h-full border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4">
                      <solution.icon className={`w-12 h-12 mx-auto ${solution.color} group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                    <div className={`text-3xl font-bold mb-2 ${solution.color}`}>
                      {solution.benefit}
                    </div>
                    <h4 className="text-lg font-semibold text-neutral-100 mb-3">
                      {solution.title}
                    </h4>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      {solution.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="glass-effect p-8 rounded-2xl max-w-2xl mx-auto">
            <h4 className="text-2xl font-bold text-neutral-100 mb-4">
              Ready to Transform Your Hiring?
            </h4>
            <p className="text-neutral-300 mb-6">
              Join thousands of companies already using SimWork to find better talent faster.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-accent-cyan to-accent-purple text-primary-900 px-8 py-3 rounded-lg font-semibold hover:shadow-glow-lg transition-all duration-300"
            >
              Start Free Trial
            </motion.button>
          </div>
        </motion.div>
      </div>
      
      {/* Floating Background Elements */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 border border-accent-red/20 rounded-full"
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          rotate: { duration: 30, repeat: Infinity, ease: "linear" },
          scale: { duration: 6, repeat: Infinity }
        }}
      />
      
      <motion.div
        className="absolute bottom-10 right-10 w-24 h-24 border border-accent-green/20 rounded-lg"
        animate={{ 
          rotate: -360,
          y: [-10, 10, -10]
        }}
        transition={{ 
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          y: { duration: 4, repeat: Infinity }
        }}
      />
    </section>
  );
};

export default ProblemSolutionSection;
