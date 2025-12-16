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
    <section className="pt-10 bg-white text-center"
    >

      {/* LOGO MARQUEE */}
      <div className="w-[92%] mx-auto py-6 flex items-center justify-center overflow-hidden">
        <Marquee speed={45} pauseOnHover gradient={false}>
          
          {logos.map((src, i) => (
            <div key={i} className="mx-10 flex items-center justify-center">

              <img
                src={src}
                className="
                  h-30 md:h-30 w-auto object-contain
                  opacity-100 hover:opacity-100 transition duration-300
                "
                alt="client logo"
              />

            </div>
          ))}

        </Marquee>
      </div>

    </section>
  );
}
