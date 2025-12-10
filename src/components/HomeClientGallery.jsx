import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// ---------------------------------------------------
// DARK COLOR CHECK
// ---------------------------------------------------
function isDarkColor(hex) {
  if (!hex) return false;
  const c = hex.replace("#", "");
  const r = parseInt(c.substring(0, 2), 16);
  const g = parseInt(c.substring(2, 4), 16);
  const b = parseInt(c.substring(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance < 0.5;
}

export default function WorkGallery() {
  const clients = [
    {
      name: "The Garden Retreat",
      link: "/work/the-garden-retreat",
      desc: "Luxury hospitality with strong engagement.",
      bg: "#2e5c2e",
      stats: ["67K Views", "74 Posts", "13K Followers", "49% Engagement"],
      logo: "/client/logo-8.png",
      grid: "/client-grid/graden-retreat-grid.jpg",
    },
    {
      name: "Adda Indian Eatery",
       link: "/work/adda-indian-eatery",
      desc: "Bold content delivering powerful organic reach.",
      bg: "#FFC100",
      stats: ["214K Views", "1.2K Interactions", "71 Shares", "1.9K Followers"],
      logo: "/client/logo-4.png",
      grid: "/client-grid/adda-grid.jpg",
    },

    {
      name: "Triveeni Events",
      link: "/work/triveeni-events",
      desc: "Event branding that scaled exponentially.",
      bg: "#FAFFD7",
      stats: ["1.3M Views", "439K Reach", "89% Organic", "130% Growth"],
      logo: "/client/logo-2.png",
    },
    {
      name: "Pita Nutso",
       link: "/work/pita-nutso",
      desc: "Organic growth for a takeaway favourite.",
      bg: "#FDF1D9",
      stats: ["36.1K Views", "52 Posts", "276 Interactions", "66% Engagement"],
      logo: "/client/logo-3.png",
      grid: "/client-grid/pita-grid.jpg",
    },

    {
      name: "Nayya Pizza & Grill",
link: "/work/nayya-Pizza",
      desc: "High-performing campaigns with strong traction.",
      bg: "#FF6B01",
      stats: ["312K Views", "47 Posts", "900+ Followers", "54% Engagement"],
      logo: "/client/logo-1.png",
      grid: "/client-grid/nayya-grid.jpg",
    },
    {
      name: "Beaver Bank Station",
      link: "/work/beaver-bank-station",
      desc: "Consistent performance with strong retention.",
      bg: "#fa9b0b",
      stats: ["120K Reach", "58 Videos", "4.2% Growth", "36% Engagement"],
      logo: "/client/logo-5.png",
      grid: "/client-grid/beaver-grid.jpg",
    },

    {
      name: "Sake Cafe | Sushi Bar",
    link: "/work/sake-cafe",
      desc: "Premium brand visuals with strong returns.",
      bg: "#b2222b",
      stats: ["189K Views", "64 Content", "1.5K Saves", "42% Return Audience"],
      logo: "/client/logo-7.png",
      grid: "/client-grid/sake-grid.jpg",
    },
    {
      name: "Hearthstone Inn",
      link: "/work/hearthstone",
      desc: "Hotel branding with polished content strategy.",
      bg: "#233369",
      stats: ["78K Views", "32 Videos", "312 Saves", "27% Visits"],
      logo: "/client/logo-6.png",
      grid: "/client-grid/hearthstone-grid.jpg",
    },

    {
      name: "Besharam Bar & Grill",
      link: "/work/besharam",
      desc: "Bold storytelling with strong conversions.",
      bg: "#134457",
      stats: ["214K Views", "65 Shares", "990 Saves", "4.7K Followers"],
      logo: "/client/logo-16.png",
      grid: "/client-grid/besaharam-grid.jpg",
    },

    {
      name: "Rivaaj Resto-Bar",
       link: "/work/rivaaj",
      desc: "Modern brand identity with high growth.",
      bg: "#ad863e",
      stats: ["612K Views", "78 Posts", "303 Saves", "38% Conversion"],
      logo: "/client/logo-17.png",
      grid: "/client-grid/rivaaz-grid.jpg",
    },

    {
      name: "Desi Garden",
       link: "/work/desi-garden",
      desc: "Explosive growth driven by cultural storytelling.",
      bg: "#fa6709",
      stats: ["943K Views", "74 Content Shared", "10.8K Interactions", "99% Engagement"],
      logo: "/client/logo-18.png",
      grid: "/client-grid/desi-garden-grid.jpg",
    },
  ];

  const [index, setIndex] = useState(0);

  return (
    <section className="py-24 px-6 bg-white">
      <Helmet>
        <title>Work Gallery | Bluenose Digital Marketing</title>
      </Helmet>

      <p className="text-center text-[#0E6388] font-semibold mb-2">→ Client Results</p>

      <h2 className="text-center text-4xl md:text-5xl font-extrabold text-[#063349]">
        Proven Results That <span className="text-[#0E6388]">Drive Growth</span>
      </h2>

      <p className="text-center text-gray-600 max-w-2xl mx-auto mt-4 mb-10">
        Our campaigns deliver measurable impact across industries.
      </p>

      {/* CLIENT NAME TABS */}
      <div className="flex justify-center gap-4 flex-wrap mb-4">
        <span className="px-5 py-2 bg-[#0E6388] text-white rounded-full">
          {clients[index].name}
        </span>

        {clients[index + 1] && (
          <span className="px-5 py-2 bg-[#0E6388] text-white rounded-full">
            {clients[index + 1].name}
          </span>
        )}
      </div>

      {/* ARROWS */}
      <div className="flex justify-between max-w-6xl mx-auto mb-8">
        <button
          className="bg-[#0E6388] text-white p-3 rounded-full disabled:opacity-30"
          disabled={index === 0}
          onClick={() => setIndex(index - 2)}
        >
          ←
        </button>

        <button
          className="bg-[#0E6388] text-white p-3 rounded-full disabled:opacity-30"
          disabled={index >= clients.length - 2}
          onClick={() => setIndex(index + 2)}
        >
          →
        </button>
      </div>

      {/* 2 CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
        <WorkCard data={clients[index]} />
        {clients[index + 1] && <WorkCard data={clients[index + 1]} />}
      </div>
    </section>
  );
}

// ---------------------------------------------------
// CARD COMPONENT
// ---------------------------------------------------
function WorkCard({ data }) {
  const dark = isDarkColor(data.bg);
  const [showGrid, setShowGrid] = useState(false);

  return (
    <motion.div
      className="rounded-3xl p-8 shadow-xl"
      style={{ background: data.bg }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* GRID / LOGO TOGGLE */}
      <div className="cursor-pointer mb-6" onClick={() => setShowGrid(!showGrid)}>
        <AnimatePresence mode="wait">
          {!showGrid ? (
            <motion.div
              key="logo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-34 w-34 mx-auto rounded-2xl bg-white/30 backdrop-blur-md flex items-center justify-center"
            >
              <img src={data.logo} className="h-26 object-contain" />
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <img src={data.grid} className="w-full h-auto" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* NAME */}
      <h3
        className="text-2xl font-bold text-center"
        style={{ color: dark ? "white" : "#063349" }}
      >
        {data.name}
      </h3>

      <p
        className="text-center mt-1 text-sm mb-5"
        style={{ color: dark ? "white" : "#063349" }}
      >
        {data.desc}
      </p>

      {/* STATS */}
      <div className="grid grid-cols-2 gap-3">
        {data.stats.map((s, i) => (
          <div key={i} className="bg-white/85 text-black rounded-xl py-3 text-center font-semibold">
            {s}
          </div>
        ))}
      </div>

      {/* BUTTON */}
    {/* BUTTON */}
<Link to={data.link}>
  <button className="mt-6 w-full py-2 rounded-full bg-white text-black font-semibold hover:bg-black hover:text-white transition">
    View Case →
  </button>
</Link>

    </motion.div>
  );
}
