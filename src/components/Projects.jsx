import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ImagePreviewModal from "./ImagePreviewModal"; 
import projects from "../data/projectsData";

const Projects = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImages, setPreviewImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openPreview = (images, index) => {
    setPreviewImages(images);
    setCurrentIndex(index);
    setPreviewOpen(true);
  };

  const closePreview = () => setPreviewOpen(false);

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-header">
          <div className="section-tag" data-aos="fade-up">
            <img
              src="/assets/images/star.png"
              alt="star icon"
              className="img-fluid"
            />
            <span>Work That Speaks</span>
          </div>

          <h2 className="section-title" data-aos="fade-up" data-aos-delay="200">
            Spotlight on <span>recent projects</span>
          </h2>
          <p className="section-desc" data-aos="fade-up" data-aos-delay="300">
            A collection of innovative projects that bring my concepts to
            reality.
          </p>
        </div>

        <div className="projects-content">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              openPreview={openPreview} // 👈 Pass the click handler
            />
          ))}
        </div>
      </div>

      {/* 🔍 Preview Modal Section */}
      <ImagePreviewModal
        images={previewImages}
        index={currentIndex}
        onClose={closePreview}
        isOpen={previewOpen}
        setIndex={setCurrentIndex}
      />
    </section>
  );
};

export default Projects;
