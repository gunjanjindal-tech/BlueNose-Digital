import React, { useState } from "react";

export default function ServiceVideosSection({ title, videos }) {
  const [soundOn, setSoundOn] = useState({});

  const toggleSound = (index) => {
    setSoundOn((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section className="py-20 bg-white text-[#0E3D55]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold mb-14">
          {title}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4BC1E8] to-[#0E6388]">
            Videos
          </span>
        </h2>

        {/* Videos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {videos.map((item, index) => (
            <div
              key={index}
              className="relative rounded-3xl overflow-hidden shadow-lg border border-[#0E3D55]/10"
              style={{ aspectRatio: "9/16" }}
            >
              <video
                src={item.url}
                autoPlay
                loop
                playsInline
                muted={!soundOn[index]}
                preload="none"
                className="w-full h-full object-cover"
              />

              {/* Views */}
              <div className="absolute bottom-3 left-3 bg-black/60 text-white px-3 py-1 rounded-full text-xs">
                👁 {item.views}
              </div>

              {/* Sound Toggle */}
              <button
                onClick={() => toggleSound(index)}
                className="absolute top-3 right-3 bg-black/60 text-white px-3 py-1 rounded-full text-xs"
              >
                {soundOn[index] ? "🔊" : "🔇"}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
