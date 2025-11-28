import axios from 'axios';
import React, { useState } from 'react';

const AddJob = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: 'teaching',
    type: 'Full-time',
    location: '',
    experience: '',
    salary: '',
    description: '',
    urgent: false,
    featured: false,
    posted: ''   // <-- NEW FIELD
  });


  // Error state
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Job title is required';
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
    }

    if (!formData.experience.trim()) {
      newErrors.experience = 'Experience is required';
    }

    if (!formData.salary.trim()) {
      newErrors.salary = 'Salary range is required';
    }
    if (!formData.posted.trim()) {
      newErrors.posted = 'Posted date is required';
    }


    if (!formData.description.trim()) {
      newErrors.description = 'Job description is required';
    } else if (formData.description.trim().length < 50) {
      newErrors.description = 'Description should be at least 50 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/jobs/create`,
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Job created successfully:', response.data);

      // Reset form after successful submission
      setFormData({
        title: '',
        category: 'teaching',
        type: 'Full-time',
        location: '',
        experience: '',
        salary: '',
        description: '',
        urgent: false,
        featured: false
      });

      setErrors({});
      alert('Job opening added successfully!');
    } catch (error) {
      console.error('Error creating job:', error);

      if (error.response) {
        // Server responded with error status
        console.error('Server error:', error.response.data);
        alert(`Failed to add job opening: ${error.response.data.message || 'Please try again.'}`);
      } else if (error.request) {
        // Request was made but no response received
        console.error('Network error:', error.request);
        alert('Network error. Please check your connection and try again.');
      } else {
        // Something else happened
        console.error('Error:', error.message);
        alert('An unexpected error occurred. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-6 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Add New Job Opening</h2>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Job Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Job Title *</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg ${errors.title ? 'border-red-500' : 'border-gray-300'
              }`}
            placeholder="e.g., Senior Web Developer"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        {/* Category + Type */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
            >
              <option value="teaching">Teaching</option>
              <option value="tech">Tech</option>
              <option value="operations">Operations</option>
              <option value="marketing">Marketing</option>
              <option value="sales">Sales</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Job Type *</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
            >
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Remote">Remote</option>
              <option value="Internship">Internship</option>
            </select>
          </div>

        </div>

        {/* Location + Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Location *</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg ${errors.location ? 'border-red-500' : 'border-gray-300'
                }`}
              placeholder="e.g., Jaipur, Rajasthan"
            />
            {errors.location && <p className="text-red-500 text-sm">{errors.location}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Experience *</label>
            <input
              type="text"
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg ${errors.experience ? 'border-red-500' : 'border-gray-300'
                }`}
              placeholder="e.g., 3–5 years"
            />
            {errors.experience && <p className="text-red-500 text-sm">{errors.experience}</p>}
          </div>

        </div>

        {/* Salary */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Salary Range *</label>
          <input
            type="text"
            name="salary"
            value={formData.salary}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg ${errors.salary ? 'border-red-500' : 'border-gray-300'
              }`}
            placeholder="e.g., ₹6–8 LPA"
          />
          {errors.salary && <p className="text-red-500 text-sm">{errors.salary}</p>}
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Job Description *</label>
          <textarea
            name="description"
            rows={4}
            value={formData.description}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg ${errors.description ? 'border-red-500' : 'border-gray-300'
              }`}
            placeholder="Describe the job responsibilities..."
          />
          {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
        </div>

        {/* Posted Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Posted Date *
          </label>
          <input
            type="date"
            name="posted"
            value={formData.posted}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg ${errors.posted ? 'border-red-500' : 'border-gray-300'
              }`}
          />
          {errors.posted && <p className="text-red-500 text-sm">{errors.posted}</p>}
        </div>


        {/* Checkboxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              name="urgent"
              checked={formData.urgent}
              onChange={handleInputChange}
              className="w-5 h-5"
            />
            <span className="text-gray-700 font-medium">Urgent Hiring</span>
          </label>

          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              name="featured"
              checked={formData.featured}
              onChange={handleInputChange}
              className="w-5 h-5"
            />
            <span className="text-gray-700 font-medium">Featured Job</span>
          </label>

        </div>

        {/* Submit Button */}
        <div className="pt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 bg-blue-600 text-white rounded-lg font-semibold ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
              }`}
          >
            {isSubmitting ? 'Adding Job...' : 'Add Job'}
          </button>
        </div>

      </form>
    </div>
  );
};

export default AddJob;