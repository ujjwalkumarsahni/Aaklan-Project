// DedicatedStaffing.jsx
import React from 'react';

const DedicatedStaffing = () => {
  const steps = [
    {
      id: 1,
      title: "School signs-up with Aaklan",
      description: "Begin your journey with a simple registration process",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Program Manager is assigned",
      description: "Get a dedicated expert to oversee your program",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Teacher is recruited and trained",
      description: "We carefully select and prepare educators for your needs",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Teacher starts classes over tech platform",
      description: "Seamless integration with our advanced technology",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Regular audits of classes by Program Manager",
      description: "Continuous quality assurance for optimal results",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: 6,
      title: "School tracks progress over tech-platform",
      description: "Monitor performance and outcomes with real-time data",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0b234a]/10 to-[#E22213]/10 py-12 px-4 sm:px-6 lg:px-8">
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
            className="fill-[#0b234a]"
          ></path>
        </svg>
      </div>
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0b234a] mb-6 leading-tight">
            Empowering Success with{' '} <span className="bg-gradient-to-r from-[#E22213] via-orange-500 to-[#0b234a] bg-clip-text text-transparent">Dedicated Staffing Solutions</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We take full responsibility of impeccable class delivery and student impact.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Vertical line for timeline */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#0b234a] to-[#E22213] hidden md:block"></div>

          <div className="space-y-8 md:space-y-12">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="flex flex-col md:flex-row items-start md:items-center relative"
              >
                {/* Left Side Content (for even steps) */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} mb-4 md:mb-0 order-2 md:order-1`}>
                  {index % 2 === 0 && (
                    <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#0b234a]/30">
                      <div className={`flex md:flex-row-reverse items-start space-x-4 md:space-x-reverse md:space-x-4`}>
                        <div className="shrink-0">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-[#0b234a] to-[#E22213] rounded-full flex items-center justify-center text-white">
                            {step.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                            {step.title}
                          </h3>
                          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Center Timeline */}
                <div className="flex items-center justify-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2 order-1 md:order-2 z-10 mb-4 md:mb-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-[#0b234a] hover:scale-110 transition-transform duration-300">
                    <span className="text-lg md:text-xl font-bold text-[#0b234a]">{step.id}</span>
                  </div>
                </div>

                {/* Right Side Content (for odd steps) */}
                <div className={`md:w-1/2 ${index % 2 !== 0 ? 'md:pl-12' : 'md:pr-12'} order-3`}>
                  {index % 2 !== 0 && (
                    <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-500/30">
                      <div className="flex items-start space-x-4">
                        <div className="shrink-0">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-orange-500 to-[#E22213] rounded-full flex items-center justify-center text-white">
                            {step.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                            {step.title}
                          </h3>
                          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Mobile connector */}
                {index < steps.length - 1 && (
                  <div className="absolute top-12 md:top-16 left-6 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-8 md:h-12 bg-gradient-to-b from-[#0b234a] to-[#E22213] md:hidden"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-[#0b234a] to-[#E22213] hover:from-[#0b234a]/90 hover:to-[#E22213]/90 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg">
            Get Started Today
          </button>
          <p className="text-gray-500 mt-4 text-sm">
            Join hundreds of schools already transforming their educational delivery
          </p>
        </div>
      </div>
    </div>
  );
};

export default DedicatedStaffing;