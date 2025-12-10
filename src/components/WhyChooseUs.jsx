import { Link } from "react-router-dom";

export default function WhyChooseUs() {

  // WHITE CARD STYLE
  const cardStyle = {
    background:"#FFFFFF",
    color:"#0E3D55",
    border:"1.5px solid rgba(255,255,255,0.15)",
  };

  return (
    <section
      className="py-24 relative overflow-hidden text-white"
      style={{ backgroundColor:"#000" }}   // same deep black base as Hero
    >

      {/* Same gradient overlay as HERO */}
    <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, #0E6388 0%, transparent 60%), radial-gradient(circle at 80% 70%, #4BC1E8 0%, transparent 70%)",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADING */}
        <div className="text-center mb-16">
<div className="text-center mb-10 relative z-10">

  {/* Top Mini Tag — same style as Explore Our Services */}
  <p className="flex items-center justify-center gap-2 text-lg font-medium text-white">
    <span className="text-white text-2xl">→</span>
    Why Choose Us
  </p>

  {/* Main Heading — White + Gradient Highlight like Explore Our Services */}
  <h2 className="text-center text-3xl md:text-5xl font-extrabold mt-3">
    Why We're the Right Fit for{" "}
    <span className="text-white">
      Your Brand
    </span>
  </h2>

</div>


        </div>

        {/* TOP 2 CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">

          {/* Card 1 */}
          <div style={cardStyle} className="p-8 rounded-3xl shadow-xl">
            <h3 className="text-xl font-semibold mb-3 text-black">
              Social Media Toolkit & Content Vault
            </h3>
            <p className="mb-6 opacity-90 leading-relaxed text-black/85">
              Ready-to-post graphics, captions & growth systems.
            </p>
           
          </div>

          {/* Card 2 */}
          <div style={cardStyle} className="p-8 rounded-3xl shadow-xl">
            <h3 className="text-xl font-semibold mb-3 text-black">
              5-Week Digital Growth Bootcamp
            </h3>
            <p className="mb-6 opacity-90 leading-relaxed text-black/85">
              Learn brand positioning & conversion execution.
            </p>
           
          </div>

        </div>

        {/* BOTTOM 3 CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Card 3 */}
          <div style={cardStyle} className="p-8 rounded-3xl shadow-xl flex flex-col justify-between">
            <h3 className="text-xl font-semibold mb-3 text-black">Direct Access to Our Experts</h3>
            <p className="mb-6 opacity-90 leading-relaxed text-black/85">
              VIP guidance, reviews & strategy support.
            </p>
            <div className="flex gap-2 -space-x-3">
              <img src="/p1.jpeg" className="w-10 h-10 object-contain rounded-full border-2 border-white"/>
              <img src="/p2.jpeg" className="w-10 h-10 object-cover  rounded-full border-2 border-white"/>
              <img src="/p3.jpeg" className="w-10 h-10 object-cover  rounded-full border-2 border-white"/>
            </div>
          </div>

          {/* Card 4 */}
          <div style={cardStyle} className="p-8 rounded-3xl shadow-xl flex flex-col justify-between">
            <h3 className="text-xl font-semibold mb-4 text-black">Campaign Performance Optimizer</h3>
            <p className="mb-6 opacity-90 leading-relaxed text-black/85">
              AI-assisted posting & ad performance maximizer.
            </p>
            <Link 
  to="/work-gallery"
  className=" text-center px-5 py-4 rounded-full text-black font-bold
    text-sm bg-black/25"
     
>
  View Portfolio →
</Link>
          </div>

          {/* Card 5 */}
          <div style={cardStyle} className="p-8 rounded-3xl shadow-xl flex flex-col items-center justify-center text-center">
            <div className="w-24 h-24 rounded-full bg-black/25 flex items-center justify-center mb-4">
              <p className="text-3xl font-bold text-black">93%</p>
            </div>
            <p className="font-medium opacity-95 text-black/85">
              Client Success Rating
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
