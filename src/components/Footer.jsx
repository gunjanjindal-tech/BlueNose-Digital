import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
<footer className="relative bg-white pt-16 pb-2 text-[#063349] border-t border-[#D7E6EF]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1.4fr] gap-12">

        {/* LOGO + ABOUT */}
        <div>
          <img src="/logo/logo.jpeg" alt="Bluenose Logo" className="w-44 mb-5" />

          <p className="text-[#063349]/70 text-sm leading-relaxed max-w-sm">
            Bluenose Digital Marketing helps brands scale through strategy, creative execution,
            performance marketing, and modern content systems.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-3 mt-6">
        <a
  href="https://www.instagram.com/bluenose_marketing?igsh=MTg5ZjMxdHdyczRtcA%3D%3D"
  target="_blank"
  rel="noopener noreferrer"
  className="p-2 bg-[#0E6388]/10 rounded-lg hover:bg-[#0E6388]/20 transition"
>
  <Instagram className="w-5 h-5 text-[#0E6388]" />
</a>

<a
  href="https://www.linkedin.com/company/bluenose-marketing-digital-marketing-agency/"
  target="_blank"
  rel="noopener noreferrer"
  className="p-2 bg-[#0E6388]/10 rounded-lg hover:bg-[#0E6388]/20 transition"
>
  <Linkedin className="w-5 h-5 text-[#0E6388]" />
</a>

          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#063349]">Quick Links</h3>
          <ul className="space-y-2 text-[#063349]/80 text-sm">
            <li><Link to="/" className="hover:text-[#0E6388] transition">Home</Link></li>
            <li><Link to="/services" className="hover:text-[#0E6388] transition">Services</Link></li>
            <li><Link to="/work-gallery" className="hover:text-[#0E6388] transition">Work Gallery</Link></li>
            <li><Link to="/about" className="hover:text-[#0E6388] transition">About</Link></li>
            <li><Link to="/contact" className="hover:text-[#0E6388] transition">Contact</Link></li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#063349]">Contact Us</h3>

          <div className="space-y-4 text-sm text-[#063349]/85">
            <a href="tel:+19027189007" className="flex gap-3 items-center hover:text-[#0E6388] transition">
              <Phone className="w-5 h-5 text-[#0E6388]" />
              +1 902-718-9007
            </a>

            <a href="mailto:info@bluenosemarketing.com" className="flex gap-3 items-center hover:text-[#0E6388] transition">
              <Mail className="w-5 h-5 text-[#0E6388]" />
              info@bluenosemarketing.com
            </a>

            <a
              href="https://maps.google.com/?q=19 Alma Crescent, Halifax, NS B3N 2C4, Canada"
              target="_blank"
              className="flex gap-3 items-center hover:text-[#0E6388] transition"
            >
              <MapPin className="w-6 h-6 text-[#0E6388]" />
              19 Alma Crescent, Halifax, NS, Canada
            </a>
          </div>
        </div>

        {/* MAP */}
        <div className="rounded-xl overflow-hidden shadow-lg border border-[#0E6388]/20 h-[230px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d45405.76519008662!2d-63.6516953!3d44.6612053!3m2!1i1024!2i768!4f13.1!2m1!1sbluenose%20marketing%20halifax%20canada!5e0!3m2!1sen!2sin!4v1764141332327!5m2!1sen!2sin"
            className="w-full h-full"
            allowFullScreen
            loading="lazy"
            style={{ border: 0 }}
          />
        </div>
      </div>


{/* COPYRIGHT */}
<div className="mt-10 border-t border-[#0E6388]/20 w-full">
  <div className="pt-5 px-6 max-w-7xl mx-auto">

    <div
      className="
        flex flex-col
        sm:flex-row
        items-center
        justify-between
        gap-3
        text-sm
        text-[#063349]/60
      "
    >
      {/* LEFT */}
      <Link to="/privacy" className="hover:text-[#0E6388] transition">
        Privacy Policy
      </Link>

      {/* CENTER */}
      <p className="text-center">
        © {new Date().getFullYear()} Bluenose Digital Marketing. All Rights Reserved.
      </p>

      {/* RIGHT */}
      <Link to="/terms" className="hover:text-[#0E6388] transition">
        Terms & Conditions
      </Link>
    </div>

  </div>
</div>



    </footer>
  );
}
