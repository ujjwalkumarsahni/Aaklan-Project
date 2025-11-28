// components/Career/JobCard.js
import React from 'react';
import { FaBriefcase, FaMapMarkerAlt, FaClock, FaArrowRight } from 'react-icons/fa';

const JobCard = ({ job, isSelected, onApplyClick }) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-lg border-2 hover:shadow-xl transition-all duration-300 cursor-pointer group ${
        isSelected ? 'border-orange-500' : 'border-transparent hover:border-orange-200'
      } ${job.urgent ? 'border-l-4 border-l-[#E22213]' : ''} ${
        job.featured ? 'border-l-4 border-l-orange-500' : ''
      }`}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-[#0b234a] group-hover:text-orange-500 transition-colors">
            {job.title}
          </h3>
          {job.urgent && (
            <span className="bg-[#E22213] text-white px-2 py-1 rounded text-xs font-semibold">
              Urgent
            </span>
          )}
          {job.featured && (
            <span className="bg-orange-500 text-white px-2 py-1 rounded text-xs font-semibold">
              Featured
            </span>
          )}
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="flex items-center gap-1 text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
            <FaBriefcase className="text-xs" />
            {job.type}
          </span>
          <span className="flex items-center gap-1 text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
            <FaMapMarkerAlt className="text-xs" />
            {job.location}
          </span>
          <span className="flex items-center gap-1 text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
            <FaClock className="text-xs" />
            {job.experience}
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {job.description}
        </p>

        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-[#0b234a]">{job.salary}</span>
          <span className="text-sm text-gray-500">{job.posted}</span>
        </div>

        <button 
          onClick={() => onApplyClick(job)}
          className="w-full mt-4 bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
        >
          Apply Now
          <FaArrowRight className="text-sm" />
        </button>
      </div>
    </div>
  );
};

export default JobCard;