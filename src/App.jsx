import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Header from "./components/Header";
import Footer from "./components/Footer";

// 🔽 Import all service pages
import SMM from "./pages/services/smm";
import Branding from "./pages/services/branding";
import CommercialAds from "./pages/services/commercial-ads";
import InfluencerMarketing from "./pages/services/influencer-marketing";
import VideoEditing from "./pages/services/video-editing";
import UGC from "./pages/services/ugc";
import Photography from "./pages/services/photography";
import WebDevelopment from "./pages/services/website-development";
import WorkGallery from "./pages/WorkGallery";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
     <Header/>
      <Routes>
    
        {/* MAIN PAGES */}
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/work-gallery" element={<WorkGallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        
        {/* SERVICE INDIVIDUAL ROUTES */}
        <Route path="/services/smm" element={<SMM />} />
        <Route path="/services/branding" element={<Branding />} />
        <Route path="/services/commercial-ads" element={<CommercialAds />} />
        <Route path="/services/influencer-marketing" element={<InfluencerMarketing />} />
        <Route path="/services/video-editing" element={<VideoEditing />} />
        <Route path="/services/ugc" element={<UGC />} />
        <Route path="/services/photography" element={<Photography />} />
        <Route path="/services/website-development" element={<WebDevelopment />} />

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
