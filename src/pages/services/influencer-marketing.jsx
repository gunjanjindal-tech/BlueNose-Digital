import { useState } from "react";
// import PricingPlans from "../../components/DetailedServiceComponents/PricingPlans";
import Testimonials from "../../components/DetailedServiceComponents/Testimonials";
import ServiceClientLogos from "../../components/DetailedServiceComponents/ServiceClientLogos";
import PlatformSlider from "../../components/PlatformSlider";
import { Link } from "react-router-dom";
import GrowthChart from "../../components/DetailedServiceComponents/GrowthChart";
import ServiceVideosSection from "../../components/DetailedServiceComponents/ServiceVideosSection";
import { Helmet } from "react-helmet-async";


export default function InfluencerMarketing() {

  const influencerVideos = [
  { 
    url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414144/Influencer_marketing_1_lq9d3z.mov",
    views: "9.2K"
  },
  { 
    url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414146/Influencer_marketing_2_dd0qqy.mov",
    views: "6.4K"
  },
  { 
    url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414144/Influencer_marketing_4_yecfec.mp4",
    views: "11.8K"
  },
  { 
    url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414126/Influencer_marketing_3_tc1zqd.mov",
    views: "4.1K"
  },
];

  
  const reachData = [
    { name: "Jan", value: 40 },
    { name: "Feb", value: 75 },
    { name: "Mar", value: 95 },
    { name: "Apr", value: 110 },
  ];

  const roiData = [
    { name: "Jan", value: 12 },
    { name: "Feb", value: 20 },
    { name: "Mar", value: 33 },
    { name: "Apr", value: 45 },
  ];

  const engagementData = [
    { name: "Jan", value: 18 },
    { name: "Feb", value: 30 },
    { name: "Mar", value: 45 },
    { name: "Apr", value: 68 },
  ];

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
    <>
<Helmet>
  {/* PRIMARY SEO */}
  <title>
    Influencer Marketing Services | ROI-Driven Creator Campaigns | Bluenose Marketing
  </title>

  <meta
    name="description"
    content="Grow sales, trust, and visibility with ROI-focused influencer marketing. Bluenose Marketing connects brands with the right creators to drive real engagement, conversions, and measurable growth."
  />

  <meta
    name="keywords"
    content="influencer marketing agency, creator marketing, influencer campaigns, UGC marketing, social media influencers, brand collaborations, influencer ROI, Bluenose Marketing"
  />

  {/* CANONICAL */}
  <link
    rel="canonical"
    href="https://www.bluenosemarketing.ca/services/influencer-marketing"
  />

  {/* OPEN GRAPH */}
  <meta
    property="og:title"
    content="Influencer Marketing Services | Bluenose Marketing"
  />
  <meta
    property="og:description"
    content="Turn influencer collaborations into measurable revenue with structured, data-led influencer marketing campaigns."
  />
  <meta
    property="og:type"
    content="website"
  />
  <meta
    property="og:url"
    content="https://www.bluenosemarketing.ca/services/influencer-marketing"
  />
  <meta
    property="og:image"
    content="https://www.bluenosemarketing.ca/seo/influencer-marketing-cover.jpg"
  />

  {/* TWITTER */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Influencer Marketing Services | Bluenose Marketing"
  />
  <meta
    name="twitter:description"
    content="Strategic influencer marketing focused on ROI, trust, and long-term brand growth."
  />
  <meta
    name="twitter:image"
    content="https://www.bluenosemarketing.ca/seo/influencer-marketing-cover.jpg"
  />
</Helmet>


    <div className="bg-white text-[#0E3D55] pt-10">

      {/* ✦ HERO */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

                     <h2 className="text-3xl md:text-4xl font-extrabold text-[#063349]">
            Transform Influencers Into 

            <span className="text-[#0E6388]">
              {" "}Real Business Growth
            </span>
          </h2>

          <p className="text-[#0A3A53]/80 text-lg mt-4 max-w-4xl mx-auto">
            We connect your brand with creators who align with your values and audience, driving measurable ROI through strategic partnerships, authentic UGC, and trusted influencer storytelling.

          </p>

        </div>
      </section>

      {/* ✦ GROWTH CHARTS */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-10 place-items-center">

            <GrowthChart
              title="Influencer Reach Expansion"
              percent="+120%"
              data={reachData}
              gradientId="reachGradient"
            />

            <GrowthChart
              title="Collaboration ROI"
              percent="+45%"
              data={roiData}
              gradientId="roiGradient"
            />

            <GrowthChart
              title="Engagement Lift via Creators"
              percent="+68%"
              data={engagementData}
              gradientId="engageGradient"
            />
          </div>

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

      {/* ✦ CLIENT LOGOS */}
      <section className="w-full bg-white flex justify-center">
        <div className="w-full">
          <ServiceClientLogos />
        </div>
      </section>

      {/* ✦ BARRIERS SECTION */}
      <section className="pt-15 md:pt-20">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-[#063349] text-center mb-14">

         Challenges Brands Faced Before Partnering {" "}
          <span className="text-[#0E6388]">
            With Bluenose Marketing
          </span>
        </h2>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-6 px-8">
  {[
    {
      title: "Collaborations with influencers who didn’t match the brand",
      desc: "We vet and align influencers who authentically fit your brand values.",
    },
    {
      title: "Paying high fees but getting low or no measurable returns",
      desc: "We negotiate value-driven partnerships and optimize for ROI-focused results.",
    },
    {
      title: "Creators delivering late or inconsistent content",
      desc: "We manage timelines and enforce quality standards for every deliverable.",
    },
    {
      title: "No clarity on which influencers actually drove conversions",
      desc: "We provide transparent tracking and detailed conversion analytics for every campaign.",
    },
    {
      title: "Difficulty finding authentic creators in the right niche",
      desc: "We source vetted, niche-specific creators to reach your target audience.",
    },
    {
      title: "Engagement looked good, but sales didn’t move",
      desc: "We focus on conversion-driven influencer campaigns that impact revenue.",
    },
    {
      title: "Campaigns lacked structure, tracking, or creative direction",
      desc: "We deliver structured campaigns with clear briefs, tracking, and creative oversight.",
    },
    {
      title: "Overwhelmed by influencer outreach, negotiation, and contracts",
      desc: "We handle all influencer outreach, negotiations, and contract management on your behalf.",
    },
    {
      title: "Brand messaging not consistent across creators",
      desc: "We ensure all creators follow unified brand messaging and campaign guidelines.",
    },
  ].map((item, idx) => (
    <BarrierCard key={idx} title={item.title} desc={item.desc} />
  ))}
</div>

      </section>

      {/* ✦ WHAT SETS US APART */}
      <PlatformSlider />

      {/* ✦ PRICING */}
      {/* <PricingPlans /> */}

      {/* ✦ TESTIMONIALS */}
      <section className=" py-5 md:py-20">

        <div className="max-w-7xl mx-auto px-8 text-center">

                     <h2 className="text-3xl md:text-4xl font-extrabold text-[#063349]">

           Reviews That Speak.

            <span className="text-[#0E6388]">
              {" "} Ratings That Shine.
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 md:mt-16">
            
            {/* Left Card */}
            <div className="bg-white p-10 rounded-3xl shadow-[0_8px_25px_rgba(0,0,0,0.08)] text-left">
              <div>
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
            </div>

            {/* Right Slider */}
            <Testimonials />

          </div>
        </div>
      </section>
      <ServiceVideosSection 
  title="Influencer Marketing"
  videos={influencerVideos}
/>

      </div>
      </>
  );
}
