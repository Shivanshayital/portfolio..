import React, { useState } from "react";
import { projects } from "../../constants";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";

const MotionDiv = motion.div;
const MotionArticle = motion.article;

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="work"
      className="relative bg-[#07111f] px-[6vw] py-24 font-sans text-white"
    >
      <div className="mx-auto max-w-7xl">
        <MotionDiv
          className="mx-auto mb-14 max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-emerald-300">
            Selected Work
          </p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Projects</h2>
          <p className="mt-4 text-slate-400">
            Full stack projects focused on authentication, APIs, databases, real-time collaboration, and responsive user experience.
          </p>
        </MotionDiv>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <MotionArticle
              key={project.id}
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex cursor-pointer flex-col overflow-hidden rounded-lg border border-slate-800 bg-slate-900/80 shadow-xl shadow-slate-950/40 transition hover:-translate-y-1 hover:border-cyan-300/60"
            >
              <div className="p-4">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-48 w-full rounded-md object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6 pt-2">
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">
                  {project.description}
                </p>
                <ul className="mt-5 space-y-2">
                  {project.features.slice(0, 2).map((feature) => (
                    <li key={feature} className="flex gap-2 text-sm leading-6 text-slate-300">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(event) => event.stopPropagation()}
                    className="inline-flex items-center gap-2 rounded-md border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-emerald-300 hover:text-emerald-200"
                  >
                    <FaGithub /> GitHub
                  </a>
                  <a
                    href={project.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(event) => event.stopPropagation()}
                    className="inline-flex items-center gap-2 rounded-md bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </MotionArticle>
          ))}
        </div>
      </div>

      {selectedProject && (
        <MotionDiv
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <MotionDiv
            className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-lg border border-slate-700 bg-slate-900 shadow-2xl"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
          >
            <div className="flex justify-end p-4">
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
                className="rounded-md border border-slate-700 p-2 text-slate-300 transition hover:border-cyan-300 hover:text-cyan-200"
              >
                <FaTimes />
              </button>
            </div>

            <div className="grid gap-6 p-6 pt-0 md:grid-cols-[0.9fr_1.1fr]">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                loading="lazy"
                className="h-full min-h-72 w-full rounded-md object-cover"
              />
              <div>
                <h3 className="text-3xl font-extrabold text-white">
                  {selectedProject.title}
                </h3>
                <p className="mt-4 leading-8 text-slate-300">
                  {selectedProject.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-cyan-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-7">
                  <h4 className="font-bold text-slate-100">Key Features</h4>
                  <ul className="mt-3 space-y-3">
                    {selectedProject.features.map((feature) => (
                      <li key={feature} className="flex gap-3 leading-7 text-slate-300">
                        <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-emerald-300" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-slate-800 px-5 py-3 font-semibold text-slate-100 transition hover:bg-slate-700"
                  >
                    <FaGithub /> View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          </MotionDiv>
        </MotionDiv>
      )}
    </section>
  );
};

export default Project;
