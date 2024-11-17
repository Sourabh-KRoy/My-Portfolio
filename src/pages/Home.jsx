import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <div className="home-content">
                <h3>Hellow, It's Me</h3>
                <h1>Sourabh Roy</h1>
                <h3>
                    And I'm a <span className="text" />
                </h3>
                <p>
                    I'm a full stack Java developer with extensive experience for over 1
                    years.
                    <br />
                    experties is to create and website designm frontend design and backend
                    design.
                </p>
                <div className="home-sci">
                    <a href="">
                        <i className="bx bxl-facebook" />
                    </a>
                    <a href="">
                        <i className="bx bxl-instagram" />
                    </a>
                    <a href="">
                        <i className="bx bxl-twitter" />
                    </a>
                    <a href="">
                        <i className="bx bxl-dribbble" />
                    </a>
                </div>
                <a href="#" className="btn-box">
                    Download CV
                </a>

            </div>
            <div className="img-home">
                <img src="src/assets/images/Picsart_24-05-21_08-08-31-048.png" alt="image" />
            </div>
        </div>

    )
}

export default Home
