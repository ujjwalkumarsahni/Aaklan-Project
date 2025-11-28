import React from 'react'
import { 
  Target, 
  Clock, 
  Crown, 
  Gift, 
  Rocket, 
  Shield, 
  Phone, 
  User, 
  MessageCircle,
  ArrowRight,
  Building,
  MapPin,
  School
} from 'lucide-react'

const BookFreeDemo = () => {
  return (
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
              <span className="text-sm font-semibold text-white flex items-center">
                <Target className="w-4 h-4 mr-1" />
                Limited Time Offer
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
                { icon: <Clock className="w-5 h-5" />, text: '30 Minutes' },
                { icon: <Crown className="w-5 h-5" />, text: 'Completely Free' },
                { icon: <Gift className="w-5 h-5" />, text: 'Special Offer' }
              ].map((feature, index) => (
                <div key={index} className="flex items-center justify-center space-x-2 p-2 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
                  <span className="text-white">{feature.icon}</span>
                  <span className="text-white font-medium text-sm sm:text-base">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Demo Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-3 sm:p-4 lg:p-6 shadow-2xl border border-white/20 max-w-5xl mx-auto">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-white text-sm font-medium mb-2 text-left flex items-center">
                      <User className="w-4 h-4 mr-1" />
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
                    <label htmlFor="phone" className="block text-white text-sm font-medium mb-2 text-left flex items-center">
                      <Phone className="w-4 h-4 mr-1" />
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

                {/* New Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="designation" className="block text-white text-sm font-medium mb-2 text-left flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      Designation *
                    </label>
                    <select
                      id="designation"
                      name="designation"
                      required
                      className="w-full px-2 py-2 bg-white/90 backdrop-blur-sm border border-white/30 rounded-2xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select your designation</option>
                      <option value="Educator">Educator</option>
                      <option value="Management">Management</option>
                      <option value="Principal">Principal</option>
                      <option value="Parent">Parent</option>
                      <option value="Trainer">Trainer</option>
                      <option value="Student">Student</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="schoolName" className="block text-white text-sm font-medium mb-2 text-left flex items-center">
                      <School className="w-4 h-4 mr-1" />
                      School Name *
                    </label>
                    <input
                      type="text"
                      id="schoolName"
                      required
                      className="w-full px-2 py-2 bg-white/90 backdrop-blur-sm border border-white/30 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
                      placeholder="Enter school name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="city" className="block text-white text-sm font-medium mb-2 text-left flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      City *
                    </label>
                    <input
                      type="text"
                      id="city"
                      required
                      className="w-full px-2 py-2 bg-white/90 backdrop-blur-sm border border-white/30 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your city"
                    />
                  </div>
                  <div>
                    <label htmlFor="schoolAddress" className="block text-white text-sm font-medium mb-2 text-left flex items-center">
                      <Building className="w-4 h-4 mr-1" />
                      School Address
                    </label>
                    <input
                      type="text"
                      id="schoolAddress"
                      className="w-full px-2 py-2 bg-white/90 backdrop-blur-sm border border-white/30 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
                      placeholder="Enter school address"
                    />
                  </div>
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
                  <label htmlFor="message" className="block text-white text-sm font-medium mb-2 text-left flex items-center">
                    <MessageCircle className="w-4 h-4 mr-1" />
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
                    <Rocket className="w-5 h-5" />
                    <span>Book My FREE Demo Now</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </form>

              {/* Trust Indicators */}
              <div className="mt-6 text-center">
                <p className="text-blue-100 text-sm flex items-center justify-center">
                  <Shield className="w-4 h-4 mr-1" />
                  Your information is secure. We respect your privacy and never share your data.
                </p>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-white">
              {[
                {
                  icon: <Phone className="w-6 h-6" />,
                  title: 'Instant Confirmation',
                  description: 'Get demo details immediately'
                },
                {
                  icon: <User className="w-6 h-6" />,
                  title: 'Expert Session',
                  description: '1-on-1 with our specialists'
                },
                {
                  icon: <MessageCircle className="w-6 h-6" />,
                  title: 'Q&A Included',
                  description: 'All your questions answered'
                }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
                  <div className="text-white">{item.icon}</div>
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
  )
}

export default BookFreeDemo