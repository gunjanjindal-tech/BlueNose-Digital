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
    <section className="py-10 bg-white text-center">

      {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#063349] text-center">
  
    Leading Brands Choose Us for  <span  className="text-[#0E6388]">Their Digital Growth</span> 
      </h2>

      {/* Just logo marquee – NO background strip */}
      <div className="w-[92%] mx-auto py-6 flex items-center justify-center overflow-hidden">

        <Marquee speed={45} pauseOnHover gradient={false}>
          {logos.map((src, i) => (
            <div key={i} className="mx-8 flex items-center justify-center">

              {/* Logo Only */}
              <img
                src={src}
                className="w-32 h-32 object-contain opacity-90 hover:opacity-100 transition"
              />

            </div>
          ))}
        </Marquee>
      </div>

    </section>
  );
}
