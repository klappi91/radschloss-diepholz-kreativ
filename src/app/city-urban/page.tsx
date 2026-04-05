import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { CategoryHeader } from "@/components/category-header";
import { ProductGrid } from "@/components/product-grid";
import { cityProducts } from "@/data/products";

export const metadata: Metadata = {
  title: "City & Urban E-Bikes — RadSchloß Diepholz",
  description:
    "City und Urban E-Bikes von HoheAcht, Victoria und QiO. Erstklassige E-Bikes für die Stadt bei RadSchloß Diepholz.",
};

export default function CityUrbanPage() {
  return (
    <>
      <Header />
      <main>
        <CategoryHeader title="City / Urban" />
        <ProductGrid products={cityProducts} />
      </main>
      <Footer />
    </>
  );
}
