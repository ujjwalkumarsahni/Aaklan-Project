import React from 'react'
import { VRARLabImage } from '../assets/assets'
import OurBelivers from '../components/OurBelivers'

const VRARLab = () => {
  return (
    <>
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-purple-50/30 to-blue-50/30 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating VR/AR Elements */}
          <div className="absolute top-10 left-5 sm:left-10 w-48 h-48 sm:w-64 sm:h-64 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-float">
            <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-20">🕶️</div>
          </div>
          <div className="absolute top-40 right-5 sm:right-10 w-40 h-40 sm:w-56 sm:h-56 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}>
            <div className="absolute inset-0 flex items-center justify-center text-3xl opacity-20">🌐</div>
          </div>
          <div className="absolute bottom-20 left-1/4 w-32 h-32 sm:w-48 sm:h-48 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '3s' }}>
            <div className="absolute inset-0 flex items-center justify-center text-2xl opacity-20">🔮</div>
          </div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-3">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(#0b234a 1px, transparent 1px),
                        linear-gradient(90deg, #0b234a 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}></div>
          </div>

          {/* Holographic Lines */}
          <div className="absolute top-1/4 left-1/4 w-32 h-1 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-1 h-32 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg">
                <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse mr-2"></span>
                <span className="text-sm font-semibold text-[#0b234a]">
                  🚀 Next-Gen Learning Experience
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
                <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
                  VR / AR Lab
                </span>
                <br />
                <span className="text-gray-900">for Schools</span>
              </h2>

              {/* Description */}
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                Cubicle of knowledge offering AI and Robotics education with comprehensive curriculum,
                interactive robots, hands-on projects and real-life applications!
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: '📚', feature: 'Comprehensive Curriculum' },
                  { icon: '🤖', feature: 'Interactive Robots' },
                  { icon: '🔬', feature: 'Hands-on Projects' },
                  { icon: '🌍', feature: 'Real-life Applications' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50 shadow-sm group hover:shadow-md transition-all duration-300">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-lg">{item.icon}</span>
                    </div>
                    <span className="text-gray-700 font-medium">{item.feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className="group relative bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-xl backdrop-blur-sm border-2 border-white/20 overflow-hidden">
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>🎯 Book a Demo</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6">
                {[
                  { number: '200+', label: 'VR Experiences' },
                  { number: '50+', label: 'Schools' },
                  { number: '95%', label: 'Engagement' }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 font-medium mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - VR/AR Visual */}
            <div className="relative">
              {/* Main VR/AR Visualization */}
              <div className="relative">
                {/* Background Card */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-pink-500/10 rounded-3xl transform rotate-6 scale-105 blur-sm"></div>

                {/* VR Headset Container */}
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/50 overflow-hidden">
                  <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-gray-900 relative">
                    {/* Holographic Display with Image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-full h-full">
                        {/* Main VR Image */}
                        <img
                          src={VRARLabImage.VRrightimage}
                          alt="VR Lab Experience - Students using VR headsets in classroom"
                          className="w-full h-full object-cover opacity-90"
                        />

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-blue-900/30 to-transparent"></div>

                        {/* Content Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center text-white p-4 sm:p-6">
                            <div className="text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4">🕶️</div>
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">Virtual Reality Lab</h3>
                            <p className="text-white/80 text-sm sm:text-base">Immersive Learning Experience</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Holograms */}
                    <div className="absolute top-4 left-4 w-12 h-12 sm:w-16 sm:h-16 bg-blue-500/30 rounded-full animate-float flex items-center justify-center">
                      <span className="text-white text-xs sm:text-sm">VR</span>
                    </div>
                    <div className="absolute bottom-4 right-4 w-10 h-10 sm:w-12 sm:h-12 bg-purple-500/40 rounded-lg rotate-45 animate-float flex items-center justify-center" style={{ animationDelay: '2s' }}>
                      <span className="text-white text-xs">AR</span>
                    </div>
                    <div className="absolute top-1/2 right-1/4 w-6 h-6 sm:w-8 sm:h-8 bg-pink-500/50 rounded-full animate-pulse"></div>

                    {/* Scanning Lines Effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent animate-pulse"></div>

                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl"></div>
                  </div>

                  {/* AR Elements Floating Around */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 blur-xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 blur-xl"></div>
                </div>

                {/* Floating Tech Cards */}
                <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg sm:shadow-xl border border-white/50 transform hover:scale-105 transition-all duration-300 z-10">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs sm:text-sm">🔍</span>
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-[#0b234a]">AR View</div>
                      <div className="text-xs text-gray-600">Interactive</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg sm:shadow-xl border border-white/50 transform hover:scale-105 transition-all duration-300 z-10">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs sm:text-sm">🌍</span>
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-[#0b234a]">VR World</div>
                      <div className="text-xs text-gray-600">Immersive</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional AR Elements */}
              <div className="absolute top-1/2 -right-4 sm:-right-8 transform -translate-y-1/2">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-20 animate-pulse-slow"></div>
              </div>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="mt-16 sm:mt-20">
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Powered by Cutting-Edge Technology
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: 'Oculus Quest', icon: '🕶️', color: 'from-purple-500 to-pink-500' },
                { name: 'Unity 3D', icon: '🎮', color: 'from-gray-600 to-gray-800' },
                { name: 'AR Core', icon: '📱', color: 'from-blue-500 to-cyan-500' },
                { name: 'WebXR', icon: '🌐', color: 'from-green-500 to-emerald-500' }
              ].map((tech, index) => (
                <div
                  key={index}
                  className="group bg-white/60 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg border border-white/50 transform hover:scale-105 transition-all duration-300"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white text-xl">{tech.icon}</span>
                  </div>
                  <div className="font-semibold text-gray-900 text-sm">{tech.name}</div>
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
    
    @keyframes pulse-slow {
      0%, 100% { opacity: 0.1; transform: scale(1); }
      50% { opacity: 0.2; transform: scale(1.05); }
    }
    
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
    
    .animate-pulse-slow {
      animation: pulse-slow 4s ease-in-out infinite;
    }
  `}</style>
      </section>

      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating VR Elements */}
          <div className="absolute top-10 left-5 sm:left-10 w-48 h-48 sm:w-64 sm:h-64 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-float">
            <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-20">🔬</div>
          </div>
          <div className="absolute top-40 right-5 sm:right-10 w-40 h-40 sm:w-56 sm:h-56 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}>
            <div className="absolute inset-0 flex items-center justify-center text-3xl opacity-20">🎮</div>
          </div>
          <div className="absolute bottom-20 left-1/4 w-32 h-32 sm:w-48 sm:h-48 bg-green-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '3s' }}>
            <div className="absolute inset-0 flex items-center justify-center text-2xl opacity-20">🌍</div>
          </div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-3">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(#0b234a 1px, transparent 1px),
                        linear-gradient(90deg, #0b234a 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}></div>
          </div>

          {/* Holographic Lines */}
          <div className="absolute top-1/3 left-0 w-32 h-1 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-transparent animate-pulse"></div>
          <div className="absolute bottom-1/4 right-0 w-1 h-32 bg-gradient-to-b from-green-500/30 via-blue-500/30 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg mb-6">
              <span className="w-2 h-2 bg-[#E22213] rounded-full animate-pulse mr-2"></span>
              <span className="text-sm font-semibold text-[#0b234a]">
                🚀 Transformative Learning Experience
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              A new era of education with{" "}
              <span className="bg-gradient-to-r from-[#E22213] via-[#0b234a] to-purple-600 bg-clip-text text-transparent">
                Aaklan
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Expand your mind beyond the boundaries of the classroom through virtual reality
            </p>
          </div>

          {/* VR Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: (
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                ),
                title: "Virtual Lab",
                description: "Understanding different science topics is made easy with VR through a 360-degree virtual science lab.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: (
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                ),
                title: "Fun with VR",
                description: "The gaming experience in VR enables learners to explore and learn while they play.",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: (
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                ),
                title: "Teacher First",
                description: "The teacher will describe and tell a story regarding the topic while students are traveling in the virtual world.",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: (
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                ),
                title: "Field Trips",
                description: "Experience amazing educational trips and virtually visit the science lab from the classroom without traveling.",
                color: "from-orange-500 to-red-500"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-white/50 transform hover:scale-105 hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                {/* Feature Icon */}
                {feature.icon}

                {/* Feature Content */}
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-[#0b234a] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Effect Line */}
                <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${feature.color} group-hover:w-full transition-all duration-500`}></div>

                {/* Floating Element */}
                <div className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br ${feature.color} rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 animate-float`}></div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12 sm:mt-16">
            <div className="bg-gradient-to-r from-[#0b234a] to-[#E22213] rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-white shadow-2xl overflow-hidden">
              <div className="relative">
                {/* Floating VR Elements */}
                <div className="absolute top-4 left-4 w-8 h-8 bg-white/20 rounded-full animate-float"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 bg-orange-400/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                  Ready to Transform Your Classroom?
                </h3>
                <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                  Experience the future of education with our immersive VR learning platform designed specifically for schools.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="group relative bg-white text-[#0b234a] hover:bg-gray-100 px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-xl backdrop-blur-sm border-2 border-white/20 overflow-hidden">
                    <span className="relative z-10 flex items-center justify-center space-x-2">
                      <span>🎯 Book a Demo</span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </span>
                  </button>

                  <button className="group relative border-2 border-white/30 hover:border-white text-white hover:bg-white/10 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-lg backdrop-blur-sm overflow-hidden">
                    <span className="relative z-10 flex items-center justify-center space-x-2">
                      <span>📚 Learn More</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { number: '500+', label: 'VR Lessons' },
              { number: '10K+', label: 'Students' },
              { number: '200+', label: 'Schools' },
              { number: '98%', label: 'Engagement' }
            ].map((stat, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/50">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#E22213] to-purple-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium mt-1">{stat.label}</div>
              </div>
            ))}
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

      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-green-50/30 to-blue-50/30 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Elements */}
          <div className="absolute top-10 left-5 sm:left-10 w-48 h-48 sm:w-64 sm:h-64 bg-green-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-float">
            <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-20">👨‍👩‍👧‍👦</div>
          </div>
          <div className="absolute top-40 right-5 sm:right-10 w-40 h-40 sm:w-56 sm:h-56 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}>
            <div className="absolute inset-0 flex items-center justify-center text-3xl opacity-20">📱</div>
          </div>
          <div className="absolute bottom-20 left-1/4 w-32 h-32 sm:w-48 sm:h-48 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '3s' }}>
            <div className="absolute inset-0 flex items-center justify-center text-2xl opacity-20">📊</div>
          </div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-3">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(#0b234a 1px, transparent 1px),
                        linear-gradient(90deg, #0b234a 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}></div>
          </div>

          {/* Connection Lines */}
          <div className="absolute top-1/3 left-1/4 w-32 h-1 bg-gradient-to-r from-green-500/20 via-blue-500/20 to-purple-500/20 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/3 w-1 h-32 bg-gradient-to-b from-green-500/20 via-blue-500/20 to-purple-500/20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* left Content - Image */}
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative">
                {/* Background Card */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl transform rotate-3 lg:rotate-6 scale-105 blur-sm"></div>

                {/* Image Container */}
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/50 overflow-hidden">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-green-100 via-blue-100 to-purple-100 relative">
                    {/* Actual Image with Overlay */}
                    <div className="absolute inset-0">
                      <img
                        src={VRARLabImage.parentImage}
                        alt="Parent and child using fotonVR app - Tracking learning progress together"
                        className="w-full h-full object-cover"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b234a]/30 via-transparent to-transparent"></div>
                    </div>

                    {/* App Interface Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/50">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                          <span className="text-white text-lg">📱</span>
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-[#0b234a]">fotonVR Parent App</div>
                          <div className="text-xs text-gray-600">Live Progress Tracking</div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute top-4 left-4 w-12 h-12 bg-green-500/20 rounded-full animate-float flex items-center justify-center">
                      <span className="text-green-600 text-sm">👨‍🏫</span>
                    </div>
                    <div className="absolute top-4 right-4 w-10 h-10 bg-blue-500/20 rounded-lg rotate-45 animate-float flex items-center justify-center" style={{ animationDelay: '2s' }}>
                      <span className="text-blue-600 text-sm">📈</span>
                    </div>

                    {/* Progress Chart Overlay */}
                    <div className="absolute top-1/4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-md border border-white/50">
                      <div className="text-center">
                        <div className="text-lg font-bold text-green-600">85%</div>
                        <div className="text-xs text-gray-600">Progress</div>
                        <div className="w-16 h-1 bg-gray-200 rounded-full mt-1">
                          <div className="w-12 h-1 bg-green-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full opacity-20 blur-xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 blur-xl"></div>
                </div>

                {/* Floating Stats Cards */}
                <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/50 transform hover:scale-105 transition-all duration-300 z-10">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">🌍</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#0b234a]">Global Access</div>
                      <div className="text-xs text-gray-600">Anywhere, Anytime</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-6 -left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/50 transform hover:scale-105 transition-all duration-300 z-10">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">💬</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#0b234a]">Live Chat</div>
                      <div className="text-xs text-gray-600">Instant Updates</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile App Mockups */}
              <div className="absolute -bottom-8 -left-8 hidden lg:block">
                <div className="relative">
                  <div className="w-24 h-40 bg-gray-800 rounded-3xl p-2 shadow-2xl border-2 border-gray-700">
                    <div className="w-full h-full bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center">
                      <span className="text-white text-2xl">📱</span>
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">+1</span>
                  </div>
                </div>
              </div>
            </div>
            {/* right Content - Text */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></span>
                <span className="text-sm font-semibold text-[#0b234a]">
                  💝 Parent-Child Connection
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  "Easing the burden
                </span>
                <br />
                <span className="text-gray-900">for parents"</span>
              </h2>

              {/* Features List */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm group hover:shadow-md transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-lg">👨‍🏫</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Teacher - Student Pairing</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Student performance can be easily tracked using the fotonVR Parent app.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm group hover:shadow-md transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-lg">🌍</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Global Progress Tracking</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Progress can be checked from any part of the globe and at any time through chat or question options.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm group hover:shadow-md transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-lg">💝</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Strengthened Connection</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Parents and children feel connected as parents are constantly updated about their child's learning curve.
                    </p>
                  </div>
                </div>
              </div>

              {/* App Download CTA */}
              <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-6 text-white shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Download fotonVR Parent App</h3>
                    <p className="text-green-100 text-sm">Stay connected with your child's learning journey</p>
                  </div>
                  <div className="flex space-x-3">
                    <button className="bg-black hover:bg-gray-800 px-4 py-2 rounded-xl text-white text-sm font-semibold transition-all duration-300 transform hover:scale-105">
                      📱 App Store
                    </button>
                    <button className="bg-black hover:bg-gray-800 px-4 py-2 rounded-xl text-white text-sm font-semibold transition-all duration-300 transform hover:scale-105">
                      🤖 Play Store
                    </button>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                {[
                  { number: '24/7', label: 'Access' },
                  { number: '100%', label: 'Transparency' },
                  { number: '95%', label: 'Parent Satisfaction' }
                ].map((stat, index) => (
                  <div key={index} className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-white/50">
                    <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 font-medium mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Features Grid */}
          <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '📊',
                title: 'Real-time Analytics',
                description: 'Detailed progress reports and performance metrics'
              },
              {
                icon: '🔔',
                title: 'Instant Notifications',
                description: 'Get alerts for achievements and areas needing attention'
              },
              {
                icon: '👨‍👧‍👦',
                title: 'Family Connection',
                description: 'Bridge the gap between school and home learning'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-white/50 transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">{feature.icon}</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
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

      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-indigo-50/30 to-blue-50/30 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Elements */}
          <div className="absolute top-10 left-5 sm:left-10 w-48 h-48 sm:w-64 sm:h-64 bg-indigo-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-float">
            <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-20">📊</div>
          </div>
          <div className="absolute top-40 right-5 sm:right-10 w-40 h-40 sm:w-56 sm:h-56 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}>
            <div className="absolute inset-0 flex items-center justify-center text-3xl opacity-20">🏫</div>
          </div>
          <div className="absolute bottom-20 left-1/4 w-32 h-32 sm:w-48 sm:h-48 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '3s' }}>
            <div className="absolute inset-0 flex items-center justify-center text-2xl opacity-20">👨‍💼</div>
          </div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-3">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(#0b234a 1px, transparent 1px),
                        linear-gradient(90deg, #0b234a 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}></div>
          </div>

          {/* Data Flow Lines */}
          <div className="absolute top-1/3 left-1/4 w-32 h-1 bg-gradient-to-r from-indigo-500/20 via-blue-500/20 to-purple-500/20 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/3 w-1 h-32 bg-gradient-to-b from-indigo-500/20 via-blue-500/20 to-purple-500/20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content - Text */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg">
                <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse mr-2"></span>
                <span className="text-sm font-semibold text-[#0b234a]">
                  🏫 School Administration Made Easy
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  "Bridging the gap
                </span>
                <br />
                <span className="text-gray-900">between student and school"</span>
              </h2>

              {/* Features List */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm group hover:shadow-md transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-lg">📊</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Admin Dashboard for school</h3>
                    <p className="text-gray-700 leading-relaxed">
                      User-friendly admin dashboard customized for school administrators to monitor the results and outcomes of the VR lab.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm group hover:shadow-md transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-lg">📝</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Session Records Management</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Maintain a record of VR lab sessions and the respective teachers who conducted it.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm group hover:shadow-md transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-lg">👥</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Class Attendance Tracking</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Track data of classes that attended the lab sessions with detailed participation metrics.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm group hover:shadow-md transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-lg">📚</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Comprehensive Lesson Details</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Provide details of the lessons, topics taught, and assessments given for every class.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button className="group relative bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl backdrop-blur-sm border-2 border-white/20 overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <span>🚀 Request Admin Demo</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                </button>

                <button className="group relative border-2 border-[#0b234a] hover:border-indigo-600 text-[#0b234a] hover:text-indigo-600 px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg transition-all duration-300 hover:shadow-xl backdrop-blur-sm bg-white/80 hover:bg-white overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <span>📋 View Features</span>
                  </span>
                </button>
              </div>
            </div>

            {/* Right Content - Dashboard Visual */}
            <div className="relative">
              {/* Main Dashboard Container */}
              <div className="relative">
                {/* Background Card */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl transform rotate-3 lg:rotate-6 scale-105 blur-sm"></div>

                {/* Dashboard Container */}
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/50 overflow-hidden">
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200/50">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center">
                        <span className="text-white text-sm">🏫</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">School Admin Dashboard</h3>
                        <p className="text-gray-600 text-sm">VR Lab Analytics</p>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">Live</div>
                  </div>

                  {/* Dashboard Content */}
                  <div className="space-y-6">
                    {/* Stats Row */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-4 border border-indigo-100">
                        <div className="text-2xl font-bold text-indigo-600">42</div>
                        <div className="text-xs text-gray-600">Active Sessions</div>
                      </div>
                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100">
                        <div className="text-2xl font-bold text-green-600">89%</div>
                        <div className="text-xs text-gray-600">Engagement Rate</div>
                      </div>
                    </div>

                    {/* Session List */}
                    <div className="bg-gray-50/50 rounded-xl p-4 border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-3 text-sm">Recent VR Lab Sessions</h4>
                      <div className="space-y-2">
                        {[
                          { class: 'Grade 8A', teacher: 'Mr. Sharma', topic: 'Solar System', time: '2h ago' },
                          { class: 'Grade 7B', teacher: 'Ms. Patel', topic: 'Human Anatomy', time: '4h ago' },
                          { class: 'Grade 9C', teacher: 'Dr. Kumar', topic: 'Chemistry Lab', time: '1d ago' }
                        ].map((session, index) => (
                          <div key={index} className="flex items-center justify-between p-2 bg-white rounded-lg border border-gray-100">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                                <span className="text-blue-600 text-xs">👨‍🏫</span>
                              </div>
                              <div>
                                <div className="text-sm font-medium text-gray-900">{session.class}</div>
                                <div className="text-xs text-gray-500">{session.teacher}</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-sm font-medium text-gray-900">{session.topic}</div>
                              <div className="text-xs text-gray-500">{session.time}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Progress Chart */}
                    <div className="bg-white rounded-xl p-4 border border-gray-200">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-gray-900 text-sm">Class Participation</h4>
                        <span className="text-xs text-gray-500">This Month</span>
                      </div>
                      <div className="space-y-2">
                        {[
                          { class: 'Grade 6', progress: 85, color: 'bg-green-500' },
                          { class: 'Grade 7', progress: 72, color: 'bg-blue-500' },
                          { class: 'Grade 8', progress: 93, color: 'bg-purple-500' },
                          { class: 'Grade 9', progress: 68, color: 'bg-orange-500' }
                        ].map((item, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <div className="text-sm text-gray-600 w-12">{item.class}</div>
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                              <div
                                className={`h-2 rounded-full ${item.color} transition-all duration-500`}
                                style={{ width: `${item.progress}%` }}
                              ></div>
                            </div>
                            <div className="text-sm font-medium text-gray-900 w-8">{item.progress}%</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Dashboard Footer */}
                  <div className="mt-6 pt-4 border-t border-gray-200/50">
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>Last updated: Just now</span>
                      <span>fotonVR Admin v2.1</span>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/50 transform hover:scale-105 transition-all duration-300 z-10">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">📈</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#0b234a]">Analytics</div>
                      <div className="text-xs text-gray-600">Real-time Data</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/50 transform hover:scale-105 transition-all duration-300 z-10">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">👥</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#0b234a]">Reports</div>
                      <div className="text-xs text-gray-600">Export Data</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Flow Animation */}
              <div className="absolute top-1/2 -right-8 transform -translate-y-1/2">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-full opacity-20 animate-pulse-slow"></div>
              </div>
            </div>
          </div>

          {/* Key Metrics Section */}
          <div className="mt-16 sm:mt-20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { icon: '📊', metric: '100%', label: 'Data Accuracy' },
                { icon: '⚡', metric: 'Real-time', label: 'Live Updates' },
                { icon: '🔒', metric: 'Secure', label: 'Data Protection' },
                { icon: '📱', metric: 'Mobile', label: 'Access Anywhere' }
              ].map((item, index) => (
                <div key={index} className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-white/50 transform hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-xl">{item.icon}</span>
                  </div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                    {item.metric}
                  </div>
                  <div className="text-sm text-gray-600 font-medium mt-1">{item.label}</div>
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
    
    @keyframes pulse-slow {
      0%, 100% { opacity: 0.1; transform: scale(1); }
      50% { opacity: 0.2; transform: scale(1.05); }
    }
    
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
    
    .animate-pulse-slow {
      animation: pulse-slow 4s ease-in-out infinite;
    }
  `}</style>
      </section>
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-purple-50/30 to-blue-50/30 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Elements */}
          <div className="absolute top-10 left-5 sm:left-10 w-48 h-48 sm:w-64 sm:h-64 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-float">
            <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-20">🕶️</div>
          </div>
          <div className="absolute top-40 right-5 sm:right-10 w-40 h-40 sm:w-56 sm:h-56 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}>
            <div className="absolute inset-0 flex items-center justify-center text-3xl opacity-20">📦</div>
          </div>
          <div className="absolute bottom-20 left-1/4 w-32 h-32 sm:w-48 sm:h-48 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '3s' }}>
            <div className="absolute inset-0 flex items-center justify-center text-2xl opacity-20">🏫</div>
          </div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-3">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(#0b234a 1px, transparent 1px),
                        linear-gradient(90deg, #0b234a 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}></div>
          </div>

          {/* Connection Lines */}
          <div className="absolute top-1/3 left-1/4 w-32 h-1 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-pink-500/20 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/3 w-1 h-32 bg-gradient-to-b from-purple-500/20 via-blue-500/20 to-pink-500/20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg mb-6">
              <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse mr-2"></span>
              <span className="text-sm font-semibold text-[#0b234a]">
                🎯 Complete VR Classroom Solutions
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
                VR Kit for School
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose the perfect VR classroom setup for your school with our comprehensive packages.
              Everything you need for immersive learning in one complete kit.
            </p>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                devices: "5 Devices",
                title: "AaklanVR Classroom",
                popular: false,
                features: [
                  "5 VR Devices",
                  "5 Headsets",
                  "1 Tablet",
                  "1 Router",
                  "1 Multi charger",
                  "1 Storage case",
                  "VR content for 1 year"
                ],
                color: "from-blue-500 to-cyan-500",
                price: "Starter"
              },
              {
                devices: "10 Devices",
                title: "AaklanVR Classroom",
                popular: true,
                features: [
                  "10 VR Devices",
                  "10 Headsets",
                  "1 Tablet",
                  "1 Router",
                  "1 Multi charger",
                  "1 Storage case",
                  "VR content for 1 year"
                ],
                color: "from-purple-500 to-pink-500",
                price: "Most Popular"
              },
              {
                devices: "15 Devices",
                title: "AaklanVR Classroom",
                popular: false,
                features: [
                  "15 VR Devices",
                  "15 Headsets",
                  "1 Tablet",
                  "1 Router",
                  "1 Multi charger",
                  "1 Storage case",
                  "VR content for 1 year"
                ],
                color: "from-green-500 to-emerald-500",
                price: "Advanced"
              },
              {
                devices: "20 Devices",
                title: "AaklanVR Classroom",
                popular: false,
                features: [
                  "20 VR Devices",
                  "20 Headsets",
                  "1 Tablet",
                  "1 Router",
                  "1 Multi charger",
                  "1 Storage case",
                  "VR content for 1 year"
                ],
                color: "from-orange-500 to-red-500",
                price: "Enterprise"
              }
            ].map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-xl border-2 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${plan.popular
                    ? 'border-purple-500 shadow-2xl'
                    : 'border-white/50'
                  }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-xs font-semibold shadow-lg">
                      ⭐ Most Popular
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-white text-2xl">🕶️</span>
                  </div>
                  <div className="text-sm font-semibold text-gray-500 mb-1">{plan.devices}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent border border-current`}>
                    {plan.price}
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3 p-2 bg-gray-50/50 rounded-lg group hover:bg-white transition-all duration-300">
                      <div className={`w-6 h-6 bg-gradient-to-br ${plan.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-sm text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className={`group relative w-full bg-gradient-to-r ${plan.color} hover:opacity-90 text-white py-3 px-4 rounded-xl font-semibold text-sm shadow-lg transform hover:scale-105 transition-all duration-300 overflow-hidden`}>
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <span>Get Started</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                {/* Hover Effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${plan.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
              </div>
            ))}
          </div>

          {/* Comparison Features */}
          <div className="mt-16 sm:mt-20 bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-xl border border-white/50">
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8">
              All Packages Include
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: "📱",
                  title: "Tablet Controller",
                  description: "Easy classroom management"
                },
                {
                  icon: "🌐",
                  title: "WiFi Router",
                  description: "Seamless connectivity"
                },
                {
                  icon: "⚡",
                  title: "Multi Charger",
                  description: "Charge all devices simultaneously"
                },
                {
                  icon: "💼",
                  title: "Storage Case",
                  description: "Safe and organized storage"
                }
              ].map((feature, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl">{feature.icon}</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12 sm:mt-16">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 sm:p-12 text-white shadow-2xl overflow-hidden">
              <div className="relative">
                {/* Floating Elements */}
                <div className="absolute top-4 left-4 w-8 h-8 bg-white/20 rounded-full animate-float"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 bg-pink-400/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                  Ready to Transform Your Classroom?
                </h3>
                <p className="text-purple-100 text-lg mb-8 max-w-2xl mx-auto">
                  Get expert consultation to choose the perfect VR kit for your school's needs and budget.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="group relative bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-xl backdrop-blur-sm border-2 border-white/20 overflow-hidden">
                    <span className="relative z-10 flex items-center justify-center space-x-2">
                      <span>📞 Book Consultation</span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </span>
                  </button>

                  <button className="group relative border-2 border-white/30 hover:border-white text-white hover:bg-white/10 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-lg backdrop-blur-sm overflow-hidden">
                    <span className="relative z-10 flex items-center justify-center space-x-2">
                      <span>📧 Request Quote</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { number: '500+', label: 'Schools Equipped' },
              { number: '50K+', label: 'Students Impacted' },
              { number: '99%', label: 'Satisfaction Rate' },
              { number: '24/7', label: 'Support' }
            ].map((stat, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/50">
                <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium mt-1">{stat.label}</div>
              </div>
            ))}
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


      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-green-50/30 to-blue-50/30 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Elements */}
          <div className="absolute top-10 left-5 sm:left-10 w-48 h-48 sm:w-64 sm:h-64 bg-green-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-float">
            <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-20">👨‍👩‍👧‍👦</div>
          </div>
          <div className="absolute top-40 right-5 sm:right-10 w-40 h-40 sm:w-56 sm:h-56 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}>
            <div className="absolute inset-0 flex items-center justify-center text-3xl opacity-20">📱</div>
          </div>
          <div className="absolute bottom-20 left-1/4 w-32 h-32 sm:w-48 sm:h-48 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '3s' }}>
            <div className="absolute inset-0 flex items-center justify-center text-2xl opacity-20">📊</div>
          </div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-3">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(#0b234a 1px, transparent 1px),
                        linear-gradient(90deg, #0b234a 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}></div>
          </div>

          {/* Connection Lines */}
          <div className="absolute top-1/3 left-1/4 w-32 h-1 bg-gradient-to-r from-green-500/20 via-blue-500/20 to-purple-500/20 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/3 w-1 h-32 bg-gradient-to-b from-green-500/20 via-blue-500/20 to-purple-500/20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content - Text */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></span>
                <span className="text-sm font-semibold text-[#0b234a]">
                  💝 Stay Connected with Your Child's Learning
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  "Easing the burden
                </span>
                <br />
                <span className="text-gray-900">for parents"</span>
              </h2>

              {/* App Introduction */}
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-sm">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></span>
                  Parent app to monitor your child's performance
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Student performance can be easily tracked using the fotonVR Parent app.
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm group hover:shadow-md transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-lg">🌍</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Global Progress Tracking</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Progress can be checked from any part of the globe and at any time through chat or question options.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm group hover:shadow-md transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-lg">💝</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Strengthened Connection</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Parents and children feel connected as parents are constantly updated about their child's learning curve.
                    </p>
                  </div>
                </div>
              </div>

              {/* App Download CTA */}
              <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-6 text-white shadow-xl">
                <div className="flex flex-col sm:flex-row items-center justify-between">
                  <div className="mb-4 sm:mb-0">
                    <h3 className="text-xl font-bold mb-2">Download fotonVR Parent App</h3>
                    <p className="text-green-100 text-sm">Stay connected with your child's learning journey</p>
                  </div>
                  <div className="flex space-x-3">
                    <button className="bg-black hover:bg-gray-800 px-4 py-3 rounded-xl text-white font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                      <span>📱</span>
                      <span>App Store</span>
                    </button>
                    <button className="bg-black hover:bg-gray-800 px-4 py-3 rounded-xl text-white font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                      <span>🤖</span>
                      <span>Play Store</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                {[
                  { number: '24/7', label: 'Access' },
                  { number: '100%', label: 'Transparency' },
                  { number: '95%', label: 'Parent Satisfaction' }
                ].map((stat, index) => (
                  <div key={index} className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-white/50">
                    <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 font-medium mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - App Visual */}
            <div className="relative">
              {/* Main App Container */}
              <div className="relative">
                {/* Background Card */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl transform rotate-3 lg:rotate-6 scale-105 blur-sm"></div>

                {/* App Mockup Container */}
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/50 overflow-hidden">
                  {/* Smartphone Mockup */}
                  <div className="relative mx-auto w-64 sm:w-72 lg:w-80">
                    {/* Phone Frame */}
                    <div className="bg-gray-800 rounded-3xl p-3 shadow-2xl border-2 border-gray-700">
                      {/* Phone Screen */}
                      <div className="bg-gradient-to-br from-green-400 via-blue-400 to-purple-400 rounded-2xl overflow-hidden relative">
                        {/* App Header */}
                        <div className="bg-white/90 backdrop-blur-sm p-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                              <span className="text-white text-lg">📱</span>
                            </div>
                            <div>
                              <div className="text-sm font-bold text-gray-900">fotonVR Parent</div>
                              <div className="text-xs text-gray-600">Live Progress Tracking</div>
                            </div>
                          </div>
                        </div>

                        {/* App Content */}
                        <div className="p-4 space-y-4">
                          {/* Student Profile */}
                          <div className="bg-white/80 rounded-xl p-3 shadow-sm">
                            <div className="flex items-center space-x-3">
                              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                                <span className="text-white">👧</span>
                              </div>
                              <div>
                                <div className="font-bold text-gray-900">Sarah's Progress</div>
                                <div className="text-xs text-gray-600">Grade 8 • Science</div>
                              </div>
                            </div>
                          </div>

                          {/* Progress Stats */}
                          <div className="grid grid-cols-2 gap-3">
                            <div className="bg-white/80 rounded-xl p-3 text-center">
                              <div className="text-lg font-bold text-green-600">85%</div>
                              <div className="text-xs text-gray-600">Overall</div>
                            </div>
                            <div className="bg-white/80 rounded-xl p-3 text-center">
                              <div className="text-lg font-bold text-blue-600">92%</div>
                              <div className="text-xs text-gray-600">Attendance</div>
                            </div>
                          </div>

                          {/* Recent Activity */}
                          <div className="bg-white/80 rounded-xl p-3">
                            <div className="text-sm font-bold text-gray-900 mb-2">Recent Activity</div>
                            <div className="space-y-2">
                              {[
                                { activity: "Completed VR Lab", time: "2h ago", icon: "🔬" },
                                { activity: "Science Quiz", time: "1d ago", icon: "📝" },
                                { activity: "VR Field Trip", time: "2d ago", icon: "🌍" }
                              ].map((item, index) => (
                                <div key={index} className="flex items-center space-x-2 text-xs">
                                  <span>{item.icon}</span>
                                  <span className="text-gray-700 flex-1">{item.activity}</span>
                                  <span className="text-gray-500">{item.time}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Progress Bar */}
                          <div className="bg-white/80 rounded-xl p-3">
                            <div className="flex justify-between text-xs mb-1">
                              <span className="text-gray-700">Monthly Progress</span>
                              <span className="text-green-600 font-bold">75%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                            </div>
                          </div>
                        </div>

                        {/* App Navigation */}
                        <div className="bg-white/90 backdrop-blur-sm p-3 border-t border-gray-200">
                          <div className="flex justify-around">
                            {["📊", "💬", "👨‍👩‍👧", "⚙️"].map((icon, index) => (
                              <button key={index} className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                                <span className="text-lg">{icon}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Phone Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-gray-800 rounded-b-2xl"></div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full opacity-20 blur-xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 blur-xl"></div>
                </div>

                {/* Floating Feature Cards */}
                <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/50 transform hover:scale-105 transition-all duration-300 z-10">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">💬</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#0b234a]">Live Chat</div>
                      <div className="text-xs text-gray-600">Instant Updates</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-6 -left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/50 transform hover:scale-105 transition-all duration-300 z-10">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">📈</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#0b234a]">Analytics</div>
                      <div className="text-xs text-gray-600">Progress Reports</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* App Store Badges */}
              <div className="flex justify-center space-x-4 mt-8">
                <div className="bg-black hover:bg-gray-800 rounded-xl p-3 transform hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="flex items-center space-x-2 text-white">
                    <span className="text-xl">📱</span>
                    <div className="text-left">
                      <div className="text-xs">Download on the</div>
                      <div className="text-sm font-bold">App Store</div>
                    </div>
                  </div>
                </div>
                <div className="bg-black hover:bg-gray-800 rounded-xl p-3 transform hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="flex items-center space-x-2 text-white">
                    <span className="text-xl">🤖</span>
                    <div className="text-left">
                      <div className="text-xs">Get it on</div>
                      <div className="text-sm font-bold">Google Play</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Features */}
          <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🔔',
                title: 'Real-time Notifications',
                description: 'Get instant alerts for achievements, attendance, and important updates'
              },
              {
                icon: '📚',
                title: 'Detailed Reports',
                description: 'Comprehensive progress reports with actionable insights'
              },
              {
                icon: '👨‍👩‍👧‍👦',
                title: 'Family Dashboard',
                description: 'Share progress with family members and celebrate milestones together'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-white/50 transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">{feature.icon}</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
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

export default VRARLab