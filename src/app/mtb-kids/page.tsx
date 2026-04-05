import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { CategoryHeader } from "@/components/category-header";
import { ProductGrid } from "@/components/product-grid";
import { mtbProducts, kidsProducts } from "@/data/products";

export const metadata: Metadata = {
  title: "MTB & Kids — RadSchloß Diepholz",
  description:
    "Mountainbikes und Kinder-Räder von Conway und HoheAcht. E-MTBs und robuste Kids-Bikes.",
};

export default function MtbKidsPage() {
  return (
    <>
      <Header />
      <main>
        <CategoryHeader title="MTB / Kids" />
        <ProductGrid products={[...mtbProducts, ...kidsProducts]} />
      </main>
      <Footer />
    </>
  );
}
