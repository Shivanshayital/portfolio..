import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "../../constants";

const links = [
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "work" },
  { name: "Education", id: "education" },
  { name: "Certifications", id: "certifications" },
  { name: "Contact", id: "contact" },
];

const Footer = () => {
  const handleScroll = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-800 bg-[#07111f] px-[6vw] py-10 text-white">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-2xl font-extrabold text-cyan-300">
          {profile.name}
        </h2>
        <p className="mt-2 text-sm text-slate-400">{profile.role}</p>

        <nav className="mt-7 flex flex-wrap justify-center gap-5">
          {links.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="text-sm font-semibold text-slate-300 transition hover:text-cyan-200"
            >
              {item.name}
            </button>
          ))}
        </nav>

        <div className="mt-7 flex justify-center gap-5">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-2xl text-slate-300 transition hover:text-emerald-200"
          >
            <FaGithub />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-2xl text-slate-300 transition hover:text-cyan-200"
          >
            <FaLinkedin />
          </a>
        </div>

        <p className="mt-8 border-t border-slate-800 pt-6 text-sm text-slate-500">
          Copyright 2026 {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
