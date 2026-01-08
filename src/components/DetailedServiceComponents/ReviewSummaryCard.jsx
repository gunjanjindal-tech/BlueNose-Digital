export default function ReviewSummaryCard() {
  return (
    <div className="
      bg-white 
      p-10 
      rounded-3xl 
      shadow-[0_8px_25px_rgba(0,0,0,0.08)]
      max-w-xl 
      text-left
    ">
      
      {/* Title Row */}
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-[#111]">Bluenose</h2>
        <a 
          href="#" 
          className="text-sm text-[#0E3D55] underline hover:text-[#0E6388]"
        >
          View our profile
        </a>
      </div>

      {/* Rating */}
      <div className="mt-4 flex items-center gap-2">
        <span className="text-2xl font-bold text-[#111]">4.9</span>
        <span className="text-yellow-400 text-2xl">★★★★★</span>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-3 mt-6">
        {[
          "High-quality work",
          "Timely",
          "Communicative",
          "Professional",
          "Project Management",
        ].map((tag, i) => (
          <span
            key={i}
            className="
              bg-[#F3F4F6] 
              text-[#111] 
              px-4 
              py-2 
              rounded-full 
              text-sm 
              font-medium
            "
          >
            {tag}
          </span>
        ))}
      </div>

    </div>
  );
}
