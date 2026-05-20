import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "../../constants";

const menuItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      const current = [...menuItems].reverse().find((item) => {
        const section = document.getElementById(item.id);
        return section && section.offsetTop <= window.scrollY + 120;
      });
      if (current) setActiveSection(current.id);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setIsOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 z-50 w-full px-[6vw] transition duration-300 ${
        isScrolled
          ? "border-b border-slate-800 bg-slate-950/85 shadow-lg backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between py-4 text-white">
        <button
          onClick={() => handleMenuItemClick("about")}
          className="text-left text-lg font-extrabold"
        >
          <span className="text-cyan-300">&lt;</span>
          Shivansh
          <span className="text-cyan-300"> /&gt;</span>
        </button>

        <ul className="hidden items-center gap-5 text-sm font-semibold text-slate-300 lg:flex">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleMenuItemClick(item.id)}
                className={`transition hover:text-cyan-200 ${
                  activeSection === item.id ? "text-cyan-300" : ""
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-slate-300 transition hover:text-emerald-200"
          >
            <FaGithub size={22} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-slate-300 transition hover:text-cyan-200"
          >
            <FaLinkedin size={22} />
          </a>
        </div>

        <button
          className="text-3xl text-cyan-300 lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute left-1/2 top-16 w-[88%] -translate-x-1/2 rounded-lg border border-slate-800 bg-slate-950/95 p-4 shadow-xl backdrop-blur lg:hidden">
          <ul className="flex flex-col gap-2 text-center text-slate-300">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`w-full rounded-md px-4 py-3 font-semibold transition hover:bg-slate-900 hover:text-cyan-200 ${
                    activeSection === item.id ? "text-cyan-300" : ""
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
