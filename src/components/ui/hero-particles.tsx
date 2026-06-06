import React, { useEffect, useState } from "react";

const STAR_COUNT = 48;
const ANIMATION_CLASSES = [
  "star-move-1", "star-move-2", "star-move-3", "star-move-4",
  "star-move-5", "star-move-6", "star-move-7", "star-move-8"
];

export default function HeroParticles({ className = "" }: { className?: string }) {
  const [stars, setStars] = useState<any[]>([]);

  useEffect(() => {
    setStars(Array.from({ length: STAR_COUNT }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 1.5 + Math.random() * 2.5,
      duration: 3 + Math.random() * 5,
      delay: Math.random() * 4,
      animation: ANIMATION_CLASSES[Math.floor(Math.random() * ANIMATION_CLASSES.length)],
    })));
  }, []);

  return (
    <div className={"pointer-events-none " + className} aria-hidden="true">
      {stars.map(star => (
        <div
          key={star.id}
          className={`absolute rounded-full bg-white opacity-80 animate-twinkle ${star.animation}`}
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDuration: `${star.duration}s, 8s`,
            animationDelay: `${star.delay}s, 0s`,
            boxShadow: `0 0 ${star.size * 4}px ${star.size / 2}px #fff8`,
          }}
        />
      ))}
    </div>
  );
}