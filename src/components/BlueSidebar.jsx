import React from "react";

export default function BlueSidebar({ sections, active }) {
  return (
    <div
  className="hidden md:block rounded-3xl p-3 mb-1 shadow-lg"
  style={{
    background: "rgb(14, 99, 136)"
  }}
>
      <aside className="sticky top-[140px] p-6 text-white space-y-8 "
      >
       
        {sections.map((item) => {
          const isActive = active === item.id;

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`
                group relative block py-2 pl-5 pr-3 rounded-lg transition-all duration-300
                ${isActive ? "scale-[1.06] font-bold" : "opacity-80 hover:opacity-100"}
              `}
            >
              {/* Left Highlight Bar */}
              <span
                className={`
                  absolute left-0 top-0 h-full w-1.5 rounded-full bg-white transition-all duration-300
                  ${isActive ? "opacity-100" : "opacity-30 group-hover:opacity-60"}
                `}
              />

              {/* Text */}
              <span className="inline-block transition-all duration-300">
                {item.name}
              </span>
            </a>
          );
        })}

      </aside>
    </div>
  );
}