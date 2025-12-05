import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PricingPlans() {
  const [billing, setBilling] = useState("quarter");
  const [cur, setCur] = useState("usd");
  const [tooltip, setTooltip] = useState(null);

  const price = {
    quarter: {
      usd: [3200, 5600, 9600, "20,000 – 100,000"],
      inr: ["2,24,000", "3,92,000", "6,72,000", "14L – 70L"],
      cad: [4300, 7600, 13000, "28,000 – 140,000"],
    },
    semi: {
      usd: [2816, 4928, 8448, "17,600 – 88,000"],
      inr: ["1,97,000", "3,45,000", "5,92,000", "12.5L – 55L"],
      cad: [3780, 6650, 11300, "24,000 – 120,000"],
    },
    annual: {
      usd: [2240, 3920, 6720, "14,000 – 70,000"],
      inr: ["1,57,000", "2,76,000", "4,71,000", "10L – 49L"],
      cad: [3000, 5300, 9100, "19,000 – 98,000"],
    },
  };

  const tips = [
    "Best for startups testing consistent social output.",
    "Ideal for brands who need regular monthly scaling.",
    "Designed for brands needing aggressive growth.",
    "Perfect for companies needing 360° custom support.",
  ];

  const val = price[billing][cur];
  const symbol = cur === "inr" ? "₹" : cur === "usd" ? "$" : "C$";

  return (
   <section className="py-20">
  <div className="max-w-7xl mx-auto px-6 text-center">

      {/* ======= NEW H1 (Updated as requested) ======= */}
      <h1 className="text-5xl md:text-5xl font-extrabold text-transparent bg-clip-text
    bg-gradient-to-r from-[#0E3D55] via-[#0F587A] to-[#11719A] leading-tight">
        Find Your Perfect Plan for 
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4BC1E8] to-[#0E6388]">
          {" "}Faster, Smarter Growth{" "}
        </span>
       
      </h1>

      {/* Billing Toggle */}
      <div className="flex justify-center gap-4 mt-10">
        {[
          ["quarter", "Quarterly"],
          ["semi", "Semi-annual 12% off"],
          ["annual", "Annual 30% off"],
        ].map(([key, label]) => (
          <button
            key={key}
            onClick={() => setBilling(key)}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all border
              ${billing === key
                ? "bg-gradient-to-r from-[#4BC1E8] to-[#0E6388] text-white shadow-md"
                : "bg-white text-[#0E3D55] border-[#B5D9E8]"
              }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Currency Toggle */}
      <div className="flex justify-center gap-8 mt-6 text-2xl">
        {["inr", "usd", "cad"].map((c) => (
          <span
            key={c}
            onClick={() => setCur(c)}
            className={`cursor-pointer transition font-semibold 
              ${cur === c ? "text-[#0E6388] scale-125" : "text-[#063349]/40"}
            `}
          >
            {c === "inr" ? "₹" : c === "usd" ? "$" : "C$"}
          </span>
        ))}
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto mt-14">

        {["40h/mo", "80h/mo", "160h/mo", "Custom"].map((hrs, i) => (
          <motion.div
            key={hrs}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="relative p-8 rounded-2xl shadow-[0_8px_25px_rgba(0,0,0,0.10)] text-white"
            style={{
              background: "linear-gradient(135deg, #4BC1E8, #0E6388)",
            }}
          >

            {/* ⭐ BEST VALUE RIBBON */}
            {billing === "annual" && i === 2 && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 
                bg-white text-[#0E6388] text-xs font-semibold border border-1 px-4 py-1 rounded-full shadow-md"
              >
                ⭐ Best Value
              </span>
            )}

            {/* Plan Name + Tooltip */}
            <div className="flex items-center justify-between mb-2">
              <p className="text-white/80 text-sm">
                {i === 0
                  ? "Get started plan"
                  : i === 1
                  ? "Boost plan"
                  : i === 2
                  ? "Full force plan"
                  : "All inclusive"}
              </p>

              {/* Tooltip Icon */}
              <div
                className="text-white text-lg cursor-pointer relative"
                onMouseEnter={() => setTooltip(i)}
                onMouseLeave={() => setTooltip(null)}
              >
                ℹ️

                {/* Animated Tooltip */}
                <AnimatePresence>
                  {tooltip === i && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-6 top-0 bg-white border border-[#B5D9E8] shadow-xl 
                                 p-3 rounded-xl text-xs text-[#063349] w-48 text-left z-[50]"
                    >
                      {tips[i]}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Hours */}
            <h1 className="text-4xl font-extrabold text-white">{hrs}</h1>

            {/* PRICE VALUE */}
            <AnimatePresence mode="wait">
              <motion.p
                key={val[i]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-xl mt-3 text-white"
              >
                {symbol}
                {val[i]}{" "}
                <span className="text-white/50 text-sm">/ Monthly</span>
              </motion.p>
            </AnimatePresence>

            {/* CTA Button */}
            <button
              className="mt-6 w-full py-3 rounded-full 
                         bg-white text-[#0E3D55] font-semibold hover:opacity-90 transition"
            >
              Book A Call
            </button>

          </motion.div>
        ))}
      </div>

      

      </div>
    </section>
  );
}
