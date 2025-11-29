import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";  

export default function Privacy() {
  return (
    <>
      <Helmet>
        {/* META TITLE */}
        <title>Privacy Policy | Bluenose Digital Marketing</title>

        {/* META DESCRIPTION */}
        <meta 
          name="description" 
          content="Read Bluenose Digital's privacy policy – how we collect, protect, store and use user data. We maintain confidentiality, transparency and secure digital processing." 
        />

        {/* KEYWORDS */}
        <meta 
          name="keywords" 
          content="Bluenose Digital privacy policy, data policy, user data protection, information handling, marketing policy, website privacy agreement, digital data terms"
        />

        {/* OPEN GRAPH FOR GOOGLE & PREVIEWS */}
        <meta property="og:title" content="Privacy Policy | Bluenose Digital" />
        <meta 
          property="og:description" 
          content="How we handle, store and protect your personal information with transparency & compliance." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bluenosedigital.com/privacy" />
        <meta property="og:image" content="/banner/privacy-og.jpg" />

        {/* CANONICAL URL */}
        <link rel="canonical" href="https://bluenosedigital.com/privacy" />
      </Helmet>
    <section className="relative bg-black text-white pt-32 pb-20 overflow-hidden">

      {/* BACKGROUND GRADIENT MATCHING TERMS */}
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
          Privacy{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4BC1E8] to-[#0E6388]">
            Policy
          </span>
        </motion.h1>

        <p className="text-center text-white/70 mt-4 max-w-2xl mx-auto leading-relaxed">
          Learn how we collect, protect, and handle your personal information when you interact with Bluenose Digital.
        </p>

        
        {/* MAIN CARD — Styled exactly like T&C */}
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

        {/* SECTION 1 */}
          <div className="mb-8">
             <h2 className="text-2xl font-bold mb-6 text-[#0E3D55]">
    Welcome to Bluenose Digital Marketing
  </h2>
          <h2 className="text-xl font-semibold mb-2 text-[#0E6388]">1. Information We Collect</h2>
          <p className="text-[#0E3D55CC] mb-2">We collect two types of data:</p>
          <ul className="list-disc ml-6 space-y-2 text-[#0E3D55CC]">
            <li><strong>Personal Data:</strong> Name, email, phone number, company details, project information.</li>
            <li><strong>Usage Data:</strong> IP, device details, browser type, visited pages, analytics behavior.</li>
          </ul>
        </div>

        {/* SECTION 2 */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2 text-[#0E6388]">2. How We Use Your Data</h3>
          <ul className="list-disc ml-6 space-y-2 text-[#0E3D55CC]">
            <li>Respond to inquiries & service requests</li>
            <li>Prepare proposals, campaigns & deliverables</li>
            <li>Improve website UX using analytics</li>
            <li>Send updates or marketing — only if you consent</li>
          </ul>
        </div>

        {/* SECTION 3 */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2 text-[#0E6388]">3. Data Storage & Protection</h3>
          <p className="text-[#0E3D55CC]">
            Your data is protected using security measures & encrypted systems. However, no internet method is 100% secure.
          </p>
        </div>

        {/* SECTION 4 */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2 text-[#0E6388]">4. Third-Party Sharing Policy</h3>
          <p className="text-[#0E3D55CC] mb-2">We never sell personal information. Data may be shared only with:</p>
          <ul className="list-disc ml-6 space-y-2 text-[#0E3D55CC]">
            <li>Analytics tools like Google Analytics</li>
            <li>Trusted partners involved in execution</li>
            <li>Legal authorities when required by law</li>
          </ul>
        </div>

        {/* SECTION 5 */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2 text-[#0E6388]">5. Your Rights</h3>
          <ul className="list-disc ml-6 space-y-2 text-[#0E3D55CC]">
            <li>Request access to your stored data</li>
            <li>Request modification or removal</li>
            <li>Opt-out of emails or data usage anytime</li>
          </ul>
        </div>


        {/* FOOTER */}
        <div className="mt-10 p-5 bg-[#0E63881A] rounded-xl border border-[#0E6388]/15">
          <p className="text-[#0E3D55] font-semibold">Questions About This Policy?</p>
          <p className="mt-2">📩 Email: <a href="mailto:sales@bluenosemarketing.com" className="text-[#4BC1E8]">sales@bluenosemarketing.com

19 Alma Crescent, Halifax, NS B3N 2C4, Canada

</a></p>
          <p>📞 Phone: <a href="tel:+916377701884" className="text-[#4BC1E8]">+1 902-718-9007</a></p>

          <p className="text-[#0E3D55AA] text-sm mt-4">
            Updated: {new Date().toLocaleDateString()}
          </p>
        </div>

      </motion.div>
      </div>
      </section>
      </>
  );
}
