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
    url:"https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414584/SMM_1_ew5mpu.mov", 
    views: "12.4K" 
  },
  { 
    url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414604/SMM_2_et8fyi.mov", 
    views: "8.9K" 
  },
  { 
    url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414663/SMM_5_vlimnn.mp4" ,
    views: "15.2K" 
  },
  { 
    url: "/videos/smm4.mp4",  
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

  const iconMute = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
    <path d="M4 9V15H8L13 20V4L8 9H4Z" />
    <line x1="17" y1="7" x2="21" y2="11" stroke="white" strokeWidth="2" />
    <line x1="21" y1="7" x2="17" y2="11" stroke="white" strokeWidth="2" />
  </svg>
);

const iconUnmute = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
    <path d="M4 9V15H8L13 20V4L8 9H4Z" />
    <path d="M16 8C17.5 9.5 17.5 14.5 16 16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <path d="M18.5 5.5C21.5 9 21.5 15 18.5 18.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);


  return (
    <section
      className="py-24 relative overflow-hidden text-white"
      style={{ backgroundColor:"#000" }} 
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
    <span className="text-white text-2xl">→</span>
    <span className="text-white">
      Our Services
    </span>
  </p>
</div>


      <h2 className="text-center text-3xl md:text-5xl font-extrabold mb-12 relative z-10">
        Explore Our{" "}
        <span className="text-white">
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
      ? "text-white shadow-lg scale-[1.05]"
      : "bg-white/10 text-white border-white/20 hover:bg-white/20"
    }
    focus:bg-white focus:text-black
  `}
  style={
    activeService === srv
      ? { background: "rgb(14, 99, 136)", color: "white" }
      : {}
  }
>
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
          <div className="absolute bottom-3 left-3 bg-black/60 px-3 py-1 rounded-full text-xs flex items-center gap-1">
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
    <polyline points="16 7 22 7 22 13"/>
  </svg>
  <span>{item.views}</span>
</div>


            {/* Sound control */}
          <button
  onClick={() => toggleSound(index)}
  className="absolute top-3 right-3 bg-black/50 p-2 rounded-full flex items-center justify-center shadow-md backdrop-blur"
>
  {soundOn[index] ? iconUnmute : iconMute}
</button>

          </div>
        ))}

      </div>

    </section>
  );
}
