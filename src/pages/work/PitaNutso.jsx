// src/pages/work/PitaNutso.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Counter from "../../components/Counter";
import BlueSidebar from "../../components/BlueSidebar";

import {
  TrendingUp,
  Sliders,
  Video,
  BarChart3,
  Users,
  Utensils,
} from "lucide-react";

const icons = {
  strategy: <TrendingUp className="w-full h-full" />,
  optimization: <Sliders className="w-full h-full" />,
  analytics: <BarChart3 className="w-full h-full" />,
  audience: <Users className="w-full h-full" />,
  food: <Utensils className="w-full h-full" />,
  reels: <Video className="w-full h-full" />,
};

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

  // scroll tracking
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
 bg-gradient-to-r from-[#4BC1E8] to-[#0E6388] text-white rounded-3xl px-6 py-20 mb-20">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>
            <div className="inline-block bg-white/20 text-white px-4 py-2 
            rounded-full text-sm font-semibold mb-5 shadow-sm">
              36.1K+ Views in 90 Days • Mediterranean Brand Presence Strategy
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Pita{" "}
              <span className="bg-clip-text text-transparent 
               bg-white">
                Nutso
              </span>
            </h1>

            <p className="text-xl mt-4 text-white/85 leading-relaxed">
              A Mediterranean-focused branding system built through appetizing visuals,
              identity shaping, and organic performance-driven strategies.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              {["Brand Roadmap", "Design Impact", "Performance Pulse"].map(
                (tag, i) => (
                  <div
                    key={i}
                    className="bg-white/20 px-6 py-3 rounded-full border border-white/40 
                    shadow text-white text-sm font-medium"
                  >
                    {tag}
                  </div>
                )
              )}
            </div>

            <Link to="/contact">
              <button
                className="mt-8 px-8 py-3 bg-gradient-to-r 
                from-[#4BC1E8] to-[#0E6388] text-white font-semibold 
                rounded-full shadow-lg"
              >
                Book A Callback
              </button>
            </Link>
          </div>

          {/* RIGHT LOGO */}
          <div className="flex justify-center">
            <div className="rounded-3xl shadow-xl p-4 bg-white/70">
              <img
                src="/client/logo-3.png"
                className="w-60 md:w-[300px] object-contain"
                alt="Pita Nutso Logo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------- GRID LAYOUT -------------------------------- */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-[280px_1fr] gap-12">

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
          <section
            id="overview"
            className="p-10 bg-white rounded-3xl shadow border border-[#D7ECF6]"
          >
            <h2 className="text-4xl font-extrabold text-[#0E3D55]">
              Overview
            </h2>

            <p className="mt-6 text-[#063349]/85 leading-relaxed">
              Pita Nutso is a fast-casual Mediterranean restaurant serving shawarma, bowls,
              wraps, and customizable fresh toppings with bold Middle-Eastern flavors.
            </p>

            <p className="mt-4 text-[#063349]/85 leading-relaxed">
              Their audience includes students, professionals, health-conscious eaters,
              and Mediterranean food lovers looking for fast yet high-quality meals.
            </p>

            <p className="mt-4 text-[#063349]/85 leading-relaxed">
              Our objective was to establish Pita Nutso’s brand presence with high-performing
              Mediterranean food content built around freshness and flavor.
            </p>

            <p className="mt-4 text-[#063349]/85 leading-relaxed">
              We used engaging, appetizing visuals and crisp formats to strengthen digital identity.
            </p>

            {/* Stats */}
            <div className="grid sm:grid-cols-2 gap-6 mt-10 place-items-center">
              {[
                { v: 36100, t: "Total Views (90 Days)", sign: "+" },
                { v: 52, t: "Content Shares", sign: "+" },
                { v: 276, t: "Total Interactions", sign: "+" },
                { v: 66, t: "Avg. Non-Follower Engagement (%)", sign: "%" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="p-6 w-[250px] rounded-2xl shadow-md text-white
                  bg-gradient-to-br from-[#4BC1E8] to-[#0E6388]"
                >
                  <div className="text-2xl font-bold">
                    <Counter end={s.v} duration={6000} />
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
              className="text-4xl font-extrabold bg-clip-text text-transparent 
            bg-gradient-to-r from-[#0E3D55] to-[#11719A]"
            >
              Services Provided
            </h2>

            <div className="grid sm:grid-cols-2 gap-6 mt-10">
              {[
                { name: "Social Media Strategy", icon: icons.strategy },
                { name: "Content Creation & Optimization", icon: icons.pen },
                { name: "Reels Production & Editing", icon: icons.reels },
                { name: "Analytics & Performance Tracking", icon: icons.analytics },
                { name: "Audience Growth Management", icon: icons.audience },
                { name: "Viral Food Content Strategy", icon: icons.food },
              ].map((service, i) => (
                <div
                  key={i}
                  className="px-5 py-4 rounded-2xl flex items-center gap-4 text-white
                  shadow-lg bg-gradient-to-br from-[#4BC1E8] to-[#0E6388]"
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
          <section
            id="challenge"
            className="p-10 bg-white rounded-3xl shadow border border-[#D7ECF6]"
          >
            <h2
              className="text-4xl font-extrabold bg-clip-text text-transparent
            bg-gradient-to-r from-[#0E3D55] to-[#11719A]"
            >
              Challenge
            </h2>

            <div
              className="mt-6 p-10 text-white rounded-3xl
            bg-gradient-to-br from-[#4BC1E8] to-[#0E6388] shadow space-y-6"
            >
              <p>• Competing in a highly saturated Mediterranean fast-casual market</p>
              <p>• Establishing brand recall with a smaller follower base</p>
              <p>• Creating appetite-triggering visual storytelling</p>

              <p className="font-semibold text-xl pt-2">Key challenges included:</p>

              <ul className="space-y-3 text-white/95">
                <li>• Gaining traction without paid promotions</li>
                <li>• Standing out among Mediterranean competitors</li>
                <li>• Delivering visuals that trigger cravings instantly</li>
                <li>• Optimizing low-budget content workflows</li>
                <li>• Driving in-store footfall organically</li>
              </ul>
            </div>
          </section>

          {/* ------------ APPROACH ------------ */}
          <section
            id="approach"
            className="p-10 bg-white rounded-3xl shadow border border-[#D7ECF6]"
          >
            <h2 className="text-4xl font-extrabold text-[#0E3D55]">Approach</h2>

            <div
              className="mt-6 p-10 text-white rounded-3xl
            bg-gradient-to-br from-[#4BC1E8] to-[#0E6388] shadow space-y-6"
            >
              <p>• Focused on high-performing Mediterranean food visuals</p>
              <p>• Optimized content formats based on audience behavior analytics</p>
              <p>• Strengthened brand identity using freshness-focused storytelling</p>
            </div>
          </section>

          {/* ------------ KEY STRATEGIES ------------ */}
          <section
            id="key-strategy"
            className="p-10 bg-white rounded-3xl shadow border border-[#D7ECF6]"
          >
            <h2
              className="text-4xl font-extrabold bg-clip-text text-transparent
            bg-gradient-to-r from-[#0E3D55] to-[#11719A]"
            >
              Key Strategies Implemented
            </h2>

            <div
              className="mt-6 p-10 rounded-3xl text-white
            bg-gradient-to-br from-[#4BC1E8] to-[#0E6388] shadow space-y-6"
            >
              <p>• High-shareability Mediterranean food reels</p>
              <p>• Strong call-to-action captions</p>
              <p>• Ingredient-focused close-ups for visual richness</p>
              <p>• Shawarma + bowls + wraps content pillars</p>
            </div>
          </section>

          {/* ------------ CASE STUDIES ------------ */}
          <section id="case-studies" className="mt-16">
            <h2
              className="text-4xl font-extrabold text-center bg-clip-text text-transparent 
            bg-gradient-to-r from-[#0E3D55] to-[#11719A]"
            >
              Explore Our Other Client{" "}
              <span className="bg-clip-text text-transparent 
              bg-gradient-to-r from-[#4BC1E8] to-[#0E6388]">
                Case Studies
              </span>
            </h2>

            <div className="grid sm:grid-cols-2 gap-10 mt-10">

              {/* HEARTHSTONE */}
              <div className="relative bg-[#142758] text-white px-6 py-6 w-[400px] rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold">Hearthstone Inn</h3>
                <p className="mt-2 text-white/90 text-sm">1.6K+ Views</p>

                <div className="grid grid-cols-2 gap-3 mt-5 w-[75%]">
                  <CaseStatDark v="1.6K+" t="Total Views" />
                  <CaseStatDark v="78%" t="Engagement" />
                  <CaseStatDark v="94.6%" t="ER Rate" />
                  <CaseStatDark v="53" t="Accounts" />
                </div>

                <img src="/client/logo-6.png" className="absolute left-72 bottom-2 w-[100px]" />
              </div>

              {/* BESHARAM */}
              <div className="relative bg-[#073B4C] text-white px-6 py-6 w-[400px] rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold">Besharam Bar & Grill</h3>
                <p className="mt-2 text-white/90 text-sm">60K+ Views</p>

                <div className="grid grid-cols-2 gap-3 mt-5 w-[75%]">
                  <CaseStatDark v="60K" t="Total Views" />
                  <CaseStatDark v="9.6K" t="Followers" />
                  <CaseStatDark v="59" t="Shares" />
                  <CaseStatDark v="62%" t="Engagement" />
                </div>

                <img src="/client/logo-16.png" className="absolute left-72 bottom-2 w-[100px]" />
              </div>

              {/* RIVAAJ */}
              <div className="relative bg-[#B28829] text-white px-6 py-6 w-[400px] rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold">Rivaaj Resto-Bar</h3>
                <p className="mt-2 text-white/90 text-sm">48.9K+ Views</p>

                <div className="grid grid-cols-2 gap-3 mt-5 w-[75%]">
                  <CaseStatDark v="48.9K" t="Total Views" />
                  <CaseStatDark v="403" t="Interactions" />
                  <CaseStatDark v="74" t="Followers" />
                  <CaseStatDark v="17" t="Shares" />
                </div>

                <img src="/client/logo-17.png" className="absolute left-72 bottom-2 w-[110px]" />
              </div>

              {/* TRIVEENI */}
              <div className="relative bg-[#F7FBCF] text-black px-6 py-6 w-[400px] rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold">Triveeni Events</h3>
                <p className="mt-2 text-black/70 text-sm">1.3M+ Views</p>

                <div className="grid grid-cols-2 gap-3 mt-5 w-[75%]">
                  <CaseStat v="1.3M+" t="Views" />
                  <CaseStat v="439K+" t="Accounts" />
                  <CaseStat v="89%" t="Organic" />
                  <CaseStat v="130%" t="Growth" />
                </div>

                <img src="/client/logo-2.png" className="absolute left-72 bottom-2 w-[100px]" />
              </div>

            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

/* -------- CASE STAT COMPONENTS -------- */

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
