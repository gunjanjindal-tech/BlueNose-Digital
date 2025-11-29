export default function InfluencerMarketing() {
  return (
    <section className="relative text-white py-28 px-6">

      <div className="absolute inset-0 bg-black"></div>
      <div className="absolute inset-0 opacity-25" style={{backgroundImage:"radial-gradient(circle at 20% 30%, #0E6388 0%, transparent 60%), radial-gradient(circle at 80% 70%, #4BC1E8 0%, transparent 70%)"}} />

      <div className="relative z-10 max-w-6xl mx-auto space-y-14">

        <h1 className="text-4xl md:text-6xl font-extrabold">Influencer Marketing</h1>

        <div className="h-[430px] rounded-3xl overflow-hidden border border-white/10 bg-white/10 shadow-xl">
          <video src="/videos/influencer1.mp4" autoPlay loop muted className="w-full h-full object-cover"/>
        </div>

        <div className="grid md:grid-cols-2 gap-10 text-white/85">
          <ul className="space-y-4 list-disc pl-4">
            <li>UGC + Creator Collaboration Campaigns</li>
            <li>Micro/Nano Influencer Based Conversions</li>
            <li>Performance Metrics + Deliverables Report</li>
            <li>Pay-per-deliverable / Retainer Plan Available</li>
          </ul>

          <button className="px-7 py-3 rounded-full bg-gradient-to-r from-[#4BC1E8] to-[#0E6388] font-semibold">
            Start Collaboration →
          </button>
        </div>
      </div>
    </section>
  );
}
