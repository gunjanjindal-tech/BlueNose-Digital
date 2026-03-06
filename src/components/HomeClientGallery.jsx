import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// ---------------- DARK COLOR CHECK ----------------
function isDarkColor(hex) {
  if (!hex) return false;
  const c = hex.replace("#", "");
  const r = parseInt(c.substring(0, 2), 16);
  const g = parseInt(c.substring(2, 4), 16);
  const b = parseInt(c.substring(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance < 0.5;
}

export default function HomeClientGallery() {

const clients = [
{
name:"The Garden Retreat",
link:"/work/the-garden-retreat",
desc:"Luxury hospitality with strong engagement.",
bg:"#2e5c2e",
stats:["67K Views","74 Posts","13K Followers","49% Engagement"],
grid:"/client-grid/graden-retreat-grid.jpg"
},
{
name:"Adda Indian Eatery",
link:"/work/adda-indian-eatery",
desc:"Bold content delivering powerful organic reach.",
bg:"#FFC100",
stats:["214K Views","1.2K Interactions","71 Shares","1.9K Followers"],
grid:"/client-grid/adda-grid.jpg"
},
{
name:"Triveeni Events",
link:"/work/triveeni-events",
desc:"Event branding that scaled exponentially.",
bg:"#FAFFD7",
stats:["1.3M Views","439K Reach","89% Organic","130% Growth"],
grid:"/client-grid/triveni-grid.jpg"
},
{
name:"Pita Nutso",
link:"/work/pita-nutso",
desc:"Organic growth for a takeaway favourite.",
bg:"#FDF1D9",
stats:["36.1K Views","52 Posts","276 Interactions","66% Engagement"],
grid:"/client-grid/pita-grid.jpg"
},
{
name:"Nayya Pizza & Grill",
link:"/work/nayya-pizza",
desc:"High-performing campaigns with strong traction.",
bg:"#FF6B01",
stats:["312K Views","47 Posts","900+ Followers","54% Engagement"],
grid:"/client-grid/nayya-grid.jpg"
},
{
name:"Beaver Bank Station",
link:"/work/beaver-bank-station",
desc:"Consistent performance with strong retention.",
bg:"#fa9b0b",
stats:["120K Reach","58 Videos","4.2% Growth","36% Engagement"],
grid:"/client-grid/beaver-grid.jpg"
},
];

const [index,setIndex]=useState(0);

const prevClient=()=>{
setIndex(prev=>prev===0?clients.length-1:prev-1);
};

const nextClient=()=>{
setIndex(prev=>prev===clients.length-1?0:prev+1);
};

// how many cards visible
const getVisibleCards=()=>{
if(typeof window==="undefined") return 3;
if(window.innerWidth>=1024) return 3;
if(window.innerWidth>=768) return 2;
return 1;
};

return(

<section className="pb-20 pt-6 px-6">

<p className="text-[#0E6388] font-semibold tracking-wide mb-2 text-center">
→ Client Results
</p>

<h2 className="text-center text-4xl md:text-5xl font-extrabold text-[#063349]">
Client <span className="text-[#0E6388]">Results</span>
</h2>

<p className="text-[#063349]/80 text-lg max-w-3xl mx-auto mt-2 mb-8 text-center">
Clear metrics and transparent reporting that demonstrate the effectiveness of our work.
</p>

{/* MOBILE NAVIGATION */}
<div className="md:hidden flex items-center justify-center gap-4 mb-10">

<button
onClick={prevClient}
className="h-9 w-9 flex items-center justify-center rounded-full border border-[#063349] text-[#063349]"
>
←
</button>

<div className="px-4 py-2 rounded-full border border-[#063349] text-[#063349] text-sm font-semibold max-w-[220px] truncate">
{clients[index].name}
</div>

<button
onClick={nextClient}
className="h-9 w-9 flex items-center justify-center rounded-full border border-[#063349] text-[#063349]"
>
→
</button>

</div>


{/* DESKTOP / TABLET ARROWS */}
{/* GRID + SIDE ARROWS */}
<div className="relative max-w-7xl mx-auto">

{/* LEFT ARROW */}
<button
onClick={prevClient}
className="hidden md:flex absolute left-[-20px] top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full border border-[#063349] text-[#063349] bg-white shadow"
>
←
</button>

{/* RIGHT ARROW */}
<button
onClick={nextClient}
className="hidden md:flex absolute right-[-20px] top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full border border-[#063349] text-[#063349] bg-white shadow"
>
→
</button>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

{Array.from({ length: getVisibleCards() }).map((_,i)=>{

const c = clients[(index+i)%clients.length];
const dark=isDarkColor(c.bg);

return(

<motion.div
key={i}
whileHover={{scale:1.02}}
className="rounded-3xl p-8 shadow-xl overflow-hidden"
style={{background:c.bg}}
>

<div className="rounded-2xl overflow-hidden shadow-lg mb-6">
<img src={c.grid} className="w-full h-auto"/>
</div>

<h3
className="text-2xl font-bold text-center"
style={{color:dark?"#fff":"#063349"}}
>
{c.name}
</h3>

<p
className="text-center text-sm mt-1 mb-5"
style={{color:dark?"#fff":"#063349"}}
>
{c.desc}
</p>

<div className="grid grid-cols-2 gap-3">
{c.stats.map((s,i)=>(
<div
key={i}
className="bg-white/90 text-black rounded-xl py-3 text-center font-semibold shadow-sm"
>
{s}
</div>
))}
</div>

<Link to={c.link}>
<button className="mt-6 w-full py-2 rounded-full bg-white text-black font-semibold hover:bg-black hover:text-white transition-all duration-300">
View Case →
</button>
</Link>

</motion.div>

);

})}

</div>

</div>




</section>

);
}