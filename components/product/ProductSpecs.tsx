"use client";

import { Icon } from "@/components/ui/icon";
import type { SpecItem } from "@/types/product";

const specConfig: { icon: string; label: string; key: keyof SpecItem }[] = [
  { icon: "MapPin", label: "Origen", key: "origin" },
  { icon: "Calendar", label: "Temporada", key: "season" },
  { icon: "Sprout", label: "Variedad", key: "variety" },
  { icon: "Ruler", label: "Calibre", key: "caliber" },
  { icon: "Droplet", label: "Sabor", key: "flavor" },
  { icon: "Package", label: "Presentación", key: "presentation" },
];

interface ProductSpecsProps {
  product: Record<string, string>;
}

export function ProductSpecs({ product }: ProductSpecsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
      {specConfig.map((spec, index) => (
        <div
          key={spec.key}
          className="flex items-center gap-3 animate-slide-up"
          style={{ animationDelay: `${index * 100}ms`, opacity: 0 }}
        >
          <Icon
            name={spec.icon}
            className="bg-[rgba(124,179,66,0.1)] text-secondary-green"
            size={20}
          />
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 min-w-0">
            <span className="text-sm font-medium text-text-secondary min-w-[100px] shrink-0">
              {spec.label}
            </span>
            <span className="text-sm font-semibold text-text-primary truncate">
              {product[spec.key] ?? product[spec.key.toLowerCase()] ?? ""}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
