import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function ServicesPage() {
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
    link: "/services/ugc-content",   // FIXED
  },
  {
    title: "Photography & Creative Shoots",
    desc: "Product photography, event coverage, brand visuals & creative motion shots for premium brand presentation.",
    video: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414450/Photography_1_xp1wud.mov",
    link: "/services/photography",
  },
];

  return (
    <>
   <Helmet>
  <title>Digital Marketing Services | SMM, Branding, UGC & Video Content</title>

  <meta 
    name="description" 
    content="Explore Bluenose Digital’s services — Social Media Marketing, Branding, UGC Creation, Influencer Marketing, Video Editing & Photography. We help brands scale with scroll-stopping content & ROI-focused execution." 
  />

  <meta 
    name="keywords" 
    content="social media management, branding services, influencer marketing agency, ugc creators, video editing for businesses, reels editing, product photography, digital marketing services" 
  />

  {/* OG Preview for Social Share */}
  <meta property="og:title" content="Digital Marketing Services | SMM + Branding + UGC + Ads" />
  <meta property="og:description" content="Growth-focused services for brands — SMM, UGC, influencer campaigns, editing & brand identity development." />
  <meta property="og:image" content="/banner/services-og.jpg" />
  <meta property="og:url" content="https://bluenosedigital.com/services" />
  <meta property="og:type" content="website" />

  {/* Schema for Services */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Digital Marketing & Content Services",
      "provider": {
        "@type": "Organization",
        "name": "Bluenose Digital",
        "url": "https://bluenosedigital.com/services"
      },
      "offers": [
        { "@type": "Offer", "name": "Social Media Marketing" },
        { "@type": "Offer", "name": "Branding & Brand Identity" },
        { "@type": "Offer", "name": "Influencer Marketing" },
        { "@type": "Offer", "name": "UGC Content Creation" },
        { "@type": "Offer", "name": "Video Editing & Reels" },
        { "@type": "Offer", "name": "Photography & Shoots" }
      ]
    })}
  </script>
</Helmet>

    <section className="relative py-28 px-6 bg-white text-[#0E3D55]">

  <h1 className="text-center text-4xl md:text-6xl font-extrabold mb-4">
    Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4BC1E8] to-[#0E6388]">Services</span>
      </h1>
      <p className="text-center text-lg md:text-2xl text-[#0E3D55]/80 max-w-3xl mx-auto mb-20  tracking-wide">
  Smart marketing, powerful storytelling & results that speak.
</p>

  <div className="max-w-7xl mx-auto space-y-28">

{services.map((s, i) => {
  const palette = [
    { bg:"#0E6388", text:"#FFFFFF", glass:true },  // deep blue
    { bg:"#4BC1E8", text:"#07334A" },              // sky blue
    { bg:"#F5C248", text:"#07455A" },              // yellow
    { bg:"#FFFFFF", text:"#0E3D55", border:true }, // white
  ];

  const c = palette[i % 4]; // rotate 4 colors

  return (
    <motion.div
      key={i}
      className="grid md:grid-cols-2 gap-12 p-14 rounded-3xl shadow-xl transition duration-500"
      style={{
        background:c.bg,
        color:c.text,
        border: c.border ? "1px solid #0E3D5520" : "none",
        backdropFilter: c.glass ? "blur(10px)" : "none"
      }}
      initial={{ opacity:0, y:30 }}
      whileInView={{ opacity:1, y:0 }}
      transition={{ duration:.6 }}
    >

      {/* VIDEO alternating side */}
      <div className={`${i%2 !==0 ? "md:order-2" : ""}`}>
        <div className="rounded-3xl overflow-hidden h-[360px] md:h-[430px] shadow-lg border border-white/20">
          <video src={s.video} autoPlay loop muted className="w-full h-full object-cover"/>
        </div>
      </div>

      {/* TEXT */}
      <div className="flex flex-col justify-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-extrabold">{s.title}</h2>
        <p className="text-lg leading-relaxed opacity-90">{s.desc}</p>

        <Link to={s.link}>
          <button className="
            px-7 py-3 rounded-full font-semibold text-white shadow-md w-fit
            bg-gradient-to-r from-[#4BC1E8] to-[#0E6388] hover:opacity-90
          ">
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
