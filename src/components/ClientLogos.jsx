import React from "react";
import Marquee from "react-fast-marquee";

export default function ClientsMarquee() {
  const logos = [
    "/client/logo-1.png","/client/logo-2.png","/client/logo-3.png","/client/logo-4.png",
    "/client/logo-5.png","/client/logo-6.png","/client/logo-7.png","/client/logo-8.png",
    "/client/logo-9.png","/client/logo-10.png","/client/logo-11.png","/client/logo-12.png",
    "/client/logo-13.png","/client/logo-14.png","/client/logo-15.png","/client/logo-16.png",
  ];

  return (
    <section className="py-24 bg-white text-center">

      {/* Heading */}
      <h2
        className="
        text-4xl md:text-5xl font-extrabold mb-14 leading-[1.2] pb-2
        text-transparent bg-clip-text
        bg-gradient-to-r from-[#0E3D55] via-[#0F587A] to-[#11719A]
        drop-shadow-[0_4px_10px_rgba(0,0,0,0.25)]
      ">
        Brands That Chose Us —  <span  className="text-transparent bg-clip-text bg-gradient-to-r from-[#4BC1E8] to-[#0E6388]">And Grew With Us</span> 
      </h2>

      {/* Just logo marquee – NO background strip */}
      <div className="w-[92%] mx-auto py-6 flex items-center justify-center overflow-hidden">

        <Marquee speed={45} pauseOnHover gradient={false}>
          {logos.map((src, i) => (
            <div key={i} className="mx-12 flex items-center justify-center">

              {/* Logo Only */}
              <img
                src={src}
                className="w-24 h-24 object-contain opacity-90 hover:opacity-100 transition"
              />

            </div>
          ))}
        </Marquee>
      </div>

    </section>
  );
}
