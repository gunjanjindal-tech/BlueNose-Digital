// src/components/CTASection.jsx
import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Star, Zap } from "lucide-react";

/**
 * NOTE: this uses the uploaded brochure image path from the environment.
 * The local file path (as requested) is:
 * /mnt/data/A_high-resolution_digital_photograph_displays_an_o.png
 *
 * Your build system will convert the path appropriately for the public app.
 */
const BROCHURE_SRC = "/mnt/data/A_high-resolution_digital_photograph_displays_an_o.png";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Wave background (two-tone ribbon) */}
      <svg
        className="absolute left-0 right-0 bottom-0 w-full -z-10"
        viewBox="0 0 1440 240"
        preserveAspectRatio="none"
        aria-hidden
      >
        {/* lighter wave */}
        <path
          d="M0,160 C200,220 400,120 720,150 C1040,180 1240,80 1440,120 L1440,240 L0,240 Z"
          fill="#62C9E6"
          opacity="1"
        />
        {/* darker wave */}
        <path
          d="M0,180 C200,220 400,140 720,160 C1040,180 1240,100 1440,120 L1440,240 L0,240 Z"
          fill="#0E5E7D"
          opacity="1"
        />
      </svg>

      {/* floating icons (decorative) */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="pointer-events-none"
      >
        {/* icon top-left */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute left-12 top-8 opacity-20"
        >
          
        </motion.div>

        {/* icon mid-right */}
        <motion.div
          animate={{ y: [-6, 6, -6] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="absolute right-20 top-32 opacity-18"
        >
        
        </motion.div>

        {/* icon left-bottom */}
        <motion.div
          animate={{ y: [0, -8, 0], rotate: [0, 6, -6, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute left-8 bottom-40 opacity-14"
        >
         
        </motion.div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-6">
        {/* CTA card wrapper with animated gradient border */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* left decorative gold line */}
          <div className="absolute -left-6 top-6 h-[180px] w-1 bg-gradient-to-b from-[rgba(244,201,90,1)] to-[rgba(244,201,90,0.6)] rounded"></div>

          {/* gradient animated border (uses pseudo-like wrapper) */}
          <div className="rounded-2xl p-1"
            style={{
              background:
                "linear-gradient(90deg, rgba(244,201,90,0.0), rgba(244,201,90,0.18), rgba(244,201,90,0.0))",
              animation: "glow 4s linear infinite",
            }}
          >
            {/* Inner card */}
            <div className="bg-[var(--bn-primary)]/90 rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
              <div className="md:flex md:items-center md:gap-8">
                {/* left: brochure / avatar */}
                <div className="flex-shrink-0 mr-6">
                  <motion.img
                    src={BROCHURE_SRC}
                    alt="Brand Brochure"
                    initial={{ scale: 0.96, rotate: -6, opacity: 0 }}
                    whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                    whileHover={{ scale: 1.03, rotate: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-[96px] h-[96px] md:w-[120px] md:h-[120px] rounded-lg object-cover shadow-lg"
                  />
                </div>

                {/* right: content */}
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">Ready to Grow With Bluenose?</h3>
                  <p className="mt-3 text-white/80 max-w-2xl">
                    Let’s discuss your goals and craft a strategy that truly elevates your
                    brand in the digital space — strategy, creative and performance blended.
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-3 px-5 py-3 rounded-md bg-[var(--bn-gold)] text-[var(--bn-primary)] font-semibold shadow hover:translate-y-[-2px] transition-transform"
                    >
                      Contact Us
                    </a>

                    <a
                      href="/catalogue.pdf"
                      download
                      className="inline-flex items-center gap-3 px-5 py-3 rounded-md border border-white/20 text-white/90 hover:bg-white/5 transition"
                    >
                      Download E-Catalogue
                    </a>
                  </div>
                </div>
              </div>

              {/* subtle inner ornament - small wave */}
              <svg className="absolute right-6 bottom-6 w-40 opacity-10 pointer-events-none" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 40 C30 10 70 10 100 40 C130 70 170 70 200 40" stroke="#F4C95A" strokeWidth="2" strokeOpacity="0.25"/>
              </svg>
            </div>
          </div>
        </motion.div>
      </div>

      {/* component-scoped styles (keyframes) */}
      <style>{`
        @keyframes glow {
          0% { filter: hue-rotate(0deg) saturate(1); opacity: .9;}
          50% { filter: hue-rotate(12deg) saturate(1.15); opacity: 1;}
          100% { filter: hue-rotate(0deg) saturate(1); opacity: .9;}
        }

        /* rotating dashed ring - (optional, if you still want ring on circles elsewhere) */
        @keyframes ring-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* small helpers for ring animation – used elsewhere if you add className 'ring-rotate' */
        .ring-rotate {
          animation: ring-rotate 8s linear infinite;
        }
      `}</style>
    </section>
  );
}
