// src/components/About.jsx
import React from 'react';
import './About.css'; // Ensure you create and use this CSS file

const About = () => {
    return (
        <div className="about">
            <div className="about-header">
                <h1>About Me</h1>
                <p>Get to know more about who I am and what I do.</p>
            </div>
            <div className="about-content">
                <div className="about-image">
                    <img src="src/assets/images/Picsart_24-05-21_08-08-31-048.png" alt="Sourabh Roy" />
                </div>
                <div className="about-text">
                    <h2>Welcome!</h2>
                    <p>
                        Hello! I'm Sourabh Roy, a passionate full-stack Java developer with over a year of experience. 
                        I specialize in creating dynamic and responsive web applications. My journey started with a fascination for technology 
                        and has evolved into a full-blown career where I design and develop both frontend and backend solutions. 
                        My goal is to build impactful and user-centric software that solves real-world problems.
                    </p>
                    <div className="about-social">
                        <a href="https://www.linkedin.com/in/sourabhroy" target="_blank" rel="noopener noreferrer">
                            <i className="bx bxl-linkedin" />
                        </a>
                        <a href="https://github.com/sourabhroy" target="_blank" rel="noopener noreferrer">
                            <i className="bx bxl-github" />
                        </a>
                        <a href="https://twitter.com/sourabhroy" target="_blank" rel="noopener noreferrer">
                            <i className="bx bxl-twitter" />
                        </a>
                        <a href="https://dribbble.com/sourabhroy" target="_blank" rel="noopener noreferrer">
                            <i className="bx bxl-dribbble" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
