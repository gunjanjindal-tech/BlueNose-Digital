import { useEffect, useState } from "react";

export default function SmartCounter({ value, duration = 8000 }) {
  const [count, setCount] = useState(0);

  // Extract number + suffix
  const match = value.match(/([\d.]+)(.*)/);
  if (!match) return <>{value}</>;

  const target = parseFloat(match[1]);
  const suffix = match[2];

  useEffect(() => {
    let start = 0;
    const startTime = performance.now();

    const animate = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const current = start + progress * target;
      setCount(current);

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [target, duration]);

  return (
    <>
      {Number.isInteger(target)
        ? Math.round(count)
        : count.toFixed(1)}
      {suffix}
    </>
  );
}
