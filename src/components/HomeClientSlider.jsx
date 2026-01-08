// HomeClientGallery.jsx
import { useState, useEffect } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import ColorThief from "colorthief";

// Helper to detect if background should use white or black text
function isDarkColor(rgbArray) {
  if (!rgbArray) return false;
  const [r, g, b] = rgbArray;
  const luminance = (0.299*r + 0.587*g + 0.114*b) / 255;
  return luminance < 0.6;
}

export default function HomeClientGallery() {

  const clients = [
    { name: "The Garden Retreat", stats: ["67K Views", "74 Posts", "13K Followers (Established Base)", "49% Engagement"], logo: "/client/logo-8.png", link: "/work/garden-retreat" },

    { name: "Adda Indian Eatery", stats: ["214K+ Views", "1.2K Interactions", "71 Shares", "1.9K+ Followers"], logo: "/client/logo-4.png", link: "/work/adda-indian-eatery" },

    { name: "Triveeni Events", stats: ["1.3M+ Views", "439K Reach", "89% Organic", "130% Growth"], logo: "/client/logo-2.png", link: "/work/triveeni-events" },

    { name: "Pita Nutso", stats: ["36.1K Views", "52 Posts", "276 Interactions", "66% Engagement"], logo: "/client/logo-3.png", link: "/work/pita-nutso" },

    { name: "Nayya Pizza & Grill", stats: ["3.6M+ Views", "93 Posts", "45.4K Interactions", "97% Avg. Non-Follower Engagement"], logo: "/client/logo-1.png", link: "/work/nayya" },

    { name: "Beaver Bank Station", stats: ["79K+ Views", "48K+ Accounts Reached", "439 Interactions", "39% Non-Follower Engagement"], logo: "/client/logo-5.png", link: "/work/beaver-bank" },

    { name: "Sake Cafe | Sushi Bar", stats: ["9.7K Views", "83.6% Engagement Rate", "276 Interactions", "54% Non-Follower Engagement"], logo: "/client/logo-7.png", link: "/work/sake" },

    { name: "Hearthstone Inn", stats: ["1.6K Views", "94.6% Engagement Rate", "53 Accounts Reached", "78% Non-Follower Engagement"], logo: "/client/logo-6.png", link: "/work/hearthstone" },

    { name: "Besharam Bar & Grill", stats: ["60K Views", "59 Posts", "9.6K Followers (+157 Growth)", "62% Non-Follower Engagement"], logo: "/client/logo-16.png", link: "/work/besharam" },

    { name:"Rivaaj Resto-Bar", stats:["48.9K Views (30 days)","403 Interactions","74 New Followers","17 Content Shared"], logo:"/client/logo-17.png", link:"/work/rivaaj" },
  ];

  const [active, setActive] = useState(0);
  const [bgColor, setBgColor] = useState([14, 99, 136]); // default blue
  const darkText = isDarkColor(bgColor);

  // Extract dominant color from logo
  useEffect(() => {
    const img = new Image();
    img.src = clients[active].logo;
    img.crossOrigin = "anonymous";

    img.onload = () => {
      const thief = new ColorThief();
      const color = thief.getColor(img);
      setBgColor(color);
    };
  }, [active]);

  const slider = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2600,
    fade: false,
    arrows: false,
    beforeChange: (_, next) => setActive(next),
  };

  const textColor = darkText ? "text-white" : "text-[#063349]";
  const subtleText = darkText ? "text-white/80" : "text-[#063349]/80";

  return (
<section className="py-16 pb-28 relative overflow-hidden">

  {/* TITLE */}
  <p className="text-[#0E6388] font-semibold tracking-wide text-center">
    → Client Results
  </p>

  <h2 className="text-3xl md:text-5xl font-extrabold text-[#063349] text-center">
    Proven Results That <span className="text-[#0E6388]">Drive Growth</span>
  </h2>

  <p className="text-[#063349]/80 text-lg text-center max-w-xl mx-auto mt-4 mb-10">
    A decade of creative performance—delivering reach, engagement & brand growth.
  </p>

  {/* MAIN CONTENT BOX */}
  <div className="max-w-6xl mx-auto relative px-3 rounded-3xl overflow-hidden">

    <Slider {...slider}>
      {clients.map((c, i) => (
        <div key={i}>
          
          {/* CARD */}
          <div
            className="p-12 md:p-16 rounded-3xl shadow-2xl grid md:grid-cols-2 gap-12 transition-all duration-500"
            style={{
              background: `linear-gradient(135deg, rgba(${bgColor.join(",")},1), rgba(${bgColor.join(",")},0.85))`,
            }}
          >

            {/* LEFT: TEXT & STATS */}
            <div>
              <h2 className={`text-4xl font-extrabold ${textColor}`}>
                {c.name}
              </h2>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mt-7">
                {c.stats.map((s, j) => {
                  const first = s.split(" ")[0];
                  const rest = s.replace(first, "");

                  return (
                    <div
                      key={j}
                      className={`rounded-2xl px-4 py-5 shadow-md 
                        ${darkText ? "bg-white/20 text-white" : "bg-white text-[#063349]"}`}
                    >
                      <p className="text-2xl font-extrabold leading-none">{first}</p>
                      <p className={`text-xs mt-1 font-medium leading-tight ${darkText ? "text-white/80" : "text-[#063349]/80"}`}>
                        {rest}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* CTA */}
              <Link to={c.link}>
                <button className={`mt-8 px-6 py-3 rounded-full font-semibold transition 
                  ${darkText ? "bg-white text-black hover:bg-black hover:text-white"
                             : "bg-[#063349] text-white hover:bg-black"}`}>
                  View Full Case →
                </button>
              </Link>
            </div>

            {/* RIGHT: CLEAN LOGO (no BG capsule) */}
            <div className="flex justify-center items-center">
              <img
                src={c.logo}
                className="w-56 h-56 object-contain drop-shadow-2xl transition-all duration-500"
                alt={c.name}
              />
            </div>

          </div>
        </div>
      ))}
    </Slider>

  </div>

</section>
  );
}
