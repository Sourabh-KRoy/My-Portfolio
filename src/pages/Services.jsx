import React from 'react';

const Services = () => {
  return (
    <div className="min-h-screen bg-[#001b29] text-aliceblue">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl text-center text-white pb-7 font-semibold">
          My <span className="text-[#0ef]">Services</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {/* Front-End Development */}
          <div className="bg-transparent p-10 rounded-2xl transform transition-all hover:scale-105 shadow-[0_0_20px_#0ef,0_0_25px_#0ef]">
            <i className="bx bx-code text-4xl text-[#00eeff]" />
            <h2 className="text-2xl font-semibold mt-4 text-[#0ef]">Front-End Development</h2>
            <p className="text-sm text-gray-200 mt-4">
              Create responsive and interactive user interfaces using HTML, CSS, and JavaScript frameworks (like React or Angular).
            </p>
            <a href="#" className="inline-block mt-6 py-2 px-6 text-lg text-black bg-[#0ef] rounded-3xl font-semibold hover:shadow-[0_0_20px_#0ef,0_0_25px_#0ef] transition">
              Learn More
            </a>
          </div>

          {/* Back-End Development */}
          <div className="bg-transparent p-10 rounded-2xl shadow-[0_0_20px_#0ef,0_0_25px_#0ef] transform transition-all hover:scale-105">
            <i className="bx bxl-java text-4xl text-[#00eeff]" />
            <h2 className="text-2xl font-semibold mt-4 text-[#0ef]">Back-End Development</h2>
            <p className="text-sm text-gray-200 mt-4">
              Develop robust server-side applications using Java, Spring Boot, Node.js, Express.js, and related technologies.
            </p>
            <a href="#" className="inline-block mt-6 py-2 px-6 text-lg text-black bg-[#0ef] rounded-3xl font-semibold hover:shadow-[0_0_20px_#0ef,0_0_25px_#0ef] transition">
              Learn More
            </a>
          </div>

          {/* Android App Development */}
          <div className="bg-transparent p-10 rounded-2xl transform transition-all hover:scale-105 shadow-[0_0_20px_#0ef,0_0_25px_#0ef]">
            <i className="bx bxl-android text-4xl text-[#00eeff]" />
            <h2 className="text-2xl font-semibold mt-4 text-[#0ef]">Android App Development</h2>
            <p className="text-sm text-gray-200 mt-4">
              Build and integrate RESTful APIs for seamless communication between front-end and back-end systems.
            </p>
            <a href="#" className="inline-block mt-6 py-2 px-6 text-lg text-black bg-[#0ef] rounded-3xl font-semibold hover:shadow-[0_0_20px_#0ef,0_0_25px_#0ef] transition">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
