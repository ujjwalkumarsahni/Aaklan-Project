// // components/Career/CareerStats.js
// import React from 'react';
// import { FaUsers, FaMapMarkerAlt, FaGraduationCap, FaBriefcase } from 'react-icons/fa';

// const CareerStats = () => {
//   const stats = [
//     { number: "50+", label: "Team Members", icon: FaUsers },
//     { number: "5+", label: "Cities", icon: FaMapMarkerAlt },
//     { number: "5000+", label: "Students Impacted", icon: FaGraduationCap },
//     { number: "12", label: "Open Roles", icon: FaBriefcase }
//   ];

//   return (
//     <section className="py-12 md:py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
//           {stats.map((stat, index) => {
//             const IconComponent = stat.icon;
//             return (
//               <div key={index} className="text-center group">
//                 <div className="bg-orange-100 w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500 group-hover:scale-110 transition-all duration-300">
//                   <IconComponent className="text-orange-500 group-hover:text-white text-xl md:text-2xl" />
//                 </div>
//                 <div className="text-2xl sm:text-3xl font-bold text-[#0b234a] mb-2">{stat.number}</div>
//                 <div className="text-gray-600 font-medium text-sm md:text-base">{stat.label}</div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CareerStats;