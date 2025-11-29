export default function StatsSection() {

  const stats = [
    { metric: "3x", label: "Growth", desc: "With smart strategy and creative execution" },
    { metric: "10.3M+", label: "Total Views", desc: "Views generated through campaigns converting into customers" },
    { metric: "76%", label: "Brand authority & Market Share", desc: "Our content doesn't just get seen, it builds loyalty" },
    { metric: "83%", label: "Client success & trust", desc: "Clients stay, win & scale with consistent performance" },
    { metric: "50+", label: "Brands", desc: "Companies who trusted us to grow their business" },
    { metric: "24/7", label: "Support", desc: "We resolve issues across time zones without delay" },
  ];

  return (
    <section className="py-28 bg-white text-[#0E3D55] px-6">

      {/* Heading */}
     <h2
  className="
    text-center text-4xl md:text-5xl font-extrabold mb-10 leading-[1.2] pb-2
    text-transparent bg-clip-text
    bg-gradient-to-r from-[#0E3D55] via-[#0F587A] to-[#11719A]
    drop-shadow-[0_4px_10px_rgba(0,0,0,0.25)]
  "
>
        The Numbers  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4BC1E8] to-[#0E6388]">That Matter</span> 
      </h2>

      
      {/* Stats Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {stats.map((item, i) => (
          <div
            key={i}
            className="
              p-10 rounded-3xl shadow-xl 
              flex flex-col gap-3
              text-white
            "
            style={{
              background:"linear-gradient(to bottom right, #4BC1E8, #0E6388)",
            }}
          >
            <h3 className="text-4xl md:text-5xl font-extrabold">{item.metric}</h3>

            <p className="text-lg font-semibold opacity-95">
              {item.label}
            </p>

            <p className="text-sm opacity-85 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}
