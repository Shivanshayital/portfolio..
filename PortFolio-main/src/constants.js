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
    title: "Sweet Shop Management System",
    period: "Present",
    description:
      "A full-stack e-commerce and inventory management system built with Test-Driven Development, secure authentication, role-based access, and an admin-focused stock management workflow.",
    image: sweetShopImage,
    tags: ["TypeScript", "Node.js", "React", "PostgreSQL", "JWT", "Jest"],
    features: [
      "Built a full-stack e-commerce system using TDD with comprehensive automated testing using Jest.",
      "Implemented JWT authentication and role-based access control for Admin and User roles.",
      "Developed Express.js and TypeScript REST APIs for inventory, authentication, and purchase operations.",
      "Created React search by name, category, and price range with dynamic inventory displays.",
      "Designed PostgreSQL schemas for users, sweets inventory, and transactions.",
      "Implemented admin dashboard CRUD, restocking, and real-time stock management.",
    ],
    github: "https://github.com/Shivanshayital",
    webapp: "https://github.com/Shivanshayital",
  },
  {
    id: 1,
    title: "AeroLink",
    period: "June 2024 - July 2024",
    description:
      "A MERN stack flight booking web application designed to streamline air travel reservations with secure traveler workflows, airline administration, and responsive user experience.",
    image: aeroLinkImage,
    tags: ["MongoDB", "Express.js", "React", "Node.js"],
    features: [
      "Developed a full-stack flight booking web application using the MERN stack.",
      "Streamlined reservations with a secure, scalable, and user-friendly interface.",
      "Designed features for travelers and airline administrators to support booking, management, and monitoring.",
      "Focused on personalization and performance for a smooth responsive user experience.",
      "Engineered the platform for scalability, future expansion, and growing traffic needs.",
    ],
    github: "https://github.com/Shivanshayital",
    webapp: "https://github.com/Shivanshayital",
  },
  {
    id: 2,
    title: "Team Task Manager",
    period: "Full Stack Project",
    description:
      "A complete full-stack team project and task management application with JWT authentication, role-based access, dashboards, project workflows, and task tracking.",
    image: codeEditorImage,
    tags: ["React", "Vite", "Node.js", "Express.js", "MongoDB", "JWT"],
    features: [
      "Built JWT-based signup and login with bcrypt password hashing and protected frontend routes.",
      "Implemented Admin and Member roles for managing projects, tasks, assignments, and team members.",
      "Created project workflows for creating, editing, deleting, viewing, and assigning members.",
      "Developed task management with priority levels, deadlines, status updates, and assignment tracking.",
      "Designed dashboard summaries for total, pending, in-progress, completed, overdue, recent projects, and recent tasks.",
      "Structured REST APIs across auth, projects, and tasks with MongoDB models for users, projects, and tasks.",
    ],
    github: "https://github.com/Shivanshayital",
    webapp: "https://team-task-manager-production-e214.up.railway.app",
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
