import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scroll = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scroll}
      className={`
        fixed right-6 bottom-6 z-50 p-3 rounded-full shadow-lg
        bg-[var(--bn-primary)] text-white flex items-center justify-center
        transform transition-transform duration-200
        ${visible ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"}
      `}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
