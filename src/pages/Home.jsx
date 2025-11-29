import Hero from "../components/Hero";
import ClientLogos from "../components/ClientLogos";
import WhyChooseUs from "../components/WhyChooseUs";
import HowWeWork from "../components/HowWeWork";
import ServiceVideos from "../components/ServiceVideos";
import FAQSection from "../components/FAQSection";
import CTAHome from "../components/CTAHome";
import HomeServicesSlider from "../components/HomeServicesSlider";
import HomeStatsSection from "../components/HomeStatsSection";
import HomeClientSlider from "../components/HomeClientSlider";
import { Helmet } from "react-helmet";

export default function Home() {
  
  return (
<>
 <Helmet>
  {/* SEO — Neutral Global */}
  <title>Bluenose Digital Marketing | SMM, Branding, UGC & Video Ads</title>
  <meta 
    name="description" 
    content="Bluenose Digital helps brands grow with SMM, influencer marketing, UGC content, video ads and branding. Data-driven strategy for real ROI & scale."
  />

  {/* Social Preview / OG Tags */}
  <meta property="og:title" content="Bluenose Digital Marketing | Grow Faster with SMM, UGC & Branding" />
  <meta property="og:description" content="Scale your brand with social media management, influencer marketing, UGC creators, branding and performance-driven ads." />
  <meta property="og:image" content="/banner/home-og.jpg" />
  <meta property="og:url" content="https://bluenosedigital.com" />
  <meta property="og:type" content="website" />

  {/* Keywords (for search ranking) */}
  <meta 
    name="keywords" 
    content="social media marketing agency, branding agency, UGC creators, influencer marketing agency, video editing services, smm services, content agency"
  />

  {/* Schema — Corrected & Location-Free */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Bluenose Digital",
      "url": "https://bluenosedigital.com",
      "logo": "https://bluenosedigital.com/banner/home-og.jpg",
      "description": "Bluenose Digital — Specialized in SMM, UGC content, influencer marketing, branding, and high-performance video advertisements.",
      "brand": "Bluenose Digital",
      "offers": [
        "Social Media Marketing",
        "Branding & Identity",
        "Influencer Marketing",
        "UGC Content",
        "Video Ads & Edits",
        "Content Production"
      ]
    })}
  </script>
</Helmet>


      <div>
      <Hero />   
      <ClientLogos />  
      <ServiceVideos />         
      <HomeServicesSlider />
       <HomeClientSlider/>
      <HomeStatsSection />
      <WhyChooseUs />
       <HowWeWork />     
      <FAQSection />
      <CTAHome/>
      </div>
      </>
      )
      
}
