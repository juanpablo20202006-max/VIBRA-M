import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import DemoOne from "@/components/ui/demo";
import MotionFooterDemo from "@/components/ui/motion-footer-demo";
import {
  ScrollProgressBarCircleDemo,
  ScrollProgressBarTopDemo,
} from "@/components/ui/scroll-progress-bar-demo";
import "./index.css";

function DemoViewer() {
  const [activeDemo, setActiveDemo] = useState<
    "tabs" | "motionFooter" | "scrollTop" | "scrollCircle"
  >("motionFooter");

  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-900 font-sans">
      <div className="sticky top-0 z-[10000] bg-white/95 backdrop-blur-md border-b border-neutral-200 px-6 py-3 flex flex-wrap items-center justify-between gap-3 shadow-xs">
        <h1 className="font-extrabold text-base md:text-lg text-[#D81B60]">
          VibraGroup &mdash; Demos de Componentes
        </h1>
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setActiveDemo("motionFooter")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
              activeDemo === "motionFooter"
                ? "bg-[#D81B60] text-white shadow-xs"
                : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
            }`}
          >
            ✨ Motion Footer (Cinematic)
          </button>
          <button
            onClick={() => setActiveDemo("tabs")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
              activeDemo === "tabs"
                ? "bg-[#D81B60] text-white shadow-xs"
                : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
            }`}
          >
            SlideTabs (Header)
          </button>
          <button
            onClick={() => setActiveDemo("scrollTop")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
              activeDemo === "scrollTop"
                ? "bg-[#D81B60] text-white shadow-xs"
                : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
            }`}
          >
            Scroll Barra Superior
          </button>
          <button
            onClick={() => setActiveDemo("scrollCircle")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
              activeDemo === "scrollCircle"
                ? "bg-[#D81B60] text-white shadow-xs"
                : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
            }`}
          >
            Scroll Círculo (%)
          </button>
          <a
            href="index.html"
            className="ml-2 px-3.5 py-1.5 rounded-full bg-neutral-900 text-white text-xs font-semibold hover:bg-black transition-all"
          >
            &larr; Volver a la Web
          </a>
        </div>
      </div>

      <div>
        {activeDemo === "motionFooter" && <MotionFooterDemo />}
        {activeDemo === "tabs" && <DemoOne />}
        {activeDemo === "scrollTop" && <ScrollProgressBarTopDemo />}
        {activeDemo === "scrollCircle" && <ScrollProgressBarCircleDemo />}
      </div>
    </div>
  );
}

const rootEl = document.getElementById("root");
if (rootEl) {
  ReactDOM.createRoot(rootEl).render(
    <React.StrictMode>
      <DemoViewer />
    </React.StrictMode>
  );
}
