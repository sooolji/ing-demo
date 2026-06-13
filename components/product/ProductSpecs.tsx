"use client";

import { Icon } from "@/components/ui/icon";
import type { Product } from "@/types/product";

type SpecKey = "origin" | "season" | "variety" | "caliber" | "flavor" | "presentation";

const specConfig: { icon: string; label: string; key: SpecKey }[] = [
  { icon: "MapPin", label: "Origen", key: "origin" },
  { icon: "Calendar", label: "Temporada", key: "season" },
  { icon: "Sprout", label: "Variedad", key: "variety" },
  { icon: "Ruler", label: "Calibre", key: "caliber" },
  { icon: "Droplet", label: "Sabor", key: "flavor" },
  { icon: "Package", label: "Presentación", key: "presentation" },
];

interface ProductSpecsProps {
  product: Pick<Product, SpecKey>;
}

export function ProductSpecs({ product }: ProductSpecsProps) {
  return (
    <div>
      {specConfig.map((spec, index) => (
        <div
          key={spec.key}
          className="flex items-center gap-3 py-4 border-b border-[#E5E7EB] last:border-b-0 animate-slide-up"
          style={{ animationDelay: `${index * 100}ms`, opacity: 0 }}
        >
          <Icon
            name={spec.icon}
            className="bg-[rgba(124,179,66,0.1)] text-secondary-green"
            size={20}
          />
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <span className="text-sm text-text-secondary min-w-[100px] shrink-0">
              {spec.label}
            </span>
            <span className="text-sm font-medium text-text-primary truncate">
              {product[spec.key]}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
