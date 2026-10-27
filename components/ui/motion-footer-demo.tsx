"use client";

import { CinematicFooter } from "@/components/ui/motion-footer";

export default function MotionFooterDemo() {
  return (
    <div className="relative w-full bg-neutral-900 min-h-screen font-sans selection:bg-white/20 overflow-x-hidden">
      {/* 
        MAIN CONTENT AREA 
        We use a high z-index and minimum height to allow the user 
        to scroll down and reveal the footer securely underneath.
      */}
      <main className="relative z-10 w-full min-h-[120vh] bg-neutral-900 flex flex-col items-center justify-center text-white border-b border-white/10 shadow-md rounded-b-3xl p-6 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(255,255,255,0.05)_0%,transparent_60%)] pointer-events-none" />
        
        <span className="text-[#D81B60] text-xs font-bold tracking-[0.3em] uppercase mb-4">
          Efecto Telón GSAP ScrollTrigger
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6 max-w-2xl">
          Desliza hacia abajo para descubrir el Footer Cinemático
        </h1>
        <p className="text-neutral-400 text-sm md:text-base max-w-lg mb-10">
          Al llegar al final del scroll, el contenido revela el pie de página con efecto de telón, marquesina animada, texto gigante con paralaje y botones magnéticos interactivos.
        </p>
        
        <div className="w-[1px] h-28 bg-gradient-to-b from-[#D81B60] to-transparent animate-pulse" />
      </main>

      {/* The Cinematic Footer is injected here */}
      <CinematicFooter />
    </div>
  );
}
