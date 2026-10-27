"use client";

import ScrollProgressBar from "@/components/ui/scroll-progress-bar";

function ScrollProgressBarCircleDemo() {
  return (
    <div className="min-h-[200vh] w-full relative bg-neutral-50 text-neutral-900">
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-full max-w-5xl mx-auto p-4">
          <div className="rounded-2xl p-8 text-xl w-full h-[500px] border border-neutral-200 bg-white/90 shadow-md backdrop-blur-sm flex flex-col justify-center">
            <h2 className="text-3xl font-extrabold mb-4 text-[#D81B60]">Circle Progress Indicator</h2>
            <p className="mb-4 text-neutral-700">Haz scroll hacia abajo para ver el indicador circular de lectura en acción.</p>
            <p className="mb-4 text-neutral-500 text-base">Esta versión muestra el porcentaje exacto y utiliza el color de marca oficial de la plataforma (#D81B60).</p>
          </div>
        </div>
      </div>
      <ScrollProgressBar showPercentage color="#D81B60" strokeSize={3} />
      <div className="h-[200vh]" aria-hidden="true" />
    </div>
  );
}

function ScrollProgressBarTopDemo() {
  return (
    <div className="min-h-[200vh] w-full relative bg-neutral-50 text-neutral-900">
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-full max-w-5xl mx-auto p-4">
          <div className="rounded-2xl p-8 text-xl w-full h-[500px] border border-neutral-200 bg-white/90 shadow-md backdrop-blur-sm flex flex-col justify-center">
            <h2 className="text-3xl font-extrabold mb-4 text-[#D81B60]">Top Bar Progress Indicator</h2>
            <p className="mb-4 text-neutral-700">Haz scroll hacia abajo para ver la barra superior de progreso.</p>
            <p className="mb-4 text-neutral-500 text-base">Esta versión proyecta una línea horizontal continua sobre el borde superior de la pantalla.</p>
          </div>
        </div>
      </div>
      <ScrollProgressBar type="bar" color="#D81B60" strokeSize={4} />
      <div className="h-[200vh]" aria-hidden="true" />
    </div>
  );
}

function ScrollProgressBarCustomDemo() {
  return (
    <div className="min-h-[200vh] w-full relative bg-neutral-50 text-neutral-900">
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-full max-w-5xl mx-auto p-4">
          <div className="rounded-2xl p-8 text-xl w-full h-[500px] border border-neutral-200 bg-white/90 shadow-md backdrop-blur-sm flex flex-col justify-center">
            <h2 className="text-3xl font-extrabold mb-4 text-[#A66A50]">Custom Position Progress</h2>
            <p className="mb-4 text-neutral-700">Indicador en posición personalizada superior izquierda.</p>
            <p className="mb-4 text-neutral-500 text-base">Configurado con tono terracota artesanal (#A66A50).</p>
          </div>
        </div>
      </div>
      <ScrollProgressBar 
        position="top-left"
        color="#A66A50"
        strokeSize={3}
        showPercentage
      />
      <div className="h-[200vh]" aria-hidden="true" />
    </div>
  );
}

export { ScrollProgressBarCircleDemo, ScrollProgressBarTopDemo, ScrollProgressBarCustomDemo };
