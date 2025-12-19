export default function AboutHowWeWork() {
  return (
    <section className="relative bg-white text-[#063349] overflow-hidden pt-12">
      
   <div className="absolute top-10 left-0 w-64 h-64 bg-[#0E6388]/10 rounded-3xl blur-3xl"></div>
  <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#4EB3D8]/10 rounded-3xl blur-3xl"></div>

  <div className="max-w-7xl mx-auto">

    {/* HEADER */}
    <div className="text-center mb-20">
      <p className="text-[#0E6388] font-semibold tracking-wide">→ Our Process</p>

      <h2 className="text-3xl md:text-5xl font-extrabold text-[#063349]">
        How We <span className="text-[#0E6388]">Work</span>
      </h2>

      <p className="text-[#063349]/70 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
        From discovery to delivery, our step‑by‑step approach ensures your brand grows with confidence.
      </p>
    </div>

    {/* ========== SECTION 1 ========== */}
    <div className="grid md:grid-cols-2 gap-14 items-center mb-24">

      {/* IMAGE LEFT */}
      <div className="relative">
        <div className="absolute -top-6 -left-6 w-full h-full bg-[#0E6388]/20 rounded-3xl rotate-[-4deg]"></div>

        <div className="overflow-hidden rounded-3xl shadow-xl relative z-10">
          <img src="/work1.jpg" alt="Deep Brand Understanding" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* TEXT RIGHT */}
      <div className="relative">
        {/* Step badge */}
        <div className="absolute -top-10 left-0 bg-[#0E6388] text-white px-5 py-2 mb-2 rounded-full text-lg font-bold shadow-md">
          Step 01
        </div>

        <h3 className="text-3xl font-extrabold text-[#063349] mb-3 mt-3">
          Deep Brand Understanding
        </h3>
        <div className="w-20 h-1 bg-[#0E6388] rounded-full mb-6"></div>

        <p className="text-[#063349]/80 leading-relaxed mb-6 text-[17px]">
          We decode your brand’s voice, identity and audience to set a solid foundation for growth.
        </p>

        <ul className="space-y-3 text-[#063349]/90 text-[15px]">
          {[
            "12+ Hr Brand Study",
            "Competitor Mapping",
            "Brand Audit"
          ].map((p, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <span className="text-[#0E6388] text-xl">✔</span> {p}
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* ========== SECTION 2 ========== */}
    <div className="grid md:grid-cols-2 gap-14 items-center mb-24">

      {/* TEXT LEFT */}
      <div className="relative">
        <div className="absolute -top-10 left-0 bg-[#0E6388] mb-2 text-white px-5 py-2 rounded-full text-lg font-bold shadow-md">
          Step 02
        </div>

        <h3 className="text-3xl font-extrabold text-[#063349] mb-3 mt-3">
         Communication & Strategy Framework
        </h3>
        <div className="w-20 h-1 bg-[#0E6388] rounded-full mb-6"></div>

        <p className="text-[#063349]/80 leading-relaxed mb-6 text-[17px]">
          A structured roadmap that guides messaging, content pillars and execution.
        </p>

        <ul className="space-y-3 text-[#063349]/90 text-[15px]">
          {[
            "Content Strategy Map",
            "Channel Funnel Setup",
            "30-Day Execution Plan",
            "CTA + Conversion Path"
          ].map((p, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <span className="text-[#0E6388] text-xl">✔</span> {p}
            </li>
          ))}
        </ul>
      </div>

      {/* IMAGE RIGHT */}
      <div className="relative">
        <div className="absolute -top-6 -right-6 w-full h-full bg-[#4EB3D8]/20 rounded-3xl rotate-[4deg]"></div>

        <div className="overflow-hidden rounded-3xl shadow-xl relative z-10">
          <img src="/work2.jpg" alt="Strategy Blueprint" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>

    {/* ========== SECTION 3 ========== */}
    <div className="grid md:grid-cols-2 gap-14 items-center mb-24">

      {/* IMAGE LEFT */}
      <div className="relative">
        <div className="absolute -top-6 -left-6 w-full h-full bg-[#0E6388]/20 rounded-3xl rotate-[-4deg]"></div>

        <div className="overflow-hidden rounded-3xl shadow-xl relative z-10">
          <img src="/work3.jpg" alt="Creative Execution" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* TEXT RIGHT */}
      <div className="relative">
        <div className="absolute -top-10 left-0 bg-[#0E6388] mb-2 text-white px-5 py-2 rounded-full text-lg font-bold shadow-md">
          Step 03
        </div>

        <h3 className="text-3xl font-extrabold text-[#063349] mb-3 mt-3">
           Impactful Execution
        </h3>
        <div className="w-20 h-1 bg-[#0E6388] rounded-full mb-6"></div>

        <p className="text-[#063349]/80 leading-relaxed mb-6 text-[17px]">
          We transform strategy into high-performing content and storytelling.
        </p>

        <ul className="space-y-3 text-[#063349]/90 text-[15px]">
          {[
            "UGC + Reels + Graphics",
            "Brand Story Elements",
            "Design + Copywriting"
          ].map((p, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <span className="text-[#0E6388] text-xl">✔</span> {p}
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* ========== SECTION 4 ========== */}
    <div className="grid md:grid-cols-2 gap-14 items-center">

      {/* TEXT LEFT */}
      <div className="relative">
        <div className="absolute -top-10 left-0 bg-[#0E6388] mb-2 text-white px-5 py-2 rounded-full text-lg font-bold shadow-md">
          Step 04
        </div>

        <h3 className="text-3xl font-extrabold text-[#063349] mb-3 mt-3">
          Streamline & Scale Up
        </h3>
        <div className="w-20 h-1 bg-[#0E6388] rounded-full mb-6"></div>

        <p className="text-[#063349]/80 leading-relaxed mb-6 text-[17px]">
          We refine, improve and scale winning content for long-term growth.
        </p>

        <ul className="space-y-3 text-[#063349]/90 text-[15px]">
          {[
            "Weekly A/B Testing",
            "Performance Tracking",
            "Audience Insights",
            "Scale Growth Systems"
          ].map((p, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <span className="text-[#0E6388] text-xl">✔</span> {p}
            </li>
          ))}
        </ul>
      </div>

      {/* IMAGE RIGHT */}
      <div className="relative">
        <div className="absolute -top-6 -right-6 w-full h-full bg-[#4EB3D8]/20 rounded-3xl rotate-[4deg]"></div>

        <div className="overflow-hidden rounded-3xl shadow-xl relative z-10">
          <img src="/work4.jpg" alt="Optimize & Scale" className="w-full h-full object-cover" />
        </div>
      </div>

    </div>

  </div>
    </section>
  );
}
