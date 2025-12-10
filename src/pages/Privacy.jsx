import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

export default function Privacy() {
  const fade = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Bluenose Digital Marketing</title>
        <meta
          name="description"
          content="Learn how Bluenose Digital collects, protects, and uses your personal information with full data transparency."
        />
        <meta
          name="keywords"
          content="Bluenose Digital privacy policy, data privacy, marketing privacy terms, user data protection"
        />
        <meta property="og:title" content="Privacy Policy | Bluenose Digital" />
        <meta
          property="og:description"
          content="Understand how we store and protect your information safely and transparently."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bluenosedigital.com/privacy" />
        <meta property="og:image" content="/banner/privacy-og.jpg" />
        <link rel="canonical" href="https://bluenosedigital.com/privacy" />
      </Helmet>

      {/* PAGE WRAPPER */}
      <section className="pt-[110px] pb-16 md:pb-24 px-6 bg-white text-[#063349]">
        <div className="max-w-4xl mx-auto text-center">

          {/* EYEBROW */}
          <p className="text-[#0E6388] font-semibold tracking-wide mb-2">
            → Privacy Policy
          </p>

          {/* PAGE TITLE */}
          <motion.h1
            variants={fade}
            initial="hidden"
            animate="show"
            className="text-3xl md:text-5xl font-extrabold leading-[1.3]"
          >
            Privacy <span className="text-[#0E6388]">Policy</span>
          </motion.h1>

          {/* SUBTEXT */}
          <motion.p
            variants={fade}
            initial="hidden"
            animate="show"
            className="max-w-2xl mx-auto mt-4 text-lg md:text-xl text-[#063349]/80"
          >
            Learn how we collect, store, protect, and use your personal information.
          </motion.p>
        </div>

        {/* MAIN CONTENT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            max-w-4xl mx-auto 
            mt-14 p-10 md:p-14 
            bg-white rounded-3xl 
            shadow-[0_10px_40px_rgba(0,0,0,0.08)]
            border border-[#0E6388]/10
          "
        >
          {/* INTRO */}
          <h2 className="text-2xl font-bold mb-4 text-[#0E6388]">
            Welcome to Bluenose Digital Marketing
          </h2>

          <p className="text-[#063349]/80 mb-8 leading-relaxed">
            Your privacy is important to us. This policy explains how we handle and
            protect your personal information when you interact with our website or services.
          </p>

          {/* SECTIONS */}
          {[
            {
              title: "1. Information We Collect",
              content: (
                <>
                  <p className="text-[#063349]/80 mb-2">
                    We collect two types of data:
                  </p>
                  <ul className="list-disc ml-6 space-y-2 text-[#063349]/80">
                    <li><strong>Personal Data:</strong> Name, email, phone number, company info.</li>
                    <li><strong>Usage Data:</strong> Device type, IP address, pages visited, analytics behavior.</li>
                  </ul>
                </>
              ),
            },
            {
              title: "2. How We Use Your Information",
              content: (
                <ul className="list-disc ml-6 space-y-2 text-[#063349]/80">
                  <li>To respond to inquiries and communicate with you</li>
                  <li>To create proposals, marketing plans, and deliverables</li>
                  <li>To improve website performance and user experience</li>
                  <li>To send marketing updates (only with your consent)</li>
                </ul>
              ),
            },
            {
              title: "3. Data Protection & Storage",
              content: (
                <p className="text-[#063349]/80">
                  We use encryption, secure servers, and industry-standard measures to
                  protect your data. However, no online method is 100% secure.
                </p>
              ),
            },
            {
              title: "4. Third-Party Sharing",
              content: (
                <>
                  <p className="text-[#063349]/80 mb-2">
                    We do NOT sell your data. Information may be shared only with:
                  </p>
                  <ul className="list-disc ml-6 space-y-2 text-[#063349]/80">
                    <li>Analytics tools (e.g., Google Analytics)</li>
                    <li>Trusted contractors assisting with project delivery</li>
                    <li>Legal authorities if required by law</li>
                  </ul>
                </>
              ),
            },
            {
              title: "5. Your Rights",
              content: (
                <ul className="list-disc ml-6 space-y-2 text-[#063349]/80">
                  <li>Request a copy of your personal data</li>
                  <li>Request correction or deletion</li>
                  <li>Opt-out of marketing communication anytime</li>
                </ul>
              ),
            },
          ].map((sec, i) => (
            <div key={i} className="mb-10">
              <h3 className="text-xl font-semibold text-[#063349] mb-2">
                {sec.title}
              </h3>
              {sec.content}
            </div>
          ))}

          {/* CONTACT BOX */}
          <div className="mt-12 p-6 rounded-2xl bg-[#0E63881A] border border-[#0E6388]/20">
            <p className="text-[#063349] font-medium">Have questions about this policy?</p>

            <p className="mt-2 text-[#063349]/80">
              Email:{" "}
              <a href="mailto:sales@bluenosemarketing.com" className="text-[#0E6388] font-semibold">
                sales@bluenosemarketing.com
              </a>
            </p>

            <p className="text-[#063349]/80">
              Address:{" "}
              <span className="text-[#0E6388] font-semibold">
                19 Alma Crescent, Halifax, NS B3N 2C4, Canada
              </span>
            </p>

            <p className="text-[#063349]/80">
              Phone:{" "}
              <a href="tel:+19027189007" className="text-[#0E6388] font-semibold">
                +1 902-718-9007
              </a>
            </p>

            <p className="text-[#063349]/60 text-sm mt-4">
              Updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </motion.div>
      </section>
    </>
  );
}
