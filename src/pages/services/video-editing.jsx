import { useState } from "react";
import { Helmet } from "react-helmet";
import Testimonials from "../../components/DetailedServiceComponents/Testimonials";
import ServiceClientLogos from "../../components/DetailedServiceComponents/ServiceClientLogos";
import PlatformSlider from "../../components/PlatformSlider";
import { Link } from "react-router-dom";
import GrowthChart from "../../components/DetailedServiceComponents/GrowthChart";
import ServiceVideosSection from "../../components/DetailedServiceComponents/ServiceVideosSection";
import ReviewSummaryCard from "../../components/DetailedServiceComponents/ReviewSummaryCard";

export default function VideoEditing() {

  // ----------------- VIDEO EDITING VIDEOS -----------------
  const videoEditingVideos = [
    { url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414823/Video_Production_3_mbldqf.mp4", views: "14.3K" },
    { url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414820/Video_Production_2_slp4ms.mp4", views: "3.7K" },
    { url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414818/Video_production_4_ha90ws.mp4", views: "16.5K" },
    { url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414818/Video_Production_1_xiz4sn.mov", views: "5.2K" },
  ];

  // ----------------- GROWTH CHART DATA -----------------
  const editingSpeedData = [
    { name: "Jan", value: 22 },
    { name: "Feb", value: 35 },
    { name: "Mar", value: 52 },
    { name: "Apr", value: 70 },
  ];

  const retentionData = [
    { name: "Jan", value: 18 },
    { name: "Feb", value: 28 },
    { name: "Mar", value: 45 },
    { name: "Apr", value: 62 },
  ];

  const conversionsData = [
    { name: "Jan", value: 10 },
    { name: "Feb", value: 17 },
    { name: "Mar", value: 25 },
    { name: "Apr", value: 41 },
  ];

  // ---------------- BARRIER CARD ----------------
  function BarrierCard({ title, desc }) {
    const [open, setOpen] = useState(false);

    return (
      <div
        onClick={() => setOpen(!open)}
        className="group p-8 rounded-2xl cursor-pointer text-white shadow-xl transition-all duration-300 hover:-translate-y-2"
        style={{ background: "rgb(14, 99, 136)" }}
      >
        <p className="font-semibold text-lg">{title}</p>

        <div
          className={`
            mt-4 overflow-hidden rounded-xl bg-white text-[#063349] p-4 transition-all duration-300
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
    <div className="bg-white text-[#0E3D55] pt-10">

   {/* ================= SEO META ================= */}
<Helmet>
  {/* PRIMARY SEO */}
  <title>
    Professional Video Editing Services | High-Converting Videos | Bluenose Marketing
  </title>

  <meta
    name="description"
    content="Professional video editing services by Bluenose Marketing for social media, ads, and brands. High-retention edits optimized for Instagram, TikTok, YouTube, and conversions."
  />

  <meta
    name="keywords"
    content="video editing services, social media video editing, reels editing, TikTok video editing, YouTube editing, ad video editing, Bluenose Marketing"
  />

  {/* CANONICAL */}
  <link
    rel="canonical"
    href="https://www.bluenosemarketing.ca/services/video-editing"
  />

  {/* OPEN GRAPH */}
  <meta
    property="og:title"
    content="Professional Video Editing Services | Bluenose Marketing"
  />
  <meta
    property="og:description"
    content="Turn raw footage into high-impact, high-retention videos that engage audiences and drive conversions."
  />
  <meta property="og:type" content="website" />
  <meta
    property="og:url"
    content="https://www.bluenosemarketing.ca/services/video-editing"
  />
  <meta
    property="og:image"
    content="https://www.bluenosemarketing.ca/seo/video-editing-cover.jpg"
  />

  {/* TWITTER */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Professional Video Editing Services | Bluenose Marketing"
  />
  <meta
    name="twitter:description"
    content="High-retention video editing for social media, ads, and scalable brand growth."
  />
  <meta
    name="twitter:image"
    content="https://www.bluenosemarketing.ca/seo/video-editing-cover.jpg"
  />
</Helmet>

      {/* ================= HERO ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#063349]">
            Turn Raw Footage Into High-Impact
            <span className="text-[#0E6388]"> Converting Videos</span>
          </h2>

          <p className="text-[#0A3A53]/80 text-lg mt-4 max-w-2xl mx-auto">
            From cinematic edits to social-first content — we edit videos that retain viewers,
            boost conversions, and strengthen your brand across platforms.
          </p>
        </div>
      </section>

      {/* ================= GROWTH CHARTS ================= */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10 place-items-center">
            <GrowthChart title="Editing Output Efficiency" percent="+70%" data={editingSpeedData} gradientId="speedGradient" />
            <GrowthChart title="Viewer Retention Boost" percent="+62%" data={retentionData} gradientId="retainGradient" />
            <GrowthChart title="Conversion Improvement" percent="+41%" data={conversionsData} gradientId="convertGradient" />
          </div>

          <div className="flex justify-center mt-14">
            <Link
              to="/contact"
              className="px-7 py-3 text-lg rounded-full text-white hover:opacity-90"
              style={{ background: "rgb(14, 99, 136)" }}
            >
              Contact Us Now →
            </Link>
          </div>
        </div>
      </section>

      {/* ================= CLIENT LOGOS ================= */}
      <section className="w-full flex justify-center">
        <div className="w-full">
          <ServiceClientLogos />
        </div>
      </section>

      {/* ================= BARRIERS ================= */}
      <section className="pt-20">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#063349] text-center mb-14">
          Barriers Before <span className="text-[#0E6388]">Working With Us</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-8">
          {[
            "Editing that failed to capture brand tone or personality.",
            "Low retention due to weak pacing and storytelling.",
            "Inconsistent quality from multiple editors.",
            "Videos that looked good but didn’t convert.",
            "Poor audio mixing and cluttered visuals.",
            "Missed deadlines and unreliable workflows.",
            "No platform-specific optimization.",
            "No strategy behind edits.",
            "High costs with no measurable ROI.",
          ].map((text, idx) => (
            <BarrierCard key={idx} title={text} desc={text} />
          ))}
        </div>
      </section>

      {/* ================= PLATFORM SLIDER ================= */}
      <PlatformSlider />

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#063349]">
            Our rating based on 2 verified
            <span className="text-[#0E6388]"> client reviews</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 md:mt-16">
                     <ReviewSummaryCard />
                     <Testimonials />
                   </div>
        </div>
      </section>

      {/* ================= VIDEOS ================= */}
      <ServiceVideosSection title="Video Editing" videos={videoEditingVideos} />
    </div>
  );
}
