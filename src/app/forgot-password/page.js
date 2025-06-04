'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, CheckCircle, ArrowLeft } from 'lucide-react';
import Navigation from '@/components/ui/Navigation';
import Button from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Password reset requested for:', email);
    
    setIsSubmitting(false);
    setIsSuccess(true);
  };
  
  if (isSuccess) {
    return (
      <main className="min-h-screen bg-primary-900">
        <Navigation />
        <div className="pt-20 pb-12 min-h-screen flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md w-full mx-4"
          >
            <Card variant="glass" className="border-accent-green/30">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-accent-green" />
                </div>
                <h2 className="text-2xl font-bold text-neutral-100 mb-4">
                  Check Your Email
                </h2>
                <p className="text-neutral-300 mb-6">
                  We've sent password reset instructions to <strong>{email}</strong>
                </p>
                <p className="text-sm text-neutral-400 mb-6">
                  Didn't receive the email? Check your spam folder or try again.
                </p>
                <div className="space-y-3">
                  <a href="/signin">
                    <Button variant="primary" size="lg" className="w-full">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back to Sign In
                    </Button>
                  </a>
                  <Button 
                    variant="outline" 
                    size="md" 
                    className="w-full"
                    onClick={() => setIsSuccess(false)}
                  >
                    Try Different Email
                  </Button>
                </div>
              </CardContent>
            </Card>
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
            {/* Left Side - Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                  <span className="gradient-text">Reset Password</span>
                </h1>
                <p className="text-xl text-neutral-300">
                  No worries! Enter your email and we'll send you reset instructions.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-neutral-800/50 rounded-lg p-4 border border-neutral-700">
                  <h3 className="text-lg font-semibold text-neutral-100 mb-2">
                    What happens next?
                  </h3>
                  <ul className="space-y-2 text-neutral-300 text-sm">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent-cyan rounded-full"></div>
                      <span>We'll send a secure reset link to your email</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent-cyan rounded-full"></div>
                      <span>Click the link to create a new password</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent-cyan rounded-full"></div>
                      <span>Sign in with your new credentials</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-accent-orange/10 to-accent-red/10 rounded-xl p-4 border border-accent-orange/20">
                  <h4 className="text-sm font-semibold text-accent-orange mb-1">
                    Security Note
                  </h4>
                  <p className="text-neutral-300 text-xs">
                    Reset links expire in 1 hour for your security. If you don't receive an email, check your spam folder.
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Right Side - Reset Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card variant="glass" className="border-accent-cyan/30">
                <CardHeader>
                  <CardTitle className="text-center">Reset Your Password</CardTitle>
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
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-transparent"
                          placeholder="Enter your email address"
                          required
                        />
                      </div>
                      <p className="text-xs text-neutral-500 mt-2">
                        Enter the email address associated with your SimWork account
                      </p>
                    </div>
                    
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full"
                      loading={isSubmitting}
                      disabled={!email}
                    >
                      {isSubmitting ? 'Sending Reset Link...' : 'Send Reset Link'}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </form>
                  
                  <div className="mt-6 text-center">
                    <p className="text-sm text-neutral-400">
                      Remember your password?{' '}
                      <a href="/signin" className="text-accent-cyan hover:text-accent-purple transition-colors">
                        Sign in instead
                      </a>
                    </p>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-neutral-700">
                    <div className="text-center">
                      <p className="text-xs text-neutral-500 mb-3">
                        Need help? Contact our support team
                      </p>
                      <a 
                        href="mailto:support@simwork.ai"
                        className="text-accent-cyan hover:text-accent-purple transition-colors text-sm"
                      >
                        support@simwork.ai
                      </a>
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
