'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, ArrowRight, CheckCircle } from 'lucide-react';
import Navigation from '@/components/ui/Navigation';
import Button from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export default function SignInPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Demo login - accept any email/password
    console.log('Sign in:', formData);
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Redirect to demo after success
    setTimeout(() => {
      window.location.href = '/demo';
    }, 2000);
  };
  
  const demoCredentials = [
    { email: 'demo@simwork.ai', password: 'demo123', role: 'Recruiter' },
    { email: 'alex@simwork.ai', password: 'alex123', role: 'Developer' },
    { email: 'sarah@simwork.ai', password: 'sarah123', role: 'Designer' }
  ];
  
  const fillDemoCredentials = (credentials) => {
    setFormData(prev => ({
      ...prev,
      email: credentials.email,
      password: credentials.password
    }));
  };
  
  if (isSuccess) {
    return (
      <main className="min-h-screen bg-primary-900">
        <Navigation />
        <div className="pt-20 pb-12 min-h-screen flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-6"
          >
            <div className="w-20 h-20 bg-accent-green/20 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10 text-accent-green" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-neutral-100 mb-2">
                Welcome Back!
              </h2>
              <p className="text-neutral-300">
                Redirecting you to the demo environment...
              </p>
            </div>
            <div className="w-16 h-1 bg-accent-cyan rounded-full mx-auto animate-pulse"></div>
          </motion.div>
        </div>
      </main>
    );
  }
  
  return (
    <main className="min-h-screen bg-primary-900">
      <Navigation />
      
      <div className="pt-20 pb-12 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Welcome Back */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                  <span className="gradient-text">Welcome Back</span>
                </h1>
                <p className="text-xl text-neutral-300">
                  Continue your journey in the future of work simulation.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-neutral-100">Demo Accounts</h3>
                <p className="text-neutral-400 text-sm">
                  Try different user roles with these demo credentials:
                </p>
                {demoCredentials.map((cred, index) => (
                  <motion.div
                    key={cred.email}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    className="bg-neutral-800/50 rounded-lg p-4 border border-neutral-700 hover:border-accent-cyan/30 transition-colors cursor-pointer"
                    onClick={() => fillDemoCredentials(cred)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-neutral-200 font-medium">{cred.role}</p>
                        <p className="text-neutral-400 text-sm">{cred.email}</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Use Demo
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="bg-gradient-to-r from-accent-cyan/10 to-accent-purple/10 rounded-xl p-6 border border-accent-cyan/20">
                <h3 className="text-lg font-semibold text-neutral-100 mb-2">
                  New to SimWork?
                </h3>
                <p className="text-neutral-300 text-sm mb-4">
                  Create your account and start exploring the future of hiring.
                </p>
                <Button variant="secondary" size="sm">
                  <a href="/signup">Sign Up Free</a>
                </Button>
              </div>
            </motion.div>
            
            {/* Right Side - Sign In Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card variant="glass" className="border-accent-cyan/30">
                <CardHeader>
                  <CardTitle className="text-center">Sign In to SimWork</CardTitle>
                </CardHeader>
                
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-neutral-300 mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-transparent"
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-neutral-300 mb-2">
                        Password
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-12 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-transparent"
                          placeholder="Enter your password"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-300"
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          name="rememberMe"
                          checked={formData.rememberMe}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-accent-cyan bg-neutral-800 border-neutral-600 rounded focus:ring-accent-cyan focus:ring-2"
                        />
                        <label className="text-sm text-neutral-300">
                          Remember me
                        </label>
                      </div>
                      <a href="/forgot-password" className="text-sm text-accent-cyan hover:text-accent-purple transition-colors">
                        Forgot password?
                      </a>
                    </div>
                    
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full"
                      loading={isSubmitting}
                      disabled={!formData.email || !formData.password}
                    >
                      {isSubmitting ? 'Signing In...' : 'Sign In'}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </form>
                  
                  <div className="mt-6 text-center">
                    <p className="text-sm text-neutral-400">
                      Don't have an account?{' '}
                      <a href="/signup" className="text-accent-cyan hover:text-accent-purple transition-colors">
                        Sign up for free
                      </a>
                    </p>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-neutral-700">
                    <div className="text-center">
                      <p className="text-xs text-neutral-500 mb-3">
                        Quick Demo Access
                      </p>
                      <div className="flex justify-center space-x-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => fillDemoCredentials(demoCredentials[0])}
                        >
                          Recruiter Demo
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => fillDemoCredentials(demoCredentials[1])}
                        >
                          Developer Demo
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
