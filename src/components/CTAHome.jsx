import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <>
      {/* TOP WAVE (same as What We Do) */}
      <div className="w-full overflow-hidden leading-none -mt-1">
        <svg
          viewBox="0 0 1440 180"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            fill="#1175a0"
            d="
              M0,80 
              C240,140 480,0 720,60 
              C960,120 1200,20 1440,80 
              L1440,180 
              L0,180 
              Z
            "
          ></path>
        </svg>
      </div>

      {/* CTA SECTION */}
      <section
        className="relative w-full bg-[#1175a0] pb-30 px-6 overflow-hidden text-center"
      >
        <div className="max-w-3xl mx-auto relative z-10 text-white">

          <p className="opacity-90 mb-2 font-semibold tracking-wide">
            → Let's Work Together
          </p>

          <h2 className="text-3xl md:text-5xl font-extrabold leading-[1.3] text-[#063349]">
            Let's Build Something <span className="text-white">Powerful</span>
          </h2>

          <p className="mt-4 mb-12 text-white/80 text-lg leading-relaxed">
            Growth-focused strategies, creative execution & result-driven campaigns.
          </p>

          {/* BUTTON WITH SHINE EFFECT */}
          <Link to="/contact">
            <button
              className="
                px-12 py-4 text-lg font-semibold rounded-full shadow-xl
                cursor-pointer text-[#063349] bg-white relative overflow-hidden
                transition-all duration-300
              "
            >
              <span className="relative z-10">Contact Us Now →</span>

              <span
                className="
                  absolute inset-0 bg-white/30 translate-x-[-100%]
                  hover:translate-x-[100%] transition-transform duration-500
                "
              />
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
