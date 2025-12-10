// src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion";
import HowWeWork from "../components/HowWeWork";
import CTAHome from "../components/CTAHome";

// ICONS
const icons = {
  smm: (
    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
      <path d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9A4.5 4.5 0 0 1 16.5 21h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3z" />
      <circle cx="12" cy="12" r="3.5" />
    </svg>
  ),
  branding: (
    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
      <path d="M12 2l8 4v6c0 5-3 9-8 10-5-1-8-5-8-10V6l8-4z" />
    </svg>
  ),
  influencer: (
    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
      <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm-7 9v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1" />
    </svg>
  ),
  video: (
    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
      <path d="M15 10l4.553-2.276A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-1.447.894L15 14" />
      <rect x="3" y="7" width="12" height="10" rx="2" />
    </svg>
  ),
  ugc: (
    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="4" />
      <path d="M4 12h2m12 0h2m-8 8v-2m0-12V4" />
    </svg>
  ),
  photo: (
    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="8" cy="10" r="2.5" />
      <path d="M21 15l-3.5-3.5L13 16" />
    </svg>
  ),
};

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  return (
    <>
      {/* PAGE WRAPPER */}
      <section className="pt-[110px] pb-12 md:pb-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">

          {/* EYEBROW */}
          <p className="text-[#0E6388] font-semibold tracking-wide mb-2">
            → About Us
          </p>

          {/* MAIN TITLE */}
          <motion.h1
            variants={fade}
            initial="hidden"
            animate="show"
            className="text-3xl md:text-5xl font-extrabold text-[#063349] leading-[1.3]"
          >
            We Build Brands That Stand Out —
            <span className="text-[#0E6388]"> And Scale Fast</span>
          </motion.h1>

          {/* SUBTEXT */}
          <motion.p
            variants={fade}
            initial="hidden"
            animate="show"
            className="max-w-3xl mx-auto mt-4 text-lg md:text-xl text-[#063349]/80"
          >
            We build clarity, trust, and growth for modern brands through strategy,
            creativity, and ROI-led execution.
          </motion.p>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 max-w-6xl mx-auto mt-12">
            {[
              { value: "120+", label: "Global Clients" },
              { value: "5K+", label: "Campaigns Delivered" },
              { value: "320%", label: "ROI Growth Avg." },
              { value: "200", label: "Team Member" },
            ].map((s, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl text-white"
                style={{ background: "rgb(14, 99, 136)" }}
              >
                <div className="text-4xl font-extrabold">{s.value}</div>
                <div className="text-white/90 mt-2">{s.label}</div>
              </div>
            ))}
          </div>

          {/* WHO WE ARE */}
          <section className="mt-16 md:mt-24">
            <div className="rounded-3xl p-10 md:p-14 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] grid md:grid-cols-2 gap-10 md:gap-16 items-center">

              {/* LEFT */}
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#063349]/85 mb-6">
                  Who We Are
                </h2>

                <p className="text-[#063349]/85 leading-relaxed mb-4">
                  Bluenose Digital is a global creative & performance agency focused on delivering clarity, growth, and brand transformation.
                </p>

                <p className="text-[#063349]/75 leading-relaxed mb-4">
                  Our team blends strategic thinking, world-class execution, and data-backed decisions to help brands scale confidently.
                </p>

                <p className="text-[#063349]/75 leading-relaxed">
                  From social media to performance marketing, brand identity, and storytelling — we build digital systems that work.
                </p>

                {/* Mini stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8">
                  {[
                    { v: "20+", t: "Team Members" },
                    { v: "6+", t: "Countries Served" },
                    { v: "5K+", t: "Campaigns" },
                    { v: "120+", t: "Brands" },
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-extrabold text-[#0E6388]">{stat.v}</div>
                      <div className="text-[#0E6388] text-sm mt-1">{stat.t}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="rounded-2xl overflow-hidden shadow-lg max-w-sm mx-auto">
                <img
                  src="https://businesspartnermagazine.com/wp-content/uploads/2024/02/Why-Register-a-Company-in-Canada.jpg"
                  className="w-full h-full object-cover"
                  alt="Our Team"
                />
              </div>

            </div>
          </section>

          {/* FOUNDER SECTION */}
          <section className="mt-16 md:mt-24 mb-4">
            <div className="rounded-3xl p-10 md:p-14 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] grid md:grid-cols-2 gap-10 md:gap-16 items-center">

              {/* IMAGE */}
              <div className="rounded-2xl overflow-hidden shadow-lg max-h-[480px]">
                <img src="/founder.png" className="w-full h-full object-cover" alt="Founder" />
              </div>

              {/* TEXT */}
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#0E6388]">Message from Our Founder</h2>

                <p className="mt-4 text-[#063349]/85">
                  The vision for Bluenose Marketing was born from a simple need: to build a digital marketing agency that effortlessly blends creativity with undeniable data-driven results.
                </p>

                <p className="mt-4 text-[#063349]/85">
                  We established our first office in Halifax, Canada, with the goal of bringing brands closer to their audiences through impactful, solution-driven strategies.
                </p>

                <p className="mt-4 text-[#063349]/85">
                  Our family has since grown into a thriving team of 25+ global digital experts.
                </p>

                <p className="mt-4 text-[#063349]/85 font-semibold">
                  — Bluenose Digital Marketing, Founder & CEO
                </p>
              </div>

            </div>
          </section>

          {/* TIMELINE */}
          <Timeline />

          {/* WHAT WE DO */}
          <section className="mt-16 md:mt-24 text-center ">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#063349]">
              What We <span className="text-[#0E6388]">Do</span>
            </h2>

            <p className="text-[#063349]/85 mt-4 max-w-3xl mx-auto">
              Crafting growth systems through content, design, performance & storytelling.
            </p>

            <div className="grid md:grid-cols-3 gap-10 mt-14 ">
              {[
                { name: "SMM", icon: icons.smm },
                { name: "Branding", icon: icons.branding },
                { name: "Influencer Marketing", icon: icons.influencer },
                { name: "Video Editing", icon: icons.video },
                { name: "UGC", icon: icons.ugc },
                { name: "Photography", icon: icons.photo },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-10 rounded-3xl text-center shadow-[0_12px_35px_rgba(0,0,0,0.18)] hover:scale-[1.03] transition duration-300 text-white"
                  style={{ background: "rgb(14, 99, 136)" }}
                >
                  <div className="flex justify-center mb-6">{item.icon}</div>
                  <div className="text-xl font-bold">{item.name}</div>
                  <p className="text-white/85 text-sm mt-2">
                    High-impact execution tailored for modern brands.
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>

      {/* BLUE COMPONENTS */}
      <HowWeWork />
      <CTAHome />
    </>
  );
}

/*******************************
   TIMELINE COMPONENT
*******************************/

function Timeline() {
  const events = [
    {
      date: "September 2024",
      title: "The vision was born",
      text: "To build a digital marketing agency that blends creativity with data-driven results.",
      side: "left",
    },
    {
      date: "December 2024",
      title: "First Office: Halifax Launch",
      text: "We opened our first office in Halifax, Canada, bringing brands closer with impactful strategies.",
      side: "right",
    },
    {
      date: "February 2025",
      title: "Team Growth: 20+ Experts",
      text: "Our team grew into 20+ digital experts — strategists, designers & performance marketers.",
      side: "left",
    },
    {
      date: "September 2025",
      title: "India Launch: Global Expansion",
      text: "We expanded to India to serve brands worldwide with scalable digital solutions.",
      side: "right",
    },
  ];

  const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-20 md:py-24 bg-white">
      <h2 className="text-center text-3xl md:text-5xl font-extrabold text-[#063349] mb-16">
        Our <span className="text-[#0E6388]">Journey</span>
      </h2>

      <div className="relative max-w-6xl mx-auto px-4">
        
        {/* Center Vertical Line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[3px] bg-[#D9E7F1]"></div>

        <div className="space-y-16 md:space-y-6">
          {events.map((e, i) => (
            <motion.div
              key={i}
              variants={e.side === "left" ? fadeLeft : fadeRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className={`
                relative flex 
                ${e.side === "left" ? "md:justify-start" : "md:justify-end"} 
                md:w-full
              `}
            >
              {/* DOT */}
              <div
                className="absolute left-1/2 -translate-x-1/2
                w-4 h-4 rounded-full bg-[#0E6388] shadow-[0_0_12px_#0E6388]"
                style={{ top: "50%" }}
              ></div>

              {/* CARD */}
              <div
                className="w-full md:w-[46%] bg-[#0E6388] text-white p-6 md:p-8 
                rounded-2xl shadow-lg"
              >
                <p className="text-lg font-extrabold">{e.date}</p>
                <p className="font-semibold mt-1">{e.title}</p>
                <p className="text-white/90 mt-3 leading-relaxed text-sm">
                  {e.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
