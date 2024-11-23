import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-[#001b29] to-[#002b36] text-white py-12 px-4 text-center flex flex-col gap-8 border-t-4 border-[#00eeff] overflow-hidden">
            <div className="footer-content max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-8 justify-between flex-wrap">
                {/* About Me Section */}
                <section className="about-me flex-1 min-w-[250px]">
                    <h2 className="text-xl text-[#00eeff] mb-4">About Me</h2>
                    <p className="text-gray-300">
                        I’m a dedicated and results-driven web developer with a strong foundation in front-end and back-end technologies. 
                        I specialize in creating responsive, user-friendly websites that help businesses grow and connect with their audiences.
                    </p>
                </section>

                {/* Quick Links Section */}
                <section className="quick-links flex-1 min-w-[250px]">
                    <h2 className="text-xl text-[#00eeff] mb-4">Quick Links</h2>
                    <ul className="space-y-2">
                        <li>
                            <a href="#about" className="text-white hover:text-[#00eeff] hover:underline transition-all">About Me</a>
                        </li>
                        <li>
                            <a href="#portfolio" className="text-white hover:text-[#00eeff] hover:underline transition-all">My Portfolio</a>
                        </li>
                        <li>
                            <a href="#contact" className="text-white hover:text-[#00eeff] hover:underline transition-all">Contact Me</a>
                        </li>
                    </ul>
                </section>

                {/* Services Section */}
                <section className="services flex-1 min-w-[250px]">
                    <h2 className="text-xl text-[#00eeff] mb-4">Services</h2>
                    <p className="text-gray-300 mb-4">
                        I offer a range of professional web development services, including:
                    </p>
                    <ul className="text-gray-300 space-y-2">
                        <li>Responsive Web Design</li>
                        <li>Custom Web Development</li>
                        <li>UI/UX Design</li>
                        <li>Website Maintenance & Support</li>
                    </ul>
                </section>
            </div>

            {/* Footer Bottom Section */}
            <div className="footer-bottom border-t border-[#34495e] pt-4 text-sm">
                <p className="text-gray-300">&copy; 2024 My Portfolio. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
