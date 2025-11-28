import React, { useState } from 'react';

export default function StructuredCurriculum() {
  const [activeTab, setActiveTab] = useState('grade1-5');
  
  // Publications data structure
  const publications = {
    'grade1-5': {
      books: [
        {
          name: "AI Explorers - Level 1",
          description: "Introduction to basic AI concepts through fun activities and games for young learners.",
          image: "https://roboticschools.com/wp-content/uploads/2024/03/RS_2-2.png",
          features: ["Visual Programming", "Basic Logic Building", "Interactive Stories", "Colorful Illustrations"]
        },
        {
          name: "Coding Adventures - Grade 3-5",
          description: "Step-by-step guide to block-based coding and simple algorithms.",
          image: "https://roboticschools.com/wp-content/uploads/2024/03/RS_2-2.png",
          features: ["Block-based Coding", "Problem Solving", "Creative Projects", "Progressive Learning"]
        },
        {
          name: "Robotics Fundamentals",
          description: "Hands-on introduction to robotics with simple building blocks.",
          image: "https://roboticschools.com/wp-content/uploads/2024/03/RS_2-2.png",
          features: ["Basic Robotics", "Simple Circuits", "Motor Control", "Team Projects"]
        }
      ]
    },
    'grade6-8': {
      books: [
        {
          name: "Python Programming Basics",
          description: "Comprehensive introduction to Python programming language.",
          image: "https://roboticschools.com/wp-content/uploads/2024/03/RS_2-2.png",
          features: ["Python Syntax", "Data Types", "Functions", "Simple Projects"]
        },
        {
          name: "AI & Machine Learning",
          description: "Introduction to machine learning concepts and applications.",
          image: "https://roboticschools.com/wp-content/uploads/2024/03/RS_2-2.png",
          features: ["ML Basics", "Data Analysis", "Pattern Recognition", "Real-world Examples"]
        },
        {
          name: "Advanced Robotics",
          description: "Building complex robots with sensors and programming.",
          image: "https://roboticschools.com/wp-content/uploads/2024/03/RS_2-2.png",
          features: ["Sensor Integration", "Complex Programming", "3D Design", "Competition Ready"]
        }
      ]
    },
    'grade9-10': {
      books: [
        {
          name: "Advanced Python & AI",
          description: "Deep dive into Python programming and AI algorithm development.",
          image: "https://roboticschools.com/wp-content/uploads/2024/03/RS_2-2.png",
          features: ["Advanced Python", "AI Algorithms", "Data Structures", "Project Development"]
        },
        {
          name: "Machine Learning Projects",
          description: "Hands-on projects implementing various machine learning models.",
          image: "https://roboticschools.com/wp-content/uploads/2024/03/RS_2-2.png",
          features: ["Real Projects", "Model Training", "Data Processing", "Deployment"]
        },
        {
          name: "AI Ethics & Applications",
          description: "Understanding the ethical implications and real-world applications of AI.",
          image: "https://roboticschools.com/wp-content/uploads/2024/03/RS_2-2.png",
          features: ["Ethical AI", "Case Studies", "Future Trends", "Career Guidance"]
        }
      ]
    }
  };

  return (
    <section className="w-full py-16 px-4 bg-white relative overflow-hidden">
      
      {/* Wave Background */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0">
        <svg 
          className="relative block w-full h-20" 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            className="fill-[#0b234a]"
          ></path>
        </svg>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180">
        <svg 
          className="relative block w-full h-20" 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            className="fill-[#E22213]"
          ></path>
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-[#0b234a]/20 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-20 right-20 w-16 h-16 bg-orange-500/20 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-[#E22213]/20 rounded-full opacity-20 animate-pulse delay-500"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Structured Curriculum &{' '}
            <span className="bg-gradient-to-r from-[#0b234a] to-[#E22213] bg-clip-text text-transparent">
              Publications
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI education with specialized books and resources for all age groups
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <div className="relative bg-gradient-to-br from-[#0b234a]/5 to-[#E22213]/5 rounded-3xl p-8 shadow-lg border border-[#0b234a]/10">
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-500 rounded-full opacity-30 animate-ping"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#E22213] rounded-full opacity-30 animate-ping delay-700"></div>
              
              <img
                src="https://roboticschools.com/wp-content/uploads/2024/03/RS_2-2.png"
                alt="Structured Curriculum"
                className="w-full object-contain transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-6">
              
              {/* Age Groups */}
              <div className="bg-white rounded-2xl p-6 border-l-4 border-[#0b234a] shadow-lg hover:shadow-xl transition-shadow duration-300 group hover:bg-[#0b234a]/5">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center group-hover:text-[#0b234a] transition-colors">
                  <span className="w-10 h-10 bg-[#0b234a] rounded-full flex items-center justify-center text-white mr-3 text-sm group-hover:scale-110 transition-transform">
                    1-2
                  </span>
                  Early Learning Program (Grades 1 & 2)
                </h3>
                <p className="text-gray-700 group-hover:text-gray-800 transition-colors">
                  Unique foundation program introducing basic AI concepts through interactive activities and games.
                </p>
              </div>

              {/* Grade Levels */}
              <div className="bg-white rounded-2xl p-6 border-l-4 border-orange-500 shadow-lg hover:shadow-xl transition-shadow duration-300 group hover:bg-orange-500/5">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center group-hover:text-orange-600 transition-colors">
                  <span className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white mr-3 text-sm group-hover:scale-110 transition-transform">
                    3-12
                  </span>
                  Structured Grade-wise Syllabus (Grades 3 to 12)
                </h3>
                <p className="text-gray-700 group-hover:text-gray-800 transition-colors">
                  Comprehensive curriculum building advanced skills in AI, robotics, and coding with progressive complexity.
                </p>
              </div>

              {/* Standards */}
              <div className="bg-white rounded-2xl p-6 border-l-4 border-[#E22213] shadow-lg hover:shadow-xl transition-shadow duration-300 group hover:bg-[#E22213]/5">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center group-hover:text-[#E22213] transition-colors">
                  <span className="w-10 h-10 bg-[#E22213] rounded-full flex items-center justify-center text-white mr-3 group-hover:scale-110 transition-transform">
                    🌐
                  </span>
                  Global Standards Alignment
                </h3>
                <div className="flex flex-wrap gap-2 mt-3">
                  {['CBSE', 'IB', 'IGCSE', 'ICSE', 'CSTA', 'CIE'].map((standard, index) => {
                    const colorClasses = [
                      'bg-[#0b234a]/10 text-[#0b234a] border-[#0b234a]/20',
                      'bg-orange-500/10 text-orange-700 border-orange-500/20',
                      'bg-[#E22213]/10 text-[#E22213] border-[#E22213]/20',
                      'bg-[#0b234a]/10 text-[#0b234a] border-[#0b234a]/20',
                      'bg-orange-500/10 text-orange-700 border-orange-500/20',
                      'bg-[#E22213]/10 text-[#E22213] border-[#E22213]/20'
                    ];
                    
                    return (
                      <span 
                        key={standard} 
                        className={`px-3 py-1 rounded-full text-sm font-medium border hover:scale-105 transition-transform duration-200 ${colorClasses[index]}`}
                      >
                        {standard}
                      </span>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* CTA Button */}
            <button className="mt-8 w-full bg-gradient-to-r from-[#0b234a] to-[#E22213] hover:from-[#0b234a]/90 hover:to-[#E22213]/90 text-white font-bold text-sm sm:text-lg py-2 px-4 sm:py-4 sm:px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2">
              <span>Explore AAKLAN Curriculum</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

        </div>

        {/* Publications Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-[#0b234a] to-[#E22213] bg-clip-text text-transparent">Publications</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specially designed books and learning materials for different grade levels
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              { id: 'grade1-5', label: 'Grade 1-5', color: 'bg-[#0b234a]' },
              { id: 'grade6-8', label: 'Grade 6-8', color: 'bg-orange-500' },
              { id: 'grade9-10', label: 'Grade 9-10', color: 'bg-[#E22213]' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl font-bold text-white transition-all duration-300 transform hover:scale-105 ${
                  activeTab === tab.id 
                    ? `${tab.color} shadow-lg` 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Books Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publications[activeTab].books.map((book, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={book.image}
                    alt={book.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-bold text-gray-800">
                    {activeTab.split('grade')[1]}
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0b234a] transition-colors">
                    {book.name}
                  </h4>
                  <p className="text-gray-600 mb-4">
                    {book.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {book.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-[#E22213] rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 bg-gradient-to-r from-[#0b234a] to-[#0b234a]/90 text-white py-2 px-4 rounded-lg font-bold text-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                      View Sample
                    </button>
                    <button className="flex-1 bg-gradient-to-r from-[#E22213] to-[#E22213]/90 text-white py-2 px-4 rounded-lg font-bold text-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Features */}
        <div className="mt-16 mb-5 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-[#0b234a]/5 to-transparent rounded-2xl border border-[#0b234a]/10 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-[#0b234a] rounded-full flex items-center justify-center text-white mx-auto mb-4">
              <span className="text-lg">📚</span>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Comprehensive Materials</h4>
            <p className="text-gray-600 text-sm">Detailed lesson plans and resources for every grade level</p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-orange-500/5 to-transparent rounded-2xl border border-orange-500/10 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
              <span className="text-lg">👨‍🏫</span>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Expert Designed</h4>
            <p className="text-gray-600 text-sm">Created by industry experts and educators</p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-[#E22213]/5 to-transparent rounded-2xl border border-[#E22213]/10 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-[#E22213] rounded-full flex items-center justify-center text-white mx-auto mb-4">
              <span className="text-lg">🔄</span>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Regular Updates</h4>
            <p className="text-gray-600 text-sm">Curriculum updated with latest AI advancements</p>
          </div>
        </div>
      </div>
    </section>
  );
}