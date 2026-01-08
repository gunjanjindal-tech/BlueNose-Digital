import { motion } from "framer-motion";
import { Flag, Building2, Users, Globe2 } from "lucide-react";

function Timeline() {
  const events = [
    {
      icon: <Flag className="w-7 h-7" />,
      date: "September 2024",
      title: "The Vision Was Born",
      text: "To build a digital marketing agency blending creativity with data-driven execution.",
    },
    {
      icon: <Building2 className="w-7 h-7" />,
      date: "December 2024",
      title: "First Office — Halifax Launch",
      text: "Opened our first office in Halifax, Canada, bringing brands closer with impactful strategies.",
    },
    {
      icon: <Users className="w-7 h-7" />,
      date: "February 2025",
      title: "Team Growth: 20+ Experts",
      text: "Expanded into strategists, designers, creators & performance marketers.",
    },
    {
      icon: <Globe2 className="w-7 h-7" />,
      date: "September 2025",
      title: "India Launch: Global Expansion",
      text: "Expanded operations to India to deliver global-scale digital solutions.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <h2 className="text-center text-3xl md:text-5xl font-extrabold text-[#063349] mb-16 2xl:text-6xl">
        Our <span className="text-[#0E6388]">Journey</span>
      </h2>

      <div className="relative max-w-5xl mx-auto px-6 2xl:max-w-none 2xl:px-32">

        {/* Vertical Glow Line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0E6388] to-[#4BC1E8] opacity-40"></div>

        <div className="space-y-20 relative z-10">

          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.4 }}
              className="relative flex flex-col items-center text-center"
            >

              {/* Dot */}
              <div className="w-6 h-6 bg-[#0E6388] rounded-full border-4 border-white shadow-lg"></div>

              {/* Card */}
              <div className="
                mt-6 w-full md:w-[70%]
                bg-[#0E6388] backdrop-blur-xl 
                border border-[#D9E7F1]/40 
                p-8 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)]
              ">
                <div className="flex justify-center mb-3 text-white">
                  {event.icon}
                </div>

                <p className="text-sm font-semibold text-white 2xl:text-2xl">
                  {event.date}
                </p>

                <h3 className="text-xl font-bold text-white mt-1 2xl:text-4xl">
                  {event.title}
                </h3>

                <p className="text-white/80 mt-3 leading-relaxed 2xl:text-2xl">
                  {event.text}
                </p>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Timeline;
