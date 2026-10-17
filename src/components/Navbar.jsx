import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
            <nav className="navbar">

                {/* Logo */}
                <a href="#home" className="logo">
                    SANDRA <span>P C</span>
                </a>

                {/* Navigation */}
                <div className="nav-links">
                    <a href="#home" >
                        Home
                    </a>

                    <a href="#about">
                        About
                    </a>

                    <a href="#skills">
                        Skills
                    </a>

                    <a href="#projects">
                        Projects
                    </a>

                    <a href="#experience">
                        Experience
                    </a>
                </div>

                {/* Contact Button */}
                <a href="#contact" className="contact-btn">
                    Let's Talk
                    <span>↗</span>
                </a>

            </nav>
    )
}

export default Navbar
