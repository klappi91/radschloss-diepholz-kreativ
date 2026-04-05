import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { CategoryHeader } from "@/components/category-header";
import { ProductGrid } from "@/components/product-grid";
import { trekkingProducts } from "@/data/products";

export const metadata: Metadata = {
  title: "Trekking & SUV E-Bikes — RadSchloß Diepholz",
  description:
    "Trekking und SUV E-Bikes von Conway, Victoria und HoheAcht. Für jedes Abenteuer bereit.",
};

export default function TrekkingSuvPage() {
  return (
    <>
      <Header />
      <main>
        <CategoryHeader title="Trekking / SUV" />
        <ProductGrid products={trekkingProducts} />
      </main>
      <Footer />
    </>
  );
}
