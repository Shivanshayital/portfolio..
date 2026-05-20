import React from "react";
import { motion } from "framer-motion";
import { FaFlask, FaLaptopCode, FaUsers } from "react-icons/fa";
import { experiences } from "../../constants";

const MotionDiv = motion.div;
const icons = [FaLaptopCode, FaUsers, FaFlask];

const Experience = () => {
  return (
    <section
      id="experience"
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
            Experience
          </p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Project-Based Experience
          </h2>
          <p className="mt-4 text-slate-400">
            Practical academic, collaboration, hackathon, and research work that maps directly to fresher frontend and full stack roles.
          </p>
        </MotionDiv>

        <div className="grid gap-5 lg:grid-cols-3">
          {experiences.map((item, index) => {
            const Icon = icons[index] || FaLaptopCode;

            return (
              <MotionDiv
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group rounded-lg border border-slate-800 bg-[#07111f] p-6 shadow-xl shadow-slate-950/30 transition hover:-translate-y-1 hover:border-cyan-300/60"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-cyan-300/10 text-xl text-cyan-200 transition group-hover:bg-cyan-300 group-hover:text-slate-950">
                    <Icon />
                  </span>
                  <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-semibold text-slate-300">
                    {item.period}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-400">{item.description}</p>

                <ul className="mt-5 space-y-3">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-6 text-slate-300">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-300" />
                      {point}
                    </li>
                  ))}
                </ul>
              </MotionDiv>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
