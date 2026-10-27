"use client";

import * as React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

// Register ScrollTrigger safely for React
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// -------------------------------------------------------------------------
// 1. THEME-ADAPTIVE INLINE STYLES (Adaptado con la paleta de VibraGroup)
// -------------------------------------------------------------------------
const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap');

.cinematic-footer-wrapper {
  font-family: 'Plus Jakarta Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  
  --foreground: #171717;
  --background: #FFFFFF;
  --primary: #D81B60;
  --secondary: #A66A50;
  --muted-foreground: #555555;
  --border: #E5E1DE;
  --destructive: #D81B60;

  /* Variables dinámicas para cápsulas */
  --pill-bg-1: rgba(255, 255, 255, 0.96);
  --pill-bg-2: rgba(248, 243, 233, 0.90);
  --pill-shadow: rgba(0, 0, 0, 0.06);
  --pill-highlight: rgba(255, 255, 255, 1);
  --pill-inset-shadow: rgba(0, 0, 0, 0.03);
  --pill-border: rgba(229, 225, 222, 0.9);
  
  --pill-bg-1-hover: rgba(255, 255, 255, 1);
  --pill-bg-2-hover: rgba(248, 232, 238, 0.95);
  --pill-border-hover: rgba(216, 27, 96, 0.45);
  --pill-shadow-hover: rgba(216, 27, 96, 0.18);
  --pill-highlight-hover: rgba(255, 255, 255, 1);
}

@keyframes footer-breathe {
  0% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
  100% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; }
}

@keyframes footer-scroll-marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

@keyframes footer-heartbeat {
  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 5px rgba(216, 27, 96, 0.5)); }
  15%, 45% { transform: scale(1.2); filter: drop-shadow(0 0 10px rgba(216, 27, 96, 0.8)); }
  30% { transform: scale(1); }
}

.animate-footer-breathe {
  animation: footer-breathe 8s ease-in-out infinite alternate;
}

.animate-footer-scroll-marquee {
  animation: footer-scroll-marquee 35s linear infinite;
}

.animate-footer-heartbeat {
  animation: footer-heartbeat 2s cubic-bezier(0.25, 1, 0.5, 1) infinite;
}

/* Fondo retícula elegante */
.footer-bg-grid {
  background-size: 60px 60px;
  background-image: 
    linear-gradient(to right, rgba(0, 0, 0, 0.035) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.035) 1px, transparent 1px);
  mask-image: linear-gradient(to bottom, transparent, black 25%, black 75%, transparent);
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 25%, black 75%, transparent);
}

/* Aurora Glow con paleta de marca */
.footer-aurora {
  background: radial-gradient(
    circle at 50% 50%, 
    rgba(216, 27, 96, 0.20) 0%, 
    rgba(166, 106, 80, 0.12) 40%, 
    transparent 70%
  );
}

/* Glass Pill Theming */
.footer-glass-pill {
  background: linear-gradient(145deg, var(--pill-bg-1) 0%, var(--pill-bg-2) 100%);
  box-shadow: 
      0 10px 30px -10px var(--pill-shadow), 
      inset 0 1px 1px var(--pill-highlight), 
      inset 0 -1px 2px var(--pill-inset-shadow);
  border: 1px solid var(--pill-border);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.footer-glass-pill:hover {
  background: linear-gradient(145deg, var(--pill-bg-1-hover) 0%, var(--pill-bg-2-hover) 100%);
  border-color: var(--pill-border-hover);
  box-shadow: 
      0 20px 40px -10px var(--pill-shadow-hover), 
      inset 0 1px 1px var(--pill-highlight-hover);
  color: #171717;
}

/* Giant Background Text Masking */
.footer-giant-bg-text {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
  text-align: center;
  z-index: 0;
  font-weight: 900;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
}

/* En Celular / Móvil: Justo encima de la insignia "Hecho con corazón" */
@media (max-width: 767px) {
  .footer-giant-bg-text {
    bottom: 125px;
    font-size: clamp(2.5rem, 15vw, 4.2rem);
    line-height: 0.85;
    letter-spacing: -0.02em;
    -webkit-text-stroke: 1.5px rgba(216, 27, 96, 0.32);
    background: linear-gradient(180deg, rgba(216, 27, 96, 0.28) 0%, rgba(166, 106, 80, 0.14) 70%, transparent 100%);
    filter: drop-shadow(0 4px 16px rgba(216, 27, 96, 0.16));
  }
}

/* En Computadores / Escritorio (PC): En el fondo inferior original */
@media (min-width: 768px) {
  .footer-giant-bg-text {
    bottom: -4vh;
    font-size: 22vw;
    line-height: 0.75;
    letter-spacing: -0.04em;
    -webkit-text-stroke: 1px rgba(216, 27, 96, 0.14);
    background: linear-gradient(180deg, rgba(216, 27, 96, 0.18) 0%, transparent 65%);
    filter: none;
  }
}

/* Metallic Text Glow */
.footer-text-glow {
  background: linear-gradient(180deg, #171717 0%, #444444 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0px 0px 24px rgba(216, 27, 96, 0.15));
}
`;

// -------------------------------------------------------------------------
// 2. MAGNETIC BUTTON PRIMITIVE (Zero Dependency)
// -------------------------------------------------------------------------
export type MagneticButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & 
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as?: React.ElementType;
  };

const MagneticButton = React.forwardRef<HTMLElement, MagneticButtonProps>(
  ({ className, children, as: Component = "button", ...props }, forwardedRef) => {
    const localRef = useRef<HTMLElement>(null);

    useEffect(() => {
      if (typeof window === "undefined") return;
      if (window.matchMedia("(pointer: coarse)").matches) return;
      const element = localRef.current;
      if (!element) return;

      const ctx = gsap.context(() => {
        const handleMouseMove = (e: MouseEvent) => {
          const rect = element.getBoundingClientRect();
          const h = rect.width / 2;
          const w = rect.height / 2;
          const x = e.clientX - rect.left - h;
          const y = e.clientY - rect.top - w;

          gsap.to(element, {
            x: x * 0.4,
            y: y * 0.4,
            rotationX: -y * 0.15,
            rotationY: x * 0.15,
            scale: 1.05,
            ease: "power2.out",
            duration: 0.4,
          });
        };

        const handleMouseLeave = () => {
          gsap.to(element, {
            x: 0,
            y: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            ease: "elastic.out(1, 0.3)",
            duration: 1.2,
          });
        };

        element.addEventListener("mousemove", handleMouseMove as any);
        element.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          element.removeEventListener("mousemove", handleMouseMove as any);
          element.removeEventListener("mouseleave", handleMouseLeave);
        };
      }, element);

      return () => ctx.revert();
    }, []);

    return (
      <Component
        ref={(node: HTMLElement) => {
          (localRef as any).current = node;
          if (typeof forwardedRef === "function") forwardedRef(node);
          else if (forwardedRef) (forwardedRef as any).current = node;
        }}
        className={cn("cursor-pointer", className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
MagneticButton.displayName = "MagneticButton";

// -------------------------------------------------------------------------
// 3. MAIN COMPONENT (CinematicFooter)
// -------------------------------------------------------------------------
const MarqueeItem = () => (
  <div className="flex items-center space-x-12 px-6">
    <span>Juntos Hacemos País</span> <span className="text-[#D81B60]">✦</span>
    <span>Madres Artesanas de Colombia</span> <span className="text-[#A66A50]">✦</span>
    <span>Trazabilidad QR en Cada Morral</span> <span className="text-[#D81B60]">✦</span>
    <span>Donaciones Transparentes</span> <span className="text-[#A66A50]">✦</span>
    <span>Kits Escolares para Comunidades</span> <span className="text-[#D81B60]">✦</span>
  </div>
);

export interface CinematicFooterProps {
  giantText?: string;
  heading?: string;
}

export function CinematicFooter({
  giantText = "COLOMBIA",
  heading = "¿Listo para transformar vidas?",
}: CinematicFooterProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const giantTextRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = React.useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!wrapperRef.current) return;

    // React strict mode compatible GSAP context cleanup
    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;

      if (isMobile) {
        // En móviles: animación fluida con Parallax suave durante el efecto telón
        // La opacidad inicia en 0.75 para que siempre esté visible y brillante al abrir el telón
        gsap.fromTo(
          giantTextRef.current,
          { y: 15, scale: 0.94, opacity: 0.75 },
          {
            y: -15,
            scale: 1.05,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: wrapperRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );

        gsap.fromTo(
          headingRef.current,
          { y: 25, opacity: 0.8 },
          {
            y: 0,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: wrapperRef.current,
              start: "top 80%",
              end: "top 20%",
              scrub: 0.5,
            },
          }
        );

        gsap.fromTo(
          linksRef.current,
          { y: 25, opacity: 0.8 },
          {
            y: 0,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: wrapperRef.current,
              start: "top 70%",
              end: "top 10%",
              scrub: 0.5,
            },
          }
        );
      } else {
        // En escritorio: efecto de cortina con parallax completo
        gsap.fromTo(
          giantTextRef.current,
          { y: "8vh", scale: 0.85, opacity: 0.3 },
          {
            y: "0vh",
            scale: 1,
            opacity: 1,
            ease: "power1.out",
            scrollTrigger: {
              trigger: wrapperRef.current,
              start: "top 85%",
              end: "bottom bottom",
              scrub: 1,
            },
          }
        );

        gsap.fromTo(
          [headingRef.current, linksRef.current],
          { y: 35, opacity: 0.4 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: wrapperRef.current,
              start: "top 60%",
              end: "bottom bottom",
              scrub: 1,
            },
          }
        );
      }
    }, wrapperRef);

    return () => ctx.revert();
  }, [isDesktop]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      
      {/* 
        The Cinematic Transition Section (Efecto Telón / Curtain Reveal):
        - Funciona de forma idéntica en Celular y PC con aceleración por hardware.
        - El contenedor wrapper abre una ventana con clip-path mientras las secciones adyacentes (Hero y Misión con z-index 2) se deslizan como telón.
      */}
      <div
        ref={wrapperRef}
        className="relative w-full overflow-hidden"
        style={{
          height: "100vh",
          minHeight: "100dvh",
          clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
          WebkitClipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
        }}
      >
        {/* El contenido permanece fijo al fondo tanto en celular como en PC para lograr el efecto telón */}
        <footer
          className="fixed bottom-0 left-0 flex w-full flex-col justify-between overflow-hidden bg-white text-[#171717] cinematic-footer-wrapper pt-8 pb-3 md:py-0"
          style={{
            height: "100vh",
            minHeight: "100dvh",
            transform: "translateZ(0)",
            WebkitTransform: "translateZ(0)",
          }}
        >
          
          {/* Ambient Light & Grid Background */}
          <div className="footer-aurora absolute left-1/2 top-1/2 h-[75vh] w-[90vw] md:h-[60vh] md:w-[80vw] -translate-x-1/2 -translate-y-1/2 animate-footer-breathe rounded-[50%] blur-[70px] md:blur-[80px] pointer-events-none z-0" />
          <div className="footer-bg-grid absolute inset-0 z-0 pointer-events-none" />

          {/* Giant background text: En PC en el fondo inferior (-4vh); en celular encima de la insignia (bottom: 125px) */}
          <div
            ref={giantTextRef}
            className="footer-giant-bg-text"
          >
            {giantText}
          </div>

          {/* 1. Diagonal Sleek Marquee (Top of footer) */}
          <div className="absolute top-2 md:top-12 left-0 w-full overflow-hidden border-y border-[#E5E1DE] bg-white/85 backdrop-blur-md py-2 md:py-4 z-10 -rotate-1 md:-rotate-2 scale-105 md:scale-110 shadow-xs">
            <div className="flex w-max animate-footer-scroll-marquee text-[11px] md:text-sm font-extrabold tracking-[0.18em] md:tracking-[0.25em] text-[#555555] uppercase">
              <MarqueeItem />
              <MarqueeItem />
            </div>
          </div>

          {/* 2. Main Center Content */}
          <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 md:px-6 mt-12 md:mt-20 w-full max-w-5xl mx-auto">
            {/* Tag decorativo */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 mb-3 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider text-[#D81B60] bg-[#F8E8EE] border border-[#D81B60]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D81B60] animate-pulse"></span>
              Propósito y Transformación
            </span>

            <h2
              ref={headingRef}
              className="text-2xl sm:text-4xl md:text-7xl font-black footer-text-glow tracking-tight mb-5 md:mb-10 text-center leading-tight max-w-xl md:max-w-4xl"
            >
              {heading}
            </h2>

            {/* Interactive Magnetic Pills Layout */}
            <div ref={linksRef} className="flex flex-col items-center gap-3.5 md:gap-6 w-full">
              {/* Primary Actions */}
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2.5 md:gap-4 w-full max-w-md sm:max-w-none">
                <MagneticButton
                  as="a"
                  href="#donaciones"
                  className="footer-glass-pill px-6 py-3.5 md:px-10 md:py-5 rounded-full text-[#171717] font-bold text-xs sm:text-sm md:text-base flex items-center justify-center gap-2.5 md:gap-3 group border-[#D81B60]/30 hover:border-[#D81B60] shadow-sm w-full sm:w-auto"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-[#D81B60] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                  Donar para un Kit Escolar
                </MagneticButton>
                
                <MagneticButton
                  as="a"
                  href="disenos.html"
                  className="footer-glass-pill px-6 py-3.5 md:px-10 md:py-5 rounded-full text-[#171717] font-bold text-xs sm:text-sm md:text-base flex items-center justify-center gap-2.5 md:gap-3 group border-[#A66A50]/30 hover:border-[#A66A50] shadow-sm w-full sm:w-auto"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-[#A66A50] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                  </svg>
                  Ver Catálogo de Morrales
                </MagneticButton>
              </div>

              {/* Secondary Navigation Pills */}
              <div className="flex flex-wrap justify-center gap-1.5 md:gap-4 w-full mt-1">
                <MagneticButton
                  as="a"
                  href="index.html#mision"
                  className="footer-glass-pill px-3 py-1.5 md:px-6 md:py-3 rounded-full text-[#555555] font-semibold text-[11px] md:text-sm hover:text-[#171717]"
                >
                  Nuestra Causa
                </MagneticButton>
                <MagneticButton
                  as="a"
                  href="index.html#historias"
                  className="footer-glass-pill px-3 py-1.5 md:px-6 md:py-3 rounded-full text-[#555555] font-semibold text-[11px] md:text-sm hover:text-[#171717]"
                >
                  Historias de las Madres
                </MagneticButton>
                <MagneticButton
                  as="a"
                  href="index.html#eventos"
                  className="footer-glass-pill px-3 py-1.5 md:px-6 md:py-3 rounded-full text-[#555555] font-semibold text-[11px] md:text-sm hover:text-[#171717]"
                >
                  Eventos Comunitarios
                </MagneticButton>
              </div>
            </div>
          </div>

          {/* 3. Bottom Bar / Credits */}
          <div className="relative z-20 w-full pt-4 pb-4 md:pb-8 px-4 md:px-12 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6 border-t border-[#E5E1DE]/50 md:border-t-0">
            
            {/* Copyright */}
            <div className="text-[#666666] text-[9px] md:text-xs font-semibold tracking-wider uppercase order-2 md:order-1 text-center md:text-left">
              &copy; {new Date().getFullYear()} Juntos hacemos Pa&iacute;s (VIBRA-M). Todos los derechos reservados.
            </div>

            {/* "Made with Love" Badge */}
            <div className="footer-glass-pill px-4 py-1.5 md:px-6 md:py-2.5 rounded-full flex items-center gap-2 order-1 md:order-2 cursor-default border-[#E5E1DE]">
              <span className="text-[#666666] text-[9px] md:text-xs font-bold uppercase tracking-widest">Hecho con</span>
              <span className="animate-footer-heartbeat text-xs md:text-base text-[#D81B60]">❤</span>
              <span className="text-[#666666] text-[9px] md:text-xs font-bold uppercase tracking-widest">por</span>
              <span className="text-[#171717] font-black text-[11px] md:text-sm tracking-normal ml-0.5">VibraGroup Colombia</span>
            </div>

            {/* Back to top */}
            <MagneticButton
              as="button"
              onClick={scrollToTop}
              className="w-9 h-9 md:w-11 md:h-11 rounded-full footer-glass-pill flex items-center justify-center text-[#555555] hover:text-[#D81B60] group order-3"
              aria-label="Volver arriba"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5 transform group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
              </svg>
            </MagneticButton>

          </div>
        </footer>
      </div>
    </>
  );
}
