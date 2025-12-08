// src/pages/work/Hearthstone.jsx
import React, { useEffect, useState } from "react";
import Counter from "../../components/Counter";
import { Link } from "react-router-dom";
import BlueSidebar from "../../components/BlueSidebar";

// ICONS (same as Besharam)
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
 bg-[#233369] text-white rounded-3xl px-6 py-20">

  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT */}
    <div className="self-start">
      <div className="inline-block bg-white/20 text-white px-4 py-2 
      rounded-full text-sm font-semibold mb-5 shadow-sm">
        1.6K+ Views in 60 Days • Boutique Hotel Presence Strategy
      </div>

      <h1 className="inline-block text-4xl md:text-5xl font-extrabold">
        Hearthstone{" "}
        <span className="bg-clip-text text-transparent 
        bg-white">
          Inn
        </span>
      </h1>

      <p className="text-xl mt-4 text-white/90 leading-relaxed">
        Building boutique hospitality presence through premium visuals, 
        hotel storytelling, and community-focused digital branding.
      </p>

      <div className="flex flex-wrap gap-4 mt-8">
        {["Audience Connect", "Visibility Boost", "Growth Strategy"].map((tag, i) => (
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
        <button className="mt-8 px-8 py-3 bg-white text-black font-semibold rounded-full shadow-lg">
          Contact Us Now →
        </button>
      </Link>
    </div>

    {/* RIGHT LOGO */}
    <div className="flex justify-center">
      <div >
        <img
          src="/client/logo-6.png"
          className="w-72 md:w-100 object-contain"
          alt="Hearthstone Logo"
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
            <h2 className="text-4xl font-extrabold text-[#0E6388]">Overview</h2>

            <p className="mt-6 leading-relaxed text-[#063349]/85">
              Hearthstone Inn is a boutique hotel located in Dartmouth, Nova Scotia, offering serene Lake Banook views, pet-friendly stays, and elegant event spaces.
            </p>

            <p className="mt-4 leading-relaxed text-[#063349]/85">
              Their target audience includes boutique travelers, couples, wedding planners, tourists, and business guests.
            </p>

            <p className="mt-4 leading-relaxed text-[#063349]/85">
              The mission was to build their Instagram brand identity from zero and increase reach through lifestyle-driven visuals.
            </p>

            <p className="mt-4 leading-relaxed text-[#063349]/85">
              We highlighted hotel charm, amenities, weddings, events, and scenic locations to shape strong brand recall.
            </p>

            {/* Metrics */}
            <div className="grid sm:grid-cols-2 gap-6 mt-10 place-items-center">
              {[
                { v: 1600, t: "Total Views (60 Days)", sign: "+" },
                { v: 78, t: "Avg. Non-Follower Engagement (%)", sign: "%" },
                { v: 94.6, t: "Posts Engagement Rate (%)", sign: "%" },
                { v: 53, t: "Accounts Reached", sign: "+" },
              ].map((s, i) => (
                <div key={i} className="p-6 w-[250px] rounded-2xl shadow-md text-white
                  "
                style={{
    background: "rgb(14, 99, 136)"
  }}>
                  
                  <div className="text-2xl font-bold">
                    <Counter end={s.v} duration={3600} />
                    {s.sign}
                  </div>

                  <p className="mt-2 text-white/85 text-sm">{s.t}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ------------ SERVICES PROVIDED ------------ */}
          <section id="services-provided" className="p-10 rounded-3xl bg-white shadow border border-[#D7ECF6]">
            <h2 className="text-4xl font-extrabold text-[#0E6388]">
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
                    shadow-lg"
                  style={{
    background: "rgb(14, 99, 136)"
  }}
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
              className="text-4xl font-extrabold leading-[1.3] -mt-3 text-[#0E6388]"
            >
              Challenge
            </h2>

            <div className="mt-6 p-10 rounded-3xl text-white shadow space-y-6"
            style={{
    background: "rgb(14, 99, 136)"
  }}>
               <p>We studied Besharam's brand identity, audience patterns, and existing content performance.</p>

              <p>They needed powerful visuals for fusion dishes, cocktails, and energy-rich ambience.</p>

              <p className="font-semibold text-white text-xl pt-2">Key challenges:</p>
              <ul className="space-y-3 text-white/95">
                <li>• Build an Instagram audience from zero</li>
                <li>• Create a visual identity for the boutique hotel experience</li>
                <li>• Compete in the local hospitality & hotel market</li>
                <li>• Highlight weddings, lounge, lake views & events</li>
                <li>• Overcome limited existing professional content</li>
                <li>• Improve reach organically without paid ads</li>
                <li>• Maintain consistent brand tone & messaging</li>
              </ul>
            </div>
          </section>

          {/* ------------ APPROACH ------------ */}
          <section id="approach" className="p-10 bg-white rounded-3xl shadow border border-[#D7ECF6]">
            <h2 className="text-4xl font-extrabold text-[#0E6388]">Approach</h2>

            <div className="mt-6 p-10 rounded-3xl text-white shadow space-y-6"
            style={{
    background: "rgb(14, 99, 136)"
  }}>
              <p>• Built presence with premium photography + hotel lifestyle visuals</p>
              <p>• Created content around events, weddings & hospitality storytelling</p>
              <p>• Used trending audio and strategic posting windows for maximum reach</p>
            </div>
          </section>

          {/* ------------ KEY STRATEGY ------------ */}
          <section id="key-strategy" className="p-10 bg-white rounded-3xl shadow border border-[#D7ECF6]">
            <h2
              className="text-4xl font-extrabold leading-[1.3] -mt-1 text-[#0E6388]"
            >
              Key Strategies Implemented
            </h2>

            <div className="mt-6 p-10 rounded-3xl text-white shadow space-y-6"
            style={{
    background: "rgb(14, 99, 136)"
  }}>
              <p>• Boutique hotel–focused visual storytelling</p>
              <p>• Pet-friendly content series for unique positioning</p>
              <p>• Wedding & event venue highlight reels</p>
              <p>• Local geotag optimization (Dartmouth, Lake Banook)</p>
              <p>• Strong brand consistency across posts</p>
            </div>
          </section>

          {/* ------------ CASE STUDIES ------------ */}
          <section id="case-studies" className="mt-16">
 <h2
              className="text-4xl font-extrabold text-center leading-[1.3] -mt-2
              text-[#0E6388]"
            >
              Explore Our Other Client{" "}
              <span className="text-[#0E6388]">
                Case Studies
              </span>
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
