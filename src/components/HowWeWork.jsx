export default function HowWeWork() {

  const steps = [
    { 
      num:"01",
      highlight:"Deep Brand Understanding",
      metrics:["12+ hrs audit", "3 competitor scans", "Brand tone discovery", "Target Persona Mapping"]
    },
    { 
      num:"02",
      highlight:"Marketing Blueprint",
      metrics:["30-day action plan", "Content calendar", "Channel strategy", "Ad funnel defined"]
    },
    { 
      num:"03",
      highlight:"Creative Execution",
      metrics:["40+ creatives/mo", "UGC + Reels + Graphics", "Brand story elements", "Visual Identity rollout"]
    },
    { 
      num:"04",
      highlight:"Monitor, Scale & Optimize",
      metrics:["Weekly revisions", "A/B ad testing", "ROI tracking", "Growth iteration loops"]
    },
  ];


  return (
<section className="py-24 bg-white text-[#063349]">
  <div className="max-w-7xl mx-auto px-6 text-center mb-14">
    <p className=" text-transparent bg-clip-text
    bg-gradient-to-r from-[#0E3D55] via-[#0F587A] to-[#11719A]
    drop-shadow-[0_4px_10px_rgba(0,0,0,0.20) font-semibold tracking-wide">→ Our Process</p>
        
    <h2 className="text-3xl md:text-5xl font-extrabold  text-transparent bg-clip-text
    bg-gradient-to-r from-[#0E3D55] via-[#0F587A] to-[#11719A]
    drop-shadow-[0_4px_10px_rgba(0,0,0,0.25)">
      How We Work{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4BC1E8] to-[#0E6388]">
        (Smart, Fast, ROI-Driven)
      </span>
    </h2>
  </div>



{/* PROCESS GRID with GRADIENT BLUE CARDS */}
<div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

  {[
    {
      num:"01",
      title:"Deep Brand Understanding",
      points:["12+ Hr Brand Study","3 Competitor Scans","Voice + Tone Mapping","Persona Identification"],
      desc:"We start by deeply learning about your brand — audience, tone, performance & competitors to unlock scale-ready clarity."
    },
    {
      num:"02",
      title:"Marketing Blueprint",
      points:["30-Day Strategy Map","Content Calendar","Channel + Funnel Setup","CTA + Conversion Architecture"],
      desc:"A complete execution blueprint — content angles, messaging flow, channel strategy & paid funnel routing."
    },
    {
      num:"03",
      title:"Creative Execution",
      points:["40+ Creatives Monthly","UGC + Reels + Graphics","Brand-First Visuals","Story-Driven Hooks"],
      desc:"Thumb-stopping visuals designed to convert — where design meets psychology & brand story."
    },
    {
      num:"04",
      title:"Monitor, Scale & Optimize",
      points:["Weekly A/B Testing","ROI Tracking","Scaling Iterations","Continuous Improvement Loops"],
      desc:"Performance-led scaling — identify winners, cut cost, expand reach & drive revenue faster."
    }
  ].map((step,i)=>(
    <div key={i}
      className="
        rounded-3xl p-10 text-white shadow-[0_15px_40px_rgba(0,0,0,0.2)]
        transition-all duration-300 hover:shadow-[0_22px_55px_rgba(0,0,0,0.30)]
        border border-white/10
      "
      style={{
        background:"linear-gradient(to bottom right, #4BC1E8, #0E6388)"
      }}
    >
      
      {/* Oversized Step Number (Soft) */}
      <p className="text-6xl font-extrabold opacity-20">{step.num}</p>

      <h3 className="text-2xl font-bold mt-1">{step.title}</h3>

      {/* KEY Metrics Bullets (NUMERIC-centric content) */}
      <ul className="mt-4 space-y-1 text-white/90 text-[15px]">
        {step.points.map((p,j)=> <li key={j}>• {p}</li>)}
      </ul>

      <p className="text-white/75 text-sm mt-4 leading-relaxed">{step.desc}</p>
    </div>
  ))}

</div>


</section>

  );
}
