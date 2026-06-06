"use client";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function BackgroundBeams({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const beamsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!beamsRef.current) return;
      const rect = beamsRef.current.getBoundingClientRect();
      setMousePosition({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className={cn(
        "h-full w-full overflow-hidden rounded-md bg-black",
        className
      )}
      ref={beamsRef}
    >
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(120, 119, 198, 0.15), transparent 40%)`,
        }}
      />
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        {children}
      </div>
    </div>
  );
}