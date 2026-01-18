// src/pages/work/RivaajRestoBar.jsx

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlueSidebar from "../../components/BlueSidebar";
import Counter from "../../components/Counter";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";


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
<div
  className="
    max-w-7xl mx-auto
    grid md:grid-cols-2 gap-12 items-center

    2xl:max-w-none
    2xl:px-32
  "
>
          {/* LEFT */}
          <div className="flex flex-col items-center md:items-start mr-12">
            <div className="inline-block bg-white/20 px-4 py-2 font-semibold rounded-full text-sm mb-5 shadow  2xl:text-lg">
              48.9K+ Views • Cultural Dining Launch Strategy
            </div>

            <h1 className=" text-4xl md:text-5xl font-extrabold leading-tight
    min-[1800px]:text-7xl">
              Rivaaj <span className="text-white">Resto-Bar</span>
            </h1>

            <p className="text-xl mt-4 text-white/90 max-w-xl leading-relaxed 2xl:text-2xl">
              Launching Bedford’s first cultural resto-bar using emotional storytelling
              and authentic cultural brand positioning.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
              {["Digital Planning", "Creative Flow", "Community Growth"].map((t, i) => (
                <div
                  key={i}
                  className="bg-white/20
        px-6 py-3
        rounded-full
        border border-white/40
        shadow
        text-white

        text-sm
        min-[1600px]:text-lg
        min-[1800px]:text-xl"
                >
                  {t}
                </div>
              ))}
            </div>

            <Link to="/contact">
              <button className="mt-8 px-8 py-3 bg-white text-black font-semibold rounded-full shadow-lg  2xl:text-xl">
                Contact Us Now →
              </button>
            </Link>
          </div>

          {/* RIGHT — LOGO/GRID ANIMATION */}
<div className="w-full flex justify-center">
  <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">

    {/* COUNTERS — DESKTOP ONLY */}
    <div className="hidden lg:flex flex-col gap-6">
      {[
        { value: 612, suffix: "K", label: "Views" },
        { value: 78, suffix: "", label: "Posts" },
        { value: 303, suffix: "", label: "Saves" },
        { value: 38, suffix: "%", label: "Conversion" },
      ].map((item, i) => (
        <div
          key={i}
          className="bg-white text-black rounded-2xl px-6 py-6 w-[180px] shadow-lg text-center"
        >
          <div className="text-3xl font-extrabold 2xl:text-5xl">
            <HeroCounter value={item.value} suffix={item.suffix} />
          </div>
          <div className="text-sm mt-1 text-gray-800 font-medium 2xl:text-xl">
            {item.label}
          </div>
        </div>
      ))}
    </div>

    {/* LOGO / GRID SWITCH */}
        <div className="flex justify-center items-center w-full max-w-[800px] h-[300px] sm:h-[420px] lg:h-[600px]">
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
            <img src="/client/logo-17.png" className="h-80 sm:h-88 object-contain" />
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
                    style={{ maxWidth: "800px", maxHeight: "600px" }}
                    alt="Rivaaz Grid"
                  />
          </motion.div>
        )}
      </AnimatePresence>
    </div>

  </div>
</div>

        </div>
      </section>

      {/* ================= PAGE GRID (SIDEBAR + CONTENT) ================= */}
<section
  className="
    max-w-7xl mx-auto
    grid lg:grid-cols-[300px_1fr]
    gap-14

    2xl:max-w-none
    2xl:px-32
    2xl:gap-16
  "
>
        {/* SIDEBAR */}
        <div className="hidden lg:block">
<aside className="sticky top-24 w-[300px] 2xl:w-[340px] ">
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
<div className="space-y-16 max-w-4xl w-full mx-auto 2xl:max-w-none">

          {/* ---------- OVERVIEW ---------- */}
<section
  id="overview"
  className="
    p-6 sm:p-10 bg-white rounded-3xl border shadow border-[#D7ECF6]

    2xl:px-16
  "
>                  <h2 className="text-4xl font-extrabold text-[#0E6388] text-center md:text-left 2xl:text-5xl">Overview</h2>

            <div className="mt-6 text-[#063349]/85 space-y-4 leading-relaxed text-left  2xl:text-xl">
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
                  className="p-6 rounded-2xl shadow-md text-white  2xl:text-xl"
                  style={{ background: "rgb(14,99,136)" }}
                >
                  <div className="text-2xl font-bold  2xl:text-xl">
                    <Counter end={s.v} />{s.sign}
                  </div>
                  <p className="mt-2 text-white/85 text-sm  2xl:text-xl">{s.t}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ---------- SERVICES PROVIDED ---------- */}
          <section id="services-provided" className="p-6 sm:p-10 bg-white rounded-3xl shadow border border-[#D7ECF6]">
            <h2 className="text-4xl font-extrabold text-[#0E6388] text-center md:text-left 2xl:text-5xl">Services Provided</h2>

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
                  className="px-5 py-4 flex items-center gap-4 text-white rounded-2xl shadow-lg 2xl:px-7
      2xl:py-6
      2xl:gap-5
      2xl:text-lg"
                  style={{ background: "rgb(14,99,136)" }}
                >
                  <div className=" p-2 bg-white/20 rounded-xl
    w-10 h-10
    flex items-center justify-center

    2xl:w-12
    2xl:h-12">
                    {item.icon}
                  </div>
                  <p className="font-semibold 2xl:text-xl">{item.name}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ---------- CHALLENGE ---------- */}
          <section id="challenge" className="p-6 sm:p-10 bg-white rounded-3xl shadow border border-[#D7ECF6]">
            <h2 className="text-4xl font-extrabold text-[#0E6388] text-center md:text-left 2xl:text-5xl">Challenge</h2>

            <div
              className="mt-6 p-10 rounded-3xl shadow text-white space-y-3  2xl:text-xl"
              style={{ background: "rgb(14,99,136)" }}
            >
             <ul className="space-y-3 list-disc list-inside text-white/95 2xl:text-xl">
                <li>Introduce a culturally rich concept in Bedford</li>
                <li>Build emotional connection using rituals & storytelling</li>
                <li>Showcase culture, cuisine & warmth together</li>
              </ul>

              <p className="font-semibold pt-2">Key challenges included:</p>

              <ul className="space-y-3 list-disc list-inside 2xl:text-xl">
                <li>Educating audience about “Rivaaj” cultural meaning</li>
                <li>Emotional brand identity creation</li>
                <li>Presenting both dining + culture</li>
              </ul>
            </div>
          </section>

          {/* ---------- APPROACH ---------- */}
          <section id="approach" className="p-6 sm:p-10 bg-white rounded-3xl shadow border border-[#D7ECF6]">
            <h2 className="text-4xl font-extrabold text-[#0E6388] text-center md:text-left 2xl:text-5xl">Approach</h2>

            <div
              className="mt-6 p-10 rounded-3xl shadow text-white space-y-3  2xl:text-xl"
              style={{ background: "rgb(14,99,136)" }}
            >

               <ul className="space-y-3 list-disc list-inside 2xl:text-xl">
                <li>Cultural storytelling based content</li>
                <li>Warm, emotional captions (Hindi + English)</li>
                <li>Food + culture + ambiance content pillars</li>
              </ul>

            </div>
          </section>

          {/* ---------- KEY STRATEGY ---------- */}
          <section id="key-strategy" className="p-6 sm:p-10 bg-white rounded-3xl shadow border border-[#D7ECF6]">
            <h2 className="text-4xl font-extrabold text-[#0E6388] text-center md:text-left 2xl:text-5xl">Key Strategies Implemented</h2>

            <div
              className="mt-6 p-10 rounded-3xl shadow text-white space-y-3  2xl:text-xl"
              style={{ background: "rgb(14,99,136)" }}
            >

               <ul className="space-y-3 list-disc list-inside 2xl:text-xl">
                <li>Cultural storytelling through visuals</li>
                <li>Bilingual captions for emotional impact</li>
                <li>Warm brand voice + cultural identity</li>
                <li>Geo-targeted content optimization</li>
              </ul>
            </div>
          </section>

         {/* ================= OTHER CASE STUDIES ================= */}
                                  <section
                 id="case-studies"
                 className="
                   mt-16 max-w-4xl mx-auto
               
                   min-[1800px]:max-w-none
                   min-[1800px]:px-24
                 "
               >
                 <h2
                   className="
                     text-4xl font-extrabold text-[#063349] text-center mb-10
                     2xl:text-5xl
                   "
                 >
                   Explore Our Other Client{" "}
                   <span className="text-[#0E6388]">Case Studies</span>
                 </h2>
               
                 <div
                   className="
                     grid grid-cols-1 md:grid-cols-2 gap-8 text-center
               
                     min-[1800px]:grid-cols-3
                     min-[1800px]:gap-12
                   "
                 >
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
                            CASE STUDY CARD COMPONENT
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
        className={`
          px-6 py-8 rounded-2xl shadow-lg w-full max-w-[420px]
          mx-auto hover:scale-[1.02] transition
          ${dark ? "text-white" : "text-black"}

          min-[1800px]:max-w-[520px]
          min-[1800px]:px-10
          min-[1800px]:py-10
        `}
        style={{ background }}
      >
        <AnimatePresence mode="wait">
          {!showGrid ? (
            /* ---------- LOGO ---------- */
            <motion.div
              key="logo"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center mb-6"
            >
              <img
                src={logo}
                alt={title}
                className="
                  w-20 sm:w-24
                  min-[1800px]:w-32
                "
              />
            </motion.div>
          ) : (
            /* ---------- GRID ---------- */
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="
                mb-4
                min-[1800px]:mb-10
              "
            >
              <img
                src={grid}
                alt={title}
                className="
                  w-full rounded-xl
                  min-[1800px]:scale-[1.08]
                "
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* ---------- TITLE ---------- */}
        <h3
          className="
            text-xl font-bold
            mt-4

            min-[1800px]:mt-8
            min-[1800px]:text-2xl
          "
        >
          {title}
        </h3>

        {/* ---------- VIEWS ---------- */}
        <p
          className={`
            ${dark ? "text-white/90" : "text-black/70"}
            text-sm
            mt-1

            min-[1800px]:mt-3
            min-[1800px]:text-lg
          `}
        >
          {stats[0][0]} Views
        </p>

        {/* ---------- STATS ---------- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-6">
          {stats.map(([v, t], i) => (
            <div
              key={i}
              className={`
                p-4 rounded-lg text-center shadow
                ${dark ? "bg-white/20 text-white" : "bg-white text-black"}

                min-[1800px]:p-6
              `}
            >
              <p className="font-bold text-lg min-[1800px]:text-2xl">
                {v}
              </p>
              <p className="text-xs opacity-80 min-[1800px]:text-base">
                {t}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}