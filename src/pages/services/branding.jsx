export default function Branding() {
  return (
    <section className="relative text-white py-28 px-6">

      <div className="absolute inset-0 bg-black"></div>
      <div className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:"radial-gradient(circle at 20% 30%, #0E6388 0%, transparent 60%), radial-gradient(circle at 80% 70%, #4BC1E8 0%, transparent 70%)",
        }} />

      <div className="relative z-10 max-w-6xl mx-auto space-y-14">
        <h1 className="text-4xl md:text-6xl font-extrabold">Branding & Identity</h1>

        <div className="rounded-3xl overflow-hidden shadow-xl border border-white/10 h-[430px] bg-white/10">
          <video src="/videos/branding1.mp4" autoPlay loop muted className="w-full h-full object-cover"/>
        </div>

        <div className="grid md:grid-cols-2 gap-10 text-white/85 leading-relaxed">
          <ul className="space-y-4 list-disc pl-4">
            <li>Logo + Color palette + Typography System</li>
            <li>Brand Strategy + Voice + Persona</li>
            <li>Packaging + Social Identity Kits</li>
            <li>Brand Guidelines PDF Included</li>
          </ul>

          <button className="bg-gradient-to-r from-[#4BC1E8] to-[#0E6388] px-7 py-3 rounded-full font-semibold">
            Request Brand Proposal →
          </button>
        </div>
      </div>
    </section>
  );
}
