// src/pages/work/RivaajRestoBar.jsx

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlueSidebar from "../../components/BlueSidebar";
import Counter from "../../components/Counter";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";

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
  reels: <Video className="w-full h-full" />,
  analytics: <BarChart3 className="w-full h-full" />,
  audience: <Users className="w-full h-full" />,
};

export default function RivaajRestoBar() {
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

  // Logo ↔ Grid toggle
  useEffect(() => {
    const i = setInterval(() => setShowGrid((prev) => !prev), 3000);
    return () => clearInterval(i);
  }, []);

  // ScrollSpy
  useEffect(() => {
    const observers = [];

    sections.forEach((id) => {
      const sec = document.getElementById(id);
      if (!sec) return;

      const obs = new IntersectionObserver(
        (entries) => entries[0].isIntersecting && setActive(id),
        { threshold: 0.25, rootMargin: "-120px 0px -150px 0px" }
      );

      obs.observe(sec);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="bg-white text-[#063349] font-inter px-6 pt-[110px] pb-20">

      <Helmet>
        <title>Rivaaj Resto-Bar Case Study | Bluenose Digital Marketing</title>
      </Helmet>

      {/* ================= HERO — BEAVER STYLE ================= */}
      <section className="min-h-[80vh] w-full flex items-center bg-[#ad863e] text-white rounded-3xl px-4 sm:px-6 py-14 md:py-20 mb-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center justify-items-center text-center md:text-left">

          {/* LEFT */}
          <div className="flex flex-col items-center md:items-start">
            <div className="inline-block bg-white/20 px-4 py-2 font-semibold rounded-full text-sm mb-5 shadow">
              48.9K+ Views • Cultural Dining Launch Strategy
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Rivaaj <span className="text-white">Resto-Bar</span>
            </h1>

            <p className="text-xl mt-4 text-white/90 max-w-xl leading-relaxed">
              Launching Bedford’s first cultural resto-bar using emotional storytelling
              and authentic cultural brand positioning.
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

          {/* RIGHT — LOGO/GRID ANIMATION */}
          <div className="flex justify-center w-full max-w-[300px] h-[260px] sm:h-[330px] md:h-[380px]">
            <AnimatePresence mode="wait">
              {!showGrid ? (
                <motion.div
                  key="logo"
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <img src="/client/logo-17.png" className="h-52 sm:h-60 object-contain" />
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
                    src="/client-grid/rivaaz-grid.jpg"
                    className="w-full h-full object-contain rounded-xl"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* ================= PAGE GRID (SIDEBAR + CONTENT) ================= */}
      <section className="max-w-7xl mx-auto grid lg:grid-cols-[280px_1fr] gap-12">

        {/* SIDEBAR */}
        <div className="hidden lg:block">
          <aside className="sticky top-24 w-[260px]">
            <BlueSidebar
              active={active}
              sections={[
                { name: "Overview", id: "overview" },
                { name: "Services Provided", id: "services-provided" },
                { name: "Challenge", id: "challenge" },
                { name: "Approach", id: "approach" },
                { name: "Key Strategy", id: "key-strategy" },
                { name: "Other Case Studies", id: "case-studies" },
              ]}
            />
          </aside>
        </div>

        {/* ================= RIGHT SIDE CONTENT ================= */}
        <div className="space-y-16 max-w-4xl w-full mx-auto">

          {/* ---------- OVERVIEW ---------- */}
          <section id="overview" className="p-6 sm:p-10 bg-white rounded-3xl shadow border border-[#D7ECF6]">
            <h2 className="text-4xl font-extrabold text-[#0E6388] text-center md:text-left">Overview</h2>

            <div className="mt-6 text-[#063349]/85 space-y-4 leading-relaxed text-left">
              <p>Rivaaj Bedford represents tradition, rituals, and cultural heritage — bringing a warm & emotional Indian dining experience to Canada.</p>
              <p>Audience includes Indian families, cultural lovers, food explorers, and local residents.</p>
              <p>Our goal was to build a strong cultural brand identity with emotional storytelling.</p>
            </div>

            {/* STATS */}
            <div className="grid sm:grid-cols-2 gap-6 mt-10">
              {[
                { v: 48900, t: "Total Views (30 Days)", sign: "+" },
                { v: 403, t: "Total Interactions", sign: "+" },
                { v: 74, t: "New Followers", sign: "+" },
                { v: 17, t: "Content Shares", sign: "+" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl shadow-md text-white"
                  style={{ background: "rgb(14,99,136)" }}
                >
                  <div className="text-2xl font-bold">
                    <Counter end={s.v} />{s.sign}
                  </div>
                  <p className="mt-2 text-white/85 text-sm">{s.t}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ---------- SERVICES PROVIDED ---------- */}
          <section id="services-provided" className="p-6 sm:p-10 bg-white rounded-3xl shadow border border-[#D7ECF6]">
            <h2 className="text-4xl font-extrabold text-[#0E6388] text-center md:text-left">Services Provided</h2>

            <div className="grid sm:grid-cols-2 gap-6 mt-10">
              {[
                { name: "Social Media Strategy", icon: icons.strategy },
                { name: "Cultural Content Creation", icon: icons.pen },
                { name: "Traditional Food Videography", icon: icons.reels },
                { name: "Analytics & Performance Tracking", icon: icons.analytics },
                { name: "Cultural Photography", icon: icons.pen },
                { name: "Brand Identity Development", icon: icons.audience },
              ].map((item, i) => (
                <div
                  key={i}
                  className="px-5 py-4 flex items-center gap-4 text-white rounded-2xl shadow-lg"
                  style={{ background: "rgb(14,99,136)" }}
                >
                  <div className="p-2 bg-white/20 rounded-xl w-8 h-8 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <p className="font-semibold">{item.name}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ---------- CHALLENGE ---------- */}
          <section id="challenge" className="p-6 sm:p-10 bg-white rounded-3xl shadow border border-[#D7ECF6]">
            <h2 className="text-4xl font-extrabold text-[#0E6388] text-center md:text-left">Challenge</h2>

            <div
              className="mt-6 p-10 rounded-3xl shadow text-white space-y-3"
              style={{ background: "rgb(14,99,136)" }}
            >
              <p>• Introduce a culturally rich concept in Bedford</p>
              <p>• Build emotional connection using rituals & storytelling</p>
              <p>• Showcase culture, cuisine & warmth together</p>

              <p className="font-semibold pt-2">Key challenges included:</p>

              <ul className="space-y-3 list-disc list-inside">
                <li>Educating audience about “Rivaaj” cultural meaning</li>
                <li>Emotional brand identity creation</li>
                <li>Presenting both dining + culture</li>
              </ul>
            </div>
          </section>

          {/* ---------- APPROACH ---------- */}
          <section id="approach" className="p-6 sm:p-10 bg-white rounded-3xl shadow border border-[#D7ECF6]">
            <h2 className="text-4xl font-extrabold text-[#0E6388] text-center md:text-left">Approach</h2>

            <div
              className="mt-6 p-10 rounded-3xl shadow text-white space-y-3"
              style={{ background: "rgb(14,99,136)" }}
            >
              <p>• Cultural storytelling based content</p>
              <p>• Warm, emotional captions (Hindi + English)</p>
              <p>• Food + culture + ambiance content pillars</p>
            </div>
          </section>

          {/* ---------- KEY STRATEGY ---------- */}
          <section id="key-strategy" className="p-6 sm:p-10 bg-white rounded-3xl shadow border border-[#D7ECF6]">
            <h2 className="text-4xl font-extrabold text-[#0E6388] text-center md:text-left">Key Strategies Implemented</h2>

            <div
              className="mt-6 p-10 rounded-3xl shadow text-white space-y-3"
              style={{ background: "rgb(14,99,136)" }}
            >
              <p>• Cultural storytelling through visuals</p>
              <p>• Bilingual captions for emotional impact</p>
              <p>• Warm brand voice + cultural identity</p>
              <p>• Geo-targeted content optimization</p>
            </div>
          </section>

          {/* ================= CASE STUDIES ================= */}
          <section id="case-studies" className="mt-16">
            <h2 className="text-4xl font-extrabold text-[#063349] text-center mb-10">
              Explore Our Other Client <span className="text-[#0E6388]">Case Studies</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-10">

              <CaseCard
                background="#F7FBCF"
                logo="/client/logo-2.png"
                title="Triveeni Events"
                grid="/client-grid/triveni-grid.jpg"
                stats={[
                  ["1.3M+", "Total Views"],
                  ["439K+", "Accounts Reached"],
                  ["89%", "Organic Reach"],
                  ["130%", "Growth Rate"],
                ]}
                link="/work/triveeni-events"
                dark={false}
              />

              <CaseCard
                background="#FB8C00"
                logo="/client/logo-5.png"
                title="Beaver Bank Station"
                grid="/client-grid/beaver-grid.jpg"
                stats={[
                  ["79K+", "Total Views"],
                  ["48K+", "Accounts"],
                  ["439", "Interactions"],
                  ["39%", "Engagement"],
                ]}
                link="/work/beaver-bank-station"
                dark={true}
              />

              <CaseCard
                background="#142758"
                logo="/client/logo-6.png"
                title="Hearthstone Inn"
                grid="/client-grid/hearthstone-grid.jpg"
                stats={[
                  ["1.6K+", "Total Views"],
                  ["78%", "Engagement"],
                  ["94.6%", "ER Rate"],
                  ["53", "Accounts"],
                ]}
                link="/work/hearthstone"
                dark={true}
              />

              <CaseCard
                background="#FDF1D9"
                logo="/client/logo-3.png"
                title="Pita Nutso"
                grid="/client-grid/pita-grid.jpg"
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
   CASE CARD COMPONENT (Beaver style)
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
