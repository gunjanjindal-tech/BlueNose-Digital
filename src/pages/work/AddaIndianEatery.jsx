// src/pages/work/AddaIndianEatery.jsx

import React, { useEffect, useState } from "react";
import Counter from "../../components/Counter";
import { Link } from "react-router-dom";
import BlueSidebar from "../../components/BlueSidebar";

import { TrendingUp, PenTool, Video, BarChart3, Users } from "lucide-react";

const icons = {
  strategy: <TrendingUp className="w-full h-full" />,
  pen: <PenTool className="w-full h-full" />,
  optimization: <PenTool className="w-full h-full" />,
  reels: <Video className="w-full h-full" />,
  analytics: <BarChart3 className="w-full h-full" />,
  audience: <Users className="w-full h-full" />,
};

export default function AddaIndianEatery() {
  const sections = [
    "overview",
    "services-provided",
    "challenge",
    "approach",
    "key-strategy",
    "case-studies",
  ];

  const [active, setActive] = useState("overview");

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


      {/* =========================== HERO SECTION ================================ */}
<section
  className="min-h-[80vh] w-full flex items-center bg-[#FFC100] text-white 
  rounded-3xl px-6 py-8 md:py-20 mb-20"
>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">

            <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-5 shadow-sm">
              214K+ Views in 90 Days • Emotional Storytelling Strategy
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Adda Indian <span className="text-white">Eatery</span>
            </h1>

            <p className="text-xl mt-4 text-white/90 leading-relaxed max-w-xl">
              Building a culturally emotional brand identity for Adda using storytelling,
              cinematic reels, and high-engagement social strategies.
            </p>

             <div
  className="
    flex flex-col items-center 
    md:flex-row md:flex-wrap 
    md:justify-start gap-4 mt-8
    w-full
  "
>
  {["Digital Planning", "Creative Flow", "Community Growth"].map((tag, i) => (
    <div
      key={i}
      className="
        bg-white/20 px-6 py-3 
        rounded-full border border-white/40 
        text-white text-sm font-medium shadow
        w-[180px] text-center
        md:w-auto
      "
    >
      {tag}
    </div>
  ))}
</div>


            <div className="flex justify-center sm:justify-start w-full">
              <Link to="/contact">
                <button className="mt-8 px-8 py-3 bg-white text-black font-semibold rounded-full shadow-lg">
                  Contact Us Now →
                </button>
              </Link>
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <img src="/client/logo-4.png" className="w-40 sm:w-64 md:w-80 object-contain" />
          </div>

        </div>
      </section>



      {/* =========================== GRID WRAPPER ================================ */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-[280px_1fr] gap-12">

        {/* Sidebar */}
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


        {/* =========================== RIGHT CONTENT ================================ */}
        <div className="space-y-16">


          {/* ======================= OVERVIEW ======================= */}
          <section id="overview"
            className="p-10 bg-white rounded-3xl shadow border border-[#D7ECF6] max-w-4xl mx-auto">

            <h2 className="text-4xl font-extrabold text-[#0E6388] text-center">Overview</h2>

            <p className="mt-6 leading-relaxed text-[#063349]/85">
               Adda Indian Eatery is a lively and affordable Indian restaurant offering authentic 
              flavors and a vibrant dining experience rooted in the cultural spirit of “adda” — 
              a place where people bond, laugh, and share food together.
            </p>
             <p className="mt-6 leading-relaxed text-[#063349]/85">
                They target young adults, students, friend groups, couples, and food lovers who enjoy 
              authentic Indian cuisine served in a warm and energetic environment.

            </p>
             <p className="mt-6 leading-relaxed text-[#063349]/85">
                           Our mission was to position Adda as a culturally memorable Indian food destination 
              through emotional storytelling, cinematic food visuals, and community-driven content.
            </p>
            <p className="mt-6 leading-relaxed text-[#063349]/85">
                           We focused on a Reels-first approach to maximize organic reach and engagement while 
              establishing an emotional connection through relatable stories.

            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-10 place-items-center">
              {[
                { v: 214000, t: "Total Views (90 Days)", sign: "+" },
                { v: 44000, t: "Accounts Reached", sign: "+" },
                { v: 89, t: "Organic Reach (%)", sign: "%" },
                { v: 130, t: "Avg Monthly Growth (%)", sign: "%" },
              ].map((s, i) => (
                <div key={i}
                  className="p-6 w-[250px] rounded-2xl shadow-md text-white"
                  style={{ background: "rgb(14,99,136)" }}>
                  <div className="text-2xl font-bold">
                    <Counter end={s.v} />{s.sign}
                  </div>
                  <p className="mt-2 text-white/85 text-sm">{s.t}</p>
                </div>
              ))}
            </div>

          </section>



          {/* ======================= SERVICES PROVIDED ======================= */}
          <section id="services-provided"
            className="p-10 bg-white rounded-3xl shadow border border-[#D7ECF6] max-w-4xl mx-auto">

            <h2 className="text-4xl font-extrabold text-[#0E6388] text-center">Services Provided</h2>

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
                  className="px-5 py-4 rounded-2xl flex items-center gap-4 text-white shadow-lg"
                  style={{ background: "rgb(14,99,136)" }}>
                  <div className="p-2 bg-white/20 rounded-xl w-8 h-8">{s.icon}</div>
                  <p className="font-semibold">{s.name}</p>
                </div>
              ))}
            </div>

          </section>



          {/* ======================= CHALLENGE ======================= */}
          <section id="challenge"
            className="p-10 bg-white rounded-3xl shadow border border-[#D7ECF6] max-w-4xl mx-auto">

            <h2 className="text-4xl font-extrabold text-[#0E6388] text-center">Challenge</h2>

            <div className="mt-6 p-10 rounded-3xl shadow text-white"
              style={{ background: "rgb(14,99,136)" }}>
              <p>
                We analyzed Adda’s Instagram and identified areas where emotional storytelling
                could transform engagement.
              </p>

              <ul className="space-y-3 list-disc list-inside text-white/95 mt-4">
                <li>Saturated Indian food content niche</li>
                <li>Needed emotional + cultural storytelling</li>
                <li>Required viral, shareable content</li>
                <li>Goal: attract young audiences</li>
                <li>Build a sense of “Adda Culture”</li>
              </ul>
            </div>

          </section>



          {/* ======================= APPROACH ======================= */}
          <section id="approach"
            className="p-10 bg-white rounded-3xl shadow border border-[#D7ECF6] max-w-4xl mx-auto">

            <h2 className="text-4xl font-extrabold text-[#0E6388] text-center">Approach</h2>

            <div className="mt-6 p-10 rounded-3xl shadow text-white"
              style={{ background: "rgb(14,99,136)" }}>
              <ul className="space-y-3 list-disc list-inside text-white/95">
                <li>Cinematic food videos + cultural storytelling</li>
                <li>Performance analysis to refine content format</li>
                <li>Trend-based ideas for organic reach</li>
              </ul>
            </div>

          </section>



          {/* ======================= KEY STRATEGY ======================= */}
          <section id="key-strategy"
            className="p-10 bg-white rounded-3xl shadow border border-[#D7ECF6] max-w-4xl mx-auto">

            <h2 className="text-4xl font-extrabold text-center text-[#0E6388]">
              Key Strategies Implemented
            </h2>

            <div className="mt-6 p-10 rounded-3xl shadow text-white"
              style={{ background: "rgb(14,99,136)" }}>
              <ul className="space-y-3 list-disc list-inside text-white/95">
                <li>Consistency with posting schedule</li>
                <li>A/B Testing formats to find best performers</li>
                <li>Emotional & friendship-based storytelling</li>
                <li>High-shareability reel themes</li>
              </ul>
            </div>

          </section>



          {/* ======================= CASE STUDIES ======================= */}
          <section id="case-studies" className="mt-16 max-w-4xl mx-auto">
         <h2 className="text-center text-3xl md:text-4xl font-extrabold text-[#063349] mb-10">

              Explore Our Other Client <span className="text-[#0E6388]">Case Studies</span> 
            </h2>

            <div className="grid sm:grid-cols-2 gap-10 mt-10">

              {/* CARD 1 */}
             <CaseCard
  background="#F7FBCF"
  logo="/client/logo-2.png"
  title="Triveeni Events"
  stats={[
    ["1.3M+", "Total Views"],
    ["439K+", "Accounts Reached"],
    ["89%", "Organic Reach"],
    ["130%", "Growth Rate"],
  ]}
  link="/work/triveeni-events"
/>


              {/* CARD 2 */}
            <CaseCardDark
  background="#FB8C00"
  logo="/client/logo-5.png"
  title="Beaver Bank Station"
  stats={[
    ["79K+", "Total Views"],
    ["48K+", "Accounts"],
    ["439", "Interactions"],
    ["39%", "Engagement"],
  ]}
  link="/work/beaver-bank-station"
/>


              {/* CARD 3 */}
              <CaseCardDark
                background="#142758"
                logo="/client/logo-6.png"
                title="Hearthstone Inn"
                stats={[
                  ["1.6K+", "Total Views"],
                  ["78%", "Engagement"],
                  ["94.6%", "ER Rate"],
                  ["53", "Accounts"],
                ]}
                link="/work/Hearthstone"
              />

              {/* CARD 4 */}
              <CaseCardDark
                background="#FDF1D9"
                logo="/client/logo-3.png"
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

/* ======================= SMALL COMPONENTS ======================= */

function CaseCard({ background, logo, title, stats, link }) {
  return (
    <Link to={link}>
      <div
        className="px-6 py-8 rounded-2xl shadow-lg w-full max-w-[400px] mx-auto text-center cursor-pointer hover:scale-[1.02] transition"
        style={{ background }}
      >
        <div className="w-full flex justify-center mb-5 mt-2">
          <img src={logo} className="w-20 sm:w-24 object-contain" alt={title} />
        </div>

        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-black/70 text-sm">{stats[0][0]} Views</p>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-5 w-full sm:w-[80%] mx-auto">




          {stats.map(([v, t], i) => (
            <CaseStat key={i} v={v} t={t} />
          ))}
        </div>
      </div>
    </Link>
  );
}


function CaseCardDark({ background, logo, title, stats, link, dark = true }) {
  return (
    <Link to={link}>
      <div
        className={`px-6 py-8 rounded-2xl shadow-lg text-center w-full max-w-[400px] mx-auto cursor-pointer hover:scale-[1.02] transition 
          ${dark ? "text-white" : "text-black"}`}
        style={{ background }}
      >
        {/* LOGO */}
        <div className="w-full flex justify-center mb-4">
          <img
            src={logo}
            className="w-20 sm:w-24 object-contain"
            alt={title}
          />
        </div>

        <h3 className={`text-xl font-bold ${dark ? "text-white" : "text-black"}`}>
          {title}
        </h3>

        <p className={`mt-2 text-sm ${dark ? "text-white/90" : "text-black/70"}`}>
          {stats[0][0]} Views
        </p>

        {/* STATS GRID */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-5 w-full sm:w-[80%] mx-auto">



          {stats.map(([v, t], i) => (
            dark ? (
              <CaseStatDark key={i} v={v} t={t} />
            ) : (
              <CaseStat key={i} v={v} t={t} />
            )
          ))}
        </div>
      </div>
    </Link>
  );
}


function CaseStat({ v, t }) {
  return (
    <div className="bg-white text-black p-4 rounded-lg shadow text-center flex flex-col items-center min-h-[85px]">
      <p className="font-bold text-lg">{v}</p>
      <p className="text-xs text-black/70 leading-tight break-words text-center">{t}</p>
    </div>
  );
}

function CaseStatDark({ v, t }) {
  return (
    <div className="bg-white/20 text-white p-4 rounded-lg shadow text-center flex flex-col items-center min-h-[85px]">
      <p className="font-bold text-lg">{v}</p>
      <p className="text-xs text-white/80 leading-tight break-words text-center">{t}</p>
    </div>
  );
}