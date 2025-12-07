import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

export default function HomeServicesSlider() {

const services = [
  {
    title: "Social Media Marketing (SMM)",
    desc: "From page management to content calendars, we create viral, engaging and brand aligned content that grows visibility, trust and conversions.",
    video: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414584/SMM_1_ew5mpu.mov",
    link: "/services/smm",
  },
  {
    title: "Branding & Identity",
    desc: "Logo, color palette, tone, visual communication and brand story — we craft a brand that people remember and connect with emotionally.",
    video: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414238/Personal_Branding_1_abmcg7.mov",
    link: "/services/brand-identity",
  },
  {
    title: "Influencer Marketing",
    desc: "We collaborate with creators that match your niche, execute campaigns and track performance to drive engagement and conversions efficiently.",
    video: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414144/Influencer_marketing_1_lq9d3z.mov",
    link: "/services/influencer-marketing",
  },
  {
    title: "Video Editing",
    desc: "High–quality cinematic edits, short-form reels, transitions, promotional clips & story-driven video editing.",
    video: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414823/Video_Production_3_mbldqf.mp4",
    link: "/services/video-editing",
  },
  {
    title: "UGC Content Creation",
    desc: "Authentic conversion-focused content by real creators for ads, branding and product promotions.",
    video: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414731/UGC_1_tqmfnt.mov",
    link: "/services/ugc-content",
  },
  {
    title: "Photography & Creative Shoots",
    desc: "Product photography, event coverage & creative visual media that elevates brand perception.",
    video: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414450/Photography_1_xp1wud.mov",
    link: "/services/photography",
  },
];


const slider = {
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,  // ⬅ Slide switches every 2 seconds (FAST)
  speed: 600,          // ⬅ Smooth transition speed
  arrows: false,
  pauseOnHover: false,  // ⬅ Keeps sliding continuously
  slidesToShow: 1,
  slidesToScroll: 1,
};


  return (
    <section className="py-28 bg-white px-6 text-[#0E3D55]">

 <h2
  className="
    text-center text-3xl md:text-5xl font-extrabold mb-5 leading-[1.2] pb-2
    text-transparent bg-clip-text
    bg-gradient-to-r from-[#0E3D55] via-[#0F587A] to-[#11719A]
    drop-shadow-[0_4px_10px_rgba(0,0,0,0.25)]
  "
>
  What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4BC1E8] to-[#0E6388]">Offer</span> 
</h2>

<p
  className="
    text-center text-lg md:text-xl mb-16
    text-transparent bg-clip-text
    bg-gradient-to-r from-[#0E3D55] via-[#0F587A] to-[#11719A]
    drop-shadow-[0_4px_10px_rgba(0,0,0,0.20)]
  "
>
  Everything you need to build, scale & dominate your digital presence.
</p>


      <div className="max-w-7xl mx-auto">
        <Slider {...slider}>
          {services.map((s, i) => (
            <div key={i}>
              <div
  className="grid md:grid-cols-2 gap-12 p-14 rounded-3xl shadow-xl mx-4"
  style={{
    background:"linear-gradient(to bottom right, #4BC1E8, #0E6388)", // ONLY BLUE COLOR
    color:"#FFFFFF",
  }}
>

                {/* VIDEO */}
                <div className={`${i%2!==0 ? "md:order-2" : ""}`}>
                  <div className="rounded-3xl overflow-hidden h-[340px] md:h-[420px] border border-white/20 shadow-xl">
                    <video src={s.video} autoPlay loop muted className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* TEXT */}
                <div className="flex flex-col justify-center space-y-6">
                  <h3 className="text-3xl md:text-4xl font-extrabold">{s.title}</h3>
                  <p className="text-lg leading-relaxed opacity-95">{s.desc}</p>

                  <Link to={s.link}>
                    <button className="px-7 py-3 font-semibold text-white rounded-full bg-gradient-to-r from-[#4BC1E8] to-[#0E6388] shadow-md hover:opacity-90">
                      Learn More →
                    </button>
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </Slider>
      </div>

    </section>
  );
}
