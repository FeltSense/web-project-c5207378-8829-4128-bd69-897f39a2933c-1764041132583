'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      quote: "TechFlow revolutionized our development workflow. Their platform reduced our deployment time by 70% and the support team is incredibly responsive. Best decision we made this year.",
      name: "Marcus Rodriguez",
      role: "CTO, CloudScale Systems",
      avatar: "https://i.pravatar.cc/150?img=12",
      rating: 5
    },
    {
      id: 2,
      quote: "The level of innovation and attention to detail is extraordinary. TechFlow's solutions helped us scale from 10K to 1M users seamlessly. Their architecture is bulletproof.",
      name: "Sarah Chen",
      role: "VP Engineering, DataFlow Inc",
      avatar: "https://i.pravatar.cc/150?img=5",
      rating: 5
    },
    {
      id: 3,
      quote: "We've tried countless platforms, but TechFlow stands alone. The performance optimization tools saved us $50K monthly in infrastructure costs. Absolutely game-changing.",
      name: "James Patterson",
      role: "Founder & CEO, StartupLab",
      avatar: "https://i.pravatar.cc/150?img=33",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            CLIENT SUCCESS STORIES
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of companies scaling their tech infrastructure with TechFlow
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-10 bg-white p-4 rounded-full shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all text-gray-700 hover:text-blue-600"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-10 bg-white p-4 rounded-full shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all text-gray-700 hover:text-blue-600"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel */}
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="absolute top-8 left-8">
              <Quote className="w-16 h-16 text-blue-100" />
            </div>
            
            <div className="p-12 md:p-16 pt-20">
              {/* Large Avatar at Top Center */}
              <div className="flex justify-center mb-8">
                <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-blue-100 shadow-lg">
                  <Image 
                    src={testimonials[activeIndex].avatar} 
                    alt={testimonials[activeIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Rating Stars - Large */}
              <div className="flex gap-2 justify-center mb-8">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-7 h-7 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Testimonial Quote */}
              <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-8 leading-relaxed text-center max-w-3xl mx-auto">
                "{testimonials[activeIndex].quote}"
              </blockquote>

              {/* Author Info */}
              <div className="text-center">
                <div className="font-bold text-gray-900 text-xl md:text-2xl mb-1">
                  {testimonials[activeIndex].name}
                </div>
                <div className="text-gray-600 text-lg">
                  {testimonials[activeIndex].role}
                </div>
              </div>
            </div>

            {/* Bottom Accent Line */}
            <div className="h-2 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600"></div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-3 rounded-full transition-all ${index === activeIndex ? 'bg-blue-600 w-12' : 'bg-gray-300 hover:bg-gray-400 w-3'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 text-center">
          <p className="text-gray-500 text-sm uppercase tracking-wider mb-8">Trusted By</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            <div className="text-2xl font-bold text-gray-400">MICROSOFT</div>
            <div className="text-2xl font-bold text-gray-400">AMAZON</div>
            <div className="text-2xl font-bold text-gray-400">GOOGLE</div>
            <div className="text-2xl font-bold text-gray-400">IBM</div>
            <div className="text-2xl font-bold text-gray-400">ORACLE</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
