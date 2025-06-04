'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Mail, 
  Lock, 
  Building, 
  Users, 
  CheckCircle,
  Eye,
  EyeOff,
  ArrowRight
} from 'lucide-react';
import Navigation from '@/components/ui/Navigation';
import Button from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    company: '',
    role: '',
    teamSize: '',
    agreeToTerms: false
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const roles = [
    'Recruiter / HR',
    'Engineering Manager',
    'Talent Acquisition',
    'CEO / Founder',
    'Product Manager',
    'Other'
  ];
  
  const teamSizes = [
    '1-10 employees',
    '11-50 employees',
    '51-200 employees',
    '201-1000 employees',
    '1000+ employees'
  ];
  
  const benefits = [
    'Free 14-day trial',
    'No credit card required',
    'Full platform access',
    'Dedicated support',
    'Custom onboarding'
  ];
  
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
    
    // Here you would typically send data to your backend
    console.log('Form submitted:', formData);
    
    setIsSubmitting(false);
    setCurrentStep(3); // Success step
  };
  
  const nextStep = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const isStep1Valid = formData.firstName && formData.lastName && formData.email && 
                     formData.password && formData.confirmPassword && 
                     formData.password === formData.confirmPassword;
  
  const isStep2Valid = formData.company && formData.role && formData.teamSize && formData.agreeToTerms;
  
  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-neutral-300 mb-2">
            First Name
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-transparent"
              placeholder="John"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-neutral-300 mb-2">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-transparent"
            placeholder="Doe"
            required
          />
        </div>
      </div>
      
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
            placeholder="john@company.com"
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
            placeholder="••••••••"
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
      
      <div>
        <label className="block text-sm font-medium text-neutral-300 mb-2">
          Confirm Password
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className="w-full pl-10 pr-12 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-transparent"
            placeholder="••••••••"
            required
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-300"
          >
            {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>
        {formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword && (
          <p className="text-accent-red text-sm mt-1">Passwords do not match</p>
        )}
      </div>
    </div>
  );
  
  const renderStep2 = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-neutral-300 mb-2">
          Company Name
        </label>
        <div className="relative">
          <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className="w-full pl-10 pr-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-transparent"
            placeholder="Acme Corp"
            required
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-neutral-300 mb-2">
          Your Role
        </label>
        <select
          name="role"
          value={formData.role}
          onChange={handleInputChange}
          className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-neutral-100 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-transparent"
          required
        >
          <option value="">Select your role</option>
          {roles.map(role => (
            <option key={role} value={role}>{role}</option>
          ))}
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-neutral-300 mb-2">
          Team Size
        </label>
        <div className="relative">
          <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
          <select
            name="teamSize"
            value={formData.teamSize}
            onChange={handleInputChange}
            className="w-full pl-10 pr-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-neutral-100 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-transparent"
            required
          >
            <option value="">Select team size</option>
            {teamSizes.map(size => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="flex items-start space-x-3">
        <input
          type="checkbox"
          name="agreeToTerms"
          checked={formData.agreeToTerms}
          onChange={handleInputChange}
          className="mt-1 w-4 h-4 text-accent-cyan bg-neutral-800 border-neutral-600 rounded focus:ring-accent-cyan focus:ring-2"
          required
        />
        <label className="text-sm text-neutral-300">
          I agree to the{' '}
          <a href="/terms" className="text-accent-cyan hover:text-accent-purple transition-colors">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="/privacy" className="text-accent-cyan hover:text-accent-purple transition-colors">
            Privacy Policy
          </a>
        </label>
      </div>
    </div>
  );
  
  const renderSuccess = () => (
    <div className="text-center space-y-6">
      <div className="w-20 h-20 bg-accent-green/20 rounded-full flex items-center justify-center mx-auto">
        <CheckCircle className="w-10 h-10 text-accent-green" />
      </div>
      <div>
        <h3 className="text-2xl font-bold text-neutral-100 mb-2">
          Welcome to SimWork!
        </h3>
        <p className="text-neutral-300">
          Your account has been created successfully. Check your email for verification instructions.
        </p>
      </div>
      <Button variant="primary" size="lg" className="w-full">
        Go to Dashboard
        <ArrowRight className="w-5 h-5 ml-2" />
      </Button>
    </div>
  );
  
  return (
    <main className="min-h-screen bg-primary-900">
      <Navigation />
      
      <div className="pt-20 pb-12 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                  <span className="gradient-text">Start Your Free Trial</span>
                </h1>
                <p className="text-xl text-neutral-300">
                  Join thousands of companies transforming their hiring process with SimWork.
                </p>
              </div>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-accent-green flex-shrink-0" />
                    <span className="text-neutral-200">{benefit}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="bg-gradient-to-r from-accent-cyan/10 to-accent-purple/10 rounded-xl p-6 border border-accent-cyan/20">
                <h3 className="text-lg font-semibold text-neutral-100 mb-2">
                  Ready in 2 minutes
                </h3>
                <p className="text-neutral-300 text-sm">
                  Quick setup, immediate access to all features, and dedicated support to get you started.
                </p>
              </div>
            </motion.div>
            
            {/* Right Side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card variant="glass" className="border-accent-cyan/30">
                <CardHeader>
                  <CardTitle className="text-center">
                    {currentStep === 1 && 'Create Your Account'}
                    {currentStep === 2 && 'Company Information'}
                    {currentStep === 3 && 'Account Created!'}
                  </CardTitle>
                  
                  {currentStep < 3 && (
                    <div className="flex justify-center space-x-2 mt-4">
                      {[1, 2].map((step) => (
                        <div
                          key={step}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            step <= currentStep ? 'bg-accent-cyan' : 'bg-neutral-600'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </CardHeader>
                
                <CardContent>
                  {currentStep < 3 ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {currentStep === 1 && renderStep1()}
                      {currentStep === 2 && renderStep2()}
                      
                      <div className="flex space-x-4">
                        {currentStep > 1 && (
                          <Button
                            type="button"
                            variant="outline"
                            onClick={prevStep}
                            className="flex-1"
                          >
                            Back
                          </Button>
                        )}
                        
                        {currentStep === 1 ? (
                          <Button
                            type="button"
                            variant="primary"
                            onClick={nextStep}
                            disabled={!isStep1Valid}
                            className="flex-1"
                          >
                            Continue
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        ) : (
                          <Button
                            type="submit"
                            variant="primary"
                            disabled={!isStep2Valid}
                            loading={isSubmitting}
                            className="flex-1"
                          >
                            {isSubmitting ? 'Creating Account...' : 'Create Account'}
                          </Button>
                        )}
                      </div>
                    </form>
                  ) : (
                    renderSuccess()
                  )}
                  
                  {currentStep < 3 && (
                    <div className="mt-6 text-center">
                      <p className="text-sm text-neutral-400">
                        Already have an account?{' '}
                        <a href="/signin" className="text-accent-cyan hover:text-accent-purple transition-colors">
                          Sign in
                        </a>
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
