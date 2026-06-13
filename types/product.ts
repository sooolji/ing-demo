export type CategoryColor = "citric" | "vegetable";

export interface Product {
  id: string;
  slug: string;
  category: string;
  categoryColor: CategoryColor;
  name: string;
  origin: string;
  season: string;
  variety: string;
  caliber: string;
  flavor: string;
  presentation: string;
  image: string;
  imageAlt: string;
}

export interface SpecItem {
  icon: string;
  label: string;
  value: string;
}
