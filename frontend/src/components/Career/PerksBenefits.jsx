// components/Career/PerksBenefits.js
import React from 'react';
import { FaMoneyBillWave, FaHome, FaChild, FaHeart } from 'react-icons/fa';

const PerksBenefits = () => {
  const perks = [
    {
      icon: FaMoneyBillWave,
      title: "Competitive Salary",
      description: "Industry-standard compensation with regular reviews"
    },
    {
      icon: FaHome,
      title: "Flexible Work",
      description: "Remote and hybrid options for better work-life balance"
    },
    {
      icon: FaChild,
      title: "Learning Budget",
      description: "Annual budget for courses, books, and conferences"
    },
    {
      icon: FaHeart,
      title: "Health Insurance",
      description: "Comprehensive health coverage for you and family"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0b234a] mb-4">Why Join Aaklan?</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            We believe in taking care of our team so they can focus on making a difference
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {perks.map((perk, index) => {
            const IconComponent = perk.icon;
            return (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 mx-auto bg-orange-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-orange-500 transition-colors">
                  <IconComponent className="text-2xl text-orange-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-[#0b234a] mb-3">{perk.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{perk.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PerksBenefits;