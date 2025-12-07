// src/pages/work/TheGardenRetreat.jsx
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

export default function TheGardenRetreat() {
  const sections = [
    "overview",
    "services-provided",
    "challenge",
    "approach",
    "key-strategy",
    "case-studies",
  ];

  const [active, setActive] = useState("overview");

  // Scroll tracking
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
     bg-gradient-to-r from-[#4BC1E8] to-[#0E6388] text-white rounded-3xl px-6 py-20 mb-20">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>
            <div className="inline-block bg-white/20 text-white px-4 py-2 
            rounded-full text-sm font-semibold mb-5 shadow-sm">
              67K+ Views in 60 Days • Premium Continental Dining Strategy
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              The Garden{" "}
              <span className="bg-clip-text text-transparent 
              bg-white">
                Retreat
              </span>
            </h1>

            <p className="text-xl mt-4 text-white/90 leading-relaxed max-w-xl">
              Establishing Halifax’s premium continental dining identity through elegant visuals, 
              refined storytelling, and high-performing weekly promotional strategies.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              {["Digital Planning", "Creative Flow", "Community Growth"].map((tag, i) => (
                <div 
                  key={i}
                  className="bg-white/20 px-6 py-3 rounded-full border border-white/40 
                  shadow text-white text-sm font-medium"
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

          {/* RIGHT LOGO */}
          <div className="flex justify-center">
            <div className="rounded-3xl shadow-xl p-4 bg-white/70">
              <img
                src="/client/logo-8.png"
                className="w-72 md:w-80 object-contain"
                alt="Garden Retreat Logo"
              />
            </div>
          </div>

        </div>
      </section>

      {/* -------------------------------- PAGE GRID -------------------------------- */}
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
          <section id="overview" className="p-10 bg-white rounded-3xl shadow border border-[#D7ECF6]">
            <h2 className="text-4xl font-extrabold text-[#0E3D55]">Overview</h2>

            <p className="mt-6 leading-relaxed text-[#063349]/85">
              The Garden Retreat is a premium continental dining destination in downtown Halifax, 
              known for elegant brunch offerings, signature cocktails, and refined dining ambiance.
            </p>

            <p className="mt-4 leading-relaxed text-[#063349]/85">
              Their audience includes couples, tourists, professionals, brunch enthusiasts, and 
              special-event diners looking for an upscale yet warm dining experience.
            </p>

            <p className="mt-4 leading-relaxed text-[#063349]/85">
              Our objective was to elevate the brand with premium visuals, cinematic food storytelling, 
              and conversion-driven promotional strategy.
            </p>

            {/* Stats */}
            <div className="grid sm:grid-cols-2 gap-6 mt-10 place-items-center">
              {[
                { v: 67000, t: "Total Views (60 Days)", sign: "+" },
                { v: 13000, t: "Established Followers", sign: "+" },
                { v: 74, t: "Content Shared", sign: "+" },
                { v: 49, t: "Non-Follower Engagement (%)", sign: "%" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="p-6 w-[250px] rounded-2xl shadow-md text-white
                  bg-gradient-to-br from-[#4BC1E8] to-[#0E6388]"
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
            <h2 className="text-4xl font-extrabold bg-clip-text text-transparent 
            bg-gradient-to-r from-[#0E3D55] to-[#11719A]">
              Services Provided
            </h2>

            <div className="grid sm:grid-cols-2 gap-6 mt-10">
              {[
                { name: "Social Media Strategy", icon: icons.strategy },
                { name: "Premium Content Creation", icon: icons.pen },
                { name: "Fine Dining Videography", icon: icons.reels },
                { name: "Cocktail & Food Photography", icon: icons.pen },
                { name: "Analytics & Performance Tracking", icon: icons.analytics },
                { name: "Luxury Brand Positioning", icon: icons.strategy },
              ].map((service, i) => (
                <div
                  key={i}
                  className="px-5 py-4 rounded-2xl flex items-center gap-4 text-white
                  shadow-lg bg-gradient-to-br from-[#4BC1E8] to-[#0E6388]"
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
            <h2 className="text-4xl font-extrabold bg-clip-text text-transparent 
            bg-gradient-to-r from-[#0E3D55] to-[#11719A]">
              Challenge
            </h2>

            <div className="mt-6 p-10 rounded-3xl text-white 
              bg-gradient-to-br from-[#4BC1E8] to-[#0E6388] shadow space-y-6">

              <p>
                The Garden Retreat faced competition in Halifax’s fine dining scene and needed 
                a premium social presence to stand out while maintaining its upscale aesthetic.
              </p>

              <p className="font-semibold text-xl">Key challenges included:</p>

              <ul className="space-y-3 list-disc ml-4 text-white/95">
                <li>Standing out among fine dining competitors</li>
                <li>Balancing brunch + dinner + cocktails content</li>
                <li>Maintaining luxury feel while promoting offers</li>
                <li>Driving reservations and private bookings</li>
                <li>Creating a unified premium brand voice</li>
              </ul>
            </div>
          </section>

          {/* ------------ APPROACH ------------ */}
          <section id="approach" className="p-10 bg-white rounded-3xl shadow border border-[#D7ECF6]">
            <h2 className="text-4xl font-extrabold text-[#0E3D55]">Approach</h2>

            <div className="mt-6 p-10 rounded-3xl text-white 
            bg-gradient-to-br from-[#4BC1E8] to-[#0E6388] shadow space-y-6">
              <p>• Premium visuals showcasing continental cuisine & elevated plating</p>
              <p>• Cocktail filmmaking focused on artistry & elegance</p>
              <p>• Content pillars for brunch, dinner, cocktails & ambiance</p>
              <p>• Special promotions planned without losing luxury identity</p>
            </div>
          </section>

          {/* ------------ KEY STRATEGY ------------ */}
          <section id="key-strategy" className="p-10 bg-white rounded-3xl shadow border border-[#D7ECF6]">
            <h2 className="text-4xl font-extrabold bg-clip-text text-transparent
              bg-gradient-to-r from-[#0E3D55] to-[#11719A]">
              Key Strategies Implemented
            </h2>

            <div className="mt-6 p-10 rounded-3xl text-white
            bg-gradient-to-br from-[#4BC1E8] to-[#0E6388] shadow space-y-6">
              <p>• Luxury content flow for brunch, dinner & cocktails</p>
              <p>• Elegant food & drink cinematography</p>
              <p>• SEO-optimized captions + seasonal promotions</p>
              <p>• Strong brand identity through tone & visuals</p>
              <p>• Targeted community & tourist engagement</p>
            </div>
          </section>

          {/* ------------ CASE STUDIES ------------ */}
          <section id="case-studies" className="mt-16">
            <h2
              className="text-4xl font-extrabold text-center leading-[1.3] -mt-2
              text-transparent bg-clip-text 
              bg-gradient-to-r from-[#0E3D55] to-[#11719A]"
            >
              Explore Our Other Client{" "}
              <span className="text-transparent bg-clip-text 
              bg-gradient-to-r from-[#4BC1E8] to-[#0E6388]">
                Case Studies
              </span>
            </h2>

            <div className="grid sm:grid-cols-2 gap-10 mt-10">

              {/* TRIVEENI */}
              <div className="relative bg-[#F7FBCF] px-6 py-6 w-[400px] rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold">Triveeni Events</h3>
                <p className="mt-2 text-black/70 text-sm">1.3M+ Views in 90 Days</p>

                <div className="grid grid-cols-2 gap-3 mt-5 w-[75%]">
                  <CaseStat v="1.3M+" t="Total Views" />
                  <CaseStat v="439K+" t="Accounts Reached" />
                  <CaseStat v="89%" t="Organic Reach" />
                  <CaseStat v="130%" t="Growth Rate" />
                </div>

                <img src="/client/logo-2.png" className="absolute left-72 bottom-2 w-[100px]" />
              </div>

              {/* BEAVER */}
              <div className="relative bg-[#FB8C00] text-white px-6 py-6 w-[400px] rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold">Beaver Bank Station</h3>
                <p className="mt-2 text-white/90 text-sm">79K+ Views in 90 Days</p>

                <div className="grid grid-cols-2 gap-3 mt-5 w-[75%]">
                  <CaseStatDark v="79K+" t="Total Views" />
                  <CaseStatDark v="48K+" t="Accounts Reached" />
                  <CaseStatDark v="439" t="Interactions" />
                  <CaseStatDark v="39%" t="Engagement" />
                </div>

                <img src="/client/logo-5.png" className="absolute left-72 bottom-2 w-[100px]" />
              </div>

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

              {/* RIVAAJ */}
              <div className="relative bg-[#B28829] text-white px-6 py-6 w-[400px] rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold">Rivaaj Resto-Bar</h3>
                <p className="mt-2 text-white/90 text-sm">48.9K+ Views</p>

                <div className="grid grid-cols-2 gap-3 mt-5 w-[75%]">
                  <CaseStatDark v="48.9K" t="Total Views" />
                  <CaseStatDark v="403" t="Interactions" />
                  <CaseStatDark v="74" t="New Followers" />
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

/* ------------ CASE STAT COMPONENTS ------------ */
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
