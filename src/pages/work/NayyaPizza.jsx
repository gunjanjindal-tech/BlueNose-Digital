// src/pages/work/NayyaPizza.jsx
import React, { useEffect, useState } from "react";
import Counter from "../../components/Counter";
import { Link } from "react-router-dom";
import BlueSidebar from "../../components/BlueSidebar";

// ICONS
import {
  TrendingUp,
  PenTool,
  Video,
  BarChart3,
  Users,
  Flame,
} from "lucide-react";

const icons = {
  strategy: <TrendingUp className="w-full h-full" />,
  pen: <PenTool className="w-full h-full" />,
  reels: <Video className="w-full h-full" />,
  analytics: <BarChart3 className="w-full h-full" />,
  audience: <Users className="w-full h-full" />,
  viral: <Flame className="w-full h-full" />,
};

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

      {/* -------------------------------- HERO — SAME AS RIVAAJ -------------------------------- */}
      <section className="min-h-[80vh] w-full flex items-center 
       bg-[#FF6B01] text-white rounded-3xl px-6 py-20">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div className="self-start">
            <div className="inline-block bg-white/20 text-white px-4 py-2 
              rounded-full text-sm font-semibold mb-5 shadow-sm">
              3.6M+ Views in 90 Days • Viral Food Growth Strategy
            </div>

            <h1 className="inline-block text-4xl md:text-5xl font-extrabold">
              Nayya Pizza{" "}
              <span className="bg-clip-text text-transparent bg-white">
                & Grill
              </span>
            </h1>

            <p className="text-xl mt-4 text-white/90 leading-relaxed">
              Explosive organic growth powered by viral reels, trend-driven content, 
              and high-impact engagement strategies designed for maximum reach.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              {["Strategic Planning", "Performance Pulse", "Content Power"].map((tag, i) => (
                <div 
                  key={i} 
                  className="bg-white/20 px-6 py-3 rounded-full border border-white/40 shadow text-white"
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
            <div className="flex items-center justify-center p-4">
              <img
                src="/client/logo-1.png"
                className="w-72 md:w-100 object-contain"
                alt="Nayya Pizza Logo"
              />
            </div>
          </div>

        </div>
      </section>

      {/* -------------------------------- PAGE GRID -------------------------------- */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-[280px_1fr] gap-12 mt-16">

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
                Nayya Pizza & Grill is a vibrant fast-casual restaurant known for authentic pizzas, 
                loaded grilled dishes, and bold flavors.
              </p>

              <p>
                Their audience ranges from students and families to food explorers and social diners.
              </p>

              <p>
                Our objective was to build viral organic visibility through fast-paced, entertaining 
                reels and trend-driven storytelling.
              </p>

              <p>
                The content strategy focused on crave-worthy visuals, humor-based hooks, and 
                algorithm-friendly reel formats.
              </p>
            </div>

            {/* Stats */}
            <div className="grid sm:grid-cols-2 gap-6 mt-10 place-items-center">
              {[
                { v: 3600000, t: "Total Views (90 Days)", sign: "+" },
                { v: 45400, t: "Total Interactions", sign: "+" },
                { v: 97, t: "Avg. Non-Follower Engagement (%)", sign: "%" },
                { v: 93, t: "Content Shares", sign: "+" },
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
          <section id="services-provided" className="p-10 rounded-3xl bg-white shadow border border-[#D7ECF6]">
            <h2 className="text-4xl font-extrabold text-[#0E6388]">
              Services Provided
            </h2>

            <div className="grid sm:grid-cols-2 gap-6 mt-10">
              {[
                { name: "Social Media Strategy", icon: icons.strategy },
                { name: "Content Creation & Optimization", icon: icons.pen },
                { name: "Viral Reels Production", icon: icons.reels },
                { name: "Analytics & Performance Tracking", icon: icons.analytics },
                { name: "Audience Growth Management", icon: icons.audience },
                { name: "Viral Food Content Strategy", icon: icons.viral },
              ].map((service, i) => (
                <div
                  key={i}
                  className="px-5 py-4 rounded-2xl flex items-center gap-4 text-white
                    shadow-lg "
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
            <h2 className="text-4xl font-extrabold text-[#0E6388]">
              Challenge
            </h2>

            <div className="mt-6 p-10 rounded-3xl text-white 
              shadow space-y-6"
            style={{
    background: "rgb(14, 99, 136)"
  }}>
              
              <p>• Competing in a heavily crowded pizza & fast-food niche.</p>
              <p>• Creating consistent viral traction with a small initial follower base.</p>
              <p>• Turning engagement into real-world customers.</p>

              <p className="font-semibold text-xl pt-2">Key challenges included:</p>

              <ul className="space-y-3 text-white/95">
                <li>• Standing out in a competitive food category</li>
                <li>• Creating high-shareability reels</li>
                <li>• Breaking algorithm barriers early</li>
                <li>• Boosting organic reach without paid ads</li>
                <li>• Making content humorous + appetizing simultaneously</li>
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

              <p>• Hyper-focused on trend-driven, scroll-stopping reels.</p>
              <p>• Balanced entertainment + food storytelling + humor.</p>
              <p>• Optimized posting times based on engagement spikes.</p>

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

              <p>• High-volume viral reel production</p>
              <p>• Fast-paced editing for retention boost</p>
              <p>• Trend participation + viral sound integration</p>
              <p>• Menu highlight storytelling</p>
              <p>• UGC-style content for authenticity</p>

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

            <div className="grid sm:grid-cols-2 gap-10 mt-10">

              {/* TRIVEENI */}
              <div className="relative bg-[#F7FBCF] px-6 py-6 w-[400px] rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold">Triveeni Events</h3>
                <p className="mt-2 text-black/70 text-sm">1.3M+ Views</p>

                <div className="grid grid-cols-2 gap-3 mt-5 w-[75%]">
                  <CaseStat v="1.3M+" t="Total Views" />
                  <CaseStat v="439K+" t="Accounts" />
                  <CaseStat v="89%" t="Organic" />
                  <CaseStat v="130%" t="Growth" />
                </div>

                <img src="/client/logo-2.png" className="absolute left-72 bottom-2 w-[100px]" />
              </div>

              {/* BEAVER BANK */}
              <div className="relative bg-[#FB8C00] text-white px-6 py-6 
              w-[400px] rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold">Beaver Bank Station</h3>
                <p className="mt-2">79K+ Views</p>

                <div className="grid grid-cols-2 gap-3 mt-5 w-[75%]">
                  <CaseStatDark v="79K+" t="Total Views" />
                  <CaseStatDark v="48K+" t="Accounts Reached" />
                  <CaseStatDark v="439" t="Interactions" />
                  <CaseStatDark v="39%" t="Engagement" />
                </div>

                <img src="/client/logo-5.png" className="absolute left-72 bottom-2 w-[100px]" />
              </div>

              {/* HEARTHSTONE */}
              <div className="relative bg-[#142758] text-white px-6 py-6 
              w-[400px] rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold">Hearthstone Inn</h3>
                <p className="mt-2">1.6K+ Views</p>

                <div className="grid grid-cols-2 gap-3 mt-5 w-[75%]">
                  <CaseStatDark v="1.6K+" t="Total Views" />
                  <CaseStatDark v="78%" t="Engagement" />
                  <CaseStatDark v="94.6%" t="ER Rate" />
                  <CaseStatDark v="53" t="Accounts" />
                </div>

                <img src="/client/logo-6.png" className="absolute left-72 bottom-2 w-[100px]" />
              </div>

              {/* RIVAAJ */}
              <div className="relative bg-[#B28829] text-white px-6 py-6 
              w-[400px] rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold">Rivaaj Resto-Bar</h3>
                <p className="mt-2">48.9K+ Views</p>

                <div className="grid grid-cols-2 gap-3 mt-5 w-[75%]">
                  <CaseStatDark v="48.9K" t="Total Views" />
                  <CaseStatDark v="403" t="Interactions" />
                  <CaseStatDark v="74" t="Followers" />
                  <CaseStatDark v="17" t="Shares" />
                </div>

                <img src="/client/logo-17.png" className="absolute left-72 bottom-2 w-[110px]" />
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
