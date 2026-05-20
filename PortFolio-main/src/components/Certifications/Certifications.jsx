import React from "react";
import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";
import { certifications } from "../../constants";

const MotionDiv = motion.div;
const MotionArticle = motion.article;

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="bg-[#07111f] px-[6vw] py-24 font-sans text-white"
    >
      <div className="mx-auto max-w-6xl">
        <MotionDiv
          className="mx-auto mb-12 max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-emerald-300">
            Credentials
          </p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Certifications
          </h2>
          <p className="mt-4 text-slate-400">
            Verified learning across databases, React Native, and cybersecurity fundamentals.
          </p>
        </MotionDiv>

        <div className="grid gap-4 md:grid-cols-2">
          {certifications.map((certification, index) => (
            <MotionArticle
              key={certification.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="flex items-start gap-4 rounded-lg border border-slate-800 bg-slate-900/80 p-5 shadow-lg shadow-slate-950/30"
            >
              <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-emerald-300/10 text-emerald-200">
                <FaAward />
              </span>
              <div>
                <h3 className="text-lg font-bold text-white">{certification.title}</h3>
                <p className="mt-2 text-sm text-slate-400">
                  {certification.description}
                </p>
              </div>
            </MotionArticle>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
