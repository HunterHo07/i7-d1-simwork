'use client';

import { motion } from 'framer-motion';
import { 
  Zap, 
  Target, 
  Users, 
  Award, 
  Shield, 
  Rocket,
  CheckCircle,
  Star,
  TrendingUp,
  Globe
} from 'lucide-react';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export default function WhyUsPage() {
  const advantages = [
    {
      icon: Target,
      title: 'Only Real Simulation Platform',
      description: 'Unlike static coding tests, we provide immersive 2.5D environments with actual work tools.',
      stats: '3x more accurate than traditional assessments',
      color: 'text-accent-cyan'
    },
    {
      icon: Zap,
      title: 'Faster Hiring Process',
      description: 'Reduce screening time by 60% while improving candidate quality and experience.',
      stats: '60% faster time-to-hire',
      color: 'text-accent-green'
    },
    {
      icon: Users,
      title: 'Multi-Role Coverage',
      description: 'Assess developers, designers, PMs, data analysts, and AI specialists in one platform.',
      stats: '5+ professional roles supported',
      color: 'text-accent-purple'
    },
    {
      icon: Award,
      title: 'Verified Skill Proof',
      description: 'AI-reviewed work logs and live task completion create trustworthy portfolios.',
      stats: '100% verified skill demonstrations',
      color: 'text-accent-orange'
    }
  ];
  
  const competitors = [
    {
      name: 'HackerRank',
      features: {
        'Immersive Environment': false,
        'Multi-Role Support': false,
        'Real Tools': false,
        'Gamification': false,
        'Live Collaboration': false,
        'AI-Powered': false
      },
      marketShare: '23%',
      pricing: '$199-999/mo'
    },
    {
      name: 'Codility',
      features: {
        'Immersive Environment': false,
        'Multi-Role Support': false,
        'Real Tools': false,
        'Gamification': false,
        'Live Collaboration': false,
        'AI-Powered': false
      },
      marketShare: '18%',
      pricing: '$450-1200/mo'
    },
    {
      name: 'CodeSignal',
      features: {
        'Immersive Environment': false,
        'Multi-Role Support': false,
        'Real Tools': true,
        'Gamification': false,
        'Live Collaboration': true,
        'AI-Powered': false
      },
      marketShare: '12%',
      pricing: '$300-800/mo'
    },
    {
      name: 'SimWork',
      features: {
        'Immersive Environment': true,
        'Multi-Role Support': true,
        'Real Tools': true,
        'Gamification': true,
        'Live Collaboration': true,
        'AI-Powered': true
      },
      marketShare: 'Growing',
      pricing: '$99-499/mo',
      highlight: true
    }
  ];
  
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Head of Engineering, TechCorp',
      company: 'TechCorp',
      quote: 'SimWork transformed our hiring. We now see candidates actually code, not just talk about it.',
      rating: 5,
      avatar: '👩‍💻'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Talent Acquisition Lead',
      company: 'StartupXYZ',
      quote: 'The gamified experience increased our candidate completion rate by 90%. Amazing results!',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      name: 'Jennifer Kim',
      role: 'Design Director',
      company: 'CreativeStudio',
      quote: 'Finally, a platform that lets designers show their actual process, not just final outputs.',
      rating: 5,
      avatar: '👩‍🎨'
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
            <span className="gradient-text">Why Choose SimWork?</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-neutral-300 max-w-3xl mx-auto"
          >
            We're not just another assessment platform. We're revolutionizing how skills are evaluated and talent is discovered.
          </motion.p>
        </div>
      </section>
      
      {/* Key Advantages */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {advantages.map((advantage, index) => (
              <motion.div key={advantage.title} variants={itemVariants}>
                <Card variant="glass" className="h-full hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-xl bg-neutral-800 ${advantage.color}`}>
                        <advantage.icon className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-neutral-100 mb-3">
                          {advantage.title}
                        </h3>
                        <p className="text-neutral-300 mb-4">
                          {advantage.description}
                        </p>
                        <div className={`text-sm font-medium ${advantage.color}`}>
                          {advantage.stats}
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
      
      {/* Competitive Comparison */}
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
              <span className="gradient-text">How We Compare</span>
            </h2>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              See why leading companies choose SimWork over traditional assessment platforms.
            </p>
          </motion.div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-neutral-800/50 rounded-xl border border-neutral-700">
              <thead>
                <tr className="border-b border-neutral-700">
                  <th className="text-left p-4 text-neutral-100 font-semibold">Features</th>
                  {competitors.map((competitor) => (
                    <th 
                      key={competitor.name} 
                      className={`text-center p-4 font-semibold ${
                        competitor.highlight ? 'text-accent-cyan' : 'text-neutral-300'
                      }`}
                    >
                      {competitor.name}
                      {competitor.highlight && (
                        <div className="text-xs text-accent-cyan mt-1">⭐ That's Us!</div>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Object.keys(competitors[0].features).map((feature) => (
                  <tr key={feature} className="border-b border-neutral-700/50">
                    <td className="p-4 text-neutral-200 font-medium">{feature}</td>
                    {competitors.map((competitor) => (
                      <td key={competitor.name} className="text-center p-4">
                        {competitor.features[feature] ? (
                          <CheckCircle className={`w-5 h-5 mx-auto ${
                            competitor.highlight ? 'text-accent-cyan' : 'text-accent-green'
                          }`} />
                        ) : (
                          <div className="w-5 h-5 mx-auto rounded-full bg-neutral-600"></div>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="border-b border-neutral-700/50">
                  <td className="p-4 text-neutral-200 font-medium">Market Share</td>
                  {competitors.map((competitor) => (
                    <td key={competitor.name} className="text-center p-4 text-neutral-300">
                      {competitor.marketShare}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 text-neutral-200 font-medium">Pricing</td>
                  {competitors.map((competitor) => (
                    <td key={competitor.name} className={`text-center p-4 ${
                      competitor.highlight ? 'text-accent-cyan font-semibold' : 'text-neutral-300'
                    }`}>
                      {competitor.pricing}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              <span className="gradient-text">What Our Customers Say</span>
            </h2>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Join hundreds of companies already transforming their hiring process.
            </p>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={testimonial.name} variants={itemVariants}>
                <Card variant="glass" className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="text-3xl mr-3">{testimonial.avatar}</div>
                      <div>
                        <h4 className="text-lg font-semibold text-neutral-100">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-neutral-400">
                          {testimonial.role}
                        </p>
                        <p className="text-sm text-accent-cyan">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-accent-orange fill-current" />
                      ))}
                    </div>
                    
                    <blockquote className="text-neutral-300 italic">
                      "{testimonial.quote}"
                    </blockquote>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent-cyan/10 to-accent-purple/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              <span className="gradient-text">Ready to Transform Your Hiring?</span>
            </h2>
            <p className="text-xl text-neutral-300 mb-8">
              Join the companies already using SimWork to find better talent faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-accent-cyan to-accent-purple text-primary-900 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-glow-lg transition-all duration-300"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-accent-cyan text-accent-cyan px-8 py-4 rounded-xl font-semibold text-lg hover:bg-accent-cyan hover:text-primary-900 transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
