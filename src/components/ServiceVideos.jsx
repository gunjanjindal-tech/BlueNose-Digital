import React, { useState } from "react";
import { Link } from "react-router-dom"; 

export default function ServiceVideos() {
  const services = [
    "SMM",
    "Branding",
    "Influencer Marketing",
    "Video Editing",
    "UGC",
    "Photography",
  ];

  const serviceVideos = {
  SMM: [
  { 
    url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414584/SMM_1_ew5mpu.mov", 
    views: "12.4K" 
  },
  { 
    url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414604/SMM_2_et8fyi.mov", 
    views: "8.9K" 
  },
  { 
    url: "/videos/smm3.mp4",  // keeping original file as you requested
    views: "15.2K" 
  },
  { 
    url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414663/SMM_5_vlimnn.mp4",  
    views: "5.7K" 
  },
],

    
  Branding: [
  { 
    url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414238/Personal_Branding_1_abmcg7.mov", 
    views: "10.1K" 
  },
  { 
    url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414238/Personal_Branding_2_ejoaet.mov", 
    views: "7.3K" 
  },
  { 
    url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414240/Personal_Branding_3_rvlgjk.mov", 
    views: "4.9K" 
  },
  { 
    url: "/videos/branding4.mp4", // keeping as you requested
    views: "12.2K" 
  },
],

    
"Influencer Marketing": [
  { 
    url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414144/Influencer_marketing_1_lq9d3z.mov", 
    views: "9.2K" 
  },
  { 
    url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414146/Influencer_marketing_2_dd0qqy.mov", 
    views: "6.4K" 
  },
  { 
    url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414144/Influencer_marketing_4_yecfec.mp4", 
    views: "11.8K" 
  },
  { 
    url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414144/Influencer_marketing_4_yecfec.mp4", 
    views: "4.1K" 
  },
],

    
"Video Editing": [
  { 
    url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414823/Video_Production_3_mbldqf.mp4", 
    views: "14.3K" 
  },
  { 
    url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414820/Video_Production_2_slp4ms.mp4", 
    views: "3.7K" 
  },
  { 
    url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414818/Video_production_4_ha90ws.mp4", 
    views: "16.5K" 
  },
  { 
    url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414818/Video_Production_1_xiz4sn.mov", 
    views: "5.2K"
  },
],

    
UGC: [
  { 
    url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414731/UGC_1_tqmfnt.mov", 
    views: "18.1K" 
  },
  { 
    url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414748/UGC_2_t04guj.mov", 
    views: "9.9K" 
  },
  { 
    url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414787/UGC_3_oif38l.mov", 
    views: "6.2K" 
  },
  { 
    url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414723/UGC_4_ssejjv.mp4", 
    views: "12.6K" 
  },
],

    
 Photography: [
  { 
    url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414450/Photography_1_xp1wud.mov",
    views: "20.2K" 
  },
  { 
    url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414455/photography_2_bttpuu.mov",
    views: "11.4K" 
  },
  { 
    url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414452/photography_3_kgb9it.mov",
    views: "7.9K" 
  },
  { 
    url: "/videos/photo4.mp4",  // kept as requested
    views: "14.7K" 
  },
],
  };

  const [activeService, setActiveService] = useState("SMM");
  const [soundOn, setSoundOn] = useState({});

  const toggleSound = (index) => {
    setSoundOn((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section
      className="py-24 relative overflow-hidden text-white"
      style={{ backgroundColor:"#000" }} // same base as Hero
    >

      {/* SAME BACKGROUND GRADIENT AS HERO */}
    <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, #0E6388 0%, transparent 60%), radial-gradient(circle at 80% 70%, #4BC1E8 0%, transparent 70%)",
        }}
      ></div>


      {/* SECTION HEADER */}
      <div className="text-center mb-6 relative z-10">
        <p className="flex items-center justify-center gap-2 text-lg font-medium">
          <span className="text-[#4BC1E8] text-2xl">→</span>
          <Link to="/services" className="text-transparent bg-clip-text bg-gradient-to-r from-[#4BC1E8] to-[#0E6388]">
            Our Services
          </Link>
        </p>
      </div>

      <h2 className="text-center text-3xl md:text-5xl font-extrabold mb-12 relative z-10">
        Explore Our{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4BC1E8] to-[#0E6388]">
          Services
        </span>
      </h2>


      {/* SERVICE FILTER BUTTONS */}
      <div className="flex justify-center gap-6 mb-14 relative z-10 flex-wrap">
        {services.map((srv) => (
          <button
            key={srv}
            onClick={() => setActiveService(srv)}
            className={`px-6 py-3 rounded-full font-medium border transition duration-300
            ${activeService === srv
              ? "bg-gradient-to-r from-[#4BC1E8] to-[#0E6388] text-white shadow-lg scale-[1.05]"
              : "bg-white/10 text-white border-white/20 hover:bg-white/20"}
          `}>
            {srv}
          </button>
        ))}
      </div>


      {/* VIDEO GRID (REELS STYLE) */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6 relative z-10">

        {serviceVideos[activeService].map((item, index) => (
          <div
            key={index}
            className="relative rounded-3xl overflow-hidden border border-white/10 shadow-xl"
            style={{ aspectRatio:"9/16", width:"100%", maxHeight:"100%" }}
          >
            <video
              src={item.url}
              autoPlay
              loop
              playsInline
              preload="none"
              muted={!soundOn[index]}
              className="w-full h-full object-cover"
            />

            {/* Views tag */}
            <div className="absolute bottom-3 left-3 bg-black/60 px-3 py-1 rounded-full text-xs">
              👁 {item.views}
            </div>

            {/* Sound control */}
            <button
              onClick={() => toggleSound(index)}
              className="absolute top-3 right-3 bg-black/50 px-3 py-1 rounded-full text-xs"
            >
              {soundOn[index] ? "🔊" : "🔇"}
            </button>
          </div>
        ))}

      </div>

    </section>
  );
}
