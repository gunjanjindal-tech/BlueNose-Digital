import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [serviceDrop, setServiceDrop] = useState(false);
  const [workDrop, setWorkDrop] = useState(false);

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
  ];
  useEffect(() => {
    if (window.innerWidth >= 1024) setOpen(false);
  }, []);

  return (
    <header className="sticky top-0 left-0 w-full z-50">
      {/* BG */}
      <div className="absolute inset-0 bg-black"></div>
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, #0E6388 0%, transparent 60%), radial-gradient(circle at 80% 70%, #4BC1E8 0%, transparent 70%)",
        }}
      ></div>

      <div className="relative z-10 max-w-[1250px] mx-auto px-4 py-3">
        {/* TOP NAV BAR */}
        <div className="w-full bg-white rounded-full px-5 py-3 flex justify-between items-center shadow-[0_4px_20px_rgba(0,0,0,0.40)]">
          {/* Logo */}
          <a href="/">
            <img
              src="/logo/logo.jpeg"
              className="w-32 md:w-36 object-contain"
              alt="Bluenose"
            />
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-6 font-medium">
                       <Link to="/" onClick={() => setOpen(false)}>
  Home
</Link>

            {/* SERVICES */}
            <div className="relative group inline-block">
              <button className="hover:text-[#4BC1E8] transition flex items-center gap-1">
                Services <ChevronDown size={16} />
              </button>

              <div
                className="absolute left-0 mt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible
      bg-white shadow-xl rounded-xl p-4 w-60 z-50 transition-all duration-200"
              >
                {services.map((s, i) => (
                  <a
                    key={i}
                    href={s.link}
                    className="block px-3 py-2 rounded-md hover:bg-[#4BC1E8]/10 hover:text-[#0E6388]"
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            </div>

            {/* WORK GALLERY */}
            <div className="relative group inline-block">
              <button className="hover:text-[#4BC1E8] transition flex items-center gap-1">
                Work Gallery <ChevronDown size={16} />
              </button>

              {/* AUTO HEIGHT, SCROLL SAFELY */}
              <div
                className="
      absolute left-0 mt-3 opacity-0 invisible
      group-hover:opacity-100 group-hover:visible
      bg-white shadow-xl rounded-xl p-4 w-64 z-50 transition-all duration-200
  "
              >
                {clients.map((c, i) => (
                  <a
                    key={i}
                    href={c.link}
                    className="block px-3 py-2 rounded-md hover:bg-[#4BC1E8]/10 hover:text-[#0E6388]"
                  >
                    {c.name}
                  </a>
                ))}
              </div>
            </div>

           <Link to="/about" onClick={() => setOpen(false)}>
  About
</Link>
           <Link to="/contact" onClick={() => setOpen(false)}>
  Contact
</Link>

            <a
              href="/catalogue.pdf"
              download
              className="px-5 py-2 rounded-full text-white 
shadow hover:opacity-90 text-sm"
              style={{
    background: "rgb(14, 99, 136)"
  }}
            >
              E-Catalogue
            </a>
          </nav>

          {/* MOBILE MENU ICON */}
          <button className="lg:hidden p-2" onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <div
          className={`lg:hidden mt-3 overflow-y-auto transition-all duration-500 ${
            open
              ? "max-h-[88vh] opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl text-white 
    shadow-xl text-center flex flex-col divide-y divide-white/10 py-2"
          >
                       <Link to="/" onClick={() => setOpen(false)}>
  Home
</Link>

            {/* SERVICES MOBILE */}
            <div>
              <button
                onClick={() => {
                  setServiceDrop(!serviceDrop);
                  setWorkDrop(false);
                }}
                className="h-12 w-full flex items-center justify-center gap-2 text-[17px]"
              >
                Services{" "}
                <ChevronDown
                  size={18}
                  className={`${serviceDrop ? "rotate-180" : ""} transition`}
                />
              </button>

              <div
                className={`${
                  serviceDrop ? "max-h-[280px]" : "max-h-0"
                } overflow-auto transition-all`}
              >
                {services.map((s, i) => (
                  <a
                    key={i}
                    href={s.link}
                    className="block py-2 text-[15px] hover:text-[#4BC1E8]"
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            </div>

            {/* WORK MOBILE */}
            <div>
              <button
                onClick={() => {
                  setWorkDrop(!workDrop);
                  setServiceDrop(false);
                }}
                className="h-12 w-full flex items-center justify-center gap-2 text-[17px]"
              >
                Work Gallery{" "}
                <ChevronDown
                  size={18}
                  className={`${workDrop ? "rotate-180" : ""} transition`}
                />
              </button>

              {/*  NOW SHOWS FULL 10 ITEMS */}
              <div
                className={`${
                  workDrop ? "max-h-[360px]" : "max-h-0"
                } overflow-auto transition-all`}
              >
                {clients.map((c, i) => (
                  <a
                    key={i}
                    href={c.link}
                    className="block py-2 text-[15px] hover:text-[#4BC1E8]"
                  >
                    {c.name}
                  </a>
                ))}
              </div>
            </div>

                       <Link to="/about" onClick={() => setOpen(false)}>
  About
</Link>
                      <Link to="/contact" onClick={() => setOpen(false)}>
  Contact
</Link>

            <div className="py-4">
              <a
                href="/catalogue.pdf"
                download
                className="block w-40 mx-auto py-2 rounded-full 
      bg-gradient-to-r from-[#4BC1E8] to-[#0E6388] text-sm font-semibold shadow"
              >
                E-Catalogue
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
