// src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion";
import CoreValues from "../components/CoreValues.jsx";
import CTASection from "../components/CTASection.jsx";
import { Helmet } from "react-helmet";

export default function About() {
  const fade = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const hoverEffect = {
    scale: 1.07,
    y: -8,
    rotateX: 3,
    rotateY: -3,
    boxShadow: "0 28px 55px rgba(0,145,255,0.45)",
    transition: { duration: 0.45 },
  };

  return (
    <>
    <Helmet>

  <title>About Bluenose Digital | Branding, SMM & Creative Growth Studio</title>

  <meta 
    name="description" 
    content="Bluenose Digital is a creative-first marketing agency helping brands scale through storytelling, content, branding & ROI-driven digital execution." 
  />

  <meta 
    name="keywords" 
    content="about digital marketing agency, bluenose digital, creative branding team, social media marketing experts, content agency, brand growth agency" 
  />

  {/* Open Graph (For WhatsApp / Instagram / LinkedIn Preview) */}
  <meta property="og:title" content="About Bluenose Digital | Creative Growth Focused Agency" />
  <meta property="og:description" content="Data-driven strategy, storytelling and brand building — built with execution, clarity & creativity." />
  <meta property="og:image" content="/about/about-og.jpg" />
  <meta property="og:url" content="https://bluenosedigital.com/about" />
  <meta property="og:type" content="website" />

  {/* Schema JSON-LD (SEO Boost) */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "Bluenose Digital",
      "url": "https://bluenosedigital.com/about",
      "description": "Creative digital agency building brands through strong storytelling, content and execution.",
      "founder": {
        "@type": "Person",
        "name": "Founder - Bluenose Digital"
      },
      "mainEntity": {
        "@type": "Organization",
        "name": "Bluenose Digital",
        "brand": "Bluenose Digital"
      }
    })}
  </script>

</Helmet>

    <section className="py-28 px-6 bg-white">

      {/* PAGE TITLE */}
      {/* PAGE TITLE */}
<motion.h1
  variants={fade}
  initial="hidden"
  animate="show"
  className="text-center text-4xl md:text-6xl font-extrabold text-[#0E3D55]"
>
  About{" "}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4BC1E8] to-[#0E6388]">
    Bluenose Digital
  </span>
</motion.h1>

{/* TAGLINE (Now appears perfectly) */}
<p
  className="
    text-[#0A3A53]/80 
    text-lg md:text-2xl 
    font-small
    mt-4 
    mb-20 
    max-w-4xl 
    mx-auto 
    text-center 
    leading-relaxed 
    tracking-wide
  "
>
  Crafting digital experiences that inspire, engage, and accelerate brand growth.
</p>


      {/* ⭐ TAGLINE BELOW TITLE */}
     

      {/* ================== BLOCK 1 — WHO WE ARE ================== */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 mb-20">

        {/* LEFT TEXT */}
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="show"
          className="rounded-2xl p-10 shadow-xl bg-[#0E6388] text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>

          <p className="text-white/90 leading-relaxed mb-4">
            Digital Marketing Co. is proudly based in Halifax, Nova Scotia. Our
            brand draws inspiration from the Atlantic Ocean and the iconic
            Bluenose ship—a symbol of precision and excellence.
          </p>

          <p className="text-white/80 leading-relaxed mb-4">
            The Bluenose was known for speed and mastery, values reflected in
            our approach to delivering impactful digital solutions.
          </p>

          <p className="text-white/80 leading-relaxed mb-4">
            Our eco-friendly mindset reflects our respect for culture, food, and
            environmental sustainability.
          </p>

          <p className="text-white/80 leading-relaxed">
            We help your business race ahead in the open market—while standing
            out with high-value marketing that leaves a lasting impact.
          </p>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="show"
          whileHover={hoverEffect}
          className="relative rounded-2xl overflow-hidden shadow-xl cursor-pointer"
        >
          <img
            src="/about/brochure.png"
            alt="Bluenose Brochure"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </motion.div>
      </div>

      {/* ================== BLOCK 2 — CUSTOM FOUNDER SECTION ================== */}
      <div className="max-w-6xl mx-auto mb-24">
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="show"
          className="rounded-3xl p-10 shadow-xl bg-[#F5F9FF] border border-[#DDE8F3]"
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* FOUNDER IMAGE */}
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="/about/founder.jpg"
              alt="Founder"
              className="w-full rounded-2xl shadow-lg object-cover"
            />

            {/* FOUNDER TEXT */}
            <div>
              <h3 className="text-3xl font-bold text-[#0E3D55] mb-3">
                Meet Our Founder
              </h3>

              <p className="text-[#0E3D55]/80 leading-relaxed mb-4">
                With a passion for strategy, branding, and digital transformation,
                our founder built Bluenose Digital to help brands grow with clarity,
                creativity, and confidence.
              </p>

              <p className="text-[#0E3D55]/70 leading-relaxed mb-4">
                Their leadership focuses on merging data-driven decisions with
                powerful storytelling — creating digital experiences that actually
                convert and scale.
              </p>

              <p className="text-[#0E3D55]/70 leading-relaxed">
                Today, the Bluenose team continues to deliver excellence across
                multiple industries with the same commitment to integrity,
                precision, and innovation.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ================== BLOCK 3 — MISSION / VISION / ESSENCE ================== */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-24">

        {/* Mission */}
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="show"
          whileHover={hoverEffect}
          className="rounded-2xl p-10 shadow-xl bg-[#4BC1E8] text-[#0A3346] cursor-pointer"
        >
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="leading-relaxed font-medium">
            To empower brands through strategy-led, emotionally engaging digital
            experiences that build strong foundations and long-term growth.
          </p>
        </motion.div>

        {/* Vision */}
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="show"
          whileHover={hoverEffect}
          className="rounded-2xl p-10 shadow-xl bg-[#F5C248] text-[#0E3D55] cursor-pointer"
        >
          <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
          <p className="leading-relaxed font-medium">
            To become a globally recognised agency known for transforming
            businesses into unforgettable stories using creativity & innovation.
          </p>
        </motion.div>

        {/* Essence */}
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="show"
          whileHover={hoverEffect}
          className="rounded-2xl p-10 shadow-xl bg-[#2E2E2E] text-white cursor-pointer"
        >
          <h3 className="text-2xl font-bold mb-4">Our Essence</h3>
          <p className="leading-relaxed text-white/90">
            Bluenose stands for speed, precision, discipline, creativity,
            resilience and excellence — values that shape every project we
            deliver.
          </p>
        </motion.div>
      </div>

      {/* CORE VALUES */}
      <CoreValues />

      {/* CTA */}
      <CTASection />
      </section>
      </>
  );
}



