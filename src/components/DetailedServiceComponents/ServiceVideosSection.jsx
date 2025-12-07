import React, { useState } from "react";

export default function ServiceVideosSection({ title, videos }) {
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
  className="absolute top-3 right-3 bg-black/50 p-2 rounded-full flex items-center justify-center shadow-md backdrop-blur"
>
  {soundOn[index] ? iconUnmute : iconMute}
</button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
