import React from 'react'
import './Hero.css'
import {
    ArrowRight,
    //   Github,
    //   Linkedin,
    Mail,
    Download,
} from "lucide-react";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Hero() {
    return (
        <section className="hero" id="home">

            <div className="hero-container">

                {/* Left Content */}
                <div className="hero-content">

                    <div className="hero-badge">
                        <span className="badge-dot"></span>
                        Available for opportunities
                    </div>

                    <h1>
                        Hi, I'm <span>Sandra P C</span>
                    </h1>

                    <h2>
                        Full Stack Developer
                    </h2>

                    <p className="hero-description">
                        I build responsive, user-friendly and scalable web applications
                        using modern frontend and backend technologies. I enjoy turning
                        ideas into clean and meaningful digital experiences.
                    </p>

                    {/* Technology Tags */}
                    <div className="tech-tags">
                        <span>Angular</span>
                        <span>React</span>
                        <span>TypeScript</span>
                        <span>Node.js</span>
                        <span>MongoDB</span>
                        <span>Next.js</span>
                    </div>

                    {/* Buttons */}
                    <div className="hero-buttons">

                        <a href="#projects" className="primary-btn">
                            View My Work
                            <ArrowRight size={18} />
                        </a>

                        <a href="#contact" className="secondary-btn">
                            Get In Touch
                        </a>

                    </div>

                    {/* Social Links */}
                    <div className="social-links">

                        <a
                            href="https://github.com/Sandra1998PC"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                        >
                            <FaGithub size={19} />
                            {/* <Github size={19} /> */}
                        </a>

                        <a
                            href="https://www.linkedin.com/in/sandra-p-c1998/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin size={19} />
                        </a>

                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=sandrapctla%40gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Email me through Gmail"
                        >
                            <Mail size={19} />
                        </a>

                    </div>

                </div>


                {/* Right Side */}
                <div className="hero-visual">

                    <div className="visual-card">

                        <div className="card-top">
                            <div className="window-dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                            <span className="card-title">
                                developer.js
                            </span>
                        </div>

                        <div className="code-content">

                            <p>
                                <span className="code-purple">const</span>{" "}
                                <span className="code-blue">developer</span>{" "}
                                = {"{"}
                            </p>

                            <p className="indent">
                                <span className="code-key">name:</span>{" "}
                                <span className="code-green">
                                    "Sandra P C"
                                </span>,
                            </p>

                            <p className="indent">
                                <span className="code-key">role:</span>{" "}
                                <span className="code-green">
                                    "Full Stack Developer"
                                </span>,
                            </p>

                            <p className="indent">
                                <span className="code-key">frontend:</span>{" "}
                                <span className="code-green">
                                    "Angular, React"
                                </span>,
                            </p>

                            <p className="indent">
                                <span className="code-key">backend:</span>{" "}
                                <span className="code-green">
                                    "Node.js, Express"
                                </span>,
                            </p>

                            <p className="indent">
                                <span className="code-key">database:</span>{" "}
                                <span className="code-green">
                                    "MongoDB, SQL"
                                </span>
                            </p>

                            <p className="indent">
                                <span className="code-key">database:</span>{" "}
                                <span className="code-green">
                                    "MongoDB, SQL"
                                </span>
                            </p>

                            <p>{"};"}</p>

                            <div className="code-cursor"></div>

                        </div>

                    </div>

                    {/* Floating Skill Cards */}

                    <div className="floating-card floating-card-one">
                        <span className="floating-icon">⚡</span>
                        <div>
                            <strong>Frontend</strong>
                            <small>Angular • React</small>
                        </div>
                    </div>

                    <div className="floating-card floating-card-two">
                        <span className="floating-icon">◈</span>
                        <div>
                            <strong>Backend</strong>
                            <small>Node • Express</small>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default Hero
