import React, { useState } from 'react';
import { submitContact } from '../api/api';

const emptyForm = { name: '', email: '', phone: '', subject: '', message: '' };

const Contact = () => {
  const [formValues, setFormValues] = useState(emptyForm);
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');
    try {
      await submitContact(formValues);
      setStatus('success');
      setFormValues(emptyForm);
    } catch (err) {
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    }
  };

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
            Ready to elevate your digital presence? Drop me a message below or reach out over coffee — my treat!
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} data-aos="zoom-in-up" data-aos-delay="600">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formValues.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formValues.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your phone number (optional)"
            value={formValues.phone}
            onChange={handleChange}
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject (optional)"
            value={formValues.subject}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your message"
            value={formValues.message}
            onChange={handleChange}
            required
          />

          {status === 'success' && (
            <p className="form-status success">Message sent — thanks for reaching out! I'll get back to you soon.</p>
          )}
          {status === 'error' && <p className="form-status error">{errorMessage}</p>}

          <button type="submit" className="primary-button" disabled={status === 'sending'}>
            <span>{status === 'sending' ? 'Sending…' : "Let's Grab a Coffee"}</span>
            <i className="fa-solid fa-mug-hot"></i>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;