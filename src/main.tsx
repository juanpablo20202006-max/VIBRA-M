import React from "react";
import ReactDOM from "react-dom/client";
import { SlideTabs } from "@/components/ui/slide-tabs";
import { CinematicFooter } from "@/components/ui/motion-footer";
import "./index.css";

const isDisenosPage =
  window.location.pathname.includes("disenos") ||
  window.location.href.includes("disenos.html");

const vibraNavItems = [
  { label: "Inicio", href: "index.html" },
  { label: "Nuestra Causa", href: isDisenosPage ? "index.html#mision" : "#mision" },
  { label: "Nuestros Diseños / Kit Escolar", href: "disenos.html" },
  { label: "Donar", href: "#donaciones" },
  { label: "Historias de las Madres", href: isDisenosPage ? "index.html#historias" : "#historias" },
  { label: "Eventos", href: isDisenosPage ? "index.html#eventos" : "#eventos" },
];

const defaultIndex = isDisenosPage ? 2 : 0;

// Montar SlideTabs en el Header
const navContainer = document.getElementById("slide-tabs-nav-root");
if (navContainer) {
  const root = ReactDOM.createRoot(navContainer);
  root.render(
    <React.StrictMode>
      <SlideTabs
        items={vibraNavItems}
        defaultIndex={defaultIndex}
        violetColor="#D81B60"
      />
    </React.StrictMode>
  );
}

// Montar Transición Cinemática interactiva GSAP ScrollTrigger justo después del Hero
const cinematicContainer = document.getElementById("cinematic-section-root");
if (cinematicContainer) {
  const root = ReactDOM.createRoot(cinematicContainer);
  root.render(
    <React.StrictMode>
      <CinematicFooter
        giantText="VIBRA-M"
        heading="Historias que Transforman Familias"
      />
    </React.StrictMode>
  );
}

// Remover cualquier contenedor de scroll previo si existía en el DOM
const existingScroll = document.getElementById("scroll-progress-root");
if (existingScroll) {
  existingScroll.remove();
}
