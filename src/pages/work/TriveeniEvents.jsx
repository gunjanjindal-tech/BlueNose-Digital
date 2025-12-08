// src/pages/work/TriveeniEvents.jsx
import React, { useEffect, useState } from "react";
import Counter from "../../components/Counter";
import { Link } from "react-router-dom";
import BlueSidebar from "../../components/BlueSidebar";

// ICONS (Lucide for consistency)
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

  // Scroll Tracking
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

{/* -------------------------------- HERO SECTION (RIVAAJ STYLE) -------------------------------- */}
<section className="min-h-[80vh] w-full flex items-center 
 bg-[#FAFFD7]  text-black rounded-3xl 
px-6 py-20 mb-20">


  <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT TEXT */}
    <div>
      <div className="inline-block bg-white/20 text-black px-4 py-2 
      rounded-full text-sm font-semibold mb-5 shadow-sm">
        1.3M+ Views in 90 Days • Organic Cultural Event Growth
      </div>

      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
        Triveeni{" "}
        <span className="text-black
       ">
          Events
        </span>
      </h1>

      <p className="text-xl mt-4 text-black/90 leading-relaxed max-w-xl">
        A community-driven Instagram strategy celebrating Indian festivals, 
        culture, and vibrant traditions with a Reels-first content approach.
      </p>

      <div className="flex flex-wrap gap-4 mt-8">
        {["Strategic Planning", "Data Insights", "Community Building"].map((tag, i) => (
          <div 
            key={i}
            className="bg-white/20 px-6 py-3 rounded-full border border-white/40 
            shadow text-black text-sm font-medium"
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
      <div>
        <img
          src="/client/logo-2.png"
          className="w-72 md:w-100 object-contain"
          alt="Triveeni Logo"
        />
      </div>
    </div>

  </div>
</section>


      {/* ------------ GRID LAYOUT ------------ */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-[280px_1fr] gap-12">

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
              Triveeni Events is a women-led cultural event company curating stunning Indian festivals, celebrations and community gatherings across the Atlantic region.
            </p>

            <p className="mt-4 leading-relaxed text-[#063349]/85">
              Their audience includes families, students, working professionals and community members who cherish Indian traditions, dance, music and festive culture.
            </p>

            <p className="mt-4 leading-relaxed text-[#063349]/85">
              Our mission was to build a strong Instagram brand presence using storytelling, cultural highlights and high-visibility reels.
            </p>

            <p className="mt-4 leading-relaxed text-[#063349]/85">
              We adopted a Reels-first strategy with trend-backed optimization, allowing Triveeni to generate over 1.3M views organically.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-10 place-items-center">
              {[
                { v: 1300000, t: "Total Views", sign: "+" },
                { v: 439000, t: "Accounts Reached", sign: "+" },
                { v: 89, t: "Organic Reach (%)", sign: "%" },
                { v: 130, t: "Avg. Monthly Growth (%)", sign: "%" },
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
                    <Counter end={s.v} duration={5000} />
                    {s.sign}
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
  <h2
    className="text-4xl font-extrabold text-[#0E6388] "
  >
    Services Provided
  </h2>

  <div className="grid sm:grid-cols-2 gap-6 mt-10">
    {[
      { name: "Social Media Strategy", icon: icons.strategy },
      { name: "Adda Diaries Content Creation", icon: icons.pen },
      { name: "Reels Production & Editing", icon: icons.reels },
      { name: "Analytics & Performance Tracking", icon: icons.analytics },
      { name: "Algorithm Optimization", icon: icons.optimization },
      { name: "Community Engagement", icon: icons.audience },
      { name: "Storytelling & Emotional Marketing", icon: icons.pen },
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
            <h2 className="text-4xl font-extrabold leading-[1.3] text-[#0E6388]">
              Challenge
            </h2>

            <div className="mt-6 p-10 rounded-3xl text-white 
               shadow space-y-6"
            style={{
    background: "rgb(14, 99, 136)"
  }}>
              
              <p>• Build a strong presence in a culturally competitive niche.</p>
              <p>• Increase reach without relying on paid promotions.</p>
              <p>• Showcase diverse events while maintaining cultural authenticity.</p>

              <p className="font-semibold text-white text-xl pt-2">Key challenges included:</p>

              <ul className="space-y-3 text-white/95">
                <li>• Low initial engagement</li>
                <li>• Highly saturated event content space</li>
                <li>• Need for cost-effective growth solutions</li>
                <li>• Positioning as the top cultural event brand</li>
                <li>• Creating viral-worthy reels consistently</li>
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

              <p>• Created culturally rooted content highlighting Indian celebrations.</p>
              <p>• Prioritized reels with trending audio + meaningful storytelling.</p>
              <p>• Leveraged community engagement and event-based momentum.</p>
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
              <p>• Trend-backed Reels-first content cycle</p>
              <p>• Explore-page dominance strategy</p>
              <p>• Seasonal festival content planning</p>
              <p>• SEO-optimized captions</p>
              <p>• Audience-focused storytelling</p>
              <p>• High-frequency community engagement</p>
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

