import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet"

export default function Terms() {
  return (
    <>
      <Helmet>
        {/* PAGE TITLE */}
        <title>Terms & Conditions | Bluenose Digital Marketing</title>

        {/* META DESCRIPTION */}
        <meta 
          name="description" 
          content="Read Bluenose Digital's Terms & Conditions — service usage, payments, deliverables, intellectual property, compliance and usage guidelines." 
        />

        {/* SEO KEYWORDS */}
        <meta 
          name="keywords" 
          content="terms and conditions Bluenose Digital, service agreement, payment terms digital marketing, usage policy, deliverables policy, intellectual property rights"
        />

        {/* OPEN GRAPH / SOCIAL SHARING */}
        <meta property="og:title" content="Bluenose Digital – Terms & Conditions" />
        <meta 
          property="og:description" 
          content="Understand how our services operate — usage rules, deliverables, IP ownership and professional engagement terms."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bluenosedigital.com/terms" />
        <meta property="og:image" content="/banner/terms-og.jpg" />

        {/* CANONICAL URL */}
        <link rel="canonical" href="https://bluenosedigital.com/terms" />
      </Helmet>
      
    <section className="relative bg-black text-white pt-32 pb-20 overflow-hidden">

      {/* BACKGROUND GRADIENT GLOW */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, #0E6388 0%, transparent 60%), radial-gradient(circle at 80% 70%, #4BC1E8 0%, transparent 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10">

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl md:text-5xl font-extrabold"
        >
          Terms &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4BC1E8] to-[#0E6388]">
            Conditions
          </span>
        </motion.h1>

        <p className="text-center text-white/70 mt-4 max-w-2xl mx-auto">
          Please read these Terms & Conditions carefully before using our services.
        </p>

        {/* MAIN CARD */}
      <motion.div
  initial={{ opacity: 0, y: 25 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="
    mt-14 bg-white text-[#0E3D55]
    border border-[#0E3D55]/10 rounded-2xl 
    p-10 shadow-xl leading-relaxed
  "
>
  {/* All your existing content remains unchanged below */}


  <h2 className="text-2xl font-bold mb-6 text-[#0E3D55]">
    Welcome to Bluenose Digital Marketing
  </h2>

  <p className="text-[#0E3D55CC] mb-6">
    By accessing our website or using our services, you agree to the following terms. 
    These terms are created to ensure clarity, transparency, and a professional working 
    relationship.
  </p>

  {/* SECTION 1 */}
  <div className="mb-8">
    <h3 className="text-xl font-semibold mb-2 text-[#0E6388]">1. Acceptance of Terms</h3>
    <p className="text-[#0E3D55CC]">
      By engaging with our website or services, you acknowledge that you understand 
      and agree to these Terms & Conditions. If you do not agree, you should discontinue 
      use immediately.
    </p>
  </div>

  {/* SECTION 2 */}
  <div className="mb-8">
    <h3 className="text-xl font-semibold mb-2 text-[#0E6388]">2. Use of Services</h3>
    <p className="text-[#0E3D55CC]">
      Our services are provided according to the agreed project scope. Misuse of services—
      including abusive behavior, unauthorized distribution, exploitation, or illegal 
      activity—may result in immediate suspension or termination of the project without refund.
    </p>
  </div>

  {/* SECTION 3 */}
  <div className="mb-8">
    <h3 className="text-xl font-semibold mb-2 text-[#0E6388]">3. Payments & Deliverables</h3>
    <p className="text-[#0E3D55CC]">
      Payment terms are clearly outlined in your project proposal or invoice. Projects may 
      be paused for delayed or incomplete payments. Final deliverables are provided once 
      all outstanding payments are completed.
    </p>
  </div>

  {/* SECTION 4 */}
  <div className="mb-8">
    <h3 className="text-xl font-semibold mb-2 text-[#0E6388]">4. Intellectual Property</h3>
    <p className="text-[#0E3D55CC]">
      All creative assets, designs, and source files remain the property of Bluenose Digital 
      Marketing unless stated otherwise. Once full payment is made, usage rights transfer to 
      you as per the agreed contract terms.
    </p>
  </div>

  {/* FOOTER INFO */}
  <div className="mt-10 p-5 bg-[#0E63881A] rounded-xl border border-[#0E6388]/15">
    <p className="text-[#0E3D55]">Questions about these terms?</p>
    <p className="mt-2">📩 Email: <a href="mailto:sales@bluenosemarketing.com" className="text-[#4BC1E8]">sales@bluenosemarketing.com</a></p>
    <p>📞 Phone: <a href="tel:+916377701884" className="text-[#4BC1E8]">+1 902-718-90074</a></p>

    <p className="text-[#0E3D55AA] text-sm mt-4">Effective Date: 25/11/2025</p>
  </div>

</motion.div>

      </div>
    </section>
    </>
  );
}
