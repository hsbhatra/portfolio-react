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
        "/assets/images/projects/attendify/AboutPage.png",
        "/assets/images/projects/attendify/AllAttendanceRecords.png",
        "/assets/images/projects/attendify/DynamicQrCode.png",
        "/assets/images/projects/attendify/HomePage.png",
        "/assets/images/projects/attendify/LeaveApplicationForm.png",
        "/assets/images/projects/attendify/LogIn.png",
        "/assets/images/projects/attendify/ScanningQrForAttendance_InvalidQr.png",
        "/assets/images/projects/attendify/ScanningQrForAttendance_ValidQr.png",
        "/assets/images/projects/attendify/ServicePage.png",
        "/assets/images/projects/attendify/SignUp.png",
        "/assets/images/projects/attendify/UserAttendanceRecords.png",
        "/assets/images/projects/attendify/UserProfile.png",
      ],
  },
  {
    title: "DevGluck — Full-Stack Social Media App",
    tags: "MongoDB • Express.js • React.js • Node.js • Socket.io • JWT • Bcrypt",
    description:
      "A full-featured social platform with real-time messaging and secure authentication. Includes user feed, profiles, posts (CRUD, like, comment), and chat via WebSocket.",
    github: "https://github.com/hsbhatra/DevGluck–Social-Media-App",
    live: null,
    delay: 400,
      images: [
        "/assets/images/projects/devgluck/SignupPage.png",
        "/assets/images/projects/devgluck/LoginPage.png",
        "/assets/images/projects/devgluck/HomePage.png",
        "/assets/images/projects/devgluck/ChatPage.png",
        "/assets/images/projects/devgluck/ProfilePage.png",
        "/assets/images/projects/devgluck/EditProfilePop-up.png",
        "/assets/images/projects/devgluck/AddNewPost.png",
        "/assets/images/projects/devgluck/SavedPostsPage.png",
      ],
  },
  {
    title: "URL Shrinker — Shorten links efficiently",
    tags: "Node.js • Express.js • MongoDB",
    description:
      "A scalable URL shortening service supporting custom slugs, unique slug generation, and MongoDB-based persistence with RESTful API design.",
    github: "https://github.com/hsbhatra/url-shrinker-backend",
    live: null,
    delay: 500,
    images: [
      "/assets/images/projects/url-shrinker/home.png",
      "/assets/images/projects/url-shrinker/shorten.png",
    ],
  },
  {
    title: "Pixonic — Mini Photo Editor Web App",
    tags: "HTML • CSS • JavaScript",
    description:
      "A lightweight photo editor allowing users to upload, preview, and apply effects to images in real time using custom canvas and dynamic DOM manipulation.",
    github: "https://github.com/hsbhatra/pixonic",
    live: "https://pixonic.netlify.app",
    delay: 700,
    images: [
      "/assets/images/projects/pixonic/pixonic.png",
    ],
  },
  {
    title: "Mario-2D — Mario-style platformer",
    tags: "HTML • CSS • JavaScript • Phaser.js • Cursor AI",
    description:
      "A Mario-style 2D platformer with physics, collision detection, and player controls, built using Phaser.js and AI-enhanced development via Cursor AI.",
    github: "https://github.com/hsbhatra/Mario2D",
    live: "https://mario-2d.netlify.app/",
    delay: 600,
      images: [
        "/assets/images/projects/mario-2d/Mario2D_home.png",
        "/assets/images/projects/mario-2d/Mario2D_PlayScreen.png",
        "/assets/images/projects/mario-2d/Mario2D_PlayScreen_LevelComplete.png",
        "/assets/images/projects/mario-2d/Mario2D_PlayScreen_GameOver.png",
        // "/assets/images/projects/mario-2d/Mario2D.mp4",
      ],
  },
  // {
  //   title: "QuizLok - A quiz game",
  //   tags: "HTML • CSS • JavaScript • Bootstrap",
  //   description:
  //     "A quiz game platform where users can test their knowledge with interactive questions and scoring.",
  //   github: "https://github.com/hsbhatra/Quiz-Lok",
  //   live: "https://quiz-lok.netlify.app/",
  //   delay: 400,
  //   images: [
  //     "/assets/images/projects/quiz-lok/home.png",
  //     "/assets/images/projects/quiz-lok/question.png",
  //     "/assets/images/projects/quiz-lok/save-highscore.png",
  //     "/assets/images/projects/quiz-lok/highscores.png",
  //   ],
  // },
  // {
  //   title: "Boom Guess - Guess the correct number and BOOM, instant dopamine!",
  //   tags: "ReactJS • JavaScript • CSS • LocalStorage",
  //   description:
  //     "A responsive number guessing game with Authentication, timer, high score tracking, and protected routes — built using ReactJS.",
  //   github: "https://github.com/hsbhatra/number-guessing-game",
  //   live: "https://boom-guess.netlify.app/",
  //   delay: 500,
  //   images: [
  //     "/assets/images/projects/number-guess/boom-guess_1.jpg",
  //     "/assets/images/projects/number-guess/boom-guess_Login.jpg",
  //     "/assets/images/projects/number-guess/boom-guess_Signup.jpg",
  //     "/assets/images/projects/number-guess/boom-guess_ForgotPassword.jpg",
  //     "/assets/images/projects/number-guess/boom-guess_GamePage.jpg",
  //   ],
  // },
  // {
  //   title: "Calqulix - Scientific Calculator",
  //   tags: "ReactJS • JavaScript • CSS • mathjs • Local Storage",
  //   description:
  //     "A modern web-based scientific calculator supporting advanced functions like trigonometry, logarithms, history tracking, and offline installation.",
  //   github: "https://github.com/hsbhatra/scientific-calculator",
  //   live: "https://calqulix.netlify.app/",
  //   delay: 500,
  //   images: [
  //     "/assets/images/projects/scientific-calculator/calqulix_1.jpg",
  //     "/assets/images/projects/scientific-calculator/calqulix_main.jpg",
  //   ],
  // },
  // {
  //   title: "Tempix - Feel the Forecast",
  //   tags: "ReactJS • JavaScript • CSS • OpenWeatherMap API",
  //   description:
  //     "A sleek weather app that provides real-time weather updates, forecasts, and detailed climate information for any location using the OpenWeatherMap API.",
  //   github: "https://github.com/hsbhatra/weather-app",
  //   live: "https://feel-the-forecast.netlify.app/",
  //   delay: 500,
  //   images: [
  //     "/assets/images/projects/tempix/Tempix_1.jpg",
  //     "/assets/images/projects/tempix/Tempix_main.jpg",
  //   ],
  // },
];

export default projects;