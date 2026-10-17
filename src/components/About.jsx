import React from 'react'
import {
  Code2,
  BriefcaseBusiness,
  GraduationCap,
  ArrowUpRight,
} from "lucide-react";
import "./About.css";
import profImg from "../assets/sandra-profile.jpg";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* Section Heading */}
        <div className="about-heading">
          <span className="about-label">GET TO KNOW ME</span>
          <h2>
            A little <span>about me</span>
          </h2>
          <p>
            A developer who enjoys turning ideas into meaningful
            digital experiences.
          </p>
        </div>

        {/* Main Content */}
        <div className="about-content">

          {/* Photo */}
          <div className="about-image-wrapper">
            <div className="about-image-decoration"></div>

            <div className="about-image-frame">
              <img
                src={profImg}
                alt="Sandra P C, Software Developer"
                className="about-image"
              />
            </div>

            <div className="about-image-caption">
              <span className="caption-dot"></span>
              Always learning, always building
            </div>
          </div>

          {/* Introduction */}
          <div className="about-text">

            <span className="about-greeting">
              Hello there! <span>👋</span>
            </span>

            <h3>
              I'm Sandra P C, a Software Developer
              passionate about building for the web.
            </h3>

            <p>
              I have 2.5 years of professional experience working
              with Angular, TypeScript and SQL. During my time at
              Geojit Technologies, I gained experience developing
              web application features, reusable components and
              data-driven functionality.
            </p>

            <p>
              I have also developed full-stack applications using
              React, Next.js, Node.js, Express.js and MongoDB.
              I enjoy creating responsive user interfaces,
              integrating REST APIs and building practical
              applications that solve real-world problems.
            </p>

            <p>
              I'm continuously expanding my skills and looking
              forward to contributing to a collaborative
              development team where I can learn, grow and build
              useful products.
            </p>

            {/* Highlights */}
            <div className="about-highlights">

              <div className="highlight-item">
                <div className="highlight-icon">
                  <BriefcaseBusiness size={20} />
                </div>
                <div>
                  <h4>Professional Experience</h4>
                  <p>2.5 years in software development</p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">
                  <Code2 size={20} />
                </div>
                <div>
                  <h4>Full Stack Development</h4>
                  <p>Frontend, APIs and databases</p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h4>Education</h4>
                  <p>B.Tech in Computer Science & Engineering</p>
                </div>
              </div>

            </div>

            {/* CTA */}
            <a href="#projects" className="about-cta">
              Explore My Projects
              <ArrowUpRight size={18} />
            </a>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About
