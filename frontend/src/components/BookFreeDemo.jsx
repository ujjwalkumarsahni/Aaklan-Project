// import React, { useState } from 'react';

// const BookDemoForm = () => {
//   // State for form fields
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phoneNumber: '',
//     designation: '',
//     schoolName: '',
//     city: '',
//     schoolAddress: '',
//     scheduleCallFor: '',
//     message: ''
//   });

//   // State for OTP functionality
//   const [isOtpSent, setIsOtpSent] = useState(false);
//   const [isOtpVerified, setIsOtpVerified] = useState(false);

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   // Handle OTP send (mock function)
//   const handleSendOtp = () => {
//     if (formData.phoneNumber) {
//       setIsOtpSent(true);
//       // Mock OTP sending - in real app, this would call an API
//       setTimeout(() => {
//         setIsOtpVerified(true);
//       }, 2000);
//     }
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     // Handle form submission logic here
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-2xl mx-auto">
//         {/* Form Card */}
//         <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
//           {/* Header */}
//           <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-8 text-center">
//             <h1 className="text-3xl font-bold text-white mb-2 transform transition-transform duration-300 hover:scale-105">
//               Book Free Demo Request
//             </h1>
//             <p className="text-blue-100 text-lg">
//               Fill out the form below and we'll get back to you soon
//             </p>
//           </div>

//           {/* Form */}
//           <form onSubmit={handleSubmit} className="px-6 py-8 sm:px-8">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {/* Name Field */}
//               <div className="md:col-span-2">
//                 <label className="block text-sm font-semibold text-gray-700 mb-2">
//                   Full Name *
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
//                   placeholder="Enter your full name"
//                 />
//               </div>

//               {/* Email Field */}
//               <div className="md:col-span-2">
//                 <label className="block text-sm font-semibold text-gray-700 mb-2">
//                   Email Address *
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
//                   placeholder="Enter your email address"
//                 />
//               </div>

//               {/* Phone Number with OTP */}
//               <div className="md:col-span-2">
//                 <label className="block text-sm font-semibold text-gray-700 mb-2">
//                   Phone Number *
//                 </label>
//                 <div className="flex gap-3">
//                   <input
//                     type="tel"
//                     name="phoneNumber"
//                     value={formData.phoneNumber}
//                     onChange={handleChange}
//                     required
//                     className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
//                     placeholder="Enter your phone number"
//                   />
//                   <button
//                     type="button"
//                     onClick={handleSendOtp}
//                     disabled={!formData.phoneNumber || isOtpSent}
//                     className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
//                       !formData.phoneNumber || isOtpSent
//                         ? 'bg-gray-300 cursor-not-allowed'
//                         : 'bg-blue-600 hover:bg-blue-700 transform hover:scale-105'
//                     } text-white text-sm`}
//                   >
//                     {isOtpSent ? 'OTP Sent' : 'Send OTP'}
//                   </button>
//                 </div>
//                 {isOtpVerified && (
//                   <p className="text-green-600 text-sm mt-2 flex items-center">
//                     <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
//                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                     </svg>
//                     Phone number verified
//                   </p>
//                 )}
//               </div>

//               {/* Designation Dropdown */}
//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-2">
//                   Designation *
//                 </label>
//                 <select
//                   name="designation"
//                   value={formData.designation}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none appearance-none bg-white"
//                 >
//                   <option value="">Select Designation</option>
//                   <option value="Educator">Educator</option>
//                   <option value="Management">Management</option>
//                   <option value="Principal">Principal</option>
//                   <option value="Parent">Parent</option>
//                   <option value="Trainer">Trainer</option>
//                   <option value="Student">Student</option>
//                   <option value="Other">Other</option>
//                 </select>
//               </div>

//               {/* School Name */}
//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-2">
//                   School Name *
//                 </label>
//                 <input
//                   type="text"
//                   name="schoolName"
//                   value={formData.schoolName}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
//                   placeholder="Enter school name"
//                 />
//               </div>

//               {/* City */}
//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-2">
//                   City *
//                 </label>
//                 <input
//                   type="text"
//                   name="city"
//                   value={formData.city}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
//                   placeholder="Enter city"
//                 />
//               </div>

//               {/* School Address */}
//               <div className="md:col-span-2">
//                 <label className="block text-sm font-semibold text-gray-700 mb-2">
//                   School Address *
//                 </label>
//                 <input
//                   type="text"
//                   name="schoolAddress"
//                   value={formData.schoolAddress}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
//                   placeholder="Enter complete school address"
//                 />
//               </div>

//               {/* Schedule Call For */}
//               <div className="md:col-span-2">
//                 <label className="block text-sm font-semibold text-gray-700 mb-2">
//                   Schedule Call For *
//                 </label>
//                 <select
//                   name="scheduleCallFor"
//                   value={formData.scheduleCallFor}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none appearance-none bg-white"
//                 >
//                   <option value="">Select Option</option>
//                   <option value="AI and Robotics Lab">AI and Robotics Lab</option>
//                   <option value="Computer & Coding Books for School">Computer & Coding Books for School</option>
//                   <option value="Online Coding & Robotics Classes">Online Coding & Robotics Classes</option>
//                   <option value="Hire Coding, Robotics & AI Trainer for School">Hire Coding, Robotics & AI Trainer for School</option>
//                   <option value="VR/AR Lab">VR/AR Lab</option>
//                   <option value="Coding, Robotics & AI Workshop in School">Coding, Robotics & AI Workshop in School</option>
//                   <option value="Other">Other</option>
//                 </select>
//               </div>

//               {/* Message Textarea */}
//               <div className="md:col-span-2">
//                 <label className="block text-sm font-semibold text-gray-700 mb-2">
//                   Your Message (Optional)
//                 </label>
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows="4"
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none resize-none"
//                   placeholder="Any additional information you'd like to share..."
//                 />
//               </div>
//             </div>

//             {/* Submit Button */}
//             <div className="mt-8">
//               <button
//                 type="submit"
//                 className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-indigo-800 transform hover:scale-105 transition-all duration-300 focus:ring-4 focus:ring-blue-200 focus:outline-none shadow-lg"
//               >
//                 Submit Demo Request
//               </button>
//             </div>
//           </form>
//         </div>

//         {/* Footer Note */}
//         <p className="text-center text-gray-600 mt-6 text-sm">
//           We'll contact you within 24 hours to schedule your free demo
//         </p>
//       </div>
//     </div>
//   );
// };

// export default BookDemoForm;



import React, { useState } from 'react';
import axios from 'axios';

const BookDemoForm = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    designation: '',
    schoolName: '',
    city: '',
    schoolAddress: '',
    scheduleCallFor: '',
    message: ''
  });

  // State for OTP functionality
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [errors, setErrors] = useState({});

  // API base URL - using axios base instance
  const API_BASE = 'http://localhost:5000/api';

  // Create axios instance with default config
  const api = axios.create({
    baseURL: API_BASE,
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 10000, // 10 seconds timeout
  });

  // Add response interceptor for error handling
  api.interceptors.response.use(
    (response) => response,
    (error) => {
      console.error('API Error:', error);
      if (error.code === 'ECONNABORTED') {
        throw new Error('Request timeout. Please try again.');
      }
      if (!error.response) {
        throw new Error('Network error. Please check your connection.');
      }
      throw error;
    }
  );

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear errors when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Handle OTP input change
  const handleOtpChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 6); // Only numbers, max 6 digits
    setOtp(value);
    if (errors.otp) {
      setErrors(prev => ({ ...prev, otp: '' }));
    }
  };

  // Send OTP to backend using Axios
  const handleSendOtp = async () => {
    // Validate required fields for OTP
    if (!formData.phoneNumber || !formData.email || !formData.name) {
      setErrors({
        phoneNumber: !formData.phoneNumber ? 'Phone number is required' : '',
        email: !formData.email ? 'Email is required' : '',
        name: !formData.name ? 'Name is required' : ''
      });
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrors({ email: 'Please enter a valid email address' });
      return;
    }

    setLoading(true);
    setSubmitStatus('');
    
    try {
      const response = await api.post('/otp/send', {
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        name: formData.name
      });

      const { data } = response;

      if (data.success) {
        setIsOtpSent(true);
        setSubmitStatus('OTP sent successfully! Check your email.');
        setErrors({});
      } else {
        setErrors({ otp: data.message || 'Failed to send OTP' });
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
      if (error.response?.data?.message) {
        setErrors({ otp: error.response.data.message });
      } else {
        setErrors({ otp: error.message || 'Failed to send OTP. Please try again.' });
      }
    } finally {
      setLoading(false);
    }
  };

  // Verify OTP with backend using Axios
  const handleVerifyOtp = async () => {
    if (!otp || otp.length !== 6) {
      setErrors({ otp: 'Please enter a valid 6-digit OTP' });
      return;
    }

    setLoading(true);
    try {
      const response = await api.post('/otp/verify', {
        email: formData.email,
        otp: otp,
        phoneNumber: formData.phoneNumber
      });

      const { data } = response;

      if (data.success) {
        setIsOtpVerified(true);
        setSubmitStatus('Phone number verified successfully! You can now submit the form.');
        setErrors({});
      } else {
        setErrors({ otp: data.message || 'Invalid OTP' });
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      if (error.response?.data?.message) {
        setErrors({ otp: error.response.data.message });
      } else {
        setErrors({ otp: error.message || 'Failed to verify OTP. Please try again.' });
      }
    } finally {
      setLoading(false);
    }
  };

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name?.trim()) newErrors.name = 'Name is required';
    if (!formData.email?.trim()) newErrors.email = 'Email is required';
    if (!formData.phoneNumber?.trim()) newErrors.phoneNumber = 'Phone number is required';
    if (!formData.designation) newErrors.designation = 'Designation is required';
    if (!formData.schoolName?.trim()) newErrors.schoolName = 'School name is required';
    if (!formData.city?.trim()) newErrors.city = 'City is required';
    if (!formData.schoolAddress?.trim()) newErrors.schoolAddress = 'School address is required';
    if (!formData.scheduleCallFor) newErrors.scheduleCallFor = 'Please select an option';

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    return newErrors;
  };

  // Handle form submission using Axios
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all required fields
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    if (!isOtpVerified) {
      setErrors({ otp: 'Please verify your phone number with OTP first' });
      return;
    }

    setLoading(true);
    setSubmitStatus('');
    
    try {
      const response = await api.post('/book-demo', formData);
      const { data } = response;

      if (data.success) {
        setSubmitStatus('Demo request submitted successfully! We will contact you within 24 hours.');
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phoneNumber: '',
          designation: '',
          schoolName: '',
          city: '',
          schoolAddress: '',
          scheduleCallFor: '',
          message: ''
        });
        setIsOtpSent(false);
        setIsOtpVerified(false);
        setOtp('');
        setErrors({});
      } else {
        setSubmitStatus(`Submission failed: ${data.message}`);
        if (data.errors) {
          const serverErrors = {};
          data.errors.forEach(error => {
            const field = error.split(' ')[0].toLowerCase();
            serverErrors[field] = error;
          });
          setErrors(serverErrors);
        }
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      if (error.response?.data?.message) {
        setSubmitStatus(`Submission failed: ${error.response.data.message}`);
        if (error.response.data.errors) {
          const serverErrors = {};
          error.response.data.errors.forEach(error => {
            const field = error.split(' ')[0].toLowerCase();
            serverErrors[field] = error;
          });
          setErrors(serverErrors);
        }
      } else {
        setSubmitStatus(error.message || 'Failed to submit form. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  // Reset OTP process
  const handleResetOtp = () => {
    setIsOtpSent(false);
    setIsOtpVerified(false);
    setOtp('');
    setErrors(prev => ({ ...prev, otp: '' }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-8 text-center">
            <h1 className="text-3xl font-bold text-white mb-2 transform transition-transform duration-300 hover:scale-105">
              Book Free Demo Request
            </h1>
            <p className="text-blue-100 text-lg">
              Fill out the form below and we'll get back to you soon
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="px-6 py-8 sm:px-8">
            {/* Status Message */}
            {submitStatus && (
              <div className={`mb-6 p-4 rounded-lg ${
                submitStatus.includes('successfully') 
                  ? 'bg-green-50 text-green-800 border border-green-200' 
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}>
                <div className="flex items-center justify-between">
                  <span>{submitStatus}</span>
                  {submitStatus.includes('successfully') && (
                    <button
                      type="button"
                      onClick={() => setSubmitStatus('')}
                      className="text-green-600 hover:text-green-800"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none ${
                    errors.name ? 'border-red-300 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Email Field */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none ${
                    errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder="Enter your email address"
                />
                {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Phone Number with OTP */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <div className="flex gap-3">
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    className={`flex-1 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none ${
                      errors.phoneNumber ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="Enter your phone number"
                  />
                  <button
                    type="button"
                    onClick={handleSendOtp}
                    disabled={!formData.phoneNumber || !formData.email || !formData.name || isOtpSent || loading}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 text-white text-sm min-w-[120px] ${
                      !formData.phoneNumber || !formData.email || !formData.name || isOtpSent || loading
                        ? 'bg-gray-300 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700 transform hover:scale-105'
                    }`}
                  >
                    {loading ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : isOtpSent ? 'OTP Sent' : 'Send OTP'}
                  </button>
                </div>
                {errors.phoneNumber && <p className="text-red-600 text-sm mt-1">{errors.phoneNumber}</p>}

                {/* OTP Verification Section */}
                {isOtpSent && !isOtpVerified && (
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center justify-between mb-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        Enter OTP Sent to Your Email
                      </label>
                      <button
                        type="button"
                        onClick={handleResetOtp}
                        className="text-sm text-blue-600 hover:text-blue-800"
                      >
                        Resend OTP
                      </button>
                    </div>
                    <div className="flex gap-3">
                      <input
                        type="text"
                        value={otp}
                        onChange={handleOtpChange}
                        maxLength="6"
                        placeholder="Enter 6-digit OTP"
                        className={`flex-1 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none text-center text-lg font-mono ${
                          errors.otp ? 'border-red-300 bg-red-50' : 'border-gray-300'
                        }`}
                      />
                      <button
                        type="button"
                        onClick={handleVerifyOtp}
                        disabled={!otp || otp.length !== 6 || loading}
                        className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 text-white text-sm min-w-[120px] ${
                          !otp || otp.length !== 6 || loading
                            ? 'bg-gray-300 cursor-not-allowed'
                            : 'bg-green-600 hover:bg-green-700 transform hover:scale-105'
                        }`}
                      >
                        {loading ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Verifying...
                          </span>
                        ) : 'Verify OTP'}
                      </button>
                    </div>
                    {errors.otp && <p className="text-red-600 text-sm mt-2">{errors.otp}</p>}
                  </div>
                )}

                {isOtpVerified && (
                  <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
                    <p className="text-green-700 text-sm flex items-center">
                      <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Phone number verified successfully! You can now submit the form.
                    </p>
                  </div>
                )}
              </div>

              {/* Designation Dropdown */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Designation *
                </label>
                <select
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none appearance-none bg-white ${
                    errors.designation ? 'border-red-300 bg-red-50' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select Designation</option>
                  <option value="Educator">Educator</option>
                  <option value="Management">Management</option>
                  <option value="Principal">Principal</option>
                  <option value="Parent">Parent</option>
                  <option value="Trainer">Trainer</option>
                  <option value="Student">Student</option>
                  <option value="Other">Other</option>
                </select>
                {errors.designation && <p className="text-red-600 text-sm mt-1">{errors.designation}</p>}
              </div>

              {/* School Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  School Name *
                </label>
                <input
                  type="text"
                  name="schoolName"
                  value={formData.schoolName}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none ${
                    errors.schoolName ? 'border-red-300 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder="Enter school name"
                />
                {errors.schoolName && <p className="text-red-600 text-sm mt-1">{errors.schoolName}</p>}
              </div>

              {/* City */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  City *
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none ${
                    errors.city ? 'border-red-300 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder="Enter city"
                />
                {errors.city && <p className="text-red-600 text-sm mt-1">{errors.city}</p>}
              </div>

              {/* School Address */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  School Address *
                </label>
                <input
                  type="text"
                  name="schoolAddress"
                  value={formData.schoolAddress}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none ${
                    errors.schoolAddress ? 'border-red-300 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder="Enter complete school address"
                />
                {errors.schoolAddress && <p className="text-red-600 text-sm mt-1">{errors.schoolAddress}</p>}
              </div>

              {/* Schedule Call For */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Schedule Call For *
                </label>
                <select
                  name="scheduleCallFor"
                  value={formData.scheduleCallFor}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none appearance-none bg-white ${
                    errors.scheduleCallFor ? 'border-red-300 bg-red-50' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select Option</option>
                  <option value="AI and Robotics Lab">AI and Robotics Lab</option>
                  <option value="Computer & Coding Books for School">Computer & Coding Books for School</option>
                  <option value="Online Coding & Robotics Classes">Online Coding & Robotics Classes</option>
                  <option value="Hire Coding, Robotics & AI Trainer for School">Hire Coding, Robotics & AI Trainer for School</option>
                  <option value="VR/AR Lab">VR/AR Lab</option>
                  <option value="Coding, Robotics & AI Workshop in School">Coding, Robotics & AI Workshop in School</option>
                  <option value="Other">Other</option>
                </select>
                {errors.scheduleCallFor && <p className="text-red-600 text-sm mt-1">{errors.scheduleCallFor}</p>}
              </div>

              {/* Message Textarea */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Message (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none resize-none"
                  placeholder="Any additional information you'd like to share..."
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <button
                type="submit"
                disabled={!isOtpVerified || loading}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transform transition-all duration-300 focus:ring-4 focus:outline-none shadow-lg flex items-center justify-center ${
                  !isOtpVerified || loading
                    ? 'bg-gray-400 cursor-not-allowed text-gray-700'
                    : 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:from-blue-700 hover:to-indigo-800 hover:scale-105 focus:ring-blue-200'
                }`}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  'Submit Demo Request'
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Footer Note */}
        <p className="text-center text-gray-600 mt-6 text-sm">
          We'll contact you within 24 hours to schedule your free demo
        </p>
      </div>
    </div>
  );
};

export default BookDemoForm;