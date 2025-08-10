import React from 'react';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="badge" data-aos="fade-up">
          <div className="circle-icon"></div>
          <h4>From Ideas to Interactive Magic</h4>
        </div>

        <div className="hero-content">
          <h2 data-aos="fade-up" data-aos-delay="200">
            Transforming Visions into Seamless <span>User Experiences</span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="300">
            I'm Himanshu Sharma, a passionate web developer with a strong focus on creating seamless, user-friendly
            digital experiences.
          </p>

          <a href="#projects" className="primary-button" data-aos="fade-up" data-aos-delay="400">
            <span>Show my work</span>
            <i className="fa-solid fa-angles-right"></i>
          </a>

          <a
            href="/assets/doc/Himanshu_Sharma_FSD_Resume.pdf"
            className="primary-button"
            data-aos="fade-up"
            data-aos-delay="400"
            download
          >
            <span>Download Resume</span>
            <i className="fa-solid fa-download"></i>
          </a>
        </div>

        <div
          className="hero-image"
          data-aos="zoom-in-up"
          data-aos-delay="500"
        >
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
