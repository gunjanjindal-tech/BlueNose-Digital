// src/pages/work/Hearthstone.jsx
import React, { useEffect, useState } from "react";
import Counter from "../../components/Counter";
import BlueSidebar from "../../components/BlueSidebar";
import { Link } from "react-router-dom";

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

  // Sidebar Highlight on Scroll
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

      {/* ---------------- HERO ---------------- */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent
            bg-clip-text bg-gradient-to-r from-[#0E3D55] to-[#11719A]">
            Hearthstone Inn
          </h1>

          <p className="text-xl mt-4 text-[#063349]/80">
            1.6K+ Views in 60 Days — Building Brand Presence From Scratch
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            {["Audience Connect", "Visibility Boost", "Growth Strategy"].map((item, i) => (
              <div key={i}
                className="bg-white px-6 py-3 rounded-full border border-[#D7ECF6] shadow text-[#063349]">
                {item}
              </div>
            ))}
          </div>

          <Link to="/contact">
            <button className="mt-8 px-8 py-3 bg-gradient-to-r 
            from-[#4BC1E8] to-[#0E6388] text-white font-semibold rounded-full shadow-lg">
              Book A Callback
            </button>
          </Link>
        </div>

        <div className="flex justify-center pt-6">
<img src="/src/assets/hearthstone.png" className="w-72 md:w-96 object-contain" />
        </div>
      </section>

      {/* ---------------- SIDEBAR + CONTENT GRID ---------------- */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-[280px_1fr] gap-10 mt-16">

        {/* LEFT SIDEBAR */}
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

        {/* RIGHT CONTENT */}
        <div className="space-y-16">

          {/* ---------------- OVERVIEW ---------------- */}
          <section id="overview"
            className="p-10 rounded-3xl bg-white shadow border border-[#D7ECF6]">

            <h2 className="text-4xl font-extrabold text-[#0E3D55]">Overview</h2>

            <p className="mt-6 leading-relaxed text-[#063349]/85">
              Hearthstone Inn is a boutique hotel in Dartmouth, Nova Scotia, offering
              stunning Lake Banook views, pet-friendly accommodations, and elegant event spaces.
            </p>

            <p className="mt-4 leading-relaxed text-[#063349]/85">
              Target audience includes boutique travelers, wedding couples, event organizers, 
              tourists, pet owners, and business travelers.
            </p>

            <p className="mt-4 leading-relaxed text-[#063349]/85">
              The goal was to build their brand identity on Instagram from zero and increase visibility.
            </p>

            <p className="mt-4 leading-relaxed text-[#063349]/85">
              We showcased hotel charm, amenities, weddings, events, and scenic lake views.
            </p>

            {/* Metrics */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8 place-items-center">
              {[ 
                { v: 1600, label: "Total Views (60 Days)", sign: "+" },
                { v: 78, label: "Avg. Non-Follower Engagement", sign: "%" },
                { v: 94.6, label: "Posts Engagement Rate", sign: "%" },
                { v: 53, label: "Accounts Reached", sign: "+" },
              ].map((m, i) => (
                <div key={i}
                  className="p-4 w-[250px] rounded-2xl shadow-md text-white
                  bg-gradient-to-br from-[#4BC1E8] to-[#0E6388]">
                  
                  <div className="text-2xl font-bold">
                    <Counter end={m.v} duration={4500} />{m.sign}
                  </div>

                  <p className="text-white/85 text-sm mt-1">{m.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ---------------- SERVICES PROVIDED ---------------- */}
          <section id="services-provided"
            className="p-10 rounded-3xl bg-white shadow border border-[#D7ECF6]">

            <h2 className="text-4xl font-extrabold text-[#0E3D55]">Services Provided</h2>

            <div className="grid sm:grid-cols-2 gap-6 mt-10">
              {[
                "Social Media Strategy & Account Setup",
                "Brand Identity Development",
                "Property Videography & Photography",
                "Professional Hotel Photography",
                "Analytics & Performance Tracking",
                "Algorithm Optimization",
                "Content Calendar Planning",
                "Hospitality Marketing Strategy",
              ].map((s, i) => (
                <div key={i}
                  className="px-5 py-4 rounded-2xl text-white shadow-lg
                  bg-gradient-to-br from-[#4BC1E8] to-[#0E6388]">
                  {s}
                </div>
              ))}
            </div>
          </section>

          {/* ---------------- CHALLENGE ---------------- */}
          <section id="challenge"
            className="p-10 rounded-3xl bg-white shadow border border-[#D7ECF6]">
            
            <h2 className="text-4xl font-extrabold text-[#0E3D55]">Challenge</h2>

            <div className="mt-6 p-10 rounded-3xl text-white
            bg-gradient-to-br from-[#4BC1E8] to-[#0E6388] shadow space-y-4">

              <ul className="space-y-3 text-white/95">
                <li>• Create an Instagram audience from zero</li>
                <li>• Build visual identity for boutique hotel</li>
                <li>• Competition in local hospitality industry</li>
                <li>• Highlight weddings, lounge, lake view & events</li>
                <li>• Lack of professional content initially</li>
                <li>• New account = reach limitations</li>
                <li>• Build trust through consistent visual tone</li>
                <li>• Increase organic reach without ads</li>
              </ul>
            </div>
          </section>

          {/* ---------------- APPROACH ---------------- */}
          <section id="approach"
            className="p-10 rounded-3xl bg-white shadow border border-[#D7ECF6]">

            <h2 className="text-4xl font-extrabold text-[#0E3D55]">Approach</h2>

            <div className="mt-6 p-10 rounded-3xl text-white
            bg-gradient-to-br from-[#4BC1E8] to-[#0E6388] shadow space-y-4">

              <p>• Built brand presence using premium visuals.</p>
              <p>• Created event, wedding & hospitality-focused content.</p>
              <p>• Used trending audio + data-driven posting strategy.</p>
            </div>
          </section>

          {/* ---------------- KEY STRATEGY ---------------- */}
          <section id="key-strategy"
            className="p-10 rounded-3xl bg-white shadow border border-[#D7ECF6]">
            
            <h2 className="text-4xl font-extrabold text-[#0E3D55]">
              Key Strategies Implemented
            </h2>

            <div className="mt-6 p-10 rounded-3xl text-white
            bg-gradient-to-br from-[#4BC1E8] to-[#0E6388] shadow space-y-4">

              <p>• Boutique hotel photography focus</p>
              <p>• Pet-friendly content strategy</p>
              <p>• Wedding & event venue highlight reels</p>
              <p>• Local geotag optimization (Dartmouth, Lake Banook)</p>
              <p>• Strong visual brand consistency</p>
            </div>
          </section>

          {/* ---------------- OTHER CASE STUDIES ---------------- */}
          <section id="case-studies" className="">

  <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text
    bg-gradient-to-r from-[#0E3D55] to-[#11719A]">
    Read Other Case Studies Of Company
  </h2>

  <div className="grid sm:grid-cols-2 gap-8 mt-10 place-items-center">

    {/* Card 1 – Hearthstone */}
    <div className="
      bg-[#0E3D55] text-white 
      px-6 py-6 
      w-[300px] sm:w-[360px]
      rounded-2xl shadow-lg
    ">
      <h3 className="text-xl font-bold">Hearthstone Inn</h3>
      <p className="mt-2 text-white/90 text-sm">
        1.6K+ Views in 60 Days: Building Brand Presence for Hearthstone Inn from Scratch
      </p>

      <div className="grid grid-cols-2 gap-3 mt-5 text-black">
        <div className="bg-white p-3 rounded-lg shadow text-center">
          <p className="font-bold">1.6K</p>
          <p className="text-xs text-black/70">Total Views (60 Days)</p>
        </div>

        <div className="bg-white p-3 rounded-lg shadow text-center">
          <p className="font-bold">78%</p>
          <p className="text-xs text-black/70">Avg. Non-Follower Engagement</p>
        </div>

        <div className="bg-white p-3 rounded-lg shadow text-center">
          <p className="font-bold">94.6%</p>
          <p className="text-xs text-black/70">Posts Engagement Rate</p>
        </div>

        <div className="bg-white p-3 rounded-lg shadow text-center">
          <p className="font-bold">53</p>
          <p className="text-xs text-black/70">Accounts Reached</p>
        </div>
      </div>
    </div>

    {/* Card 2 – Rivaaj */}
    <div className="
      bg-[#AF873D] text-white 
      px-6 py-6 
      w-[300px] sm:w-[360px]
      rounded-2xl shadow-lg
    ">
      <h3 className="text-xl font-bold">Rivaaj Resto-Bar</h3>
      <p className="mt-2 text-white/90 text-sm">
        48.9K+ Views in 30 Days: Launching Bedford's First Cultural Resto-Bar
      </p>

      <div className="grid grid-cols-2 gap-3 mt-5 text-black">
        <div className="bg-white p-3 rounded-lg shadow text-center">
          <p className="font-bold">48.9K</p>
          <p className="text-xs text-black/70">Total Views (30 Days)</p>
        </div>

        <div className="bg-white p-3 rounded-lg shadow text-center">
          <p className="font-bold">403</p>
          <p className="text-xs text-black/70">Total Interactions</p>
        </div>

        <div className="bg-white p-3 rounded-lg shadow text-center">
          <p className="font-bold">74</p>
          <p className="text-xs text-black/70">New Followers (30 Days)</p>
        </div>

        <div className="bg-white p-3 rounded-lg shadow text-center">
          <p className="font-bold">17</p>
          <p className="text-xs text-black/70">Content Shared</p>
        </div>
      </div>
    </div>

    {/* Card 3 – Pita Nutso */}
    <div className="
      bg-[#F7F0DE] text-black 
      px-6 py-6 
      w-[300px] sm:w-[360px]
      rounded-2xl shadow-lg mb-12
    ">
      <h3 className="text-xl font-bold">Pita Nutso</h3>
      <p className="mt-2 text-black/70 text-sm">
        36.1K+ Views in 90 Days: Organic Growth Strategy for Pita Nutso
      </p>

      <div className="grid grid-cols-2 gap-3 mt-5 text-black">
        <div className="bg-white p-3 rounded-lg shadow text-center">
          <p className="font-bold">36.1K</p>
          <p className="text-xs text-black/70">Total Views (90 Days)</p>
        </div>

        <div className="bg-white p-3 rounded-lg shadow text-center">
          <p className="font-bold">52</p>
          <p className="text-xs text-black/70">Content Shares</p>
        </div>

        <div className="bg-white p-3 rounded-lg shadow text-center">
          <p className="font-bold">276</p>
          <p className="text-xs text-black/70">Total Interactions</p>
        </div>

        <div className="bg-white p-3 rounded-lg shadow text-center">
          <p className="font-bold">66%</p>
          <p className="text-xs text-black/70">Avg. Non-Follower Engagement</p>
        </div>
      </div>
    </div>

    {/* Card 4 – Besharam Bar & Grill */}
    <div className="
      bg-[#073B4C] text-white 
      px-6 py-6 
      w-[300px] sm:w-[360px]
      rounded-2xl shadow-lg mb-12
    ">
      <h3 className="text-xl font-bold">Besharam Bar and Grill</h3>
      <p className="mt-2 text-white/90 text-sm">
        60K+ Views in 60 Days: Bold Fusion Strategy
      </p>

      <div className="grid grid-cols-2 gap-3 mt-5 text-black">
        <div className="bg-white p-3 rounded-lg shadow text-center">
          <p className="font-bold">60K</p>
          <p className="text-xs text-black/70">Total Views (60 Days)</p>
        </div>

        <div className="bg-white p-3 rounded-lg shadow text-center">
          <p className="font-bold">9.6K</p>
          <p className="text-xs text-black/70">Followers (+157 Growth)</p>
        </div>

        <div className="bg-white p-3 rounded-lg shadow text-center">
          <p className="font-bold">59</p>
          <p className="text-xs text-black/70">Content Shares</p>
        </div>

        <div className="bg-white p-3 rounded-lg shadow text-center">
          <p className="font-bold">62%</p>
          <p className="text-xs text-black/70">Avg. Non-Follower Engagement</p>
        </div>
      </div>
    </div>

  </div>
</section>


        </div>
      </section>
    </div>
  );
}