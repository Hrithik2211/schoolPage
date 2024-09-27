import React from 'react';

const Objective = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-blue-600 transform -skew-x-12"></div>
              <div className="relative z-10 p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">What We Offer</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <svg
                      className="w-6 h-6 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span className="text-xl">Courses</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-6 h-6 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span className="text-xl">Online Education</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-6 h-6 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span className="text-xl">Expert Teachers</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right side - Heading and description */}
          <div className="w-full lg:w-1/2 lg:pl-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              Our Objective
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We strive to provide accessible, high-quality education to
              learners worldwide. Our platform combines innovative technology
              with expert instruction to create an engaging and effective
              learning experience. We're committed to helping students achieve
              their goals and unlock their full potential.
            </p>
            <button className="mt-8 bg-blue-600 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Objective;
