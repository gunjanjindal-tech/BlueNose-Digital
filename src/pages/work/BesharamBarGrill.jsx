// src/pages/work/BesharamBarGrill.jsx
import React, { useEffect, useState } from "react";
import Counter from "../../components/Counter";
import { Link } from "react-router-dom";
import BlueSidebar from "../../components/BlueSidebar";

// ICONS
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


// ICON GROUP
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


export default function BesharamBarGrill() {
  const sections = [
    "overview",
    "services-provided",
    "challenge",
    "approach",
    "key-strategy",
    "case-studies",
  ];

  const [active, setActive] = useState("overview");

  // Scroll tracking
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
    <div className="bg-white text-[#063349] font-inter px-6 pt-6 py-20">

{/* ------------ HERO SECTION (RIVAAJ STYLE) ------------ */}
<section className="min-h-[80vh] w-full flex items-center 
 bg-gradient-to-r from-[#4BC1E8] to-[#0E6388] text-white rounded-3xl px-6 py-20 mb-20">

  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT */}
    <div className="self-start">
      <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full 
      text-sm font-semibold mb-5 shadow-sm">
        60K+ Views in 60 Days • Bold Fusion Strategy for Besharam Bar & Grill
      </div>

      <h1 className="inline-block text-4xl md:text-5xl font-extrabold">
        Besharam{" "}
        <span className="bg-clip-text text-transparent  bg-white">
          Bar & Grill
        </span>
      </h1>

      <p className="text-xl mt-4 text-white/90 leading-relaxed">
        A bold, high-impact social media strategy positioning Besharam Bar & Grill 
        as a modern, vibrant fusion hotspot through visually rich and trendy content.
      </p>

      <div className="flex flex-wrap gap-4 mt-8">
        {["Strategic Flow", "Branding Essence", "Performance Boost"].map((tag, i) => (
          <div 
            key={i}
            className="bg-white/20 px-6 py-3 rounded-full border border-white/40 
            shadow text-white text-sm font-medium"
          >
            {tag}
          </div>
        ))}
      </div>

      <Link to="/contact">
        <button className="mt-8 px-8 py-3 bg-gradient-to-r from-[#4BC1E8] to-[#0E6388]
          text-white font-semibold rounded-full shadow-lg">
          Book A Callback
        </button>
      </Link>
    </div>

    {/* RIGHT LOGO */}
    <div className="flex justify-center">
      <div className="rounded-3xl shadow-xl bg-white/70 p-6 flex items-center justify-center">
        <img
          src="/client/logo-16.png"
          className="w-64 md:w-72 object-contain"
          alt="Besharam Logo"
        />
      </div>
    </div>

  </div>
</section>



      {/* ------------ GRID LAYOUT ------------ */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-[280px_1fr] gap-12 mt-16">

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

        {/* ------------ RIGHT CONTENT ------------ */}
        <div className="space-y-16">

          {/* ------------ OVERVIEW ------------ */}
          <section id="overview" className="p-10 bg-white rounded-3xl shadow border border-[#D7ECF6]">
            <h2 className="text-4xl font-extrabold text-[#0E3D55]">Overview</h2>

            <p className="mt-6 leading-relaxed text-[#063349]/85">
              Besharam Bar and Grill is a bold Indian fusion restaurant offering vibrant platters,
              signature cocktails, and modern dining experiences.
            </p>

            <p className="mt-4 leading-relaxed text-[#063349]/85">
              Target audience includes food lovers, cocktail seekers, young professionals,
              and celebration groups.
            </p>

            <p className="mt-4 leading-relaxed text-[#063349]/85">
              Our mission was to amplify their Instagram presence using bold visuals and storytelling.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-10 place-items-center">
        {[
  { v: 60000, t: "Total Views (60 Days)", sign: "+" },
  { v: 9600, t: "Followers (+157 Growth)", sign: "+" },
  { v: 59, t: "Content Shares", sign: "+" },
  { v: 62, t: "Avg. Non-Follower Engagement (%)", sign: "%" },
].map((s, i) => (
  <div key={i} className="p-6 w-[250px] rounded-2xl shadow-md text-white
    bg-gradient-to-br from-[#4BC1E8] to-[#0E6388]">
    
    <div className="text-2xl font-bold">
      <Counter end={s.v} duration={3600} loop={false} />
      {s.sign}
    </div>

    <p className="mt-2 text-white/85 text-sm">{s.t}</p>
  </div>
))}

            </div>
          </section>

          {/* ------------ SERVICES PROVIDED ------------ */}
          <section id="services-provided" className="p-10 rounded-3xl bg-white shadow border border-[#D7ECF6]">
  <h2 className="text-4xl font-extrabold bg-clip-text text-transparent 
    bg-gradient-to-r from-[#0E3D55] to-[#11719A]">
    Services Provided
  </h2>

  <div className="grid sm:grid-cols-2 gap-6 mt-10">

    {[
      { name: "Social Media Strategy & Account Setup", icon: icons.strategy },
      { name: "Brand Identity Development", icon: icons.branding },
      { name: "Property Videography & Photography", icon: icons.videography },
      { name: "Professional Hotel Photography", icon: icons.photography },
      { name: "Analytics & Performance Tracking", icon: icons.analytics },
      { name: "Algorithm Optimization", icon: icons.algorithm },
      { name: "Content Calendar Planning", icon: icons.calendar },
      { name: "Hospitality Marketing Strategy", icon: icons.marketing },
    ].map((service, i) => (
      <div
        key={i}
        className="px-5 py-4 rounded-2xl flex items-center gap-4 text-white
        shadow-lg bg-gradient-to-br from-[#4BC1E8] to-[#0E6388]"
      >
        <div className="p-2 bg-white/20 rounded-xl w-8 h-8 flex items-center justify-center">
          {service.icon}
        </div>

        <p className="font-semibold text-base leading-tight">
          {service.name}
        </p>
      </div>
    ))}

  </div>
</section>

          {/* ------------ CHALLENGE ------------ */}
          <section id="challenge" className="p-10 bg-white rounded-3xl shadow border border-[#D7ECF6]">
           <h2
  className="text-4xl font-extrabold leading-[1.3] -mt-3 bg-clip-text text-transparent 
  bg-gradient-to-r from-[#0E3D55] to-[#11719A]"
>
  Challenge
</h2>

            <div className="mt-6 p-10 rounded-3xl text-white bg-gradient-to-br from-[#4BC1E8] to-[#0E6388] shadow space-y-6">
              <p>We studied Besharam's brand identity, audience patterns, and existing content performance.</p>

              <p>They needed powerful visuals for fusion dishes, cocktails, and energy-rich ambience.</p>

              <p className="font-semibold text-white text-xl pt-2">Key challenges:</p>

              <ul className="space-y-3 text-white/95">
                <li>• Stand out in competitive restaurant market</li>
                <li>• Present fusion concept visually</li>
                <li>• Highlight cocktails effectively</li>
                <li>• Create viral engagement</li>
                <li>• Improve organic reach</li>
              </ul>
            </div>
          </section>

          {/* ------------ APPROACH ------------ */}
          <section id="approach" className="p-10 bg-white rounded-3xl shadow border border-[#D7ECF6]">
            <h2 className="text-4xl font-extrabold text-[#0E3D55]">Approach</h2>

            <div className="mt-6 p-10 rounded-3xl text-white bg-gradient-to-br from-[#4BC1E8] to-[#0E6388] shadow space-y-6">
              <p>• Built hype through bold visuals and modern bar content.</p>
              <p>• Showcased signature dishes & cocktails using story-led reels.</p>
              <p>• Increased reach with trends, hooks, and optimal timing.</p>
            </div>
          </section>

          {/* ------------ KEY STRATEGY ------------ */}
          <section id="key-strategy" className="p-10 bg-white rounded-3xl shadow border border-[#D7ECF6]">
 <h2
  className="text-4xl font-extrabold leading-[1.3] -mt-1
  bg-clip-text text-transparent
  bg-gradient-to-r from-[#0E3D55] to-[#11719A]"
>
  Key Strategies Implemented
</h2>
            <div className="mt-6 p-10 rounded-3xl text-white bg-gradient-to-br from-[#4BC1E8] to-[#0E6388] shadow space-y-6">
              <p>• Fusion-centered content direction</p>
              <p>• Explore-page optimized reels</p>
              <p>• Bold cocktail showcasing</p>
              <p>• Data-driven content cycles</p>
              <p>• Brand consistency across posts</p>
            </div>
          </section>

          {/* ------------ CASE STUDIES ------------ */}
          <section id="case-studies" className="mt-16">
 <h2
  className="text-4xl font-extrabold text-center leading-[1.3] -mt-2
  text-transparent bg-clip-text 
  bg-gradient-to-r from-[#0E3D55] to-[#11719A]"
>
  Explore Our Other Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4BC1E8] to-[#0E6388]"> Case Studies</span> 
</h2>
          <div className="grid sm:grid-cols-2 gap-10 mt-10" id="case-studies">
            


  {/* CARD 1 — TRIVEENI */}
<div className="relative bg-[#F7FBCF] px-6 py-6 w-[400px] rounded-2xl shadow-lg">

  <h3 className="text-xl font-bold">Triveeni Events</h3>
  <p className="mt-2 text-black/70 text-sm">
    1.3M+ Views in 90 Days
  </p>

  {/* Stats grid */}
  <div className="grid grid-cols-2 gap-3 mt-5 w-[75%]">
    <CaseStat v="1.3M+" t="Total Views" />
  <CaseStat v="439K+" t="Accounts Reached" className="whitespace-nowrap" />
    <CaseStat v="89%" t="Organic Reach" />
    <CaseStat v="130%" t="Growth Rate" />
  </div>

  {/* LOGO BOTTOM RIGHT */}
  <img 
    src="/client/logo-2.png"
    className="absolute left-74 bottom-2 w-[100px]"
  />
</div>



  {/* CARD 2 — BEAVER BANK */}
  <div className="relative bg-[#FB8C00] text-white px-6 py-6 w-[400px] rounded-2xl shadow-lg">

    <h3 className="text-xl font-bold">Beaver Bank Station</h3>
    <p className="mt-2 text-white/90 text-sm">79K+ Views in 90 Days</p>

    <div className="grid grid-cols-2 gap-3 mt-5 w-[75%]">
      <CaseStatDark v="79K+" t="Total Views" />
      <CaseStatDark v="48K+" t="Accounts Reached"/>
      <CaseStatDark v="439" t="Interactions" />
      <CaseStatDark v="39%" t="Engagement" />
    </div>

    <img 
      src="/client/logo-5.png"
      className="absolute left-74 bottom-2 w-[100px]"
  />
 
  </div>


  {/* CARD 3 — HEARTHSTONE */}
  <div className="relative bg-[#142758] text-white px-6 py-6 w-[400px] rounded-2xl shadow-lg ">

    <h3 className="text-xl font-bold">Hearthstone Inn</h3>
    <p className="mt-2 text-white/90 text-sm">1.6K+ Views</p>

    <div className="grid grid-cols-2 gap-3 mt-5 w-[75%]">
      <CaseStatDark v="1.6K+" t="Total Views" />
      <CaseStatDark v="78%" t="Engagement" />
      <CaseStatDark v="94.6%" t="ER Rate" />
      <CaseStatDark v="53" t="Accounts" />
    </div>

    <img 
      src="/client/logo-6.png"
        className="absolute left-74 bottom-2 w-[100px]"
    />
  </div>


  {/* CARD 4 — RIVAAJ */}
  <div className="relative bg-[#B28829] text-white px-6 py-6 w-[400px] rounded-2xl shadow-lg ">

    <h3 className="text-xl font-bold">Rivaaj Resto-Bar</h3>
    <p className="mt-2 text-white/90 text-sm">48.9K+ Views</p>

    <div className="grid grid-cols-2 gap-3 mt-5 w-[75%]">
      <CaseStatDark v="48.9K" t="Total Views" />
      <CaseStatDark v="403" t="Interactions" />
      <CaseStatDark v="74" t="New Followers" />
      <CaseStatDark v="17" t="Shares" />
    </div>

    <img 
      src="/client/logo-17.png"
       className="absolute left-72 bottom-5 w-[110px]"
    />
  </div>

</div>
    </section>




        </div>
      </section>
    </div>
  );
}

/* ------------ SMALL COMPONENTS ------------ */
function CaseStat({ v, t }) {
  return (
    <div className="bg-white text-black p-3 rounded-lg shadow text-center">
      <p className="font-bold">{v}</p>
      <p className="text-xs text-black/70">{t}</p>
    </div>
  );
}

function CaseStatDark({ v, t }) {
  return (
    <div className="bg-white/20 text-white p-3 rounded-lg shadow text-center">
      <p className="font-bold">{v}</p>
      <p className="text-xs text-white/80">{t}</p>
    </div>
  );
}