import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlueSidebar from "../../components/BlueSidebar";
import Counter from "../../components/Counter";

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
  reels: <Video className="w-full h-full" />,
  analytics: <BarChart3 className="w-full h-full" />,
  audience: <Users className="w-full h-full" />,
};

export default function RivaazRestroBar() {
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
    <div className="bg-white text-[#063349] font-inter px-6 pt-6 pb-20">

      {/* -------------------------------- HERO SECTION -------------------------------- */}
     <section className="min-h-[80vh] w-full flex items-center 
 bg-[#ad863e] text-white rounded-3xl px-6 py-20">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div className="self-start">
            <div className="inline-block bg-white/20 text-black px-4 py-2 rounded-full text-sm font-semibold mb-5 shadow-sm">
              48.9K+ Views in 30 Days • Cultural Dining Launch Strategy
            </div>

            <h1 className="inline-block text-4xl md:text-5xl font-extrabold text-black">
              Rivaaj{" "}
              <span className="text-black">
                Resto-Bar
              </span>
            </h1>

            <p className="text-xl mt-4 text-black leading-relaxed">
              Launching Bedford's first cultural resto-bar through authentic storytelling, 
              cultural branding, and emotionally rich Instagram positioning.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              {["Strategic Flow", "Impactful Content", "Community Building"].map((tag, i) => (
                <div 
                  key={i} 
                  className="bg-white/20 px-6 py-3 rounded-full border border-white/40 shadow text-black"
                >
                  {tag}
                </div>
              ))}
            </div>

            <Link to="/contact">
              <button className="mt-8 px-8 py-3 bg-white
                text-black font-semibold rounded-full shadow-lg">
                Contact Us Now →
              </button>
            </Link>
          </div>

          {/* RIGHT LOGO */}
          <div className="flex justify-center">
            <div >
              <img
                src="/client/logo-17.png"
                className="w-72 md:w-100 object-contain"
                alt="Rivaaj Logo"
              />
            </div>
          </div>

        </div>
      </section>

      {/* -------------------------------- PAGE GRID -------------------------------- */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-[280px_1fr] gap-12 mt-16">

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

        {/* -------------------------------- RIGHT CONTENT -------------------------------- */}
        <div className="space-y-16">

          {/* ------------ OVERVIEW ------------ */}
          <section id="overview" className="p-10 bg-white rounded-3xl shadow border border-[#D7ECF6]">
            <h2 className="text-4xl font-extrabold text-[#0E6388]">Overview</h2>

            <div className="mt-6 space-y-4 text-[#063349]/85 leading-relaxed">
              <p>
                Rivaaj Bedford is the community’s first cultural resto-bar, rooted in the essence 
                of Indian tradition. “Rivaaj” represents tradition, rituals, and cultural heritage — 
                creating a warm, welcoming environment for all.
              </p>

              <p>
                The target audience includes Indian diaspora, cultural explorers, families celebrating 
                traditions, food enthusiasts, and locals looking for authentic Indian cultural dining.
              </p>

              <p>
                Our objective was to build a cultural brand identity through emotional storytelling, 
                authentic cuisine showcases, and community-driven engagement.
              </p>
            </div>

            {/* Stats */}
            <div className="grid sm:grid-cols-2 gap-6 mt-10 place-items-center">
              {[
                { v: 48900, t: "Total Views (30 Days)", sign: "+" },
                { v: 403, t: "Total Interactions", sign: "+" },
                { v: 74, t: "New Followers (30 Days)", sign: "+" },
                { v: 17, t: "Content Shared", sign: "+" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="p-6 w-[250px] rounded-2xl shadow-md text-white
                   "
                  style={{
    background: "rgb(14, 99, 136)"
  }}
                >
                  <div className="text-2xl font-bold">
                    <Counter end={s.v} duration={5000} />{s.sign}
                  </div>
                  <p className="mt-2 text-white/85 text-sm">{s.t}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ------------ SERVICES PROVIDED ------------ */}
          <section
            id="services-provided"
            className="p-10 rounded-3xl bg-white shadow border border-[#D7ECF6]"
          >
            <h2 className="text-4xl font-extrabold text-[#0E6388]">
              Services Provided
            </h2>

            <div className="grid sm:grid-cols-2 gap-6 mt-10"
            >
              {[
                { name: "Social Media Strategy", icon: icons.strategy },
                { name: "Cultural Content Creation", icon: icons.pen },
                { name: "Traditional Food Videography", icon: icons.reels },
                { name: "Analytics & Performance Tracking", icon: icons.analytics },
                { name: "Cultural Photography & Storytelling", icon: icons.pen },
                { name: "Brand Identity Development", icon: icons.audience },
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

                  <p className="font-semibold text-base leading-tight">{service.name}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ------------ CHALLENGE ------------ */}
          <section id="challenge" className="p-10 bg-white rounded-3xl shadow border border-[#D7ECF6]">
            <h2 className="text-4xl font-extrabold text-[#0E6388]">Challenge</h2>

            <div className="mt-6 p-10 rounded-3xl text-white 
              shadow space-y-6"
            style={{
    background: "rgb(14, 99, 136)"
  }}>

              <p>• Introduce a culturally rich dining concept to the Bedford market.</p>
              <p>• Balance cultural authenticity with broad audience appeal.</p>
              <p>• Build an emotional connection using culture, traditions, and storytelling.</p>

              <p className="font-semibold text-white text-xl pt-2">Key challenges included:</p>

              <ul className="space-y-3 text-white/95">
                <li>• Launching a brand-new concept</li>
                <li>• Educating audience about “Rivaaj” meaning & cultural value</li>
                <li>• Creating emotional ‘Welcome Home’ identity</li>
                <li>• Showcasing both food and cultural experience</li>
              </ul>
            </div>
          </section>

          {/* ------------ APPROACH ------------ */}
          <section id="approach" className="p-10 bg-white rounded-3xl shadow border border-[#D7ECF6]">
            <h2 className="text-4xl font-extrabold text-[#0E6388]">Approach</h2>

            <div className="mt-6 p-10 rounded-3xl text-white 
               shadow space-y-6"
            style={{
    background: "rgb(14, 99, 136)"
  }}>

              <p>
                • Build brand identity rooted in Indian culture, rituals, and traditional dining experience.
              </p>
              <p>
                • Establish emotional positioning through bilingual captions, cultural references, and warm visuals.
              </p>
              <p>
                • Create a content strategy showcasing cuisine, ambiance, culture, and storytelling.
              </p>
            </div>
          </section>

          {/* ------------ KEY STRATEGY ------------ */}
          <section id="key-strategy" className="p-10 bg-white rounded-3xl shadow border border-[#D7ECF6]">
            <h2 className="text-4xl font-extrabold text-[#0E6388]">
              Key Strategies Implemented
            </h2>

            <div className="mt-6 p-10 rounded-3xl text-white
               shadow space-y-6"
            style={{
    background: "rgb(14, 99, 136)"
  }}>
              <p>• Cultural storytelling explaining traditions & rituals</p>
              <p>• Cuisine showcases with cultural significance</p>
              <p>• Bilingual captions (Hindi + English)</p>
              <p>• Geo-targeted optimization for Bedford</p>
              <p>• Warm, emotional brand aesthetic</p>
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

