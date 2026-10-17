import React from "react";
import {
  ExternalLink,
  FolderCode,
  ArrowUpRight,
} from "lucide-react";
import "./Projects.css";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "FusionEvents",
    category: "MERN Stack Application",
    description:
      "An event management platform where organizers can manage events and participants can register, track attendance, and share feedback.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
    ],
    github: "https://github.com/Sandra1998PC/FusionEvents",
    demo: "https://fusion-events-r3ao.vercel.app/",
    number: "01",
  },
  {
    title: "TalentHive",
    category: "Job Portal Application",
    description:
      "A job portal interface with role-based views for users and administrators, including job listings and application status management.",
    technologies: [
      "React",
      "JavaScript",
      "Bootstrap",
      "JSON Server",
    ],
    github: "https://github.com/your-username/talenthive",
    demo: "https://talent-hive-xi.vercel.app/",
    number: "02",
  },
  {
    title: "LaptopHub",
    category: "Full-Stack Web Application",
    description:
      "A full-stack laptop inventory management application built with Angular, Node.js, Express.js, and MongoDB, featuring CRUD operations and REST API integration for efficient laptop record management.",
    technologies: [
      "Angular",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Bootstrap",
    ],
    github: "https://github.com/your-username/inventory-management",
    demo: "https://tech-desk-tau.vercel.app/",
    number: "03",
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="projects-heading">
          <span className="section-eyebrow">
            <FolderCode size={16} />
            MY WORK
          </span>

          <h2>
            Projects that bring
            <span> ideas to life.</span>
          </h2>

          <p>
            A selection of applications I've built while exploring
            frontend development and full-stack technologies.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-card-top">
                <div className="project-icon">
                  <FolderCode size={25} />
                </div>

                <span className="project-number">
                  {project.number}
                </span>
              </div>

              <span className="project-category">
                {project.category}
              </span>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-tech-stack">
                {project.technologies.map((tech) => (
                  <span className="project-tech" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FaGithub size={17} />
                  GitHub
                  <ArrowUpRight size={15} />
                </a>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link project-demo"
                  >
                    Live Demo
                    <ExternalLink size={15} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="projects-footer">
          <p>Interested in seeing more of my work?</p>

          <a
            href="https://github.com/Sandra1998PC"
            target="_blank"
            rel="noopener noreferrer"
            className="all-projects-link"
          >
            Explore GitHub
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;