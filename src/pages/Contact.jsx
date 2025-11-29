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
    <section className="py-28 px-6 bg-white">

      {/* PAGE TITLE */}
      <motion.h1
        variants={fade}
        initial="hidden"
        animate="show"
        className="text-center text-4xl md:text-6xl font-extrabold text-[#0E3D55]"
      >
        Let’s{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4BC1E8] to-[#0E6388]">
          Connect
        </span>
      </motion.h1>

      {/* TAGLINE */}
      <p
        className="
          text-[#0A3A53]/80 
          text-lg md:text-2xl 
          font-medium 
          mt-4 
          mb-16
          max-w-3xl 
          mx-auto 
          text-center 
          leading-relaxed 
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
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2813.369413710725!2d-63.629865923425734!3d44.65520187909901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5a2241c86013c7%3A0x4d7b0dff78eaef65!2s19%20Alma%20Crescent%2C%20Halifax%2C%20NS%20B3N%202C4%2C%20Canada!5e0!3m2!1sen!2sca!4v1732705555555!5m2!1sen!2sca"
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
                <label className="font-semibold text-sm">Your Name</label>
                <input
                  type="text"
                  className="mt-2 w-full p-3 rounded-lg bg-[#F8FBFF] text-black border border-[#DDE8F3] focus:ring-2 focus:ring-[#4BC1E8]"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="font-semibold text-sm">Email Address</label>
                <input
                  type="email"
                  className="mt-2 w-full p-3 rounded-lg bg-[#F8FBFF] text-black border border-[#DDE8F3] focus:ring-2 focus:ring-[#4BC1E8]"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="font-semibold text-sm">Phone Number</label>
                <input
                  type="text"
                  className="mt-2 w-full p-3 rounded-lg bg-[#F8FBFF] text-black border border-[#DDE8F3] focus:ring-2 focus:ring-[#4BC1E8]"
                  placeholder="Enter your phone"
                />
              </div>

              <div>
                <label className="font-semibold text-sm">Message</label>
                <textarea
                  rows="5"
                  className="mt-2 w-full p-3 rounded-lg bg-[#F8FBFF] text-black border border-[#DDE8F3] focus:ring-2 focus:ring-[#4BC1E8]"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#4BC1E8] text-white font-semibold shadow hover:bg-[#0E6388] transition flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={18} />
              </button>

            </form>
          </div>

        </div>
      </motion.div>
      </section>
      </>
  );
}