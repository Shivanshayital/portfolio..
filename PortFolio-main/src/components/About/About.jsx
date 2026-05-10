import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { aboutText, highlights, profile } from "../../constants";
import profileImage from "../../assets/MYPHOTO.jpg";


const MotionDiv = motion.div;

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden px-[6vw] pt-28 pb-20 font-sans text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(45,212,191,0.16),transparent_28%),radial-gradient(circle_at_85%_10%,rgba(99,102,241,0.18),transparent_26%),linear-gradient(135deg,#06111f_0%,#081827_48%,#0f172a_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:36px_36px]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col-reverse items-center justify-between gap-12 lg:flex-row">
        <MotionDiv
          className="w-full text-center lg:w-[58%] lg:text-left"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200">
            {profile.location}
          </p>
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Hi, I am <span className="text-cyan-300">{profile.name}</span>
          </h1>
          <p className="mt-5 text-xl font-semibold text-slate-200 sm:text-2xl">
            <Typewriter
              words={[
                "Full Stack Developer",
                "MERN Stack Builder",
                "Computer Science Engineering Student",
                "AI Project Enthusiast",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={35}
              delaySpeed={1400}
            />
          </p>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            {aboutText}
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">
            {highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-600 bg-slate-900/70 px-4 py-2 text-sm font-medium text-slate-200"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-md bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              <FaEnvelope /> Contact Me
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-slate-500 px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-slate-500 px-5 py-3 font-semibold text-slate-100 transition hover:border-emerald-300 hover:text-emerald-200"
            >
              <FaGithub /> GitHub
            </a>
          </div>

          <div className="mt-8 grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
            <span className="inline-flex items-center justify-center gap-2 lg:justify-start">
              <FaMapMarkerAlt className="text-cyan-300" /> {profile.location}
            </span>
            <a className="inline-flex items-center justify-center gap-2 hover:text-cyan-200 lg:justify-start" href={`tel:${profile.phone}`}>
              <FaPhone className="text-cyan-300" /> {profile.phone}
            </a>
            <a className="inline-flex items-center justify-center gap-2 hover:text-cyan-200 lg:justify-start" href={`mailto:${profile.email}`}>
              <FaEnvelope className="text-cyan-300" /> {profile.email}
            </a>
          </div>
        </MotionDiv>

        <MotionDiv
          className="w-full max-w-sm lg:w-[36%]"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} scale={1.02}>
            <div className="rounded-lg border border-slate-700 bg-slate-900/70 p-4 shadow-2xl shadow-cyan-950/30 backdrop-blur">
              <img
                src={profileImage}
                alt={profile.name}
                className="aspect-square w-full rounded-md object-cover"
              />
              <div className="mt-4 rounded-md bg-slate-950/70 p-4 text-left">
                <p className="text-sm font-semibold text-cyan-300">{profile.role}</p>
                <p className="mt-2 text-sm text-slate-400">
                  Open to full stack development internships, collaborative projects, and software engineering opportunities.
                </p>
              </div>
            </div>
          </Tilt>
        </MotionDiv>
      </div>
    </section>
  );
};

export default About;
