import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesDrop, setServicesDrop] = useState(false);
  const [workDrop, setWorkDrop] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  

  const location = useLocation();

  // MENU ITEMS
  const services = [
    { name: "Social Media Marketing", link: "/services/smm" },
    { name: "Branding & Identity", link: "/services/brand-identity" },
    { name: "Influencer Marketing", link: "/services/influencer-marketing" },
    { name: "Video Editing", link: "/services/video-editing" },
    { name: "UGC Content Creation", link: "/services/ugc-content" },
    { name: "Photography & Shoots", link: "/services/photography" },
  ];

  const clients = [
    { name: "The Garden Retreat", link: "/work/the-garden-retreat" },
    { name: "Adda Indian Eatery", link: "/work/adda-indian-eatery" },
    { name: "Triveeni Events", link: "/work/triveeni-events" },
    { name: "Pita Nutso", link: "/work/pita-nutso" },
    { name: "Nayya Pizza & Grill", link: "/work/nayya-Pizza" },
    { name: "Beaver Bank Station", link: "/work/beaver-bank-station" },
    { name: "Sake Cafe | Sushi Bar", link: "/work/sake-cafe" },
    { name: "Hearthstone Inn", link: "/work/hearthstone" },
    { name: "Besharam Bar & Grill", link: "/work/besharam" },
    { name: "Rivaaj Resto-Bar", link: "/work/rivaaj" },
    { name: "Desi Garden", link: "/work/desi-garden" },
  ];

  // SCROLL LISTENER FOR HEADER STYLE
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // AUTO-CLOSE MENU ON PAGE CHANGE
  useEffect(() => {
    setOpen(false);
  }, [location]);

  // 🔥 FIX: LOCK BODY SCROLL WHEN MOBILE MENU IS OPEN
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg border-b border-[#E5F1F8]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto sm:px-6 md:px-0 py-3 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/">
          <img
            src="/logo/logo.jpeg"
            className="w-32 md:w-36 object-contain transition-all"
            alt="Bluenose"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-8 font-medium text-[#063349]">

          <Link to="/" className="hover:text-[#0E6388]">Home</Link>

{/* SERVICES */}
<div
  className="relative group"
  onMouseEnter={() => window.innerWidth >= 1024 && setServicesDrop(true)}
  onMouseLeave={() => window.innerWidth >= 1024 && setServicesDrop(false)}
>

  {/* LABEL */}
  <Link
    to="/services"
    onClick={() => window.innerWidth < 1024 && setServicesDrop(!servicesDrop)}
    className="flex items-center gap-1 hover:text-[#0E6388]"
  >
    Services <ChevronDown size={16} />
  </Link>

  {/* DROPDOWN */}
  <div
    className={`
      absolute left-0 mt-3 bg-white shadow-xl rounded-xl w-64 p-3
      border border-[#EAF4FA] transition-all duration-200
      ${servicesDrop ? "opacity-100 visible" : "opacity-0 invisible"}
    `}
  >
    {services.map((s, i) => (
      <Link
        key={i}
        to={s.link}
        className="block px-3 py-2 rounded-lg hover:bg-[#F2FAFF] hover:text-[#0E6388]"
        onClick={() => setServicesDrop(false)}
      >
        {s.name}
      </Link>
    ))}
  </div>
</div>



{/* WORK */}
<div
  className="relative group"
  onMouseEnter={() => window.innerWidth >= 1024 && setWorkDrop(true)}
  onMouseLeave={() => window.innerWidth >= 1024 && setWorkDrop(false)}
>

  <Link
    to="/work-gallery"
    onClick={() => window.innerWidth < 1024 && setWorkDrop(!workDrop)}
    className="flex items-center gap-1 hover:text-[#0E6388]"
  >
    Work Gallery <ChevronDown size={16} />
  </Link>

  <div
    className={`
      absolute left-0 mt-3 bg-white shadow-xl rounded-xl w-64 p-3
      border border-[#EAF4FA] transition-all duration-200
      ${workDrop ? "opacity-100 visible" : "opacity-0 invisible"}
    `}
  >
    {clients.map((c, i) => (
      <Link
        key={i}
        to={c.link}
        className="block px-3 py-2 rounded-lg hover:bg-[#F2FAFF] hover:text-[#0E6388]"
        onClick={() => setWorkDrop(false)}
      >
        {c.name}
      </Link>
    ))}
  </div>
</div>



          <Link to="/about" className="hover:text-[#0E6388]">About</Link>
          <Link to="/contact" className="hover:text-[#0E6388]">Contact</Link>

          <a
            href="/catalogue.pdf"
            download
            className="px-5 py-2 rounded-full text-white font-semibold shadow-md hover:opacity-90"
            style={{ background: "rgb(14, 99, 136)" }}
          >
            E-Catalogue
          </a>
        </nav>

        {/* MOBILE ICON */}
        <button onClick={() => setOpen(!open)} className="lg:hidden text-[#063349]">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

{/* MOBILE MENU */}
<div
  className={`lg:hidden bg-white border-t border-[#EAF4FA] transition-all duration-300 overflow-hidden ${
    open ? "max-h-[85vh] py-4" : "max-h-0 py-0"
  }`}
>
  {/* SCROLLABLE CONTENT */}
  <div className="max-h-[75vh] overflow-y-auto pr-2">

    <div className="flex flex-col text-[#063349]">
      <Link to="/" className="py-3 px-6 hover:text-[#0E6388]">Home</Link>

      {/* SERVICES */}
     <div className="px-6 ">
  <div className="w-full flex justify-between items-center py-2">

    {/* CLICK — GO TO SERVICES PAGE */}
    <Link 
      to="/services"
      className="flex-1 text-left font-medium hover:text-[#0E6388]"
      onClick={() => setOpen(false)} // closes menu
    >
      Services
    </Link>

    {/* CLICK — TOGGLE DROPDOWN ONLY */}
    <button
      onClick={() => setServicesDrop(!servicesDrop)}
      className="p-2"
    >
      <ChevronDown
        className={`transition ${servicesDrop ? "rotate-180" : ""}`}
      />
    </button>

  </div>

  {/* DROPDOWN ITEMS */}
  <div
    className={`overflow-hidden transition-all ${
      servicesDrop ? "max-h-[300px]" : "max-h-0"
    }`}
  >
    {services.map((s, i) => (
      <Link
        key={i}
        to={s.link}
        className="block py-2 pl-3 text-sm hover:text-[#0E6388]"
        onClick={() => setOpen(false)} // close menu on click
      >
        {s.name}
      </Link>
    ))}
  </div>
</div>


 {/* WORK GALLERY */}
<div className="px-6">

  {/* TOP ROW: TEXT + CHEVRON */}
  <div className="w-full flex justify-between items-center py-2">

    {/* CLICK TEXT → GO TO WORK GALLERY PAGE */}
    <Link 
      to="/work-gallery"
      className="font-medium text-left w-full"
    >
      Work Gallery
    </Link>

    {/* CHEVRON ONLY TOGGLES DROPDOWN */}
    <button
      type="button"
      onClick={() => setWorkDrop(!workDrop)}
      className="p-2"
    >
      <ChevronDown
        className={`transition ${workDrop ? "rotate-180" : ""}`}
      />
    </button>

  </div>

  {/* DROPDOWN LIST */}
  <div className={`overflow-hidden transition-all ${
    workDrop ? "max-h-[400px]" : "max-h-0"
  }`}>
    {clients.map((c, i) => (
      <Link 
        key={i} 
        to={c.link} 
        className="block py-2 pl-3 text-sm hover:text-[#0E6388]"
      >
        {c.name}
      </Link>
    ))}
  </div>

</div>

      <Link to="/about" className="py-3 px-6 hover:text-[#0E6388]">About</Link>
      <Link to="/contact" className="py-3 px-6 hover:text-[#0E6388]">Contact</Link>

      <a
        href="/catalogue.pdf"
        download
        className="mx-6 mt-3 mb-4 py-2 rounded-full bg-[#0E6388] text-white text-center font-medium shadow"
      >
        E-Catalogue
      </a>
    </div>

  </div>
</div>

    </header>
  );
}
