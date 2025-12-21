import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

// ---------------- DARK COLOR CHECK ----------------
function isDarkColor(hex) {
  if (!hex) return false;
  const c = hex.replace("#", "");
  const r = parseInt(c.substring(0, 2), 16);
  const g = parseInt(c.substring(2, 4), 16);
  const b = parseInt(c.substring(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance < 0.5;
}

// ---------------- MAIN COMPONENT ----------------
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
      stats: ["1.3M Views", "439K Reach", "89% Organic Reach", "130% Growth"],
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
  const [showGrid, setShowGrid] = useState(false);

  useEffect(() => {
  setShowGrid(false);

  const timer = setTimeout(() => {
    setShowGrid(true);
  }, 3000); 

  return () => clearTimeout(timer);
}, [index]);


  const openClient = (i) => {
    setIndex(i);
  };
  const prevClient = () => {
  setIndex((prev) => (prev === 0 ? clients.length - 1 : prev - 1));
};

const nextClient = () => {
  setIndex((prev) => (prev === clients.length - 1 ? 0 : prev + 1));
};



  return (
    <section className="pb-20 pt-10 px-6 ">

       <p className="text-[#0E6388] font-semibold tracking-wide mb-2 text-center">
      → Client Results
    </p>

      <h2 className="text-center text-4xl md:text-5xl font-extrabold text-[#063349] ">
        Client <span className="text-[#0E6388]">Results</span>
      </h2>


    <p className="text-[#063349]/80 text-lg max-w-3xl mx-auto mt-2 mb-8 ">
     Clear metrics and transparent reporting that demonstrate the effectiveness of our work.
    </p>


{/* CLIENT SELECTOR — SHOW ONLY ON SMALL SCREENS (≤763px) */}
{/* MOBILE CLIENT SLIDER */}
<div className="md:hidden flex items-center justify-center gap-4 mb-6">
  
  {/* LEFT ARROW */}
  <button
    onClick={prevClient}
    className="h-9 w-9 flex items-center justify-center rounded-full border border-[#063349] text-[#063349]"
  >
    ←
  </button>

  {/* CLIENT NAME */}
  <div className="px-4 py-2 rounded-full border border-[#063349] text-[#063349] text-sm font-semibold text-center max-w-[220px] truncate">
    {clients[index].name}
  </div>

  {/* RIGHT ARROW */}
  <button
    onClick={nextClient}
    className="h-9 w-9 flex items-center justify-center rounded-full border border-[#063349] text-[#063349]"
  >
    →
  </button>

</div>




      {/* MAIN CARD */}
      <div className="max-w-7xl mx-auto">
        <HorizontalCard
          data={clients[index]}
          showGrid={showGrid}
          clients={clients}
          openClient={openClient}
          index={index}
        />
      </div>
    </section>
  );
}

// ---------------- HORIZONTAL CARD ----------------
function HorizontalCard({ data, showGrid, clients, openClient, index }) {
  const dark = isDarkColor(data.bg);
const forceWhiteText = [
  "Nayya Pizza & Grill",
  "Beaver Bank Station",
  "Rivaaj Resto-Bar",
  "Desi Garden",
].includes(data.name);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-10 rounded-3xl p-12 shadow-xl"
      style={{ background: data.bg }}
    >

{/* DESKTOP MERGED CLIENT SELECTOR */}
<div className="hidden md:flex gap-3 flex-wrap mb-6 col-span-2 justify-center">

  {clients.map((c, i) => {
    // LIGHT CARDS → use black pills
    const lightCards = ["Triveeni Events", "Pita Nutso"];
    const isLight = lightCards.includes(data.name);

    return (
      <button
        key={i}
        onClick={() => openClient(i)}
        className={`
          px-4 py-1.5 text-sm rounded-full border transition
          ${
            i === index
              ? isLight
                ? "bg-white text-black border-black shadow-sm"
                : "bg-white text-[#063349] border-white shadow-sm"
              : isLight
                ? "bg-transparent text-black border-black hover:bg-black/10"
                : "bg-transparent text-white border-white/40 hover:bg-white/20"
          }
        `}
      >
        {c.name}
      </button>
    );
  })}
</div>





      {/* LEFT TEXT CONTENT */}
      <div className="flex flex-col justify-center">
      <h3
  className="text-4xl font-extrabold mb-2"
  style={{ color: dark || forceWhiteText ? "#fff" : "#063349" }}
        >
          {data.name}
</h3>

     <p
  className="text-lg mb-6"
  style={{ color: dark || forceWhiteText ? "#fff" : "#063349" }}
        >
          {data.desc}
</p>

        <div className="grid grid-cols-2 gap-4 mb-6 max-w-2xl">
          {data.stats.map((item, i) => (
<div
  key={i}
  className="bg-white text-black rounded-2xl p-4 sm:p-6 text-center shadow flex flex-col  justify-center items-center" 
>
  <p className="sm:text-2xl md:text-4xl font-extrabold leading-tight tracking-wide">
    {item.split(" ")[0]}
  </p>

  <p className="
    text-sm
    sm:text-base
    font-semibold
    opacity-80
    mt-1
    leading-snug
    tracking-normal
    break-words
    
  ">
    {item.split(" ").slice(1).join(" ")}
  </p>
</div>


          ))} 
        </div>

        <Link to={data.link}>
          <button className="px-6 py-3 rounded-full bg-white text-[#063349] font-semibold hover:bg-black hover:text-white transition">
            View Case →
          </button>
        </Link>
      </div>

      {/* RIGHT — LOGO → GRID */}
      <AnimatePresence mode="wait">
        {!showGrid ? (
          <motion.div
            key="logo"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center items-center"
          >
            <div className="h-78 w-78 bg-white/40 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg">
              <img src={data.logo} className="h-72 object-cover" />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
  
          >
            <img src={data.grid} className="w-full h-40 sm:h-68 md:h-120 object-contain rounded-2xl" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
