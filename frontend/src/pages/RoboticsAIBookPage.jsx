// src/pages/RoboticsAI.jsx
import React from 'react';
import { FaRobot, FaMicrochip, FaBrain, FaCode } from 'react-icons/fa';

const RoboticsAIBookPage = () => {
  const modules = [
    { title: "Robotics Fundamentals", icon: <FaRobot /> },
    { title: "AI & Machine Learning", icon: <FaBrain /> },
    { title: "Sensor Integration", icon: <FaMicrochip /> },
    { title: "Autonomous Systems", icon: <FaCode /> },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <div className="inline-block p-4 bg-purple-100 rounded-full mb-4">
          <FaRobot className="text-5xl text-purple-600" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Coding, Robotics & <span className="text-purple-600">AI 6-8</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Advanced program combining robotics engineering with artificial intelligence concepts.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
        <div className="md:flex">
          <div className="md:w-2/3 p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Program Details</h2>
            <p className="text-gray-700 mb-6">
              This advanced curriculum introduces middle school students to robotics engineering, 
              artificial intelligence, and machine learning through hands-on projects and challenges.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {modules.map((module, index) => (
                <div key={index} className="bg-purple-50 p-4 rounded-xl">
                  <div className="flex items-center mb-2">
                    <span className="text-purple-600 mr-3">{module.icon}</span>
                    <h3 className="font-semibold">{module.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600">12-15 week module with projects</p>
                </div>
              ))}
            </div>

            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 shadow-lg">
              Start Robotics Journey - $49/month
            </button>
          </div>
          
          <div className="md:w-1/3 bg-gradient-to-b from-purple-100 to-indigo-100 p-8 flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-c6ae736003b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Robotics"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoboticsAIBookPage;