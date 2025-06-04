'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Crown, Users } from 'lucide-react';
import { Card, CardContent, CardHeader } from '../ui/Card';
import Button from '../ui/Button';

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  
  const plans = [
    {
      name: 'Free',
      icon: Users,
      description: 'Perfect for individual exploration',
      price: { monthly: 0, annual: 0 },
      badge: null,
      features: [
        'Explore 2.5D office world',
        'Complete basic quests',
        'Personal skill profile',
        'Community leaderboard',
        'Basic analytics',
        'Email support'
      ],
      limitations: [
        'Limited to 5 quests per month',
        'Basic profile customization',
        'Standard support'
      ],
      cta: 'Get Started Free',
      variant: 'outline',
      popular: false
    },
    {
      name: 'Pro',
      icon: Zap,
      description: 'For recruiters and hiring teams',
      price: { monthly: 99, annual: 79 },
      badge: 'Most Popular',
      features: [
        'Everything in Free',
        'Unlimited quest access',
        'Advanced recruiter dashboard',
        'Candidate analytics & insights',
        'Custom quest creation',
        'Team collaboration tools',
        'API access (basic)',
        'Priority support',
        'White-label options',
        'Advanced reporting'
      ],
      limitations: [],
      cta: 'Start Pro Trial',
      variant: 'primary',
      popular: true
    },
    {
      name: 'Enterprise',
      icon: Crown,
      description: 'For large organizations',
      price: { monthly: 499, annual: 399 },
      badge: 'Best Value',
      features: [
        'Everything in Pro',
        'Custom simulation environments',
        'Advanced API access',
        'SSO integration',
        'Dedicated account manager',
        'Custom integrations',
        'Advanced security features',
        'Unlimited team members',
        'Custom branding',
        'SLA guarantee',
        'On-premise deployment',
        'Training & onboarding'
      ],
      limitations: [],
      cta: 'Contact Sales',
      variant: 'secondary',
      popular: false
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
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900 via-primary-800 to-primary-900" />
      <div className="absolute inset-0 bg-cyber-grid opacity-5" />
      
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
            <span className="gradient-text">Simple, Transparent Pricing</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-neutral-300 max-w-3xl mx-auto mb-8"
          >
            Choose the perfect plan for your hiring needs. Start free, upgrade when you're ready.
          </motion.p>
          
          {/* Billing Toggle */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center space-x-4"
          >
            <span className={`text-sm ${!isAnnual ? 'text-neutral-100' : 'text-neutral-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
                isAnnual ? 'bg-accent-cyan' : 'bg-neutral-700'
              }`}
            >
              <motion.div
                className="absolute top-1 w-5 h-5 bg-white rounded-full shadow-md"
                animate={{ x: isAnnual ? 32 : 4 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <span className={`text-sm ${isAnnual ? 'text-neutral-100' : 'text-neutral-400'}`}>
              Annual
            </span>
            {isAnnual && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-accent-green text-primary-900 px-2 py-1 rounded-full text-xs font-semibold"
              >
                Save 20%
              </motion.span>
            )}
          </motion.div>
        </motion.div>
        
        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: plan.popular 
                  ? '0 0 40px rgba(0, 245, 255, 0.4)' 
                  : '0 0 20px rgba(255, 255, 255, 0.1)'
              }}
              className={`relative group ${plan.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
            >
              {/* Popular Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-accent-cyan to-accent-purple text-primary-900 px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star size={14} />
                    <span>{plan.badge}</span>
                  </div>
                </div>
              )}
              
              <Card 
                variant={plan.popular ? "neon" : "glass"} 
                className={`h-full ${plan.popular ? 'border-accent-cyan shadow-glow' : ''}`}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mb-4">
                    <plan.icon className={`w-12 h-12 mx-auto ${
                      plan.popular ? 'text-accent-cyan' : 'text-neutral-400'
                    }`} />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-100 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-neutral-400 text-sm mb-4">
                    {plan.description}
                  </p>
                  
                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-neutral-100">
                        ${isAnnual ? plan.price.annual : plan.price.monthly}
                      </span>
                      {plan.price.monthly > 0 && (
                        <span className="text-neutral-400 ml-2">
                          /{isAnnual ? 'year' : 'month'}
                        </span>
                      )}
                    </div>
                    {isAnnual && plan.price.monthly > 0 && (
                      <div className="text-sm text-neutral-500 mt-1">
                        ${Math.round(plan.price.annual / 12)}/month billed annually
                      </div>
                    )}
                  </div>
                  
                  {plan.name === 'Free' ? (
                    <a href="/signup">
                      <Button
                        variant={plan.variant}
                        size="lg"
                        className="w-full"
                      >
                        {plan.cta}
                      </Button>
                    </a>
                  ) : plan.name === 'Enterprise' ? (
                    <a href="mailto:sales@simwork.ai">
                      <Button
                        variant={plan.variant}
                        size="lg"
                        className="w-full"
                      >
                        {plan.cta}
                      </Button>
                    </a>
                  ) : (
                    <a href="/signup">
                      <Button
                        variant={plan.variant}
                        size="lg"
                        className="w-full"
                      >
                        {plan.cta}
                      </Button>
                    </a>
                  )}
                </CardHeader>
                
                <CardContent className="pt-0">
                  {/* Features */}
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-accent-green mt-0.5 flex-shrink-0" />
                        <span className="text-neutral-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Limitations */}
                  {plan.limitations.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-neutral-700">
                      <h4 className="text-sm font-semibold text-neutral-400 mb-3">
                        Limitations:
                      </h4>
                      <div className="space-y-2">
                        {plan.limitations.map((limitation, limitIndex) => (
                          <div key={limitIndex} className="text-neutral-500 text-xs">
                            • {limitation}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-neutral-100 mb-8">
            Frequently Asked Questions
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: "Can I switch plans anytime?",
                a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately."
              },
              {
                q: "Is there a free trial?",
                a: "Yes! Pro plan includes a 14-day free trial. No credit card required to start."
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards, PayPal, and wire transfers for Enterprise plans."
              },
              {
                q: "Do you offer refunds?",
                a: "Yes, we offer a 30-day money-back guarantee for all paid plans."
              }
            ].map((faq, index) => (
              <div key={index} className="text-left">
                <h4 className="font-semibold text-neutral-100 mb-2">{faq.q}</h4>
                <p className="text-neutral-400 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
