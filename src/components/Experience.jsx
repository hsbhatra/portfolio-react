import React, { useEffect, useState } from 'react';
import { getExperience } from '../api/api';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    getExperience()
      .then(setExperiences)
      .catch(() => setExperiences([]));
  }, []);

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
            Key milestones and roles that have shaped my skills, challenges I've overcome, and the impact I've made along the way.
          </p>
        </div>

        <div className="experience-content">
          {experiences.map((exp, index) => (
            <div className="minimal-card" key={exp._id || index} data-aos="zoom-in" data-aos-delay={600 + index * 100}>
              <img src={exp.icon} alt="experience icon" className="img-fluid" />
              <div className="content">
                <h3>
                  {exp.title}
                  {(exp.startDate || exp.endDate) && (
                    <span style={{ display: 'block', fontSize: '0.8em', fontWeight: 400 }}>
                      {[exp.startDate, exp.endDate].filter(Boolean).join(' – ')}
                    </span>
                  )}
                </h3>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;