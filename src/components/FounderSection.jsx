import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";

export default function FounderSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className="max-w-6xl mx-auto px-6 md:px-10 py-10 relative"
    >
      {/* Gold Line - Same Style as CTA */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 h-32 w-[3px] bg-[var(--bn-gold)] rounded-full shadow-lg"></div>

      {/* Main Card */}
      <div
        className="
          bg-white/10 backdrop-blur-xl 
          border border-white/10 
          rounded-2xl 
          p-10 md:p-14 
          shadow-xl 
          flex flex-col md:flex-row 
          gap-10 md:gap-14
        "
      >
        {/* Founder Image */}
        <div className="w-40 h-40 rounded-full overflow-hidden bg-white shadow-lg flex-shrink-0">
          <img
            src="/assets/lakshay-bansal.jpg"
            alt="Lakshay Bansal"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Founder Details */}
        <div className="flex-1">
          <h3 className="text-3xl font-bold text-white">Lakshay Bansal</h3>
          <p className="text-[var(--bn-gold)] font-semibold mt-1 tracking-wide">
            CEO & FOUNDER
          </p>

          <p className="mt-4 text-white/80 leading-relaxed max-w-xl">
            Lakshay leads Bluenose with a sharp focus on strategic creative direction, 
            brand building, digital transformation, and modern data-driven marketing — 
            combining storytelling with measurable performance.
          </p>

          {/* Contact Row */}
          <div className="mt-6 flex flex-col md:flex-row md:items-center gap-4 text-white/85">
            <a href="tel:+19024485080" className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> +1 (902) 448-5080
            </a>
            <a
              href="mailto:marketingbluenose@gmail.com"
              className="flex items-center gap-2"
            >
              <Mail className="w-4 h-4" /> marketingbluenose@gmail.com
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
