import React from 'react';
import Image from 'next/image';
import { Play, DollarSign, Users, Code } from 'lucide-react';

const Services = () => {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Powerful Solutions for Modern Teams
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to build, launch, and scale your tech products
          </p>
        </div>
        
        {/* Bento Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Featured Card 1 - Large with Image (spans 2 columns) */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
            <div className="relative h-64 overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80" 
                alt="Interactive product demos"
                width={800}
                height={400}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-3">
                  <Play className="w-7 h-7 text-white" />
                </div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Interactive Product Demos
              </h3>
              <p className="text-gray-600 text-lg">
                Engage prospects with immersive video showcases and live product demonstrations. Track engagement metrics and convert viewers into customers with interactive elements.
              </p>
            </div>
          </div>

          {/* Small Card 1 - Icon Only */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
              <DollarSign className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Multi-Tier Pricing Plans
            </h3>
            <p className="text-gray-600">
              Flexible pricing structures with detailed feature comparisons. Built-in A/B testing and conversion optimization tools.
            </p>
          </div>

          {/* Small Card 2 - Icon Only */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Customer Testimonials
            </h3>
            <p className="text-gray-600">
              Showcase real results with metrics-driven testimonials and customer logos. Build trust with verified reviews.
            </p>
          </div>

          {/* Featured Card 2 - Large with Image (spans 2 columns) */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
            <div className="relative h-64 overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80" 
                alt="API documentation and integrations"
                width={800}
                height={400}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-3">
                  <Code className="w-7 h-7 text-white" />
                </div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Integration Partners & API Docs
              </h3>
              <p className="text-gray-600 text-lg">
                Connect with 100+ partner platforms through our robust API. Comprehensive documentation, SDKs, and developer tools to accelerate your integration timeline.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;