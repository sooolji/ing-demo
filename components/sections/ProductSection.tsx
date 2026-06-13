"use client";

import { useEffect, useState } from "react";
import { ProductCard } from "@/components/product/ProductCard";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import type { Product } from "@/types/product";

export function ProductSection() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("/api/products");
        if (!res.ok) throw new Error("Error al cargar los productos");
        const data = await res.json();
        setProducts(data);
      } catch {
        setError("No pudimos cargar los productos. Intenta de nuevo.");
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [retryCount]);

  if (loading) {
    return (
      <div className="space-y-20 py-20">
        {[0, 1].map((i) => (
          <div
            key={i}
            className={`py-20 px-6 md:px-10 ${i % 2 === 0 ? "bg-cream" : "bg-cream-light"}`}
          >
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div className={`${i % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
                <Skeleton className="aspect-square w-full rounded-2xl" />
              </div>
              <div className={`${i % 2 === 0 ? "md:order-1" : "md:order-2"} space-y-8`}>
                <Skeleton className="h-6 w-24 rounded" />
                <Skeleton className="h-10 w-48" />
                <div>
                  {Array.from({ length: 6 }).map((_, j) => (
                    <div key={j} className="flex items-center gap-3 py-4 border-b border-gray-200">
                      <Skeleton className="h-5 w-5 rounded-md" />
                      <Skeleton className="h-3 w-20" />
                      <Skeleton className="h-3 w-28" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <section className="py-20 px-6 text-center bg-cream">
        <div className="max-w-md mx-auto space-y-6">
          <p className="text-text-secondary text-lg">{error}</p>
          <Button
            variant="default"
            onClick={() => setRetryCount((c) => c + 1)}
            aria-label="Reintentar carga de productos"
          >
            Intentar de nuevo
          </Button>
        </div>
      </section>
    );
  }

  return (
    <div>
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} />
      ))}
    </div>
  );
}
