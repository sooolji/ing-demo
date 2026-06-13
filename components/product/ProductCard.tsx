"use client";

import { Badge } from "@/components/ui/badge";
import { ProductSpecs } from "./ProductSpecs";
import { ProductImage } from "./ProductImage";
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const isEven = index % 2 === 0;

  return (
    <section
      className={`py-24 px-8 ${
        isEven ? "bg-cream" : "bg-cream-light"
      }`}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div
            className={`${
              isEven ? "md:order-2" : "md:order-1"
            } order-1`}
          >
            <ProductImage
              src={product.image}
              alt={product.imageAlt}
              priority={index === 0}
            />
          </div>

          <div
            className={`${
              isEven ? "md:order-1" : "md:order-2"
            } order-2 space-y-8 animate-slide-up`}
            style={{ opacity: 0 }}
          >
            <Badge
              variant={
                product.categoryColor === "citric" ? "citric" : "vegetable"
              }
            >
              {`0${index + 1}. ${product.category}`}
            </Badge>

            <h2 className="text-product-name-mobile md:text-product-name text-primary-green">
              {product.name}
            </h2>

            <ProductSpecs product={product} />
          </div>
        </div>
      </div>
    </section>
  );
}
