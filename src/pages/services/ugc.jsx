import { useState } from "react";
// import PricingPlans from "../../components/DetailedServiceComponents/PricingPlans";
import Testimonials from "../../components/DetailedServiceComponents/Testimonials";
import ServiceClientLogos from "../../components/DetailedServiceComponents/ServiceClientLogos";
import PlatformSlider from "../../components/PlatformSlider";
import { Link } from "react-router-dom";
import GrowthChart from "../../components/DetailedServiceComponents/GrowthChart";
import ServiceVideosSection from "../../components/DetailedServiceComponents/ServiceVideosSection";

export default function UGCContentCreation() {

  // ----------------- VIDEOS -----------------
  const ugcVideos = [
    { 
      url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414731/UGC_1_tqmfnt.mov",
      views: "18.1K"
    },
    { 
      url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414748/UGC_2_t04guj.mov",
      views: "9.9K"
    },
    { 
      url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414787/UGC_3_oif38l.mov",
      views: "6.2K"
    },
    { 
      url: "https://res.cloudinary.com/dy4vqfwmi/video/upload/f_auto,q_auto/v1764414723/UGC_4_ssejjv.mp4",
      views: "12.6K"
    },
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
    <div className="bg-white text-[#0E3D55] pt-10">

      {/* ✦ HERO */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

                   <h2 className="text-3xl md:text-4xl font-extrabold text-[#063349]">

            UGC That Looks Native —  
            <span className="text-[#0E6388]">
              {" "}And Converts Like Ads
            </span>
          </h2>

          <p className="text-[#0A3A53]/80 text-lg mt-4 max-w-2xl mx-auto">
            Authentic creator-style content for ads & socials.  
            High-retention scripts, product demonstrations, storytelling hooks — made exactly for how people buy today.
          </p>

        </div>
      </section>


      {/* ✦ GROWTH CHARTS */}
      <section className="pb-20 bg-white ">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-10 place-items-center">

            <GrowthChart
              title="Conversion Lift From UGC"
              percent="+84%"
              data={conversionData}
              gradientId="ugcConversion"
            />

            <GrowthChart
              title="Stronger Call-to-Action Response"
              percent="+47%"
              data={ctaData}
              gradientId="ugcCta"
            />

            <GrowthChart
              title="Monthly Content Output"
              percent="+52%"
              data={contentOutputData}
              gradientId="ugcOutput"
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
              Get UGC Strategy →
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


      {/* ✦ BARRIERS */}
      <section className="pt-15 md:pt-20">
        
                   <h2 className="text-3xl md:text-4xl font-extrabold text-[#063349]
text-center mb-14">
          Barriers Before{" "}
          <span className="text-[#0E6388]">
            Working With Us
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto md:mt-10 px-8">

          {[
            "Creators didn’t understand the product properly.",
            "UGC looked staged or low-quality — not native.",
            "Zero structure: no hooks, no story, no CTA.",
            "Videos were aesthetic but didn't convert.",
            "Brands struggled to find reliable creators monthly.",
            "Revisions took forever and delayed ad launches.",
            "No data-backed scripts built for high retention.",
            "Content didn’t match brand tone or voice.",
            "Hard to scale UGC production consistently."
          ].map((t, i) => (
            <BarrierCard key={i} title={t} desc={t} />
          ))}

        </div>
      </section>

      {/* ✦ WHAT SETS US APART */}
      <PlatformSlider />

      {/* ✦ PRICING (same across all services) */}
      {/* <PricingPlans /> */}

      {/* ✦ TESTIMONIALS */}
         <section className=" py-5 md:py-20">

        <div className="max-w-7xl mx-auto px-8 text-center">

                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#063349]">

            Our rating based on 2 verified
            <span className="text-[#0E6388]">
              {" "}client reviews
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 md:mt-16">

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

      {/* ✦ UGC VIDEO SECTION */}
      <ServiceVideosSection 
        title="UGC Content Creation"
        videos={ugcVideos}
      />

    </div>
  );
}