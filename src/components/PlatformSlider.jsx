import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function PlatformShowcase() {
  const platforms = [
    {
      name: "YouTube",
      desc: "Video marketing strategies that educate, entertain, and convert viewers into loyal customers.",
      icon: "/service/yt.png",
      logo: "/service/yt.png",
      features: [
        "Content Strategy & Planning",
        "YouTube Ads",
        "Video SEO Optimization",
        "Audience Retention Optimization",
        "Channel Growth",
        "Analytics & Performance Tracking",
      ],
    },
    {
      name: "TikTok",
      desc: "Creative, trend-driven content to boost visibility, engagement, and brand awareness.",
      icon: "/service/tiktok.png",
      logo: "/service/tiktok.png",
      features: [
        "Trend-Driven Content",
        "Hashtag Strategy",
        "Influencer Collaborations",
        "Viral Campaign Planning",
        "Paid Ads",
        "Audience Insights",
      ],
    },
    {
      name: "Instagram",
      desc: "Brand visuals, reels, and influencer collaborations designed for reach and engagement.",
      icon: "/service/ig.png",
      logo: "/service/ig.png",
      features: [
        "Visual Branding",
        "Stories & Reels",
        "Hashtag Optimization",
        "Influencer Collabs",
        "High-Impact Ads",
        "Organic Audience Growth",
      ],
    },
    {
      name: "Facebook",
      desc: "Meta campaigns that drive reach, engagement, community, and conversions.",
      icon: "/service/fb.png",
      logo: "/service/fb.png",
      features: [
        "Advanced Audience Targeting",
        "Paid Advertising",
        "Full-Funnel Strategy",
        "Community Engagement",
        "Retargeting Campaigns",
        "Lead Generation",
      ],
    },
    {
      name: "LinkedIn",
      desc: "Professional campaigns for B2B awareness, authority-building, and high-quality leads.",
      icon: "/service/linkedin.png",
      logo: "/service/linkedin.png",
      features: [
        "Profile Optimization",
        "Thought Leadership Content",
        "Lead Generation",
        "Audience Engagement",
        "LinkedIn Ads",
        "Analytics & Reporting",
      ],
    },
  ];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % platforms.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20">
  <div className="max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-5xl md:text-5xl font-extrabold  text-[#0E6388] leading-tight]">
        What Sets Us  <span className=" text-[#0E6388]">
          {" "}Apart{" "}
        </span>
      </h2>

      <p className="text-[#0A3A53]/80 max-w-xl mx-auto mt-4">
        Creative, data-driven social media campaigns for all platforms.
      </p>

      {/* LOGOS NAVIGATION */}
      <div className="flex justify-center gap-6 mt-10">
        {platforms.map((p, i) => (
          <button key={i} onClick={() => setActive(i)}>
            <img
              src={p.logo}
              className={`w-12 h-12 transition-all ${
                active === i ? "opacity-100 scale-110" : "opacity-50 hover:opacity-80"
              }`}
            />
          </button>
        ))}
      </div>

      {/* MAIN CARD */}
      <div className="max-w-5xl mx-auto mt-12">
        <motion.div
          key={active}
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="
            p-10 rounded-3xl shadow-xl grid md:grid-cols-2 gap-10 items-center
            text-white
          "
       style={{
    background: "rgb(14, 99, 136)"
  }}
        >
          {/* LEFT TEXT */}
          <div className="text-left">
            <h3 className="text-3xl font-bold">
              {platforms[active].name}
            </h3>
            <p className="text-white/80 mt-4">
              {platforms[active].desc}
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              {platforms[active].features.map((f, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs rounded-full border border-white/30"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT ICON */}
          <motion.img
            key={platforms[active].icon}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            src={platforms[active].icon}
            className="w-64 mx-auto drop-shadow-xl"
          />
        </motion.div>
      </div>
      </div>
    </section>
  );
}
