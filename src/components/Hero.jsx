import React, { useEffect, useState } from 'react';
import { getHero, getResume } from '../api/api';

// Fallbacks keep the section looking normal even before the fetch resolves,
// or if the backend is briefly unreachable.
const FALLBACK_TAGLINE = 'From Ideas to Interactive Magic';
const FALLBACK_SUMMARY =
  "I'm Himanshu Sharma, a passionate web developer with a strong focus on creating seamless, user-friendly digital experiences.";
const FALLBACK_RESUME_URL = '/assets/doc/Himanshu_Sharma_FSD_Resume.pdf';

const Hero = () => {
  const [tagline, setTagline] = useState(FALLBACK_TAGLINE);
  const [summary, setSummary] = useState(FALLBACK_SUMMARY);
  const [resumeUrl, setResumeUrl] = useState(FALLBACK_RESUME_URL);

  useEffect(() => {
    getHero()
      .then((hero) => {
        if (hero.tagline) setTagline(hero.tagline);
        if (hero.summary) setSummary(hero.summary);
      })
      .catch(() => {
        // Keep fallback copy - no need to surface an error for a hero section.
      });

    getResume()
      .then((resume) => {
        if (resume.url) setResumeUrl(resume.url);
      })
      .catch(() => {
        // Keep the static fallback resume path.
      });
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="badge" data-aos="fade-up">
          <div className="circle-icon"></div>
          <h4>{tagline}</h4>
        </div>

        <div className="hero-content">
          <h2 data-aos="fade-up" data-aos-delay="200">
            Transforming Visions into Seamless <span>User Experiences</span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="300">
            {summary}
          </p>

          <a href="#projects" className="primary-button" data-aos="fade-up" data-aos-delay="400">
            <span>Show my work</span>
            <i className="fa-solid fa-angles-right"></i>
          </a>

          <a
            href={resumeUrl}
            className="primary-button"
            data-aos="fade-up"
            data-aos-delay="400"
            target="_blank"
            rel="noreferrer"
            download
          >
            <span>Download Resume</span>
            <i className="fa-solid fa-download"></i>
          </a>
        </div>

        <div className="hero-image" data-aos="zoom-in-up" data-aos-delay="500">
          <h2>
            Fueling success with collaboration and turning ideas into digital
            magic through creativity and innovation.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;