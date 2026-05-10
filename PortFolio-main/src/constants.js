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
  role: "Computer Science Engineering Student | Full Stack Developer",
  location: "Mohali, India",
  phone: "+91 78762-39463",
  email: "shivanshnayitall@gmail.com",
  linkedin: "https://www.linkedin.com/in/shivansh-nayital",
  github: "https://github.com/",
};

export const aboutText =
  "I am a Computer Science Engineering student passionate about full stack development, MERN stack applications, AI-driven projects, and practical problem-solving. I enjoy building scalable web applications, designing clean software systems, and exploring modern technologies that turn ideas into reliable user experiences. My focus is on writing maintainable code, learning quickly, and contributing to products that solve real problems.";

export const highlights = [
  "MERN Stack Development",
  "AI and Software Projects",
  "REST APIs and Authentication",
  "Scalable Web Applications",
];

export const SkillsInfo = [
  {
    title: "Languages",
    skills: [
      { name: "C++", logo: cppLogo },
      { name: "Python", logo: pythonLogo },
      { name: "Java", logo: javaLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
      { name: "SQL", logo: mysqlLogo },
    ],
  },
  {
    title: "Frameworks & Tools",
    skills: [
      { name: "React", logo: reactjsLogo },
      { name: "Node.js", logo: nodejsLogo },
      { name: "Express.js", logo: expressjsLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "PostgreSQL", logo: postgreLogo },
      { name: "TensorFlow" },
      { name: "Arduino" },
    ],
  },
  {
    title: "Developer Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "AWS" },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Canva" },
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Team Collaboration" },
      { name: "Leadership" },
      { name: "Problem-Solving" },
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
    description:
      "A full-stack e-commerce and inventory management platform built with TDD, JWT authentication, role-based access, REST APIs, PostgreSQL schema design, search functionality, and an admin dashboard for CRUD operations.",
    image: sweetShopImage,
    tags: ["TypeScript", "Node.js", "React", "PostgreSQL", "JWT", "Jest"],
    github: "https://github.com/",
    webapp: "#",
  },
  {
    id: 1,
    title: "AeroLink",
    description:
      "A secure and scalable MERN flight booking web application with traveler workflows, airline administrator features, responsive UI, and an architecture designed for future product growth.",
    image: aeroLinkImage,
    tags: ["MongoDB", "Express.js", "React", "Node.js"],
    github: "https://github.com/",
    webapp: "#",
  },
  {
    id: 2,
    title: "Online Code Editor",
    description:
      "A collaborative online code editor with real-time synchronization through WebSockets, Monaco Editor integration, authentication support, project saving, and multi-language syntax highlighting.",
    image: codeEditorImage,
    tags: ["React", "Monaco Editor", "Node.js", "WebSockets"],
    github: "https://github.com/",
    webapp: "#",
  },
];

export const certifications = [
  "Databases and SQL for Data Science - IBM",
  "Introduction to Databases - META",
  "React Native - META",
  "Cybersecurity Attack and Defense Fundamentals - EC Council",
];
