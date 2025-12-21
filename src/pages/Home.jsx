import React, { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import ClientLogos from "../components/ClientLogos";
import emailjs from "@emailjs/browser"; 
import { Mail, Phone, MapPin, Send } from "lucide-react";
import HomeClientGallery from "../components/HomeClientGallery.jsx";
import SmartCounter from "../components/SmartCounter.jsx";

// Premium SVG Icons
const CheckIcon = () => (
  <svg
    width="22"
    height="22"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="text-[#0E6388]"
  >
    <path d="M5 13l4 4L19 7" />
  </svg>
);



const logos = [
  "/client/logo-1.png",
  "/client/logo-2.png",
  "/client/logo-3.png",
  "/client/logo-4.png",
  "/client/logo-5.png",
  "/client/logo-6.png",
  "/client/logo-7.png",
  "/client/logo-8.png",
  "/client/logo-9.png",
  "/client/logo-10.png",
  "/client/logo-11.png",
  "/client/logo-12.png",
  "/client/logo-13.png",
  "/client/logo-14.png",
  "/client/logo-15.png",
  "/client/logo-16.png",
];

function Counter({ target, duration = 100 }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView || typeof target !== "number") return;

    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, target, duration]);

  const formatted =
    target % 1 !== 0 ? count.toFixed(1) : Math.floor(count);

  return <span ref={ref}>{formatted}</span>;
}

function CounterHero({ target, duration = 1200 }) {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef(null);
  const startedRef = React.useRef(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true;
          startCounting();
        }
      },
      { threshold: 0.6 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const startCounting = () => {
    let start = 0;
    const step = target / (duration / 16);

    const timer = setInterval(() => {
      start += step;

      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
  };

  const isDecimal = target % 1 !== 0;

  return (
    <span ref={ref} className="tabular-nums">
      {isDecimal ? count.toFixed(1) : Math.round(count)}
    </span>
  );
}



export default function Home() {

    const services = [
    "SMM",
    "Branding",
    "Influencer Marketing",
    "Video Editing",
    "UGC",
    "Photography",
  ];


  const [activeService, setActiveService] = useState("SMM");
  const serviceIndex = services.indexOf(activeService);

const prevService = () => {
  const prev =
    serviceIndex === 0 ? services.length - 1 : serviceIndex - 1;
  setActiveService(services[prev]);
};

const nextService = () => {
  const next =
    serviceIndex === services.length - 1 ? 0 : serviceIndex + 1;
  setActiveService(services[next]);
};

  const [soundOn, setSoundOn] = useState({});
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState("right");

  const toggleSound = (index) => {
    setSoundOn((prev) => ({ ...prev, [index]: !prev[index] }));
  };


  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };




  const serviceVideos = {
    SMM: [
      {
        url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414584/SMM_1_ew5mpu.mov",
        views: "12.4K",
      },
      {
        url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414604/SMM_2_et8fyi.mov",
        views: "8.9K",
      },
      {
        url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414663/SMM_5_vlimnn.mp4",
        views: "15.2K",
      },
      {
        url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1765460268/SMM_1_bed8jj.mp4",
        views: "5.7K",
      },
    ],

    Branding: [
      {
        url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414238/Personal_Branding_1_abmcg7.mov",
        views: "10.1K",
      },
      {
        url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414238/Personal_Branding_2_ejoaet.mov",
        views: "7.3K",
      },
      {
        url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414240/Personal_Branding_3_rvlgjk.mov",
        views: "4.9K",
      },
      {
        url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1765454631/branding4_bduckl.mp4", 
        views: "12.2K",
      },
    ],

    "Influencer Marketing": [
      {
        url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414144/Influencer_marketing_1_lq9d3z.mov",
        views: "9.2K",
      },
      {
        url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414146/Influencer_marketing_2_dd0qqy.mov",
        views: "6.4K",
      },
      {
        url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414144/Influencer_marketing_4_yecfec.mp4",
        views: "11.8K",
      },
      {
        url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414126/Influencer_marketing_3_tc1zqd.mov",
        views: "4.1K",
      },
    ],

    "Video Editing": [
      {
        url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414823/Video_Production_3_mbldqf.mp4",
        views: "14.3K",
      },
      {
        url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414820/Video_Production_2_slp4ms.mp4",
        views: "3.7K",
      },
      {
        url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414818/Video_production_4_ha90ws.mp4",
        views: "16.5K",
      },
      {
        url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414818/Video_Production_1_xiz4sn.mov",
        views: "5.2K",
      },
    ],

    UGC: [
      {
        url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414731/UGC_1_tqmfnt.mov",
        views: "18.1K",
      },
      {
        url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414748/UGC_2_t04guj.mov",
        views: "9.9K",
      },
      {
        url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414787/UGC_3_oif38l.mov",
        views: "6.2K",
      },
      {
        url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414723/UGC_4_ssejjv.mp4",
        views: "12.6K",
      },
    ],

    Photography: [
      {
        url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414450/Photography_1_xp1wud.mov",
        views: "20.2K",
      },
      {
        url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414455/photography_2_bttpuu.mov",
        views: "11.4K",
      },
      {
        url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414452/photography_3_kgb9it.mov",
        views: "7.9K",
      },
      {
        url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1765454194/Photography_1_gfj6vz.mp4",
        views: "14.7K",
      },
    ],
  };

  const iconMute = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
      <path d="M4 9V15H8L13 20V4L8 9H4Z" />
      <line x1="17" y1="7" x2="21" y2="11" stroke="white" strokeWidth="2" />
      <line x1="21" y1="7" x2="17" y2="11" stroke="white" strokeWidth="2" />
    </svg>
  );

  const iconUnmute = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
      <path d="M4 9V15H8L13 20V4L8 9H4Z" />
      <path
        d="M16 8C17.5 9.5 17.5 14.5 16 16"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M18.5 5.5C21.5 9 21.5 15 18.5 18.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );

  // Contact form states (reusing Contact.jsx logic)
const [form, setForm] = useState({
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
});

const [errors, setErrors] = useState({});
const [success, setSuccess] = useState("");
const [loading, setLoading] = useState(false);

// Input change
const handleChange = (e) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};

// Validate
const validate = () => {
  let err = {};
  if (!form.name.trim()) err.name = "Name is required";
  if (!form.email.trim()) err.email = "Email is required";
  if (!form.service.trim()) err.service = "Please select a service";
  setErrors(err);
  return Object.keys(err).length === 0;
};

// Submit message
const sendMessage = (e) => {
  e.preventDefault();
  if (!validate()) return;

  setLoading(true);

  const templateParams = {
    name: form.name,
    email: form.email,
    phone: form.phone || "Not provided",
    service: form.service,
    message: form.message || "No message added",
    time: new Date().toLocaleString(),
  };

  emailjs
    .send(
      "service_h8q2e1g",
      "template_efbydqb",
      templateParams,
      "I8XrZyy0UGP89_FWp"
    )
    .then(() => {
      setSuccess("Thanks! We will contact you shortly.");
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
      setTimeout(() => setSuccess(""), 3000);
    })
    .catch(() => alert("Unable to send message. Try again later."))
    .finally(() => setLoading(false));
};
  
  const stats = [
  { value: "50+", label: "Clients", desc: "Trusted us to elevate their brands." },
  { value: "7K+", label: "Comments & Interactions", desc: "Real engagement, not just likes." },
  { value: "320%", label: "Avg viewers Lift", desc: "Measurable growth beyond." },
  { value: "20+", label: "Content Formats Delivered", desc: "From Reels to Ads." },
  { value: "370+", label: "Social Posts Published", desc: "Consistent creative presence." },
  { value: "12.3M+", label: "Accounts Reached", desc: "Across campaigns & content." },
];

const [activeStat, setActiveStat] = React.useState(0);

React.useEffect(() => {
  const interval = setInterval(() => {
    setActiveStat((prev) => (prev + 1) % stats.length);
  }, 4000);

  return () => clearInterval(interval);
}, []);
  
  
 const sliderRef = useRef(null);
const servicesSectionRef = useRef(null);
const autoSlideRef = useRef(null);


useEffect(() => {
  const slider = sliderRef.current;
  const section = servicesSectionRef.current;
  if (!slider || !section) return;

  if (window.innerWidth >= 768) return; // mobile only

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        let index = 0;
        const cards = slider.children;

        autoSlideRef.current = setInterval(() => {
          index = (index + 1) % cards.length;
          cards[index].scrollIntoView({
            behavior: "smooth",
            inline: "center",
          });
        }, 5000);
      } else {
        clearInterval(autoSlideRef.current);
      }
    },
    { threshold: 0.5 }
  );

  observer.observe(section);

  return () => {
    clearInterval(autoSlideRef.current);
    observer.disconnect();
  };
}, []);



  
  return (
    <>
<Helmet>
  <title>Bluenose Marketing — Social Media Marketing, Branding & Growth Agency</title>

  <meta
    name="description"
    content="Bluenose Marketing helps brands grow through high-impact social media marketing, branding, influencer campaigns, UGC, video editing, and ROI-driven performance systems. Trusted by 120+ global brands."
  />

  <link rel="canonical" href="https://www.bluenosemarketing.ca/" />

  {/* OPEN GRAPH */}
  <meta property="og:title" content="Bluenose Marketing — Social Media Marketing, Branding & Growth Agency" />
  <meta
    property="og:description"
    content="Premium marketing agency delivering strategy, content, branding, influencers, UGC and performance marketing for fast-scaling brands."
  />
  <meta property="og:url" content="https://www.bluenosemarketing.ca/" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://www.bluenosemarketing.ca/og-home.jpg" />

  {/* TWITTER */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Bluenose Marketing — Social Media Marketing, Branding & Growth Agency" />
  <meta
    name="twitter:description"
    content="Global creative & performance marketing agency helping brands scale with content, strategy, and ROI-focused execution."
  />
  <meta name="twitter:image" content="https://www.bluenosemarketing.ca/og-home.jpg" />
</Helmet>



      {/* =============================== */}
      {/*       PAGE WRAPPER (BLUE TINT) */}
      {/* =============================== */}

      <div
        className="w-full overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #FFFFFF, #F6FBFF, #E9F6FF, #FFFFFF)",
        }}
      >
        {/* =============================== */}
        {/*           HERO SECTION          */}
        {/* =============================== */}
<section className="relative pt-25 pb-5 md:pt-28 md:pb-18 px-6 overflow-hidden">

  
{/* PREMIUM OPTION-D BACKGROUND */}
<div className="absolute inset-0 -z-10 overflow-hidden">

  {/* Base gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F4FAFF] to-[#E7F1FA]"></div>

  {/* Soft vignette (darkens edges slightly) */}
  <div className="absolute inset-0 pointer-events-none"
       style={{
         background: "radial-gradient(circle at center, rgba(255,255,255,0) 40%, rgba(0,0,0,0.07) 100%)"
       }}>
  </div>

  {/* Texture overlay */}
  <div
    className="absolute inset-0 opacity-[0.05] mix-blend-soft-light pointer-events-none"
    style={{
      backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')",
      backgroundSize: "300px"
    }}
  ></div>

  {/* Light gloss strip (adds depth) */}
  <div
    className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[40%] opacity-[0.25] pointer-events-none"
    style={{
      background:
        "radial-gradient(ellipse at top, rgba(255,255,255,0.8), transparent 70%)",
    }}
  ></div>
</div>

          <div className="absolute inset-0 z-[1] pointer-events-none select-none 
                opacity-[0.05] overflow-hidden flex items-center justify-center">

  <div className="animate-slideX whitespace-nowrap font-extrabold 
                  text-[140px] md:text-[200px] lg:text-[260px]
                  text-[#063349] tracking-tight leading-none">
    BLUENOSE MARKETING • BLUENOSE MARKETING • BLUENOSE MARKETING • BLUENOSE MARKETING •
            </div>
  </div>

  {/* FLOATING BLURS */}
  <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#0E6388]/10 rounded-full blur-3xl z-10"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#4EB3D8]/10 rounded-full blur-3xl z-10"></div>




  {/* HERO CONTENT */}
  <div className="relative z-20 max-w-7xl mx-auto grid lg:grid-cols-3 gap-10 items-center">

    {/* LEFT TEXT */}
    <div className="space-y-5">
      <p className="text-[#0E6388] font-semibold tracking-wide">
        → Digital Growth Agency
      </p>

      <h1 className="text-4xl md:text-5xl font-extrabold text-[#063349] leading-tight">
        We Design Marketing Experiences  That
{" "} 
        <span className="text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#0E6388] to-[#1E8FB9]">
          Turn  Attention Into Long-Term Brand Value.
        </span>
      </h1>

      <p className="text-[#063349]/80 text-lg max-w-md">
        A premium agency crafting high-impact content, performance-led campaigns, and branding systems that scale with consistency.
      </p>

      <div className="flex gap-4">
        <Link to="/contact">
          <button className="px-8 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-[#0E6388] to-[#1283B1] shadow-lg hover:opacity-90 transition">
            Start a Project →
          </button>
        </Link>

        <Link to="/work-gallery">
          <button className="px-8 py-3 rounded-full border border-[#0E6388] text-[#0E6388] font-semibold hover:bg-[#eaf6ff] shadow-sm transition">
            View Work
          </button>
        </Link>
      </div>
    </div>

    {/* VIDEO */}
    <div className="relative flex justify-center z-20">

      {/* Soft Glow */}
      <div className="
        absolute inset-0 -z-10 
        bg-gradient-to-r from-[#0E6388]/20 to-[#4EB3D8]/20
        rounded-[55px]
        blur-2xl animate-pulse
      "></div>

      {/* VIDEO CARD */}
      <div className="
        overflow-hidden 
        rounded-[50px] 
        shadow-[0_20px_60px_rgba(0,0,0,0.12)] 
        border border-white/40 
        h-[360px] md:h-[500px]
        bg-white/40 backdrop-blur-xl
        clip-path-[polygon(10%_0,90%_0,100%_12%,100%_88%,90%_100%,10%_100%,0_88%,0_12%)]
      ">
       <video
  src="https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1765454194/Photography_1_gfj6vz.mp4"
  autoPlay
  loop
  muted
  playsInline
  className="w-full h-full object-cover"
/>

      </div>
    </div>

{/* STATS */}
<div className="space-y-6 sm:space-y-8 z-20">
  {[
    { value: 480, suffix: "+", label: "High-impact videos" },
    { value: 12.3, suffix: "M+", label: "Viewers reached" },
    { value: 3.4, suffix: "M", label: "Views on top-performing content" },
  ].map((stat, i) => (
    <div
      key={i}
      className="
        flex items-center
        p-4 sm:p-5 rounded-3xl
        bg-white/60 backdrop-blur-xl
        shadow-[0_6px_24px_rgba(0,0,0,0.10)]
        border border-white/40
      "
    >
      {/* LEFT — NUMBER */}
      <div
        className="
          basis-[50%] sm:basis-[45%] lg:basis-[45%]
          flex items-baseline gap-1
          text-[#0E6388] font-extrabold
          tabular-nums leading-none
        "
      >
        <span className="text-3xl sm:text-4xl lg:text-5xl">
          <CounterHero target={stat.value} />
        </span>
        <span className="text-base sm:text-lg lg:text-xl">
          {stat.suffix}
        </span>
      </div>

      {/* RIGHT — TEXT */}
      <div className="basis-[50%] sm:basis-[55%] lg:basis-[55%]">
        <p className="text-[#063349] font-semibold text-sm sm:text-base">
          {stat.label}
        </p>
      </div>
    </div>
  ))}
</div>



  </div>

  <ClientLogos />

</section>


{/* ===================================== */}
{/*      OUR WORK IN ACTION (PREMIUM)     */}
{/* ===================================== */}
<div className="w-full overflow-hidden leading-none -mt-1"> <svg viewBox="0 0 1440 180" xmlns="http://www.w3.org/2000/svg" className="w-full" > <path fill="#1175a0" d=" M0,80 C240,140 480,0 720,60 C960,120 1200,20 1440,80 L1440,190 L0,180 Z " ></path> </svg> </div>
<section
  className="relative pb-20 px-6 overflow-hidden"
  style={{ background: "#1175a0" }}
        >
          
          {/* VIRAL MOMENTS MOVING TEXT */}
          
  <div className="absolute inset-0 -z-0 pointer-events-none opacity-[0.05] overflow-hidden select-none">
    <div className="animate-scrollX whitespace-nowrap 
        text-[70px] md:text-[130px] font-extrabold tracking-tight text-white  -translate-y-5 md:-translate-y-0">
      VIRAL MOMENTS • VIRAL MOMENTS • VIRAL MOMENTS • VIRAL MOMENTS •
    </div>
  </div>



  {/* TEXT BLOCK */}
  <div className="max-w-7xl mx-auto text-center relative z-20">
    <p className="text-white font-semibold tracking-wide mb-2">
      → Our Work
    </p>

    <h2 className="text-3xl md:text-5xl font-extrabold text-[#063349] leading-[1.3]">
      Our Work in <span className="text-white">Action</span>
    </h2>

    <p className="text-white text-lg md:text-xl max-w-2xl mx-auto mt-4 leading-relaxed">
      Explore real campaigns across SMM, Branding, Influencer Marketing & more.
    </p>

    {/* SERVICE FILTERS */}
    <div className="hidden md:flex justify-center gap-4 md:gap-6 mt-12 mb-12 flex-wrap">
      {services.map((srv) => (
        <button
          key={srv}
          onClick={() => {
            if (activeService === srv) return;

            setDirection(Math.random() > 0.5 ? "left" : "right");
            setIsAnimating(true);

            setTimeout(() => {
              setActiveService(srv);
              setIsAnimating(false);
            }, 450);
          }}
          className={`px-6 py-3 rounded-full font-medium transition duration-300 border
            ${
              activeService === srv
                ? "bg-[#0E6388] text-white shadow-lg scale-[1.05] border-[#0E6388]"
                : "bg-white text-[#063349] border-[#D4E4EF] hover:bg-[#F5FAFF]"
            }
          `}
        >
          {srv}
        </button>
      ))}
    </div>
          </div>
          
          {/* MOBILE SERVICE SLIDER */}
<div className="md:hidden flex items-center justify-center gap-4 mt-10 mb-8">

  {/* LEFT */}
  <button
    onClick={prevService}
    className="h-9 w-9 flex items-center justify-center rounded-full 
               border border-white text-white"
  >
    ←
  </button>

  {/* ACTIVE SERVICE */}
  <motion.div
    key={activeService}
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.25 }}
    className="px-5 py-2 rounded-full bg-white text-[#063349]
               text-sm font-semibold text-center min-w-[180px]"
  >
    {activeService}
  </motion.div>

  {/* RIGHT */}
  <button
    onClick={nextService}
    className="h-9 w-9 flex items-center justify-center rounded-full 
               border border-white text-white"
  >
    →
  </button>

</div>


  {/* VIDEO GRID */}
  <div
    className={`
      max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-500 relative z-20
      ${
        isAnimating
          ? direction === "left"
            ? "opacity-0 -translate-x-10"
            : "opacity-0 translate-x-10"
          : "opacity-100 translate-x-0"
      }
    `}
  >
    {serviceVideos[activeService].map((item, index) => (
      <div
        key={index}
        className="group relative rounded-3xl overflow-hidden bg-white/40 backdrop-blur-xl
          shadow-[0_8px_25px_rgba(0,0,0,0.1)] border border-[#E0ECF7]
          transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]
        "
        style={{ aspectRatio: '9/16' }}
      >
        <video
          src={item.url}
          autoPlay
          loop
          playsInline
          muted={!soundOn[index]}
          className="w-full h-full object-cover transition duration-700 group-hover:scale-[1.05]"
        />

        {/* Views */}
        <div className="absolute bottom-3 left-3 bg-black/60 px-3 py-1 rounded-full text-xs text-white backdrop-blur flex gap-1">
          <svg width="14" height="14" stroke="white" strokeWidth="2">
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
            <polyline points="16 7 22 7 22 13" />
          </svg>
          <span>{item.views}</span>
        </div>

        {/* Sound */}
        <button
          onClick={() => toggleSound(index)}
          className="absolute top-3 right-3 bg-black/50 p-2 rounded-full shadow-md backdrop-blur hover:bg-black/70 transition"
        >
          {soundOn[index] ? iconUnmute : iconMute}
        </button>
      </div>
    ))}
  </div>
</section>



{/* =============================== */}
{/*        WHAT WE OFFER SECTION     */}
{/* =============================== */}

<section ref={servicesSectionRef} className="py-18 md:py-24 px-6">
  <div className="max-w-7xl mx-auto text-center">
    <p className="text-[#0E6388] font-semibold tracking-wide mb-2">
      → Our Services
    </p>

    <h2 className="text-3xl md:text-5xl font-extrabold text-[#063349]">
      What We Bring
      <span className="text-[#0E6388]"> to the Table</span>
    </h2>

    <p className="text-[#063349]/80 text-lg max-w-2xl mx-auto mt-4">
      Innovation, design, and marketing that work together for you.
    </p>

    {/* SERVICES */}
    <div
      ref={sliderRef}
      className="
        flex md:grid
        gap-6 md:gap-12
        mt-16
        overflow-x-auto md:overflow-visible
        snap-x snap-mandatory
        md:grid-cols-2 lg:grid-cols-3
        scrollbar-hide
      "
    >
      {[
        {
          title: "Social Media Marketing",
          icon: (
            <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
              <path d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9A4.5 4.5 0 0 1 16.5 21h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3z" />
              <circle cx="12" cy="12" r="3.5" />
            </svg>
          ),
          desc: "Monthly content, audience growth & brand positioning.",
          points: [
            "Content calendars & reel planning",
            "Brand awareness & engagement growth",
            "Community building & retention",
          ],
        },
        {
          title: "Branding & Identity",
          icon: (
            <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
              <path d="M12 2l8 4v6c0 5-3 9-8 10-5-1-8-5-8-10V6l8-4z" />
            </svg>
          ),
          desc: "Logos, visual identity systems & brand tone development.",
          points: [
            "Brand strategy & storytelling",
            "Logo, typography & color palette",
            "Brand guidelines documentation",
          ],
        },
        {
          title: "Influencer Marketing",
          icon: (
            <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
              <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm-7 9v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1" />
            </svg>
          ),
          desc: "Creator collaborations designed to boost reach & trust.",
          points: [
            "Campaign influencer matchmaking",
            "Negotiation & content approvals",
            "Performance tracking & reporting",
          ],
        },
        {
          title: "Video Editing",
          icon: (
            <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
              <path d="M15 10l4.553-2.276A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-1.447.894L15 14" />
              <rect x="3" y="7" width="12" height="10" rx="2" />
            </svg>
          ),
          desc: "Ads, reels & high-impact content crafted to convert.",
          points: [
            "Short-form reels with motion graphics",
            "UGC editing for ads",
            "High-retention storytelling edits",
          ],
        },
        {
          title: "UGC Creation",
          icon: (
            <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="4" />
              <path d="M4 12h2m12 0h2m-8 8v-2m0-12V4" />
            </svg>
          ),
          desc: "Authentic creator-led content for trust & conversion.",
          points: [
            "Product demo & review videos",
            "Story-style testimonial videos",
            "Scripts + shooting guidance",
          ],
        },
        {
          title: "Photography & Shoots",
          icon: (
            <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <circle cx="8" cy="10" r="2.5" />
              <path d="M21 15l-3.5-3.5L13 16" />
            </svg>
          ),
          desc: "Product, food & brand shoots to elevate your visuals.",
          points: [
            "Creative shot planning",
            "Lifestyle + product photography",
            "Studio & outdoor shoots",
          ],
        },
      ].map((service, idx) => (
        <div
          key={idx}
          className="
            min-w-[85%] sm:min-w-[70%] md:min-w-0
            snap-center
            rounded-3xl p-10
            bg-white/10 backdrop-blur-xl
            shadow-[0_12px_35px_rgba(0,0,0,0.10)]
            border border-white/20
            text-white flex flex-col justify-between
            hover:shadow-[0_20px_45px_rgba(0,0,0,0.18)]
            hover:-translate-y-2 transition-all duration-300
            min-h-[400px]
          "
          style={{ background: "rgb(14, 99, 136)" }}
        >
          {/* ICON */}
          <div className="w-16 h-16 mx-auto rounded-2xl bg-white/20 flex items-center justify-center mb-6">
            {service.icon}
          </div>

          <h3 className="text-xl font-extrabold mb-3 text-center">
            {service.title}
          </h3>

          <p className="text-white/85 text-sm text-center">
            {service.desc}
          </p>

          <ul className="text-white/80 text-sm mt-4 space-y-1 text-left mx-auto w-[85%]">
            {service.points.map((p, i) => (
              <li key={i} className="flex gap-2">
                <span>•</span> {p}
              </li>
            ))}
          </ul>

          <a
            href="/contact"
            className="mt-6 w-full py-3 rounded-full text-center font-semibold bg-white text-[#063349]"
          >
            Start Project →
          </a>
        </div>
      ))}
    </div>
  </div>
</section>




        {/* =============================== */}
        {/*     CLIENT RESULTS SECTION      */}
        {/* =============================== */}
      <HomeClientGallery/>

{/* =============================== */}
{/*   THE NUMBERS THAT MATTER       */}
{/* =============================== */}
<section className="relative py-20 pb-12 px-6 bg-[#1175a0] overflow-hidden">
  <div className="max-w-7xl mx-auto text-center text-white relative z-10">
    
    <p className="font-semibold tracking-wide mb-2 opacity-90">
      → Performance Stats
    </p>

    <h2 className="text-3xl md:text-5xl font-extrabold text-[#063349]">
      Impact in <span className="text-white/90">Every Digit</span>
    </h2>

    <p className="text-white/80 text-lg max-w-3xl mx-auto mt-4">
      Powerful insights, measurable growth, and undeniable results for your brand.
    </p>

    {/* ================= MOBILE ONLY — AUTO SLIDE ================= */}
    <div className="sm:hidden mt-14 flex justify-center">
      <motion.div
        key={activeStat}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="
          w-full max-w-[320px]
          rounded-3xl p-8
          bg-white/15 backdrop-blur-xl
          border border-white/20
          shadow-xl text-white
          text-center
        "
      >
        <h3 className="text-4xl font-extrabold">
          {stats[activeStat].value}
        </h3>

        <p className="text-lg mt-2 font-semibold">
          {stats[activeStat].label}
        </p>

        <p className="text-white/70 text-sm mt-3 leading-relaxed">
          {stats[activeStat].desc}
        </p>
      </motion.div>
    </div>

    {/* ================= DESKTOP ONLY — GRID ================= */}
    <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="
            rounded-3xl p-10
            bg-white/15 backdrop-blur-xl
            border border-white/20
            shadow-xl text-white
          "
        >
          <h3 className="text-4xl font-extrabold">
            <SmartCounter value={stat.value} />
          </h3>

          <p className="text-lg mt-1 font-semibold">{stat.label}</p>

          <p className="text-white/70 text-sm mt-3 leading-relaxed">
            {stat.desc}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>


        
        {/* WAVE AT BOTTOM */}
<div className="w-full overflow-hidden leading-none -mt-[1px]">
  <svg viewBox="0 0 1440 200" className="w-full">
    <path
      fill="#1175a0"
      d="
        M0,160
        C360,220 720,100 1080,160
        C1260,190 1440,170 1440,170
        L1440,0
        L0,0
        Z
      "
    />
  </svg>
</div>






{/* =============================== */}
{/*        HOW WE WORK SECTION       */}
{/* =============================== */}

{/* ================= MOBILE — HOW WE WORK SLIDER ================= */}
<section className="sm:hidden py-14 px-4 relative overflow-hidden">

  {/* Header */}
  <div className="text-center mb-10">
    <p className="text-[#0E6388] font-semibold tracking-wide mb-2">
      → Our Process
    </p>

    <h2 className="text-3xl font-extrabold text-[#063349]">
      How We <span className="text-[#0E6388]">Work</span>
    </h2>

    <p className="text-[#063349]/70 mt-3 text-sm leading-relaxed">
      A simple, structured process that drives real growth.
    </p>
  </div>

  {/* Slider */}
  <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide">

    {[
      {
        step: "01",
        title: "Deep Brand Understanding",
        img: "/work1.jpg",
        points: ["12+ Hr Brand Study", "Competitor Mapping", "Brand Audit"],
      },
      {
        step: "02",
        title: "Strategy Framework",
        img: "/work2.jpg",
        points: [
          "Content Strategy Map",
          "Channel Funnel Setup",
          "30-Day Execution Plan",
        ],
      },
      {
        step: "03",
        title: "Impactful Execution",
        img: "/work3.jpg",
        points: [
          "UGC + Reels + Graphics",
          "Brand Storytelling",
          "Design & Copy",
        ],
      },
      {
        step: "04",
        title: "Scale & Optimize",
        img: "/work4.jpg",
        points: [
          "Weekly A/B Testing",
          "Performance Tracking",
          "Audience Insights",
        ],
      },
    ].map((item, i) => (
      <div
        key={i}
        className="
          min-w-[88%]
          snap-center
          bg-white
          rounded-3xl
          shadow-xl
          overflow-hidden
        "
      >
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-[220px] object-cover"
        />

        <div className="p-6">
          <span className="inline-block bg-[#0E6388] text-white text-xs font-bold px-4 py-1 rounded-full mb-3">
            Step {item.step}
          </span>

          <h3 className="text-xl font-extrabold text-[#0E6388] mb-3">
            {item.title}
          </h3>

          <ul className="space-y-2 text-[#063349]/85 text-sm">
            {item.points.map((p, idx) => (
              <li key={idx} className="flex gap-2">
                <span className="text-[#0E6388]">•</span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </div>
</section>

        
        {/* ================= DESKTOP / TABLET — HOW WE WORK ================= */}
<section className="hidden sm:block relative overflow-hidden py-20 px-6">

  {/* Background blurs */}
  <div className="absolute top-10 left-0 w-64 h-64 bg-[#0E6388]/10 rounded-3xl blur-3xl"></div>
  <div className="absolute bottom-10 right-0 w-72 h-72 bg-[#4EB3D8]/10 rounded-3xl blur-3xl"></div>

  <div className="max-w-7xl mx-auto relative z-10">

    {/* Header */}
    <div className="text-center mb-20">
      <p className="text-[#0E6388] font-semibold tracking-wide mb-2">
        → Our Process
      </p>

      <h2 className="text-4xl md:text-5xl font-extrabold text-[#063349]">
        How We <span className="text-[#0E6388]">Work</span>
      </h2>

      <p className="text-[#063349]/70 mt-4 max-w-3xl mx-auto text-lg">
        From discovery to delivery, our proven workflow ensures clarity,
        creativity, and measurable growth.
      </p>
    </div>

    {[
      {
        step: "01",
        title: "Deep Brand Understanding",
        img: "/work1.jpg",
        points: ["12+ Hr Brand Study", "Competitor Mapping", "Brand Audit"],
      },
      {
        step: "02",
        title: "Communication & Strategy Framework",
        img: "/work2.jpg",
        points: [
          "Content Strategy Map",
          "Channel Funnel Setup",
          "30-Day Execution Plan",
          "CTA Path",
        ],
        reverse: true,
      },
      {
        step: "03",
        title: "Impactful Execution",
        img: "/work3.jpg",
        points: [
          "UGC + Reels + Graphics",
          "Brand Storytelling",
          "Design & Copywriting",
        ],
      },
      {
        step: "04",
        title: "Streamline & Scale Up",
        img: "/work4.jpg",
        points: [
          "Weekly A/B Testing",
          "Performance Tracking",
          "Scale Growth Systems",
        ],
        reverse: true,
      },
    ].map((item, i) => (
      <div
        key={i}
        className="grid md:grid-cols-2 gap-14 items-center mb-24"
      >
        {/* IMAGE */}
        <div
          className={`relative ${
            item.reverse ? "md:order-2" : "md:order-1"
          }`}
        >
          <div
            className={`absolute inset-0 bg-[#0E6388] rounded-3xl ${
              item.reverse ? "rotate-[4deg]" : "rotate-[-4deg]"
            }`}
          ></div>

          <img
            src={item.img}
            alt={item.title}
            className="relative z-10 rounded-3xl shadow-xl object-cover"
          />
        </div>

        {/* TEXT */}
        <div
          className={`${item.reverse ? "md:order-1" : "md:order-2"}`}
        >
          <span className="inline-block bg-[#0E6388] text-white px-4 py-1.5 rounded-full font-bold mb-4">
            Step {item.step}
          </span>

          <h3 className="text-3xl font-extrabold text-[#0E6388] mb-4">
            {item.title}
          </h3>

          <ul className="space-y-3 text-[#063349]/85 text-base">
            {item.points.map((p, idx) => (
              <li key={idx}>• {p}</li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </div>
</section>


        

                {/* =============================== */}
        {/*        WHY CHOOSE US SECTION     */}
        {/* =============================== */}

        <section className="py-8 md:py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-[#0E6388] font-semibold tracking-wide mb-2">
              → Why Choose Us
            </p>

            <h2 className="text-3xl md:text-5xl font-extrabold text-[#063349]">
           The Trust Behind 

 
 <span className="text-[#0E6388]">  Our Work</span>
            </h2>

         {/* CARDS */}
<div
  className="
    flex md:grid
    gap-6 md:gap-8
    mt-12 md:mt-16
    overflow-x-auto md:overflow-visible
    snap-x snap-mandatory
    md:grid-cols-3
    scrollbar-hide
  "
>
  {[
    {
      title: "Proven Expertise",
      desc: "Years of experience and a track record of delivering measurable results across industries.",
    },
    {
      title: "Reliable Partnerships",
      desc: "We build long-term relationships based on transparency, consistency, and mutual growth.",
    },
    {
      title: "Data-Driven Approach",
      desc: "Every decision is backed by insights, ensuring strategies that perform and scale effectively.",
    },
  ].map((card, i) => (
    <div
      key={i}
      className="
        min-w-[90%] sm:min-w-[70%] md:min-w-0
        snap-center
        rounded-3xl p-8 md:p-10
        bg-white
        md:shadow-[0_8px_25px_rgba(0,0,0,0.1)]
        border border-[#E2EFF7]
        transition-transform duration-300
      "
    >
      <h3 className="text-xl font-bold text-[#063349] mb-3">
        {card.title}
      </h3>

      <p className="text-[#063349]/80 text-sm leading-relaxed">
        {card.desc}
      </p>
    </div>
  ))}
</div>

          </div>
        </section>



        {/* =============================== */}
        {/*        FAQ SECTION               */}
        {/* =============================== */}

        <section className="py-8 md:py-20 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14">
            {/* LEFT TITLE */}
            <div className="flex flex-col justify-center">
              <p className="text-[#0E6388] font-semibold tracking-wide mb-3">
                → FAQ's
              </p>

              <h2 className="text-3xl md:text-5xl font-extrabold text-[#063349]">
                Everything You Should
                <br />
                <span className="text-[#0E6388]">Know Before Starting</span>
              </h2>
            </div>

            {/* FAQ LIST */}
            <div className="space-y-5">
              {[
                {
                  q: "How long does it take to see results?",
                  a: "Most brands begin seeing momentum within 4–6 weeks, depending on the level of execution, industry and campaign type.",
                },
                {
                  q: "Do you offer individual services?",
                  a: "Yes! You can choose individual services like SMM, Branding, UGC, Photography or a custom package.",
                },
                {
                  q: "How do I track campaign performance?",
                  a: "We share dashboards, monthly reports & insights on reach, engagement, conversions and ROI.",
                },
                {
                  q: "What makes Bluenose different?",
                  a: "Our mix of strategy, creative execution and performance-driven systems sets us apart.",
                },
              ].map((faq, i) => (
                <details
                  key={i}
                  className="bg-white border rounded-2xl p-5 shadow-sm cursor-pointer"
                >
                  <summary className="text-lg font-semibold text-[#063349]">
                    {faq.q}
                  </summary>

                  <p className="mt-3 text-sm text-[#063349]/80 leading-relaxed">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

{/* =============================== */}
{/*        CONTACT SECTION           */}
{/* =============================== */}
{/* TOP WAVE */}
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


<section className="relative pb-20 px-6 bg-[#1175a0] overflow-hidden -mt-[2px]">


  {/* Background glow */}
  <div className="absolute inset-0 bg-[#0E6388]/20 blur-3xl"></div>

  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start relative z-10 text-white">

    {/* LEFT SIDE */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6 mt-2"
    >
      <p className="text-white font-semibold tracking-wide">→ Contact Us</p>

      <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#063349]">
        Let’s Build Something <br />
        <span className="text-white/90">Powerful Together</span>
      </h2>

      <p className="text-white/90 text-lg max-w-md">
        Ready to grow your brand? Let’s create high-performance content,
        marketing systems and branding that scale.
      </p>

      <div className="space-y-6 text-left">
                  {/* EMAIL */}
                  <a href="mailto:sales@bluenosemarketing.com" className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-white" />
                    <span className="text-sm text-white/90">sales@bluenosemarketing.com</span>
                  </a>

                  {/* PHONE */}
                  <a href="tel:+19027189007" className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-white" />
                    <span className="text-sm text-white/90">+1 902-718-9007</span>
                  </a>

                  {/* ADDRESS */}
                  <a
                    href="https://maps.google.com/?q=19 Alma Crescent, Halifax, Canada"
                    target="_blank"
                    className="flex items-center gap-4"
                  >
                    <MapPin className="w-6 h-6 text-white" />
                    <span className="text-sm text-white/90">19 Alma Crescent, Halifax, Canada</span>
                  </a>
                </div>

    </motion.div>

    {/* RIGHT FORM */}
    <motion.form
      onSubmit={sendMessage}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="
        bg-white/15 backdrop-blur-xl p-10 rounded-3xl shadow-xl 
        border border-white/20 space-y-6
      "
    >
      {/* NAME */}
      <div>
        <label className="text-white text-sm">Your Name *</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          className="mt-1 w-full p-3 rounded-xl bg-white/20 text-white placeholder-white/60 outline-none"
          placeholder="John Doe"
        />
        {errors.name && <p className="text-red-300 text-xs">{errors.name}</p>}
      </div>

      {/* EMAIL */}
      <div>
        <label className="text-white text-sm">Email *</label>
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          className="mt-1 w-full p-3 rounded-xl bg-white/20 text-white placeholder-white/60 outline-none"
          placeholder="example@mail.com"
        />
        {errors.email && <p className="text-red-300 text-xs">{errors.email}</p>}
      </div>

      {/* PHONE */}
      <div>
        <label className="text-white text-sm">Phone</label>
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          className="mt-1 w-full p-3 rounded-xl bg-white/20 text-white placeholder-white/60 outline-none"
          placeholder="Your number"
        />
      </div>

      {/* SERVICE */}
      <div>
        <label className="text-white text-sm">Service Needed *</label>
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          className="mt-1 w-full p-3 rounded-xl bg-white/20 text-white/90 outline-none"
        >
          <option value="">Select a service</option>
          <option value="Social Media Marketing">Social Media Marketing</option>
          <option value="Branding">Branding</option>
          <option value="Influencer Marketing">Influencer Marketing</option>
          <option value="Video Editing">Video Editing</option>
          <option value="UGC Content">UGC Content</option>
          <option value="Photography">Photography</option>
        </select>
        {errors.service && <p className="text-red-300 text-xs">{errors.service}</p>}
      </div>

      {/* MESSAGE */}
      <div>
        <label className="text-white text-sm">Message</label>
        <textarea
          name="message"
          rows="4"
          value={form.message}
          onChange={handleChange}
          className="mt-1 w-full p-3 rounded-xl bg-white/20 text-white placeholder-white/60 outline-none"
          placeholder="Tell us about your project..."
        ></textarea>
      </div>

      {/* SUBMIT */}
      <button
        type="submit"
        className="w-full py-3 rounded-xl bg-[#0E6388] hover:bg-[#0c5473] transition 
                   text-white font-semibold text-lg shadow flex items-center justify-center gap-2"
      >
        {loading ? "Sending..." : "Send Message"}
        <Send size={18} />
      </button>

      {/* SUCCESS */}
      {success && (
        <p className="text-green-200 bg-white/10 p-3 rounded-lg text-sm text-center">
          {success}
        </p>
      )}
    </motion.form>
  </div>
</section>


        {/* =============================== */}
        {/*        END WRAPPER               */}
        {/* =============================== */}
      </div>
    </>
  );
}

// INTERNAL COMPONENT (no export)
function HowWeWorkSlider() {
  const steps = [
    {
      num: "01",
      title: "Deep Brand Understanding",
      points: [
        "12+ Hr Brand Study",
        "Competitor Mapping",
        "Tone & Persona Discovery",
        "Brand Audit",
      ],
    },
    {
      num: "02",
      title: "Messaging & Strategy Blueprint",
      points: [
        "Content Strategy Map",
        "Channel Funnel Setup",
        "30-Day Execution Plan",
        "CTA + Conversion Path",
      ],
    },
    {
      num: "03",
      title: "Creative Execution",
      points: [
        "High-Quality Creatives",
        "UGC + Reels + Graphics",
        "Brand Story Elements",
        "Design + Copywriting",
      ],
    },
    {
      num: "04",
      title: "Optimize & Scale",
      points: [
        "Weekly A/B Testing",
        "Performance Tracking",
        "Audience Insights",
        "Scale Growth Systems",
      ],
    },
  ];

  const [current, setCurrent] = React.useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % steps.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + steps.length) % steps.length);

  return (
    <div className="max-w-6xl mx-auto mt-16 relative">
      {/* Arrows */}
      <div className="absolute -left-4 top-1/2 -translate-y-1/2 hidden md:block">
        <button
          onClick={prev}
          className="p-4 rounded-full bg-[#0E6388] text-white shadow-lg hover:bg-[#0c5473]"
        >
          ←
        </button>
      </div>

      <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden md:block">
        <button
          onClick={next}
          className="p-4 rounded-full bg-[#0E6388] text-white shadow-lg hover:bg-[#0c5473]"
        >
          →
        </button>
      </div>

      {/* CARD */}
      <div className="overflow-hidden">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.5 }}
          className="
            rounded-3xl p-12
            bg-[#0E6388]
            text-white
            shadow-[0_12px_35px_rgba(0,0,0,0.15)]
          "
        >
          <p className="text-6xl font-extrabold opacity-90">
            {steps[current].num}
          </p>

          <h3 className="text-3xl font-bold mt-3">{steps[current].title}</h3>

          <ul className="mt-6 space-y-2 text-white/90 text-[16px]">
            {steps[current].points.map((p, i) => (
              <li key={i}>• {p}</li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* DOTS */}
      <div className="flex justify-center gap-3 mt-8">
        {steps.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition ${
              current === i ? "bg-[#0E6388]" : "bg-[#A7C9DA]"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}