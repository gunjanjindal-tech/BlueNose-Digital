import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

/* ---------------------------------------------------
   DARK COLOR CHECK
--------------------------------------------------- */
function isDarkColor(hex) {
  if (!hex) return false;
  const c = hex.replace("#", "");
  const r = parseInt(c.substring(0, 2), 16);
  const g = parseInt(c.substring(2, 4), 16);
  const b = parseInt(c.substring(4, 6), 16);

  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance < 0.5;
}

/* ---------------------------------------------------
   MAIN COMPONENT
--------------------------------------------------- */
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
      logo: "/client/adda-2.png",
      grid: "/client-grid/adda-grid.jpg",
    },
    {
      name: "Triveeni Events",
      link: "/work/triveeni-events",
      desc: "Event branding that scaled exponentially.",
      bg: "#FAFFD7",
      stats: ["1.3M Views", "439K Reach", "89% Organic", "130% Growth"],
      logo: "/client/logo-2.png",
      grid: "/client-grid/triveni-grid.jpg",
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
      link: "/work/nayya-pizza",
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
      logo: "/client/sake-2.png",
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
      desc: "Explosive growth fueled by cultural storytelling.",
      bg: "#fa6709",
      stats: ["943K Views", "74 Content Shared", "10.8K Interactions", "99% Engagement"],
      logo: "/client/logo-18.png",
      grid: "/client-grid/desi-garden-grid.jpg",
    },
  ];

  return (
    <section className="py-24 px-6 bg-white">
<Helmet>
  {/* PAGE TITLE */}
  <title>Work Gallery | Bluenose Digital Marketing – Client Results & Case Studies</title>

  {/* META DESCRIPTION */}
  <meta
    name="description"
    content="Explore Bluenose Digital’s work gallery — real client results, high-performing campaigns, branding, SMM, influencer marketing, UGC, and content that drives ROI."
  />

  {/* META KEYWORDS */}
  <meta
    name="keywords"
    content="digital marketing case studies, SMM results, branding portfolio, influencer marketing campaigns, UGC content, video editing portfolio, client performance"
  />

  {/* CANONICAL URL */}
  <link rel="canonical" href="https://www.bluenosedigital.ca/work-gallery" />

  {/* OPEN GRAPH FOR SOCIAL MEDIA */}
  <meta property="og:title" content="Work Gallery | Bluenose Digital – Client Results & Growth Stories" />
  <meta
    property="og:description"
    content="See real client performance: branding, SMM, influencer marketing, UGC, photography, and content that scaled brands."
  />
  <meta property="og:url" content="https://www.bluenosedigital.ca/work-gallery" />
  <meta property="og:image" content="https://www.bluenosedigital.ca/og-work.jpg" />
  <meta property="og:type" content="website" />

  {/* TWITTER CARD */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Bluenose Digital – Work Gallery" />
  <meta
    name="twitter:description"
    content="Explore our best-performing campaigns, brand transformations, and digital growth case studies."
  />
  <meta name="twitter:image" content="https://www.bluenosedigital.ca/og-work.jpg" />
</Helmet>


      {/* Heading */}
      <p className="text-center text-[#0E6388] font-semibold mb-2">→ Our Work</p>

      <h2 className="text-center text-4xl md:text-5xl font-extrabold text-[#063349]">
        Work <span className="text-[#0E6388]">Gallery</span>
      </h2>

      <p className="text-center text-gray-600 max-w-2xl mx-auto mt-4 mb-16">
        Campaigns that performed. Strategies that scaled. Brands that grew.
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {clients.map((c, i) => (
          <WorkCard key={i} data={c} />
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------------------------
   CARD COMPONENT
--------------------------------------------------- */
function WorkCard({ data }) {
  const dark = isDarkColor(data.bg);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="rounded-3xl p-8 shadow-xl overflow-hidden"
      style={{ background: data.bg }}
    >

      {/* ALWAYS SHOW GRID */}
      <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
        <img src={data.grid} className="w-full h-auto" />
      </div>

      {/* NAME */}
      <h3
        className="text-2xl font-bold text-center"
        style={{ color: dark ? "#fff" : "#063349" }}
      >
        {data.name}
      </h3>

      {/* DESC */}
      <p
        className="text-center text-sm mt-1 mb-5"
        style={{ color: dark ? "#fff" : "#063349" }}
      >
        {data.desc}
      </p>

      {/* STATS */}
      <div className="grid grid-cols-2 gap-3">
        {data.stats.map((s, i) => (
          <div
            key={i}
            className="bg-white/90 text-black rounded-xl py-3 text-center font-semibold shadow-sm"
          >
            {s}
          </div>
        ))}
      </div>

      {/* BUTTON */}
      <Link to={data.link}>
        <button className="
          mt-6 w-full py-2 rounded-full 
          bg-white text-black font-semibold 
          hover:bg-black hover:text-white 
          transition-all duration-300
        ">
          View Case →
        </button>
      </Link>

    </motion.div>
  );
}
