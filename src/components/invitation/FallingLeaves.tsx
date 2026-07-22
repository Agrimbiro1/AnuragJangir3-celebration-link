import { useEffect, useState } from "react";

const LeafIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    style={style}
  >
    <path d="M17.5 2C15.5 2 13.5 3.5 12 5.5C10.5 3.5 8.5 2 6.5 2C3.5 2 1 4.5 1 7.5C1 12.5 12 22 12 22C12 22 23 12.5 23 7.5C23 4.5 20.5 2 17.5 2Z" />
  </svg>
);

export function FallingLeaves() {
  const [leaves, setLeaves] = useState<{ id: number; left: number; delay: number; duration: number; size: number; rotation: number; color: string }[]>([]);

  useEffect(() => {
    const colors = ["#8B2E33", "#A84C51", "#C67073", "#D4AF37", "#E2B75A"];
    
    const arr = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 15 + Math.random() * 15,
      size: 16 + Math.random() * 20,
      rotation: Math.random() * 360,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));
    setLeaves(arr);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-10">
      {leaves.map((leaf) => (
        <LeafIcon
          key={leaf.id}
          className="absolute -top-10 opacity-70"
          style={{
            left: `${leaf.left}%`,
            width: leaf.size,
            height: leaf.size,
            color: leaf.color,
            transform: `rotate(${leaf.rotation}deg)`,
            animation: `fallDown ${leaf.duration}s linear ${leaf.delay}s infinite`,
            filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.1))"
          }}
        />
      ))}
    </div>
  );
}
