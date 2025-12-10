import React from "react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function Hero() {

  const iframeRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    // YouTube Player API message format
    iframe.contentWindow.postMessage(
      JSON.stringify({
        event: "command",
        func: muted ? "unMute" : "mute",
        args: [],
      }),
      "*"
    );

    setMuted(!muted);
  };

  return (
    
    <section className="relative w-full overflow-hidden bg-white pt-20 pb-20 px-1">

      {/* Premium Headline */}
      <div className="text-center">
        <h1 className="text-5xl md:text-5xl font-extrabold text-[#0E6388] leading-tight">
          We Build Brands That Stand Out — <span className="text-[#0E6388]">And Scale Fast</span>
        </h1>
        <p className="mt-4 text-transparent bg-clip-text
    bg-gradient-to-r from-[#0E3D55] via-[#0F587A] to-[#11719A] text-lg md:text-xl">Design · Strategy · Digital Execution · Real Results
 </p>
      </div>


      {/* HERO BLOB IMAGE SECTION */}
      <div className="relative mx-auto mt-10 w-[78%] md:w-[65%]">

        <motion.div
          initial={{ opacity:0, scale:0.92 }}
          animate={{ opacity:1, scale:1 }}
          transition={{ duration:1 }}
          className="relative rounded-[60px] shadow-2xl overflow-hidden"
          style={{
            background:"linear-gradient(145deg,#e6f9ff,#ffffff 30%,#def3ff 90%)",
            height:"420px"
          }}
        >
          {/* YOUR HERO IMAGE */}
 <div className="relative w-full h-full rounded-xl overflow-hidden shadow-xl">
      {/* YouTube iframe */}
      <iframe
        ref={iframeRef}
        className="w-full h-full"
        src="https://www.youtube.com/embed/nBXBZdPK-lo?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&playsinline=1&loop=1&playlist=nBXBZdPK-lo&enablejsapi=1"
        title="video"
        frameBorder="0"
        allow="autoplay; encrypted-media;"
        allowFullScreen
      ></iframe>

      {/* Sound Toggle Icon */}
      <button
        onClick={toggleMute}
        className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm"
      >
        {muted ? "🔇" : "🔊"}
      </button>
    </div>
  );
}


        </motion.div>

        {/* FLOATING STATS ON IMAGE */}
       <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 flex gap-10 md:gap-20 bg-white/70 backdrop-blur-xl px-10 py-5 rounded-full shadow-xl">

  <div className="text-center">
    <p className="text-3xl font-bold text-[#0E6388]">120+</p>
    <p className="text-xs text-gray-600 whitespace-nowrap">Global Clients</p>
  </div>

  <div className="text-center">
    <p className="text-3xl font-bold text-[#0E6388]">5K+</p>
    <p className="text-xs text-gray-600 whitespace-nowrap">Campaigns Delivered</p>
  </div>

  <div className="text-center">
    <p className="text-3xl font-bold text-[#0E6388]">320%</p>
    <p className="text-xs text-gray-600 whitespace-nowrap">ROI Growth Avg.</p>
  </div>

</div>


      </div>


      {/* LEFT CONTENT BLOCK */}
      {/* <div className="mt-32 max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold text-[#063349]">Branding That Converts</h2>

        <p className="text-gray-600 leading-relaxed text-lg max-w-2xl mx-auto">
          We build brands that are remembered, chosen & trusted.  
          Emotion-driven design + high performance execution = measurable growth.
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <button className="px-8 py-3 rounded-full text-white font-medium bg-gradient-to-r from-[#4BC1E8] to-[#0E6388] shadow-lg hover:opacity-90">
            Get Started →
          </button>
          <button className="px-8 py-3 rounded-full border border-[#0E6388] text-[#0E6388] hover:bg-[#0E6388]/10">
            View Portfolio
          </button>
        </div>
      </div> */}

    </section>
  );
}
