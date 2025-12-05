// src/pages/Contact.jsx
import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Instagram, Facebook, Linkedin } from "lucide-react";
import { Helmet } from "react-helmet";

export default function Contact() {
  const fade = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
     <Helmet>
  <title>Contact Bluenose Digital | Work With Our Creative Marketing Team</title>
  <meta 
    name="description" 
    content="Contact Bluenose Digital for SMM, branding, UGC, influencer marketing, video ads & growth-focused campaigns. Let’s grow your business with strategy + execution."
  />

  <meta name="keywords" content="
    contact marketing agency,
    smm contact form,
    branding consultation,
    influencer marketing agency contact,
    video ads inquiries,
    digital marketing support
  " />

  {/* OG PREVIEW */}
  <meta property="og:title" content="Contact Bluenose Digital | Let's Build Your Brand" />
  <meta property="og:description" content="Hire us for Social Media Marketing, UGC Content, Branding & Conversion focused Ad Campaigns. Submit your inquiry today." />
  <meta property="og:image" content="/banner/contact-og.jpg" />
  <meta property="og:url" content="https://bluenosedigital.com/contact" />
  <meta property="og:type" content="website" />

  {/* STRUCTURED SCHEMA DATA */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Bluenose Digital Contact Page",
      "url": "https://bluenosedigital.com/contact",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Business Inquiries",
        "email": "sales@bluenosemarketing.com",
        "telephone": "+1 902-718-9007",
        "availableLanguage": ["English"]
      }
    })}
  </script>
</Helmet>
     <section className="py-20">
  <div className="max-w-7xl mx-auto px-6 text-center">

      {/* PAGE TITLE */}
      <motion.h1
        variants={fade}
        initial="hidden"
        animate="show"
        className="text-5xl md:text-5xl font-extrabold text-transparent bg-clip-text
    bg-gradient-to-r from-[#0E3D55] via-[#0F587A] to-[#11719A] leading-tight"
      >
        Let’s{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4BC1E8] to-[#0E6388]">
          Connect
        </span>
      </motion.h1>

      {/* TAGLINE */}
      <p
        className="
         text-center max-w-3xl mx-auto mt-4 mb-15 text-transparent bg-clip-text
    bg-gradient-to-r from-[#0E3D55] via-[#0F587A] to-[#11719A] text-lg leading-relaxed
        "
      >
        Building brands that stand out, scale fast, and stay unforgettable.
      </p>

      {/* ========== MERGED MAIN CONTAINER ========== */}
      <motion.div
        variants={fade}
        initial="hidden"
        whileInView="show"
        className="
          max-w-6xl mx-auto 
          bg-[#F5F9FF] 
          p-10 
          rounded-2xl 
          shadow-xl 
          border border-[#DDE8F3]
        "
      >
        <div className="grid md:grid-cols-2 gap-0">

          {/* LEFT BOX */}
          <div
            className="
              bg-white 
              p-8 
              rounded-l-xl 
              border border-[#DDE8F3] 
              shadow-sm
              md:border-r-0
            "
          >
            <h2 className="text-2xl font-bold text-[#0E3D55] mb-4">
              Get in Touch
            </h2>

            <p className="text-[#0E3D55]/80 leading-relaxed mb-10 text-sm">
              Have a project in mind? Let's bring your brand to life with powerful strategy,
              stunning visuals, and seamless execution.
            </p>

            <div className="space-y-6">

              {/* EMAIL */}
              <a 
                href="mailto:sales@bluenosemarketing.com" 
                className="flex items-center gap-4 group"
              >
                <Mail className="w-6 h-6 text-[#0E3D55] group-hover:scale-110 transition" />
                <span className="text-[#0E3D55]/90 group-hover:text-[#0E3D55] transition text-sm">
                  sales@bluenosemarketing.com
                </span>
              </a>

              {/* PHONE */}
              <a 
                href="tel:+19027189007" 
                className="flex items-center gap-4 group"
              >
                <Phone className="w-6 h-6 text-[#0E3D55] group-hover:scale-110 transition" />
                <span className="text-[#0E3D55]/90 group-hover:text-[#0E3D55] transition text-sm">
                  +1 902-718-9007
                </span>
              </a>

              {/* ADDRESS */}
              <a 
                href="https://maps.google.com/?q=19 Alma Crescent, Halifax, NS B3N 2C4, Canada" 
                target="_blank"
                className="flex items-center gap-4 group"
              >
                <MapPin className="w-6 h-6 text-[#0E3D55] group-hover:scale-110 transition" />
                <span className="text-[#0E3D55]/90 group-hover:text-[#0E3D55] transition text-sm">
                  19 Alma Crescent, Halifax, NS B3N 2C4, Canada
                </span>
              </a>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-4 mt-10">
              <a href="#" className="p-2 rounded-lg bg-[#EEF4FF] hover:bg-[#E0EDFF] transition">
                <Instagram className="w-5 h-5 text-[#0E3D55]" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-[#EEF4FF] hover:bg-[#E0EDFF] transition">
                <Facebook className="w-5 h-5 text-[#0E3D55]" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-[#EEF4FF] hover:bg-[#E0EDFF] transition">
                <Linkedin className="w-5 h-5 text-[#0E3D55]" />
              </a>
            </div>

            {/* CLEAN MAP (NO LABELS, NO "5") */}
            <div className="mt-10 rounded-xl overflow-hidden shadow-md border border-[#DDE8F3] h-[240px]">
  <iframe
    title="Office Location"
    src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d45405.76519008662!2d-63.6516953!3d44.6612053!3m2!1i1024!2i768!4f13.1!2m1!1sbluenose%20marketing%20halifax%20canada!5e0!3m2!1sen!2sin!4v1764141332327!5m2!1sen!2sin"
    className="w-full h-full border-0"
    loading="lazy"
    allowFullScreen
  ></iframe>
</div>


          </div>

          {/* RIGHT BOX */}
          <div
            className="
              bg-white 
              p-8 
              rounded-r-xl 
              border border-[#DDE8F3] 
              shadow-sm
              md:border-l-0
            "
          >
            <h2 className="text-2xl font-bold text-[#0A3346] mb-6">
              Send Us a Message
            </h2>

            <form className="grid grid-cols-1 gap-6">

              <div>
                <label className="font-semibold text-sm flex justify-start">Your Name</label>
                <input
                  type="text"
                  className="mt-2 w-full p-3 rounded-lg bg-[#F8FBFF] text-black border border-[#DDE8F3] focus:ring-2 focus:ring-[#4BC1E8]"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="font-semibold text-sm flex justify-start">Email Address</label>
                <input
                  type="email"
                  className="mt-2 w-full p-3 rounded-lg bg-[#F8FBFF] text-black border border-[#DDE8F3] focus:ring-2 focus:ring-[#4BC1E8]"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="font-semibold text-sm flex justify-start">Phone Number</label>
                <input
                  type="text"
                  className="mt-2 w-full p-3 rounded-lg bg-[#F8FBFF] text-black border border-[#DDE8F3] focus:ring-2 focus:ring-[#4BC1E8]"
                  placeholder="Enter your phone"
                />
              </div>

              <div>
                <label className="font-semibold text-sm flex justify-start">Message</label>
                <textarea
                  rows="5"
                  className="mt-2 w-full p-3 rounded-lg bg-[#F8FBFF] text-black border border-[#DDE8F3] focus:ring-2 focus:ring-[#4BC1E8]"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl  bg-gradient-to-r from-[#4BC1E8] to-[#0E6388] text-white font-semibold shadow hover:bg-[#0E6388] transition flex items-center justify-center gap-2 cursor-pointer"
              >
                Send Message
                <Send size={18} />
              </button>

            </form>
          </div>

        </div>
      </motion.div>
        </div>
     
      </section>
      </>
  );
}