import React, { useState } from 'react';

const ProjectCard = ({ project }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="project" data-aos="zoom-in" data-aos-delay={project.delay}>
      {/* Image Carousel */}
      <div className="carousel">
        {project.images.map((img, i) => (
          <img
            key={i}
            src={img}
            className={`carousel-img ${i === currentIndex ? 'active' : ''}`}
            alt={`Slide ${i + 1}`}
          />
        ))}
        <button className="carousel-btn prev" onClick={prevSlide}>&#10094;</button>
        <button className="carousel-btn next" onClick={nextSlide}>&#10095;</button>
      </div>

      <div className="project-info">
        <span className="tags">{project.tags}</span>
        <h4>{project.title}</h4>
        <p>{project.description}</p>

        <a href={project.github} className="project-btn" target="_blank" rel="noreferrer">
          Check GitHub Repo
        </a>

        {project.live ? (
          <a href={project.live} className="project-btn" target="_blank" rel="noreferrer">
            Check Live Site
          </a>
        ) : (
          <p style={{ color: 'red', marginTop: '25px' }}>
            <i>This web-app is not deployed yet!</i>
          </p>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
