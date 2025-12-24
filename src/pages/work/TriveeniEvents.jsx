// src/pages/work/TriveeniEvents.jsx
import React, { useEffect, useState } from "react";
import Counter from "../../components/Counter";
import { Link } from "react-router-dom";
import BlueSidebar from "../../components/BlueSidebar";
import { Helmet } from "react-helmet-async";

import { motion, AnimatePresence } from "framer-motion";

// ICONS
import {
  TrendingUp,
  PenTool,
  Video,
  BarChart3,
  Users,
} from "lucide-react";

const icons = {
  strategy: <TrendingUp className="w-full h-full" />,
  pen: <PenTool className="w-full h-full" />,
  optimization: <PenTool className="w-full h-full" />,
  reels: <Video className="w-full h-full" />,
  analytics: <BarChart3 className="w-full h-full" />,
  audience: <Users className="w-full h-full" />,
};


function HeroCounter({ value, suffix = "", duration = 3000 }) {
  const [count, setCount] = useState(0);
  const startTime = React.useRef(null);
  const frame = React.useRef(null);

  useEffect(() => {
    function animate(timestamp) {
      if (!startTime.current) startTime.current = timestamp;

      const progress = Math.min(
        (timestamp - startTime.current) / duration,
        1
      );

      const current = Math.floor(progress * value);
      setCount(current);

      if (progress < 1) {
        frame.current = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    }

    frame.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame.current);
  }, [value, duration]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}


export default function TriveeniEvents() {
  const sections = [
    "overview",
    "services-provided",
    "challenge",
    "approach",
    "key-strategy",
    "case-studies",
  ];

   const [active, setActive] = useState("overview");
    const [showGrid, setShowGrid] = useState(false);
  
    // HERO logo <-> grid switch
    useEffect(() => {
      const i = setInterval(() => setShowGrid((p) => !p), 3000);
      return () => clearInterval(i);
    }, []);
  

  // ScrollSpy Tracking (Same as Beaver)
  useEffect(() => {
    const observers = [];

    sections.forEach((id) => {
      const sec = document.getElementById(id);
      if (!sec) return;

      const obs = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) setActive(id);
        },
        { threshold: 0.35, rootMargin: "-120px 0px -200px 0px" }
      );

      obs.observe(sec);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="bg-white text-[#063349] font-inter px-6 pt-[110px] pb-20">
  <Helmet>
        <title>Triveeni Events Case Study | Bluenose Digital Marketing</title>
      </Helmet>
      {/* ================= HERO SECTION ================= */}
      <section className="min-h-[80vh] w-full flex items-center 
      bg-[#FAFFD7] text-black rounded-3xl px-6 py-20 mb-20">

        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <div className="inline-block bg-white/20 text-black px-4 py-2 
              rounded-full text-sm font-semibold mb-5 shadow-sm">
              1.3M+ Views in 90 Days • Organic Cultural Event Growth
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Triveeni <span className="text-black">Events</span>
            </h1>

            <p className="text-xl mt-4 text-black/90 leading-relaxed max-w-xl">
              A community-driven Instagram strategy celebrating Indian festivals, 
              culture, and vibrant traditions with a Reels-first content approach.
            </p>

            {/* TAGS */}
             <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
              {["Strategic Planning", "Data Insights", "Community Building"].map((tag, i) => (
               <div
                  key={i}
                  className="bg-white/20 px-6 py-3 rounded-full border border-white/40 shadow text-black text-sm"
                >
                  {tag}
                </div>
              ))}
            </div>

            <Link to="/contact">
              <button className="mt-8 px-8 py-3 bg-white text-black font-semibold rounded-full shadow-lg">
                Contact Us Now →
              </button>
            </Link>
          </div>

       {/* RIGHT */}
<div className="w-full flex justify-center">
  <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">

    {/* COUNTERS — DESKTOP ONLY */}
    <div className="hidden lg:flex flex-col gap-6">
      {[
        { value: 1.3, suffix: "M", label: "Views" },
        { value: 439, suffix: "K", label: "Reach" },
        { value: 89, suffix: "%", label: "Organic Reach" },
        { value: 130, suffix: "%", label: "Growth" },
      ].map((item, i) => (
        <div
          key={i}
          className="bg-white text-black rounded-2xl px-6 py-6 w-[180px] shadow-lg text-center"
        >
          <div className="text-3xl font-extrabold">
            <HeroCounter value={item.value} suffix={item.suffix} />
          </div>
          <div className="text-sm mt-1 text-gray-800 font-medium">
            {item.label}
          </div>
        </div>
      ))}
    </div>

    {/* LOGO / GRID SWITCH */}
    <div className="flex justify-center w-full max-w-[400px] h-[260px] sm:h-[330px] md:h-[480px] mx-auto">
      <AnimatePresence mode="wait">
        {!showGrid ? (
          <motion.div
            key="logo"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center items-center w-full"
          >
            <img
              src="/client/logo-2.png"
              className="h-80 sm:h-88 object-contain"
              alt="Triveeni Events Logo"
            />
          </motion.div>
        ) : (
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/client-grid/triveni-grid.jpg"
              className="w-full h-full object-contain rounded-xl"
              alt="Triveeni Grid"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>

  </div>
</div>

                 </div>
               </section>

      {/* ================= GRID LAYOUT (BEAVER STYLE) ================= */}
      <section className="max-w-7xl mx-auto grid lg:grid-cols-[280px_1fr] gap-12">

        {/* ---------- SIDEBAR (fixed + sticky) ---------- */}
        <div className="hidden lg:block">
          <aside className="sticky top-24 w-[260px]">
            <BlueSidebar
              sections={[
                { name: "Overview", id: "overview" },
                { name: "Services Provided", id: "services-provided" },
                { name: "Challenge", id: "challenge" },
                { name: "Approach", id: "approach" },
                { name: "Key Strategy", id: "key-strategy" },
                { name: "Other Case Studies", id: "case-studies" },
              ]}
              active={active}
              hideMobileButton={true}
            />
          </aside>
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div className="space-y-16">

          {/* ------------ OVERVIEW ------------ */}
          <section id="overview" className="p-10 bg-white rounded-3xl shadow border border-[#D7ECF6]">
            <h2 className="text-4xl font-extrabold text-[#0E6388]">Overview</h2>

            <p className="mt-6 leading-relaxed text-[#063349]/85">
              Triveeni Events is a women-led cultural event company curating stunning Indian festivals,
              celebrations and community gatherings across the Atlantic region.
            </p>

            <p className="mt-4 leading-relaxed text-[#063349]/85">
              Their audience includes families, students, working professionals and community members
              who cherish Indian traditions, dance, music and festive culture.
            </p>

            <p className="mt-4 leading-relaxed text-[#063349]/85">
              Our mission was to build a strong Instagram brand presence using storytelling,
              cultural highlights and high-visibility reels.
            </p>

            <p className="mt-4 leading-relaxed text-[#063349]/85">
              A Reels-first strategy helped Triveeni generate over 1.3M views organically.
            </p>

            {/* Stats */}
            <div className="grid sm:grid-cols-2 gap-6 mt-10 place-items-center">
              {[
                { v: 1300000, t: "Total Views", sign: "+" },
                { v: 439000, t: "Accounts Reached", sign: "+" },
                { v: 89, t: "Organic Reach (%)", sign: "%" },
                { v: 130, t: "Avg. Monthly Growth (%)", sign: "%" },
              ].map((s, i) => (
                <div key={i}
                  className="p-6 w-[250px] rounded-2xl shadow-md text-white"
                  style={{ background: "rgb(14,99,136)" }}>
                  <div className="text-2xl font-bold"><Counter end={s.v} />{s.sign}</div>
                  <p className="mt-2 text-white/85 text-sm">{s.t}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ------------ SERVICES PROVIDED ------------ */}
          <section id="services-provided" className="p-10 bg-white rounded-3xl shadow border border-[#D7ECF6]">
            <h2 className="text-4xl font-extrabold text-[#0E6388]">Services Provided</h2>

            <div className="grid sm:grid-cols-2 gap-6 mt-10">
              {[
                { name: "Social Media Strategy", icon: icons.strategy },
                { name: "Adda Diaries Content Creation", icon: icons.pen },
                { name: "Reels Production & Editing", icon: icons.reels },
                { name: "Analytics & Performance Tracking", icon: icons.analytics },
                { name: "Algorithm Optimization", icon: icons.optimization },
                { name: "Community Engagement", icon: icons.audience },
                { name: "Storytelling & Emotional Marketing", icon: icons.pen },
              ].map((s, i) => (
                <div key={i}
                  className="px-5 py-4 flex items-center gap-4 text-white rounded-2xl shadow-lg"
                  style={{ background: "rgb(14,99,136)" }}>
                  <div className="p-2 bg-white/20 rounded-xl w-8 h-8 flex items-center justify-center">
                    {s.icon}
                  </div>
                  <p className="font-semibold">{s.name}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ------------ CHALLENGE ------------ */}
          <section id="challenge" className="p-10 bg-white rounded-3xl shadow border border-[#D7ECF6]">
            <h2 className="text-4xl font-extrabold text-[#0E6388]">Challenge</h2>

            <div className="mt-6 p-10 rounded-3xl text-white shadow"
              style={{ background: "rgb(14,99,136)" }}>
              <ul className="space-y-3 list-disc list-inside">
                <li>Build a presence in a culturally competitive niche.</li>
                <li>Boost reach organically without paid ads.</li>
                <li>Showcase diverse events while maintaining authenticity.</li>
                <li>Create consistent viral-worthy reels.</li>
                <li>Position Triveeni as the top cultural event brand.</li>
              </ul>
            </div>
          </section>

          {/* ------------ APPROACH ------------ */}
          <section id="approach" className="p-10 bg-white rounded-3xl shadow border border-[#D7ECF6]">
            <h2 className="text-4xl font-extrabold text-[#0E6388]">Approach</h2>

            <div className="mt-6 p-10 rounded-3xl shadow text-white"
              style={{ background: "rgb(14,99,136)" }}>
              <ul className="space-y-3 list-disc list-inside">
                <li>Culturally rooted content highlighting Indian celebrations.</li>
                <li>Reels-first strategy using trends + storytelling.</li>
                <li>Community engagement + event-driven content cycles.</li>
              </ul>
            </div>
          </section>

          {/* ------------ KEY STRATEGY ------------ */}
          <section id="key-strategy" className="p-10 bg-white rounded-3xl shadow border border-[#D7ECF6]">
            <h2 className="text-4xl font-extrabold text-[#0E6388]">Key Strategies Implemented</h2>

            <div className="mt-6 p-10 rounded-3xl shadow text-white"
              style={{ background: "rgb(14,99,136)" }}>
              <ul className="space-y-3 list-disc list-inside">
                <li>Trend-backed reels-first posting model</li>
                <li>Explore-page optimization</li>
                <li>Festival-based content calendar</li>
                <li>SEO-optimized captions</li>
                <li>Community-driven storytelling</li>
                <li>High-frequency engagement cycles</li>
              </ul>
            </div>
          </section>

          {/* ================= CASE STUDIES ================= */}
          <section id="case-studies" className="mt-16 max-w-4xl mx-auto">
            <h2 className="text-4xl font-extrabold text-[#063349] text-center mb-10">
              Explore Our Other Client <span className="text-[#0E6388]">Case Studies</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">

              {/* 1 — Triveeni Events */}
              <CaseCard
                background="#F7FBCF"
                logo="/client/logo-2.png"
                grid="/client-grid/triveni-grid.jpg"
                title="Triveeni Events"
                stats={[
                  ["1.3M+", "Total Views"],
                  ["439K+", "Accounts Reached"],
                  ["89%", "Organic Reach"],
                  ["130%", "Growth Rate"],
                ]}
                link="/work/triveeni-events"
                dark={false}
              />

              {/* 2 — Beaver */}
              <CaseCard
                background="#FB8C00"
                logo="/client/logo-5.png"
                grid="/client-grid/beaver-grid.jpg"
                title="Beaver Bank Station"
                stats={[
                  ["79K+", "Total Views"],
                  ["48K+", "Accounts"],
                  ["439", "Interactions"],
                  ["39%", "Engagement"],
                ]}
                link="/work/beaver-bank-station"
                dark={true}
              />

              {/* 3 — Hearthstone */}
              <CaseCard
                background="#142758"
                logo="/client/logo-6.png"
                grid="/client-grid/hearthstone-grid.jpg"
                title="Hearthstone Inn"
                stats={[
                  ["1.6K+", "Total Views"],
                  ["78%", "Engagement"],
                  ["94.6%", "ER Rate"],
                  ["53", "Accounts"],
                ]}
                link="/work/hearthstone"
                dark={true}
              />

              {/* 4 — Pita Nutso */}
              <CaseCard
                background="#FDF1D9"
                logo="/client/logo-3.png"
                grid="/client-grid/pita-grid.jpg"
                title="Pita Nutso"
                stats={[
                  ["36.1K", "Total Views"],
                  ["52", "Comment Shares"],
                  ["276", "Interactions"],
                  ["66%", "Engagement"],
                ]}
                link="/work/pita-nutso"
                dark={false}
              />

            </div>
          </section>

        </div>
      </section>
    </div>
  );
}

/* ============================================================
   CASE STUDY CARD (SAME AS BEAVER)
============================================================ */

function CaseCard({ background, logo, grid, title, stats, link, dark }) {
  const [showGrid, setShowGrid] = useState(false);

  useEffect(() => {
    const i = setInterval(() => setShowGrid((prev) => !prev), 3000);
    return () => clearInterval(i);
  }, []);

  return (
    <Link to={link}>
      <div
        className={`px-6 py-8 rounded-2xl shadow-lg w-full max-w-[420px] mx-auto hover:scale-[1.02] transition ${
          dark ? "text-white" : "text-black"
        }`}
        style={{ background }}
      >
        <AnimatePresence mode="wait">
          {!showGrid ? (
            <motion.div
              key="logo"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center mb-5"
            >
              <img src={logo} className="w-20 sm:w-24" />
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img src={grid} className="w-full rounded-xl" />
            </motion.div>
          )}
        </AnimatePresence>

        <h3 className="text-xl font-bold mt-4">{title}</h3>
        <p className={`${dark ? "text-white/90" : "text-black/70"} text-sm`}>
          {stats[0][0]} Views
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-5">
          {stats.map(([v, t], i) => (
            <div
              key={i}
              className={`p-4 rounded-lg text-center shadow ${
                dark ? "bg-white/20 text-white" : "bg-white text-black"
              }`}
            >
              <p className="font-bold text-lg">{v}</p>
              <p className="text-xs opacity-80">{t}</p>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}
