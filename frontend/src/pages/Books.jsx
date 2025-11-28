// import React, { useState, useEffect } from 'react';
// import GradeWiseTools from '../components/GradeWiseTools';

// const Books = () => {
//   const [activeTab, setActiveTab] = useState('grade1-5');
//   const [showDemoSection, setShowDemoSection] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [hoveredBook, setHoveredBook] = useState(null);

//   // Scroll effect for header
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 100);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const publications = {
//     'grade1-5': {
//       title: "Early Learners Series (Grade 1-5)",
//       icon: "🎨",
//       books: [
//         {
//           name: "AI Adventures - Grade 1",
//           description: "Introduction to basic AI concepts through stories and games",
//           image: "https://roboticschools.com/wp-content/uploads/2024/03/RS_2-2.png",
//           features: ["Interactive Stories", "Colorful Illustrations", "Basic Coding Concepts"],
//           color: "from-blue-500 to-purple-500"
//         },
//         {
//           name: "Robotics Fun - Grade 2",
//           description: "Hands-on robotics activities for young minds",
//           image: "https://roboticschools.com/wp-content/uploads/2024/03/RS_2-2.png",
//           features: ["Simple Robotics", "Pattern Recognition", "Creative Thinking"],
//           color: "from-green-500 to-teal-500"
//         },
//         {
//           name: "Code Explorers - Grade 3-5",
//           description: "Progressive coding and AI learning journey",
//           image: "https://roboticschools.com/wp-content/uploads/2024/03/RS_2-2.png",
//           features: ["Block Coding", "AI Basics", "Project Based Learning"],
//           color: "from-orange-500 to-red-500"
//         }
//       ]
//     },
//     'grade6-8': {
//       title: "Intermediate Innovators (Grade 6-8)",
//       icon: "⚡",
//       books: [
//         {
//           name: "AI Fundamentals - Grade 6",
//           description: "Building strong foundation in AI principles",
//           image: "https://roboticschools.com/wp-content/uploads/2024/03/RS_2-2.png",
//           features: ["Python Basics", "Machine Learning Intro", "Data Analysis"],
//           color: "from-purple-500 to-pink-500"
//         },
//         {
//           name: "Robotics Engineering - Grade 7",
//           description: "Advanced robotics and automation concepts",
//           image: "https://roboticschools.com/wp-content/uploads/2024/03/RS_2-2.png",
//           features: ["Circuit Design", "Sensor Integration", "Problem Solving"],
//           color: "from-teal-500 to-blue-500"
//         },
//         {
//           name: "AI Applications - Grade 8",
//           description: "Real-world AI applications and projects",
//           image: "https://roboticschools.com/wp-content/uploads/2024/03/RS_2-2.png",
//           features: ["Computer Vision", "Natural Language Processing", "Project Development"],
//           color: "from-red-500 to-orange-500"
//         }
//       ]
//     },
//     'grade9-10': {
//       title: "Advanced AI Masters (Grade 9-10)",
//       icon: "🚀",
//       books: [
//         {
//           name: "Advanced AI Concepts - Grade 9",
//           description: "Deep dive into machine learning and neural networks",
//           image: "https://roboticschools.com/wp-content/uploads/2024/03/RS_2-2.png",
//           features: ["Neural Networks", "Deep Learning", "Algorithm Design"],
//           color: "from-indigo-500 to-purple-500"
//         },
//         {
//           name: "AI Project Development - Grade 10",
//           description: "End-to-end AI project development and deployment",
//           image: "https://roboticschools.com/wp-content/uploads/2024/03/RS_2-2.png",
//           features: ["Project Management", "Model Deployment", "Industry Standards"],
//           color: "from-gray-700 to-gray-900"
//         }
//       ]
//     }
//   };

//   const handleBookDemo = () => {
//     setShowDemoSection(true);
//     setTimeout(() => {
//       document.getElementById('demo-section').scrollIntoView({ 
//         behavior: 'smooth' 
//       });
//     }, 100);
//   };

//   const handleDownloadCurriculum = (curriculumUrl) => {
//     // Simulate download
//     const link = document.createElement('a');
//     link.href = curriculumUrl;
//     link.download = 'curriculum.pdf';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const FloatingElements = () => (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
//       <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float animation-delay-2000"></div>
//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float animation-delay-4000"></div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#0b234a]/5 via-white to-[#E22213]/5 overflow-hidden">
//       {/* Animated Background */}
//       <FloatingElements />
      
//       {/* Header Section */}
//       <section className="relative py-20 bg-gradient-to-r from-[#0b234a] to-[#E22213] text-white overflow-hidden">
//         <div className="absolute inset-0 bg-black/20"></div>
//         <div className="absolute inset-0">
//           <div className="absolute top-10 left-10 w-4 h-4 bg-white rounded-full animate-ping"></div>
//           <div className="absolute top-20 right-20 w-3 h-3 bg-orange-300 rounded-full animate-bounce"></div>
//           <div className="absolute bottom-20 left-20 w-5 h-5 bg-blue-300 rounded-full animate-pulse"></div>
//         </div>
        
//         <div className="relative max-w-7xl mx-auto px-6 text-center">
//           <div className={`transition-all duration-500 ${isScrolled ? 'scale-90' : 'scale-100'}`}>
//             <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
//               AI Learning Books & Resources
//             </h1>
//             <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in animation-delay-200">
//               Comprehensive AI education materials for all grade levels
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-400">
//               <button 
//                 onClick={() => handleDownloadCurriculum('/curriculum/overview.pdf')}
//                 className="group bg-white text-[#0b234a] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
//               >
//                 <span>Download Curriculum</span>
//                 <svg className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                 </svg>
//               </button>
//               <button 
//                 onClick={handleBookDemo}
//                 className="group bg-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-white flex items-center justify-center gap-2"
//               >
//                 <span>Book a Demo</span>
//                 <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Scroll Indicator */}
//         <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
//             <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
//           </div>
//         </div>
//       </section>

//       {/* Publications Section */}
//       <section className="py-20 relative">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center mb-16 animate-fade-in">
//             <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#0b234a] to-[#E22213] bg-clip-text text-transparent mb-4">
//               Our Publications
//             </h2>
//             <p className="text-gray-600 text-lg max-w-3xl mx-auto">
//               Specially designed books and learning materials for different grade levels with comprehensive curriculum
//             </p>
//           </div>

//           {/* Enhanced Tab Navigation */}
//           <div className="flex flex-wrap justify-center gap-4 mb-12">
//             {[
//               { id: 'grade1-5', label: 'Grade 1-5', color: 'from-[#0b234a] to-[#0b234a]/80', icon: '🎨' },
//               { id: 'grade6-8', label: 'Grade 6-8', color: 'from-orange-500 to-orange-600', icon: '⚡' },
//               { id: 'grade9-10', label: 'Grade 9-10', color: 'from-[#E22213] to-[#E22213]/80', icon: '🚀' },
//             ].map((tab) => (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 className={`px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 transform hover:scale-105 flex items-center gap-3 ${
//                   activeTab === tab.id 
//                     ? `bg-gradient-to-r ${tab.color} shadow-lg scale-105` 
//                     : 'bg-gray-400 hover:bg-gray-500 scale-100'
//                 }`}
//               >
//                 <span className="text-xl">{tab.icon}</span>
//                 {tab.label}
//               </button>
//             ))}
//           </div>

//           {/* Section Header */}
//           <div className="text-center mb-8 animate-fade-in">
//             <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-3">
//               <span className="text-3xl">{publications[activeTab].icon}</span>
//               {publications[activeTab].title}
//             </h3>
//           </div>

//           {/* Enhanced Books Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {publications[activeTab].books.map((book, index) => (
//               <div 
//                 key={index}
//                 className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 overflow-hidden cursor-pointer"
//                 onMouseEnter={() => setHoveredBook(index)}
//                 onMouseLeave={() => setHoveredBook(null)}
//               >
//                 {/* Gradient Overlay */}
//                 <div className={`absolute inset-0 bg-gradient-to-br ${book.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
//                 {/* Book Image with Enhanced Effects */}
//                 <div className="relative overflow-hidden">
//                   <img
//                     src={book.image}
//                     alt={book.name}
//                     className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
//                   />
//                   <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
//                   <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-bold text-gray-800 transform group-hover:scale-110 transition-transform duration-300">
//                     {activeTab.split('grade')[1]}
//                   </div>
//                   {/* Hover Effect Indicator */}
//                   <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${book.color} group-hover:w-full transition-all duration-500`}></div>
//                 </div>
                
//                 {/* Book Content */}
//                 <div className="p-6 relative">
//                   <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0b234a] transition-colors duration-300">
//                     {book.name}
//                   </h4>
//                   <p className="text-gray-600 mb-4 line-clamp-2">
//                     {book.description}
//                   </p>
                  
//                   {/* Features List */}
//                   <div className="space-y-2 mb-6">
//                     {book.features.map((feature, featureIndex) => (
//                       <div key={featureIndex} className="flex items-center text-sm text-gray-700 transform group-hover:translate-x-1 transition-transform duration-300">
//                         <div className={`w-2 h-2 bg-gradient-to-r ${book.color} rounded-full mr-3 flex-shrink-0`}></div>
//                         <span>{feature}</span>
//                       </div>
//                     ))}
//                   </div>

//                   {/* Action Buttons */}
//                   <div className="flex gap-3 transform group-hover:scale-105 transition-transform duration-300">
//                     <button 
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         handleDownloadCurriculum(`/curriculum/${book.name.toLowerCase().replace(/\s+/g, '-')}.pdf`);
//                       }}
//                       className="flex-1 bg-gradient-to-r from-[#0b234a] to-[#0b234a]/90 text-white py-3 px-4 rounded-lg font-bold text-sm hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
//                     >
//                       Download PDF
//                     </button>
//                     <button 
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         handleBookDemo();
//                       }}
//                       className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-4 rounded-lg font-bold text-sm hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
//                     >
//                       Book Demo
//                     </button>
//                   </div>
//                 </div>

//                 {/* Floating Action on Hover */}
//                 {hoveredBook === index && (
//                   <div className="absolute -top-3 -right-3 bg-white rounded-full p-2 shadow-lg animate-pulse">
//                     <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
//                       <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                       </svg>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Grade Wise Tools Component */}
//       <div className="transform hover:scale-105 transition-transform duration-500">
//         <GradeWiseTools />
//       </div>

//       {/* Enhanced Demo Section */}
//       <section 
//         id="demo-section" 
//         className={`py-20 bg-gradient-to-r from-[#0b234a] to-[#E22213] text-white transition-all duration-1000 ${
//           showDemoSection ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'
//         }`}
//       >
//         <div className="max-w-4xl mx-auto px-6 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
//             Book your FREE Demo Today!
//           </h2>
//           <p className="text-xl mb-8 opacity-90 animate-fade-in animation-delay-200">
//             Experience our AI learning platform and see how we can transform education for your students
//           </p>
          
//           <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 transform hover:scale-105 transition-transform duration-500">
//             <form className="space-y-6 animate-fade-in animation-delay-400">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="relative">
//                   <input 
//                     type="text" 
//                     placeholder="Full Name"
//                     className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:border-white/40 transition-all duration-300 focus:scale-105"
//                   />
//                 </div>
//                 <div className="relative">
//                   <input 
//                     type="email" 
//                     placeholder="Email Address"
//                     className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:border-white/40 transition-all duration-300 focus:scale-105"
//                   />
//                 </div>
//                 <div className="relative">
//                   <input 
//                     type="tel" 
//                     placeholder="Phone Number"
//                     className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:border-white/40 transition-all duration-300 focus:scale-105"
//                   />
//                 </div>
//                 <div className="relative">
//                   <select 
//                     className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white/40 transition-all duration-300 focus:scale-105 appearance-none"
//                   >
//                     <option value="">Select Grade Level</option>
//                     <option value="1-2">Grade 1-2</option>
//                     <option value="3-4">Grade 3-4</option>
//                     <option value="5-6">Grade 5-6</option>
//                     <option value="7-8">Grade 7-8</option>
//                     <option value="9-10">Grade 9-10</option>
//                     <option value="11-12">Grade 11-12</option>
//                   </select>
//                   <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
//                     <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                     </svg>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="relative">
//                 <textarea 
//                   placeholder="Additional Requirements (Optional)"
//                   rows="4"
//                   className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:border-white/40 transition-all duration-300 focus:scale-105 resize-none"
//                 ></textarea>
//               </div>
              
//               <button 
//                 type="submit"
//                 className="group bg-orange-500 text-white px-12 py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl w-full md:w-auto"
//               >
//                 <span className="flex items-center justify-center gap-2">
//                   Schedule Demo Now
//                   <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                   </svg>
//                 </span>
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Books;



import React from 'react'
import OurBelivers from '../components/OurBelivers'

const Books = () => {
  return (
    <>
   <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 overflow-hidden">
  {/* Animated Background Elements */}
  <div className="absolute inset-0 overflow-hidden">
    {/* Floating Elements */}
    <div className="absolute top-10 left-5 sm:left-10 w-48 h-48 sm:w-64 sm:h-64 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-float">
      <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-20">🤖</div>
    </div>
    <div className="absolute top-40 right-5 sm:right-10 w-40 h-40 sm:w-56 sm:h-56 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}>
      <div className="absolute inset-0 flex items-center justify-center text-3xl opacity-20">💻</div>
    </div>
    <div className="absolute bottom-20 left-1/4 w-32 h-32 sm:w-48 sm:h-48 bg-green-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '3s' }}>
      <div className="absolute inset-0 flex items-center justify-center text-2xl opacity-20">🚀</div>
    </div>

    {/* Grid Pattern */}
    <div className="absolute inset-0 opacity-3">
      <div className="absolute inset-0" style={{
        backgroundImage: `linear-gradient(#0b234a 1px, transparent 1px),
                        linear-gradient(90deg, #0b234a 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }}></div>
    </div>
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header Section */}
    <div className="text-center mb-12 sm:mb-16 lg:mb-20">
      <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg mb-6">
        <span className="w-2 h-2 bg-[#E22213] rounded-full animate-pulse mr-2"></span>
        <span className="text-sm font-semibold text-[#0b234a]">
          🎯 CBSE Aligned Curriculum for Classes 1-8
        </span>
      </div>
      
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
        <span className="bg-gradient-to-r from-[#E22213] via-[#0b234a] to-purple-600 bg-clip-text text-transparent">
          Skillful Minds Program
        </span>
        <br />
        <span className="text-gray-900">for CBSE Coding, AI, Robotics, and ICT</span>
      </h1>
      
      <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
        Transform your school's computer labs from traditional ICT learning to comprehensive AI and Robotics lab, 
        with a structured curriculum and practical-based learning for 21st Century Skills. 
        Designed for CBSE Schools (Classes 1 to 8).
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="group relative bg-gradient-to-r from-[#E22213] to-orange-500 hover:from-[#E22213]/90 hover:to-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl backdrop-blur-sm border-2 border-white/20 overflow-hidden">
          <span className="relative z-10 flex items-center justify-center space-x-2">
            <span>📥 Download Curriculum</span>
          </span>
        </button>
        <button className="group relative bg-gradient-to-r from-[#0b234a] to-blue-600 hover:from-[#0b234a]/90 hover:to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl backdrop-blur-sm border-2 border-white/20 overflow-hidden">
          <span className="relative z-10 flex items-center justify-center space-x-2">
            <span>🎯 Book a Demo</span>
          </span>
        </button>
        <button className="group relative border-2 border-[#0b234a] hover:border-[#E22213] text-[#0b234a] hover:text-[#E22213] px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg transition-all duration-300 hover:shadow-xl backdrop-blur-sm bg-white/80 hover:bg-white overflow-hidden">
          <span className="relative z-10 flex items-center justify-center space-x-2">
            <span>📚 Book Series</span>
          </span>
        </button>
      </div>
    </div>

    {/* Program Overview */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 sm:mb-20">
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Transforming Computer Education with AI and Robotics Curriculum
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          The Skillful Minds Program, aligning with NEP 2020 and NCF 2023, transforms technology education for classes 1 to 8. 
          It blends the CBSE curriculum with AI and coding (Skill Subject Codes 417 and 843). Students and teachers develop 
          essential 21st-century skills with hands-on AI lab activities. The focus is on activity-based learning with 
          real-world applications that turn traditional computer labs into innovative learning hubs.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((grade) => (
          <div key={grade} className="text-center group cursor-pointer">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/50 transform hover:scale-110 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-2">
                <span className="text-white font-bold">{grade}</span>
              </div>
              <div className="text-sm font-semibold text-gray-900">Grade {grade}</div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Curriculum Transformation */}
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/50 mb-16 sm:mb-20">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Transforming Computer Labs into Innovative AI and Robotics Lab
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our program modules upgrade traditional computer labs to innovative AI and Robotics labs. 
          The lab promotes AI and Coding Skill Education for the CBSE curriculum, equipping students with 21st-century skills.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { icon: '💻', title: 'Computer Education', color: 'from-blue-500 to-cyan-500' },
          { icon: '👨‍💻', title: 'Coding', color: 'from-green-500 to-emerald-500' },
          { icon: '🤖', title: 'Artificial Intelligence', color: 'from-purple-500 to-pink-500' },
          { icon: '🔧', title: 'Robotics', color: 'from-orange-500 to-red-500' }
        ].map((subject, index) => (
          <div key={index} className="text-center group">
            <div className={`w-20 h-20 bg-gradient-to-br ${subject.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
              <span className="text-white text-2xl">{subject.icon}</span>
            </div>
            <h3 className="font-bold text-gray-900 text-lg">{subject.title}</h3>
          </div>
        ))}
      </div>
    </div>

    {/* Comprehensive Curriculum */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16 sm:mb-20">
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Comprehensive Curriculum: Coding, AI, Robotics, and ICT for CBSE Skill Education
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          The program's curriculum blends the fundamentals of traditional ICT with Coding, Artificial Intelligence, 
          and Robotics skills. This practical approach provides students with a fun way to learn about technology 
          with activity-based learning.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[
          {
            icon: '💻',
            title: 'ICT Curriculum',
            description: 'Solid ICT Foundation with Essential Digital Literacy and 21st Century Skills',
            color: 'from-blue-500 to-cyan-500'
          },
          {
            icon: '👨‍💻',
            title: 'Coding with PictoBlox',
            description: 'Make Students Industry 4.0 Ready with block coding and Python programming',
            color: 'from-green-500 to-emerald-500'
          },
          {
            icon: '🤖',
            title: 'AI and ML',
            description: 'Integrating AI and ML Learning Into Technology and Skill Education',
            color: 'from-purple-500 to-pink-500'
          },
          {
            icon: '🔧',
            title: 'Robotics Learning',
            description: 'Hands-On Robotics To Connect Theory and Real-World Application',
            color: 'from-orange-500 to-red-500'
          }
        ].map((module, index) => (
          <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 transform hover:scale-105 transition-all duration-300">
            <div className={`w-12 h-12 bg-gradient-to-br ${module.color} rounded-xl flex items-center justify-center mb-4`}>
              <span className="text-white text-lg">{module.icon}</span>
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">{module.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{module.description}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Book Features */}
    <div className="mb-16 sm:mb-20">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Features of the Skillful Minds Books for CBSE Coding and AI
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Following the guidelines of NEP 2020 and NCF 2023, our Skillful Minds Books comprehensively cover AI, 
          coding, and robotics syllabus aligned with CBSE subject code 417 and 843, fostering 21st-century skills in students.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            icon: '🌟',
            title: '21st Century Skills',
            description: 'Engaging chapters and dynamic activities tailored to develop skills crucial for navigating the 21st-century technological landscape.'
          },
          {
            icon: '🎯',
            title: 'CBSE Coding and AI Skills',
            description: 'Build competency in computational thinking, coding and artificial intelligence with hands-on activities.'
          },
          {
            icon: '🔬',
            title: 'Activity-Based Learning',
            description: 'Incorporating hands-on activities and theme-based learning that make learning both fun and intellectually stimulating.'
          },
          {
            icon: '🤖',
            title: 'Learn with Quarky Robot',
            description: 'Interactive sessions with the Quarky robot enhance engagement and maintain a high level of interest.'
          },
          {
            icon: '💻',
            title: 'PictoBlox AI Software',
            description: 'Learn the art of coding through horizontal block coding in PictoBlox. Students also receive 3000 AI credits for PictoBlox.'
          },
          {
            icon: '🏆',
            title: 'Codeavour Competition',
            description: 'Exclusive access to Codeavour – the AI and Robotics Competition, with the opportunity to represent yourself on the global stage at Dubai'
          }
        ].map((feature, index) => (
          <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 transform hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-[#E22213] to-orange-500 rounded-xl flex items-center justify-center mb-4">
              <span className="text-white text-lg">{feature.icon}</span>
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-3">{feature.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Tools and Technology */}
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/50">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Software and Hardware Tools Used
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We are helping students become innovative by using modern hardware and software technology tools to teach 
          computer basics, programming, artificial intelligence, and robotics, making learning better in every class.
        </p>
      </div>

      {/* Tools Grid - Simplified for demonstration */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {[
          { name: 'Windows 10', icon: '🖥️' },
          { name: 'MS Paint', icon: '🎨' },
          { name: 'PictoBlox', icon: '👨‍💻' },
          { name: 'Quarky Robot', icon: '🤖' },
          { name: 'MS Office', icon: '📊' },
          { name: 'HTML', icon: '🌐' },
          { name: 'Python', icon: '🐍' },
          { name: 'AI/ML Tools', icon: '🧠' }
        ].map((tool, index) => (
          <div key={index} className="text-center group">
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 transform hover:scale-110 transition-all duration-300">
              <div className="text-2xl mb-2">{tool.icon}</div>
              <div className="text-xs font-semibold text-gray-900">{tool.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* AI Program for Classes 9-10 */}
    <div className="mt-16 sm:mt-20 bg-gradient-to-r from-[#0b234a] to-[#E22213] rounded-3xl p-8 sm:p-12 text-white shadow-2xl overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Artificial Intelligence Program for CBSE Classes 9 and 10
          </h2>
          <p className="text-blue-100 text-lg leading-relaxed">
            Set your feet in the exciting world of AI with AAKLAN's all-new AI textbooks for CBSE Skill Subject 417. 
            Authored by IITians for classes 9 and 10, these books align with NEP 2020 and NCF 2023, infusing 
            'AI for All' into learning. Be Industry 4.0 ready with essential 21st-century skills. 
            Explore, learn, and lead in Artificial Intelligence.
          </p>
          <button className="group relative bg-white text-[#0b234a] hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold text-lg shadow-xl transform hover:scale-105 transition-all duration-300">
            <span className="relative z-10 flex items-center justify-center space-x-2">
              <span>Explore AI Program</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
          </button>
        </div>
        <div className="text-center">
          <div className="text-6xl mb-4">🧠</div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 inline-block">
            <div className="text-2xl font-bold">CBSE Subject Code 417</div>
            <div className="text-blue-100">Classes 9 & 10</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Custom Animations */}
  <style jsx>{`
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-10px) rotate(180deg); }
    }
    
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
  `}</style>
</section>

<section className="relative py-10 sm:py-15 lg:py-18 bg-gradient-to-br from-[#0b234a] via-[#1e3a6b] to-[#E22213] overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Elements */}
          <div className="absolute top-10 left-10 w-48 h-48 sm:w-64 sm:h-64 bg-white/5 rounded-full mix-blend-screen filter blur-xl opacity-30 animate-float"></div>
          <div className="absolute top-40 right-10 w-40 h-40 sm:w-56 sm:h-56 bg-orange-500/10 rounded-full mix-blend-screen filter blur-xl opacity-25 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-32 h-32 sm:w-48 sm:h-48 bg-white/10 rounded-full mix-blend-screen filter blur-xl opacity-20 animate-float" style={{ animationDelay: '3s' }}></div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(white 1px, transparent 1px),
                        linear-gradient(90deg, white 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}></div>
          </div>

          {/* Sparkle Elements */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg mb-4">
              <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse mr-2"></span>
              <span className="text-sm font-semibold text-white">
                🎯 Limited Time Offer
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Book your{" "}
              <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                FREE Demo
              </span>
              <br />
              Today!
            </h2>

            {/* Description */}
            <p className="text-xl sm:text-2xl text-blue-100 leading-relaxed max-w-2xl mx-auto mb-8">
              Experience firsthand how our coding and robotics programs can transform learning.
              See the platform in action and get all your questions answered.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 max-w-2xl mx-auto">
              {[
                { icon: '⏱️', text: '30 Minutes' },
                { icon: '💯', text: 'Completely Free' },
                { icon: '🎁', text: 'Special Offer' }
              ].map((feature, index) => (
                <div key={index} className="flex items-center justify-center space-x-2 p-2 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
                  <span className="text-xl">{feature.icon}</span>
                  <span className="text-white font-medium text-sm sm:text-base">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Demo Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-3 sm:p-4 lg:p-6 shadow-2xl border border-white/20 max-w-5xl mx-auto">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-white text-sm font-medium mb-2 text-left">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-2 py-2 bg-white/90 backdrop-blur-sm border border-white/30 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-white text-sm font-medium mb-2 text-left">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      className="w-full px-2 py-2 bg-white/90 backdrop-blur-sm border border-white/30 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-white text-sm font-medium mb-2 text-left">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-2 py-2 bg-white/90 backdrop-blur-sm border border-white/30 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-white text-sm font-medium mb-2 text-left">
                    I'm interested in *
                  </label>
                  <select
                    id="interest"
                    required
                    className="w-full px-2 py-2 bg-white/90 backdrop-blur-sm border border-white/30 rounded-2xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a program</option>
                    <option value="coding">Coding & Programming</option>
                    <option value="robotics">Robotics & AI</option>
                    <option value="arduino">Arduino & Electronics</option>
                    <option value="iot">IoT Projects</option>
                    <option value="all">All Programs</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white text-sm font-medium mb-2 text-left">
                    Additional Questions
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    className="w-full px-2 py-2 bg-white/90 backdrop-blur-sm border border-white/30 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Any specific topics you'd like to cover in the demo?"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group relative w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white py-2 px-4 rounded-2xl font-bold text-lg sm:text-xl shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-xl backdrop-blur-sm border-2 border-white/20 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <span>🚀 Book My FREE Demo Now</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </form>

              {/* Trust Indicators */}
              <div className="mt-6 text-center">
                <p className="text-blue-100 text-sm">
                  🔒 Your information is secure. We respect your privacy and never share your data.
                </p>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-white">
              {[
                {
                  icon: '📞',
                  title: 'Instant Confirmation',
                  description: 'Get demo details immediately'
                },
                {
                  icon: '👨‍🏫',
                  title: 'Expert Session',
                  description: '1-on-1 with our specialists'
                },
                {
                  icon: '💬',
                  title: 'Q&A Included',
                  description: 'All your questions answered'
                }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
                  <div className="text-2xl">{item.icon}</div>
                  <div className="text-left">
                    <div className="font-semibold text-white text-sm">{item.title}</div>
                    <div className="text-blue-100 text-xs">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Custom Animations */}
        <style jsx>{`
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-10px) rotate(180deg); }
    }
    
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
  `}</style>
      </section>

      <OurBelivers />
    </>



  )
}

export default Books