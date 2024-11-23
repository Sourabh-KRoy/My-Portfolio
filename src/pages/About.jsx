import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen w-full bg-[#001b29] text-[#bdbdbd] px-5 flex flex-col items-center justify-center">
            <div className="text-center mb-10">
                <h1 className="text-3xl text-white mb-2">About <span className='text-[#0ef]'>Me</span></h1>
                <p className="text-xl text-[#bdbdbd]">Get to know more about who I am and what I do.</p>
            </div>
            <div className="flex flex-wrap justify-between max-w-screen-xl w-full gap-5">
                <div className="flex justify-center items-center px-2 w-full sm:w-[40%]">
                    <img
                        className="max-w-full rounded-xl shadow-lg object-cover"
                        src="src/assets/images/Picsart_24-05-21_08-08-31-048.png"
                        alt="Sourabh Roy"
                    />
                </div>
                <div className="flex flex-col justify-center px-2 w-full sm:w-[55%]">
                    <h2 className="text-2xl text-white mb-5">Welcome!</h2>
                    <p className="text-base leading-relaxed mb-7">
                        Hello! I'm Sourabh Roy, a passionate full-stack Java developer with over a year of experience. 
                        I specialize in creating dynamic and responsive web applications. My journey started with a fascination for technology 
                        and has evolved into a full-blown career where I design and develop both frontend and backend solutions. 
                        My goal is to build impactful and user-centric software that solves real-world problems.
                    </p>
                    <div className="about-social flex gap-4 flex-wrap">
                        <a href="https://www.linkedin.com/in/sourabhroy" target="_blank" rel="noopener noreferrer">
                            <i className="bx bxl-linkedin text-2xl text-[#0ef] border-2 border-[#0ef] rounded-full p-2 hover:bg-[#0ef] hover:text-[#081b29] hover:shadow-[0_0_20px_#0ef,0_0_25px_#0ef] transition duration-300"></i>
                        </a>
                        <a href="https://github.com/sourabhroy" target="_blank" rel="noopener noreferrer">
                            <i className="bx bxl-github text-2xl text-[#0ef] border-2 border-[#0ef] rounded-full p-2 hover:bg-[#0ef] hover:text-[#081b29] hover:shadow-[0_0_20px_#0ef,0_0_25px_#0ef] transition duration-300"></i>
                        </a>
                        <a href="https://twitter.com/sourabhroy" target="_blank" rel="noopener noreferrer">
                            <i className="bx bxl-twitter text-2xl text-[#0ef] border-2 border-[#0ef] rounded-full p-2 hover:bg-[#0ef] hover:text-[#081b29] hover:shadow-[0_0_20px_#0ef,0_0_25px_#0ef] transition duration-300"></i>
                        </a>
                        <a href="https://dribbble.com/sourabhroy" target="_blank" rel="noopener noreferrer">
                            <i className="bx bxl-dribbble text-2xl text-[#0ef] border-2 border-[#0ef] rounded-full p-2 hover:bg-[#0ef] hover:text-[#081b29] hover:shadow-[0_0_20px_#0ef,0_0_25px_#0ef] transition duration-300"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
