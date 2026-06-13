import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ingredientes que inspiran",
  description:
    "Seleccionamos lo mejor de la naturaleza para llevar frescura, calidad y sabor a cada creación.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
