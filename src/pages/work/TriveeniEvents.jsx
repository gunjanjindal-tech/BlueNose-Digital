// src/pages/work/TriveeniEvents.jsx
import React, { useEffect, useState } from "react";
import Counter from "../../components/Counter";
import { Link } from "react-router-dom";
import BlueSidebar from "../../components/BlueSidebar";
import { Helmet } from "react-helmet";

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

  // ScrollSpy Tracking (Same as Beaver)
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
  <Helmet>
        <title>Triveeni Events Case Study | Bluenose Digital Marketing</title>
      </Helmet>
      {/* ================= HERO SECTION ================= */}
      <section className="min-h-[80vh] w-full flex items-center 
      bg-[#FAFFD7] text-black rounded-3xl px-6 py-20 mb-20">

        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <div className="inline-block bg-white/20 text-black px-4 py-2 
              rounded-full text-sm font-semibold mb-5 shadow-sm">
              1.3M+ Views in 90 Days • Organic Cultural Event Growth
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Triveeni <span className="text-black">Events</span>
            </h1>

            <p className="text-xl mt-4 text-black/90 leading-relaxed max-w-xl">
              A community-driven Instagram strategy celebrating Indian festivals, 
              culture, and vibrant traditions with a Reels-first content approach.
            </p>

            {/* TAGS */}
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

            <Link to="/contact">
              <button className="mt-8 px-8 py-3 bg-white text-black font-semibold rounded-full shadow-lg">
                Contact Us Now →
              </button>
            </Link>
          </div>

          {/* RIGHT LOGO */}
          <div className="flex justify-center">
            <img
              src="/client/logo-2.png"
              className="w-72 md:w-96 object-contain"
              alt="Triveeni Logo"
            />
          </div>

        </div>
      </section>

      {/* ================= GRID LAYOUT (BEAVER STYLE) ================= */}
      <section className="max-w-7xl mx-auto grid lg:grid-cols-[280px_1fr] gap-12">

        {/* ---------- SIDEBAR (fixed + sticky) ---------- */}
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
              hideMobileButton={true}
            />
          </aside>
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div className="space-y-16">

          {/* ------------ OVERVIEW ------------ */}
          <section id="overview" className="p-10 bg-white rounded-3xl shadow border border-[#D7ECF6]">
            <h2 className="text-4xl font-extrabold text-[#0E6388]">Overview</h2>

            <p className="mt-6 leading-relaxed text-[#063349]/85">
              Triveeni Events is a women-led cultural event company curating stunning Indian festivals,
              celebrations and community gatherings across the Atlantic region.
            </p>

            <p className="mt-4 leading-relaxed text-[#063349]/85">
              Their audience includes families, students, working professionals and community members
              who cherish Indian traditions, dance, music and festive culture.
            </p>

            <p className="mt-4 leading-relaxed text-[#063349]/85">
              Our mission was to build a strong Instagram brand presence using storytelling,
              cultural highlights and high-visibility reels.
            </p>

            <p className="mt-4 leading-relaxed text-[#063349]/85">
              A Reels-first strategy helped Triveeni generate over 1.3M views organically.
            </p>

            {/* Stats */}
            <div className="grid sm:grid-cols-2 gap-6 mt-10 place-items-center">
              {[
                { v: 1300000, t: "Total Views", sign: "+" },
                { v: 439000, t: "Accounts Reached", sign: "+" },
                { v: 89, t: "Organic Reach (%)", sign: "%" },
                { v: 130, t: "Avg. Monthly Growth (%)", sign: "%" },
              ].map((s, i) => (
                <div key={i}
                  className="p-6 w-[250px] rounded-2xl shadow-md text-white"
                  style={{ background: "rgb(14,99,136)" }}>
                  <div className="text-2xl font-bold"><Counter end={s.v} />{s.sign}</div>
                  <p className="mt-2 text-white/85 text-sm">{s.t}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ------------ SERVICES PROVIDED ------------ */}
          <section id="services-provided" className="p-10 bg-white rounded-3xl shadow border border-[#D7ECF6]">
            <h2 className="text-4xl font-extrabold text-[#0E6388]">Services Provided</h2>

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
                  className="px-5 py-4 flex items-center gap-4 text-white rounded-2xl shadow-lg"
                  style={{ background: "rgb(14,99,136)" }}>
                  <div className="p-2 bg-white/20 rounded-xl w-8 h-8 flex items-center justify-center">
                    {s.icon}
                  </div>
                  <p className="font-semibold">{s.name}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ------------ CHALLENGE ------------ */}
          <section id="challenge" className="p-10 bg-white rounded-3xl shadow border border-[#D7ECF6]">
            <h2 className="text-4xl font-extrabold text-[#0E6388]">Challenge</h2>

            <div className="mt-6 p-10 rounded-3xl text-white shadow"
              style={{ background: "rgb(14,99,136)" }}>
              <ul className="space-y-3 list-disc list-inside">
                <li>Build a presence in a culturally competitive niche.</li>
                <li>Boost reach organically without paid ads.</li>
                <li>Showcase diverse events while maintaining authenticity.</li>
                <li>Create consistent viral-worthy reels.</li>
                <li>Position Triveeni as the top cultural event brand.</li>
              </ul>
            </div>
          </section>

          {/* ------------ APPROACH ------------ */}
          <section id="approach" className="p-10 bg-white rounded-3xl shadow border border-[#D7ECF6]">
            <h2 className="text-4xl font-extrabold text-[#0E6388]">Approach</h2>

            <div className="mt-6 p-10 rounded-3xl shadow text-white"
              style={{ background: "rgb(14,99,136)" }}>
              <ul className="space-y-3 list-disc list-inside">
                <li>Culturally rooted content highlighting Indian celebrations.</li>
                <li>Reels-first strategy using trends + storytelling.</li>
                <li>Community engagement + event-driven content cycles.</li>
              </ul>
            </div>
          </section>

          {/* ------------ KEY STRATEGY ------------ */}
          <section id="key-strategy" className="p-10 bg-white rounded-3xl shadow border border-[#D7ECF6]">
            <h2 className="text-4xl font-extrabold text-[#0E6388]">Key Strategies Implemented</h2>

            <div className="mt-6 p-10 rounded-3xl shadow text-white"
              style={{ background: "rgb(14,99,136)" }}>
              <ul className="space-y-3 list-disc list-inside">
                <li>Trend-backed reels-first posting model</li>
                <li>Explore-page optimization</li>
                <li>Festival-based content calendar</li>
                <li>SEO-optimized captions</li>
                <li>Community-driven storytelling</li>
                <li>High-frequency engagement cycles</li>
              </ul>
            </div>
          </section>

          {/* ------------ OTHER CASE STUDIES ------------ */}
          <section id="case-studies" className="mt-16">
            <h2 className="text-center text-3xl md:text-4xl font-extrabold text-[#063349] mb-10">
              Explore Our Other Client <span className="text-[#0E6388]">Case Studies</span>
            </h2>

            <div className="grid sm:grid-cols-2 gap-10">

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

/* ======================= CASE CARD COMPONENTS ======================= */
function CaseCard({ background, logo, title, stats, link }) {
  return (
    <Link to={link}>
      <div
        className="px-6 py-8 rounded-2xl shadow-lg w-full max-w-[400px] mx-auto text-center hover:scale-[1.02] transition"
        style={{ background }}
      >
        <div className="w-full flex justify-center mb-4">
          <img src={logo} className="w-20 sm:w-24 object-contain" alt={title} />
        </div>

        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-black/70 text-sm">{stats[0][0]} Views</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-5">
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
        className={`px-6 py-8 rounded-2xl shadow-lg text-center max-w-[400px] mx-auto hover:scale-[1.02] transition ${
          dark ? "text-white" : "text-black"
        }`}
        style={{ background }}
      >
        <div className="w-full flex justify-center mb-4">
          <img src={logo} className="w-20 sm:w-24 object-contain" alt={title} />
        </div>

        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-sm opacity-80">{stats[0][0]} Views</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-5">
          {stats.map(([v, t], i) =>
            dark ? (
              <CaseStatDark key={i} v={v} t={t} />
            ) : (
              <CaseStat key={i} v={v} t={t} />
            )
          )}
        </div>
      </div>
    </Link>
  );
}

function CaseStat({ v, t }) {
  return (
    <div className="bg-white text-black p-4 rounded-lg shadow text-center min-h-[85px]">
      <p className="font-bold text-lg">{v}</p>
      <p className="text-xs text-black/70">{t}</p>
    </div>
  );
}

function CaseStatDark({ v, t }) {
  return (
    <div className="bg-white/20 text-white p-4 rounded-lg shadow text-center min-h-[85px]">
      <p className="font-bold text-lg">{v}</p>
      <p className="text-xs text-white/80">{t}</p>
    </div>
  );
}
