import React, { useEffect, useState } from "react";
import Counter from "../../components/Counter";
import { Link } from "react-router-dom";
import BlueSidebar from "../../components/BlueSidebar";

// Icons
import { BarChart3, Users, Video, PenTool, TrendingUp } from "lucide-react";

export default function SakeCafe() {
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
{ threshold: 0.2, rootMargin: "-80px 0px -150px 0px" }
      );

      obs.observe(sec);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="bg-white text-[#063349] font-inter px-6 pt-6 pb-20">
{/* ===============================  
        HERO SECTION — SAME AS GARDEN  
================================== */}
<section
  className="min-h-[80vh] w-full flex items-center 
  bg-[#b2222b] 
  text-white rounded-3xl px-6 py-20 mb-20"
>
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT */}
    <div>
      {/* TOP BADGE */}
      <div
        className="inline-block bg-white/20 text-white px-4 py-2 
        rounded-full text-sm font-semibold mb-5 shadow-sm"
      >
        9.7K+ Views in 60 Days • Authentic Japanese Dining Strategy
      </div>

      {/* HEADING */}
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
        Sake Café{" "}
        <span
          className="bg-clip-text text-transparent 
          bg-white"
        >
          Sushi Bar & Grill
        </span>
      </h1>

      {/* SUBTEXT */}
      <p className="text-xl mt-4 text-white/90 leading-relaxed max-w-xl">
        Establishing a standout Japanese dining identity for Sake Café through
        premium sushi visuals, refined storytelling, and high-engagement content.
      </p>

      {/* TAGS */}
      <div className="flex flex-wrap gap-4 mt-8">
        {["Audience Connect", "Visibility Boost", "Growth Strategy"].map((tag, i) => (
          <div
            key={i}
            className="bg-white/20 px-6 py-3 rounded-full border border-white/40 
            shadow text-white text-sm font-medium"
          >
            {tag}
          </div>
        ))}
      </div>

      {/* CTA */}
      <Link to="/contact">
        <button
          className="mt-8 px-8 py-3 bg-white
          text-black font-semibold rounded-full shadow-lg"
        >
          Contact Us Now →
        </button>
      </Link>
    </div>

    {/* RIGHT LOGO */}
    <div className="flex justify-center">
      <div >
        <img
          src="/detailed-client-logos/sake.png"
          className="w-64 md:w-100 object-contain"
          alt="Sake Cafe Logo"
        />
      </div>
    </div>

  </div>
</section>



      {/* GRID SECTION */}
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

        <div className="space-y-16">
          {/* OVERVIEW */}
          <section id="overview" className="p-10 bg-white rounded-3xl shadow border border-[#D7ECF6]">
            <h2 className="text-4xl font-extrabold text-[#0E6388]">Overview</h2>
            <p className="mt-6 leading-relaxed text-[#063349]/85">
              Sake Cafe | Sushi Bar & Grill is a vibrant Japanese restaurant offering authentic sushi, grilled specialties, and a full dining experience from brunch through dinner, featuring signature Sake Nights.
            </p>
            <p className="mt-4 leading-relaxed text-[#063349]/85">
              The menu highlights include Bento Boxes, Volcano Rolls, and King Salmon Rolls—appealing to sushi lovers and social diners.
            </p>
            <p className="mt-4 leading-relaxed text-[#063349]/85">
              Our goal was to establish Sake Cafe's Instagram presence as a go-to destination for Japanese cuisine through visually stunning content.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-10 place-items-center">
              {[{ v: 9700, t: "Total Views (60 Days)", sign: "+" }, { v: 83.6, t: "Posts Engagement Rate", sign: "%" }, { v: 54, t: "Avg. Non-Follower Engagement", sign: "%" }, { v: 276, t: "Total Interactions", sign: "+" }].map((s, i) => (
                <div
                  key={i}
                  className="p-6 w-[250px] rounded-2xl shadow-md text-white "
                  style={{
    background: "rgb(14, 99, 136)"
  }}
                >
                  <div className="text-2xl font-bold">
                    <Counter end={s.v} />
                    {s.sign}
                  </div>
                  <p className="mt-2 text-white/85 text-sm">{s.t}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SERVICES */}
          <section id="services-provided" className="p-10 bg-white rounded-3xl shadow border border-[#D7ECF6]">
            <h2 className="text-4xl font-extrabold text-[#0E6388]">
              Services Provided
            </h2>

            <div className="grid sm:grid-cols-2 gap-6 mt-10">
              {[
                { name: "Social Media Strategy", icon: <TrendingUp /> },
                { name: "Multi-Format Content Creation", icon: <Video /> },
                { name: "Professional Sushi Photography", icon: <PenTool /> },
                { name: "Analytics & Performance Tracking", icon: <BarChart3 /> },
                { name: "Algorithm Optimization", icon: <PenTool /> },
                { name: "Community Engagement", icon: <Users /> },
              ].map((s, i) => (
                <div
                  key={i}
                  className="px-5 py-4 rounded-2xl flex items-center gap-4 text-white shadow-lg "
                  style={{
    background: "rgb(14, 99, 136)"
  }}
                >
                  <div className="p-2 bg-white/20 rounded-xl w-8 h-8 flex items-center justify-center">
                    {s.icon}
                  </div>
                  <p className="font-semibold text-base leading-tight">{s.name}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CHALLENGE */}
<section id="challenge" className="p-10 bg-white rounded-3xl shadow border border-[#D7ECF6]">
  <h2 className="text-4xl font-extrabold leading-[1.3] -mt-3 text-[#0E6388]">
    Challenge
  </h2>

  <div className="mt-6 p-10 rounded-3xl text-white 
     shadow space-y-6"
            style={{
    background: "rgb(14, 99, 136)"
  }}>

    <p>
      We started by reviewing Sake Cafe’s existing Instagram presence, brand identity,
      and growth objectives.
    </p>

    <p>
      The client was operating in a competitive Japanese restaurant and sushi market
      and needed to differentiate themselves while showcasing their diverse offerings.
    </p>

    <p className="font-semibold text-white text-xl pt-2">Key challenges included:</p>

    <ul className="space-y-3 text-white/95">
      <li>• Standing out in saturated sushi and Japanese restaurant market</li>
      <li>• Showcasing diverse offerings: brunch, lunch, dinner, Sake Nights</li>
      <li>• Highlighting signature items: Bento Boxes, Volcano Rolls, King Salmon Rolls</li>
      <li>• Creating appetizing content that drives cravings across different dayparts</li>
      <li>• Building engagement with an established but stable follower base (2.2K)</li>
      <li>• Balancing content between food visuals, atmosphere, and full dining experiences</li>
      <li>• Converting Instagram engagement into restaurant visits at all dayparts</li>
      <li>• Promoting special events like Happy Hours effectively</li>
    </ul>

  </div>
</section>


          {/* APPROACH */}
          <section id="approach" className="p-10 bg-white rounded-3xl shadow border border-[#D7ECF6]">
            <h2 className="text-4xl font-extrabold text-[#0E6388]">Approach</h2>
            <div className="mt-6 p-10 rounded-3xl text-white shadow space-y-6"
            style={{
    background: "rgb(14, 99, 136)"
  }}>
              <p>• Build awareness through stunning sushi visuals</p>
              <p>• Scaled content showcasing full dining occasions</p>
              <p>• Promoted weekday specials effectively</p>
            </div>
          </section>

          {/* KEY STRATEGY */}
          <section id="key-strategy" className="p-10 bg-white rounded-3xl shadow border border-[#D7ECF6]">
            <h2 className="text-4xl font-extrabold leading-[1.3] -mt-3 text-[#0E6388]">
              Key Strategies Implemented
            </h2>
            <div className="mt-6 p-10 rounded-3xl text-white shadow space-y-6"
            style={{
    background: "rgb(14, 99, 136)"
  }}>
              <p>• Signature dish focus: Bento Boxes, Volcano Rolls</p>
              <p>• Professional sushi photography</p>
              <p>• Chef technique videos</p>
              <p>• SEO optimized captions</p>
              <p>• Visual consistency maintaining premium aesthetic</p>
              <p>• Explore page optimization via stunning food content</p>
            </div>
          </section>

          {/* CASE STUDIES */}
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
  <p className="mt-2 text-black/70 text-sm">
    1.3M+ Views in 90 Days
  </p>

  {/* Stats grid */}
  <div className="grid grid-cols-2 gap-3 mt-5 w-[75%]">
    <CaseStat v="1.3M+" t="Total Views" />
  <CaseStat v="439K+" t="Accounts Reached" className="whitespace-nowrap" />
    <CaseStat v="89%" t="Organic Reach" />
    <CaseStat v="130%" t="Growth Rate" />
  </div>

  {/* LOGO BOTTOM RIGHT */}
  <img 
    src="/client/logo-2.png"
    className="absolute left-74 bottom-2 w-[100px]"
  />
</div>



  {/* CARD 2 — BEAVER BANK */}
  <div className="relative bg-[#FB8C00] text-white px-6 py-6 w-[400px] rounded-2xl shadow-lg">

    <h3 className="text-xl font-bold">Beaver Bank Station</h3>
    <p className="mt-2 text-white/90 text-sm">79K+ Views in 90 Days</p>

    <div className="grid grid-cols-2 gap-3 mt-5 w-[75%]">
      <CaseStatDark v="79K+" t="Total Views" />
      <CaseStatDark v="48K+" t="Accounts Reached"/>
      <CaseStatDark v="439" t="Interactions" />
      <CaseStatDark v="39%" t="Engagement" />
    </div>

    <img 
      src="/client/logo-5.png"
      className="absolute left-74 bottom-2 w-[100px]"
  />
 
  </div>


  {/* CARD 3 — HEARTHSTONE */}
  <div className="relative bg-[#142758] text-white px-6 py-6 w-[400px] rounded-2xl shadow-lg ">

    <h3 className="text-xl font-bold">Hearthstone Inn</h3>
    <p className="mt-2 text-white/90 text-sm">1.6K+ Views</p>

    <div className="grid grid-cols-2 gap-3 mt-5 w-[75%]">
      <CaseStatDark v="1.6K+" t="Total Views" />
      <CaseStatDark v="78%" t="Engagement" />
      <CaseStatDark v="94.6%" t="ER Rate" />
      <CaseStatDark v="53" t="Accounts" />
    </div>

    <img 
      src="/client/logo-6.png"
        className="absolute left-74 bottom-2 w-[100px]"
    />
  </div>


  {/* CARD 4 — RIVAAJ */}
  <div className="relative bg-[#B28829] text-white px-6 py-6 w-[400px] rounded-2xl shadow-lg ">

    <h3 className="text-xl font-bold">Rivaaj Resto-Bar</h3>
    <p className="mt-2 text-white/90 text-sm">48.9K+ Views</p>

    <div className="grid grid-cols-2 gap-3 mt-5 w-[75%]">
      <CaseStatDark v="48.9K" t="Total Views" />
      <CaseStatDark v="403" t="Interactions" />
      <CaseStatDark v="74" t="New Followers" />
      <CaseStatDark v="17" t="Shares" />
    </div>

    <img 
      src="/client/logo-17.png"
       className="absolute left-72 bottom-5 w-[110px]"
    />
  </div>

</div>
    </section>

        </div>
      </section>
    </div>
  );
}



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