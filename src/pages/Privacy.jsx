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
  {/* BASIC SEO */}
  <title>Privacy Policy | Bluenose Marketing</title>

  <meta
    name="description"
    content="Learn how Bluenose Marketing collects, uses, stores, and protects your personal information with full transparency and compliance."
  />

  <meta
    name="keywords"
    content="Bluenose Marketing privacy policy, data protection, user privacy, marketing data policy"
  />

  {/* CANONICAL */}
  <link
    rel="canonical"
    href="https://www.bluenosemarketing.ca/privacy"
  />

  {/* OPEN GRAPH */}
  <meta property="og:title" content="Privacy Policy | Bluenose Marketing" />
  <meta
    property="og:description"
    content="Read Bluenose Marketing’s privacy policy to understand how we protect your personal data and ensure transparency."
  />
  <meta property="og:url" content="https://www.bluenosemarketing.ca/privacy" />
  <meta property="og:type" content="website" />

  {/* TWITTER */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Privacy Policy | Bluenose Marketing"
  />
  <meta
    name="twitter:description"
    content="Understand how Bluenose Marketing safeguards your personal information."
  />
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
            className="max-w-2xl mx-auto mt-4 text-lg md:text-xl text-[#063349]"
          >
            Learn how we collect, store, protect, and use your personal information.
          </motion.p>
        </div>

        {/* MAIN BLUE CONTENT CONTAINER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mt-14 p-10 md:p-14 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
          style={{ background: "rgb(17, 117, 160)" }}
        >
          {/* INTRO */}
          <h2 className="text-3xl font-bold mb-4 text-[#063349]">
            Welcome to <span className="text-white">Bluenose Digital Marketing</span>
          </h2>

          <p className="text-white/90 mb-8 leading-relaxed">
            Your privacy is important to us. This Privacy Policy explains how we
            collect, use, store, and protect your personal information when you
            interact with our website or services.
          </p>

          {/* SECTIONS */}
          {[
            {
              title: "1. Information We Collect",
              content: (
                <>
                  <p className="text-white mb-2">
                    We collect the following types of information:
                  </p>
                  <ul className="list-disc ml-6 space-y-2 text-white">
                    <li>
                      <strong>Personal Information:</strong> Name, email address,
                      phone number, business details.
                    </li>
                    <li>
                      <strong>Usage Data:</strong> IP address, browser type, device
                      information, pages visited.
                    </li>
                  </ul>
                </>
              ),
            },
            {
              title: "2. How We Use Your Information",
              content: (
                <ul className="list-disc ml-6 space-y-2 text-white">
                  <li>Respond to inquiries and communicate with you</li>
                  <li>Provide and improve our services</li>
                  <li>Create proposals, strategies, and deliverables</li>
                  <li>Send updates or marketing communication (with consent)</li>
                </ul>
              ),
            },
            {
              title: "3. Data Protection & Security",
              content: (
                <p className="text-white">
                  We implement industry-standard security measures to protect your
                  data. While we strive to safeguard your information, no method of
                  transmission over the internet is completely secure.
                </p>
              ),
            },
            {
              title: "4. Third-Party Sharing",
              content: (
                <>
                  <p className="text-white mb-2">
                    We do not sell your personal data. Information may be shared only
                    with:
                  </p>
                  <ul className="list-disc ml-6 space-y-2 text-white">
                    <li>Analytics providers (e.g., Google Analytics)</li>
                    <li>Trusted partners assisting with service delivery</li>
                    <li>Legal authorities if required by law</li>
                  </ul>
                </>
              ),
            },
            {
              title: "5. Your Rights",
              content: (
                <ul className="list-disc ml-6 space-y-2 text-white">
                  <li>Request access to your personal data</li>
                  <li>Request correction or deletion</li>
                  <li>Withdraw consent for marketing communication</li>
                </ul>
              ),
            },
          ].map((sec, i) => (
            <div key={i} className="mb-10">
              <h3 className="text-xl font-semibold text-white mb-2">
                {sec.title}
              </h3>
              {sec.content}
            </div>
          ))}

          {/* CONTACT BOX */}
          <div className="mt-12 p-6 rounded-2xl bg-[#0E63881A] border border-[#0E6388]/20">
            <p className="text-white font-medium">
              Questions about this Privacy Policy?
            </p>

            <p className="mt-2 text-white">
              Email:{" "}
              <a
                href="mailto:sales@bluenosemarketing.com"
                className="text-white font-semibold"
              >
                sales@bluenosemarketing.com
              </a>
            </p>

            <p className="text-white">
              Address:{" "}
              <span className="text-white font-semibold">
                19 Alma Crescent, Halifax, NS B3N 2C4, Canada
              </span>
            </p>

            <p className="text-white">
              Phone:{" "}
              <a href="tel:+19027189007" className="text-white font-semibold">
                +1 902-718-9007
              </a>
            </p>

            <p className="text-white/70 text-sm mt-4">
              Updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </motion.div>
      </section>
    </>
  );
}
