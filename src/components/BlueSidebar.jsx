import React from "react";

export default function BlueSidebar({ sections, active }) {
  return (
    <div className="hidden md:block bg-gradient-to-b from-[#0AA3D8] to-[#015D86] rounded-3xl p-2 mb-12">
      <aside className="sticky top-28 p-6 text-white space-y-6">
        {sections.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`block pl-4 transition-all ${
              active === item.id
                ? "text-xl font-bold scale-[1.08] text-white border-l-4 border-white"
                : "text-white/80 hover:text-white"
            }`}
          >
            {item.name}
          </a>
        ))}
      </aside>
    </div>
  );
}