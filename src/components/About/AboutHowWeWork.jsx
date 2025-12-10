export default function AboutHowWeWork() {
  return (
    <section className="relative bg-white text-[#063349] overflow-hidden pt-12">
      
      {/* 🌊 Top Wave (works 100% now) */}
      <div className="absolute top-0 left-0 w-full z-0">
        <svg
          viewBox="0 0 1440 150"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[110px] rotate-180 block"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,64L48,74.7C96,85,192,107,288,112C384,117,480,107,576,96C672,85,768,75,864,80C960,85,1056,107,1152,112C1248,117,1344,107,1392,101.3L1440,96L1440,00L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* Heading */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center mb-14">
        <p className="text-[#0E6388] font-semibold tracking-wide mb-2">
          → Our Process
        </p>

        <h2 className="text-3xl md:text-5xl font-extrabold leading-[1.3]">
          How We Work <span className="text-[#0E6388]">(Smart, Fast, ROI-Driven)</span>
        </h2>
      </div>

      {/* Steps Grid */}
      <div className="relative z-10 grid md:grid-cols-2 gap-10 max-w-6xl mx-auto px-4">
        {[
          {
            num: "01",
            title: "Deep Brand Understanding",
            points: ["12+ Hr Brand Study", "3 Competitor Scans", "Voice + Tone Mapping", "Persona Identification"],
            desc:
              "We start by deeply learning about your brand — audience, tone, performance & competitors to unlock scale-ready clarity.",
          },
          {
            num: "02",
            title: "Marketing Blueprint",
            points: ["30-Day Strategy Map", "Content Calendar", "Channel + Funnel Setup", "CTA + Conversion Architecture"],
            desc:
              "A complete execution blueprint — content angles, messaging flow, channel strategy & paid funnel routing.",
          },
          {
            num: "03",
            title: "Creative Execution",
            points: ["40+ Creatives Monthly", "UGC + Reels + Graphics", "Brand-First Visuals", "Story-Driven Hooks"],
            desc:
              "Thumb-stopping visuals designed to convert — where design meets psychology & brand story.",
          },
          {
            num: "04",
            title: "Monitor, Scale & Optimize",
            points: ["Weekly A/B Testing", "ROI Tracking", "Scaling Iterations", "Continuous Improvement Loops"],
            desc:
              "Performance-led scaling — identify winners, cut cost, expand reach & drive revenue faster.",
          },
        ].map((step, i) => (
          <div
            key={i}
            className="rounded-3xl p-10 text-white shadow-[0_15px_40px_rgba(0,0,0,0.15)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.25)] transition-all duration-300"
            style={{ background: "rgb(14, 99, 136)" }}
          >
            <p className="text-6xl font-extrabold opacity-90">{step.num}</p>

            <h3 className="text-2xl font-bold mt-1">{step.title}</h3>

            <ul className="mt-4 space-y-1 text-white/90 text-[15px]">
              {step.points.map((p, j) => (
                <li key={j}>• {p}</li>
              ))}
            </ul>

            <p className="text-white/75 text-sm mt-4 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
