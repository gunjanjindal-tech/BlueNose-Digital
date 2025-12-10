import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

export default function Terms() {
  const fade = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <Helmet>
        <title>Terms & Conditions | Bluenose Digital Marketing</title>
        <meta
          name="description"
          content="Read Bluenose Digital's Terms & Conditions — payments, deliverables, usage policy, and intellectual property guidelines."
        />
        <meta
          name="keywords"
          content="terms and conditions Bluenose Digital, service agreement, digital marketing terms, usage policy"
        />
        <link rel="canonical" href="https://bluenosedigital.com/terms" />
      </Helmet>

      {/* PAGE WRAPPER */}
      <section className="pt-[110px] pb-16 md:pb-24 px-6 bg-white text-[#063349]">
        <div className="max-w-4xl mx-auto text-center">

          {/* EYEBROW */}
          <p className="text-[#0E6388] font-semibold tracking-wide mb-2">
            → Terms & Conditions
          </p>

          {/* PAGE TITLE */}
          <motion.h1
            variants={fade}
            initial="hidden"
            animate="show"
            className="text-3xl md:text-5xl font-extrabold leading-[1.3]"
          >
            Terms &{" "}
            <span className="text-[#0E6388]">Conditions</span>
          </motion.h1>

          {/* SUBTEXT */}
          <motion.p
            variants={fade}
            initial="hidden"
            animate="show"
            className="max-w-2xl mx-auto mt-4 text-lg md:text-xl text-[#063349]/80"
          >
            Please read these terms carefully before using our website or services.
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
            By accessing our website or using our services, you agree to the following
            Terms & Conditions. These terms ensure transparency and a smooth working
            relationship.
          </p>

          {/* SECTIONS */}
          {[
            {
              title: "1. Acceptance of Terms",
              text: "By using our website or services, you acknowledge that you understand and agree to these Terms & Conditions. If you do not agree, please discontinue use immediately.",
            },
            {
              title: "2. Use of Services",
              text: "Misuse of our services — including abusive behavior, unauthorized distribution, exploitation, or illegal activity — may result in immediate suspension or termination without refund.",
            },
            {
              title: "3. Payments & Deliverables",
              text: "Payment terms are defined in your proposal or invoice. Projects may pause for incomplete payments. Final deliverables are shared only after full payment is received.",
            },
            {
              title: "4. Intellectual Property",
              text: "All creative assets remain the property of Bluenose Digital Marketing unless otherwise agreed. After full payment, usage rights are transferred according to contract terms.",
            },
          ].map((sec, i) => (
            <div key={i} className="mb-10">
              <h3 className="text-xl font-semibold text-[#063349] mb-2">
                {sec.title}
              </h3>
              <p className="text-[#063349]/80 leading-relaxed">{sec.text}</p>
            </div>
          ))}

          {/* CONTACT BOX */}
          <div className="mt-12 p-6 rounded-2xl bg-[#0E63881A] border border-[#0E6388]/20">
            <p className="text-[#063349] font-medium">Questions about these terms?</p>

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
              <a href="tel:+190271890074" className="text-[#0E6388] font-semibold">
                +1 902-718-90074
              </a>
            </p>

            <p className="text-[#063349]/60 text-sm mt-4">
              Effective Date: 25/11/2025
            </p>
          </div>
        </motion.div>
      </section>
    </>
  );
}
