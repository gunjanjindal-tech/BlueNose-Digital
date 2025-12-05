import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="py-20"
      style={{ background:"linear-gradient(180deg,#FFFFFF,#F6FBFF,#FFFFFF)" }}
    >
      <div className="max-w-3xl mx-auto text-center px-6">

        {/* FIXED CLIP — added pb + leading for breathing */}
        <h2 className="
          text-3xl md:text-5xl font-extrabold 
          text-transparent bg-clip-text 
          bg-gradient-to-r from-[#0E3D55] via-[#0F587A] to-[#11719A]
          leading-[1.25] pb-2      /* ❗ FIXED G CUT PROBLEM */
        ">
          Let’s Build Something Powerful
        </h2>

        <p className="mt-4 mb-12 text-[#0E3D55]/85 text-lg leading-relaxed">
          Growth-focused strategies, creative execution & result-driven campaigns.
        </p>

        {/* CTA BUTTON MATCHING BLUE THEME 💙 */}
        <Link to="/contact">
          <button className="
            px-12 py-4 text-lg font-semibold rounded-full shadow-xl
            bg-gradient-to-r from-[#4BC1E8] to-[#0E6388] cursor-pointer text-white
          ">
            Book a Strategy Call →
          </button>
        </Link>

      </div>
    </section>
  );
}
