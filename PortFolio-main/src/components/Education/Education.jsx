import React from "react";
import { education } from "../../constants";
import { motion } from "framer-motion";

const MotionDiv = motion.div;

const Education = () => {
  return (
    <section
      id="education"
      className="bg-slate-950 px-[6vw] py-24 font-sans text-white"
    >
      <div className="mx-auto max-w-5xl">
        <MotionDiv
          className="mx-auto mb-14 max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-300">
            Academic Background
          </p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Education</h2>
          <p className="mt-4 text-slate-400">
            A concise academic timeline focused on computer science, analytical foundations, and technical growth.
          </p>
        </MotionDiv>

        <div className="relative">
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-cyan-300 via-emerald-300 to-indigo-300 md:left-1/2" />
          <div className="space-y-8">
            {education.map((edu, index) => (
              <MotionDiv
                key={edu.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className={`relative grid gap-6 md:grid-cols-2 ${
                  index % 2 === 0 ? "" : "md:[&>article]:col-start-2"
                }`}
              >
                <div className="absolute left-0 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300 bg-slate-900 md:left-1/2 md:-translate-x-1/2">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="h-7 w-7 rounded-full object-cover"
                  />
                </div>

                <article className="ml-16 rounded-lg border border-slate-800 bg-slate-900/80 p-6 shadow-xl shadow-slate-950/30 md:ml-0">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                      <p className="mt-1 text-slate-300">{edu.school}</p>
                    </div>
                    <span className="rounded-full bg-cyan-300/10 px-3 py-1 text-sm font-semibold text-cyan-200">
                      {edu.date}
                    </span>
                  </div>
                  <p className="mt-4 font-semibold text-emerald-200">
                    Grade: <span className="text-white">{edu.grade}</span>
                  </p>
                  <p className="mt-3 leading-7 text-slate-400">{edu.desc}</p>
                </article>
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
