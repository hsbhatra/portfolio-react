import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
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
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Attendify - Track attendance efficiently",
    tags: "Python • Django • JavaScript • Tailwind CSS",
    description:
      "A platform designed to track and manage attendance records efficiently, featuring QR code integration.",
    github: "https://github.com/hsbhatra/Attendify",
    live: null,
    delay: 300,
    images: [
      "/assets/images/projects/attendify/home.png",
      "/assets/images/projects/attendify/profile.png",
      "/assets/images/projects/attendify/register.png",
      "/assets/images/projects/attendify/login.png",
    ],
  },
  {
    title: "QuizLok - A quiz game",
    tags: "HTML • CSS • JavaScript • Bootstrap",
    description:
      "A quiz game platform where users can test their knowledge with interactive questions and scoring.",
    github: "https://github.com/hsbhatra/Quiz-Lok",
    live: "https://quiz-lok.netlify.app/",
    delay: 400,
    images: [
      "/assets/images/projects/quiz-lok/home.png",
      "/assets/images/projects/quiz-lok/question.png",
      "/assets/images/projects/quiz-lok/save-highscore.png",
      "/assets/images/projects/quiz-lok/highscores.png",
    ],
  },
  {
    title: "Boom Guess - Guess the correct number and BOOM, instant dopamine!",
    tags: "ReactJS • JavaScript • CSS • LocalStorage",
    description:
      "A responsive number guessing game with Authentication, timer, high score tracking, and protected routes — built using ReactJS.",
    github: "https://github.com/hsbhatra/number-guessing-game",
    live: "https://boom-guess.netlify.app/",
    delay: 500,
    images: [
      "/assets/images/projects/number-guess/boom-guess_1.jpg",
      "/assets/images/projects/number-guess/boom-guess_Login.jpg",
      "/assets/images/projects/number-guess/boom-guess_Signup.jpg",
      "/assets/images/projects/number-guess/boom-guess_ForgotPassword.jpg",
      "/assets/images/projects/number-guess/boom-guess_GamePage.jpg",
    ],
  },
  {
    title: "Calqulix - Scientific Calculator",
    tags: "ReactJS • JavaScript • CSS • mathjs • Local Storage",
    description:
      "A modern web-based scientific calculator supporting advanced functions like trigonometry, logarithms, history tracking, and offline installation.",
    github: "https://github.com/hsbhatra/scientific-calculator", 
    live: "https://calqulix.netlify.app/", 
    delay: 500,
    images: [
      "/assets/images/projects/scientific-calculator/calqulix_1.jpg",
      "/assets/images/projects/scientific-calculator/calqulix_main.jpg",
    ],
  },
  {
    title: "Tempix - Feel the Forecast",
    tags: "ReactJS • JavaScript • CSS • OpenWeatherMap API",
    description:
      "A sleek weather app that provides real-time weather updates, forecasts, and detailed climate information for any location using the OpenWeatherMap API.",
    github: "https://github.com/hsbhatra/weather-app", 
    live: "https://feel-the-forecast.netlify.app/", 
    delay: 500,
    images: [
      "/assets/images/projects/tempix/Tempix_1.jpg",
      "/assets/images/projects/tempix/Tempix_main.jpg",
    ],
  },
];

export default Projects;
