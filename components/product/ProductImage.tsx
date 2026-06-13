"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProductImageProps {
  src: string;
  alt: string;
  priority?: boolean;
}

export function ProductImage({ src, alt, priority = false }: ProductImageProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] group">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/5 z-10 pointer-events-none" />
      <Image
        src={src}
        alt={alt}
        width={600}
        height={600}
        priority={priority}
        className={cn(
          "w-full aspect-square object-cover transition-transform duration-300 ease-out",
          "group-hover:scale-[1.02]"
        )}
      />
    </div>
  );
}
