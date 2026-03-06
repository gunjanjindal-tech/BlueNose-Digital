export default function AboutHowWeWork() {
  return (
    <section className="relative bg-white text-[#063349] overflow-hidden pt-12 p-4">
      
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

    {/* ================= SECTION 1 ================= */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center mb-16 md:mb-24">

      {/* IMAGE */}
      <div className="relative">
        <div className="absolute -top-4 -left-1 md:-top-6 md:-left-6 w-full h-full bg-[#0E6388] rounded-3xl rotate-[-4deg]"></div>

        <div className="relative z-10 overflow-hidden rounded-3xl shadow-xl">
          <img
            src="/work1.jpg"
            alt="Deep Brand Understanding"
            className="w-full h-[220px] sm:h-[300px] md:h-full object-cover"
          />
        </div>
      </div>

      {/* TEXT */}
      <div className="relative">
        <div className="inline-block md:absolute md:-top-10 left-0 bg-[#0E6388] text-white px-4 py-1.5 rounded-full text-sm md:text-lg font-bold shadow-md mb-4">
          Step 01
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0E6388] mb-3">
          Deep Brand Understanding
        </h3>

        <div className="w-16 sm:w-20 h-1 bg-[#0E6388] rounded-full mb-5"></div>

        <p className="text-[#063349]/80 leading-relaxed mb-6 text-sm sm:text-[17px]">
          We decode your brand’s voice, identity and audience to set a solid foundation for growth.
        </p>

        <ul className="space-y-3 text-[#063349]/90 text-sm sm:text-[15px]">
          {["12+ Hr Brand Study", "Competitor Mapping", "Brand Audit"].map((item, i) => (
            <li key={i} className="flex items-center gap-3">
              <span className="text-[#0E6388] text-xl">·</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* ================= SECTION 2 ================= */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center mb-16 md:mb-24">

      {/* TEXT */}
      <div className="relative order-2 md:order-1">
        <div className="inline-block md:absolute md:-top-10 left-0 bg-[#0E6388] text-white px-4 py-1.5 rounded-full text-sm md:text-lg font-bold shadow-md mb-4">
          Step 02
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0E6388] mb-3">
          Communication & Strategy Framework

        </h3>

        <div className="w-16 sm:w-20 h-1 bg-[#0E6388] rounded-full mb-5"></div>

        <p className="text-[#063349]/80 leading-relaxed mb-6 text-sm sm:text-[17px]">
          A structured roadmap that guides messaging, content pillars and execution.
        </p>

        <ul className="space-y-3 text-[#063349]/90 text-sm sm:text-[15px]">
          {[
            "Content Strategy Map",
            "Channel Funnel Setup",
            "30-Day Execution Plan",
            "CTA + Conversion Path",
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-3">
              <span className="text-[#0E6388] text-xl">·</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* IMAGE */}
      <div className="relative order-1 md:order-2">
        <div className="absolute -top-4 -right-1 md:-top-6 md:-right-6 w-full h-full bg-[#0E6388] rounded-3xl rotate-[4deg]"></div>

        <div className="relative z-10 overflow-hidden rounded-3xl shadow-xl">
          <img
            src="/work2.jpg"
            alt="Strategy Blueprint"
            className="w-full h-[220px] sm:h-[300px] md:h-full object-cover"
          />
        </div>
      </div>
    </div>

    {/* ================= SECTION 3 ================= */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center mb-16 md:mb-24">

      {/* IMAGE */}
      <div className="relative">
        <div className="absolute -top-4 -left-1 md:-top-6 md:-left-6 w-full h-full bg-[#0E6388] rounded-3xl rotate-[-4deg]"></div>

        <div className="relative z-10 overflow-hidden rounded-3xl shadow-xl">
          <img
            src="/work3.jpg"
            alt="Creative Execution"
            className="w-full h-[220px] sm:h-[300px] md:h-full object-cover"
          />
        </div>
      </div>

      {/* TEXT */}
      <div className="relative">
        <div className="inline-block md:absolute md:-top-10 left-0 bg-[#0E6388] text-white px-4 py-1.5 rounded-full text-sm md:text-lg font-bold shadow-md mb-4">
          Step 03
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0E6388] mb-3">
          Impactful Execution

        </h3>

        <div className="w-16 sm:w-20 h-1 bg-[#0E6388] rounded-full mb-5"></div>

        <p className="text-[#063349]/80 leading-relaxed mb-6 text-sm sm:text-[17px]">
          We transform strategy into high-performing content and storytelling.
        </p>

        <ul className="space-y-3 text-[#063349]/90 text-sm sm:text-[15px]">
          {["UGC + Reels + Graphics", "Brand Story Elements", "Design + Copywriting"].map(
            (item, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="text-[#0E6388] text-xl">·</span>
                {item}
              </li>
            )
          )}
        </ul>
      </div>
    </div>

    {/* ================= SECTION 4 ================= */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">

      {/* TEXT */}
      <div className="relative order-2 md:order-1">
        <div className="inline-block md:absolute md:-top-10 left-0 bg-[#0E6388] text-white px-4 py-1.5 rounded-full text-sm md:text-lg font-bold shadow-md mb-4">
          Step 04
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0E6388] mb-3">
          Streamline & Scale Up

        </h3>

        <div className="w-16 sm:w-20 h-1 bg-[#0E6388] rounded-full mb-5"></div>

        <p className="text-[#063349]/80 leading-relaxed mb-6 text-sm sm:text-[17px]">
          We refine, improve and scale winning content for long-term growth.
        </p>

        <ul className="space-y-3 text-[#063349]/90 text-sm sm:text-[15px]">
          {[
            "Weekly A/B Testing",
            "Performance Tracking",
            "Audience Insights",
            "Scale Growth Systems",
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-3">
              <span className="text-[#0E6388] text-xl">·</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* IMAGE */}
      <div className="relative order-1 md:order-2">
        <div className="absolute -top-4 -right-1 md:-top-6 md:-right-6 w-full h-full bg-[#0E6388] rounded-3xl rotate-[4deg]"></div>

        <div className="relative z-10 overflow-hidden rounded-3xl shadow-xl">
          <img
            src="/work4.jpg"
            alt="Optimize & Scale"
            className="w-full h-[220px] sm:h-[300px] md:h-full object-cover"
          />
        </div>
      </div>
    </div>

  </div>
    </section>
  );
}
