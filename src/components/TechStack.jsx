import React from 'react';

const TechStack = () => {
  return (
    <section className="stack" id="stack">
      <div className="container">
        <div className="section-header">
          <div className="section-tag" data-aos="fade-up">
            <img src="/assets/images/star.png" alt="star icon" className="img-fluid" />
            <span>Stack</span>
          </div>

          <h2 className="section-title" data-aos="fade-up" data-aos-delay="200">
            My Essential Tools for <span>Design</span> and <span>Productivity</span>
          </h2>

          <p className="section-desc" data-aos="fade-up" data-aos-delay="300">
            From design to project management, these tools are the backbone of my workflow. They keep me organized,
            creative, and ready to collaborate on every project.
          </p>
        </div>

        <div className="stack-content">
          {/* Each Tech Card */}
          {stackData.map((tech, index) => (
            <div
              key={index}
              className="minimal-card"
              data-aos="zoom-up"
              data-aos-delay={tech.delay}
            >
              <img src={tech.icon} alt={tech.name + " icon"} className="img-fluid" />
              <div className="content">
                <h3>{tech.name}</h3>
                <span>{tech.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const stackData = [
  {
    name: 'Python',
    label: 'Programming Language',
    icon: '/assets/images/icons/python.png',
    delay: 300,
  },
  {
    name: 'Django',
    label: 'Python Framework',
    icon: '/assets/images/icons/django.svg',
    delay: 400,
  },
  {
    name: 'Java',
    label: 'Programming Language',
    icon: '/assets/images/icons/java.png',
    delay: 500,
  },
  {
    name: 'Spring Boot',
    label: 'Java Framework',
    icon: '/assets/images/icons/spring-boot.png',
    delay: 700,
  },
  {
    name: 'HTML',
    label: 'Markup Language',
    icon: '/assets/images/icons/html.png',
    delay: 800,
  },
  {
    name: 'CSS',
    label: 'Styling Language',
    icon: '/assets/images/icons/css.png',
    delay: 1000,
  },
  {
    name: 'JavaScript',
    label: 'Programming Language',
    icon: '/assets/images/icons/javascript.png',
    delay: 600,
  },
  {
    name: 'React JS',
    label: 'Frontend Library',
    icon: '/assets/images/icons/react.png',
    delay: 900,
  },
  {
    name: 'Node JS',
    label: 'Backend Runtime Environment',
    icon: '/assets/images/icons/nodejs.png',
    delay: 1000,
  },
  {
    name: 'Express JS',
    label: 'Node.js Framework',
    icon: '/assets/images/icons/express.png',
    delay: 1050,
  },
  {
    name: 'MongoDB',
    label: 'NoSQL Database',
    icon: '/assets/images/icons/mongo-db.png',
    delay: 1100,
  },
  {
    name: 'MySQL',
    label: 'SQL Database',
    icon: '/assets/images/icons/mysql.png',
    delay: 1100,
  },
  {
    name: 'Github',
    label: 'Version Control Platform',
    icon: '/assets/images/icons/github.png',
    delay: 1200,
  },
  {
    name: 'Postman',
    label: 'API Testing Tool',
    icon: '/assets/images/icons/postman.png',
    delay: 1300,
  },
  {
    name: 'VS Code',
    label: 'Code Editor',
    icon: '/assets/images/icons/vscode.png',
    delay: 1400,
  },
];

export default TechStack;
