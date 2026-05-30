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
import codeEditorImage from "./assets/work_logo/project3.png";

export const profile = {
  name: "Shivansh Nayital",
  role: "Full-Stack Developer",
  headline:
    "Full-Stack Developer specializing in React, JavaScript, and modern web applications.",
  location: "Mohali, India",
  phone: "+91 78762-39463",
  email: "shivanshnayitall@gmail.com",
  linkedin: "https://www.linkedin.com/in/shivansh-nayital",
  github: "https://github.com/Shivanshayital",
  resume: "/Shivansh_Nayital_Resume.pdf",
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
    date: "Aug 2022 – Jun 2026",
    grade: "CGPA: 6.5",
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
    title: "OneAtlas AI Pipeline",
    period: "AI Orchestration",
    description:
      "Built a multi-provider AI orchestration pipeline capable of routing requests across multiple AI models and services. Implemented real-time stage streaming using Server-Sent Events (SSE) for live workflow monitoring and execution tracking.",
    image: sweetShopImage,
    tags: ["Next.js 15", "TypeScript", "Vercel", "SSE", "AI APIs"],
    features: [
      "Built a multi-provider AI orchestration pipeline capable of routing requests across multiple AI models and services.",
      "Implemented real-time stage streaming using Server-Sent Events (SSE) for live workflow monitoring and execution tracking.",
      "Designed modular validation and self-repair architecture to improve reliability and AI workflow stability.",
    ],
    github: "https://github.com/Shivanshayital/oneatlas-ai-pipeline",
    webapp: "https://oneatlas-ai-pipeline.vercel.app/",
  },
  {
    id: 1,
    title: "AI App Compiler System",
    period: "LLM-Powered Software Generation",
    description:
      "Developed an AI-powered compiler system that converts natural language application requirements into structured executable project configurations.",
    image: codeEditorImage,
    tags: ["Next.js", "TypeScript", "AI APIs", "JSON Validation"],
    features: [
      "Developed an AI-powered compiler system that converts natural language requirements into structured executable project configurations.",
      "Implemented automated validation and self-repair logic with intelligent parsing.",
      "Designed JSON validation pipelines for scalable AI-driven software generation.",
    ],
    github: "https://github.com/Shivanshayital/Customer-Relationship-Management",
    webapp: "https://frontend-ten-lemon-20.vercel.app/",
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
  {
    title: "Databases and SQL for Data Science – IBM",
    description:
      "Covers SQL querying, relational databases, and data analysis using real-world datasets.",
  },
  {
    title: "Introduction to Databases – META",
    description:
      "Covers database design, data modeling, and foundational concepts for modern applications.",
  },
  {
    title: "React Native – META",
    description:
      "Covers building cross-platform mobile applications using React Native and JavaScript.",
  },
  {
    title: "Cybersecurity Attack and Defense Fundamentals – EC Council",
    description:
      "Covers core concepts of ethical hacking, threat analysis, and defense strategies.",
  },
];
