import React from 'react';

const Home = () => {
    return (
        <div className="bg-[#001b29] text-[#bdbdbd] min-h-screen flex flex-col md:flex-row items-center px-5 gap-8 overflow-x-hidden pt-20">

            {/* Content Section */}
            <div className="flex-1 max-w-xl text-center md:text-left px-3 md:mb-20">
                <h3 className="text-[#0ef] text-2xl sm:text-xl font-semibold mb-4">Hello, It's Me</h3>
                <h1 className="text-white text-4xl md:text-3xl sm:text-2xl font-bold mb-5">Sourabh Roy</h1>
                <h3 className="text-[#0ef] text-xl sm:text-lg font-semibold mb-5">
                    And I'm a <span className="font-bold">Full-Stack Java Developer</span>
                </h3>
                <p className="text-[#bdbdbd] text-base sm:text-sm leading-7 mb-6">
                    I'm a full-stack Java developer with over a year of experience.
                    <br />
                    My expertise lies in creating responsive front-end designs and robust back-end solutions.
                </p>
                <div className="flex justify-center md:justify-start gap-4 mt-5">
                    <a href="#" className="flex justify-center items-center w-10 h-10 border-2 border-[#0ef] rounded-full text-[#0ef] text-2xl hover:bg-[#0ef] hover:text-[#001b29] hover:shadow-[0_0_20px_#0ef,0_0_25px_#0ef] transition-all ease-in-out">
                        <i className="bx bxl-facebook"></i>
                    </a>
                    <a href="#" className="flex justify-center items-center w-10 h-10 border-2 border-[#0ef] rounded-full text-[#0ef] text-2xl hover:bg-[#0ef] hover:text-[#001b29] hover:shadow-[0_0_20px_#0ef,0_0_25px_#0ef] transition-all ease-in-out">
                        <i className="bx bxl-instagram"></i>
                    </a>
                    <a href="#" className="flex justify-center items-center w-10 h-10 border-2 border-[#0ef] rounded-full text-[#0ef] text-2xl hover:bg-[#0ef] hover:text-[#001b29] hover:shadow-[0_0_20px_#0ef,0_0_25px_#0ef] transition-all ease-in-out">
                        <i className="bx bxl-twitter"></i>
                    </a>
                    <a href="#" className="flex justify-center items-center w-10 h-10 border-2 border-[#0ef] rounded-full text-[#0ef] text-2xl hover:bg-[#0ef] hover:text-[#001b29] hover:shadow-[0_0_20px_#0ef,0_0_25px_#0ef] transition-all ease-in-out">
                        <i className="bx bxl-dribbble"></i>
                    </a>
                </div>
                <a href="#" className="inline-block mt-5 px-6 py-2 bg-[#0ef] text-[#001b29] text-lg sm:text-base font-semibold rounded-full tracking-wide text-center hover:shadow-[0_0_20px_#0ef,0_0_25px_#0ef] transition-all ease-in-out">
                    Download CV
                </a>
            </div>

            {/* Image Section */}
            <div className="flex-1 max-w-md flex justify-center items-center mt-8 md:mt-0">
                <img
                    src="src/assets/images/Picsart_24-05-21_08-08-31-048.png"
                    alt="Sourabh Roy"
                    className="w-full h-auto md:h-[500px] object-cover rounded-xl shadow-lg md:block hidden"
                />
            </div>
        </div>
    );
};

export default Home;
