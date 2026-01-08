import React from "react";

export default function BlueSidebar({ sections, active }) {
  return (
    <aside
      className="
        hidden lg:flex
        flex-col
        w-[260px]
        min-h-screen
        sticky top-[120px]
        rounded-3xl
        shadow-lg
        p-6
        text-white
        py-20
      "
      style={{ background: "rgb(14, 99, 136)" }}
    >
      {sections.map((item) => {
        const isActive = active === item.id;

        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`
              group relative py-3 pl-6 pr-3 rounded-lg mb-12 transition-all duration-300
              block
              ${isActive ? "font-bold scale-[1.03]" : "opacity-80 hover:opacity-100"}
            `}
          >
            {/* Left Highlight Bar */}
            <span
              className={`
                absolute left-0 top-0 h-full w-1.5 rounded-full bg-white 
                transition-all duration-300
                ${isActive ? "opacity-100" : "opacity-30 group-hover:opacity-60"}
              `}
            />

            <span className="text-base">{item.name}</span>
          </a>
        );
      })}
    </aside>
  );
}