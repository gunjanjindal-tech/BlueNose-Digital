import { useState } from "react";
import PricingPlans from "../../components/DetailedServiceComponents/PricingPlans";
import Testimonials from "../../components/DetailedServiceComponents/Testimonials";
import ServiceClientLogos from "../../components/DetailedServiceComponents/ServiceClientLogos";
import PlatformSlider from "../../components/PlatformSlider";
import { Link } from "react-router-dom";
import GrowthChart from "../../components/DetailedServiceComponents/GrowthChart";
import ServiceVideosSection from "../../components/DetailedServiceComponents/ServiceVideosSection";

export default function PhotographyShoots() {

  // ----------------- VIDEOS -----------------
  const photographyVideos = [
    { 
      url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414450/Photography_1_xp1wud.mov",
      views: "20.2K"
    },
    { 
      url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414455/photography_2_bttpuu.mov",
      views: "11.4K"
    },
    { 
      url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414452/photography_3_kgb9it.mov",
      views: "7.9K"
    },
    { 
      url: "/videos/photo4.mp4",
      views: "14.7K"
    },
  ];

  // ----------------- GROWTH CHARTS -----------------
  const engagementData = [
    { name: "Jan", value: 28 },
    { name: "Feb", value: 42 },
    { name: "Mar", value: 65 },
    { name: "Apr", value: 90 },
  ];

  const brandRecallData = [
    { name: "Jan", value: 12 },
    { name: "Feb", value: 25 },
    { name: "Mar", value: 38 },
    { name: "Apr", value: 55 },
  ];

  const contentProductionData = [
    { name: "Jan", value: 5 },
    { name: "Feb", value: 12 },
    { name: "Mar", value: 22 },
    { name: "Apr", value: 35 },
  ];


  // ----------------- BARRIER CARD -----------------
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
    <div className="bg-white text-[#0E3D55]">

      {/* ✦ HERO */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-3xl sm:text-3xl md:text-5xl font-extrabold 
            text-transparent bg-clip-text bg-gradient-to-r 
            from-[#0E3D55] via-[#0F587A] to-[#11719A]">
            Visuals That Tell Your Story —  
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4BC1E8] to-[#0E6388]">
              {" "}And Sell Your Brand
            </span>
          </h1>

          <p className="text-[#0A3A53]/80 text-lg mt-4 max-w-2xl mx-auto">
            High-quality product shoots, lifestyle photography, restaurant visuals, 
            branding images & more crafted to elevate your brand’s online presence.
          </p>

        </div>
      </section>


      {/* ✦ GROWTH CHARTS */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-10">

            <GrowthChart
              title="Brand Engagement Improvement"
              percent="+90%"
              data={engagementData}
              gradientId="photoEngage"
            />

            <GrowthChart
              title="Brand Recall Improvement"
              percent="+55%"
              data={brandRecallData}
              gradientId="photoRecall"
            />

            <GrowthChart
              title="Monthly Content Output"
              percent="+35%"
              data={contentProductionData}
              gradientId="photoContent"
            />

          </div>

          <div className="flex justify-center mt-14">
            <Link
              to="/contact"
              className="px-7 py-3 text-lg rounded-full bg-gradient-to-r 
                from-[#4BC1E8] to-[#0E6388] text-white hover:opacity-90"
            >
              Book Photography Consultation →
            </Link>
          </div>

        </div>
      </section>


      {/* ✦ CLIENT LOGOS */}
      <section className="w-full bg-white flex justify-center">
        <div className="w-full">
          <ServiceClientLogos />
        </div>
      </section>


      {/* ✦ BARRIERS SECTION */}
      <section className="pt-15 md:pt-20">

        <h2 className="text-3xl sm:text-3xl md:text-5xl font-extrabold 
          text-transparent bg-clip-text bg-gradient-to-r 
          from-[#0E3D55] via-[#0F587A] to-[#11719A] text-center mb-14">
          Barriers Before{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r 
            from-[#4BC1E8] to-[#0E6388]">
            Working With Us
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto md:mt-10 px-8">

          {[
            "Your visuals didn’t match the quality of your brand.",
            "Product photos lacked detail, lighting or consistency.",
            "You couldn’t build a strong identity across social platforms.",
            "Shoots were delayed, unorganized, or poorly executed.",
            "Photos weren’t optimized for reels, ads, or website usage.",
            "Lifestyle visuals didn’t feel authentic or brand-aligned.",
            "No clear creative direction or shot planning.",
            "Low-quality images hurt engagement and conversions.",
            "Hard to find reliable photographers who deliver monthly.",
          ].map((t, i) => (
            <BarrierCard key={i} title={t} desc={t} />
          ))}

        </div>
      </section>


      {/* ✦ WHAT SETS US APART */}
      <PlatformSlider />

      {/* ✦ PRICING */}
      <PricingPlans />

      {/* ✦ TESTIMONIALS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8 text-center">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold 
            text-transparent bg-clip-text bg-gradient-to-r 
            from-[#0E3D55] via-[#0F587A] to-[#11719A]">
            Our rating based on 2 verified
            <span className="text-transparent bg-clip-text bg-gradient-to-r 
              from-[#4BC1E8] to-[#0E6388]">
              {" "}client reviews
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">

            {/* LEFT CARD */}
            <div className="bg-white p-10 rounded-3xl shadow-[0_8px_25px_rgba(0,0,0,0.08)] text-left">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#111]">Bluenose</h2>
                <Link to="/about" className="text-sm text-[#0E3D55] underline hover:text-[#0E6388]">
                  View our profile
                </Link>
              </div>

              <div className="mt-4 flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-bold text-[#111]">4.9</span>
                <span className="text-yellow-400 text-xl sm:text-2xl">★★★★★</span>
              </div>

              <div className="flex flex-wrap gap-3 mt-6">
                {[
                  "High-quality work",
                  "Timely",
                  "Communicative",
                  "Professional",
                  "Project Management",
                ].map((tag, i) => (
                  <span key={i} className="bg-[#F3F4F6] text-[#111] px-4 py-2 rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT SLIDER */}
            <Testimonials />

          </div>
        </div>
      </section>


      {/* ✦ PHOTOGRAPHY VIDEOS SECTION */}
      <ServiceVideosSection 
        title="Photography & Shoots"
        videos={photographyVideos}
      />

    </div>
  );
}
