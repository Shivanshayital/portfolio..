import React from "react";
import { SkillsInfo } from "../../constants";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";

const MotionDiv = motion.div;

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-slate-950 px-[6vw] py-24 font-sans text-white"
    >
      <div className="mx-auto max-w-7xl">
        <MotionDiv
          className="mx-auto mb-14 max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-300">
            Technical Stack
          </p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Skills</h2>
          <p className="mt-4 text-slate-400">
            A recruiter-friendly snapshot of the languages, frameworks, tools, and collaboration strengths I use to build production-minded applications.
          </p>
        </MotionDiv>

        <div className="grid gap-5 md:grid-cols-2">
          {SkillsInfo.map((category, index) => (
            <MotionDiv
              key={category.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.25 }}
              className="rounded-lg border border-slate-800 bg-slate-900/75 p-6 shadow-xl shadow-slate-950/30"
            >
              <h3 className="text-xl font-bold text-slate-100">{category.title}</h3>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex min-h-24 flex-col items-center justify-center rounded-md border border-slate-700 bg-slate-950/60 px-3 py-4 text-center transition hover:border-cyan-300/70 hover:bg-slate-900"
                  >
                    <div className="flex h-10 w-10 items-center justify-center">
                      {skill.logo ? (
                        <img
                          src={skill.logo}
                          alt={`${skill.name} logo`}
                          className="max-h-full max-w-full object-contain"
                        />
                      ) : (
                        <FaCode className="text-2xl text-cyan-300" />
                      )}
                    </div>
                    <span className="mt-3 text-sm font-semibold text-slate-200">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
