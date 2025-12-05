import { useState } from "react";
import PricingPlans from "../../components/DetailedServiceComponents/PricingPlans";
import Testimonials from "../../components/DetailedServiceComponents/Testimonials";
import ServiceClientLogos from "../../components/DetailedServiceComponents/ServiceClientLogos";
import PlatformSlider from "../../components/PlatformSlider";
import ReviewSummaryCard from "../../components/DetailedServiceComponents/ReviewSummaryCard";
import { Link } from "react-router-dom";
import GrowthChart from "../../components/DetailedServiceComponents/GrowthChart";
import ServiceVideosSection from "../../components/DetailedServiceComponents/ServiceVideosSection";

export default function SMM() {
  
  const smmVideos = [
  { 
    url:"https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414584/SMM_1_ew5mpu.mov", 
    views: "12.4K" 
  },
  { 
    url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414604/SMM_2_et8fyi.mov", 
    views: "8.9K" 
  },
  { 
    url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414663/SMM_5_vlimnn.mp4" ,
    views: "15.2K" 
  },
  { 
    url: "/videos/smm4.mp4",  
    views: "5.7K" 
  },
];
  
  const ecommerceData  = [
    { name: "Jan", value: 20 },
    { name: "Feb", value: 32 },
    { name: "Mar", value: 45 },
    { name: "Apr", value: 60 },
  ];

  const realEstateData = [
    { name: "Jan", value: 5 },
    { name: "Feb", value: 12 },
    { name: "Mar", value: 28 },
    { name: "Apr", value: 40 },
  ];

  const restaurantData = [
    { name: "Jan", value: 10 },
    { name: "Feb", value: 18 },
    { name: "Mar", value: 26 },
    { name: "Apr", value: 31 },
  ];

  function BarrierCard({ title, desc }) {
    const [open, setOpen] = useState(false);

    return (
      <div
        onClick={() => setOpen(!open)}
        className="
        group p-8 rounded-2xl cursor-pointer
        bg-gradient-to-br from-[#4BC1E8] to-[#0E6388]
        text-white shadow-xl transition-all duration-300
        hover:-translate-y-2
      "
      >
        <p className="font-semibold text-lg">{title}</p>

        <div
          className={`
          mt-4 overflow-hidden rounded-xl bg-white text-[#063349] p-4 
          transition-all duration-300
          md:max-h-0 md:opacity-0 md:group-hover:max-h-40 md:group-hover:opacity-100
          ${open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
        `}
        >
          <p className="text-sm">{desc}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white text-[#0E3D55]">
      {/* ✦ HERO */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1
            className="text-3xl sm:text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text
      bg-gradient-to-r from-[#0E3D55] via-[#0F587A] to-[#11719A] leading-tight"
          >
            Turn Followers into Customers with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4BC1E8] to-[#0E6388]">
              {" "}
              Social Media Team
            </span>{" "}
            You Can Rely On
          </h1>

          <p className="text-[#0A3A53]/80 text-lg mt-4 max-w-2xl mx-auto">
            Instagram, LinkedIn, TikTok, YouTube & more. Data-led campaigns,
            creative execution & full-funnel systems built to scale.
          </p>
        </div>
      </section>

      {/* Growth Chart */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10">
            <GrowthChart
              title="E-commerce Revenue"
              percent="+60%"
              data={ecommerceData}
              gradientId="ecomGradient"
            />

            <GrowthChart
              title="Real Estate Leads"
              percent="+40%"
              data={realEstateData}
              gradientId="realEstateGradient"
            />

            <GrowthChart
              title="Restaurant & Retail"
              percent="+32%"
              data={restaurantData}
              gradientId="foodGradient"
            />
          </div>

          {/* CENTERED BUTTON */}
          <div className="flex justify-center mt-14">
            <Link
              to="/contact"
              className="px-7 py-3 text-lg rounded-full bg-gradient-to-r 
                   from-[#4BC1E8] to-[#0E6388] text-white hover:opacity-90"
            >
              Contact Us Now →
            </Link>
          </div>
        </div>
      </section>

      {/* ✦ CLIENT LOGOS WHITE SECTION */}
      <section className="w-full bg-white flex justify-center ">
        <div className="w-[100%] md:w-[100%] lg:w-[100%]">
          <ServiceClientLogos />
        </div>
      </section>

      {/* ✦ BARRIERS SECTION — Blue Cards */}
      <section className="pt-15 md:pt-20">
         <h2 className="text-3xl sm:text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#0E3D55] via-[#0F587A] to-[#11719A] leading-tight text-center mb-14" >
            {" "}
            Barriers to Success Before{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4BC1E8] to-[#0E6388]">
              {" "}
              Working With Us{" "}
            </span>{" "}
          </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto md:mt-10 px-8">
         
          {[
            {
              title: "Social media wasn’t delivering measurable results.",
              desc: "We build result-led systems using content, analytics, and weekly optimisation.",
            },
            {
              title: "Uncertainty around which campaigns converted",
              desc: "Every campaign includes reporting so clients always know what drives performance.",
            },
            {
              title: "Low engagement despite consistent posting.",
              desc: "We create content built for reach: storytelling, hooks, and platform-led formats.",
            },
            {
              title: "Limited time/expertise to manage social media",
              desc: "We take full ownership—strategy, content, posting, analytics, everything.",
            },
            {
              title: "Brand presence wasn’t consistent across platforms",
              desc: "We unify your brand voice across all platforms with a structured content system.",
            },
            {
              title: "Generic agency solutions that didn't convert",
              desc: "Every strategy is custom, based on your business niche + customer behavior.",
            },
            {
              title: "Needed scalable growth systems",
              desc: "Our social systems scale month-over-month using content + paid integration.",
            },
            {
              title: "Operating in niche/complex industries",
              desc: "We specialise in creating content strategies even for high-complexity markets.",
            },
            {
              title: "Didn’t know which platforms to prioritise",
              desc: "We map the right platforms based on audience data, not assumptions.",
            },
          ].map((item, idx) => (
            <BarrierCard key={idx} title={item.title} desc={item.desc} />
          ))}
        </div>
      </section>

      {/* ✦ WHAT SETS US APART — Image Left + Blue Card Right */}
      <PlatformSlider />

      {/* ✦ PRICING (FULL WIDTH) */}
      <PricingPlans />

      {/* ✦ TESTIMONIALS SECTION — White card + Blue slider */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8 text-center">
          {/* Heading */}
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold 
      text-transparent bg-clip-text bg-gradient-to-r 
      from-[#0E3D55] via-[#0F587A] to-[#11719A] leading-tight"
          >
            Our rating based on 2 verified
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r 
        from-[#4BC1E8] to-[#0E6388]"
            >
              {" "}
              client reviews
            </span>
          </h2>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
            {/* LEFT CARD */}
            <div
              className="
        bg-white p-10 rounded-3xl shadow-[0_8px_25px_rgba(0,0,0,0.08)]
        text-left flex flex-col
      "
            >
              <div>
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#111]">
                    Bluenose
                  </h2>

                  <Link
                    to="/about"
                    className="text-sm text-[#0E3D55] underline hover:text-[#0E6388]"
                  >
                    View our profile
                  </Link>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <span className="text-xl sm:text-2xl font-bold text-[#111]">
                    4.9
                  </span>
                  <span className="text-yellow-400 text-xl sm:text-2xl">
                    ★★★★★
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 mt-6">
                  {[
                    "High-quality work",
                    "Timely",
                    "Communicative",
                    "Professional",
                    "Project Management",
                  ].map((tag, i) => (
                    <span
                      key={i}
                      className="bg-[#F3F4F6] text-[#111] px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT CARD (Slider) */}
            <Testimonials />
          </div>
        </div>
      </section>
      <ServiceVideosSection title="Social Media Marketing" videos={smmVideos} />

    </div>
  );
}
