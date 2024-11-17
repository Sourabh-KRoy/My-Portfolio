import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <section className="portfolio-info">
                    <h2>About Me</h2>
                    <p>I'm a passionate web developer with a focus on creating beautiful and functional websites. Check out my portfolio to see my latest work.</p>
                </section>
                <section className="footer-links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </section>
                <section className="expense-breakdown">
                    <h2>Expense Breakdown</h2>
                    <p>Total Project Cost: $2000</p>
                    <ul>
                        <li>Design: $500</li>
                        <li>Development: $1200</li>
                        <li>Miscellaneous: $300</li>
                    </ul>
                </section>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 My Portfolio. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
