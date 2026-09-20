const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Small fetch wrapper - throws on non-2xx so callers can catch and fall back
// to default content rather than showing a broken section.
const request = async (path, options = {}) => {
  const res = await fetch(`${API_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.message || `Request to ${path} failed`);
  }
  return res.json();
};

export const getHero = () => request('/hero');
export const getResume = () => request('/resume');
export const getTechStack = () => request('/techstack');
export const getProjects = () => request('/projects');
export const getExperience = () => request('/experience');
export const getCertifications = () => request('/certifications');

export const submitContact = (payload) =>
  request('/contact', { method: 'POST', body: JSON.stringify(payload) });