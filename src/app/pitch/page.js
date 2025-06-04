'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Pause, BarChart3, Users, DollarSign, Target } from 'lucide-react';
import Navigation from '@/components/ui/Navigation';
import Button from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

export default function PitchPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const slides = [
    {
      title: "The Problem",
      subtitle: "Hiring is Broken",
      content: (
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="text-center">
              <div className="text-6xl font-bold text-accent-red mb-2">$240K</div>
              <p className="text-neutral-300">Average cost of a bad hire</p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-accent-orange mb-2">76%</div>
              <p className="text-neutral-300">Interviews don't predict performance</p>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-neutral-100">Current Issues:</h3>
            <ul className="space-y-3 text-neutral-300">
              <li>• Fake resumes and inflated skills</li>
              <li>• Lengthy, inefficient screening</li>
              <li>• No real skill demonstration</li>
              <li>• Poor candidate experience</li>
              <li>• High mis-hire rates</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Our Solution",
      subtitle: "SimWork: Real Skills, Real Results",
      content: (
        <div className="text-center space-y-8">
          <div className="grid grid-cols-3 gap-6">
            <Card variant="glass" className="p-6">
              <div className="text-4xl mb-4">🏢</div>
              <h4 className="text-lg font-semibold text-neutral-100 mb-2">2.5D Office</h4>
              <p className="text-neutral-400">Immersive work environment</p>
            </Card>
            <Card variant="glass" className="p-6">
              <div className="text-4xl mb-4">🛠️</div>
              <h4 className="text-lg font-semibold text-neutral-100 mb-2">Real Tools</h4>
              <p className="text-neutral-400">Actual work interfaces</p>
            </Card>
            <Card variant="glass" className="p-6">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-lg font-semibold text-neutral-100 mb-2">Live Quests</h4>
              <p className="text-neutral-400">Job-relevant challenges</p>
            </Card>
          </div>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Candidates prove their skills through action, not just words, in realistic work scenarios.
          </p>
        </div>
      )
    },
    {
      title: "Market Opportunity",
      subtitle: "$240B Global Recruitment Market",
      content: (
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-accent-cyan to-accent-purple p-6 rounded-xl">
              <div className="text-3xl font-bold text-white mb-2">$3.85B</div>
              <p className="text-white/80">Recruitment Software Market</p>
              <p className="text-white/60 text-sm">Growing 7.1% CAGR</p>
            </div>
            <div className="bg-gradient-to-r from-accent-green to-accent-cyan p-6 rounded-xl">
              <div className="text-3xl font-bold text-white mb-2">$15.4B</div>
              <p className="text-white/80">Gamification Market</p>
              <p className="text-white/60 text-sm">Growing 27.4% CAGR</p>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-neutral-100">Key Trends:</h3>
            <ul className="space-y-3 text-neutral-300">
              <li>• Remote work normalization</li>
              <li>• Skills-based hiring focus</li>
              <li>• AI-powered recruitment</li>
              <li>• Candidate experience priority</li>
              <li>• Gamification adoption</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Business Model",
      subtitle: "Freemium with Enterprise Focus",
      content: (
        <div className="grid grid-cols-3 gap-6">
          <Card variant="glass" className="p-6 text-center">
            <h4 className="text-xl font-semibold text-neutral-100 mb-4">Free</h4>
            <div className="text-3xl font-bold text-accent-green mb-4">$0</div>
            <ul className="text-sm text-neutral-400 space-y-2">
              <li>• Basic quests</li>
              <li>• Personal profile</li>
              <li>• Community access</li>
            </ul>
          </Card>
          <Card variant="neon" className="p-6 text-center border-accent-cyan">
            <h4 className="text-xl font-semibold text-neutral-100 mb-4">Pro</h4>
            <div className="text-3xl font-bold text-accent-cyan mb-4">$99</div>
            <ul className="text-sm text-neutral-400 space-y-2">
              <li>• Recruiter dashboard</li>
              <li>• Advanced analytics</li>
              <li>• Custom quests</li>
            </ul>
          </Card>
          <Card variant="glass" className="p-6 text-center">
            <h4 className="text-xl font-semibold text-neutral-100 mb-4">Enterprise</h4>
            <div className="text-3xl font-bold text-accent-purple mb-4">$499</div>
            <ul className="text-sm text-neutral-400 space-y-2">
              <li>• Custom simulations</li>
              <li>• API access</li>
              <li>• White-label</li>
            </ul>
          </Card>
        </div>
      )
    },
    {
      title: "Traction",
      subtitle: "Early Success Metrics",
      content: (
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="text-center">
              <div className="text-5xl font-bold text-accent-cyan mb-2">10K+</div>
              <p className="text-neutral-300">Beta Users</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent-green mb-2">95%</div>
              <p className="text-neutral-300">Completion Rate</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent-purple mb-2">3x</div>
              <p className="text-neutral-300">Better Accuracy</p>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-neutral-100">Key Achievements:</h3>
            <ul className="space-y-3 text-neutral-300">
              <li>• 50+ enterprise pilots</li>
              <li>• 90% user satisfaction</li>
              <li>• 60% faster screening</li>
              <li>• $2M seed funding</li>
              <li>• Strategic partnerships</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "The Ask",
      subtitle: "Join the Future of Hiring",
      content: (
        <div className="text-center space-y-8">
          <div className="bg-gradient-to-r from-accent-cyan to-accent-purple p-8 rounded-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">$5M Series A</h3>
            <p className="text-white/80 text-lg">To scale globally and capture market leadership</p>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-cyan mb-2">40%</div>
              <p className="text-neutral-300">Product Development</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-green mb-2">35%</div>
              <p className="text-neutral-300">Sales & Marketing</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-purple mb-2">25%</div>
              <p className="text-neutral-300">Team Expansion</p>
            </div>
          </div>
          <Button variant="primary" size="xl" className="mt-8">
            Let's Transform Hiring Together
          </Button>
        </div>
      )
    }
  ];
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  
  return (
    <main className="min-h-screen bg-primary-900">
      <Navigation />
      
      <div className="pt-20 h-screen flex flex-col">
        {/* Slide Content */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="max-w-6xl mx-auto w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                  <span className="gradient-text">{slides[currentSlide].title}</span>
                </h1>
                <p className="text-xl text-neutral-300 mb-12">
                  {slides[currentSlide].subtitle}
                </p>
                
                <div className="bg-neutral-800/50 backdrop-blur-sm rounded-2xl p-8 border border-neutral-700">
                  {slides[currentSlide].content}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        
        {/* Controls */}
        <div className="p-8 border-t border-neutral-800">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <button
              onClick={prevSlide}
              className="p-3 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-accent-cyan transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="flex items-center space-x-4">
              {/* Slide Indicators */}
              <div className="flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-accent-cyan scale-125' 
                        : 'bg-neutral-600 hover:bg-neutral-500'
                    }`}
                  />
                ))}
              </div>
              
              {/* Slide Counter */}
              <span className="text-neutral-400 text-sm">
                {currentSlide + 1} / {slides.length}
              </span>
            </div>
            
            <button
              onClick={nextSlide}
              className="p-3 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-accent-cyan transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
