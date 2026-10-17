
import React from "react";
import {
  Mail,
  ArrowUp,
  Heart,
  Code2,
} from "lucide-react";
import "./Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="portfolio-footer">
      <div className="footer-container">
        {/* Main footer content */}
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <span className="footer-logo-icon">
                <Code2 size={22} />
              </span>

              <span>
                SANDRA<span className="footer-logo-accent">.</span>
              </span>
            </a>

            <p>
              Building thoughtful, responsive, and user-friendly
              web experiences with modern technologies.
            </p>

            <div className="footer-socials">
              <a
                href="https://github.com/Sandra1998PC"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              >
                <FaGithub size={19} />
              </a>

              <a
                href="https://www.linkedin.com/in/sandra-p-c1998/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
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

          {/* Navigation */}
          <div className="footer-navigation">
            <h3>Quick Links</h3>

            <ul>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="footer-technologies">
            <h3>Technologies</h3>

            <div className="footer-tech-tags">
              <span>Angular</span>
              <span>React</span>
              <span>Next.js</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
              <span>TypeScript</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Sandra P C. All rights reserved.
          </p>

          <p className="footer-made-with">
            Made with <Heart size={14} fill="currentColor" /> and React
          </p>

          <a href="#home" className="footer-back-to-top">
            Back to top
            <span>
              <ArrowUp size={16} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
