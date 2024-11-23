import React from 'react';

const Project = () => {
  return (
    <div className="bg-[#001b29] min-h-screen text-white">
      <div className="container mx-auto p-8">
        <h1 className="text-3xl text-center py-12 text-white">My <span className="text-[#0ef]">Projects</span></h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-transparent p-8 rounded-lg  transition-transform transform hover:translate-y-[-5px]  shadow-[0_0_20px_#0ef,0_0_25px_#0ef]">
            <img src="path/to/project1-image.jpg" alt="Project 1" className="w-full h-auto rounded-lg mb-4 transition-transform transform hover:scale-105" />
            <h2 className="text-xl text-[#0ef] mb-2">Project One</h2>
            <p className="text-gray-300 mb-4">A brief description of the first project. This could include key features and technologies used.</p>
            <a href="#" className="inline-block py-2 px-4 bg-[#0ef] text-black rounded-full font-semibold transition-all hover:shadow-[0_0_20px_#0ef,0_0_25px_#0ef] ">Learn More</a>
          </div>

          {/* Project 2 */}
          <div className="bg-transparent p-8 rounded-lg  transition-transform transform hover:translate-y-[-5px]  shadow-[0_0_20px_#0ef,0_0_25px_#0ef]">
            <img src="path/to/project2-image.jpg" alt="Project 2" className="w-full h-auto rounded-lg mb-4 transition-transform transform hover:scale-105" />
            <h2 className="text-xl text-[#0ef] mb-2">Project Two</h2>
            <p className="text-gray-300 mb-4">A brief description of the second project. Highlight significant achievements or challenges overcome.</p>
            <a href="#" className="inline-block py-2 px-4 bg-[#0ef] text-black rounded-full font-semibold transition-all hover:shadow-[0_0_20px_#0ef,0_0_25px_#0ef]">Learn More</a>
          </div>

          {/* Project 3 */}
          <div className="bg-transparent p-8 rounded-lg  transition-transform transform hover:translate-y-[-5px]  shadow-[0_0_20px_#0ef,0_0_25px_#0ef]">
            <img src="path/to/project3-image.jpg" alt="Project 3" className="w-full h-auto rounded-lg mb-4 transition-transform transform hover:scale-105" />
            <h2 className="text-xl text-[#0ef] mb-2">Project Three</h2>
            <p className="text-gray-300 mb-4">A brief description of the third project. Mention the impact or results achieved.</p>
            <a href="#" className="inline-block py-2 px-4 bg-[#0ef] text-black rounded-full font-semibold transition-all hover:shadow-[0_0_20px_#0ef,0_0_25px_#0ef]">Learn More</a>
          </div>

          {/* Project 4 */}
          <div className="bg-transparent p-8 rounded-lg  transition-transform transform hover:translate-y-[-5px] shadow-[0_0_20px_#0ef,0_0_25px_#0ef]">
            <img src="path/to/project4-image.jpg" alt="Project 4" className="w-full h-auto rounded-lg mb-4 transition-transform transform hover:scale-105" />
            <h2 className="text-xl text-[#0ef] mb-2">Project Four</h2>
            <p className="text-gray-300 mb-4">A brief description of the fourth project.</p>
            <a href="#" className="inline-block py-2 px-4 bg-[#0ef] text-black rounded-full font-semibold transition-all hover:shadow-[0_0_20px_#0ef,0_0_25px_#0ef]">Learn More</a>
          </div>

          {/* Project 5 */}
          <div className="bg-transparent p-8 rounded-lg transition-transform transform hover:translate-y-[-5px]  shadow-[0_0_20px_#0ef,0_0_25px_#0ef]">
            <img src="path/to/project5-image.jpg" alt="Project 5" className="w-full h-auto rounded-lg mb-4 transition-transform transform hover:scale-105" />
            <h2 className="text-xl text-[#0ef] mb-2">Project Five</h2>
            <p className="text-gray-300 mb-4">A brief description of the fifth project.</p>
            <a href="#" className="inline-block py-2 px-4 bg-[#0ef] text-black rounded-full font-semibold transition-all hover:shadow-[0_0_20px_#0ef,0_0_25px_#0ef]">Learn More</a>
          </div>

          {/* Project 6 */}
          <div className="bg-transparent p-8 rounded-lg transition-transform transform hover:translate-y-[-5px] shadow-[0_0_20px_#0ef,0_0_25px_#0ef]">
            <img src="path/to/project6-image.jpg" alt="Project 6" className="w-full h-auto rounded-lg mb-4 transition-transform transform hover:scale-105" />
            <h2 className="text-xl text-[#0ef] mb-2">Project Six</h2>
            <p className="text-gray-300 mb-4">A brief description of the sixth project.</p>
            <a href="#" className="inline-block py-2 px-4 bg-[#0ef] text-black rounded-full font-semibold transition-all hover:shadow-[0_0_20px_#0ef,0_0_25px_#0ef]">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
