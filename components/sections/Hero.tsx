"use client";

import { Icon } from "@/components/ui/icon";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 text-center bg-gradient-to-b from-cream to-white">
      <div className="max-w-[900px] mx-auto space-y-6 animate-fade-in">
        <h1 className="text-hero-mobile md:text-hero text-primary-green">
          Ingredientes que inspiran<span className="text-secondary-green">.</span>
        </h1>
        <p
          className="text-base md:text-lg text-text-secondary max-w-[600px] mx-auto leading-relaxed"
          style={{ animationDelay: "200ms" }}
        >
          Seleccionamos lo mejor de la naturaleza para llevar frescura, calidad
          y sabor a cada creación.
        </p>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 scroll-indicator">
        <Icon
          name="ChevronDown"
          className="text-primary-green"
          size={28}
        />
      </div>
    </section>
  );
}
