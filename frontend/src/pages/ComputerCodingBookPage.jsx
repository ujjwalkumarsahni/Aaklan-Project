// src/pages/ComputerCodingBooks.jsx
import React, { useState } from 'react';
import { 
  FaBook, 
  FaWindows, 
  FaPaintBrush, 
  FaFileAlt,
  FaRobot,
  FaChrome,
  FaCalculator,
  FaPlay,
  FaCode,
  FaBrain,
  FaPython,
  FaHtml5,
  FaImage,
  FaVideo,
  FaFilePowerpoint,
  FaFileExcel,
  FaFileWord,
  FaDesktop,
  FaChevronRight,
  FaLaptopCode,
  FaGraduationCap
} from 'react-icons/fa';

const ComputerCodingBookPage = () => {
  const [selectedGrade, setSelectedGrade] = useState('1');

  const gradeCurriculum = [
    {
      grade: "Class 1",
      color: "bg-blue-100 border-blue-300",
      iconColor: "text-blue-600",
      topics: [
        { name: "Windows 10", icon: <FaWindows /> },
        { name: "MS Paint", icon: <FaPaintBrush /> },
        { name: "Notepad", icon: <FaFileAlt /> },
        { name: "PictoBox Junior Blocks", icon: <FaCode /> },
        { name: "Quarky Robot", icon: <FaRobot /> }
      ],
      description: "Introduction to basic computer operations and visual programming",
      image: "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      grade: "Class 2",
      color: "bg-green-100 border-green-300",
      iconColor: "text-green-600",
      topics: [
        { name: "Windows 10", icon: <FaWindows /> },
        { name: "Tux Paint", icon: <FaPaintBrush /> },
        { name: "Notepad", icon: <FaFileAlt /> },
        { name: "PictoBox Junior Blocks", icon: <FaCode /> },
        { name: "Quarky Robot", icon: <FaRobot /> }
      ],
      description: "Building upon basic skills with creative tools and programming",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      grade: "Class 3",
      color: "bg-purple-100 border-purple-300",
      iconColor: "text-purple-600",
      topics: [
        { name: "Windows 10", icon: <FaWindows /> },
        { name: "MS Paint", icon: <FaPaintBrush /> },
        { name: "Tux Paint", icon: <FaImage /> },
        { name: "Notepad", icon: <FaFileAlt /> },
        { name: "Wordpad", icon: <FaFileWord /> },
        { name: "Word", icon: <FaFileWord /> },
        { name: "Excel", icon: <FaFileExcel /> },
        { name: "PictoBox Blocks Coding", icon: <FaCode /> },
        { name: "Quarky Robot", icon: <FaRobot /> }
      ],
      description: "Introduction to office suite and enhanced programming concepts",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      grade: "Class 4",
      color: "bg-yellow-100 border-yellow-300",
      iconColor: "text-yellow-600",
      topics: [
        { name: "Windows 10", icon: <FaWindows /> },
        { name: "MS Paint", icon: <FaPaintBrush /> },
        { name: "Tux Paint", icon: <FaImage /> },
        { name: "MS Word", icon: <FaFileWord /> },
        { name: "MS Excel", icon: <FaFileExcel /> },
        { name: "PictoBox Blocks Coding", icon: <FaCode /> },
        { name: "Quarky Robot", icon: <FaRobot /> }
      ],
      description: "Advanced document creation and programming skills development",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      grade: "Class 5",
      color: "bg-red-100 border-red-300",
      iconColor: "text-red-600",
      topics: [
        { name: "Windows 10", icon: <FaWindows /> },
        { name: "MS Paint", icon: <FaPaintBrush /> },
        { name: "Calculator", icon: <FaCalculator /> },
        { name: "Wordpad", icon: <FaFileWord /> },
        { name: "MS Word", icon: <FaFileWord /> },
        { name: "MS PowerPoint", icon: <FaFilePowerpoint /> },
        { name: "PictoBox Blocks Coding", icon: <FaCode /> },
        { name: "Quarky Robot", icon: <FaRobot /> },
        { name: "Google Chrome", icon: <FaChrome /> }
      ],
      description: "Presentation skills and internet browsing with enhanced programming",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      grade: "Class 6",
      color: "bg-indigo-100 border-indigo-300",
      iconColor: "text-indigo-600",
      topics: [
        { name: "Windows 10", icon: <FaWindows /> },
        { name: "Windows Media Player", icon: <FaPlay /> },
        { name: "MS Word", icon: <FaFileWord /> },
        { name: "MS Excel", icon: <FaFileExcel /> },
        { name: "PictoBox Blocks Coding", icon: <FaCode /> },
        { name: "PictoBox AI", icon: <FaBrain /> },
        { name: "Quarky Robot", icon: <FaRobot /> }
      ],
      description: "Introduction to AI concepts and multimedia with programming",
      image: "https://images.unsplash.com/photo-1526379879527-8559ecfcaec3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      grade: "Class 7",
      color: "bg-pink-100 border-pink-300",
      iconColor: "text-pink-600",
      topics: [
        { name: "Windows 10", icon: <FaWindows /> },
        { name: "PlcSAft", icon: <FaLaptopCode /> },
        { name: "MS Excel", icon: <FaFileExcel /> },
        { name: "MS PowerPoint", icon: <FaFilePowerpoint /> },
        { name: "PictoBox Blocks Coding", icon: <FaCode /> },
        { name: "PictoBox AI", icon: <FaBrain /> },
        { name: "Quarky Robot", icon: <FaRobot /> },
        { name: "Notepad", icon: <FaFileAlt /> },
        { name: "HTML", icon: <FaHtml5 /> }
      ],
      description: "Advanced programming, AI, and introduction to web development",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      grade: "Class 8",
      color: "bg-teal-100 border-teal-300",
      iconColor: "text-teal-600",
      topics: [
        { name: "Windows 10", icon: <FaWindows /> },
        { name: "Canva", icon: <FaImage /> },
        { name: "MS Excel", icon: <FaFileExcel /> },
        { name: "PictoBox Py Editor", icon: <FaPython /> },
        { name: "PictoBox AI", icon: <FaBrain /> },
        { name: "PictoBox ML Environment", icon: <FaBrain /> },
        { name: "Quarky Robot", icon: <FaRobot /> }
      ],
      description: "Design tools, Python programming, and machine learning concepts",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const selectedCurriculum = gradeCurriculum.find(curriculum => curriculum.grade === `Class ${selectedGrade}`);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4">
            <FaBook className="text-5xl text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            COMPUTER & CODING BOOKS
          </h1>
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full">
            <FaGraduationCap className="mr-2" />
            <h2 className="text-2xl font-bold">GRADES 1-8</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
            Comprehensive computer education curriculum from basic operations to advanced programming
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Column - Grade Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-3">
                <FaChevronRight className="inline mr-2 text-blue-500" />
                SELECT GRADE
              </h3>
              
              <div className="space-y-3">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((grade) => {
                  const gradeData = gradeCurriculum.find(g => g.grade === `Class ${grade}`);
                  return (
                    <button
                      key={grade}
                      onClick={() => setSelectedGrade(grade.toString())}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] ${
                        selectedGrade === grade.toString()
                          ? `${gradeData?.color} border-l-4 border-blue-500 shadow-lg`
                          : 'bg-gray-50 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center">
                        <div className={`p-3 rounded-lg ${
                          selectedGrade === grade.toString() 
                            ? 'bg-white shadow' 
                            : 'bg-gray-100'
                        }`}>
                          <span className={`text-xl font-bold ${gradeData?.iconColor}`}>
                            {grade}
                          </span>
                        </div>
                        <div className="ml-4">
                          <h3 className="font-bold text-gray-900">CLASS {grade}</h3>
                          <p className="text-sm text-gray-600 mt-1">
                            {grade === 1 && 'Foundational Skills'}
                            {grade === 2 && 'Creative Computing'}
                            {grade === 3 && 'Office Introduction'}
                            {grade === 4 && 'Document Mastery'}
                            {grade === 5 && 'Presentation Skills'}
                            {grade === 6 && 'AI Introduction'}
                            {grade === 7 && 'Web Development'}
                            {grade === 8 && 'Advanced Programming'}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Progress Summary */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-bold text-gray-900 mb-4">CURRICULUM PROGRESSION</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Basic Computing</span>
                      <span className="font-semibold">Classes 1-3</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 w-3/12"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Applications</span>
                      <span className="font-semibold">Classes 4-5</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 w-5/12"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Programming</span>
                      <span className="font-semibold">Classes 6-8</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-500 w-8/12"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Curriculum Details */}
          <div className="lg:col-span-3">
            {selectedCurriculum && (
              <div className="space-y-8">
                {/* Grade Header */}
                <div className={`rounded-2xl shadow-xl overflow-hidden ${selectedCurriculum.color} border`}>
                  <div className="md:flex">
                    <div className="md:w-2/5 p-6 flex items-center justify-center">
                      <div className="relative">
                        <img 
                          src={selectedCurriculum.image} 
                          alt={selectedCurriculum.grade}
                          className="w-full h-64 object-cover rounded-lg shadow-lg"
                        />
                        <div className="absolute -top-3 -left-3 bg-white px-4 py-2 rounded-lg shadow-lg">
                          <span className="text-2xl font-bold text-gray-900">{selectedCurriculum.grade}</span>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-3/5 p-6">
                      <div className="flex items-center mb-4">
                        <div className={`p-3 rounded-lg bg-white shadow-sm ${selectedCurriculum.iconColor}`}>
                          <FaBook className="text-2xl" />
                        </div>
                        <div className="ml-4">
                          <h2 className="text-3xl font-bold text-gray-900">{selectedCurriculum.grade} CURRICULUM</h2>
                          <p className="text-gray-700 mt-2">{selectedCurriculum.description}</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="text-2xl font-bold text-blue-600">30+</div>
                          <div className="text-sm text-gray-600">Learning Hours</div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="text-2xl font-bold text-green-600">5-9</div>
                          <div className="text-sm text-gray-600">Topics Covered</div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="text-2xl font-bold text-purple-600">10+</div>
                          <div className="text-sm text-gray-600">Projects</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Curriculum Topics */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-3">
                    <FaChevronRight className="inline mr-2 text-blue-500" />
                    CURRICULUM TOPICS
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {selectedCurriculum.topics.map((topic, index) => (
                      <div 
                        key={index} 
                        className="group border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300 cursor-pointer"
                      >
                        <div className="flex items-center mb-4">
                          <div className={`p-3 rounded-lg ${selectedCurriculum.iconColor} bg-opacity-20`}>
                            <span className="text-xl">{topic.icon}</span>
                          </div>
                          <h4 className="ml-3 text-lg font-semibold text-gray-900">{topic.name}</h4>
                        </div>
                        <p className="text-gray-600 text-sm">
                          {getTopicDescription(topic.name, selectedCurriculum.grade)}
                        </p>
                        <div className="mt-4 flex items-center text-blue-600 text-sm">
                          <span>Learn more</span>
                          <FaChevronRight className="ml-2 text-xs" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Learning Path */}
                <div className={`rounded-2xl shadow-xl p-8 ${selectedCurriculum.color} border`}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    <FaChevronRight className="inline mr-2 text-blue-500" />
                    LEARNING PATH FOR {selectedCurriculum.grade}
                  </h3>
                  
                  <div className="space-y-6">
                    {getLearningPath(selectedCurriculum.grade).map((path, index) => (
                      <div key={index} className="flex items-start">
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${selectedCurriculum.iconColor} bg-white`}>
                          {index + 1}
                        </div>
                        <div className="ml-4">
                          <h4 className="font-semibold text-gray-900">{path.title}</h4>
                          <p className="text-gray-600 text-sm mt-1">{path.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Grade Navigation */}
                <div className="flex justify-between">
                  <button 
                    onClick={() => setSelectedGrade(Math.max(1, parseInt(selectedGrade) - 1).toString())}
                    className={`flex items-center px-6 py-3 rounded-lg shadow hover:shadow-md transition-all ${
                      selectedGrade === '1' ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
                    }`}
                    disabled={selectedGrade === '1'}
                  >
                    <FaChevronRight className="rotate-180 mr-2" />
                    Class {parseInt(selectedGrade) - 1 || 8}
                  </button>
                  <button 
                    onClick={() => setSelectedGrade(Math.min(8, parseInt(selectedGrade) + 1).toString())}
                    className={`flex items-center px-6 py-3 rounded-lg shadow hover:shadow-md transition-all ${
                      selectedGrade === '8' ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
                    }`}
                    disabled={selectedGrade === '8'}
                  >
                    Class {parseInt(selectedGrade) + 1 > 8 ? 1 : parseInt(selectedGrade) + 1}
                    <FaChevronRight className="ml-2" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Complete Curriculum Overview */}
        <div className="mt-12 bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">COMPLETE 8-YEAR CURRICULUM</h2>
            <p className="text-xl opacity-90">From basic computing to advanced AI & programming</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {gradeCurriculum.map((grade) => (
              <div 
                key={grade.grade}
                className="bg-white bg-opacity-10 p-4 rounded-xl hover:bg-opacity-20 transition-all cursor-pointer"
                onClick={() => setSelectedGrade(grade.grade.split(' ')[1])}
              >
                <div className="flex items-center mb-3">
                  <div className={`p-2 rounded-lg ${grade.iconColor}`}>
                    <FaBook />
                  </div>
                  <h3 className="ml-3 font-bold">{grade.grade}</h3>
                </div>
                <div className="text-sm opacity-90">
                  {grade.topics.length} topics
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
              DOWNLOAD COMPLETE SYLLABUS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function to get topic descriptions
const getTopicDescription = (topicName, grade) => {
  const descriptions = {
    "Windows 10": "Learn operating system navigation, file management, and system settings",
    "MS Paint": "Digital drawing and painting skills development",
    "Tux Paint": "Creative art and drawing for young learners",
    "Notepad": "Basic text editing and document creation",
    "PictoBox Junior Blocks": "Visual programming with drag-and-drop blocks",
    "Quarky Robot": "Hands-on robotics programming and control",
    "Wordpad": "Advanced text formatting and document creation",
    "Word": "Professional document creation and formatting",
    "Excel": "Spreadsheet management and data analysis",
    "Calculator": "Mathematical calculations and functions",
    "PowerPoint": "Presentation creation and design",
    "Google Chrome": "Internet browsing and web research",
    "Windows Media Player": "Multimedia playback and management",
    "PictoBox Blocks Coding": "Advanced visual programming concepts",
    "PictoBox AI": "Introduction to artificial intelligence",
    "PlcSAft": "Programming logic controller software",
    "HTML": "Web page structure and markup language",
    "Canva": "Graphic design and digital creation",
    "PictoBox Py Editor": "Python programming environment",
    "PictoBox ML Environment": "Machine learning model development"
  };
  return descriptions[topicName] || "Essential skill development for digital literacy";
};

// Helper function to get learning path
const getLearningPath = (grade) => {
  const paths = {
    "Class 1": [
      { title: "Computer Basics", description: "Introduction to computer hardware and basic operations" },
      { title: "Mouse & Keyboard", description: "Developing fine motor skills with input devices" },
      { title: "Simple Drawing", description: "Creative expression with digital art tools" },
      { title: "Basic Logic", description: "Introduction to computational thinking" }
    ],
    "Class 2": [
      { title: "Creative Tools", description: "Advanced drawing and painting techniques" },
      { title: "Text Editing", description: "Creating and saving simple documents" },
      { title: "Visual Programming", description: "Building simple programs with blocks" },
      { title: "Robotics Introduction", description: "Basic robot control and programming" }
    ],
    "Class 3": [
      { title: "Office Suite", description: "Introduction to Word and Excel" },
      { title: "Advanced Documents", description: "Creating formatted documents and spreadsheets" },
      { title: "Programming Logic", description: "Developing logical thinking through coding" },
      { title: "Project Development", description: "Building complete programming projects" }
    ],
    "Class 4": [
      { title: "Document Mastery", description: "Advanced Word and Excel skills" },
      { title: "Data Management", description: "Organizing and analyzing data" },
      { title: "Complex Programming", description: "Building multi-step programs" },
      { title: "Problem Solving", description: "Developing algorithms for real-world problems" }
    ],
    "Class 5": [
      { title: "Presentations", description: "Creating effective PowerPoint presentations" },
      { title: "Internet Skills", description: "Safe and effective web browsing" },
      { title: "Advanced Robotics", description: "Complex robot programming and control" },
      { title: "Integrated Projects", description: "Combining multiple skills in projects" }
    ],
    "Class 6": [
      { title: "Multimedia", description: "Working with audio and video files" },
      { title: "AI Concepts", description: "Introduction to artificial intelligence" },
      { title: "Data Analysis", description: "Advanced Excel for data interpretation" },
      { title: "Programming Projects", description: "Building AI-enhanced applications" }
    ],
    "Class 7": [
      { title: "Web Development", description: "Creating web pages with HTML" },
      { title: "Advanced AI", description: "Machine learning concepts and applications" },
      { title: "PLC Programming", description: "Industrial automation programming" },
      { title: "Complex Systems", description: "Integrating multiple technologies" }
    ],
    "Class 8": [
      { title: "Graphic Design", description: "Creating digital graphics with Canva" },
      { title: "Python Programming", description: "Text-based programming with Python" },
      { title: "Machine Learning", description: "Building and training ML models" },
      { title: "Capstone Project", description: "Comprehensive technology project" }
    ]
  };
  return paths[grade] || [];
};

export default ComputerCodingBookPage;