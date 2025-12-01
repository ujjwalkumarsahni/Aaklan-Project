// import React, { useState } from 'react';
// import axios from 'axios';

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
//   const [otp, setOtp] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState('');
//   const [errors, setErrors] = useState({});

//   // API base URL - using axios base instance
//   const API_BASE = 'http://localhost:5000/api';

//   // Create axios instance with default config
//   const api = axios.create({
//     baseURL: API_BASE,
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     timeout: 10000, // 10 seconds timeout
//   });

//   // Add response interceptor for error handling
//   api.interceptors.response.use(
//     (response) => response,
//     (error) => {
//       console.error('API Error:', error);
//       if (error.code === 'ECONNABORTED') {
//         throw new Error('Request timeout. Please try again.');
//       }
//       if (!error.response) {
//         throw new Error('Network error. Please check your connection.');
//       }
//       throw error;
//     }
//   );

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//     // Clear errors when user starts typing
//     if (errors[name]) {
//       setErrors(prev => ({ ...prev, [name]: '' }));
//     }
//   };

//   // Handle OTP input change
//   const handleOtpChange = (e) => {
//     const value = e.target.value.replace(/\D/g, '').slice(0, 6); // Only numbers, max 6 digits
//     setOtp(value);
//     if (errors.otp) {
//       setErrors(prev => ({ ...prev, otp: '' }));
//     }
//   };

//   // Send OTP to backend using Axios
//   const handleSendOtp = async () => {
//     // Validate required fields for OTP
//     if (!formData.phoneNumber || !formData.email || !formData.name) {
//       setErrors({
//         phoneNumber: !formData.phoneNumber ? 'Phone number is required' : '',
//         email: !formData.email ? 'Email is required' : '',
//         name: !formData.name ? 'Name is required' : ''
//       });
//       return;
//     }

//     // Validate email format
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(formData.email)) {
//       setErrors({ email: 'Please enter a valid email address' });
//       return;
//     }

//     setLoading(true);
//     setSubmitStatus('');
    
//     try {
//       const response = await api.post('/otp/send', {
//         email: formData.email,
//         phoneNumber: formData.phoneNumber,
//         name: formData.name
//       });

//       const { data } = response;

//       if (data.success) {
//         setIsOtpSent(true);
//         setSubmitStatus('OTP sent successfully! Check your email.');
//         setErrors({});
//       } else {
//         setErrors({ otp: data.message || 'Failed to send OTP' });
//       }
//     } catch (error) {
//       console.error('Error sending OTP:', error);
//       if (error.response?.data?.message) {
//         setErrors({ otp: error.response.data.message });
//       } else {
//         setErrors({ otp: error.message || 'Failed to send OTP. Please try again.' });
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Verify OTP with backend using Axios
//   const handleVerifyOtp = async () => {
//     if (!otp || otp.length !== 6) {
//       setErrors({ otp: 'Please enter a valid 6-digit OTP' });
//       return;
//     }

//     setLoading(true);
//     try {
//       const response = await api.post('/otp/verify', {
//         email: formData.email,
//         otp: otp,
//         phoneNumber: formData.phoneNumber
//       });

//       const { data } = response;

//       if (data.success) {
//         setIsOtpVerified(true);
//         setSubmitStatus('Phone number verified successfully! You can now submit the form.');
//         setErrors({});
//       } else {
//         setErrors({ otp: data.message || 'Invalid OTP' });
//       }
//     } catch (error) {
//       console.error('Error verifying OTP:', error);
//       if (error.response?.data?.message) {
//         setErrors({ otp: error.response.data.message });
//       } else {
//         setErrors({ otp: error.message || 'Failed to verify OTP. Please try again.' });
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Validate form fields
//   const validateForm = () => {
//     const newErrors = {};
    
//     if (!formData.name?.trim()) newErrors.name = 'Name is required';
//     if (!formData.email?.trim()) newErrors.email = 'Email is required';
//     if (!formData.phoneNumber?.trim()) newErrors.phoneNumber = 'Phone number is required';
//     if (!formData.designation) newErrors.designation = 'Designation is required';
//     if (!formData.schoolName?.trim()) newErrors.schoolName = 'School name is required';
//     if (!formData.city?.trim()) newErrors.city = 'City is required';
//     if (!formData.schoolAddress?.trim()) newErrors.schoolAddress = 'School address is required';
//     if (!formData.scheduleCallFor) newErrors.scheduleCallFor = 'Please select an option';

//     // Email format validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (formData.email && !emailRegex.test(formData.email)) {
//       newErrors.email = 'Please enter a valid email address';
//     }

//     return newErrors;
//   };

//   // Handle form submission using Axios
//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     // Validate all required fields
//     const formErrors = validateForm();
//     if (Object.keys(formErrors).length > 0) {
//       setErrors(formErrors);
//       return;
//     }

//     if (!isOtpVerified) {
//       setErrors({ otp: 'Please verify your phone number with OTP first' });
//       return;
//     }

//     setLoading(true);
//     setSubmitStatus('');
    
//     try {
//       const response = await api.post('/book-demo', formData);
//       const { data } = response;

//       if (data.success) {
//         setSubmitStatus('Demo request submitted successfully! We will contact you within 24 hours.');
        
//         // Reset form
//         setFormData({
//           name: '',
//           email: '',
//           phoneNumber: '',
//           designation: '',
//           schoolName: '',
//           city: '',
//           schoolAddress: '',
//           scheduleCallFor: '',
//           message: ''
//         });
//         setIsOtpSent(false);
//         setIsOtpVerified(false);
//         setOtp('');
//         setErrors({});
//       } else {
//         setSubmitStatus(`Submission failed: ${data.message}`);
//         if (data.errors) {
//           const serverErrors = {};
//           data.errors.forEach(error => {
//             const field = error.split(' ')[0].toLowerCase();
//             serverErrors[field] = error;
//           });
//           setErrors(serverErrors);
//         }
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       if (error.response?.data?.message) {
//         setSubmitStatus(`Submission failed: ${error.response.data.message}`);
//         if (error.response.data.errors) {
//           const serverErrors = {};
//           error.response.data.errors.forEach(error => {
//             const field = error.split(' ')[0].toLowerCase();
//             serverErrors[field] = error;
//           });
//           setErrors(serverErrors);
//         }
//       } else {
//         setSubmitStatus(error.message || 'Failed to submit form. Please try again.');
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Reset OTP process
//   const handleResetOtp = () => {
//     setIsOtpSent(false);
//     setIsOtpVerified(false);
//     setOtp('');
//     setErrors(prev => ({ ...prev, otp: '' }));
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">

//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         {/* Floating Circles */}
//         <div className="absolute top-4 left-4 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-amber-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
//         <div className="absolute top-20 right-4 sm:top-40 sm:right-10 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-emerald-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
//         <div className="absolute bottom-16 left-8 sm:bottom-20 sm:left-20 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-rose-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '4s' }}></div>

//         {/* Grid Pattern */}
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute inset-0" style={{
//             backgroundImage: `linear-gradient(#f8fafc 1px, transparent 1px),
//                       linear-gradient(90deg, #f8fafc 1px, transparent 1px)`,
//             backgroundSize: '40px 40px',
//           }}></div>
//         </div>

//         {/* Animated Gradient Orbs */}
//         <div className="absolute -top-32 -left-32 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-r from-amber-500 to-emerald-400 rounded-full opacity-10 animate-pulse-slow"></div>
//         <div className="absolute -bottom-32 -right-32 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-r from-blue-500 to-rose-500 rounded-full opacity-10 animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>

//         {/* Additional floating elements */}
//         <div className="absolute top-1/4 right-1/4 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-gradient-to-br from-amber-500 to-rose-500 rounded-full opacity-15 animate-float" style={{ animationDelay: '1s' }}></div>
//         <div className="absolute bottom-1/3 left-1/4 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-gradient-to-tr from-emerald-400 to-blue-500 rounded-full opacity-20 animate-float" style={{ animationDelay: '3s' }}></div>
//       </div>

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
//             {/* Status Message */}
//             {submitStatus && (
//               <div className={`mb-6 p-4 rounded-lg ${
//                 submitStatus.includes('successfully') 
//                   ? 'bg-green-50 text-green-800 border border-green-200' 
//                   : 'bg-red-50 text-red-800 border border-red-200'
//               }`}>
//                 <div className="flex items-center justify-between">
//                   <span>{submitStatus}</span>
//                   {submitStatus.includes('successfully') && (
//                     <button
//                       type="button"
//                       onClick={() => setSubmitStatus('')}
//                       className="text-green-600 hover:text-green-800"
//                     >
//                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                       </svg>
//                     </button>
//                   )}
//                 </div>
//               </div>
//             )}

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
//                   className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none ${
//                     errors.name ? 'border-red-300 bg-red-50' : 'border-gray-300'
//                   }`}
//                   placeholder="Enter your full name"
//                 />
//                 {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
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
//                   className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none ${
//                     errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'
//                   }`}
//                   placeholder="Enter your email address"
//                 />
//                 {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
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
//                     className={`flex-1 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none ${
//                       errors.phoneNumber ? 'border-red-300 bg-red-50' : 'border-gray-300'
//                     }`}
//                     placeholder="Enter your phone number"
//                   />
//                   <button
//                     type="button"
//                     onClick={handleSendOtp}
//                     disabled={!formData.phoneNumber || !formData.email || !formData.name || isOtpSent || loading}
//                     className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 text-white text-sm min-w-[120px] ${
//                       !formData.phoneNumber || !formData.email || !formData.name || isOtpSent || loading
//                         ? 'bg-gray-300 cursor-not-allowed'
//                         : 'bg-blue-600 hover:bg-blue-700 transform hover:scale-105'
//                     }`}
//                   >
//                     {loading ? (
//                       <span className="flex items-center justify-center">
//                         <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
//                           <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                           <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                         </svg>
//                         Sending...
//                       </span>
//                     ) : isOtpSent ? 'OTP Sent' : 'Send OTP'}
//                   </button>
//                 </div>
//                 {errors.phoneNumber && <p className="text-red-600 text-sm mt-1">{errors.phoneNumber}</p>}

//                 {/* OTP Verification Section */}
//                 {isOtpSent && !isOtpVerified && (
//                   <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
//                     <div className="flex items-center justify-between mb-2">
//                       <label className="block text-sm font-semibold text-gray-700">
//                         Enter OTP Sent to Your Email
//                       </label>
//                       <button
//                         type="button"
//                         onClick={handleResetOtp}
//                         className="text-sm text-blue-600 hover:text-blue-800"
//                       >
//                         Resend OTP
//                       </button>
//                     </div>
//                     <div className="flex gap-3">
//                       <input
//                         type="text"
//                         value={otp}
//                         onChange={handleOtpChange}
//                         maxLength="6"
//                         placeholder="Enter 6-digit OTP"
//                         className={`flex-1 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none text-center text-lg font-mono ${
//                           errors.otp ? 'border-red-300 bg-red-50' : 'border-gray-300'
//                         }`}
//                       />
//                       <button
//                         type="button"
//                         onClick={handleVerifyOtp}
//                         disabled={!otp || otp.length !== 6 || loading}
//                         className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 text-white text-sm min-w-[120px] ${
//                           !otp || otp.length !== 6 || loading
//                             ? 'bg-gray-300 cursor-not-allowed'
//                             : 'bg-green-600 hover:bg-green-700 transform hover:scale-105'
//                         }`}
//                       >
//                         {loading ? (
//                           <span className="flex items-center justify-center">
//                             <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
//                               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                             </svg>
//                             Verifying...
//                           </span>
//                         ) : 'Verify OTP'}
//                       </button>
//                     </div>
//                     {errors.otp && <p className="text-red-600 text-sm mt-2">{errors.otp}</p>}
//                   </div>
//                 )}

//                 {isOtpVerified && (
//                   <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
//                     <p className="text-green-700 text-sm flex items-center">
//                       <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
//                         <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                       </svg>
//                       Phone number verified successfully! You can now submit the form.
//                     </p>
//                   </div>
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
//                   className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none appearance-none bg-white ${
//                     errors.designation ? 'border-red-300 bg-red-50' : 'border-gray-300'
//                   }`}
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
//                 {errors.designation && <p className="text-red-600 text-sm mt-1">{errors.designation}</p>}
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
//                   className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none ${
//                     errors.schoolName ? 'border-red-300 bg-red-50' : 'border-gray-300'
//                   }`}
//                   placeholder="Enter school name"
//                 />
//                 {errors.schoolName && <p className="text-red-600 text-sm mt-1">{errors.schoolName}</p>}
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
//                   className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none ${
//                     errors.city ? 'border-red-300 bg-red-50' : 'border-gray-300'
//                   }`}
//                   placeholder="Enter city"
//                 />
//                 {errors.city && <p className="text-red-600 text-sm mt-1">{errors.city}</p>}
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
//                   className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none ${
//                     errors.schoolAddress ? 'border-red-300 bg-red-50' : 'border-gray-300'
//                   }`}
//                   placeholder="Enter complete school address"
//                 />
//                 {errors.schoolAddress && <p className="text-red-600 text-sm mt-1">{errors.schoolAddress}</p>}
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
//                   className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none appearance-none bg-white ${
//                     errors.scheduleCallFor ? 'border-red-300 bg-red-50' : 'border-gray-300'
//                   }`}
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
//                 {errors.scheduleCallFor && <p className="text-red-600 text-sm mt-1">{errors.scheduleCallFor}</p>}
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
//                 disabled={!isOtpVerified || loading}
//                 className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transform transition-all duration-300 focus:ring-4 focus:outline-none shadow-lg flex items-center justify-center ${
//                   !isOtpVerified || loading
//                     ? 'bg-gray-400 cursor-not-allowed text-gray-700'
//                     : 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:from-blue-700 hover:to-indigo-800 hover:scale-105 focus:ring-blue-200'
//                 }`}
//               >
//                 {loading ? (
//                   <>
//                     <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
//                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                     </svg>
//                     Submitting...
//                   </>
//                 ) : (
//                   'Submit Demo Request'
//                 )}
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


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {toast} from 'react-hot-toast'

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
    timeout: 10000,
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
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Handle OTP input change
  const handleOtpChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 6);
    setOtp(value);
    if (errors.otp) {
      setErrors(prev => ({ ...prev, otp: '' }));
    }
  };

  // Send OTP to backend using Axios
  const handleSendOtp = async () => {
    if (!formData.phoneNumber || !formData.email || !formData.name) {
      setErrors({
        phoneNumber: !formData.phoneNumber ? 'Phone number is required' : '',
        email: !formData.email ? 'Email is required' : '',
        name: !formData.name ? 'Name is required' : ''
      });
      return;
    }

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
        toast.success('OTP sent successfully! Check your email.')
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

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    return newErrors;
  };

  // Handle form submission using Axios
  const handleSubmit = async (e) => {
    e.preventDefault();
    
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
    <div className="min-h-screen bg-gradient-to-br from-[#E22213] via-[#0b234a] to-orange-500 p-4 sm:p-6 lg:p-8 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gradient mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#E22213] via-[#0b234a] to-orange-500"></div>
        
        {/* Animated orbs - glass morphism effect */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-r from-[#E22213]/20 via-[#0b234a]/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${10 + Math.random() * 20}s`
              }}
            />
          ))}
        </div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                             linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}>
        </div>
      </div>

      {/* Main container */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header section */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-500 mb-3 animate-fade-in">
            Book Your Free Demo
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto">
            Experience the future of education. Schedule a personalized demo tailored to your needs.
          </p>
        </div>

        {/* Glass morphism form card */}
        <div className="backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-3xl">
          {/* Form header */}
          <div className="p-8 sm:p-10 border-b border-white/10 bg-gradient-to-r from-white/5 to-white/10">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-cyan-500 animate-pulse"></div>
              <h2 className="text-2xl font-semibold text-white">Demo Request Form</h2>
            </div>
            <p className="text-gray-300">Fill in your details below and our team will reach out to schedule your demo.</p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 sm:p-8 md:p-10">
            {/* Status Message */}
            {submitStatus && (
              <div className={`mb-8 p-4 rounded-2xl backdrop-blur-sm border transition-all duration-300 ${
                submitStatus.includes('successfully') 
                  ? 'bg-gradient-to-r from-[#E22213] via-[#0b234a] to-orange-500 border-green-500/20 text-green-400' 
                  : 'bg-gradient-to-r from-red-500/10 to-rose-500/10 border-red-500/20 text-red-400'
              }`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {submitStatus.includes('successfully') ? (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    )}
                    <span>{submitStatus}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSubmitStatus('')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Name Field */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                    Full Name *
                  </span>
                </label>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`relative w-full px-5 py-4 bg-gray-900/50 border rounded-xl focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all duration-200 outline-none text-white placeholder-gray-500 ${
                      errors.name ? 'border-red -500/50' : 'border-white/10'
                    }`}
                    placeholder="John Doe"
                  />
                </div>
                {errors.name && <p className="text-red-400 text-sm mt-2 ml-1 flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errors.name}
                </p>}
              </div>

              {/* Email Field */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                    Email Address *
                  </span>
                </label>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`relative w-full px-5 py-4 bg-gray-900/50 border rounded-xl focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all duration-200 outline-none text-white placeholder-gray-500 ${
                      errors.email ? 'border-red-500/50' : 'border-white/10'
                    }`}
                    placeholder="john@example.com"
                  />
                </div>
                {errors.email && <p className="text-red-400 text-sm mt-2 ml-1 flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errors.email}
                </p>}
              </div>

              {/* Phone Number with OTP */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                    Phone Number *
                    {isOtpVerified && (
                      <span className="inline-flex items-center gap-1 px-2 py-1 text-xs bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 rounded-full">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Verified
                      </span>
                    )}
                  </span>
                </label>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative group flex-1">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                      className={`relative w-full px-5 py-4 bg-gray-900/50 border rounded-xl focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all duration-200 outline-none text-white placeholder-gray-500 ${
                        errors.phoneNumber ? 'border-red-500/50' : 'border-white/10'
                      }`}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleSendOtp}
                    disabled={!formData.phoneNumber || !formData.email || !formData.name || isOtpSent || loading}
                    className={`relative group px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                      !formData.phoneNumber || !formData.email || !formData.name || isOtpSent || loading
                        ? 'bg-gray-800/50 text-gray-500 cursor-not-allowed border border-gray-700/50'
                        : 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/25 transform hover:-translate-y-0.5'
                    }`}
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                        </svg>
                        Sending...
                      </span>
                    ) : isOtpSent ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        OTP Sent
                      </span>
                    ) : 'Send OTP'}
                  </button>
                </div>
                {errors.phoneNumber && <p className="text-red-400 text-sm mt-2 ml-1 flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errors.phoneNumber}
                </p>}

                {/* OTP Verification Section */}
                {isOtpSent && !isOtpVerified && (
                  <div className="mt-6 p-6 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl border border-cyan-500/20 backdrop-blur-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">
                          Enter 6-digit OTP sent to your email
                        </label>
                        <p className="text-sm text-gray-400">Check your inbox and spam folder</p>
                      </div>
                      <button
                        type="button"
                        onClick={handleResetOtp}
                        className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                        </svg>
                        Resend OTP
                      </button>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="relative group flex-1">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                        <input
                          type="text"
                          value={otp}
                          onChange={handleOtpChange}
                          maxLength="6"
                          placeholder="• • • • • •"
                          className={`relative w-full px-5 py-4 bg-gray-900/50 border rounded-xl focus:ring-2 focus:ring-green-500/50 focus:border-transparent transition-all duration-200 outline-none text-center text-2xl font-mono tracking-widest text-white ${
                            errors.otp ? 'border-red-500/50' : 'border-white/10'
                          }`}
                        />
                      </div>
                      <button
                        type="button"
                        onClick={handleVerifyOtp}
                        disabled={!otp || otp.length !== 6 || loading}
                        className={`relative group px-8 py-4 rounded-xl font-medium transition-all duration-300 ${
                          !otp || otp.length !== 6 || loading
                            ? 'bg-gray-800/50 text-gray-500 cursor-not-allowed border border-gray-700/50'
                            : 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:shadow-lg hover:shadow-green-500/25 transform hover:-translate-y-0.5'
                        }`}
                      >
                        {loading ? (
                          <span className="flex items-center justify-center gap-2">
                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                            </svg>
                            Verifying...
                          </span>
                        ) : 'Verify OTP'}
                      </button>
                    </div>
                    {errors.otp && (
                      <p className="text-red-400 text-sm mt-3 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.otp}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Designation Dropdown */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Designation *
                </label>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                  <select
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    required
                    className={`relative w-full px-5 py-4 bg-gray-900/50 border rounded-xl focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all duration-200 outline-none text-white appearance-none ${
                      errors.designation ? 'border -red-500/50' : 'border-white/10'
                    }`}
                  >
                    <option value="" className="bg-gray-900">Select Designation</option>
                    <option value="Educator" className="bg-gray-900">Educator</option>
                    <option value="Management" className="bg-gray-900">Management</option>
                    <option value="Principal" className="bg-gray-900">Principal</option>
                    <option value="Parent" className="bg-gray-900">Parent</option>
                    <option value="Trainer" className="bg-gray-900">Trainer</option>
                    <option value="Student" className="bg-gray-900">Student</option>
                    <option value="Other" className="bg-gray-900">Other</option>
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                {errors.designation && <p className="text-red-400 text-sm mt-2 ml-1">{errors.designation}</p>}
              </div>

              {/* School Name */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  School Name *
                </label>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                  <input
                    type="text"
                    name="schoolName"
                    value={formData.schoolName}
                    onChange={handleChange}
                    required
                    className={`relative w-full px-5 py-4 bg-gray-900/50 border rounded-xl focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all duration-200 outline-none text-white placeholder-gray-500 ${
                      errors.schoolName ? 'border-red-500/50' : 'border-white/10'
                    }`}
                    placeholder="Springfield High School"
                  />
                </div>
                {errors.schoolName && <p className="text-red-400 text-sm mt-2 ml-1">{errors.schoolName}</p>}
              </div>

              {/* City */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  City *
                </label>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className={`relative w-full px-5 py-4 bg-gray-900/50 border rounded-xl focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all duration-200 outline-none text-white placeholder-gray-500 ${
                      errors.city ? 'border-red-500/50' : 'border-white/10'
                    }`}
                    placeholder="New York"
                  />
                </div>
                {errors.city && <p className="text-red-400 text-sm mt-2 ml-1">{errors.city}</p>}
              </div>

              {/* School Address */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  School Address *
                </label>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                  <input
                    type="text"
                    name="schoolAddress"
                    value={formData.schoolAddress}
                    onChange={handleChange}
                    required
                    className={`relative w-full px-5 py-4 bg-gray-900/50 border rounded-xl focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all duration-200 outline-none text-white placeholder-gray-500 ${
                      errors.schoolAddress ? 'border-red-500/50' : 'border-white/10'
                    }`}
                    placeholder="123 Education Street, Suite 100"
                  />
                </div>
                {errors.schoolAddress && <p className="text-red-400 text-sm mt-2 ml-1">{errors.schoolAddress}</p>}
              </div>

              {/* Schedule Call For */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Schedule Call For *
                </label>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                  <select
                    name="scheduleCallFor"
                    value={formData.scheduleCallFor}
                    onChange={handleChange}
                    required
                    className={`relative w-full px-5 py-4 bg-gray-900/50 border rounded-xl focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all duration-200 outline-none text-white appearance-none ${
                      errors.scheduleCallFor ? 'border-red-500/50' : 'border-white/10'
                    }`}
                  >
                    <option value="" className="bg-gray-900">Select Option</option>
                    <option value="AI and Robotics Lab" className="bg-gray-900">AI and Robotics Lab</option>
                    <option value="Computer & Coding Books for School" className="bg-gray-900">Computer & Coding Books for School</option>
                    <option value="Online Coding & Robotics Classes" className="bg-gray-900">Online Coding & Robotics Classes</option>
                    <option value="Hire Coding, Robotics & AI Trainer for School" className="bg-gray-900">Hire Coding, Robotics & AI Trainer for School</option>
                    <option value="VR/AR Lab" className="bg-gray-900">VR/AR Lab</option>
                    <option value="Coding, Robotics & AI Workshop in School" className="bg-gray-900">Coding, Robotics & AI Workshop in School</option>
                    <option value="Other" className="bg-gray-900">Other</option>
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                {errors.scheduleCallFor && <p className="text-red-400 text-sm mt-2 ml-1">{errors.scheduleCallFor}</p>}
              </div>

              {/* Message Textarea */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Additional Message (Optional)
                </label>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="relative w-full px-5 py-4 bg-gray-900/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all duration-200 outline-none text-white placeholder-gray-500 resize-none"
                    placeholder="Tell us about your specific requirements, preferred demo time, or any questions you have..."
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-10">
              <button
                type="submit"
                disabled={!isOtpVerified || loading}
                className={`relative group w-full py-5 px-8 rounded-2xl font-semibold text-lg transition-all duration-500 overflow-hidden ${
                  !isOtpVerified || loading
                    ? 'bg-gray-800/50 text-gray-500 cursor-not-allowed border border-gray-700/50'
                    : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-2xl hover:shadow-purple-500/30 transform hover:-translate-y-1'
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  !isOtpVerified || loading ? 'hidden' : ''
                }`}></div>
                <span className="relative flex items-center justify-center gap-3">
                  {loading ? (
                    <>
                      <svg className="animate-spin h-6 w-6" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                      </svg>
                      Processing Your Request...
                    </>
                  ) : (
                    <>
                      <span>Submit Demo Request</span>
                      <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </span>
              </button>
              {!isOtpVerified && (
                <p className="text-center text-gray-400 mt-4 text-sm">
                  Please verify your phone number with OTP to submit the form
                </p>
              )}
            </div>
          </form>

          {/* Footer */}
          <div className="p-6 border-t border-white/10 bg-gradient-to-r from-white/5 to-transparent">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Premium Education Suite</p>
                  <p className="text-xs text-gray-400">AI-Powered Learning Platform</p>
                </div>
              </div>
              <p className="text-sm text-gray-400 text-center">
                We'll contact you within 24 hours to schedule your demo
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom animations to Tailwind */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) rotate(120deg);
          }
          66% {
            transform: translateY(20px) rotate(240deg);
          }
        }
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default BookDemoForm;