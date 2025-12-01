// import React, { useState, useEffect, useRef } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import {
//   BookOpen,
//   Download,
//   Calendar,
//   Users,
//   Rocket,
//   Star,
//   Code2,
//   Brain,
//   CircuitBoard,
//   Laptop,
//   Shield,
//   Award,
//   Globe,
//   Target,
//   Clock,
//   CheckCircle,
//   ArrowRight
// } from 'lucide-react';
// import OurBelivers from '../components/OurBelivers';
// import HeroHeading from '../components/PageHeading/HeroHeading';
// import BookFreeDemo from '../components/BookFreeDemo';

// const Books = () => {
//   const [activeSection, setActiveSection] = useState('overview');
//   const overviewRef = useRef(null);
//   const curriculumRef = useRef(null);
//   const featuresRef = useRef(null);
//   const toolsRef = useRef(null);
//   const programRef = useRef(null);

//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       once: true,
//       offset: 100,
//     });
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = [
//         { id: 'overview', ref: overviewRef },
//         { id: 'curriculum', ref: curriculumRef },
//         { id: 'features', ref: featuresRef },
//         { id: 'tools', ref: toolsRef },
//         { id: 'program', ref: programRef }
//       ];

//       const current = sections.find(section => {
//         const element = section.ref.current;
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           return rect.top <= 100 && rect.bottom >= 100;
//         }
//         return false;
//       });

//       if (current) {
//         setActiveSection(current.id);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (sectionId) => {
//     const section = {
//       overview: overviewRef,
//       curriculum: curriculumRef,
//       features: featuresRef,
//       tools: toolsRef,
//       program: programRef
//     }[sectionId];

//     if (section?.current) {
//       window.scrollTo({
//         top: section.current.offsetTop - 80,
//         behavior: 'smooth'
//       });
//     }
//   };

//   return (
//     <>
//       <div className="min-h-screen relative bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-8 px-4 overflow-hidden">
//         {/* Animated Background Elements */}
//         <div className="absolute inset-0 overflow-hidden">
//           {/* Floating Circles */}
//           <div className="absolute top-4 left-4 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-[#E22213]/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
//           <div className="absolute top-20 right-4 sm:top-40 sm:right-10 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-[#0b234a]/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
//           <div className="absolute bottom-16 left-8 sm:bottom-20 sm:left-20 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-orange-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '4s' }}></div>

//           {/* Grid Pattern */}
//           <div className="absolute inset-0 opacity-5">
//             <div className="absolute inset-0" style={{
//               backgroundImage: `linear-gradient(#0b234a 1px, transparent 1px),
//                               linear-gradient(90deg, #0b234a 1px, transparent 1px)`,
//               backgroundSize: '30px 30px',
//             }}></div>
//           </div>

//           {/* Animated Gradient Orbs */}
//           <div className="absolute -top-32 -left-32 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-r from-[#E22213] to-[#0b234a] rounded-full opacity-5 animate-pulse-slow"></div>
//           <div className="absolute -bottom-32 -right-32 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-r from-[#0b234a] to-orange-500 rounded-full opacity-5 animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
//         </div>

//         <div className="max-w-7xl mx-auto relative z-10">
          
//           {/* Hero Section */}
//           <section className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-8 py-4">
//             {/* Left Content */}
//             <div className="flex-1 max-w-2xl" data-aos="fade-right">
//               {/* Badge */}
//               <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg mb-6">
//                 <span className="w-2 h-2 bg-[#E22213] rounded-full animate-pulse mr-2"></span>
//                 <span className="text-sm font-semibold text-[#0b234a]">
//                   🎯 CBSE Aligned Curriculum for Classes 1-8
//                 </span>
//               </div>

//               <HeroHeading 
//                 colorHeading='Skillful Minds Program' 
//                 NonColorHading='for Coding, AI, Robotics, and ICT' 
//               />

//               <p className="text-lg sm:text-xl text-gray-600 max-w-4xl leading-relaxed mb-8">
//                 Transform your school's computer labs from traditional ICT learning to comprehensive AI and Robotics lab,
//                 with a structured curriculum and practical-based learning for 21st Century Skills.
//               </p>

//               {/* CTA Buttons */}
//               <div className="flex flex-col sm:flex-row gap-4 mb-8">
//                 <button className="group relative bg-gradient-to-r from-[#E22213] to-orange-500 hover:from-[#E22213]/90 hover:to-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl backdrop-blur-sm border-2 border-white/20 overflow-hidden">
//                   <span className="relative z-10 flex items-center justify-center space-x-2">
//                     <Download className="w-5 h-5" />
//                     <span>Download Curriculum</span>
//                   </span>
//                 </button>
//                 <button className="group relative bg-gradient-to-r from-[#0b234a] to-blue-600 hover:from-[#0b234a]/90 hover:to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl backdrop-blur-sm border-2 border-white/20 overflow-hidden">
//                   <span className="relative z-10 flex items-center justify-center space-x-2">
//                     <Calendar className="w-5 h-5" />
//                     <span>Book a Demo</span>
//                   </span>
//                 </button>
//               </div>

//               {/* Quick Stats */}
//               <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
//                 {[
//                   { number: '8', label: 'Grade Levels' },
//                   { number: '4', label: 'Subjects' },
//                   { number: '50+', label: 'Activities' },
//                   { number: '100%', label: 'CBSE Aligned' }
//                 ].map((stat, index) => (
//                   <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200">
//                     <div className="text-2xl font-bold text-[#E22213]">{stat.number}</div>
//                     <div className="text-sm text-gray-600">{stat.label}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Right Content - Book Showcase */}
//             <div className="flex-1 flex justify-center lg:justify-end" data-aos="fade-left">
//               <div className="relative w-full max-w-lg">
//                 <div className="bg-gradient-to-br from-[#E22213]/20 to-[#0b234a]/20 rounded-3xl p-6 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300">
//                   <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
//                     <BookOpen className="w-16 h-16 text-[#0b234a] mx-auto mb-4" />
//                     <h3 className="text-2xl font-bold text-gray-900 mb-2">Skillful Minds Series</h3>
//                     <p className="text-gray-600 mb-4">Comprehensive Learning Solution</p>
//                     <div className="flex justify-center space-x-2 mb-4">
//                       {[1, 2, 3, 4, 5].map((star) => (
//                         <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
//                       ))}
//                     </div>
//                     <div className="text-sm text-gray-500">Rated 4.9/5 by Educators</div>
//                   </div>
//                 </div>

//                 {/* Floating elements */}
//                 <div className="absolute -top-4 -left-4 bg-white p-3 rounded-xl shadow-lg border border-gray-200 hover:scale-110 transition-all duration-300">
//                   <Code2 className="w-6 h-6 text-[#E22213]" />
//                 </div>
//                 <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-xl shadow-lg border border-gray-200 hover:scale-110 transition-all duration-300">
//                   <Brain className="w-6 h-6 text-[#0b234a]" />
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* Sticky Navigation */}
//           <nav className="hidden md:block sticky top-4 z-50 mb-16 transition-all duration-1000">
//             <div className="flex justify-center">
//               <div className="bg-white/80 backdrop-blur-md rounded-2xl p-2 border border-gray-200 shadow-lg">
//                 {[
//                   { id: 'overview', label: 'Overview' },
//                   { id: 'curriculum', label: 'Curriculum' },
//                   { id: 'features', label: 'Features' },
//                   { id: 'tools', label: 'Tools' },
//                   { id: 'program', label: 'AI Program' }
//                 ].map((tab) => (
//                   <button
//                     key={tab.id}
//                     onClick={() => scrollToSection(tab.id)}
//                     className={`px-3 py-2 sm:px-6 sm:py-3 rounded-xl font-semibold transition-all duration-300 mx-1 ${
//                       activeSection === tab.id
//                         ? 'bg-gradient-to-r from-[#E22213] to-orange-500 text-white shadow-md'
//                         : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 hover:scale-105'
//                     }`}
//                   >
//                     {tab.label}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </nav>

//           {/* Overview Section */}
//           <section
//             ref={overviewRef}
//             id="overview"
//             className="mb-20 scroll-mt-20"
//           >
//             <div className="relative bg-white rounded-3xl p-8 border border-gray-100 shadow-sm overflow-hidden">
//               {/* Gradient Corners */}
//               <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-orange-600 to-transparent rounded-full -translate-x-32 -translate-y-32"></div>
//               <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-[#0b234a] to-transparent rounded-full translate-x-32 translate-y-32"></div>

//               <div className="relative z-10">
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//                   <div className="space-y-6">
//                     <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
//                       Transforming Computer Education with AI and Robotics Curriculum
//                     </h2>
//                     <p className="text-lg text-gray-700 leading-relaxed">
//                       The Skillful Minds Program, aligning with NEP 2020 and NCF 2023, transforms technology education for classes 1 to 8.
//                       It blends the CBSE curriculum with AI and coding (Skill Subject Codes 417 and 843). Students and teachers develop
//                       essential 21st-century skills with hands-on AI lab activities.
//                     </p>
                    
//                     {/* Grade Levels Grid */}
//                     <div className="grid grid-cols-4 gap-4 mt-8">
//                       {[1, 2, 3, 4, 5, 6, 7, 8].map((grade) => (
//                         <div key={grade} className="text-center group cursor-pointer">
//                           <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-4 shadow-lg border border-gray-200 transform hover:scale-110 transition-all duration-300">
//                             <div className="w-12 h-12 bg-gradient-to-br from-[#E22213] to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-2">
//                               <span className="text-white font-bold">{grade}</span>
//                             </div>
//                             <div className="text-sm font-semibold text-gray-900">Grade {grade}</div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="flex justify-center">
//                     <div className="bg-gradient-to-br from-[#E22213]/50 to-orange-500/10 rounded-2xl p-8 border border-gray-200 w-full max-w-md hover:shadow-xl hover:scale-105 transition-all duration-300">
//                       <div className="bg-white rounded-xl p-8 text-center shadow-sm">
//                         <Rocket className="w-16 h-16 text-[#0b234a] mx-auto mb-6 hover:scale-110 transition-transform duration-300" />
//                         <h3 className="text-2xl font-bold text-gray-900 mb-4">Future Ready Skills</h3>
//                         <p className="text-gray-600">Preparing students for the challenges of Industry 4.0 with practical, hands-on learning</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* Curriculum Transformation Section */}
//           <section
//             ref={curriculumRef}
//             id="curriculum"
//             className="mb-20 scroll-mt-20"
//           >
//             <div className="relative bg-white rounded-3xl p-8 border border-gray-100 shadow-sm overflow-hidden">
//               {/* Gradient Corners */}
//               <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#E22213] to-transparent rounded-full translate-x-32 -translate-y-32"></div>
//               <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#0b234a] to-transparent rounded-full -translate-x-32 translate-y-32"></div>

//               <div className="relative z-10">
//                 <div className="text-center mb-12" data-aos="fade-up">
//                   <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#E22213] to-[#0b234a] bg-clip-text text-transparent mb-4">
//                     Transforming Computer Labs into Innovative AI and Robotics Lab
//                   </h2>
//                   <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//                     Our program modules upgrade traditional computer labs to innovative AI and Robotics labs.
//                     The lab promotes AI and Coding Skill Education for the CBSE curriculum, equipping students with 21st-century skills.
//                   </p>
//                 </div>

//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//                   {[
//                     { icon: <Laptop className="w-8 h-8 text-white" />, title: 'Computer Education', color: 'from-blue-500 to-cyan-500' },
//                     { icon: <Code2 className="w-8 h-8 text-white" />, title: 'Coding', color: 'from-green-500 to-emerald-500' },
//                     { icon: <Brain className="w-8 h-8 text-white" />, title: 'Artificial Intelligence', color: 'from-purple-500 to-pink-500' },
//                     { icon: <CircuitBoard className="w-8 h-8 text-white" />, title: 'Robotics', color: 'from-orange-500 to-red-500' }
//                   ].map((subject, index) => (
//                     <div 
//                       key={index} 
//                       className="text-center group cursor-pointer"
//                       data-aos="zoom-in"
//                       data-aos-delay={index * 100}
//                     >
//                       <div className={`w-20 h-20 bg-gradient-to-br ${subject.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
//                         {subject.icon}
//                       </div>
//                       <h3 className="font-bold text-gray-900 text-lg group-hover:text-[#E22213] transition-colors duration-300">{subject.title}</h3>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* Features Section */}
//           <section
//             ref={featuresRef}
//             id="features"
//             className="mb-20 scroll-mt-20"
//           >
//             <div className="relative bg-white rounded-3xl p-8 border border-gray-100 shadow-sm overflow-hidden">
//               {/* Gradient Corners */}
//               <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-orange-600 to-transparent rounded-full -translate-x-32 -translate-y-32"></div>
//               <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-[#0b234a] to-transparent rounded-full translate-x-32 translate-y-32"></div>

//               <div className="relative z-10">
//                 <div className="text-center mb-12" data-aos="fade-up">
//                   <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#E22213] to-[#0b234a] bg-clip-text text-transparent mb-4">
//                     Features of the Skillful Minds Books
//                   </h2>
//                   <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//                     Following the guidelines of NEP 2020 and NCF 2023, our books comprehensively cover AI,
//                     coding, and robotics syllabus aligned with CBSE subject codes.
//                   </p>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {[
//                     {
//                       icon: '🌟',
//                       title: '21st Century Skills',
//                       description: 'Engaging chapters and dynamic activities tailored to develop skills crucial for navigating the 21st-century technological landscape.'
//                     },
//                     {
//                       icon: '🎯',
//                       title: 'CBSE Coding and AI Skills',
//                       description: 'Build competency in computational thinking, coding and artificial intelligence with hands-on activities.'
//                     },
//                     {
//                       icon: '🔬',
//                       title: 'Activity-Based Learning',
//                       description: 'Incorporating hands-on activities and theme-based learning that make learning both fun and intellectually stimulating.'
//                     },
//                     {
//                       icon: '🤖',
//                       title: 'Learn with Quarky Robot',
//                       description: 'Interactive sessions with the Quarky robot enhance engagement and maintain a high level of interest.'
//                     },
//                     {
//                       icon: '💻',
//                       title: 'PictoBlox AI Software',
//                       description: 'Learn the art of coding through horizontal block coding in PictoBlox with 3000 AI credits included.'
//                     },
//                     {
//                       icon: '🏆',
//                       title: 'Codeavour Competition',
//                       description: 'Exclusive access to Codeavour AI and Robotics Competition with global opportunities.'
//                     }
//                   ].map((feature, index) => (
//                     <div
//                       key={index}
//                       className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:scale-105 hover:border-orange-300 transition-all duration-300 group cursor-pointer"
//                       data-aos="fade-up"
//                       data-aos-delay={index * 100}
//                     >
//                       <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
//                       <h3 className="font-bold text-gray-900 text-lg mb-3 group-hover:text-[#E22213] transition-colors duration-300">{feature.title}</h3>
//                       <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* Tools Section */}
//           <section
//             ref={toolsRef}
//             id="tools"
//             className="mb-20 scroll-mt-20"
//           >
//             <div className="relative bg-white rounded-3xl p-8 border border-gray-100 shadow-sm overflow-hidden">
//               {/* Gradient Corners */}
//               <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#E22213] to-transparent rounded-full translate-x-32 -translate-y-32"></div>
//               <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#0b234a] to-transparent rounded-full -translate-x-32 translate-y-32"></div>

//               <div className="relative z-10">
//                 <div className="text-center mb-12" data-aos="fade-up">
//                   <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#E22213] to-[#0b234a] bg-clip-text text-transparent mb-4">
//                     Software and Hardware Tools Used
//                   </h2>
//                   <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//                     Modern hardware and software technology tools to teach computer basics, programming, 
//                     artificial intelligence, and robotics, making learning better in every class.
//                   </p>
//                 </div>

//                 <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
//                   {[
//                     { name: 'Windows 10', icon: '🖥️' },
//                     { name: 'MS Paint', icon: '🎨' },
//                     { name: 'PictoBlox', icon: '👨‍💻' },
//                     { name: 'Quarky Robot', icon: '🤖' },
//                     { name: 'MS Office', icon: '📊' },
//                     { name: 'HTML', icon: '🌐' },
//                     { name: 'Python', icon: '🐍' },
//                     { name: 'AI/ML Tools', icon: '🧠' }
//                   ].map((tool, index) => (
//                     <div 
//                       key={index} 
//                       className="text-center group cursor-pointer"
//                       data-aos="zoom-in"
//                       data-aos-delay={index * 50}
//                     >
//                       <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 transform hover:scale-110 hover:shadow-lg hover:border-orange-300 transition-all duration-300">
//                         <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">{tool.icon}</div>
//                         <div className="text-xs font-semibold text-gray-900 group-hover:text-[#E22213] transition-colors duration-300">{tool.name}</div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* AI Program Section */}
//           <section
//             ref={programRef}
//             id="program"
//             className="scroll-mt-20"
//           >
//             <div className="relative bg-gradient-to-r from-[#0b234a] to-[#E22213] rounded-3xl p-8 md:p-12 text-white shadow-2xl overflow-hidden">
//               {/* Animated Background Elements */}
//               <div className="absolute inset-0 overflow-hidden">
//                 <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-32 -translate-y-32"></div>
//                 <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-32 translate-y-32"></div>
//               </div>

//               <div className="relative z-10">
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//                   <div className="space-y-6">
//                     <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
//                       Artificial Intelligence Program for CBSE Classes 9 and 10
//                     </h2>
//                     <p className="text-blue-100 text-lg leading-relaxed">
//                       Set your feet in the exciting world of AI with AAKLAN's all-new AI textbooks for CBSE Skill Subject 417.
//                       Authored by IITians for classes 9 and 10, these books align with NEP 2020 and NCF 2023, infusing
//                       'AI for All' into learning. Be Industry 4.0 ready with essential 21st-century skills.
//                     </p>
//                     <button className="group relative bg-white text-[#0b234a] hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold text-lg shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
//                       <span>Explore AI Program</span>
//                       <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
//                     </button>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-6xl mb-4">🧠</div>
//                     <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 inline-block border border-white/20">
//                       <div className="text-2xl font-bold mb-2">CBSE Subject Code 417</div>
//                       <div className="text-blue-100">Classes 9 & 10</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </div>
//       </div>

//       <BookFreeDemo />
//       <OurBelivers />
//     </>
//   );
// };

// export default Books;

import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  BookOpen,
  Download,
  Calendar,
  Users,
  Rocket,
  Star,
  Code2,
  Brain,
  CircuitBoard,
  Laptop,
  Shield,
  Award,
  Globe,
  Target,
  Clock,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import OurBelivers from '../components/OurBelivers';
import HeroHeading from '../components/PageHeading/HeroHeading';
import BookFreeDemo from '../components/BookFreeDemo';

const Books = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const overviewRef = useRef(null);
  const curriculumRef = useRef(null);
  const featuresRef = useRef(null);
  const toolsRef = useRef(null);
  const bookDemoRef = useRef(null);
  
  // Function to scroll to BookFreeDemo section
  const scrollToBookDemo = () => {
    bookDemoRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'overview', ref: overviewRef },
        { id: 'curriculum', ref: curriculumRef },
        { id: 'features', ref: featuresRef },
        { id: 'tools', ref: toolsRef }
      ];

      const current = sections.find(section => {
        const element = section.ref.current;
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = {
      overview: overviewRef,
      curriculum: curriculumRef,
      features: featuresRef,
      tools: toolsRef
    }[sectionId];

    if (section?.current) {
      window.scrollTo({
        top: section.current.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  // Book data for different grades
  const gradeBooks = [
    {
      grade: 1,
      title: 'Grade 1 Book',
      features: ['Windows 10', 'MS Paint', 'Notepad', 'PictoBlox Junior Blocks', 'Quarky Robot']
    },
    {
      grade: 2,
      title: 'Grade 2 Book',
      features: ['Windows 10', 'Tux Paint', 'Wordpad', 'PictoBlox Junior Blocks', 'Quarky Robot']
    },
    {
      grade: 3,
      title: 'Grade 3 Book',
      features: ['Windows 10', 'MS Paint', 'Tux Paint', 'Notepad', 'Wordpad', 'Word', 'Excel', 'PictoBlox Blocks Coding', 'Quarky Robot']
    },
    {
      grade: 4,
      title: 'Grade 4 Book',
      features: ['Windows 10', 'Advanced MS Paint', 'Word & Excel', 'PictoBlox Coding', 'HTML Basics', 'Quarky Robot']
    },
    {
      grade: 5,
      title: 'Grade 5 Book',
      features: ['Windows 10', 'PowerPoint', 'Excel Charts', 'PictoBlox AI', 'Python Basics', 'Quarky Robot IoT']
    },
    {
      grade: 6,
      title: 'Grade 6 Book',
      features: ['Windows 11', 'Office Suite', 'HTML & CSS', 'Python Programming', 'PictoBlox AI', 'Quarky Advanced']
    },
    {
      grade: 7,
      title: 'Grade 7 Book',
      features: ['Advanced Windows', 'Web Development', 'Python OOP', 'AI/ML Basics', 'Robotics', 'IoT Projects']
    },
    {
      grade: 8,
      title: 'Grade 8 Book',
      features: ['System Admin', 'Full Stack Basics', 'Python AI Libraries', 'ML Projects', 'Advanced Robotics', 'Cloud Basics']
    }
  ];

  return (
    <>
      <div className="min-h-screen relative bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-8 px-4 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Circles */}
          <div className="absolute top-4 left-4 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-[#E22213]/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
          <div className="absolute top-20 right-4 sm:top-40 sm:right-10 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-[#0b234a]/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-16 left-8 sm:bottom-20 sm:left-20 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-orange-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '4s' }}></div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(#0b234a 1px, transparent 1px),
                              linear-gradient(90deg, #0b234a 1px, transparent 1px)`,
              backgroundSize: '30px 30px',
            }}></div>
          </div>

          {/* Animated Gradient Orbs */}
          <div className="absolute -top-32 -left-32 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-r from-[#E22213] to-[#0b234a] rounded-full opacity-5 animate-pulse-slow"></div>
          <div className="absolute -bottom-32 -right-32 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-r from-[#0b234a] to-orange-500 rounded-full opacity-5 animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Hero Section */}
          <section className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-8 py-4">
            {/* Left Content */}
            <div className="flex-1 max-w-2xl" data-aos="fade-right">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg mb-6">
                <span className="w-2 h-2 bg-[#E22213] rounded-full animate-pulse mr-2"></span>
                <span className="text-sm font-semibold text-[#0b234a]">
                  🎯 CBSE Aligned Curriculum for Classes 1-8
                </span>
              </div>

              <HeroHeading 
                colorHeading='Skillful Minds Program' 
                NonColorHading='for Coding, AI, Robotics, and ICT' 
              />

              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl leading-relaxed mb-8">
                Transform your school's computer labs from traditional ICT learning to comprehensive AI and Robotics lab,
                with a structured curriculum and practical-based learning for 21st Century Skills.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="group relative bg-gradient-to-r from-[#E22213] to-orange-500 hover:from-[#E22213]/90 hover:to-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl backdrop-blur-sm border-2 border-white/20 overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <Download className="w-5 h-5" />
                    <span>Download Curriculum</span>
                  </span>
                </button>
                {/* CTA Button */}
              <button
                onClick={scrollToBookDemo}
                className="group relative bg-gradient-to-r from-[#E22213] to-orange-500 hover:from-[#E22213]/90 hover:to-orange-600 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg shadow-xl sm:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-xl backdrop-blur-sm border-2 border-white/20 overflow-hidden w-full sm:w-auto"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <Target className="w-5 h-5" />
                  <span>Book Demo</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                {[
                  { number: '8', label: 'Grade Levels' },
                  { number: '4', label: 'Subjects' },
                  { number: '50+', label: 'Activities' },
                  { number: '100%', label: 'CBSE Aligned' }
                ].map((stat, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200">
                    <div className="text-2xl font-bold text-[#E22213]">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Book Showcase */}
            <div className="flex-1 flex justify-center lg:justify-end" data-aos="fade-left">
              <div className="relative w-full max-w-lg">
                <div className="bg-gradient-to-br from-[#E22213]/20 to-[#0b234a]/20 rounded-3xl p-6 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                    <BookOpen className="w-16 h-16 text-[#0b234a] mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Skillful Minds Series</h3>
                    <p className="text-gray-600 mb-4">Comprehensive Learning Solution</p>
                    <div className="flex justify-center space-x-2 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <div className="text-sm text-gray-500">Rated 4.9/5 by Educators</div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -left-4 bg-white p-3 rounded-xl shadow-lg border border-gray-200 hover:scale-110 transition-all duration-300">
                  <Code2 className="w-6 h-6 text-[#E22213]" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-xl shadow-lg border border-gray-200 hover:scale-110 transition-all duration-300">
                  <Brain className="w-6 h-6 text-[#0b234a]" />
                </div>
              </div>
            </div>
          </section>

          {/* Sticky Navigation */}
          <nav className="hidden md:block sticky top-4 z-50 mb-16 transition-all duration-1000">
            <div className="flex justify-center">
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-2 border border-gray-200 shadow-lg">
                {[
                  { id: 'overview', label: 'Overview' },
                  { id: 'curriculum', label: 'Curriculum' },
                  { id: 'features', label: 'Features' },
                  { id: 'tools', label: 'Grade Books' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => scrollToSection(tab.id)}
                    className={`px-3 py-2 sm:px-6 sm:py-3 rounded-xl font-semibold transition-all duration-300 mx-1 ${
                      activeSection === tab.id
                        ? 'bg-gradient-to-r from-[#E22213] to-orange-500 text-white shadow-md'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 hover:scale-105'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </nav>

          {/* Overview Section */}
          <section
            ref={overviewRef}
            id="overview"
            className="mb-20 scroll-mt-20"
          >
            <div className="relative bg-white rounded-3xl p-8 border border-gray-100 shadow-sm overflow-hidden">
              {/* Gradient Corners */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-orange-600 to-transparent rounded-full -translate-x-32 -translate-y-32"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-[#0b234a] to-transparent rounded-full translate-x-32 translate-y-32"></div>

              <div className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                      Transforming Computer Education with AI and Robotics Curriculum
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      The Skillful Minds Program, aligning with NEP 2020 and NCF 2023, transforms technology education for classes 1 to 8.
                      It blends the CBSE curriculum with AI and coding (Skill Subject Codes 417 and 843). Students and teachers develop
                      essential 21st-century skills with hands-on AI lab activities.
                    </p>
                    
                    {/* Grade Books Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
                      {gradeBooks.slice(0, 8).map((book) => (
                        <div key={book.grade} className="text-center group cursor-pointer">
                          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-3 shadow-lg border border-gray-200 transform hover:scale-105 hover:shadow-xl transition-all duration-300">
                            {/* Book Cover Placeholder */}
                            <div className="w-16 h-20 bg-gradient-to-br from-[#E22213] to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-2 shadow-sm">
                              <BookOpen className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-sm font-bold text-gray-900">Grade {book.grade}</div>
                            <div className="text-xs text-gray-600">Skillful Minds</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="bg-gradient-to-br from-[#E22213]/50 to-orange-500/10 rounded-2xl p-8 border border-gray-200 w-full max-w-md hover:shadow-xl hover:scale-105 transition-all duration-300">
                      <div className="bg-white rounded-xl p-8 text-center shadow-sm">
                        <Rocket className="w-16 h-16 text-[#0b234a] mx-auto mb-6 hover:scale-110 transition-transform duration-300" />
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Future Ready Skills</h3>
                        <p className="text-gray-600">Preparing students for the challenges of Industry 4.0 with practical, hands-on learning</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Curriculum Transformation Section */}
          <section
            ref={curriculumRef}
            id="curriculum"
            className="mb-20 scroll-mt-20"
          >
            <div className="relative bg-white rounded-3xl p-8 border border-gray-100 shadow-sm overflow-hidden">
              {/* Gradient Corners */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#E22213] to-transparent rounded-full translate-x-32 -translate-y-32"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#0b234a] to-transparent rounded-full -translate-x-32 translate-y-32"></div>

              <div className="relative z-10">
                <div className="text-center mb-12" data-aos="fade-up">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#E22213] to-[#0b234a] bg-clip-text text-transparent mb-4">
                    Transforming Computer Labs into Innovative AI and Robotics Lab
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Our program modules upgrade traditional computer labs to innovative AI and Robotics labs.
                    The lab promotes AI and Coding Skill Education for the CBSE curriculum, equipping students with 21st-century skills.
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { icon: <Laptop className="w-8 h-8 text-white" />, title: 'Computer Education', color: 'from-blue-500 to-cyan-500' },
                    { icon: <Code2 className="w-8 h-8 text-white" />, title: 'Coding', color: 'from-green-500 to-emerald-500' },
                    { icon: <Brain className="w-8 h-8 text-white" />, title: 'Artificial Intelligence', color: 'from-purple-500 to-pink-500' },
                    { icon: <CircuitBoard className="w-8 h-8 text-white" />, title: 'Robotics', color: 'from-orange-500 to-red-500' }
                  ].map((subject, index) => (
                    <div 
                      key={index} 
                      className="text-center group cursor-pointer"
                      data-aos="zoom-in"
                      data-aos-delay={index * 100}
                    >
                      <div className={`w-20 h-20 bg-gradient-to-br ${subject.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        {subject.icon}
                      </div>
                      <h3 className="font-bold text-gray-900 text-lg group-hover:text-[#E22213] transition-colors duration-300">{subject.title}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section
            ref={featuresRef}
            id="features"
            className="mb-20 scroll-mt-20"
          >
            <div className="relative bg-white rounded-3xl p-8 border border-gray-100 shadow-sm overflow-hidden">
              {/* Gradient Corners */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-orange-600 to-transparent rounded-full -translate-x-32 -translate-y-32"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-[#0b234a] to-transparent rounded-full translate-x-32 translate-y-32"></div>

              <div className="relative z-10">
                <div className="text-center mb-12" data-aos="fade-up">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#E22213] to-[#0b234a] bg-clip-text text-transparent mb-4">
                    Features of the Skillful Minds Books
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Following the guidelines of NEP 2020 and NCF 2023, our books comprehensively cover AI,
                    coding, and robotics syllabus aligned with CBSE subject codes.
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
                      description: 'Learn the art of coding through horizontal block coding in PictoBlox with 3000 AI credits included.'
                    },
                    {
                      icon: '🏆',
                      title: 'Codeavour Competition',
                      description: 'Exclusive access to Codeavour AI and Robotics Competition with global opportunities.'
                    }
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:scale-105 hover:border-orange-300 transition-all duration-300 group cursor-pointer"
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                      <h3 className="font-bold text-gray-900 text-lg mb-3 group-hover:text-[#E22213] transition-colors duration-300">{feature.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Grade Books Section */}
          <section
            ref={toolsRef}
            id="tools"
            className="mb-20 scroll-mt-20"
          >
            <div className="relative bg-white rounded-3xl p-8 border border-gray-100 shadow-sm overflow-hidden">
              {/* Gradient Corners */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#E22213] to-transparent rounded-full translate-x-32 -translate-y-32"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#0b234a] to-transparent rounded-full -translate-x-32 translate-y-32"></div>

              <div className="relative z-10">
                <div className="text-center mb-12" data-aos="fade-up">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#E22213] to-[#0b234a] bg-clip-text text-transparent mb-4">
                    Skillful Minds Grade Books 1-8
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Comprehensive curriculum books for each grade level, covering computer basics, programming, 
                    artificial intelligence, and robotics with progressive learning paths.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {gradeBooks.map((book, index) => (
                    <div 
                      key={book.grade}
                      className="group cursor-pointer"
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-xl hover:border-orange-300 hover:scale-105 transition-all duration-300 h-full">
                        {/* Book Cover */}
                        <div className="relative mb-6">
                          <div className="w-24 h-32 bg-gradient-to-br from-[#E22213] via-orange-500 to-[#0b234a] rounded-lg shadow-lg mx-auto flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                            <div className="text-center p-4">
                              <BookOpen className="w-10 h-10 text-white mb-2 mx-auto" />
                              <div className="text-white font-bold text-xl">Grade {book.grade}</div>
                            </div>
                          </div>
                          <div className="absolute -top-2 -right-2 bg-gradient-to-r from-[#E22213] to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                            Class {book.grade}
                          </div>
                        </div>

                        {/* Book Details */}
                        <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-[#E22213] transition-colors duration-300">
                          {book.title}
                        </h3>

                        {/* Features List */}
                        <div className="space-y-3">
                          {book.features.slice(0, 4).map((feature, idx) => (
                            <div 
                              key={idx}
                              className="flex items-center text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300"
                            >
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              <span className="truncate">{feature}</span>
                            </div>
                          ))}
                          {book.features.length > 4 && (
                            <div className="text-sm text-blue-600 font-medium group-hover:text-[#E22213] transition-colors duration-300">
                              +{book.features.length - 4} more features
                            </div>
                          )}
                        </div>

                        {/* View Details Button */}
                        <button className="mt-6 w-full bg-gradient-to-r from-gray-100 to-blue-50 hover:from-blue-50 hover:to-gray-100 text-gray-800 hover:text-[#E22213] font-semibold py-3 rounded-xl border border-gray-300 hover:border-orange-300 transition-all duration-300 flex items-center justify-center group/btn">
                          <span>View Details</span>
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div ref={bookDemoRef}>
        <BookFreeDemo />
      </div>
      
      <OurBelivers />
    </>
  );
};

export default Books;