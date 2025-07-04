import React from 'react';

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="section-header" data-aos="fade-up" data-aos-delay="300">
          <div className="section-tag">
            <img src="/assets/images/star.png" alt="star icon" className="img-fluid" />
            <span>Work Experience</span>
          </div>

          <h2 className="section-title" data-aos="fade-up" data-aos-delay="400">
            Journey through my <span>work experience</span>
          </h2>
          <p className="section-desc" data-aos="fade-up" data-aos-delay="500">
            Key milestones and roles that have shaped my skills, challenges I’ve overcome, and the impact I've made along the way.
          </p>
        </div>

        <div className="experience-content">
          {experiences.map((exp, index) => (
            <div className="minimal-card" key={index} data-aos="zoom-in" data-aos-delay={exp.delay}>
              <img src={exp.icon} alt="experience icon" className="img-fluid" />
              <div className="content">
                <h3>{exp.title}</h3>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const experiences = [
    {
        title: 'Software Developer Intern at AVICS',
        description: 'Assisting in building scalable web applications using Java, Spring Boot, C#, .NET, and Angular, focusing on enhancing user engagement and system performance.',
        icon: '/assets/images/exp1.svg',
        delay: 600,
    },
    // Add more experiences as needed
    // {
    //   title: 'Freelance Web Developer',
    //   description: 'Designed and implemented responsive web solutions for various clients, prioritizing usability and robust functionality.',
    //   icon: '/assets/images/exp2.svg',
    //   delay: 700,
    // },
];

export default Experience;
