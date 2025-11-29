import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="text-white relative overflow-hidden pt-16"
      style={{ backgroundColor: "#000" }}  // ✨ same as Hero
    >

      {/* 🌌 Hero-Style Gradient Lighting */}
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, #0E6388 0%, transparent 60%), radial-gradient(circle at 80% 70%, #4BC1E8 0%, transparent 70%)",
        }}
      ></div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 py-14  grid grid-cols-1 md:grid-cols-[1.3fr_0.9fr_1fr_1.4fr] gap-12 items-start z-10">

        {/* LOGO & ABOUT */}
        <div className="col-span-1">
          <img src="/logo/logo.jpeg" className="w-44 mb-4 object-contain" />
          <p className="text-white/80 text-sm leading-relaxed">
            Bluenose Digital Marketing helps brands grow through 
            digital strategy, performance ads, brand identity & web systems.
          </p>

          <div className="flex gap-3 mt-5">
            <a className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition"><Instagram className="w-5 h-5"/></a>
            <a className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition"><Facebook className="w-5 h-5"/></a>
            <a className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition"><Linkedin className="w-5 h-5"/></a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-white/80">
            {["Home","Services","Case Studies","About","Contact"].map(link=>(
              <li key={link}>
                <a href={`/${link.toLowerCase().replace(" ","-")}`} className="hover:text-[#4BC1E8] transition">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT UPDATED */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <div className="space-y-4 text-white/80 text-sm">

            <p className="flex gap-3"><Phone className="w-5 text-[#4BC1E8]"/> +1 902-718-9007</p>
            <p className="flex gap-3"><Mail className="w-5 text-[#4BC1E8]"/> sales@bluenosemarketing.com</p>
            <p className="flex gap-3"><MapPin className="w-5 text-[#4BC1E8]"/> 19 Alma Crescent, Halifax, NS B3N 2C4, Canada</p>

          </div>
        </div>

        {/* MAP — Halifax Nova Scotia */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe
  src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d45405.76519008662!2d-63.6516953!3d44.6612053!3m2!1i1024!2i768!4f13.1!2m1!1sbluenose%20marketing%20halifax%20canada!5e0!3m2!1sen!2sin!4v1764141332327!5m2!1sen!2sin"
  width="100%"
  height="230"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="relative border-t border-white/10 py-5 text-center z-10">
        <p className="text-white/70 text-sm mb-2">
          © {new Date().getFullYear()} Bluenose Digital Marketing. All Rights Reserved.
        </p>
        <div className="flex justify-center gap-6 text-white/70 text-sm">
          <a href="/terms" className="hover:text-white transition">Terms & Conditions</a>
          <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
