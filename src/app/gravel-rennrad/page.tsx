import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { CategoryHeader } from "@/components/category-header";
import { ProductGrid } from "@/components/product-grid";
import { gravelProducts } from "@/data/products";

export const metadata: Metadata = {
  title: "Gravel & Rennrad — RadSchloß Diepholz",
  description:
    "Gravel Bikes und E-Gravel von Conway und HoheAcht. Carbon-Rahmen, Shimano GRX, SRAM.",
};

export default function GravelRennradPage() {
  return (
    <>
      <Header />
      <main>
        <CategoryHeader title="Gravel / Rennrad" />
        <ProductGrid products={gravelProducts} />
      </main>
      <Footer />
    </>
  );
}
