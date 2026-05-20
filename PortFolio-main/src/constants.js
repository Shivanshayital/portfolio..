import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postgreLogo from "./assets/tech_logo/postgre.png";

import culogo from "./assets/education_logo/cu.png";
import dolphin from "./assets/education_logo/dolphin.png";
import dav from "./assets/education_logo/dav.png";

import sweetShopImage from "./assets/work_logo/project1.png";
import aeroLinkImage from "./assets/work_logo/project2.png";
import codeEditorImage from "./assets/work_logo/project3.png";
import projectFourImage from "./assets/work_logo/project4.png";

export const profile = {
  name: "Shivansh Nayital",
  role: "Frontend & Full Stack Developer",
  headline:
    "Frontend & Full Stack Developer specializing in React, JavaScript, and modern web applications.",
  location: "Mohali, India",
  phone: "+91 78762-39463",
  email: "shivanshnayitall@gmail.com",
  linkedin: "https://www.linkedin.com/in/shivansh-nayital",
  github: "https://github.com/Shivanshayital",
  resume: "/resume.pdf",
};

export const aboutText =
  "I am a Computer Science Engineering student building recruiter-ready frontend and full stack projects with React, JavaScript, PHP, Flask, databases, and clean UI engineering. I enjoy turning academic and research ideas into usable products with responsive interfaces, reliable APIs, and practical problem-solving.";

export const highlights = [
  "React Frontend Development",
  "Full Stack Web Apps",
  "REST APIs and Databases",
  "Research-Based Problem Solving",
];

export const SkillsInfo = [
  {
    title: "Frontend",
    summary: "Modern, responsive interfaces with reusable components.",
    skills: [
      { name: "React", logo: reactjsLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
      { name: "Tailwind CSS" },
      { name: "HTML5" },
      { name: "CSS3" },
    ],
  },
  {
    title: "Backend",
    summary: "APIs, server-side logic, authentication, and integrations.",
    skills: [
      { name: "Node.js", logo: nodejsLogo },
      { name: "Express.js", logo: expressjsLogo },
      { name: "Flask", logo: pythonLogo },
      { name: "PHP" },
      { name: "REST APIs" },
      { name: "JWT Auth" },
    ],
  },
  {
    title: "Database",
    summary: "Relational and document database design for app workflows.",
    skills: [
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "PostgreSQL", logo: postgreLogo },
      { name: "SQL", logo: mysqlLogo },
    ],
  },
  {
    title: "Tools",
    summary: "Daily developer workflow, testing, deployment, and collaboration.",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman" },
      { name: "Vercel" },
      { name: "Figma" },
    ],
  },
  {
    title: "Programming Languages",
    summary: "Core problem-solving and implementation languages.",
    skills: [
      { name: "C++", logo: cppLogo },
      { name: "Python", logo: pythonLogo },
      { name: "Java", logo: javaLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "PHP" },
      { name: "SQL", logo: mysqlLogo },
    ],
  },
];

export const education = [
  {
    id: 0,
    img: culogo,
    school: "Chandigarh University, Mohali",
    date: "Aug 2022 - Present",
    grade: "In Progress",
    desc: "Pursuing core computer science coursework with a focus on programming, full stack web development, databases, software engineering, and modern application development.",
    degree: "Bachelor of Engineering in Computer Science",
  },
  {
    id: 1,
    img: dolphin,
    school: "Government Public School Palampur, H.P",
    date: "2021",
    grade: "61.2%",
    desc: "Completed 10+2 in the Non-Medical stream, building a foundation in mathematics, analytical thinking, and science fundamentals.",
    degree: "10+2 Non-Medical",
  },
  {
    id: 2,
    img: dav,
    school: "Priyadarshni Sr Sen Sec School Palampur, H.P",
    date: "2019",
    grade: "83%",
    desc: "Completed Class 10 with strong academic performance and a foundation for continued study in science and technology.",
    degree: "10th",
  },
];

export const projects = [
  {
    id: 0,
    title: "AI Drug Discovery Project",
    description:
      "Research-oriented machine learning project exploring drug discovery workflows, molecular data analysis, and prediction-focused experimentation for healthcare problem solving.",
    image: sweetShopImage,
    tags: ["Python", "Machine Learning", "Data Analysis", "Research"],
    features: [
      "Built a structured workflow for analyzing drug-related datasets.",
      "Applied model experimentation for prediction and decision support.",
      "Documented research findings with a problem-solving-first approach.",
    ],
    github: "https://github.com/Shivanshayital",
    webapp: "https://github.com/Shivanshayital",
  },
  {
    id: 1,
    title: "Team Task Manager",
    description:
      "Collaborative task management web app designed for team workflows, task ownership, progress tracking, and clean dashboard-style project organization.",
    image: aeroLinkImage,
    tags: ["React", "Node.js", "Express.js", "MongoDB", "REST API"],
    features: [
      "Created task boards for assignment, status updates, and priority tracking.",
      "Designed responsive interfaces for repeated day-to-day project use.",
      "Structured backend APIs for team, task, and collaboration workflows.",
    ],
    github: "https://github.com/Shivanshayital",
    webapp: "https://github.com/Shivanshayital",
  },
  {
    id: 2,
    title: "PAN Card Fraud Detection System",
    description:
      "Fraud detection system focused on identifying suspicious PAN card records through validation logic, data checks, and web-based review workflows.",
    image: codeEditorImage,
    tags: ["Python", "Flask", "Machine Learning", "MySQL", "HTML/CSS"],
    features: [
      "Implemented validation checks for identity-data consistency.",
      "Built a Flask-backed workflow for reviewing fraud indicators.",
      "Focused on explainable outputs for practical decision making.",
    ],
    github: "https://github.com/Shivanshayital",
    webapp: "https://github.com/Shivanshayital",
  },
  {
    id: 3,
    title: "Sweet Shop Management System",
    description:
      "Full-stack inventory and sales management platform with product CRUD, search, authentication, and admin workflows for a small business use case.",
    image: projectFourImage,
    tags: ["React", "Node.js", "PostgreSQL", "JWT", "REST API"],
    features: [
      "Designed admin-friendly product and inventory management screens.",
      "Added authentication and protected backend routes.",
      "Modeled database tables for orders, products, and stock movement.",
    ],
    github: "https://github.com/Shivanshayital",
    webapp: "https://github.com/Shivanshayital",
  },
  {
    id: 4,
    title: "Online Code Editor",
    description:
      "Responsive web-based coding workspace concept with syntax-focused UI, project saving flow, and collaboration-ready architecture.",
    image: codeEditorImage,
    tags: ["React", "JavaScript", "Node.js", "WebSockets"],
    features: [
      "Created editor-first UI for writing and organizing code snippets.",
      "Planned real-time collaboration through socket-based communication.",
      "Focused on responsive layouts for desktop and tablet usage.",
    ],
    github: "https://github.com/Shivanshayital",
    webapp: "https://github.com/Shivanshayital",
  },
];

export const experiences = [
  {
    title: "Academic Projects",
    period: "2022 - Present",
    description:
      "Built full stack and research-based projects through computer science coursework, converting problem statements into working web applications and documented technical solutions.",
    points: [
      "Worked across frontend UI, backend APIs, database design, and deployment-ready project structure.",
      "Practiced clean component design, responsive layouts, and practical feature planning.",
    ],
  },
  {
    title: "Team Collaboration Experience",
    period: "Project Teams",
    description:
      "Collaborated in student project teams to divide work, review implementation choices, debug issues, and present working outcomes.",
    points: [
      "Coordinated tasks around frontend screens, API flows, documentation, and testing.",
      "Used GitHub-style workflows and clear communication to keep project progress organized.",
    ],
  },
  {
    title: "Hackathons & Research Work",
    period: "Problem Solving",
    description:
      "Explored AI, fraud detection, and practical software ideas with a research mindset focused on measurable problems and user-facing outcomes.",
    points: [
      "Investigated datasets, validation rules, and model behavior for decision-support projects.",
      "Presented solutions with emphasis on clarity, feasibility, and real-world usefulness.",
    ],
  },
];

export const certifications = [
  "Databases and SQL for Data Science - IBM",
  "Introduction to Databases - META",
  "React Native - META",
  "Cybersecurity Attack and Defense Fundamentals - EC Council",
];
