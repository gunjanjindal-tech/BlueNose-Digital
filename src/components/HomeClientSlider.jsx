// HomeClientGallery.jsx
import { useState, useEffect } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import ColorThief from "colorthief";

export default function HomeClientGallery() {

  const clients = [
    { name:"The Garden Retreat", stats:["67K Views","74 Posts","13K Followers","49% Engagement"], logo:"/client/logo-8.png", link:"/work/garden-retreat" },
    { name:"Adda Indian Eatery", stats:["214K+ Views","1.2K Interactions","71 Shares","1.9K+ Followers"], logo:"/client/logo-4.png", link:"/work/adda-indian-eatery" },
    { name:"Triveeni Events", stats:["1.3M+ Views","439K Reach","89% Organic","130% Growth"], logo:"/client/logo-2.png", link:"/work/triveeni-events" },
    { name:"Pita Nutso", stats:["36.1K Views","52 Posts","276 Interactions","66% Engagement"], logo:"/client/logo-3.png", link:"/work/pita-nutso" },
    { name:"Nayya Pizza & Grill", stats:["312K Views","47 Posts","900+ Followers","54% Engagement"], logo:"/client/logo-1.png", link:"/work/nayya" },
    { name:"Beaver Bank Station", stats:["120K+ Reach","58 Videos","4.2% Growth","36% Engagement"], logo:"/client/logo-5.png", link:"/work/beaver-bank" },
    { name:"Sake Cafe | Sushi Bar", stats:["189K Views","64 Content","1.5K Saves","42% Return Audience"], logo:"/client/logo-7.png", link:"/work/sake" },
    { name:"Hearthstone Inn", stats:["78K Views","32 Videos","312 Saves","27% Visits"], logo:"/client/logo-6.png", link:"/work/hearthstone" },
    { name:"Besharam Bar & Grill", stats:["214K Views","65 Shares","990 Saves","4.7K Followers"], logo:"/client/logo-16.png", link:"/work/besharam" },
    { name:"Rivaaj Resto-Bar", stats:["612K Views","78 Posts","303 Saves","38% Conversion"], logo:"/client/logo-17.png", link:"/work/rivaaj" },
  ];

  const [active, setActive] = useState(0);
  const [bg, setBg] = useState("#0E6388");

  // Dynamic background from logo
  useEffect(()=>{
    const img = new Image();
    img.src = clients[active].logo;
    img.crossOrigin = "anonymous";
    img.onload = ()=>{
      const c = new ColorThief().getColor(img);
      setBg(`rgb(${c[0]},${c[1]},${c[2]})`);
    };
  },[active]);

  const slider = {
    infinite:true,
    autoplay:true,
    autoplaySpeed:2300,
    arrows:false,
    beforeChange:(a,b)=>setActive(b)
  };


  return (
<section className="py-24 relative overflow-hidden text-white" style={{background:"#000"}}>

  {/* SAME BACKGROUND AS ServiceVideos */}
 <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, #0E6388 0%, transparent 60%), radial-gradient(circle at 80% 70%, #4BC1E8 0%, transparent 70%)",
        }}
      ></div>


  {/* SECTION TITLE */}
  <h2 className="text-center text-3xl md:text-5xl font-extrabold mb-10 relative z-10">
    Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4BC1E8] to-[#0E6388]">Results</span>
  </h2>


  {/* CLIENT NAME NAV */}
  <div className="flex gap-4 flex-wrap justify-center mb-12 relative z-10">
    {clients.map((c,i)=>(
      <button key={i} onClick={()=>setActive(i)}
        className={`px-6 py-2 rounded-full text-sm font-semibold transition
        ${active===i ? "bg-white text-black" : "bg-white/10 hover:bg-white/20"}`}>
        {c.name}
      </button>
    ))}
  </div>


  {/* MAIN CLIENT BOX */}
  <div className="max-w-6xl mx-auto relative z-10">
    <Slider {...slider}>
      {clients.map((c,i)=>(
        <div key={i}>
          <div className="rounded-3xl p-14 shadow-xl grid md:grid-cols-2 gap-10"
            style={{ background:bg }}>

            {/* LEFT SIDE */}
            <div>
              <h2 className="text-4xl font-extrabold">{c.name}</h2>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {c.stats.map((s,j)=>(
                  <div key={j} className="bg-white text-black rounded-xl py-4 text-center font-semibold shadow">
                    {s}
                  </div>
                ))}
              </div>

              <Link to={c.link}>
                <button className="mt-8 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-black hover:text-white transition">
                  View Full Case →
                </button>
              </Link>
            </div>

            {/* RIGHT LOGO CARD */}
            <div className="flex items-center justify-center">
              <div className="bg-white/85 rounded-2xl p-8 shadow-2xl w-[270px] h-[270px] flex justify-center items-center">
                <img src={c.logo} className="w-full h-full object-contain" />
              </div>
            </div>

          </div>
        </div>
      ))}
    </Slider>
  </div>

</section>
  );
}
