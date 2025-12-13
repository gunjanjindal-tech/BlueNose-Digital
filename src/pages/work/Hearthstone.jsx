// src/pages/work/Hearthstone.jsx
import React, { useEffect, useState } from "react";
import Counter from "../../components/Counter";
import { Link } from "react-router-dom";
import BlueSidebar from "../../components/BlueSidebar";
import { AnimatePresence, motion } from "framer-motion";

import {
  TrendingUp,
  Palette,
  Video,
  Camera,
  BarChart3,
  Gauge,
  CalendarDays,
  Megaphone,
} from "lucide-react";

const icons = {
  strategy: <TrendingUp className="w-full h-full" />,
  branding: <Palette className="w-full h-full" />,
  videography: <Video className="w-full h-full" />,
  photography: <Camera className="w-full h-full" />,
  analytics: <BarChart3 className="w-full h-full" />,
  algorithm: <Gauge className="w-full h-full" />,
  calendar: <CalendarDays className="w-full h-full" />,
  marketing: <Megaphone className="w-full h-full" />,
};

export default function Hearthstone() {
  const sections = [
    "overview",
    "services-provided",
    "challenge",
    "approach",
    "key-strategy",
    "case-studies",
  ];

  const [active, setActive] = useState("overview");

  // HERO logo ↔ grid animation
  const [showGrid, setShowGrid] = useState(false);
  useEffect(() => {
    const i = setInterval(() => setShowGrid((p) => !p), 3000);
    return () => clearInterval(i);
  }, []);

  // Scroll detection for sidebar
  useEffect(() => {
    const obsList = [];
    sections.forEach((sec) => {
      const element = document.getElementById(sec);
      if (!element) return;

      const obs = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) setActive(sec);
        },
        { threshold: 0.25, rootMargin: "-120px 0px -200px 0px" }
      );

      obs.observe(element);
      obsList.push(obs);
    });
    return () => obsList.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="bg-white text-[#063349] font-inter px-6 pt-[110px] pb-20">

      {/* ================= HERO (Beaver style) ================= */}
      <section className="min-h-[80vh] w-full flex items-center bg-[#233369] text-white rounded-3xl px-6 py-10 md:py-20 mb-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT TEXT */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-5">
              1.6K+ Views in 60 Days • Boutique Hotel Presence Strategy
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Hearthstone <span className="text-white">Inn</span>
            </h1>

            <p className="text-xl mt-4 text-white/90 max-w-xl leading-relaxed">
              Building boutique hospitality presence through visuals, storytelling, and brand-focused content.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
              {["Digital Planning", "Creative Flow", "Community Growth"].map((t, i) => (
                <div
                  key={i}
                  className="bg-white/20 px-6 py-3 rounded-full border border-white/40 shadow text-white text-sm"
                >
                  {t}
                </div>
              ))}
            </div>

            <Link to="/contact">
              <button className="mt-8 px-8 py-3 bg-white text-black font-semibold rounded-full shadow-lg">
                Contact Us Now →
              </button>
            </Link>
          </div>

          {/* RIGHT — Animated Logo/Grid */}
          <div className="flex justify-center w-full max-w-[300px] h-[260px] sm:h-[330px] md:h-[380px] mx-auto">
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
                  <img src="/client/logo-6.png" className="h-52 sm:h-60 object-contain" />
                </motion.div>
              ) : (
                <motion.div
                  key="grid"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <img src="/client-grid/hearthstone-grid.jpg" className="w-full h-full object-contain rounded-xl" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* ================= MAIN CONTENT (Beaver Layout) ================= */}
      <section className="max-w-7xl mx-auto grid lg:grid-cols-[280px_1fr] gap-12">

        {/* SIDEBAR */}
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
            />
          </aside>
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-16 max-w-4xl w-full mx-auto">

          {/* ================= OVERVIEW ================= */}
          <section id="overview" className="p-10 bg-white rounded-3xl shadow border border-[#D7ECF6]">
            <h2 className="text-4xl font-extrabold text-[#0E6388] text-center">Overview</h2>

            <p className="mt-6 leading-relaxed text-[#063349]/85">
              Hearthstone Inn is a boutique hotel in Dartmouth, Nova Scotia...
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-10">
              {[
                { v: 1600, t: "Total Views (60 Days)", sign: "+" },
                { v: 78, t: "Avg. Non-Follower Engagement (%)", sign: "%" },
                { v: 94.6, t: "Posts Engagement Rate (%)", sign: "%" },
                { v: 53, t: "Accounts Reached", sign: "+" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl shadow-md text-white"
                  style={{ background: "rgb(14,99,136)" }}
                >
                  <div className="text-2xl font-bold">
                    <Counter end={s.v} />{s.sign}
                  </div>
                  <p className="text-white/80 mt-2 text-sm">{s.t}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ================= SERVICES PROVIDED ================= */}
          <section id="services-provided" className="p-10 bg-white rounded-3xl shadow border border-[#D7ECF6]">
            <h2 className="text-4xl font-extrabold text-[#0E6388] text-center">Services Provided</h2>

            <div className="grid sm:grid-cols-2 gap-6 mt-10">
              {[
                { name: "Social Media Strategy", icon: icons.strategy },
                { name: "Brand Identity Development", icon: icons.branding },
                { name: "Hotel Videography", icon: icons.videography },
                { name: "Premium Photography", icon: icons.photography },
                { name: "Analytics & Growth Tracking", icon: icons.analytics },
                { name: "Algorithm Optimization", icon: icons.algorithm },
                { name: "Content Calendar Planning", icon: icons.calendar },
                { name: "Hospitality Marketing", icon: icons.marketing },
              ].map((item, i) => (
                <div
                  key={i}
                  className="px-5 py-4 flex items-center gap-4 text-white rounded-2xl shadow-lg"
                  style={{ background: "rgb(14,99,136)" }}
                >
                  <div className="w-8 h-8 p-2 bg-white/20 rounded-xl flex items-center justify-center">
                    {item.icon}
                  </div>
                  <p className="font-semibold">{item.name}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ================= CHALLENGE ================= */}
          <section id="challenge" className="p-10 bg-white rounded-3xl shadow border border-[#D7ECF6]">
            <h2 className="text-4xl font-extrabold text-[#0E6388] text-center">Challenge</h2>

            <div className="mt-6 p-10 rounded-3xl shadow text-white" style={{ background: "rgb(14,99,136)" }}>
              <ul className="space-y-3 list-disc list-inside text-white/95">
                <li>Build Instagram presence from zero</li>
                <li>Compete in local hospitality market</li>
                <li>Showcase premium hotel visuals</li>
              </ul>
            </div>
          </section>

          {/* ================= APPROACH ================= */}
          <section id="approach" className="p-10 bg-white rounded-3xl shadow border border-[#D7ECF6]">
            <h2 className="text-4xl font-extrabold text-[#0E6388] text-center">Approach</h2>

            <div className="mt-6 p-10 rounded-3xl shadow text-white" style={{ background: "rgb(14,99,136)" }}>
              <ul className="space-y-3 list-disc list-inside text-white/95">
                <li>Premium lifestyle-first storytelling</li>
                <li>Wedding & hospitality reels</li>
              </ul>
            </div>
          </section>

          {/* ================= KEY STRATEGY ================= */}
          <section id="key-strategy" className="p-10 bg-white rounded-3xl shadow border border-[#D7ECF6]">
            <h2 className="text-4xl font-extrabold text-[#0E6388] text-center">Key Strategies Implemented</h2>

            <div className="mt-6 p-10 rounded-3xl shadow text-white" style={{ background: "rgb(14,99,136)" }}>
              <ul className="space-y-3 list-disc list-inside text-white/95">
                <li>Boutique hotel visual identity</li>
              </ul>
            </div>
          </section>

          {/* ================= OTHER CASE STUDIES ================= */}
          <section id="case-studies" className="mt-16">
            <h2 className="text-center text-3xl md:text-4xl font-extrabold text-[#063349] mb-10">
              Explore Our Other Client <span className="text-[#0E6388]">Case Studies</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-10">

              <CaseCard
                background="#F7FBCF"
                logo="/client/logo-2.png"
                grid="/client-grid/triveni-grid.jpg"
                title="Triveeni Events"
                stats={[
                  ["1.3M+", "Total Views"],
                  ["439K+", "Accounts Reached"],
                ]}
                link="/work/triveeni-events"
                dark={false}
              />

              <CaseCard
                background="#FB8C00"
                logo="/client/logo-5.png"
                grid="/client-grid/beaver-grid.jpg"
                title="Beaver Bank Station"
                stats={[
                  ["79K+", "Total Views"],
                  ["48K+", "Accounts"],
                ]}
                link="/work/beaver-bank-station"
                dark={true}
              />

              <CaseCard
                background="#142758"
                logo="/client/logo-6.png"
                grid="/client-grid/hearthstone-grid.jpg"
                title="Hearthstone Inn"
                stats={[
                  ["1.6K+", "Total Views"],
                  ["78%", "Engagement"],
                ]}
                link="/work/hearthstone"
                dark={true}
              />

              <CaseCard
                background="#FDF1D9"
                logo="/client/logo-3.png"
                grid="/client-grid/pita-grid.jpg"
                title="Pita Nutso"
                stats={[
                  ["36.1K", "Total Views"],
                  ["52", "Comment Shares"],
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
   CASE STUDY CARD (Animated) — SAME AS BEAVER
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
        className={`px-6 py-8 rounded-2xl shadow-lg hover:scale-[1.02] transition ${
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
              className={`p-4 rounded-lg shadow text-center ${
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
