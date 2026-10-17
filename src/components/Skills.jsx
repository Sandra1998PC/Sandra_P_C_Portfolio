import React from 'react'
import {
  Code2,
  Server,
  Database,
  Wrench,
  Layers,
} from "lucide-react";
import "./Skills.css";

const skillCategories = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    icon: Code2,
    skills: [
      "Angular",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Tailwind CSS",
      "RxJS",
      "Redux Toolkit",
    ],
  },
  {
    title: "Backend Development",
    description: "Developing APIs and server-side functionality.",
    icon: Server,
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "CRUD Operations",
    ],
  },
  {
    title: "Full-Stack Frameworks",
    description: "Building modern full-stack web applications.",
    icon: Layers,
    skills: [
      "Next.js",
    ],
  },
  {
    title: "Database",
    description: "Working with relational and NoSQL databases.",
    icon: Database,
    skills: [
      "MongoDB",
      "SQL",
      "Microsoft SQL Server",
      "Mongoose",
    ],
  },
  {
    title: "Tools & Technologies",
    description: "Tools and workflows for collaborative development.",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "Azure DevOps",
      "VS Code",
      "Agile / Scrum",
    ],
  },
];


function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">

        {/* Section Heading */}
        <div className="skills-heading">
          <span className="skills-label">MY TECHNICAL EXPERTISE</span>

          <h2>
            Skills & <span>Technologies</span>
          </h2>

          <p>
            Technologies I use to build responsive interfaces,
            develop backend services, and create full-stack applications.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="skills-grid">
          {skillCategories.map((category) => {
            const CategoryIcon = category.icon;

            return (
              <article className="skill-card" key={category.title}>
                <div className="skill-card-header">
                  <div className="skill-category-icon">
                    <CategoryIcon size={22} />
                  </div>

                  <div className="skill-card-title">
                    <h3>{category.title}</h3>
                    <p>{category.description}</p>
                  </div>
                </div>

                <div className="skill-tags">
                  {category.skills.map((skill) => (
                    <span className="skill-tag" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="skills-footer">
          <div className="skills-footer-icon">
            <Layers size={21} />
          </div>

          <p>
            Always exploring new technologies and improving my
            development skills through hands-on projects.
          </p>
        </div>

      </div>
    </section>
  )
}

export default Skills
