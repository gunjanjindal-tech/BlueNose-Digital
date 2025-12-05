import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopOnRoute from "./components/ScrollToTopOnRoute"; 
import Home from "./pages/Home";
import Services from "./pages/Services";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Header from "./components/Header";
import Footer from "./components/Footer";

// 🔽 Import all service pages
import SMM from "./pages/services/smm";
import BrandIdentity from "./pages/services/BrandIdentity";
import CommercialAds from "./pages/services/commercial-ads";
import InfluencerMarketing from "./pages/services/influencer-marketing";
import VideoEditing from "./pages/services/video-editing";
import UGC from "./pages/services/ugc";
import Photography from "./pages/services/photography";
import WorkGallery from "./pages/WorkGallery";
import About from "./pages/About";
import Contact from "./pages/Contact";

 // 🔽 Client INDIVIDUAL ROUTES 
import TriveeniEvents from "./pages/work/TriveeniEvents";
import PitaNutso from "./pages/work/PitaNutso";
import NayyaPizza from "./pages/work/NayyaPizza";
import Hearthstone from "./pages/work/Hearthstone";


function App() {
  return (
    <Router>
      <ScrollToTopOnRoute />  
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
        <Route path="/services/brand-identity" element={<BrandIdentity />} />
        <Route path="/services/commercial-ads" element={<CommercialAds />} />
        <Route path="/services/influencer-marketing" element={<InfluencerMarketing />} />
        <Route path="/services/video-editing" element={<VideoEditing />} />
        <Route path="/services/ugc-content" element={<UGC />} />
        <Route path="/services/photography" element={<Photography />} />

        {/* Client INDIVIDUAL ROUTES */}
        <Route path="/work/triveeni-events" element={<TriveeniEvents />} />
        <Route path="/work/pita-nutso" element={<PitaNutso />} />
        <Route path="/work/nayya-pizza" element={<NayyaPizza />} />
        <Route path="/work/hearthstone" element={<Hearthstone />} />

      </Routes>
      <Footer />
      <ScrollToTop />
    </Router>
  );
}

export default App;
