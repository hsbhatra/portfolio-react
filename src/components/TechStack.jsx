import React, { useEffect, useState } from 'react';
import { getTechStack } from '../api/api';

const TechStack = () => {
  const [stackData, setStackData] = useState([]);

  useEffect(() => {
    getTechStack()
      .then(setStackData)
      .catch(() => setStackData([]));
  }, []);

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
          {stackData.map((tech, index) => (
            <div
              key={tech._id || index}
              className="minimal-card"
              data-aos="zoom-up"
              data-aos-delay={150 + index * 40}
            >
              <img src={tech.icon} alt={tech.name + ' icon'} className="img-fluid" />
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

export default TechStack;