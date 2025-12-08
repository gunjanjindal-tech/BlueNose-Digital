import React, { useEffect, useState } from "react";
import Counter from "../../components/Counter";
import { Link } from "react-router-dom";
import BlueSidebar from "../../components/BlueSidebar";

// Icons (Lucide)
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
  pen:      <PenTool className="w-full h-full" />,
  reels:    <Video className="w-full h-full" />,
  analytics:<BarChart3 className="w-full h-full" />,
  audience: <Users className="w-full h-full" />,
  viral:    <Flame className="w-full h-full" />,
};

export default function BeaverBankStation() {

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
    sections.forEach(id => {
      const target = document.getElementById(id);
      if (!target) return;

      const obs = new IntersectionObserver(
        entries => {
          if (entries[0].isIntersecting) setActive(id);
        },
        { threshold: 0.3, rootMargin: "-120px 0px -200px 0px" }
      );

      obs.observe(target);
      observers.push(obs);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <div className="bg-white text-[#063349] font-inter px-6 pt-6 pb-20">

 {/* ===============================  
        HERO SECTION — RIVAAJ STYLE  
================================== */}
<section
  className="min-h-[80vh] w-full flex items-center 
  bg-[#fa9b0b]
  text-white rounded-3xl px-6 py-20 mb-20"
>
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT */}
    <div>
      <div
        className="inline-block bg-white/20 text-black px-4 py-2 
        rounded-full text-sm font-semibold mb-5 shadow-sm"
      >
        79K+ Views in 90 Days • Organic Social Strategy for Beaver Bank Station
      </div>

      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-black ">
        Beaver Bank{" "}
        <span
          className="text-black "
        >
          Station Bar & Grill
        </span>
      </h1>

      <p className="text-xl mt-4 text-black/90 leading-relaxed max-w-xl">
        Establishing a powerful digital presence for Beaver Bank’s historic 1872 
        pub through high-impact organic social media strategies.
      </p>

      <div className="flex flex-wrap gap-4 mt-8">
        {["Smart Social Moves", "Reel Perfection", "Growth Metrics"].map((tag, i) => (
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
        <button
          className="mt-8 px-8 py-3 bg-white
          text-black font-semibold rounded-full shadow-lg"
        >
          Contact Us Now →
        </button>
      </Link>
    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center">
      <div >
        <img
          src="/client/logo-5.png"
          className="w-64 md:w-100 object-contain"
          alt="Beaver Bank Logo"
        />
      </div>
    </div>

  </div>
</section>


      {/* ===============================  
              LAYOUT GRID  
      =============================== */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-[280px_1fr] gap-12 mt-16">

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

        {/* ===============================  
             RIGHT CONTENT AREA  
        =============================== */}
        <div className="space-y-16">


          {/* ========= OVERVIEW ========= */}
          <section id="overview" className="p-10 bg-white rounded-3xl border shadow border-[#D7ECF6]">
            <h2 className="text-4xl font-extrabold text-[#0E6388]">Overview</h2>

            <p className="mt-6 text-[#063349]/85 leading-relaxed">
              Beaver Bank Station Bar & Grill is a historic community pub established in 1872 — known widely as the “World’s Friendliest Pub.”
            </p>
            <p className="mt-4 text-[#063349]/85 leading-relaxed">
              The brand attracts local families, music enthusiasts, trivia lovers, and visitors seeking authentic Nova Scotian pub culture.
            </p>
            <p className="mt-4 text-[#063349]/85 leading-relaxed">
              Our objective was to elevate their online presence through organic social strategies focused on community engagement and consistent reach.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-10 place-items-center">
              {[
                { v: 79000, t: "Total Views (90 Days)", sign: "+" },
                { v: 48000, t: "Accounts Reached", sign: "+" },
                { v: 439, t: "Total Interactions", sign: "+" },
                { v: 39, t: "Avg. Non-Follower Engagement (%)", sign: "%" },
              ].map((stat, i) => (
                <div key={i}
                  className="p-6 w-[250px] text-white rounded-2xl shadow-md 
                 "
                style={{
    background: "rgb(14, 99, 136)"
  }}>
                  <div className="text-2xl font-bold">
                    <Counter end={stat.v} duration={5000} />{stat.sign}
                  </div>
                  <p className="text-white/85 text-sm mt-2">{stat.t}</p>
                </div>
              ))}
            </div>
          </section>


          {/* ========= SERVICES PROVIDED ========= */}
          <section id="services-provided" className="p-10 bg-white rounded-3xl shadow border border-[#D7ECF6]">
            <h2 className="text-4xl font-extrabold text-[#0E6388]">Services Provided</h2>

            <div className="grid sm:grid-cols-2 gap-6 mt-10">
              {[
                { name: "Social Media Strategy", icon: icons.strategy },
                { name: "Content Creation & Optimization", icon: icons.pen },
                { name: "Reels Production & Editing", icon: icons.reels },
                { name: "Analytics & Performance Tracking", icon: icons.analytics },
                { name: "Audience Growth Management", icon: icons.audience },
                { name: "Viral Engagement Strategy", icon: icons.viral },
              ].map((item, i) => (
                <div key={i}
                  className="px-5 py-4 flex items-center gap-4 text-white rounded-2xl shadow-lg
                   "
                style={{
    background: "rgb(14, 99, 136)"
  }}>
                  <div className="p-2 w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center">
                    {item.icon}
                  </div>
                  <p className="font-semibold text-base leading-tight">{item.name}</p>
                </div>
              ))}
            </div>
          </section>


          {/* ========= CHALLENGE ========= */}
          <section id="challenge" className="p-10 bg-white rounded-3xl shadow border border-[#D7ECF6]">
            <h2 className="text-4xl font-extrabold text-[#0E6388]">Challenge</h2>

            <div className="mt-6 p-10 rounded-3xl shadow text-white 
             space-y-6"
            style={{
    background: "rgb(14, 99, 136)"
  }}>
              
              <p>Beaver Bank needed renewed digital energy to compete in the local pub market.</p>
              <p>The goal was to increase non-follower reach, highlight events, and strengthen community engagement.</p>

              <p className="font-semibold text-xl pt-2">Key challenges:</p>

              <ul className="space-y-3 text-white/95">
                <li>• Moderate engagement from a stable follower base</li>
                <li>• Need for a stronger new-audience reach</li>
                <li>• Highly competitive pub/restaurant niche</li>
                <li>• Required growth without paid ads</li>
                <li>• Showcasing live events & pub culture effectively</li>
              </ul>
            </div>
          </section>


          {/* ========= APPROACH ========= */}
          <section id="approach" className="p-10 bg-white rounded-3xl shadow border border-[#D7ECF6]">
            <h2 className="text-4xl font-extrabold text-[#0E6388]">Approach</h2>

            <div className="mt-6 p-10 rounded-3xl shadow text-white 
             space-y-6"
            style={{
    background: "rgb(14, 99, 136)"
  }}>
              
              <p>• Amplified storytelling around live music, trivia nights, and community culture.</p>
              <p>• Optimized posting strategy using peak engagement times.</p>
              <p>• Leveraged reels showcasing ambience, historic charm, and customer experiences.</p>
            </div>
          </section>


          {/* ========= KEY STRATEGY ========= */}
          <section id="key-strategy" className="p-10 bg-white rounded-3xl shadow border border-[#D7ECF6]">
            <h2 className="text-4xl font-extrabold text-[#0E6388]">
              Key Strategies Implemented
            </h2>

            <div className="mt-6 p-10 ]
              text-white rounded-3xl shadow space-y-6"
            style={{
    background: "rgb(14, 99, 136)"
  }}>

              <p>• Event-focused reels & community-driven storytelling</p>
              <p>• Explore-page optimization</p>
              <p>• Trend-aligned content cycles</p>
              <p>• Boosting non-follower engagement consistently</p>
              <p>• Strategic hashtags & local audience targeting</p>
            </div>
          </section>


          {/* ========= CASE STUDIES ========= */}
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


              {/* CARD 1 — TRIVEENI */}
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

              {/* CARD 2 — NAYYA */}
              <div className="relative bg-[#FF7A00] text-white px-6 py-6 w-[400px] rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold">Nayya Pizza & Grill</h3>
                <p className="mt-2 text-white/90 text-sm">3.6M+ Views</p>
                <div className="grid grid-cols-2 gap-3 mt-5 w-[75%]">
                  <CaseStatDark v="3.6M+" t="Total Views" />
                  <CaseStatDark v="45400+" t="Interactions" />
                  <CaseStatDark v="97%" t="Non-Follower Engagement" />
                  <CaseStatDark v="93+" t="Shares" />
                </div>
                <img src="/client/logo-1.png" className="absolute left-72 bottom-2 w-[100px]" />
              </div>

              {/* CARD 3 — HEARTHSTONE */}
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

              {/* CARD 4 — RIVAAJ */}
              <div className="relative bg-[#B28829] text-white px-6 py-6 w-[400px] rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold">Rivaaj Resto-Bar</h3>
                <p className="mt-2 text-white/90 text-sm">48.9K+ Views</p>
                <div className="grid grid-cols-2 gap-3 mt-5 w-[75%]">
                  <CaseStatDark v="48.9K" t="Total Views" />
                  <CaseStatDark v="403" t="Interactions" />
                  <CaseStatDark v="74" t="New Followers" />
                  <CaseStatDark v="17" t="Shares" />
                </div>
                <img src="/client/logo-17.png" className="absolute left-72 bottom-5 w-[110px]" />
              </div>

            </div>
          </section>

        </div>
      </section>
    </div>
  );
}


/*  
  REUSABLE SMALL COMPONENTS  
----------------------------------------------*/

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
