// components/Career/JobOpenings.js
import React, { useState, useEffect } from 'react';
import { FaSearch, FaBriefcase, FaMapMarkerAlt, FaClock, FaArrowRight, FaGraduationCap, FaRocket, FaUsers } from 'react-icons/fa';
import axios from 'axios';
import JobCategoryFilter from './JobCategoryFilter';
import JobCard from './JobCard';

const JobOpenings = ({
  activeCategory,
  setActiveCategory,
  searchTerm,
  setSearchTerm,
  selectedJob,
  onApplyClick
}) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const jobCategories = [
    { id: 'all', name: 'All Roles', icon: FaBriefcase },
    { id: 'teaching', name: 'Teaching', icon: FaGraduationCap },
    { id: 'tech', name: 'Technology', icon: FaRocket },
    { id: 'operations', name: 'Operations', icon: FaUsers },
    { id: 'marketing', name: 'Marketing', icon: FaUsers },
    { id: 'sales', name: 'Sales', icon: FaUsers },
  ];

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      setError('');
      
      const API_BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
      const response = await axios.get(`${API_BASE_URL}/api/jobs`);
      
      if (response.data.success) {
        setJobs(response.data.jobs);
      } else {
        setError('Failed to load jobs');
      }
    } catch (error) {
      console.error('Error fetching jobs:', error);
      if (error.response?.data?.message) {
        setError(error.response.data.message);
      } else {
        setError('Failed to load jobs. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  // Update categories with actual counts from backend
  const categoriesWithCounts = jobCategories.map(category => {
    if (category.id === 'all') {
      return { ...category, count: jobs.length };
    }
    const count = jobs.filter(job => job.category === category.id).length;
    return { ...category, count };
  });

  const filteredJobs = jobs.filter(job => {
    const matchesCategory = activeCategory === 'all' || job.category === activeCategory;
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (loading) {
    return (
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0b234a] mb-4">Current Openings</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Explore opportunities to join our passionate team and make a difference in education
            </p>
          </div>
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0b234a] mb-4">Current Openings</h2>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-8 text-center">
            <div className="w-16 h-16 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-4">
              <FaSearch className="text-2xl text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-red-600 mb-2">Failed to load jobs</h3>
            <p className="text-red-500 mb-4">{error}</p>
            <button
              onClick={fetchJobs}
              className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0b234a] mb-4">Current Openings</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Explore opportunities to join our passionate team and make a difference in education
          </p>
          {jobs.length > 0 && (
            <p className="text-gray-500 mt-2">
              {jobs.length} job{jobs.length !== 1 ? 's' : ''} available
            </p>
          )}
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search jobs by title, description, or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <button 
              onClick={fetchJobs}
              className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors flex items-center gap-2"
            >
              <FaSearch className="text-sm" />
              Refresh
            </button>
          </div>

          <JobCategoryFilter
            categories={categoriesWithCounts}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        {/* Jobs Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredJobs.map((job) => (
            <JobCard
              key={job._id}
              job={job}
              isSelected={selectedJob?._id === job._id}
              onApplyClick={onApplyClick}
            />
          ))}
        </div>

        {filteredJobs.length === 0 && jobs.length > 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <FaSearch className="text-2xl text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No jobs found</h3>
            <p className="text-gray-500">Try adjusting your search criteria or browse all categories</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setActiveCategory('all');
              }}
              className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 font-medium transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {jobs.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <FaBriefcase className="text-2xl text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No current openings</h3>
            <p className="text-gray-500">Check back later for new opportunities</p>
            <button
              onClick={fetchJobs}
              className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 font-medium transition-colors"
            >
              Check Again
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default JobOpenings;