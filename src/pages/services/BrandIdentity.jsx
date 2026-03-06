import { useState } from "react";
// import PricingPlans from "../../components/DetailedServiceComponents/PricingPlans";
import Testimonials from "../../components/DetailedServiceComponents/Testimonials";
import ServiceClientLogos from "../../components/DetailedServiceComponents/ServiceClientLogos";
import PlatformSlider from "../../components/PlatformSlider";
import { Link } from "react-router-dom";
import GrowthChart from "../../components/DetailedServiceComponents/GrowthChart";
import ServiceVideosSection from "../../components/DetailedServiceComponents/ServiceVideosSection";
import { Helmet } from "react-helmet-async";



export default function BrandIdentity() {

  const brandingVideos = [
  { 
    url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414238/Personal_Branding_1_abmcg7.mov",
    views: "10.1K"
  },
  { 
    url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414238/Personal_Branding_2_ejoaet.mov",
    views: "7.3K"
  },
  { 
    url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414240/Personal_Branding_3_rvlgjk.mov",
    views: "4.9K"
  },
  { 
    url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1765454631/branding4_bduckl.mp4",
    views: "12.2K"
  },
];


  // ------------------ GROWTH CHART DATA ------------------

  const awarenessData = [
    { name: "Jan", value: 22 },
    { name: "Feb", value: 35 },
    { name: "Mar", value: 48 },
    { name: "Apr", value: 78 },
  ];

  const recallData = [
    { name: "Jan", value: 12 },
    { name: "Feb", value: 24 },
    { name: "Mar", value: 38 },
    { name: "Apr", value: 52 },
  ];

  const engagementData = [
    { name: "Jan", value: 15 },
    { name: "Feb", value: 22 },
    { name: "Mar", value: 31 },
    { name: "Apr", value: 41 },
  ];

  // ------------------ BARRIER CARD ------------------

  function BarrierCard({ title, desc }) {
    const [open, setOpen] = useState(false);

    return (
      <div
        onClick={() => setOpen(!open)}
        className="
          group p-8 rounded-2xl cursor-pointer
        
          text-white shadow-xl transition-all duration-300
          hover:-translate-y-2
        "
        style={{
    background: "rgb(14, 99, 136)"
  }}
      >
        <p className="font-semibold text-lg">{title}</p>

        <div
          className={`
            mt-4 overflow-hidden rounded-xl bg-white text-[#063349] p-4 
            transition-all duration-300

            md:max-h-0 md:opacity-0 
            md:group-hover:max-h-40 md:group-hover:opacity-100

            ${open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <p className="text-sm">{desc}</p>
        </div>
      </div>
    );
  }

  return (
    <>
<Helmet>
  {/* PRIMARY SEO */}
  <title>
    Brand Identity & Branding Services | Bluenose Marketing
  </title>

  <meta
    name="description"
    content="Build a powerful brand identity with Bluenose Marketing. We design logos, visual systems, brand messaging, and identity strategies that boost recognition, trust, and engagement."
  />

  <meta
    name="keywords"
    content="brand identity services, branding agency, logo design, brand strategy, visual identity, brand positioning, brand storytelling, digital branding, Bluenose Marketing"
  />

  {/* CANONICAL */}
  <link
    rel="canonical"
    href="https://www.bluenosemarketing.ca/services/brand-identity"
  />

  {/* OPEN GRAPH */}
  <meta
    property="og:title"
    content="Brand Identity & Branding Services | Bluenose Marketing"
  />
  <meta
    property="og:description"
    content="Strategic brand identity design combining visuals, storytelling, and psychology to help brands stand out and grow."
  />
  <meta
    property="og:type"
    content="website"
  />
  <meta
    property="og:url"
    content="https://www.bluenosemarketing.ca/services/brand-identity"
  />
  <meta
    property="og:image"
    content="https://www.bluenosemarketing.ca/seo/brand-identity-cover.jpg"
  />

  {/* TWITTER */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Brand Identity & Branding Services | Bluenose Marketing"
  />
  <meta
    name="twitter:description"
    content="Create a memorable brand identity that builds trust, recognition, and long-term growth."
  />
  <meta
    name="twitter:image"
    content="https://www.bluenosemarketing.ca/seo/brand-identity-cover.jpg"
  />
</Helmet>


    <div className="bg-white text-[#0E3D55] pt-10">

      {/* ===================== HERO ========================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

            <h2 className="text-3xl md:text-4xl font-extrabold text-[#063349]">
           Brand Identity That Gets Noticed 
 <span className="text-[#0E6388]">
              {" "} Across All Platforms </span>
          </h2>

          <p className="text-[#0A3A53]/80 text-lg mt-4 max-w-4xl mx-auto">
            Through expert design, compelling storytelling, and proven brand psychology, we create premium brand identities that are unforgettable and build strong emotional connections.

          </p>

        </div>
      </section>

      {/* ===================== GROWTH CHARTS ========================= */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-10 place-items-center">

            <GrowthChart
              title="Brand Awareness Lift"
              percent="+78%"
              data={awarenessData}
              gradientId="brandAwareness"
            />

            <GrowthChart
              title="Customer Recall Improvement"
              percent="+52%"
              data={recallData}
              gradientId="brandRecall"
            />

            <GrowthChart
              title="Brand Engagement & Interactions"
              percent="+41%"
              data={engagementData}
              gradientId="brandEngagement"
            />

          </div>

          {/* CTA BUTTON */}
          <div className="flex justify-center mt-14">
            <Link
              to="/contact"
              className="px-7 py-3 text-lg rounded-full  text-white hover:opacity-90"
              style={{
    background: "rgb(14, 99, 136)"
  }}
            >
              Contact Us Now →
            </Link>
          </div>

        </div>
      </section>

      {/* ===================== CLIENT LOGOS ========================= */}
      <section className="w-full bg-white flex justify-center ">
        <div className="w-[100%]">
          <ServiceClientLogos />
        </div>
      </section>

      {/* ===================== BARRIERS SECTION ========================= */}
      <section className="pt-15 md:pt-20">
                   <h2 className="text-3xl md:text-4xl font-extrabold text-[#063349] text-center mb-14">

         Challenges Brands Faced Before Partnering {" "}
          <span className=" text-[#0E6388]">
            With Bluenose Marketing
          </span>
        </h2>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-6 px-8">
  {[
    {
      title: "Brand lacked a clear and consistent identity across platforms",
      desc: "We develop cohesive brand identities for seamless, cross-platform recognition.",
    },
    {
      title: "Logo didn’t reflect the business personality or positioning",
      desc: "Our designers create logos that capture your brand’s unique values and market position.",
    },
    {
      title: "No unified color palette or typography system",
      desc: "We establish strategic color palettes and typography for consistent brand visuals.",
    },
    {
      title: "Messaging felt generic and didn’t resonate with the audience",
      desc: "We craft targeted brand messaging that connects with your ideal customers.",
    },
    {
      title: "Low brand recall due to inconsistent visual assets",
      desc: "We standardize visual assets for strong, memorable brand recognition.",
    },
    {
      title: "Outdated or DIY branding limiting credibility",
      desc: "We deliver modern, professional branding that builds trust and authority.",
    },
    {
      title: "Visual identity disconnected from target audience expectations",
      desc: "We align brand visuals with audience insights for maximum relevance.",
    },
    {
      title: "No proper brand guidelines for internal or external alignment",
      desc: "We create comprehensive brand guidelines for consistent team and partner use.",
    },
    {
      title: "Competitors appeared more premium and memorable",
      desc: "We elevate your brand with premium design and standout differentiation.",
    },
  ].map((item, idx) => (
    <BarrierCard key={idx} title={item.title} desc={item.desc} />
  ))}
</div>

      </section>

      {/* ===================== WHAT SETS US APART ========================= */}
      <PlatformSlider />

      {/* ===================== PRICING ========================= */}
      {/* <PricingPlans /> */}

      {/* ===================== TESTIMONIALS ========================= */}
          <section className=" py-5 md:py-20">

        <div className="max-w-7xl mx-auto px-8 text-center">
                      <h2 className="text-3xl md:text-4xl font-extrabold text-[#063349]">

          Reviews That Speak. 
{" "}
            <span className="text-[#0E6388]">
             Ratings That Shine.
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 md:mt-16">
            {/* LEFT CARD */}
            <div className="bg-white p-10 rounded-3xl shadow-[0_8px_25px_rgba(0,0,0,0.08)] text-left flex flex-col">
              
              <div className="flex items-center justify-between">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#111]">Bluenose</h2>
                <Link 
                  to="/about"
                  className="text-sm text-[#0E3D55] underline hover:text-[#0E6388]"
                >
                  View our profile
                </Link>
              </div>

              <div className="mt-4 flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-bold text-[#111]">4.9</span>
                <span className="text-yellow-400 text-xl sm:text-2xl">★★★★★</span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mt-6">
                {["High-quality work", "Timely", "Communicative", "Professional", "Project Management"]
                  .map((tag, i) => (
                    <span 
                      key={i} 
                      className="bg-[#F3F4F6] text-[#111] px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))
                }
              </div>

            </div>

            {/* RIGHT CARD */}
            <Testimonials />

          </div>
        </div>
      </section>
<ServiceVideosSection 
  title="Branding & Identity"
  videos={brandingVideos}
/>

      </div>
      </>
  );
}
