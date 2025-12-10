// src/pages/work/DesiGarden.jsx
import React, { useEffect, useState } from "react";
import Counter from "../../components/Counter";
import { Link } from "react-router-dom";
import BlueSidebar from "../../components/BlueSidebar";

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

  useEffect(() => {
    const obsList = [];

    sections.forEach((sec) => {
      const element = document.getElementById(sec);
      if (!element) return;

      const obs = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) setActive(sec);
        },
        { threshold: 0.35, rootMargin: "-120px 0px -200px 0px" }
      );

      obs.observe(element);
      obsList.push(obs);
    });

    return () => obsList.forEach((o) => o.disconnect());
  }, []);

  return (
      <div className="bg-white text-[#063349] font-inter px-6 pt-[110px] pb-20">


      {/* ================= HERO SECTION ================= */}
      <section
        className="
          min-h-[80vh] w-full flex items-center 
          bg-[#fa6709] text-white rounded-3xl 
          px-6 py-10 md:py-20 mb-20
        "
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
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

                     <div
  className="
    flex flex-col items-center 
    md:flex-row md:flex-wrap 
    md:justify-start gap-4 mt-8
    w-full
  "
>
  {["Strategic Planning", "Performance Pulse", "Content Powe"].map((tag, i) => (
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
             <Link to="/contact" className="mt-8">
                           <button className="px-8 py-3 bg-white text-black font-semibold rounded-full shadow-lg">
                             Contact Us Now →
                           </button>
                         </Link>
            </div>

          </div>

          {/* RIGHT LOGO */}
          <div className="flex justify-center">
            {/* Replace with your actual Desi Garden logo path if different */}
            <img
              src="/client/logo-18.png"
              className="w-56 sm:w-72 md:w-96 object-contain"
              alt="Desi Garden Logo"
            />
          </div>

        </div>
      </section>

      {/* =============== GRID WRAPPER =============== */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-[280px_1fr] gap-12">

        {/* SIDEBAR */}
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

        {/* =============== RIGHT AREA =============== */}
        <div className="space-y-16">

          {/* ========= OVERVIEW ========= */}
          <section
  id="overview"
  className="p-10 bg-white rounded-3xl shadow border border-[#D7ECF6] max-w-4xl mx-auto"
>
  <h2 className="text-4xl font-extrabold text-center text-[#0E6388]">
    Overview
  </h2>

  <div className="mt-6 space-y-4 leading-relaxed text-[#063349]/85">
    <p>
      Desi Garden is an Indian takeout kitchen specializing in authentic
      home-style Indian meals with the tagline “Tastes Like Home, Take It
      Home.” Located in Halifax, it brings traditional flavours to the
      community with convenient takeout service.
    </p>

    <p>
      The target audience includes Indian diaspora craving authentic meals,
      busy professionals seeking quick but quality food, families wanting
      convenient dinner options, and students missing home-style comfort.
    </p>

    <p>
      Our mission was to grow Desi Garden’s presence as the top home-style
      Indian food brand by using relatable, appetizing, and viral Reels-driven
      content.
    </p>

    <p>
      We focused on emotional storytelling while maximizing non-follower
      reach through highly optimized content formats.
    </p>
  </div>

  {/* STATS */}
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
          <Counter end={s.v} duration={3500} />
          {s.sign}
        </div>
        <p className="mt-2 text-white/85 text-sm">{s.t}</p>
      </div>
    ))}
  </div>
</section>


          {/* ========= SERVICES PROVIDED ========= */}
 <section
  id="services-provided"
  className="p-10 bg-white rounded-3xl shadow border border-[#D7ECF6] max-w-4xl mx-auto"
>
  <h2 className="text-4xl font-extrabold text-center text-[#0E6388]">
    Services Provided
  </h2>

  <div className="grid sm:grid-cols-2 gap-6 mt-10">
    {[
      { name: "Social Media Strategy", icon: icons.strategy },
      { name: "Viral Food Videography", icon: icons.reels },
      { name: "Analytics & Performance Tracking", icon: icons.analytics },
      { name: "Reels-First Content Creation", icon: icons.pen },
      { name: "Home-Style Food Photography", icon: icons.photography },
      { name: "Authentic Brand Storytelling", icon: icons.storytelling },
    ].map((item, i) => (
      <div
        key={i}
        className="px-5 py-4 flex items-center gap-4 rounded-2xl shadow-lg text-white"
        style={{ background: "rgb(14,99,136)" }}
      >
        {/* ICON WRAPPER — EXACT SAME AS YOUR ORIGINAL CODE */}
        <div className="p-2 bg-white/20 rounded-xl w-10 h-10 flex items-center justify-center">
          {item.icon}
        </div>

        <p className="font-semibold text-white">{item.name}</p>
      </div>
    ))}
  </div>
</section>



          {/* ========= CHALLENGE ========= */}
         <section
  id="challenge"
  className="p-10 bg-white rounded-3xl border shadow border-[#D7ECF6] max-w-4xl mx-auto"
>
  <h2 className="text-4xl font-extrabold text-[#0E6388] text-center">Challenge</h2>

  <div
    className="mt-6 p-10 rounded-3xl shadow text-white"
    style={{ background: "rgb(14,99,136)" }}
  >
    <p className="text-white/95 leading-relaxed">
      Desi Garden competes in a competitive takeout food market where
      authenticity, relatability, and emotional storytelling are essential to
      stand out. The goal was to uplift their identity around “Tastes Like Home.”
    </p>

    <p className="mt-4 text-white/95 font-semibold">Key Challenges Included:</p>

    <ul className="space-y-3 list-disc list-inside text-white/95 mt-2">
      <li>Standing out in Halifax’s Indian food market</li>
      <li>Communicating true “home-style cooking” visually</li>
      <li>Building emotional brand connection</li>
      <li>Achieving viral growth without paid ads</li>
      <li>Attracting Indian diaspora + curious locals</li>
      <li>Establishing a strong takeout-first identity</li>
    </ul>
  </div>
</section>


          {/* ========= APPROACH ========= */}
        <section
  id="approach"
  className="p-10 bg-white rounded-3xl shadow border border-[#D7ECF6] max-w-4xl mx-auto"
>
  <h2 className="text-4xl font-extrabold text-[#0E6388] text-center">Approach</h2>

  <div
    className="mt-6 p-10 rounded-3xl shadow text-white"
    style={{ background: "rgb(14,99,136)" }}
  >
    <ul className="space-y-3 list-disc list-inside text-white/95">
      <li>
        Built a Reels-first strategy focusing on short, high-retention relatable
        food content.
      </li>
      <li>
        Created a warm, nostalgic identity around “Tastes Like Home” to connect
        emotionally with the audience.
      </li>
      <li>
        Optimized posting cycles, hooks, and captions for maximum organic reach.
      </li>
    </ul>
  </div>
</section>

          {/* ========= KEY STRATEGY ========= */}
         <section
  id="key-strategy"
  className="p-10 bg-white rounded-3xl shadow border border-[#D7ECF6] max-w-4xl mx-auto"
>
  <h2 className="text-4xl font-extrabold text-[#0E6388] text-center">
    Key Strategies Implemented
  </h2>

  <div
    className="mt-6 p-10 rounded-3xl shadow text-white"
    style={{ background: "rgb(14,99,136)" }}
  >
    <ul className="space-y-3 list-disc list-inside text-white/95">
      <li>Authenticity-first viral formula using relatable storytelling</li>
      <li>Comfort food emotional positioning + nostalgia-driven captions</li>
      <li>SEO-optimized posts for stronger discoverability</li>
      <li>Short Reels (7–15s) for maximum completion rate</li>
      <li>Explore-page optimized hooks for viral organic reach</li>
    </ul>
  </div>
</section>


          {/* ========= CASE STUDIES ========= */}
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

/* ================= SMALL COMPONENTS ================= */

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

        <div className="grid grid-cols-2 gap-3 mt-5 w-full sm:w-[80%] mx-auto">
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
        <div className="w-full flex justify-center mb-4">
          <img src={logo} className="w-20 sm:w-24 object-contain" alt={title} />
        </div>

        <h3 className={`text-xl font-bold ${dark ? "text-white" : "text-black"}`}>
          {title}
        </h3>

        <p className={`mt-2 text-sm ${dark ? "text-white/90" : "text-black/70"}`}>
          {stats[0][0]} Views
        </p>

        <div className="grid grid-cols-2 gap-3 mt-5 w-full sm:w-[80%] mx-auto">
          {stats.map(([v, t], i) =>
            dark ? <CaseStatDark key={i} v={v} t={t} /> : <CaseStat key={i} v={v} t={t} />
          )}
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