"use client";

import React from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

export interface ScrollProgressBarType {
  type?: "circle" | "bar";
  position?: "top-right" | "bottom-right" | "top-left" | "bottom-left";
  color?: string;
  strokeSize?: number;
  showPercentage?: boolean;
}

export default function ScrollProgressBar({
  type = "circle",
  position = "bottom-right",
  color = "#D81B60",
  strokeSize = 3,
  showPercentage = false,
}: ScrollProgressBarType) {
  const { scrollYProgress } = useScroll();

  const scrollPercentage = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const [percentage, setPercentage] = React.useState(0);

  useMotionValueEvent(scrollPercentage, "change", (latest) => {
    setPercentage(Math.round(latest));
  });

  if (type === "bar") {
    return (
      <div
        className="fixed start-0 end-0 top-0 pointer-events-none z-[9999]"
        style={{ height: `${strokeSize + 2}px` }}
      >
        <span
          className="bg-primary h-full block transition-all"
          style={{
            backgroundColor: color,
            width: `${percentage}%`,
          }}
        ></span>
      </div>
    );
  }

  return (
    <div
      className={cn("fixed flex items-center justify-center z-[9999] pointer-events-none select-none", {
        "top-4 end-4": position === "top-right",
        "bottom-6 end-6": position === "bottom-right",
        "top-4 start-4": position === "top-left",
        "bottom-6 start-4": position === "bottom-left",
      })}
    >
      {percentage > 0 && (
        <div className="relative flex items-center justify-center rounded-full bg-white/95 p-1.5 shadow-lg backdrop-blur-md border border-neutral-200/90">
          <svg width="68" height="68" viewBox="0 0 100 100" className="-rotate-90">
            <circle
              cx="50"
              cy="50"
              r="36"
              fill="none"
              stroke="#E5E1DE"
              strokeWidth={strokeSize}
            />
            <motion.circle
              cx="50"
              cy="50"
              r="36"
              pathLength="1"
              stroke={color}
              fill="none"
              strokeDashoffset="0"
              strokeWidth={strokeSize}
              strokeLinecap="round"
              style={{ pathLength: scrollYProgress }}
            />
          </svg>
          {showPercentage && (
            <span className="text-xs font-bold text-neutral-800 absolute font-sans">
              {percentage}%
            </span>
          )}
        </div>
      )}
    </div>
  );
}
