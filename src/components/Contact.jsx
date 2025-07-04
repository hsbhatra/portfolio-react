import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-tag" data-aos="fade-up" data-aos-delay="300">
          <img
            src="/assets/images/star.png"
            alt="star icon"
            className="img-fluid"
          />
          <span>Let's Collaborate</span>
        </div>

        <div className="section-header">
          <h2 className="section-title" data-aos="fade-up" data-aos-delay="400">
            Let's chat over <span>coffee</span> and brew <span>ideas</span> together!
          </h2>
          <p className="section-desc" data-aos="fade-up" data-aos-delay="500">
            Ready to elevate your digital presence? Let’s discuss your goals over coffee — my treat! Connect today and let's craft something extraordinary!
          </p>
        </div>

        <a
          href="mailto:hsbhatra72@gmail.com"
          className="primary-button"
          data-aos="zoom-in-up"
          data-aos-delay="600"
        >
          <span>Let's Grab a Coffee</span>
          <i className="fa-solid fa-mug-hot"></i>
        </a>
      </div>
    </section>
  );
};

export default Contact;
