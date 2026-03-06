import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollUp}
          className="fixed bottom-6 right-6 text-white px-4 py-3 rounded-full shadow-lg hover:scale-110 transition-all z-50"
          style={{
    background: "rgb(14, 99, 136)"
  }}
        >
          ↑
        </button>
      )}
    </>
  );
}
