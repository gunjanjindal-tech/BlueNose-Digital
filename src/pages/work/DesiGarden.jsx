// src/pages/work/DesiGarden.jsx
import React, { useEffect, useState } from "react";
import Counter from "../../components/Counter";
import { Link } from "react-router-dom";
import BlueSidebar from "../../components/BlueSidebar";
import { AnimatePresence, motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

import {
  TrendingUp,
  PenTool,
  Video,
  BarChart3,
  Users,
  Camera,
  BookOpen,
} from "lucide-react";

const icons = {
  strategy: <TrendingUp className="w-full h-full" />,
  pen: <PenTool className="w-full h-full" />,
  reels: <Video className="w-full h-full" />,
  analytics: <BarChart3 className="w-full h-full" />,
  audience: <Users className="w-full h-full" />,
  photography: <Camera className="w-full h-full" />,
  storytelling: <BookOpen className="w-full h-full" />,
};

export default function DesiGarden() {
  const sections = [
    "overview",
    "services-provided",
    "challenge",
    "approach",
    "key-strategy",
    "case-studies",
  ];

  const [active, setActive] = useState("overview");

  // LOGO ↔ GRID Toggles every 3 sec (HERO)
  const [showGrid, setShowGrid] = useState(false);
  useEffect(() => {
    const i = setInterval(() => setShowGrid((p) => !p), 3000);
    return () => clearInterval(i);
  }, []);

  // Sidebar Tracking
  useEffect(() => {
    const list = [];
    sections.forEach((sec) => {
      const el = document.getElementById(sec);
      if (!el) return;

      const obs = new IntersectionObserver(
        (e) => {
          if (e[0].isIntersecting) setActive(sec);
        },
        { threshold: 0.35, rootMargin: "-120px 0px -200px 0px" }
      );

      obs.observe(el);
      list.push(obs);
    });

    return () => list.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="bg-white text-[#063349] font-inter px-6 pt-[110px] pb-20">
       <Helmet>
        <title>Desi Garden Case Study | Bluenose Digital Marketing</title>
      </Helmet>

      {/* ================= HERO SECTION ================= */}
      <section className="min-h-[80vh] w-full flex items-center bg-[#fa6709] text-white rounded-3xl px-6 py-10 md:py-20 mb-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <div className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-5 shadow-sm text-white/80">
              2.1M+ Views in 90 Days • Explosive Viral Growth
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
              Desi Garden
            </h1>

            <p className="text-lg md:text-xl mt-4 text-white leading-relaxed max-w-xl">
              Desi Garden is a takeout kitchen known for authentic home-style Indian meals —
              we grew their organic reach with highly relatable, Reels-first food content.
            </p>

<div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
              {["Strategic Planning", "Performance Pulse", "Content Power"].map((tag, i) => (
                <div
                  key={i}
                  className="bg-white/20 px-6 py-3 rounded-full border border-white/40 shadow text-white text-sm"
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

          {/* RIGHT — ANIMATED (LOGO ↔ GRID) */}
          <div className="flex justify-center w-full max-w-[400px] h-[260px] sm:h-[330px] md:h-[480px] mx-auto">
            <AnimatePresence mode="wait">
              {!showGrid ? (
                <motion.div
                  key="logo"
                  initial={{ opacity: 0, scale: 0.75 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex justify-center items-center w-full"
                >
                  <img src="/client/logo-18.png" className="h-80 sm:h-88 object-contain" />
                </motion.div>
              ) : (
                <motion.div
                  key="grid"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <img src="/client-grid/desi-garden-grid.jpg" className="w-full h-full object-contain rounded-xl" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </section>

    {/* MAIN GRID */}
<section className="max-w-7xl mx-auto grid lg:grid-cols-[280px_1fr] gap-12">

  {/* SIDEBAR — SAME AS BEAVER */}
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
  

        {/* RIGHT CONTENT */}
        <div className="space-y-16">

          {/* ================= OVERVIEW ================= */}
          <section id="overview" className="p-10 bg-white rounded-3xl shadow border border-[#D7ECF6] max-w-4xl mx-auto">
            <h2 className="text-4xl font-extrabold text-center text-[#0E6388]">Overview</h2>

            <div className="mt-6 space-y-4 leading-relaxed text-[#063349]/85">
              <p>
                Desi Garden is an Indian takeout kitchen specializing in authentic home-style Indian meals.
              </p>
              <p>
                The target audience includes Indian diaspora, busy professionals, families, and students.
              </p>
              <p>
                Our mission was to grow their presence using Reels-first content and relatable storytelling.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mt-10 place-items-center">
              {[
                { v: 943000, t: "Views (Last 30 Days)", sign: "+" },
                { v: 74, t: "Content Shared (30 Days)", sign: "+" },
                { v: 10800, t: "Total Interactions", sign: "+" },
                { v: 99.0, t: "Avg. Non-Follower Engagement (%)", sign: "%" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="p-6 w-[250px] rounded-2xl shadow-md text-white"
                  style={{ background: "rgb(14,99,136)" }}
                >
                  <div className="text-2xl font-bold">
                    <Counter end={s.v} duration={3500} />{s.sign}
                  </div>
                  <p className="mt-2 text-white/85 text-sm">{s.t}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ================= SERVICES PROVIDED ================= */}
          <section id="services-provided" className="p-10 bg-white rounded-3xl shadow border-[#D7ECF6] max-w-4xl mx-auto">
            <h2 className="text-4xl font-extrabold text-center text-[#0E6388]">Services Provided</h2>

            <div className="grid sm:grid-cols-2 gap-6 mt-10">
              {[
                { name: "Social Media Strategy", icon: icons.strategy },
                { name: "Viral Food Videography", icon: icons.reels },
                { name: "Analytics & Tracking", icon: icons.analytics },
                { name: "Reels-First Content Creation", icon: icons.pen },
                { name: "Home-Style Food Photography", icon: icons.photography },
                { name: "Brand Storytelling", icon: icons.storytelling },
              ].map((item, i) => (
                <div
                  key={i}
                  className="px-5 py-4 flex items-center gap-4 rounded-2xl shadow-lg text-white"
                  style={{ background: "rgb(14,99,136)" }}
                >
                  <div className="p-2 bg-white/20 rounded-xl w-10 h-10 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <p className="font-semibold text-white">{item.name}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ================= CHALLENGE ================= */}
          <section id="challenge" className="p-10 bg-white rounded-3xl border shadow border-[#D7ECF6] max-w-4xl mx-auto">
            <h2 className="text-4xl font-extrabold text-[#0E6388] text-center">Challenge</h2>

            <div className="mt-6 p-10 rounded-3xl shadow text-white" style={{ background: "rgb(14,99,136)" }}>
              <ul className="space-y-3 list-disc list-inside text-white/95">
                <li>Stand out in Halifax’s Indian takeout market</li>
                <li>Show true home-style authenticity visually</li>
                <li>Create emotional brand connection</li>
                <li>Grow virally without paid ads</li>
                <li>Target Indian diaspora + locals</li>
              </ul>
            </div>
          </section>

          {/* ================= APPROACH ================= */}
          <section id="approach" className="p-10 bg-white rounded-3xl shadow border border-[#D7ECF6] max-w-4xl mx-auto">
            <h2 className="text-4xl font-extrabold text-[#0E6388] text-center">Approach</h2>

            <div className="mt-6 p-10 rounded-3xl text-white shadow" style={{ background: "rgb(14,99,136)" }}>
              <ul className="space-y-3 list-disc list-inside text-white/95">
                <li>Reels-first strategy using short, high-retention content.</li>
                <li>Emotional identity built around “Tastes Like Home”.</li>
                <li>Optimized posting cycles, hooks & captions.</li>
              </ul>
            </div>
          </section>

          {/* ================= KEY STRATEGY ================= */}
          <section id="key-strategy" className="p-10 bg-white rounded-3xl shadow border border-[#D7ECF6] max-w-4xl mx-auto">
            <h2 className="text-4xl font-extrabold text-[#0E6388] text-center">Key Strategies Implemented</h2>

            <div className="mt-6 p-10 rounded-3xl text-white shadow" style={{ background: "rgb(14,99,136)" }}>
              <ul className="space-y-3 list-disc list-inside text-white/95">
                <li>Authenticity-first viral formula</li>
                <li>Nostalgia-driven food storytelling</li>
                <li>SEO-optimized posts</li>
                <li>Short 7–15s reels for max completion</li>
                <li>Explore-page optimized hooks</li>
              </ul>
            </div>
          </section>

          {/* ================= CASE STUDIES ================= */}
          <section id="case-studies" className="mt-16 max-w-4xl mx-auto">
            <h2 className="text-center text-3xl md:text-4xl font-extrabold text-[#063349] mb-10">
              Explore Our Other Client <span className="text-[#0E6388]">Case Studies</span>
            </h2>

            <div className="grid sm:grid-cols-2 gap-10 text-center">

              {/* CARD 1 */}
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

              {/* CARD 2 */}
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

              {/* CARD 3 */}
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

              {/* CARD 4 */}
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
   CASE CARD COMPONENT (Animated)
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
        {/* ANIMATION */}
        <AnimatePresence mode="wait">
          {!showGrid ? (
            <motion.div
              key="logo"
              initial={{ opacity: 0, scale: 0.75 }}
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
