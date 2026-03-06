// src/pages/Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Phone, Mail, MapPin, Send, Instagram, Facebook, Linkedin } from "lucide-react";
import { Helmet } from "react-helmet-async";


export default function Contact() {
  const fade = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // -----------------------------
  // FORM STATES
  // -----------------------------
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // -----------------------------
  // HANDLE INPUT CHANGE
  // -----------------------------
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // -----------------------------
  // VALIDATE REQUIRED FIELDS
  // -----------------------------
  const validate = () => {
    let err = {};

    if (!form.name.trim()) err.name = "Name is required";
    if (!form.email.trim()) err.email = "Email is required";
    if (!form.service.trim()) err.service = "Please select a service";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  // -----------------------------
  // HANDLE SUBMIT WITH EMAILJS
  // -----------------------------
const sendMessage = (e) => {
  e.preventDefault();
  if (!validate()) return;

  setLoading(true);

  const templateParams = {
    name: form.name,
    email: form.email,
    phone: form.phone || "Not provided",
    service: form.service,
    message: form.message || "No message added",
    time: new Date().toLocaleString(),
  };

  emailjs
    .send(
      "service_h8q2e1g",
      "template_efbydqb",
      templateParams,
      "I8XrZyy0UGP89_FWp"
    )
    .then(() => {
      setSuccess(
        "Thank you for contacting us. We appreciate your interest and will be in touch shortly."
      );

      setForm({ name: "", email: "", phone: "", service: "", message: "" });
      setErrors({});

      
      setTimeout(() => {
        setSuccess("");
      }, 5000);
    })
    .catch(() => {
      alert("We couldn’t send your message. Please try again shortly.");
    })
    .finally(() => setLoading(false));
};


  return (
    <>
    <Helmet>
  <title>Contact Bluenose Marketing | Work With Our Creative Marketing Team</title>

  <meta
    name="description"
    content="Get in touch with Bluenose Marketing for social media marketing, branding, influencer marketing, video editing, UGC and photography services."
  />

  <link
    rel="canonical"
    href="https://www.bluenosemarketing.ca/contact"
  />
</Helmet>


      <section className="pt-24 pb-10 md:pt-28 md:pb-20">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
  <div className="absolute top-13 left-0 flex w-max animate-brandSlide">
    {[...Array(2)].map((_, groupIndex) => (
      <div key={groupIndex} className="flex gap-24">
        {Array.from({ length: 6 }).map((_, i) => (
          <span
            key={`${groupIndex}-${i}`}
            className="
              text-[8rem]
              md:text-[10rem]
              font-extrabold
              uppercase
              tracking-widest
              text-[#0E6388]/5
              whitespace-nowrap
            "
          >
            Bluenose Marketing
          </span>
        ))}
      </div>
    ))}
  </div>
</div>
        <div className="max-w-7xl mx-auto px-6">
{/* EYEBROW */}
<p className="text-[#0E6388] font-semibold tracking-wide text-base md:text-lg text-center mb-2">
  → Contact Us
</p>

          {/* PAGE TITLE */}
         <motion.h1
           variants={fade}
           initial="hidden"
           animate="show"
           className="
             text-center 
             text-3xl md:text-5xl 
             font-extrabold 
             text-[#063349]
             leading-[1.3]
           "
         >
            Let’s <span className="text-[#0E6388]">Connect</span>
          </motion.h1>

        <p className="mt-4 mb-12  text-[#063349]/80  text-lg text-center leading-relaxed">
            Building brands that stand out, scale fast, and stay unforgettable.
          </p>

          {/* MAIN WRAPPER */}
          <motion.div
            variants={fade}
            initial="hidden"
            animate="show"
            className="
  grid md:grid-cols-2 gap-0 
  bg-white
  rounded-3xl 
  shadow-[0_20px_60px_rgba(14,99,136,0.15)]
  border border-[#DDE8F3]
  overflow-hidden
">


            {/* LEFT SECTION */}
<div className="
  p-12 
  bg-white
  border-r border-[#0E6388]/15

">

  <div>
    <h2 className="text-3xl font-extrabold text-[#063349] mb-4 leading-tight">
      Let’s Build Something Powerful
    </h2>

    <p className="text-[#0E3D55]/80 leading-relaxed mb-8 text-sm">
      Share your goals with us — our team will get back to you shortly.
    </p>

    {/* CONTACT DETAILS */}
    <div className="space-y-8 text-left">

      <a className="flex items-center gap-4 group">
  <span className="p-2 rounded-full bg-[#0E6388]/10 group-hover:bg-[#0E6388]/20 transition">
    <Mail className="w-5 h-5 text-[#0E6388]" />
  </span>
    <a href="mailto:info@bluenosemarketing.com" className="flex gap-3 items-center hover:text-[#0E6388] transition">
              
              info@bluenosemarketing.com
            </a>

</a>


      <a
        href="tel:+19027189007"
        className="flex items-center gap-4 hover:text-[#0E6388] transition"
                  >
  <span className="p-2 rounded-full bg-[#0E6388]/10 group-hover:bg-[#0E6388]/20 transition">
                    
                      <Phone className="w-5 h-5 text-[#0E6388]" />
                      </span>
        <span className="text-sm font-medium">
          +1 902-718-9007
        </span>
      </a>

                  <div className="flex items-start gap-4">
  <span className="p-2 rounded-full bg-[#0E6388]/10 group-hover:bg-[#0E6388]/20 transition">
                    
                      <MapPin className="w-5 h-5 text-[#0E6388]" />
                      </span>
        <span className="text-sm leading-relaxed">
          19 Alma Crescent, Halifax,
          Nova Scotia, Canada
        </span>
      </div>
    </div>

    {/* SOCIAL */}
    <div className="flex gap-4 mt-10">
      <a href="https://www.instagram.com/bluenose_marketing?igsh=MTg5ZjMxdHdyczRtcA%3D%3D" target="_blank" rel="noreferrer">
        <Instagram className="w-6 h-6 text-[#0E3D55] hover:text-[#0E6388] transition" />
      </a>
      <a href="https://www.linkedin.com/company/bluenose-marketing-digital-marketing-agency/" target="_blank" rel="noreferrer">
        <Linkedin className="w-6 h-6 text-[#0E3D55] hover:text-[#0E6388] transition" />
      </a>
    </div>

    {/* TRUST NOTE */}
    <p className="text-xs text-[#0E3D55]/60 mt-6">
      Trusted by brands across Canada & beyond.
    </p>
  </div>
</div>


            {/* RIGHT CONTACT FORM */}
            <div className="p-10 bg-white">
              <h2 className="text-3xl font-bold text-[#0A3346] mb-6">Send Us a Message</h2>

          <form className="grid grid-cols-1 gap-6" onSubmit={sendMessage}>

  {/* NAME */}
  <div>
    <label className="font-semibold text-sm">Your Name *</label>
    <input
      name="name"
      type="text"
      value={form.name}
      onChange={handleChange}
      className="mt-2 w-full p-3 rounded-lg bg-white border"
      placeholder="Enter your name"
    />
    {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
  </div>

  {/* EMAIL */}
  <div>
    <label className="font-semibold text-sm">Email Address *</label>
    <input
      name="email"
      type="email"
      value={form.email}
      onChange={handleChange}
      className="mt-2 w-full p-3 rounded-lg bg-white border"
      placeholder="Enter your email"
    />
    {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
  </div>

  {/* PHONE */}
  <div>
    <label className="font-semibold text-sm">Phone Number</label>
    <input
      name="phone"
      type="text"
      value={form.phone}
      onChange={handleChange}
      className="mt-2 w-full p-3 rounded-lg bg-white border"
      placeholder="Enter your phone"
    />
  </div>

  {/* SERVICE */}
  <div>
    <label className="font-semibold text-sm">Which Service You Need? *</label>
    <select
      name="service"
      value={form.service}
      onChange={handleChange}
      className="mt-2 w-full p-3 rounded-lg bg-white border"
    >
      <option value="">Select a service</option>
      <option value="Social Media Marketing">Social Media Marketing</option>
      <option value="Branding">Branding</option>
      <option value="Influencer Marketing">Influencer Marketing</option>
      <option value="Video Editing">Video Editing</option>
      <option value="UGC Content">UGC Content</option>
      <option value="Photography">Photography</option>
    </select>
    {errors.service && <p className="text-red-500 text-xs">{errors.service}</p>}
  </div>

  {/* MESSAGE */}
  <div>
    <label className="font-semibold text-sm">Message</label>
    <textarea
      name="message"
      rows="5"
      value={form.message}
      onChange={handleChange}
      className="mt-2 w-full p-3 rounded-lg bg-white border"
      placeholder="Write your message..."
    ></textarea>
  </div>

  {/* SUBMIT BUTTON */}
<button
  type="submit"
  className="w-full py-3 rounded-xl bg-[#0E6388] text-white font-semibold shadow flex items-center justify-center gap-2"
>
  {loading ? "Sending..." : "Send Message"}
  <Send size={18} />
</button>


  {/* SUCCESS MESSAGE - NOW AT THE BOTTOM */}
  {success && (
    <p className=" text-green-700 p-3 rounded-lg text-sm mt-2 text-center">
      {success}
    </p>
  )}

</form>

            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}




