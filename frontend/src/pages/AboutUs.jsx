import { useState } from "react";
import { 
  Users, 
  Target, 
  Eye, 
  Award, 
  BookOpen, 
  GraduationCap, 
  HeartHandshake, 
  Sparkles,
  ChevronDown,
  ChevronUp,
  Play,
  CheckCircle2
} from "lucide-react";

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState("mission");
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const stats = [
    { number: "5000+", label: "Students Taught", icon: GraduationCap },
    { number: "50+", label: "Expert Instructors", icon: Users },
    { number: "100+", label: "Schools Partnered", icon: BookOpen },
    { number: "5+", label: "Years Experience", icon: Award }
  ];

  const values = [
    {
      icon: Sparkles,
      title: "Innovation",
      description: "Constantly evolving our curriculum to include latest technologies and teaching methodologies."
    },
    {
      icon: HeartHandshake,
      title: "Collaboration",
      description: "Working together with students, parents, and schools to create the best learning experience."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Committed to delivering the highest quality coding education and student support."
    },
    {
      icon: Eye,
      title: "Vision",
      description: "Preparing the next generation for a technology-driven future through comprehensive education."
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Founder & CEO",
      image: "/team/sarah.jpg",
      bio: "PhD in Computer Science with 15+ years in education technology."
    },
    {
      name: "Mike Chen",
      role: "Head of Curriculum",
      image: "/team/mike.jpg",
      bio: "Former Google engineer passionate about teaching kids to code."
    },
    {
      name: "Priya Sharma",
      role: "Lead Instructor",
      image: "/team/priya.jpg",
      bio: "Specialized in AI and robotics education for young learners."
    },
    {
      name: "David Brown",
      role: "Operations Head",
      image: "/team/david.jpg",
      bio: "Ensuring smooth operations and excellent student experience."
    }
  ];

  const milestones = [
    { year: "2019", event: "Aaklan Founded", description: "Started with a vision to make coding accessible to all children" },
    { year: "2020", event: "First 1000 Students", description: "Reached milestone of teaching 1000+ students across India" },
    { year: "2021", event: "School Partnerships", description: "Partnered with 50+ schools for integrated coding curriculum" },
    { year: "2022", event: "AI & Robotics Launch", description: "Expanded curriculum to include AI and Robotics programs" },
    { year: "2023", event: "National Recognition", description: "Awarded Best EdTech Startup by Education Ministry" },
    { year: "2024", event: "International Expansion", description: "Started operations in 3 new countries" }
  ];

  const faqs = [
    {
      question: "What age groups do you teach?",
      answer: "We offer programs for students from Grade 1 to Grade 12, with age-appropriate curriculum for each level."
    },
    {
      question: "Do you provide certificates?",
      answer: "Yes, all students receive completion certificates. Advanced programs offer industry-recognized certifications."
    },
    {
      question: "What technology requirements are needed?",
      answer: "Basic requirements include a computer with internet connection. Specific software requirements vary by course."
    },
    {
      question: "Can parents track progress?",
      answer: "Yes, we provide regular progress reports and parent portals to monitor student development and achievements."
    },
    {
      question: "Do you offer trial classes?",
      answer: "Absolutely! We offer free demo classes so students can experience our teaching methodology before enrolling."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0b234a] to-[#1a3a6e] text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-20 h-20 md:w-32 md:h-32 bg-orange-500 rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-16 h-16 md:w-24 md:h-24 bg-[#E22213] rounded-full"></div>
          <div className="absolute top-1/2 right-1/3 w-12 h-12 md:w-16 md:h-16 bg-orange-500 rounded-full"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
            Empowering The Next
            <span className="block text-orange-400 mt-2">Generation of Innovators</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8 md:mb-10">
            At Aaklan, we're revolutionizing how children learn technology. Through our comprehensive 
            coding, robotics, and AI programs, we're preparing young minds for the future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="bg-orange-500 text-white px-4 sm:px-8 py-2 sm:py-4 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
              Explore Our Programs
            </button>
            <button className="border-2 border-white text-white px-4 sm:px-8 py-2 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0b234a] transition-all duration-300 flex items-center justify-center gap-2">
              <Play size={18} className="flex-shrink-0" />
              Watch Our Story
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-orange-50 w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:bg-orange-500 group-hover:scale-110 transition-all duration-300">
                  <stat.icon className="text-orange-500 group-hover:text-white w-6 h-6 md:w-8 md:h-8" size={24} />
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">{stat.number}</div>
                <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Our Core Philosophy</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Guided by strong principles that shape everything we do
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 md:mb-12">
            {[
              { id: "mission", label: "Our Mission", icon: Target },
              { id: "vision", label: "Our Vision", icon: Eye },
              { id: "values", label: "Our Values", icon: HeartHandshake }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold transition-all duration-300 text-sm sm:text-base ${
                  activeTab === tab.id
                    ? "bg-[#0b234a] text-white shadow-lg transform scale-105"
                    : "bg-white text-gray-700 hover:bg-orange-50 hover:scale-105"
                }`}
              >
                <tab.icon size={18} className="flex-shrink-0" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 md:p-12 max-w-4xl mx-auto">
            {activeTab === "mission" && (
              <div className="text-center">
                <Target className="text-orange-500 mx-auto mb-4 md:mb-6 w-10 h-10 md:w-12 md:h-12" size={40}/>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Our Mission</h3>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6 md:mb-8">
                  To democratize coding education and empower every child with the skills to become 
                  creators, innovators, and problem-solvers. We believe that understanding technology 
                  is no longer optional—it's essential for success in the 21st century.
                </p>
                <div className="mt-6 md:mt-8 p-4 sm:p-6 bg-orange-50 rounded-xl sm:rounded-2xl">
                  <h4 className="font-semibold text-[#0b234a] mb-2 sm:mb-3 text-sm sm:text-base">We achieve this by:</h4>
                  <ul className="grid sm:grid-cols-2 gap-2 sm:gap-3 text-left text-sm sm:text-base">
                    {[
                      "Making coding accessible and fun for all ages",
                      "Providing industry-relevant curriculum",
                      "Fostering creativity and critical thinking",
                      "Building confidence through hands-on projects"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle2 className="text-[#E22213] flex-shrink-0" size={18} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "vision" && (
              <div className="text-center">
                <Eye className="text-orange-500 mx-auto mb-4 md:mb-6 w-10 h-10 md:w-12 md:h-12" size={40}  />
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Our Vision</h3>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                  We envision a world where every child, regardless of background, has the opportunity 
                  to learn coding and become an active creator in the digital world. A future where 
                  young minds are equipped to solve complex problems and drive technological innovation.
                </p>
              </div>
            )}

            {activeTab === "values" && (
              <div className="text-center">
                <HeartHandshake className="text-orange-500 mx-auto mb-4 md:mb-6 w-10 h-10 md:w-12 md:h-12" size={40} />
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Our Values</h3>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mt-6 md:mt-8">
                  {values.map((value, index) => (
                    <div key={index} className="bg-gray-50 p-4 sm:p-6 rounded-xl sm:rounded-2xl text-center group hover:bg-orange-50 transition-all duration-300">
                      <value.icon className="text-orange-500 mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform w-7 h-7 sm:w-8 sm:h-8" size={28} />
                      <h4 className="font-bold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">{value.title}</h4>
                      <p className="text-gray-600 text-xs sm:text-sm">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Our Journey</h2>
            <p className="text-lg sm:text-xl text-gray-600">From humble beginnings to national recognition</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-1 bg-orange-200 h-full"></div>
            
            {/* Milestones */}
            <div className="space-y-8 sm:space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${
                  index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                } flex-col sm:flex-row`}>
                  {/* Content */}
                  <div className={`w-full sm:w-1/2 ${
                    index % 2 === 0 ? 'sm:pr-8 sm:pr-12 sm:text-right' : 'sm:pl-8 sm:pl-12'
                  } mb-4 sm:mb-0`}>
                    <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                      <div className="text-orange-500 font-bold text-base sm:text-lg mb-1 sm:mb-2">{milestone.year}</div>
                      <h3 className="font-bold text-gray-900 text-lg sm:text-xl mb-1 sm:mb-2">{milestone.event}</h3>
                      <p className="text-gray-600 text-sm sm:text-base">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Dot */}
                  <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 w-4 h-4 sm:w-6 sm:h-6 bg-orange-500 rounded-full border-2 sm:border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Spacer for mobile */}
                  <div className="sm:hidden w-full"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Meet Our Team</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate educators and industry experts dedicated to shaping young minds
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2">
                <div className="h-40 sm:h-48 bg-gradient-to-br from-orange-400 to-[#E22213] relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white">
                    <h3 className="font-bold text-lg sm:text-xl">{member.name}</h3>
                    <p className="text-orange-100 text-sm sm:text-base">{member.role}</p>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <p className="text-gray-600 text-xs sm:text-sm">{member.bio}</p>
                  <div className="flex gap-2 sm:gap-3 mt-3 sm:mt-4">
                    {[Users, Award, BookOpen].map((Icon, iconIndex) => (
                      <button key={iconIndex} className="p-1 sm:p-2 bg-gray-100 rounded-lg hover:bg-orange-100 transition-colors">
                        <Icon size={14} className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Frequently Asked Questions</h2>
            <p className="text-lg sm:text-xl text-gray-600">Everything you need to know about Aaklan</p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl sm:rounded-2xl overflow-hidden hover:bg-gray-100 transition-colors">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex justify-between items-center font-semibold text-gray-900 text-sm sm:text-base"
                >
                  {faq.question}
                  {openFaq === index ? <ChevronUp size={18} className="flex-shrink-0" /> : <ChevronDown size={18} className="flex-shrink-0" />}
                </button>
                {openFaq === index && (
                  <div className="px-4 sm:px-6 pb-3 sm:pb-4 text-gray-600 text-sm sm:text-base">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#0b234a] to-[#1a3a6e] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Ready to Start Your Coding Journey?</h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Join thousands of students who have discovered the joy of coding with Aaklan
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="bg-orange-500 text-white px-4 sm:px-8 py-2 sm:py-4 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105">
              Book a Free Demo Class
            </button>
            <button className="border-2 border-white text-white px-4 sm:px-8 py-2 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0b234a] transition-all duration-300">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}