import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function ServicesPage() {
  const services = [
    {
      title: "Social Media Marketing (SMM)",
      desc: "From page management to content calendars, we create viral, engaging, brand-aligned content that grows visibility, trust, and conversions.",
      video: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414584/SMM_1_ew5mpu.mov",
      link: "/services/smm",
    },
    {
      title: "Branding & Identity",
      desc: "Logo, color palette, tone, visual direction & narrative — we craft a brand that people remember and emotionally connect with.",
      video: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414238/Personal_Branding_1_abmcg7.mov",
      link: "/services/brand-identity",
    },
    {
      title: "Influencer Marketing",
      desc: "We collaborate with niche-specific creators, execute performance campaigns & track results to build trust and drive conversions.",
      video: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414144/Influencer_marketing_1_lq9d3z.mov",
      link: "/services/influencer-marketing",
    },
    {
      title: "Video Editing",
      desc: "High-quality cinematic edits, short-form reels, transitions, promotional clips & storytelling-driven video editing.",
      video: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414823/Video_Production_3_mbldqf.mp4",
      link: "/services/video-editing",
    },
    {
      title: "UGC Content Creation",
      desc: "Authentic conversion-focused content by real creators for ads, branding, storytelling & product promotions.",
      video: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414731/UGC_1_tqmfnt.mov",
      link: "/services/ugc-content",
    },
    {
      title: "Photography & Creative Shoots",
      desc: "Product shoots, event coverage, lifestyle visuals & creative brand photography for premium presentation.",
      video: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414450/Photography_1_xp1wud.mov",
      link: "/services/photography",
    },
  ];

  return (
    <>
     <Helmet>
  {/* BASIC SEO */}
  <title>
    Digital Marketing Services | SMM, Branding, Influencer Marketing, UGC & Video Editing
  </title>

  <meta
    name="description"
    content="Explore Bluenose Digital’s premium services — Social Media Marketing, Branding & Identity, Influencer Marketing, UGC Creation, Video Editing and Photography for fast-scaling brands."
  />

  <meta
    name="keywords"
    content="digital marketing services, social media marketing, branding agency, influencer marketing, UGC creators, video editing company, photography services, creative agency"
  />

  <link rel="canonical" href="https://www.bluenosedigital.ca/services" />

  {/* OPEN GRAPH (Facebook, Instagram, LinkedIn) */}
  <meta property="og:title" content="Bluenose Digital — SMM, Branding, UGC, Influencer & Video Editing Services" />
  <meta
    property="og:description"
    content="Full-suite creative & performance services: SMM, Branding, Influencer Marketing, UGC, Video Editing & Photography to help brands scale."
  />
  <meta property="og:url" content="https://www.bluenosedigital.ca/services" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://www.bluenosedigital.ca/og-services.jpg" />

  {/* TWITTER CARD */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Bluenose Digital — Digital Marketing & Creative Services"
  />
  <meta
    name="twitter:description"
    content="SMM, Branding, Influencers, UGC, Video Editing & Photography — one agency for all your growth needs."
  />
  <meta name="twitter:image" content="https://www.bluenosedigital.ca/og-services.jpg" />
</Helmet>


      {/* PAGE */}
      <section className="relative pt-[110px] pb-20 md:pt-[130px] md:pb-28 px-6 bg-white text-[#0E3D55]">


        {/* MAIN HEADING */}
        <p className="text-[#0E6388] font-semibold tracking-wide text-base md:text-lg text-center mb-2">
  → Our Services
</p>

  <h1 className="text-center text-3xl md:text-5xl font-extrabold text-[#063349] leading-[1.3]">
    Our <span className="text-[#0E6388]">Services</span>
  </h1>

  {/* SUBTEXT */}
  <p className="text-center text-lg md:text-xl text-[#063349]/80 max-w-2xl mx-auto mt-4 mb-20 leading-relaxed">
    Smart marketing, powerful storytelling & results that speak.
  </p>


        {/* CARDS */}
        <div className="max-w-7xl mx-auto space-y-20 md:space-y-28">

          {services.map((s, i) => {
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`
                grid md:grid-cols-2 gap-12 p-10 md:p-14 rounded-3xl shadow-xl 
                text-white relative
                `}
                style={{
                  background: "#0E6388",
                  border: "1px solid #0E6388",
                }}
              >
                {/* VIDEO */}
                <div className={`${i % 2 !== 0 ? "md:order-2" : ""}`}>
                  <div className="rounded-3xl overflow-hidden h-[360px] md:h-[430px] shadow-lg border border-white/20">
                    <video
                      src={s.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* TEXT CONTENT */}
                <div className="flex flex-col justify-center space-y-6">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                    {s.title}
                  </h2>

                  <p className="text-lg leading-relaxed text-white/90">
                    {s.desc}
                  </p>

                  <Link to={s.link}>
                    <button
                      className="px-7 py-3 rounded-full font-semibold bg-white text-black 
                       hover:bg-black hover:text-white transition shadow-lg"
                    >
                      Learn More →
                    </button>
                  </Link>
                </div>
              </motion.div>
            );
          })}

        </div>
      </section>
    </>
  );
}
