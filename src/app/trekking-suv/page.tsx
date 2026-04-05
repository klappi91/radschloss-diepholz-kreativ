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
        <section className="py-20 md:py-32 bg-[#1a1f1c] text-center px-4">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold text-[#f5f5f0] mb-6">
            Interesse geweckt?
          </h2>
          <p className="text-[#9ca39e] text-lg mb-8 max-w-xl mx-auto">
            Besuchen Sie uns in Diepholz oder rufen Sie uns an. Wir beraten Sie gerne!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/kontakt" className="inline-flex items-center justify-center px-8 py-4 bg-[#c8ff00] text-[#0f1210] font-bold rounded-sm hover:bg-[#b3e600] transition-colors text-lg">
              Kontakt aufnehmen
            </a>
            <a href="https://wa.me/4917622649706" className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#c8ff00] text-[#c8ff00] font-bold rounded-sm hover:bg-[#c8ff00] hover:text-[#0f1210] transition-colors text-lg" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
