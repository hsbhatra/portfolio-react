import React, { useEffect, useState } from 'react';
import { getCertifications } from '../api/api';

const Certifications = () => {
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    getCertifications()
      .then(setCertifications)
      .catch(() => setCertifications([]));
  }, []);

  if (certifications.length === 0) return null;

  return (
    <section className="certifications" id="certifications">
      <div className="container">
        <div className="section-header" data-aos="fade-up" data-aos-delay="300">
          <div className="section-tag">
            <img src="/assets/images/star.png" alt="star icon" className="img-fluid" />
            <span>Certifications</span>
          </div>

          <h2 className="section-title" data-aos="fade-up" data-aos-delay="400">
            Certifications & <span>Achievements</span>
          </h2>
          <p className="section-desc" data-aos="fade-up" data-aos-delay="500">
            Training, credentials, and recognitions along the way.
          </p>
        </div>

        <div className="certifications-content">
          {certifications.map((cert, index) => (
            <div className="minimal-card" key={cert._id || index} data-aos="zoom-in" data-aos-delay={300 + index * 100}>
              <div className="content">
                <h3>{cert.title}</h3>
                {(cert.issuer || cert.date) && (
                  <span>{[cert.issuer, cert.date].filter(Boolean).join(' • ')}</span>
                )}

                {cert.link && (
                  <p>
                    <a href={cert.link} className="cert-link" target="_blank" rel="noreferrer">
                      View credential
                    </a>
                  </p>
                )}

                {cert.media && cert.media.length > 0 && (
                  <div className="cert-media">
                    {cert.media.map((m, i) => {
                      if (m.type === 'image') {
                        return <img key={i} src={m.url} alt={cert.title} />;
                      }
                      if (m.type === 'file') {
                        return (
                          <a key={i} href={m.url} target="_blank" rel="noreferrer">
                            View file
                          </a>
                        );
                      }
                      return (
                        <a key={i} href={m.url} target="_blank" rel="noreferrer">
                          Watch video
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;