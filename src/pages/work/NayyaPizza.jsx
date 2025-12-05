// src/pages/work/NayyaPizza.jsx
import React, { useEffect, useState } from "react";
import Counter from "../../components/Counter";
import BlueSidebar from "../../components/BlueSidebar";

export default function NayyaPizza() {
  const sections = [
    "overview",
    "services-provided",
    "challenge",
    "approach",
    "key-strategy",
    "case-studies",
  ];

  const [active, setActive] = useState("overview");

  // Sidebar Active Section
  useEffect(() => {
    const observers = [];
    sections.forEach((id) => {
      const sec = document.getElementById(id);
      if (!sec) return;

      const obs = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) setActive(id);
        },
        { threshold: 0.3, rootMargin: "-100px 0px -200px 0px" }
      );

      obs.observe(sec);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="bg-white text-[#063349] font-inter pb-20">

      {/* ---------------- HERO ---------------- */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT */}
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#0E3D55]">Nayya Pizza & Grill</h1>
          <p className="text-xl mt-4 text-[#063349]/80">
            3.6M+ Views in 90 Days — Explosive Organic Growth for Nayya Pizza & Grill
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            {["Strategic Planning", "Performance Pulse", "Content Power"].map((item) => (
              <div key={item} className="px-6 py-3 bg-white border border-[#D7ECF6] rounded-full shadow text-[#063349]">
                {item}
              </div>
            ))}
          </div>

          <button className="mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-[#4BC1E8] to-[#0E6388] text-white shadow-lg font-semibold">
            Book A Callback
          </button>
        </div>

        {/* RIGHT IMAGE BOX */}
        <div className="flex justify-center">
          <div className="bg-[#FF7A00] p-10 rounded-full shadow-xl">
            <img src="/src/assets/naya.png" className="w-64 md:w-80 object-contain" />
          </div>
        </div>
      </section>


      {/* ---------------- MAIN GRID (SIDEBAR + CONTENT) ---------------- */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-[260px_1fr] gap-12">

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

        {/* ---------------- RIGHT CONTENT ---------------- */}
        <div className="space-y-20">


          {/* ---------------- OVERVIEW ---------------- */}
          <section id="overview" className="scroll-mt-32 p-10 rounded-3xl bg-[#F7F9FB] border border-[#D7ECF6] shadow">
            <h2 className="text-4xl font-extrabold text-[#0E3D55]">Overview</h2>

            <p className="mt-6 leading-relaxed text-[#063349]/85">
              Nayya Pizza & Grill is a vibrant restaurant specializing in authentic pizzas and grilled cuisine.
            </p>
            <p className="mt-4 leading-relaxed text-[#063349]/85">
              The target audience includes families, young professionals, food lovers, and social diners.
            </p>
            <p className="mt-4 leading-relaxed text-[#063349]/85">
              Our goal was to establish Nayya Pizza as a dominant Instagram presence through organic growth.
            </p>
            <p className="mt-4 leading-relaxed text-[#063349]/85">
              We focused on a high-performing Reels-first strategy paired with algorithm optimization.
            </p>

            {/* STATS (TRIVEENI EXACT SIZE) */}
            <div className="grid sm:grid-cols-2 gap-6 mt-10 place-items-center">
              {[
                { v: 3600000, t: "Total Views (90 Days)", sign: "+" },
                { v: 45400, t: "Total Interactions", sign: "+" },
                { v: 97, t: "Avg. Non-Follower Engagement", sign: "%" },
                { v: 93, t: "Content Shares", sign: "+" },
              ].map((s) => (
                <div
                  key={s.t}
                  className="p-4 w-[250px] rounded-2xl shadow-md text-white bg-gradient-to-br from-[#4BC1E8] to-[#0E6388]"
                >
                  <div className="text-2xl font-bold">
                    <Counter end={s.v} duration={6000} />{s.sign}
                  </div>
                  <p className="text-white/85 text-sm mt-1">{s.t}</p>
                </div>
              ))}
            </div>
          </section>


          {/* ---------------- SERVICES PROVIDED ---------------- */}
       <section id="services-provided" className="p-10 rounded-3xl bg-[#F7F9FB] border border-[#D7ECF6] shadow">
  <h2 className="text-4xl font-extrabold text-[#0E3D55] text-center md:text-left">
    Services Provided
  </h2>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 place-items-center">

    {[
      "Social Media Strategy",
      "Content Creation & Optimization",
      "Reels Production & Editing",
      "Analytics & Performance Tracking",
      "Audience Growth Management",
      "Viral Food Content Strategy",
    ].map((item) => (
      <div
        key={item}
        className="
          w-[260px] 
          h-[90px]
          p-4 
          rounded-2xl 
          flex items-center 
          gap-3 
          bg-gradient-to-br from-[#4BC1E8] to-[#0E6388]
          text-white shadow-md
        "
      >
        <span className="text-xl">🍕</span>
        <p className="font-semibold text-base leading-tight">{item}</p>
      </div>
    ))}

  </div>
</section>





          {/* ---------------- CHALLENGE ---------------- */}
          <section id="challenge" className="p-10 rounded-3xl bg-[#F7F9FB] border border-[#D7ECF6] shadow">
            <h2 className="text-4xl font-extrabold text-[#0E3D55]">Challenge</h2>

            <div className="mt-6 p-10 rounded-3xl text-white bg-gradient-to-br from-[#4BC1E8] to-[#0E6388] shadow space-y-6">
              <p>We reviewed Nayya Pizza & Grill’s Instagram presence and growth goals.</p>
              <p>The restaurant needed strong organic growth in a highly competitive market.</p>

              <p className="font-semibold text-white text-xl">Key challenges included:</p>

              <ul className="space-y-3 text-white/95 text-base list-disc ml-4">
                <li>Building momentum from a small follower base</li>
                <li>Standing out in crowded food content niche</li>
                <li>Creating viral, shareable UGC</li>
                <li>Growing without paid ads</li>
                <li>Maintaining food quality + fun content balance</li>
                <li>Converting IG engagement into real customers</li>
              </ul>
            </div>
          </section>


          {/* ---------------- APPROACH ---------------- */}
          <section id="approach" className="p-10 rounded-3xl bg-[#F7F9FB] border border-[#D7ECF6] shadow">
            <h2 className="text-4xl font-extrabold text-[#0E3D55]">Approach</h2>

            <div className="mt-6 p-10 rounded-3xl text-white bg-gradient-to-br from-[#4BC1E8] to-[#0E6388] shadow space-y-6">
              <p>• Build awareness with authentic, entertaining food content.</p>
              <p>• Double down on viral formats + trending audio + hashtag strategy.</p>
              <p>• Maximize reach through optimized posting schedule and content calendar.</p>
            </div>
          </section>


          {/* ---------------- KEY STRATEGY ---------------- */}
        <section id="key-strategy" className="p-10 rounded-3xl bg-[#F7F9FB] border border-[#D7ECF6] shadow">
  <h2 className="text-4xl font-extrabold text-[#0E3D55]">
    Key Strategies Implemented:
  </h2>

  {/* BLUE GRADIENT BOX (Same as CHALLENGE + SERVICES) */}
  <div className="mt-6 p-10 rounded-3xl text-white 
    bg-gradient-to-br from-[#4BC1E8] to-[#0E6388] shadow space-y-4">

    <p>• Fun, entertaining reels showcasing relatable food moments</p>

    <p>• Viral content formula: entertainment + authenticity + shareability</p>

    <p>• Algorithm-optimized posting strategy</p>

    <p>• Real customer reactions + UGC content</p>

    <p>• Trend participation & viral challenges</p>

    <p>• Story highlights for menu offerings</p>

  </div>
</section>



          {/* ---------------- CASE STUDIES ---------------- */}
          <section id="case-studies">
  <h2 className="text-4xl font-extrabold text-center text-[#0E3D55]">
    Read Other Case Studies Of Company
  </h2>

  <div className="grid sm:grid-cols-2 gap-8 mt-10 place-items-center">

    {/* Card 1 */}
    <div className="
      bg-[#FF9800] text-white 
      px-6 py-6 
      w-[270px] sm:w-[300px]
      rounded-2xl shadow-lg
      text-center
    ">
      <h3 className="text-xl font-bold">Beaver Bank Station Bar & Grill</h3>
      <p className="mt-2 text-white/90 text-sm">79K+ Views in 90 Days</p>
    </div>

    {/* Card 2 */}
    <div className="
      bg-[#F3E8CC] text-black 
      px-6 py-6 
      w-[270px] sm:w-[300px]
      rounded-2xl shadow-lg
      text-center
    ">
      <h3 className="text-xl font-bold">Pita Nutso</h3>
      <p className="mt-2 text-black/75 text-sm">36.1K+ Views in 90 Days</p>
    </div>

    {/* Card 3 */}
    <div className="
      bg-[#133B5C] text-white 
      px-6 py-6 
      w-[270px] sm:w-[300px]
      rounded-2xl shadow-lg
      text-center mb-12
    ">
      <h3 className="text-xl font-bold">Besharam Bar & Grill</h3>
      <p className="mt-2 text-white/85 text-sm">60K+ Views</p>
    </div>

    {/* Card 4 */}
    <div className="
      bg-[#9B7D3B] text-white 
      px-6 py-6 
      w-[270px] sm:w-[300px]
      rounded-2xl shadow-lg
      text-center mb-12
    ">
      <h3 className="text-xl font-bold">Rivaaj Resto-Bar</h3>
      <p className="mt-2 text-white/85 text-sm">48.9K+ Views</p>
    </div>

  </div>
</section>


        </div>
      </section>
    </div>
  );
}