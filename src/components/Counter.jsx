import { useEffect, useState } from "react";

export default function Counter({ end, duration = 3000 }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const fps = 60; 
    const totalFrames = Math.round((duration / 1000) * fps);
    const increment = end / totalFrames;

    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      start += increment;

      if (frame >= totalFrames) {
        start = end;
        clearInterval(counter);
      }

      setValue(Math.floor(start));
    }, 1000 / fps);

    return () => clearInterval(counter);
  }, [end, duration]);

  return value.toLocaleString();
}