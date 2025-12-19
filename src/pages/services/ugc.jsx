import { useState } from "react";
import { Helmet } from "react-helmet";
import Testimonials from "../../components/DetailedServiceComponents/Testimonials";
import ServiceClientLogos from "../../components/DetailedServiceComponents/ServiceClientLogos";
import PlatformSlider from "../../components/PlatformSlider";
import { Link } from "react-router-dom";
import GrowthChart from "../../components/DetailedServiceComponents/GrowthChart";
import ServiceVideosSection from "../../components/DetailedServiceComponents/ServiceVideosSection";
import ReviewSummaryCard from "../../components/DetailedServiceComponents/ReviewSummaryCard";

export default function UGCContentCreation() {

  // ----------------- VIDEOS -----------------
  const ugcVideos = [
    { url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414731/UGC_1_tqmfnt.mov", views: "18.1K" },
    { url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414748/UGC_2_t04guj.mov", views: "9.9K" },
    { url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414787/UGC_3_oif38l.mov", views: "6.2K" },
    { url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414723/UGC_4_ssejjv.mp4", views: "12.6K" },
  ];

  // ----------------- GROWTH DATA -----------------
  const conversionData = [
    { name: "Jan", value: 22 },
    { name: "Feb", value: 40 },
    { name: "Mar", value: 65 },
    { name: "Apr", value: 84 },
  ];

  const ctaData = [
    { name: "Jan", value: 10 },
    { name: "Feb", value: 17 },
    { name: "Mar", value: 29 },
    { name: "Apr", value: 47 },
  ];

  const contentOutputData = [
    { name: "Jan", value: 15 },
    { name: "Feb", value: 24 },
    { name: "Mar", value: 34 },
    { name: "Apr", value: 52 },
  ];

  // ----------------- BARRIER CARD -----------------
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
    UGC Content Creation Services | High-Converting UGC Ads | Bluenose Marketing
  </title>

  <meta
    name="description"
    content="High-converting UGC content by Bluenose Marketing built for ads and social media. Native creator-style videos with strong hooks, storytelling, and CTAs that drive real conversions."
  />

  <meta
    name="keywords"
    content="UGC content creation, UGC ads, user generated content services, creator content, TikTok UGC, Instagram UGC, short form video ads, Bluenose Marketing"
  />

  {/* CANONICAL */}
  <link
    rel="canonical"
    href="https://www.bluenosemarketing.ca/services/ugc-content"
  />

  {/* OPEN GRAPH */}
  <meta
    property="og:title"
    content="UGC Content Creation Services | Bluenose Marketing"
  />
  <meta
    property="og:description"
    content="Authentic UGC that looks native and converts like ads — built for modern buyer behavior."
  />
  <meta property="og:type" content="website" />
  <meta
    property="og:url"
    content="https://www.bluenosemarketing.ca/services/ugc-content"
  />
  <meta
    property="og:image"
    content="https://www.bluenosemarketing.ca/seo/ugc-content-cover.jpg"
  />

  {/* TWITTER */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="UGC Content Creation Services | Bluenose Marketing"
  />
  <meta
    name="twitter:description"
    content="Native UGC-style videos designed for ads, engagement, and conversions."
  />
  <meta
    name="twitter:image"
    content="https://www.bluenosemarketing.ca/seo/ugc-content-cover.jpg"
  />
</Helmet>


      {/* ================= HERO ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#063349]">
            UGC That Feels Authentic and 

            <span className="text-[#0E6388]"> Drives Real Sales</span>
          </h2>

          <p className="text-[#0A3A53]/80 text-lg mt-4 max-w-4xl mx-auto">
           Creator-style content for ads and social media;featuring engaging scripts, product demos, and storytelling that matches today’s buying habits.

          </p>
        </div>
      </section>

      {/* ================= GROWTH CHARTS ================= */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10 place-items-center">
            <GrowthChart title="Conversion Lift From UGC" percent="+84%" data={conversionData} gradientId="ugcConversion" />
            <GrowthChart title="Stronger Call-to-Action Response" percent="+47%" data={ctaData} gradientId="ugcCta" />
            <GrowthChart title="Monthly Content Output" percent="+52%" data={contentOutputData} gradientId="ugcOutput" />
          </div>

          <div className="flex justify-center mt-14">
            <Link
              to="/contact"
              className="px-7 py-3 text-lg rounded-full text-white hover:opacity-90"
              style={{ background: "rgb(14, 99, 136)" }}
            >
              Get UGC Strategy →
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
                      <h2 className="text-3xl md:text-4xl font-extrabold text-[#063349]
 text-center mb-14">
        Challenges Brands Faced Before Partnering 
{" "}
          <span className="text-[#0E6388]">
            With Bluenose Marketing
          </span>
        </h2>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-6 px-8">
  {[
    {
      title: "Creators didn’t understand the product properly",
      desc: "We onboard creators with product training for authentic, informed content.",
    },
    {
      title: "UGC looked staged or low-quality, not native",
      desc: "We deliver high-quality, native-style UGC that feels organic and platform-first.",
    },
    {
      title: "Zero structure: no hooks, no story, no CTA",
      desc: "We script every UGC with strong hooks, storylines, and clear CTAs.",
    },
    {
      title: "Videos were aesthetic but didn’t convert",
      desc: "We optimize UGC for conversions using proven direct-response techniques.",
    },
    {
      title: "Brands struggled to find reliable creators monthly",
      desc: "We provide a vetted network of consistent, dependable UGC creators.",
    },
    {
      title: "Revisions took forever and delayed ad launches",
      desc: "We offer fast turnaround times with efficient revision workflows.",
    },
    {
      title: "No data-backed scripts built for high retention",
      desc: "We craft scripts using data-driven insights for maximum viewer retention.",
    },
    {
      title: "Content didn’t match brand tone or voice",
      desc: "We ensure all UGC aligns perfectly with your brand’s voice and messaging.",
    },
    {
      title: "Hard to scale UGC production consistently",
      desc: "We manage scalable UGC pipelines for ongoing, reliable content delivery.",
    },
  ].map((item, idx) => (
    <BarrierCard key={idx} title={item.title} desc={item.desc} />
  ))}
</div>

      </section>

      {/* ================= PLATFORM SLIDER ================= */}
      <PlatformSlider />

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8 text-center">
                             <h2 className="text-3xl md:text-4xl font-extrabold text-[#063349]">

           Reviews That Speak.

            <span className="text-[#0E6388]">
              {" "} Ratings That Shine.
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 md:mt-16">
                     <ReviewSummaryCard />
                     <Testimonials />
                   </div>
        </div>
      </section>

      {/* ================= VIDEOS ================= */}
      <ServiceVideosSection title="UGC Content Creation" videos={ugcVideos} />
    </div>
  );
}
