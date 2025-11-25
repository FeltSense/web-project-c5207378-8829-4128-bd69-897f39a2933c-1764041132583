'use client';

import React from 'react';
import { Check, Zap, Shield, Crown, Star, ArrowRight, Sparkles } from 'lucide-react';

const Pricing = () => {
  const features = [
    { icon: Crown, text: 'Premium Custom Design' },
    { icon: Zap, text: 'Lightning-Fast Performance' },
    { icon: Shield, text: 'Enterprise-Grade Security' },
    { icon: Star, text: 'SEO Optimization Included' },
    { icon: Check, text: 'Mobile-Responsive Design' },
    { icon: Check, text: 'Free 30-Day Support' },
    { icon: Check, text: 'SSL Certificate Included' },
    { icon: Check, text: 'Google Analytics Setup' }
  ];

  const handleCheckout = () => {
    window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00';
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600">LIMITED TIME OFFER</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get your professional website at an unbeatable price. No hidden fees, no surprises.
          </p>
        </div>
        
        {/* Pricing Card - Hero Style */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Decorative Background Elements */}
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-purple-100 rounded-full opacity-20 blur-3xl"></div>
            
            {/* Main Card */}
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              {/* Popular Badge */}
              <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-bl-2xl font-semibold text-sm flex items-center gap-2">
                <Star className="w-4 h-4 fill-white" />
                BEST VALUE
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 p-12">
                {/* Left Side - Pricing */}
                <div className="flex flex-col justify-center">
                  <div className="mb-8">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">
                      Professional Website
                    </h3>
                    <p className="text-lg text-gray-600">
                      Everything you need to establish your online presence
                    </p>
                  </div>
                  
                  {/* Price Display */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        $29
                      </span>
                      <div className="flex flex-col">
                        <span className="text-2xl font-semibold text-gray-700">one-time</span>
                        <span className="text-sm text-gray-500 line-through">$299</span>
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold text-green-700">90% OFF - Launch Special</span>
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <button
                    onClick={handleCheckout}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-8 py-5 rounded-xl transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 text-lg group mb-4"
                  >
                    Get Your Website - $29
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-green-600" />
                      <span>Secure Payment</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-600" />
                      <span>Instant Access</span>
                    </div>
                  </div>
                </div>
                
                {/* Right Side - Features */}
                <div className="flex flex-col justify-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-6">
                    What's Included:
                  </h4>
                  <div className="space-y-4">
                    {features.map((feature, index) => {
                      const Icon = feature.icon;
                      return (
                        <div key={index} className="flex items-start gap-4 group">
                          <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                            <Icon className="w-5 h-5 text-blue-600" />
                          </div>
                          <div className="flex-1 pt-2">
                            <span className="text-gray-700 font-medium">{feature.text}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              
              {/* Bottom Trust Bar */}
              <div className="bg-gray-50 px-12 py-6 border-t border-gray-100">
                <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-blue-600" />
                    </div>
                    <span>Money-Back Guarantee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-blue-600" />
                    </div>
                    <span>No Hidden Fees</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-blue-600" />
                    </div>
                    <span>Lifetime Updates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-blue-600" />
                    </div>
                    <span>Cancel Anytime</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Social Proof */}
        <div className="text-center mt-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <p className="text-gray-600">
            <span className="font-semibold text-gray-900">1,247+ businesses</span> launched with TechFlow
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
