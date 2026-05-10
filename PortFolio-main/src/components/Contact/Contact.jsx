import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { profile } from "../../constants";

const MotionDiv = motion.div;

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_ihpkdes",
        "template_i4jy8yl",
        form.current,
        "Bu6-33fhklznI1yQf"
      )
      .then(
        () => {
          form.current.reset();
          toast.success("Message sent successfully.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please email me directly.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      )
      .finally(() => setIsSending(false));
  };

  return (
    <section
      id="contact"
      className="bg-slate-950 px-[6vw] py-24 font-sans text-white"
    >
      <ToastContainer />

      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <MotionDiv
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-300">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Let us build something useful.
          </h2>
          <p className="mt-4 leading-8 text-slate-400">
            I am open to internships, full stack development roles, academic collaborations, and project opportunities involving web applications or modern software systems.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-4 rounded-lg border border-slate-800 bg-slate-900/75 p-4 transition hover:border-cyan-300/70"
            >
              <FaEnvelope className="text-cyan-300" />
              <span>{profile.email}</span>
            </a>
            <a
              href={`tel:${profile.phone}`}
              className="flex items-center gap-4 rounded-lg border border-slate-800 bg-slate-900/75 p-4 transition hover:border-cyan-300/70"
            >
              <FaPhone className="text-cyan-300" />
              <span>{profile.phone}</span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-lg border border-slate-800 bg-slate-900/75 p-4 transition hover:border-cyan-300/70"
            >
              <FaLinkedin className="text-cyan-300" />
              <span>linkedin.com/in/shivansh-nayital</span>
            </a>
            <div className="flex items-center gap-4 rounded-lg border border-slate-800 bg-slate-900/75 p-4">
              <FaMapMarkerAlt className="text-cyan-300" />
              <span>{profile.location}</span>
            </div>
          </div>
        </MotionDiv>

        <MotionDiv
          className="rounded-lg border border-slate-800 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/30"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your name"
              required
              className="w-full rounded-md border border-slate-700 bg-slate-950 p-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your email"
              required
              className="w-full rounded-md border border-slate-700 bg-slate-950 p-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full rounded-md border border-slate-700 bg-slate-950 p-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              required
              className="w-full resize-none rounded-md border border-slate-700 bg-slate-950 p-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
            />
            <button
              type="submit"
              disabled={isSending}
              className="rounded-md bg-cyan-400 px-6 py-4 font-bold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </MotionDiv>
      </div>
    </section>
  );
};

export default Contact;
