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
         <div className="bg-white text-[#063349] font-inter px-6 pt-[110px] pb-20">


{/* -------------------------------- HERO SECTION (RIVAAJ STYLE) -------------------------------- */}
<section className="min-h-[80vh] w-full flex items-center 
 bg-[#FAFFD7]  text-black rounded-3xl 
px-6 py-20 mb-20 ">


  <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

 {/* LEFT TEXT */}
<div className="flex flex-col items-center text-center sm:items-start sm:text-left">

  <div className="inline-block bg-white/20 text-black px-4 py-2 
    rounded-full text-sm font-semibold mb-5 shadow-sm">
    1.3M+ Views in 90 Days • Organic Cultural Event Growth
  </div>

  <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
    Triveeni{" "}
    <span className="text-black">Events</span>
  </h1>

  <p className="text-xl mt-4 text-black/90 leading-relaxed max-w-xl">
    A community-driven Instagram strategy celebrating Indian festivals, 
    culture, and vibrant traditions with a Reels-first content approach.
  </p>

  <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-8">
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

  <div className="flex justify-center sm:justify-start w-full">
    <Link to="/contact">
      <button className="mt-8 px-8 py-3 bg-white
        text-black font-semibold rounded-full shadow-lg">
        Contact Us Now →
      </button>
    </Link>
  </div>

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

           {/* ---------------- CASE STUDIES ---------------- */}
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

/* CARD COMPONENTS */
function CaseCard({ background, logo, title, stats, link }) {
  return (
    <Link to={link}>
      <div
        className="px-6 py-8 rounded-2xl shadow-lg w-full max-w-[400px] mx-auto text-center cursor-pointer hover:scale-[1.02] transition"
        style={{ background }}
      >
        {/* LOGO */}
        <div className="w-full flex justify-center mb-5 mt-2">
          <img src={logo} className="w-20 sm:w-24 object-contain" alt={title} />
        </div>

        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-black/70 text-sm">{stats[0][0]} Views</p>

        {/* STATS */}
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
        {/* LOGO */}
        <div className="w-full flex justify-center mb-4">
          <img src={logo} className="w-20 sm:w-24 object-contain" alt={title} />
        </div>

        {/* TITLE */}
        <h3 className={`text-xl font-bold ${dark ? "text-white" : "text-black"}`}>
          {title}
        </h3>

        {/* VIEWS */}
        <p className={`mt-2 text-sm ${dark ? "text-white/90" : "text-black/70"}`}>
          {stats[0][0]} Views
        </p>

        {/* STATS */}
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