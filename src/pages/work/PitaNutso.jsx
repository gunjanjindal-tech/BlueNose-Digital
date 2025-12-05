// src/pages/work/PitaNutso.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Counter from "../../components/Counter";
import BlueSidebar from "../../components/BlueSidebar";
export default function PitaNutso() {
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

  // ICONS (now white like Triveeni)
  const icons = {
    strategy: (
      <svg className="w-7 h-7" fill="none" stroke="white" strokeWidth="1.5">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20l4-4 4 4 4-4 4 4" />
      </svg>
    ),
    optimization: (
      <svg className="w-7 h-7" fill="none" stroke="white" strokeWidth="1.5">
        <path d="M3 12h18" />
        <path d="M7 8h10M7 16h10" />
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
    <div className="bg-white text-[#063349] font-inter pb-20">

      {/* ---------------- HERO (Matching Triveeni Theme) ---------------- */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text 
            bg-gradient-to-r from-[#0E3D55] to-[#11719A]">
            Pita Nutso
          </h1>

          <p className="text-xl mt-4 text-[#063349]/80">
            36.1K+ Views in 90 Days — Organic Growth Strategy for Pita Nutso
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            {["Brand Roadmap", "Design Impact", "Performance Pulse"].map((tag, i) => (
              <div
                key={i}
                className="bg-white px-6 py-3 rounded-full border border-[#D7ECF6] shadow text-[#063349]"
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

        <div className="flex justify-center">
          <img src="/src/assets/3.png" className="w-72 md:w-96 object-contain" />
        </div>
      </section>

      {/* ---------------- MAIN GRID ---------------- */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-[280px_1fr] gap-12">

        {/* ---------------- BLUE SIDEBAR (Same as Triveeni) ---------------- */}
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
    <section
  id="overview"
  className="scroll-mt-32 p-8 bg-white rounded-2xl shadow border border-[#D7ECF6]"
>
  <h2 className="text-3xl font-bold text-[#0E3D55]">Overview</h2>

  <p className="mt-4 text-base text-[#063349]/85 leading-relaxed">
    Pita Nutso is a fast-casual restaurant specializing in fresh, flavorful Mediterranean cuisine 
    including shawarma, bowls, wraps, and sides.
  </p>

  <p className="mt-3 text-base text-[#063349]/85 leading-relaxed">
    The target audience includes young professionals seeking quick quality meals, food enthusiasts 
    exploring Mediterranean flavors, students looking for affordable dining options, and busy 
    individuals who value fresh, customizable meals.
  </p>

  <p className="mt-3 text-base text-[#063349]/85 leading-relaxed">
    Our goal was to establish Pita Nutso as a go-to destination on Instagram for Mediterranean 
    cuisine through authentic, engaging content.
  </p>

  <p className="mt-3 text-base text-[#063349]/85 leading-relaxed">
    We focused on diverse content—appetizing food visuals, customer experiences, and menu highlights—
    maximizing organic reach while building a loyal foodie community.
  </p>

  {/* Compact Stats */}
  <div className="grid sm:grid-cols-2 gap-4 mt-8 place-items-center">
    {[
      { v: 36100, t: "Total Views (90 Days)", sign: "+" },
      { v: 52, t: "Content Shares", sign: "+" },
      { v: 276, t: "Total Interactions", sign: "+" },
      { v: 66, t: "Avg. Non-Follower Engagement", sign: "%" },
    ].map((s, i) => (
      <div
        key={i}
        className="p-4 w-[250px] rounded-2xl shadow-md text-white 
        bg-gradient-to-br from-[#4BC1E8] to-[#0E6388]"
      >
        <div className="text-2xl font-bold">
          <Counter end={s.v} duration={8600} />{s.sign}
        </div>
        <p className="text-white/85 text-sm mt-1">{s.t}</p>
      </div>
    ))}
  </div>
</section>




          {/* ---------------- SERVICES PROVIDED ---------------- */}
     <section id="services-provided" className="p-10 bg-white rounded-3xl shadow border border-[#D7ECF6]">
  <h2 className="text-4xl font-extrabold text-[#0E3D55]">Services Provided</h2>

  <div className="grid sm:grid-cols-2 gap-6 mt-10">
    {[
      { name: "Social Media Strategy", icon: icons.strategy },
      { name: "Algorithm Optimization", icon: icons.optimization },
      { name: "Analytics & Performance Tracking", icon: icons.analytics },
      { name: "Community Engagement Management", icon: icons.audience },
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
 <section
  id="challenge"
  className="p-10 bg-white rounded-3xl shadow border border-[#D7ECF6]"
>
  <h2 className="text-4xl font-extrabold text-[#0E3D55]">Challenge</h2>

  {/* Gradient box — SAME as Key Strategy */}
  <div
    className="mt-6 p-10 rounded-3xl text-white 
      bg-gradient-to-br from-[#4BC1E8] to-[#0E6388] shadow space-y-6"
  >
    <p className="leading-relaxed">
      • We started by reviewing Pita Nutso's existing Instagram presence,
      brand identity, and growth objectives.
    </p>

    <p className="leading-relaxed">
      • The client was operating in a competitive fast-casual and Mediterranean
      food market and needed sustainable organic growth to increase brand
      awareness and drive foot traffic.
    </p>

    <p className="font-bold text-white text-lg">
      Key challenges included:
    </p>

    <ul className="space-y-3 leading-relaxed text-white/95 ml-4 list-disc">
      <li>Building momentum from a smaller follower base</li>
      <li>Standing out in competitive Mediterranean and fast-casual dining market</li>
      <li>Showcasing menu variety effectively</li>
      <li>Limited budget for content production and advertising</li>
      <li>Creating appetizing content that drives cravings and visits</li>
      <li>Highlighting customization options and fresh ingredients</li>
      <li>Converting Instagram engagement into actual restaurant visits and orders</li>
      <li>Building brand recognition in local market</li>
    </ul>
  </div>
</section>




          {/* ---------------- APPROACH ---------------- */}
         <section id="approach" className="p-10 bg-white rounded-3xl shadow border border-[#D7ECF6]">
  <h2 className="text-4xl font-extrabold text-[#0E3D55]">Approach</h2>

  <div className="mt-6 p-10 rounded-3xl text-white 
    bg-gradient-to-br from-[#4BC1E8] to-[#0E6388] shadow space-y-6">

    <p className="leading-relaxed">
      • Build awareness through appetizing content that showcases Pita Nutso's menu variety and quality. 
      Establish visual identity and content foundation.
    </p>

    <p className="leading-relaxed">
      • Analyzed performance data and refined content strategy based on audience engagement patterns. 
      Focused on formats that drove highest engagement.
    </p>

    <p className="leading-relaxed">
      • Maximized reach through refined content strategy and proven engagement formulas. 
      Achieved significant growth in non-follower engagement.
    </p>

  </div>
</section>


          {/* ---------------- KEY STRATEGY ---------------- */}
         <section id="key-strategy" className="p-10 bg-white rounded-3xl shadow border border-[#D7ECF6]">
  <h2 className="text-4xl font-extrabold text-[#0E3D55]">Key Strategies Implemented:</h2>

  <div className="mt-6 p-10 rounded-3xl text-white 
    bg-gradient-to-br from-[#4BC1E8] to-[#0E6388] shadow space-y-6">

    <p className="leading-relaxed">
      • Optimized posting schedule based on local audience engagement times
    </p>

    <p className="leading-relaxed">
      • Maintained consistent visual quality and brand aesthetic
    </p>

    <p className="leading-relaxed">
      • Optimized captions with engaging descriptions and calls-to-action
    </p>

    <p className="leading-relaxed">
      • Launched content strategy featuring shawarma, bowls, wraps, and sides
    </p>

  </div>
</section>


          {/* ---------------- CASE STUDIES ---------------- */}
          <section id="case-studies">
  <h2 className="text-4xl font-extrabold text-center text-[#0E3D55]">
    Read Other Case Studies Of Company
  </h2>

  <div className="grid md:grid-cols-2 gap-8 mt-10 place-items-center">

    {/* Card 1 */}
    <div
      className="bg-[#B71C1C] text-white 
      px-6 py-6 w-[280px] sm:w-[320px]
      rounded-2xl shadow-lg"
    >
      <h3 className="text-xl font-bold">Sake Cafe | Sushi Bar & Grill</h3>
      <p className="mt-2 text-white/85 text-sm">9.7K+ Views in 60 Days</p>

      <div className="grid grid-cols-2 gap-3 mt-5 text-sm">
        <div className="bg-white/20 p-3 rounded-xl">9.7K Views</div>
        <div className="bg-white/20 p-3 rounded-xl">83.6% Engagement</div>
        <div className="bg-white/20 p-3 rounded-xl">54% Non-Follower</div>
        <div className="bg-white/20 p-3 rounded-xl">276 Interactions</div>
      </div>
    </div>

    {/* Card 2 */}
    <div
      className="bg-[#F3DDBC] text-black 
      px-6 py-6 w-[280px] sm:w-[320px]
      rounded-2xl shadow-lg"
    >
      <h3 className="text-xl font-bold">Pita Nutso</h3>
      <p className="mt-2 text-black/70 text-sm">36.1K+ Views in 90 Days</p>

      <div className="grid grid-cols-2 gap-3 mt-5 text-sm">
        <div className="bg-white p-3 rounded-xl shadow text-center">36.1K+</div>
        <div className="bg-white p-3 rounded-xl shadow text-center">52 Shares</div>
        <div className="bg-white p-3 rounded-xl shadow text-center">276 Interactions</div>
        <div className="bg-white p-3 rounded-xl shadow text-center">66% Engagement</div>
      </div>
    </div>

    {/* Card 3 */}
    <div
      className="bg-[#102458] text-white 
      px-6 py-6 w-[280px] sm:w-[320px]
      rounded-2xl shadow-lg mb-12"
    >
      <h3 className="text-xl font-bold">Hearthstone Inn</h3>
      <p className="mt-2 text-white/85 text-sm">1.6K+ Views in 60 Days</p>

      <div className="grid grid-cols-2 gap-3 mt-5 text-sm">
        <div className="bg-white/20 p-3 rounded-xl">1.6K Views</div>
        <div className="bg-white/20 p-3 rounded-xl">78% Non-Follower</div>
        <div className="bg-white/20 p-3 rounded-xl">94.6% Rate</div>
        <div className="bg-white/20 p-3 rounded-xl">53 Reached</div>
      </div>
    </div>

    {/* Card 4 */}
    <div
      className="bg-[#1B5E20] text-white 
      px-6 py-6 w-[280px] sm:w-[320px]
      rounded-2xl shadow-lg mb-12"
    >
      <h3 className="text-xl font-bold">The Garden Retreat</h3>
      <p className="mt-2 text-white/90 text-sm">67K+ Views in 60 Days</p>

      <div className="grid grid-cols-2 gap-3 mt-5 text-sm">
        <div className="bg-white/20 p-3 rounded-xl">67K Views</div>
        <div className="bg-white/20 p-3 rounded-xl">74 Shared</div>
        <div className="bg-white/20 p-3 rounded-xl">13K Followers</div>
        <div className="bg-white/20 p-3 rounded-xl">49% Engagement</div>
      </div>
    </div>

  </div>
</section>


        </div>
      </section>
    </div>
  );
}