
import React from "react";
import {
  BriefcaseBusiness,
  GraduationCap,
  MapPin,
  CalendarDays,
  CheckCircle2,
} from "lucide-react";
import "./Experience.css";

const experiences = [
  {
    type: "work",
    role: "Junior Software Engineer Trainee",
    company: "Geojit Technologies Pvt. Ltd.",
    period: "Jan 2022 – Jun 2024",
    location: "India",
    description:
      "Worked on web application development with a focus on Angular, TypeScript, and SQL.",
    responsibilities: [
      "Developed and maintained responsive web application features using Angular and TypeScript.",
      "Built reusable UI components to improve consistency and maintainability.",
      "Worked with SQL queries and financial data workflows.",
      "Collaborated with team members during development and Agile project activities.",
    ],
    technologies: ["Angular", "TypeScript", "SQL", "HTML5", "CSS3", "Git","Azure DevOps","Tortoise SVN","SQL Server Management Studio","Vs Code"],
  },
  {
    type: "learning",
    role: "MEARN Stack Developer Intern",
    company: "Luminar Technolab",
    period: "Mar 2026 – Sep 2026",
    location: "Kerala, India",
    description:
      "Completed full-stack development training with practical application development using modern web technologies.",
    responsibilities: [
      "Built frontend applications using React and explored Next.js.",
      "Developed backend APIs using Node.js and Express.js.",
      "Worked with MongoDB for data storage and CRUD operations.",
      "Practised authentication, API integration, and full-stack application development.",
    ],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Angular",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Git",
    ],
  },
];

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        <div className="experience-heading">
          <span className="experience-eyebrow">
            <BriefcaseBusiness size={16} />
            MY JOURNEY
          </span>

          <h2>
            Experience & <span>Learning</span>
          </h2>

          <p>
            My professional journey, technical experience, and
            continued growth as a web developer.
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((item, index) => (
            <article
              className="experience-item"
              key={`${item.company}-${item.type}`}
            >
              <div className="timeline-marker">
                {item.type === "work" ? (
                  <BriefcaseBusiness size={20} />
                ) : (
                  <GraduationCap size={20} />
                )}
              </div>

              <div className="experience-card">
                <div className="experience-card-header">
                  <div>
                    <span className="experience-type">
                      {item.type === "work"
                        ? "Professional Experience"
                        : "Training & Development"}
                    </span>

                    <h3>{item.role}</h3>
                    <h4>{item.company}</h4>
                  </div>

                  <span className="experience-index">
                    0{index + 1}
                  </span>
                </div>

                <div className="experience-meta">
                  <span>
                    <CalendarDays size={15} />
                    {item.period}
                  </span>

                  <span>
                    <MapPin size={15} />
                    {item.location}
                  </span>
                </div>

                <p className="experience-description">
                  {item.description}
                </p>

                <ul className="experience-responsibilities">
                  {item.responsibilities.map((responsibility) => (
                    <li key={responsibility}>
                      <CheckCircle2 size={17} />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>

                <div className="experience-technologies">
                  {item.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
