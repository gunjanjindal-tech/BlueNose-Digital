import { motion } from "framer-motion";
import ClientLogos from "../../components/ClientLogos";

export default function SMM() {
  return (
    <div className="text-white w-full overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[90vh] flex items-center justify-center text-center px-6">

        {/* Background Video */}
        <video
          src="/videos/smm3.mp4"
          autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />

        {/* Dark Blur Overlay */}
        <div className="absolute inset-0 bg-[#000000d8] backdrop-blur-[4px]"></div>

        {/* Hero Content */}
        <div className="relative z-10">
         <h1 className="text-5xl md:text-7xl font-extrabold">
  We Don’t Just Manage Social Media,
  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#4BC1E8] to-[#0E6388] mt-2">
    We Build Brands People Follow ❤️
  </span>
</h1>

<p className="mt-6 text-xl text-white/85 max-w-2xl mx-auto">
  Content that looks good is not enough. We create content people remember, share, talk about & convert through.
</p>

          <div className="flex gap-4 mt-10 justify-center flex-wrap">
            <button className="px-8 py-3 text-lg rounded-full bg-gradient-to-r from-[#4BC1E8] to-[#0E6388] font-semibold hover:opacity-90">
              Book Strategy Call →
            </button>
            <button className="px-8 py-3 text-lg rounded-full border border-white/40 hover:bg-white/10">
              Request Pricing →
            </button>
          </div>
        </div>
          </section>
          
{/* "Why SMM Matters Today" */}
          <section className="py-20 px-6" style={{background:"#071a24"}}>
  <h2 className="text-center text-4xl font-bold mb-12">
    Why Social Media Matters in 2025 🚀
  </h2>

  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-white/85">

    {[
      ["People buy brands, not products.","You need visibility, consistency & storytelling that resonates."],
      ["Attention span is 3 seconds.","Your content must hook instantly or you lose the viewer forever."],
      ["Brands scale through community.","Loyal followers turn into customers → then ambassadors."]
    ].map(([title,text],i)=>(
      <div key={i} className="p-6 bg-white/10 rounded-2xl border border-white/10 backdrop-blur-md hover:bg-white/20 transition">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-white/70 leading-relaxed">{text}</p>
      </div>
    ))}

  </div>
</section>


      {/* ================= RESULTS ================= */}

<section className="py-20 overflow-hidden" 
  style={{ background:"linear-gradient(180deg,#FFFFFF,#F6FBFF,#FFFFFF)" }}>

  <h2 className="text-center mb-16 text-4xl md:text-5xl font-extrabold 
    text-transparent bg-clip-text 
    bg-gradient-to-r from-[#0E3D55] via-[#0F587A] to-[#11719A]
    drop-shadow-[0_4px_10px_rgba(0,0,0,0.25)]">
     Real Results Delivered
  </h2>

  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6">

    {[
      ["+320% Engagement Growth"],
      ["12M+ Organic Reach"],
      ["4.8x ROAS with Meta Ads"],
      ["350+ Campaigns Executed"]
    ].map((stat, i) => (
      
      <div key={i}
        className="relative p-6 rounded-3xl cursor-pointer
        bg-[#0C1620]/85 backdrop-blur-xl text-white
        border border-white/15 shadow-[0_4px_25px_rgba(0,0,0,0.55)]
        hover:shadow-[0_32px_60px_rgba(0,185,255,0.55)]
        transition-all duration-500 flex items-center justify-center">

        <p className="text-lg font-semibold text-center">{stat}</p>

        {/* Glass shine */}
        <div className="absolute inset-0 pointer-events-none opacity-0 hover:opacity-100 transition duration-700">
          <div className="w-[170%] h-full -rotate-12 
          bg-gradient-to-r from-transparent via-white/30 to-transparent 
          translate-x-[-120%] hover:translate-x-[120%] transition-all duration-[1200ms] ease-out"/>
        </div>
      </div>
    ))}

  </div>
</section>



      {/* ================= DELIVERABLES ================= */}
<section className="relative overflow-hidden text-white py-24 px-6" style={{ background:"#000" }}>
  <div className="absolute inset-0 opacity-25 pointer-events-none"
    style={{ backgroundImage:"radial-gradient(circle at 20% 30%, #0E6388 0%, transparent 60%),radial-gradient(circle at 80% 70%, #4BC1E8 0%, transparent 70%)"}} />

  <div className="relative z-10 max-w-4xl mx-auto text-center">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-[#4BC1E8] to-[#0E6388]"> What You Get</h2>

    <div className="space-y-5 text-lg text-white/90 leading-relaxed max-w-xl mx-auto">
      <p>• 30-Day Content Strategy + Calendar</p>
      <p>• Reels + Carousel + Campaign Creatives</p>
      <p>• Account Growth & Engagement Build-Up</p>
      <p>• Monthly Analytics + Competitor Reports</p>
      <p>• Paid Ads + Influencer Support Option</p>
    </div>
  </div>
</section>


{/* ============== PORTFOLIO VIDEOS ============== */}
<section className="py-24 bg-fff">
  <h2 className="text-center text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#4BC1E8] to-[#0E6388] mb-4  leading-[1.25] pb-2  ">
    Portfolio Highlights
  </h2>

  <p className="text-center text-[#0E4E75]/70 mb-10 max-w-2xl mx-auto">
    Content that didn’t just look good — it performed.
  </p>

  <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
    {["smm1","smm2","smm3","smm4"].map((v,i)=>(
      <div key={i} className="rounded-3xl overflow-hidden shadow-xl hover:scale-[1.03] transition">
        <video src={`/videos/${v}.mp4`} autoPlay loop muted className="w-full h-[320px] object-cover"/>
      </div>
    ))}
  </div>
</section>

          
          {/* Social Proof — The emotional trust trigger
           */}

<section className="py-20 text-white text-center relative" style={{background:"#000"}}>
  <div className="absolute inset-0 opacity-25"
     />

 

 <ClientLogos/>
</section>


      {/* ================= FAQ ================= */}
     <section
  className="relative overflow-hidden text-white py-24 px-6"
  style={{ backgroundColor: "#000" }}
>

  {/* Hero-style radial gradients */}
  <div
    className="absolute inset-0 opacity-25 pointer-events-none"
    style={{
      backgroundImage:
        "radial-gradient(circle at 20% 30%, #0E6388 0%, transparent 60%), radial-gradient(circle at 80% 70%, #4BC1E8 0%, transparent 70%)",
    }}
  ></div>

  <div className="relative z-10 max-w-4xl mx-auto">

    <h2 className="
      text-center text-4xl md:text-5xl font-extrabold mb-14
      text-transparent bg-clip-text
      bg-gradient-to-r from-[#4BC1E8] to-[#0E6388]
    ">
      Frequently Asked Questions
    </h2>

    {/* FAQ List */}
    <div className="space-y-6">
      {[
        ["How fast do results come?", "Most brands see consistent growth within 30–60 days."],
        ["Do you create full content?", "Yes! We plan, shoot, edit & manage your content pipeline end-to-end."],
        ["Are paid ads included?", "We run Meta Ads + Influencer funnels to boost conversions & reach."],
        ["Can I start small?", "Yes — monthly packages scale based on your growth needs."],
      ].map(([q,a],i) => (
        <details
          key={i}
          className="bg-white/10 backdrop-blur-xl p-5 rounded-xl
                     border border-white/10 shadow-lg transition">
          
          <summary className="cursor-pointer text-lg font-semibold hover:text-[#4BC1E8]">
            {q}
          </summary>

          <p className="mt-3 text-white/75 text-base leading-relaxed">
            {a}
          </p>
        </details>
      ))}
    </div>

  </div>
</section>


      {/* ================= FINAL CTA ================= */}
      <section className="py-24 text-center"
  style={{ background:"linear-gradient(180deg,#FFFFFF,#F6FBFF,#FFFFFF)" }}>
  
  <h2 className="text-4xl md:text-5xl font-extrabold 
    text-transparent bg-clip-text 
    bg-gradient-to-r from-[#0E3D55] via-[#0F587A] to-[#11719A]  leading-[1.2] pb-1 ">
    Ready to Scale Your Brand?
  </h2>

  <p className="text-[#0F587A]/80 mt-4 mb-10 text-lg max-w-xl mx-auto">
    Let’s build campaigns that stand out, convert better & grow faster.
  </p>

  <button 
    className="
      px-10 py-4 text-lg font-semibold text-white rounded-full
      bg-gradient-to-r from-[#4BC1E8] to-[#0E6388]
      hover:opacity-90 shadow-[0_10px_25px_rgba(0,160,255,0.35)]
      transition duration-300
    ">
    Let’s Discuss Strategy →
  </button>

</section>


    </div>
  );
}
