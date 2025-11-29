import React from "react";
import { motion } from "framer-motion";

export default function Hero() {

  return (
    <section className="relative w-full overflow-hidden bg-white pt-20 pb-20">

      {/* Premium Headline */}
      <div className="text-center">
        <h1 className="text-5xl md:text-5xl font-extrabold text-transparent bg-clip-text
    bg-gradient-to-r from-[#0E3D55] via-[#0F587A] to-[#11719A] leading-tight">
          We Build Brands That Stand Out — <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4BC1E8] to-[#0E6388]">And Scale Fast</span>
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
          <img
            src="https://i.pinimg.com/736x/d2/26/e6/d226e66a00ad4af15f01072694bd9ebf.jpg"
            className="w-full h-full object-cover opacity-[.95]"
          />
        </motion.div>

        {/* FLOATING STATS ON IMAGE */}
        <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 flex gap-10 md:gap-20 bg-white/70 backdrop-blur-xl px-10 py-5 rounded-full shadow-xl">
          <div className="text-center">
            <p className="text-3xl font-bold text-[#0E6388]">12+</p>
            <p className="text-xs text-gray-600">Years</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-[#0E6388]">800+</p>
            <p className="text-xs text-gray-600">Projects</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-[#0E6388]">500+</p>
            <p className="text-xs text-gray-600">Clients</p>
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
