import React from 'react';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-content">
          <span>
            © 2025 <strong>Himanshu</strong>. All rights reserved.
          </span>

          <div className="social-media">
            <a
              href="https://www.instagram.com/h_s_the_official"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/himanshu-sharma-243b20205"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/hsbhatra"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
