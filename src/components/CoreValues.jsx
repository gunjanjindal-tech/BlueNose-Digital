import React from "react";
import { motion } from "framer-motion";
import { Star, Award, Users, Zap, Target, Navigation2 } from "lucide-react";

const items = [
  { title: "Excellence", icon: Award, text: "Inspired by the Bluenose ship's speed and efficiency, we strive for excellence in all our services."},
  { title: "Innovation", icon: Target, text: "We employ unique and creative marketing strategies tailored to each client's needs."},
  { title: "Transparency", icon: Star, text: "We provide market feedback, insights, and results—keeping you informed and empowered."},
  { title: "Collaboration", icon: Users, text: "We work hand-in-hand with brands—like partners, not vendors."},
  { title: "Affordability", icon: Zap, text: "Premium quality work at honest pricing — No shortcuts, no compromise."},
  { title: "Integrity", icon: Navigation2, text: "Honesty, consistency, and trust guide everything we do."},
];

export default function CoreValues() {
  const anim = {
    hidden: { opacity: 0, scale: 0.8, y: 14 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: .6 }},
  };

  return (
    <section 
      className="relative py-24 bg-white overflow-hidden"
    >

      {/* ABOUT THEME GLOW (soft, premium, not dark) */}
      <div 
        className="absolute inset-0 opacity-[0.14] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, #4BC1E8 0%, transparent 55%), radial-gradient(circle at 75% 70%, #0E6388 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        <h2 className="text-[#0E3D55] text-center text-4xl md:text-5xl font-extrabold mb-16">
          Our <span className="bg-gradient-to-r from-[#4BC1E8] to-[#0E6388] bg-clip-text text-transparent">Core Values</span>
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16">

          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={index} className="flex flex-col items-center text-center">

                <motion.div initial="hidden" whileInView="show" variants={anim} className="relative">

                  {/* white circular badge */}
                  <div className="p-8 rounded-full bg-white shadow-xl border border-[#E7F2FF]">
                    <div className="rounded-full p-6 bg-[#4BC1E8]/10">
                      <Icon className="w-8 h-8 text-[#F5C248]" />
                    </div>
                  </div>

                  {/* gold dotted ring */}
                  <div className="absolute -inset-4 rounded-full border-2 border-dashed border-[#F5C248] animate-spin-slow"></div>

                </motion.div>

                <h4 className="mt-6 text-[#0E3D55] text-lg font-semibold">{item.title}</h4>
                <p className="mt-3 text-[#0E3D55]/75 max-w-[280px] text-sm leading-relaxed">
                  {item.text}
                </p>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
