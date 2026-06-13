import { NextResponse } from "next/server";
import type { Product } from "@/types/product";

const products: Product[] = [
  {
    id: "1",
    slug: "limon",
    category: "CÍTRICO",
    categoryColor: "citric",
    name: "Limón",
    origin: "España",
    season: "Todo el año",
    variety: "Fino",
    caliber: "48 - 58 mm",
    flavor: "Ácido y refrescante",
    presentation: "Caja 10 kg",
    image: "/lemon.jpg",
    imageAlt: "Limón fresco cortado",
  },
  {
    id: "2",
    slug: "tomate",
    category: "HORTALIZA",
    categoryColor: "vegetable",
    name: "Tomate",
    origin: "España",
    season: "Primavera - Otoño",
    variety: "Rama",
    caliber: "57 - 67 mm",
    flavor: "Dulce y jugoso",
    presentation: "Caja 6 kg",
    image: "/tomate.jpg",
    imageAlt: "Tomates frescos con rocío",
  },
];

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 600));

  if (Math.random() < 0.05) {
    return NextResponse.json(
      { error: "Error al cargar los productos" },
      { status: 500 }
    );
  }

  return NextResponse.json(products);
}
