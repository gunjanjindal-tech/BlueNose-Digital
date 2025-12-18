// src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion";
import AboutHowWeWork from "../components/About/AboutHowWeWork";
import CTAHome from "../components/CTAHome";
import Timeline from "../components/About/Timeline";
import { Helmet } from "react-helmet";

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

// ANIMATION
const fade = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  return (
  <>
<Helmet>
  <title>About Us | Bluenose Marketing – Branding, SMM & Creative Growth Agency</title>

  <meta
    name="description"
    content="Learn about Bluenose Marketing — a global creative & performance marketing agency helping brands grow through strategy, storytelling, branding, SMM, influencer marketing, and ROI-led execution."
  />

  <meta
    name="keywords"
    content="digital marketing agency, branding agency, social media marketing, influencer marketing, video editing agency, Canada marketing agency, Bluenose Marketing"
  />

  <link rel="canonical" href="https://www.bluenosemarketing.ca/about" />

  {/* OPEN GRAPH */}
  <meta property="og:title" content="About Bluenose Marketing – Creative & Growth Marketing Agency" />
  <meta
    property="og:description"
    content="We build clarity, trust and growth for modern brands through strategy, creativity and performance-led execution. See our story."
  />
  <meta property="og:url" content="https://www.bluenosemarketing.ca/about" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://www.bluenosemarketing.ca/og-about.jpg" />

  {/* TWITTER */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="About Bluenose Marketing – Creative & Growth Marketing Agency" />
  <meta
    name="twitter:description"
    content="Global agency specializing in branding, performance, SMM, influencer marketing & digital storytelling."
  />
  <meta name="twitter:image" content="https://www.bluenosemarketing.ca/og-about.jpg" />

  {/* SCHEMA */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Bluenose Marketing",
      "url": "https://www.bluenosemarketing.ca",
      "logo": "https://www.bluenosemarketing.ca/logo.png",
      "description":
        "A global digital marketing agency offering SMM, branding, influencer marketing, video editing, UGC, and photography services.",
      "founder": {
        "@type": "Person",
        "name": "Founder, Bluenose Marketing"
      },
      "sameAs": [
        "https://www.instagram.com/bluenose.marketing/",
        "https://www.linkedin.com/company/bluenose-marketing"
      ]
    })}
  </script>
</Helmet>


      
      
      {/* PAGE TOP SECTION */}
      <section className="pt-[120px] pb-20 px-6 bg-white w-full">

        {/* EYEBROW */}
        <p className="text-[#0E6388] font-semibold tracking-wide mb-2 text-center">
          → About Us
        </p>

        {/* TITLE */}
        <motion.h1
          variants={fade}
          initial="hidden"
          animate="show"
          className="text-3xl md:text-5xl font-extrabold text-[#063349] text-center leading-snug"
        >
          Grow Brands with 
          <span className="text-[#0E6388]"> Creative Digital Strategies </span>
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          variants={fade}
          initial="hidden"
          animate="show"
          className="max-w-5xl mx-auto mt-4 text-lg md:text-xl text-[#063349]/80 text-center"
        >
         At Bluenose Marketing, Halifax’s leading social marketing agency, we help modern brands achieve clarity, trust, and rapid growth through proven strategy, creative excellence, and ROI-driven execution.

        </motion.p>

        {/* STATS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 max-w-6xl mx-auto mt-14">
          {[
            { value: "7K+", label: "Comments & Interactions" },
            { value: "320%", label: "Average Viewer Growth" },
            { value: "12.3M+", label: " Accounts Reached" },
            { value: "370+ ", label: "Social Posts Published" },
          ].map((s, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl text-white text-center shadow-lg"
              style={{ background: "rgb(14, 99, 136)" }}
            >
              <div className="text-4xl font-extrabold">{s.value}</div>
              <div className="text-white/90 mt-2">{s.label}</div>
            </div>
          ))}
        </div>

        {/* WHO WE ARE */}
        <section className="mt-20">
          <div className="rounded-3xl p-10 md:p-14 bg-white shadow-xl grid md:grid-cols-2 gap-10 md:gap-16 items-center max-w-7xl mx-auto">

            {/* LEFT TEXT */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#063349] mb-6">
               Why Choose         <span className="text-[#0E6388]"> Bluenose? </span> 

              </h2>

              <p className="text-[#063349]/85 leading-relaxed mb-4">
               Bluenose Marketing is a Halifax digital marketing agency specializing in creative branding, performance marketing, and business growth for modern brands in Nova Scotia and beyond.

              </p>

              <p className="text-[#063349]/75 leading-relaxed mb-4">
                Our digital marketing experts blend strategic planning, innovative content creation, and data-driven advertising to help businesses boost online visibility, generate leads, and scale revenue.

              </p>

              <p className="text-[#063349]/75 leading-relaxed">
                From social media marketing and paid advertising to brand identity design and digital storytelling, we deliver integrated digital marketing solutions that drive real results for your business.

              </p>

              {/* MINI STATS */}
<div className="grid grid-cols-2 sm:grid-cols-4 gap-x-12 gap-y-6 mt-8">
  {[
    { v: "10+", t: "Team Members" },
    { v: "12.3M+", t: "Impressions Generated" },
    { v: "50+", t: "Clients" },
  ].map((stat, i) => (
    <div key={i} className="text-center px-4">
      <div className="text-2xl font-extrabold text-[#0E6388]">
        {stat.v}
      </div>
      <div className="text-[#0E6388] text-sm mt-1">
        {stat.t}
      </div>
    </div>
  ))}
</div>

            </div>

            {/* RIGHT IMAGE */}
            <div className="rounded-2xl overflow-hidden shadow-xl max-w-sm mx-auto">
              <img
                src="https://businesspartnermagazine.com/wp-content/uploads/2024/02/Why-Register-a-Company-in-Canada.jpg"
                className="w-full h-full object-cover"
                alt="Our Team"
              />
            </div>

          </div>
        </section>

{/* FOUNDER SECTION */}
<section className="relative mt-16 mb-10 px-0">
  <div className="relative max-w-7xl mx-auto rounded-3xl overflow-hidden bg-[#1175a0] py-12 px-4 md:px-12">

    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-14 items-center rounded-3xl">

      {/* IMAGE */}
      <div className="w-full rounded-3xl overflow-hidden bg-[#1175a0] shadow-xl">
        <img
          src="/founder.png"
          alt="Founder"
          className="w-full h-[340px] sm:h-[400px] object-contain rounded-3xl"
        />
      </div>

      {/* TEXT */}
      <div className="w-full bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-10 rounded-3xl shadow-xl text-white">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          Message from Our Founder
        </h2>

        <p className="mt-4 text-white/90 leading-relaxed">
          The vision for Bluenose Marketing was born from a simple need:
          to build a digital marketing agency that blends creativity with
          undeniable data-driven results.
        </p>

        <p className="mt-4 text-white/85 leading-relaxed">
          We established our first office in Halifax, Canada.
        </p>

        <p className="mt-4 text-white/85 leading-relaxed">
          Our family has since grown into a thriving team of 25+ global digital experts.
        </p>

        <p className="mt-6 font-semibold">
          — Bluenose Digital Marketing, Founder & CEO
        </p>
      </div>

    </div>
  </div>
</section>






        {/* TIMELINE */}
        <Timeline />

        {/* WAVE SVG */}
        <div className="w-full overflow-hidden leading-none -mt-1">
          <svg viewBox="0 0 1440 180" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path
              fill="#1175a0"
              d="
                M0,80 
                C240,140 480,0 720,60 
                C960,120 1200,20 1440,80 
                L1440,180 
                L0,180 
                Z
              "
            ></path>
          </svg>
        </div>

        {/* WHAT WE DO */}
        <section className="relative w-full bg-[#1175a0] pb-20 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto text-center text-white relative z-10">

            <p className="font-semibold tracking-wide mb-2 opacity-90">
              → What We Do
            </p>

            <h2 className="text-3xl md:text-5xl font-extrabold text-[#063349]">
              What We <span className="text-white">Do</span>
            </h2>

            <p className="text-white/80 text-lg max-w-3xl mx-auto mt-4">
              Crafting growth systems for brands through content, design, performance marketing, and digital storytelling.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
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
                  className="rounded-3xl p-10 bg-white/15 backdrop-blur-xl border border-white/20 shadow-xl text-white transition hover:scale-[1.03]"
                >
                  <div className="flex justify-center mb-6">{item.icon}</div>
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <p className="text-white/70 text-sm mt-2 leading-relaxed">
                    High-impact execution tailored for modern brands.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </section>

      {/* EXTRA BLUE COMPONENTS */}
      <AboutHowWeWork />
      <CTAHome />
    </>
  );
}

/*******************************
   TIMELINE COMPONENT
*******************************/
