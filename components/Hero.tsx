import React from 'react';
import { ArrowRight, Code, Zap, Shield } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full bg-gray-900 overflow-hidden flex items-center">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-300">Now in Beta</span>
          </div>
          
          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Build Faster with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Next-Gen Technology</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-400 mb-8 leading-relaxed max-w-2xl mx-auto">
            Streamline your workflow with powerful tools designed for modern developers and innovative teams
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all shadow-lg shadow-blue-600/50"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="#demo"
              className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-lg border border-white/10 backdrop-blur-sm transition-all"
            >
              Watch Demo
            </Link>
          </div>
          
          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex items-center gap-3 text-gray-300">
              <Code className="w-5 h-5 text-blue-400" />
              <span>Developer First</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <Zap className="w-5 h-5 text-purple-400" />
              <span>Lightning Fast</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <Shield className="w-5 h-5 text-green-400" />
              <span>Enterprise Ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
