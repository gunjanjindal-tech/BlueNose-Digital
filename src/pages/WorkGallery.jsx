import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ColorThief from "colorthief";
import { Helmet } from "react-helmet";


export default function WorkGallery() {

  const clients = [
    { name:"The Garden Retreat", bg:"#0E6388", stats:["67K Views","74 Posts","13K Followers","49% Engagement"], logo:"/client/logo-8.png", link:"/work/garden-retreat" },
    { name:"Adda Indian Eatery", bg:"#4BC1E8", stats:["214K+ Views","1.2K Interactions","71 Shares","1.9K+ Followers"], logo:"/client/logo-4.png", link:"/work/adda-indian-eatery" },
    { name:"Triveeni Events", bg:"#F5C248", stats:["1.3M+ Views","439K Reach","89% Organic","130% Growth"], logo:"/client/logo-2.png", link:"/work/triveeni-events" },

    { name:"Pita Nutso", bg:"#2E2E2E", stats:["36.1K Views","52 Posts","276 Interactions","66% Engagement"], logo:"/client/logo-3.png", link:"/work/pita-nutso" },
    { name:"Nayya Pizza & Grill", bg:"#4BC1E8", stats:["312K Views","47 Posts","900+ Followers","54% Engagement"], logo:"/client/logo-1.png", link:"/work/nayya" },

    { name:"Beaver Bank Station", bg:"#0E6388", stats:["120K+ Reach","58 Videos","4.2% Growth","36% Engagement"], logo:"/client/logo-5.png", link:"/work/beaver-bank" },
    { name:"Sake Cafe | Sushi Bar", bg:"#2E2E2E", stats:["189K Views","64 Content","1.5K Saves","42% Return Audience"], logo:"/client/logo-7.png", link:"/work/sake" },
    { name:"Hearthstone Inn", bg:"#F5C248", stats:["78K Views","32 Videos","312 Saves","27% Visits"], logo:"/client/logo-6.png", link:"/work/hearthstone" },

    { name:"Besharam Bar & Grill", bg:"#0E6388", stats:["214K Views","65 Shares","990 Saves","4.7K Followers"], logo:"/client/logo-16.png", link:"/work/besharam" },
    { name:"Rivaaj Resto-Bar", bg:"#2E2E2E", stats:["612K Views","78 Posts","303 Saves","38% Conversion"], logo:"/client/logo-17.png", link:"/work/rivaaj" },
  ];

  return (
<section className="py-28 px-6 bg-white">
  <h1 className="text-center text-4xl md:text-6xl font-extrabold mb-2 text-[#0E3D55]">
    Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4BC1E8] to-[#0E6388]">
      Gallery
    </span>
  </h1>

  <p className="text-center text-lg md:text-2xl text-[#0E3D55]/80 max-w-3xl mx-auto mb-20 leading-relaxed tracking-wide">
    Campaigns that performed. Strategies that scaled. Brands that grew.
  </p>

  {/* ⭐ Final Clean 3-Column Responsive Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
    {clients.map((c, i) => (
      <Card key={i} data={c} />
    ))}
  </div>
</section>

  );
}

// ============ CARD COMPONENT ============

function Card({ data }) {

  const [bg, setBg] = useState("#0E6388"); // fallback blue

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = data.logo;

    img.onload = () => {
      const colorThief = new ColorThief();
      const result = colorThief.getColor(img);   // returns [r,g,b]
      setBg(`rgb(${result[0]},${result[1]},${result[2]})`);
    };
  }, [data.logo]);

  return (
    <motion.div whileHover={{scale:1.03}} transition={{duration:.4}}
      className="rounded-2xl p-8 shadow-xl flex flex-col justify-between text-white"
      style={{ background: bg }}
    >
      
      {/* Client Name */}
      <h3 className="text-2xl font-bold">{data.name}</h3>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 mt-5">
        {data.stats.map((s,i)=>(
          <div key={i} className="bg-white text-black rounded-lg px-4 py-3 font-semibold text-sm shadow">
            {s}
          </div>
        ))}
      </div>

      {/* Logo + Button */}
      <div className="flex justify-between items-end mt-6">
        <div className="h-16 w-16 rounded-xl bg-white/70 shadow-md flex items-center justify-center overflow-hidden">
          <img src={data.logo} className="h-12 w-auto object-contain" />
        </div>

        <Link to={data.link}>
          <button className="px-5 py-2 rounded-full bg-white text-black font-semibold hover:bg-black hover:text-white transition">
            View Case →
          </button>
        </Link>
      </div>

    </motion.div>
  );
}
