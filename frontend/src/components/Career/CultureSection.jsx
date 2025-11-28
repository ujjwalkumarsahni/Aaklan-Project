// components/Career/CultureSection.js
import React from 'react';
import { FaRocket, FaHeart, FaUsers, FaStar } from 'react-icons/fa';

const CultureSection = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-[#0b234a] to-[#1a3a6e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Culture & Values</h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              At Aaklan, we foster an environment of innovation, collaboration, and continuous learning. We believe that when our team thrives, our students succeed.
            </p>
            
            <div className="space-y-4">
              {[
                { icon: FaRocket, text: "Innovation-driven approach to education" },
                { icon: FaHeart, text: "Student-first mindset in everything we do" },
                { icon: FaUsers, text: "Collaborative and supportive team environment" },
                { icon: FaStar, text: "Excellence in teaching and technology" }
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                      <IconComponent className="text-orange-400 text-xl" />
                    </div>
                    <span className="text-lg text-blue-100">{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6 text-center">Ready to Make an Impact?</h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="text"
                placeholder="What role interests you?"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                Get Notified About New Roles
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CultureSection;