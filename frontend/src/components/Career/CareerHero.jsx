import React from 'react';

const CareerHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#0b234a] to-[#1a3a6e] text-white py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-20 h-20 md:w-32 md:h-32 bg-orange-500 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-16 h-16 md:w-24 md:h-24 bg-[#E22213] rounded-full"></div>
        <div className="absolute top-1/2 right-1/3 w-12 h-12 md:w-16 md:h-16 bg-orange-500 rounded-full"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">
          Build The Future of
          <span className="block text-orange-400 mt-2">Education With Us</span>
        </h1>
        <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
          Join Aaklan in revolutionizing how children learn technology. Create impact, grow your career, and inspire the next generation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
            View Open Positions
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0b234a] transition-all duration-300">
            Learn About Culture
          </button>
        </div>
      </div>
    </section>
  );
};

export default CareerHero;