import React, { useState } from "react";
import { toYoutubeEmbedUrl } from "../utils/youtube";

const ProjectCard = ({ project, openPreview }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Media items sorted by their admin-assigned display order.
  const media = [...(project.media || [])].sort((a, b) => (a.order || 0) - (b.order || 0));
  const imageUrls = media.filter((m) => m.type === "image").map((m) => m.url);

  const nextSlide = () => {
    if (media.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % media.length);
  };

  const prevSlide = () => {
    if (media.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
  };

  const handleMediaClick = (item) => {
    if (item.type !== "image") return; // only images open the full-size preview modal
    const indexAmongImages = imageUrls.indexOf(item.url);
    openPreview(imageUrls, indexAmongImages);
  };

  return (
    <div className="project" data-aos="zoom-in" data-aos-delay={project.delay}>
      {media.length > 0 ? (
        <div className="carousel">
          {media.map((item, i) => (
            <div
              key={i}
              className={`carousel-img ${i === currentIndex ? "active" : ""}`}
              style={{ display: i === currentIndex ? "block" : "none" }}
            >
              {item.type === "image" && (
                <img
                  src={item.url}
                  alt={item.title || `Slide ${i + 1}`}
                  className="carousel-img active"
                  onClick={() => handleMediaClick(item)}
                  style={{ cursor: "pointer" }}
                />
              )}
              {item.type === "video-upload" && (
                <video src={item.url} controls className="carousel-img active" />
              )}
              {item.type === "youtube" && (
                <iframe
                  src={toYoutubeEmbedUrl(item.url)}
                  title={item.title || `Project video ${i + 1}`}
                  className="carousel-img active"
                  style={{ border: 0, aspectRatio: "16/9", width: "100%" }}
                  allowFullScreen
                />
              )}
              {item.title && (
                <p style={{ fontSize: "13px", color: "#aaa", marginTop: "6px" }}>{item.title}</p>
              )}
            </div>
          ))}
          <button className="carousel-btn prev" onClick={prevSlide}>
            &#10094;
          </button>
          <button className="carousel-btn next" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
      ) : (
        <p style={{ color: "#aaa", fontStyle: "italic" }}>Media coming soon.</p>
      )}

      {imageUrls.length > 0 && (
        <p
          style={{
            marginTop: "10px",
            fontSize: "14px",
            color: "#aaa",
            fontStyle: "italic",
          }}
        >
          📸 Click on the images above to view full-size screenshots (mobile/desktop layout)
        </p>
      )}

      <div className="project-info">
        <span className="tags">{(project.tags || []).join(" • ")}</span>
        <h4>{project.title}</h4>
        <p>{project.description}</p>

        <a
          href={project.githubUrl}
          className="project-btn"
          target="_blank"
          rel="noreferrer"
        >
          Check GitHub Repo
        </a>

        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            className="project-btn"
            target="_blank"
            rel="noreferrer"
          >
            Check Live Site
          </a>
        ) : (
          <p style={{ color: "red", marginTop: "25px" }}>
            <i>This web-app is not deployed yet!</i>
          </p>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;