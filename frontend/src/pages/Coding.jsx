import React from 'react'
import OurBelivers from '../components/OurBelivers'

const Coding = () => {
  return (
    <>
      <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Tech Elements */}
          <div className="absolute top-10 left-5 sm:left-10 w-48 h-48 sm:w-64 sm:h-64 bg-[#E22213]/10 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-float">
            <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-20">{"</>"}</div>
          </div>
          <div className="absolute top-40 right-5 sm:right-10 w-40 h-40 sm:w-56 sm:h-56 bg-[#0b234a]/10 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}>
            <div className="absolute inset-0 flex items-center justify-center text-3xl opacity-20">{"{}"}</div>
          </div>
          <div className="absolute bottom-20 left-1/4 w-32 h-32 sm:w-48 sm:h-48 bg-orange-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '3s' }}>
            <div className="absolute inset-0 flex items-center justify-center text-2xl opacity-20">{"<>"}</div>
          </div>

          {/* Binary Code Animation */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 font-mono text-xs sm:text-sm animate-pulse">
              10101010 01010101 11110000 00001111
            </div>
            <div className="absolute top-20 right-20 font-mono text-xs sm:text-sm animate-pulse" style={{ animationDelay: '1s' }}>
              11001100 00110011 10101010 01010101
            </div>
            <div className="absolute bottom-20 left-20 font-mono text-xs sm:text-sm animate-pulse" style={{ animationDelay: '2s' }}>
              11110000 00001111 11001100 00110011
            </div>
          </div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-3">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(#0b234a 1px, transparent 1px),
                        linear-gradient(90deg, #0b234a 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}></div>
          </div>

          {/* Animated Gradient Orbs */}
          <div className="absolute -top-32 -left-32 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-r from-[#E22213] to-[#0b234a] rounded-full opacity-5 animate-pulse-slow"></div>
          <div className="absolute -bottom-32 -right-32 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-r from-[#0b234a] to-orange-500 rounded-full opacity-5 animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center w-full py-8 sm:py-12 lg:py-10">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-6 sm:space-y-8">
              {/* Trust Badge */}
              <div className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <span className="w-2 h-2 bg-[#E22213] rounded-full animate-pulse"></span>
                    <span className="w-2 h-2 bg-[#0b234a] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></span>
                    <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></span>
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-[#0b234a]">
                    🏆 India's Most Trusted Coding Platform
                  </span>
                </div>
              </div>

              {/* Main Heading */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-[#E22213] via-[#0b234a] to-orange-500 bg-clip-text text-transparent">
                  Master Coding
                </span>
                <br />
                <span className="text-gray-900">
                  Build Your Future
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed max-w-2xl">
                <span className="font-semibold text-[#0b234a]">India's Most Trusted destination</span> for students to get{" "}
                <span className="font-semibold text-[#E22213]">Practical & Personalized training.</span>
                <br /><br />
                Learn from the expert faculties of Robotics, Arduino, IOT, Coding, Electronics & many more.
              </p>

              {/* Tech Stack Icons */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 pt-4">
                {[
                  { icon: '🤖', name: 'Robotics', color: 'from-purple-500 to-pink-500' },
                  { icon: '🔌', name: 'Arduino', color: 'from-blue-500 to-cyan-500' },
                  { icon: '🌐', name: 'IOT', color: 'from-green-500 to-emerald-500' },
                  { icon: '💻', name: 'Coding', color: 'from-orange-500 to-red-500' },
                  { icon: '⚡', name: 'Electronics', color: 'from-yellow-500 to-orange-500' }
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 px-3 sm:px-4 py-2 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50 shadow-sm transform hover:scale-105 transition-all duration-300 group"
                  >
                    <span className="text-xl">{tech.icon}</span>
                    <span className="text-sm font-medium text-gray-700 group-hover:text-[#0b234a] transition-colors duration-300">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button className="group relative bg-gradient-to-r from-[#E22213] to-orange-500 hover:from-[#E22213]/90 hover:to-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-xl backdrop-blur-sm border-2 border-white/20 overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <span>🚀 Get Started</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                <button className="group relative border-2 border-[#0b234a] hover:border-[#E22213] text-[#0b234a] hover:text-[#E22213] px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg transition-all duration-300 hover:shadow-xl backdrop-blur-sm bg-white/80 hover:bg-white overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <span>📞 Book Free Demo</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0b234a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-8 max-w-md mx-auto lg:mx-0">
                {[
                  { number: '50K+', label: 'Students Trained' },
                  { number: '100+', label: 'Schools' },
                  { number: '98%', label: 'Success Rate' }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#E22213] to-orange-500 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 font-medium mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Coding Visual */}
            <div className="relative">
              {/* Main Code Visualization */}
              <div className="relative">
                {/* Background Card */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#E22213]/10 via-[#0b234a]/10 to-orange-500/10 rounded-2xl sm:rounded-3xl transform rotate-3 sm:rotate-6 scale-105 blur-sm"></div>

                {/* Code Editor Container */}
                <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl border border-gray-700/50 overflow-hidden">
                  {/* Editor Header */}
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-gray-400 text-sm font-mono">coding_future.py</div>
                  </div>

                  {/* Code Content */}
                  <div className="font-mono text-xs sm:text-sm space-y-1">
                    <div className="text-green-400"># Welcome to Future Coding</div>
                    <div className="text-gray-400">def <span className="text-yellow-300">build_future</span>():</div>
                    <div className="text-blue-400 ml-4">skills</div>
                    <div className="text-gray-400 ml-8">= [</div>
                    <div className="text-cyan-400 ml-12">"Python"</div>
                    <div className="text-cyan-400 ml-12">"JavaScript"</div>
                    <div className="text-cyan-400 ml-12">"AI & ML"</div>
                    <div className="text-gray-400 ml-8">]</div>
                    <div className="text-blue-400 ml-4">future</div>
                    <div className="text-gray-400 ml-8">= <span className="text-yellow-300">create_amazing_projects</span>(skills)</div>
                    <div className="text-gray-400 ml-4">return <span className="text-green-400">future</span></div>
                    <div className="text-gray-400 mt-4"># Start your journey today! 🚀</div>
                  </div>

                  {/* Animated Cursor */}
                  <div className="absolute bottom-4 right-4 w-2 h-4 bg-green-400 animate-pulse"></div>

                  {/* Floating Code Elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-blue-500/20 rounded-lg animate-float flex items-center justify-center">
                    <span className="text-blue-300 text-xs">{ }</span>
                  </div>
                  <div className="absolute bottom-8 left-4 w-6 h-6 bg-green-500/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
                </div>

                {/* Floating Tech Cards */}
                <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl border border-white/50 transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-[#E22213] to-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">🐍</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#0b234a]">Python</div>
                      <div className="text-xs text-gray-600">Beginner Friendly</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl border border-white/50 transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-[#0b234a] to-[#E22213] rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">🌐</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#0b234a]">Web Dev</div>
                      <div className="text-xs text-gray-600">HTML, CSS, JS</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center space-y-1 sm:space-y-2">
            <span className="text-xs sm:text-sm text-gray-600 font-medium">Explore Courses</span>
            <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-2 sm:h-3 bg-gradient-to-b from-[#E22213] to-orange-500 rounded-full mt-1 sm:mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>

        {/* Custom Animations */}
        <style jsx>{`
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(180deg); }
    }
    
    @keyframes pulse-slow {
      0%, 100% { opacity: 0.05; transform: scale(1); }
      50% { opacity: 0.1; transform: scale(1.05); }
    }
    
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
    
    .animate-pulse-slow {
      animation: pulse-slow 4s ease-in-out infinite;
    }
  `}</style>
      </section>
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Platform Icons */}
          <div className="absolute top-10 left-5 sm:left-10 w-48 h-48 sm:w-56 sm:h-56 bg-[#E22213]/10 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float">
            <div className="absolute inset-0 flex items-center justify-center text-3xl opacity-20">🖥️</div>
          </div>
          <div className="absolute top-40 right-5 sm:right-10 w-40 h-40 sm:w-48 sm:h-48 bg-[#0b234a]/10 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-float" style={{ animationDelay: '2s' }}>
            <div className="absolute inset-0 flex items-center justify-center text-2xl opacity-20">👨‍💻</div>
          </div>
          <div className="absolute bottom-20 left-1/4 w-32 h-32 sm:w-40 sm:h-40 bg-orange-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-float" style={{ animationDelay: '3s' }}>
            <div className="absolute inset-0 flex items-center justify-center text-2xl opacity-20">🚀</div>
          </div>

          {/* Code Pattern Background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 font-mono text-xs text-[#0b234a]">
              {`function create() {`}
            </div>
            <div className="absolute top-32 right-20 font-mono text-xs text-[#E22213]" style={{ animationDelay: '1s' }}>
              {`if (creative) {`}
            </div>
            <div className="absolute bottom-32 left-20 font-mono text-xs text-[#0b234a]" style={{ animationDelay: '2s' }}>
              {`return amazing;`}
            </div>
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
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg mb-6">
              <span className="w-2 h-2 bg-[#E22213] rounded-full animate-pulse mr-2"></span>
              <span className="text-sm font-semibold text-[#0b234a]">
                🎯 Industry-Standard Platforms
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-[#E22213] via-[#0b234a] to-orange-500 bg-clip-text text-transparent">
                Coding and AI
              </span>
              <br />
              <span className="text-gray-900">Platform</span>
            </h2>

            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Platforms like PictoBlox, MIT App Inventor, Scratch, and Code.org make coding accessible and engaging through visual programming.
              They empower students to create interactive projects and applications, fostering creativity and problem-solving skills.
            </p>
          </div>

          {/* Platforms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {[
              {
                name: 'PictoBlox',
                icon: '🤖',
                description: 'AI & ML platform for kids',
                color: 'from-purple-500 to-pink-500',
                features: ['AI Programming', 'Game Development', 'Hardware Integration'],
                status: 'Most Popular'
              },
              {
                name: 'MIT App Inventor',
                icon: '📱',
                description: 'Build mobile apps visually',
                color: 'from-green-500 to-emerald-500',
                features: ['App Development', 'Drag & Drop', 'Android Apps'],
                status: 'Industry Standard'
              },
              {
                name: 'Scratch',
                icon: '🎮',
                description: 'Creative coding for beginners',
                color: 'from-orange-500 to-red-500',
                features: ['Visual Coding', 'Animations', 'Storytelling'],
                status: 'Beginner Friendly'
              },
              {
                name: 'Code.org',
                icon: '🌐',
                description: 'Learn computer science',
                color: 'from-blue-500 to-cyan-500',
                features: ['CS Fundamentals', 'Game-Based Learning', 'Curriculum'],
                status: 'Educational'
              }
            ].map((platform, index) => (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-white/50 transform hover:scale-105 hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>

                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full backdrop-blur-sm border ${platform.status === 'Most Popular'
                    ? 'bg-[#E22213]/10 text-[#E22213] border-[#E22213]/20'
                    : platform.status === 'Industry Standard'
                      ? 'bg-[#0b234a]/10 text-[#0b234a] border-[#0b234a]/20'
                      : 'bg-orange-500/10 text-orange-600 border-orange-500/20'
                    }`}>
                    {platform.status}
                  </span>
                </div>

                {/* Platform Icon */}
                <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${platform.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl sm:text-3xl text-white">{platform.icon}</span>
                </div>

                {/* Platform Info */}
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-[#0b234a] transition-colors duration-300">
                    {platform.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {platform.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2">
                    {platform.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className={`w-1.5 h-1.5 bg-gradient-to-r ${platform.color} rounded-full`}></div>
                        <span className="text-xs sm:text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-x-0 group-hover:scale-x-100 transform origin-left"></div>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-br from-[#0b234a] to-[#E22213] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-white shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                  Why Visual Programming?
                </h3>
                <p className="text-blue-100 text-lg leading-relaxed">
                  Visual programming platforms remove the initial complexity of syntax, allowing students to focus on computational thinking and problem-solving fundamentals.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: '🎯', benefit: 'Engaging Learning' },
                    { icon: '💡', benefit: 'Instant Feedback' },
                    { icon: '🚀', benefit: 'Rapid Prototyping' },
                    { icon: '🌟', benefit: 'Build Confidence' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                      <span className="text-xl">{item.icon}</span>
                      <span className="font-medium text-white">{item.benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Content - Stats */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {[
                  { number: '90%', label: 'Faster Learning Curve' },
                  { number: '5M+', label: 'Active Students' },
                  { number: '100+', label: 'Countries' },
                  { number: '4.8/5', label: 'Student Rating' }
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4 sm:p-6 bg-white/10 rounded-2xl backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
                    <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm text-blue-100">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/5 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12 sm:mt-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-white/50">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Ready to Start Your Coding Journey?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Join thousands of students who have discovered the joy of coding through our platform-based learning approach.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group relative bg-gradient-to-r from-[#E22213] to-orange-500 hover:from-[#E22213]/90 hover:to-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl backdrop-blur-sm border-2 border-white/20 overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <span>🚀 Start Learning Now</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                </button>
                <button className="group relative border-2 border-[#0b234a] hover:border-[#E22213] text-[#0b234a] hover:text-[#E22213] px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 hover:shadow-lg backdrop-blur-sm bg-white/80 hover:bg-white overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <span>📚 View Curriculum</span>
                  </span>
                </button>
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

export default Coding