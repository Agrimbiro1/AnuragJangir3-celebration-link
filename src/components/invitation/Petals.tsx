import { useEffect, useState } from "react";

export function Petals() {
  const [petals, setPetals] = useState<{ id: number; left: number; delay: number; duration: number; size: number }[]>([]);
  useEffect(() => {
    const arr = Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 10 + Math.random() * 12,
      size: 8 + Math.random() * 14,
    }));
    setPetals(arr);
  }, []);
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {petals.map((p) => (
        <span
          key={p.id}
          className="absolute -bottom-8 rounded-full opacity-70"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            background: "radial-gradient(circle at 30% 30%, oklch(0.85 0.14 15), oklch(0.55 0.14 20) 80%)",
            filter: "blur(0.3px)",
            animation: `floatUp ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
