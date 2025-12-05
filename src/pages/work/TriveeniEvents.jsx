// src/pages/work/TriveeniEvents.jsx
import React, { useEffect, useState } from "react";
import Counter from "../../components/Counter";
import { Link } from "react-router-dom";
import BlueSidebar from "../../components/BlueSidebar"; // ✅ NEW IMPORT

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

  // Sidebar Active Scroll Detect
  useEffect(() => {
    const observers = [];

    sections.forEach((id) => {
      const sec = document.getElementById(id);
      if (!sec) return;

      const obs = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) setActive(id);
        },
        {
          threshold: 0.35,
          rootMargin: "-120px 0px -200px 0px",
        }
      );

      obs.observe(sec);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // ICONS
  const icons = {
    strategy: (
      <svg className="w-7 h-7" fill="none" stroke="white" strokeWidth="1.5">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20l4-4 4 4 4-4 4 4" />
      </svg>
    ),
    optimization: (
      <svg className="w-7 h-7" fill="none" stroke="white" strokeWidth="1.5">
        <path d="M3 12h18M7 8h10M7 16h10" />
      </svg>
    ),
    reels: (
      <svg className="w-7 h-7" fill="none" stroke="white" strokeWidth="1.5">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M10 9l5 3-5 3V9z" />
      </svg>
    ),
    analytics: (
      <svg className="w-7 h-7" fill="none" stroke="white" strokeWidth="1.5">
        <path d="M4 18V9m5 9V6m5 12V3m5 15v-8" />
      </svg>
    ),
    audience: (
      <svg className="w-7 h-7" fill="none" stroke="white" strokeWidth="1.5">
        <circle cx="12" cy="7" r="3" />
        <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
      </svg>
    ),
  };

  return (
    <div className="bg-white text-[#063349] font-inter px-6 pt-6 pb-20">

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent 
            bg-gradient-to-r from-[#0E3D55] to-[#11719A]">
            Triveeni Events
          </h1>

          <p className="text-xl mt-4 text-[#063349]/80">
            1.3M+ Views in 90 Days — Organic Social Media Strategy
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            {["Strategic Planning", "Data Insights", "Community Building"].map((item, i) => (
              <div
                key={i}
                className="bg-white px-6 py-3 rounded-full border border-[#D7ECF6] shadow text-[#063349]"
              >
                {item}
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

        <div className="flex justify-center pt-6">
          <img src="/src/assets/1 (1).png" className="w-72 md:w-96 object-contain" />
        </div>
      </section>

      {/* ---------------- MAIN GRID ---------------- */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-[280px_1fr] gap-10">

        {/* ---------------- BLUE SIDEBAR (Reusable) ---------------- */}
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

        {/* ---------------- RIGHT CONTENT ---------------- */}
        <div className="space-y-16">

          {/* ---------------- OVERVIEW ---------------- */}
          <section id="overview" className="p-10 rounded-3xl bg-white shadow border border-[#D7ECF6]">
            <h2 className="text-4xl font-extrabold text-[#0E3D55]">Overview</h2>

            <p className="mt-6 leading-relaxed text-[#063349]/85">
              Triveeni Events is a women-led event planning company specializing in creating extraordinary 
              Indian celebrations and cultural events across the Atlantic region.
            </p>

            <p className="mt-4 leading-relaxed text-[#063349]/85">
              The target audience includes people of all ages who love to experience and celebrate the 
              vibrancy of Indian festivals, traditions, and cultural gatherings.
            </p>

            <p className="mt-4 leading-relaxed text-[#063349]/85">
              As a women-led business, Triveeni Events brings a unique perspective and deep understanding 
              of Indian traditions, customs, and the importance of preserving cultural heritage while 
              creating modern, memorable experiences.
            </p>

            <p className="mt-4 leading-relaxed text-[#063349]/85">
              Our goal was to establish Triveeni Events as the premier Instagram presence for Indian event 
              planning in the Atlantic region through organic growth strategies.
            </p>

            <p className="mt-4 leading-relaxed text-[#063349]/85">
              We focused on a Reels-first content approach and algorithm optimization to maximize reach 
              without heavy ad spend.
            </p>

          <div className="grid sm:grid-cols-2 gap-4 mt-8 place-items-center">
  {[
    { v: 1300000, t: "Total Views", sign: "+" },
    { v: 439000, t: "Accounts Reached", sign: "+" },
    { v: 89, t: "Organic Reach", sign: "%" },
    { v: 130, t: "Avg. Monthly Growth", sign: "%" },
  ].map((s, i) => (
    <div
      key={i}
      className="p-4 w-[250px] rounded-2xl shadow-md text-white
      bg-gradient-to-br from-[#4BC1E8] to-[#0E6388]"
    >
      <div className="text-2xl font-bold">
        <Counter end={s.v} duration={8600} />{s.sign}
      </div>
      <div className="text-white/85 text-sm mt-1">{s.t}</div>
    </div>
  ))}
</div>

          </section>

          {/* ---------------- SERVICES PROVIDED ---------------- */}
         <section id="services-provided" className="p-10 rounded-3xl bg-white shadow border border-[#D7ECF6]">
  <h2 className="text-4xl font-extrabold text-[#0E3D55]">Services Provided</h2>

  <div className="grid sm:grid-cols-2 gap-6 mt-10">
    {[
      { name: "Social Media Strategy", icon: icons.strategy },
      { name: "Content Creation & Optimization", icon: icons.optimization },
      { name: "Reels Production & Editing", icon: icons.reels },
      { name: "Analytics & Performance Tracking", icon: icons.analytics },
      { name: "Audience Growth Management", icon: icons.audience },
    ].map((item, i) => (
      <div
        key={i}
        className="
          px-5 py-4 
          min-w-[280px] max-w-[320px]
          rounded-2xl flex items-center gap-4 text-white 
          shadow-lg bg-gradient-to-br from-[#4BC1E8] to-[#0E6388]
        "
      >
        <div className="w-6 h-6">{item.icon}</div>

        <p className="font-semibold text-base leading-tight">
          {item.name}
        </p>
      </div>
    ))}
  </div>
</section>


          {/* ---------------- CHALLENGE ---------------- */}
          <section id="challenge" className="p-10 rounded-3xl bg-white shadow border border-[#D7ECF6]">
            <h2 className="text-4xl font-extrabold text-[#0E3D55]">Challenge</h2>

            <div className="mt-6 p-10 rounded-3xl text-white 
              bg-gradient-to-br from-[#4BC1E8] to-[#0E6388] shadow space-y-6"
            >
              <p>
                We started by reviewing Triveeni Events' existing Instagram presence, brand guidelines, 
                and growth objectives.
              </p>

              <p>
                The client was operating in a competitive event management market with limited advertising 
                budget and needed rapid, sustainable growth.
              </p>

              <p className="font-semibold text-white text-xl pt-2">Key challenges included:</p>

              <ul className="space-y-3 text-white/95">
                <li>• Low initial engagement</li>
                <li>• Limited organic reach in a saturated niche</li>
                <li>• Need for cost-effective growth</li>
                <li>• Building an authentic audience</li>
                <li>• Showcasing event portfolio in engaging formats</li>
              </ul>
            </div>
          </section>

          {/* ---------------- APPROACH ---------------- */}
          <section id="approach" className="p-10 rounded-3xl bg-white shadow border border-[#D7ECF6]">
            <h2 className="text-4xl font-extrabold text-[#0E3D55]">Approach</h2>

            <div className="mt-6 p-10 rounded-3xl text-white 
              bg-gradient-to-br from-[#4BC1E8] to-[#0E6388] shadow space-y-6"
            >
              <p>
                • Build awareness through optimized content strategy featuring Reels, event 
                  highlights, and behind-the-scenes.
              </p>

              <p>
                • Scale performing formats and double down on audience-driven posting strategies.
              </p>

              <p>
                • Maximize reach through seasonal themes, trending audio, and Explore-based content.
              </p>
            </div>
          </section>

          {/* ---------------- KEY STRATEGY ---------------- */}
          <section id="key-strategy" className="p-10 rounded-3xl bg-white shadow border border-[#D7ECF6]">
            <h2 className="text-4xl font-extrabold text-[#0E3D55]">Key Strategies Implemented</h2>

            <div className="mt-6 p-10 rounded-3xl text-white 
              bg-gradient-to-br from-[#4BC1E8] to-[#0E6388] shadow space-y-6"
            >
              <p>• Reels-first content methodology (55.8% of total engagement)</p>
              <p>• Viral Explore-page strategy</p>
              <p>• Data-driven posting schedule</p>
              <p>• Trending audio & hashtag optimization</p>
              <p>• SEO-rich captions</p>
              <p>• Community engagement</p>
            </div>
          </section>

          {/* ---------------- CASE STUDIES ---------------- */}
         <section id="case-studies">
  <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text 
    bg-gradient-to-r from-[#0E3D55] to-[#11719A]">
    Read Other Case Studies Of Company
  </h2>

  <div className="grid sm:grid-cols-2 gap-8 mt-10 place-items-center">

    {/* Card 1 */}
    <div className="
      bg-[#B71C1C] text-white 
      px-6 py-6 
      w-[270px] sm:w-[300px]
      rounded-2xl shadow-lg
      text-center
    ">
      <h3 className="text-xl font-bold">Sake Cafe | Sushi Bar & Grill</h3>
      <p className="mt-2 text-white/90 text-sm">9.7K+ Views in 60 Days</p>
    </div>

    {/* Card 2 */}
    <div className="
      bg-[#FB8C00] text-white 
      px-6 py-6 
      w-[270px] sm:w-[300px]
      rounded-2xl shadow-lg
      text-center
    ">
      <h3 className="text-xl font-bold">Beaver Bank Station Bar & Grill</h3>
      <p className="mt-2 text-white/90 text-sm">79K+ Views in 90 Days</p>
    </div>

    {/* Card 3 */}
    <div className="
      bg-[#F7F9E3] text-black 
      px-6 py-6 
      w-[270px] sm:w-[300px]
      rounded-2xl shadow-lg
      text-center mb-12
    ">
      <h3 className="text-xl font-bold">Triveeni Events</h3>
      <p className="mt-2 text-black/70 text-sm">1.3M+ Views</p>
    </div>

    {/* Card 4 */}
    <div className="
      bg-[#1B5E20] text-white 
      px-6 py-6 
      w-[270px] sm:w-[300px]
      rounded-2xl shadow-lg
      text-center mb-12
    ">
      <h3 className="text-xl font-bold">The Garden Retreat</h3>
      <p className="mt-2 text-white/90 text-sm">67K+ Views</p>
    </div>

  </div>
</section>


        </div>
      </section>
    </div>
  );
}