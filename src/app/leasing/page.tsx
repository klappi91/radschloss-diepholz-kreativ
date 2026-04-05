import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { leasingPartners, contactInfo } from "@/data/products";
import { MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Dienstrad-Leasing — RadSchloß Diepholz",
  description:
    "Dienstrad-Leasing bei RadSchloß Diepholz. 10 Leasing-Partner: JobRad, BusinessBike, Eurorad und mehr.",
};

export default function LeasingPage() {
  const whatsappUrl = `https://wa.me/49${contactInfo.mobile}`;

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-[#0f1210] pt-28 pb-16 md:pt-36 md:pb-24 px-4">
          <div className="max-w-7xl mx-auto">
            <h1
              className="font-heading font-bold uppercase tracking-tight text-[#f5f5f0] leading-[1.05]"
              style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
            >
              Dienstrad-
              <br />
              <span className="text-[#c8ff00]">Leasing</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg md:text-xl text-[#9ca39e] leading-relaxed">
              Wir sind Partner von{" "}
              <span className="text-[#f5f5f0] font-semibold">
                10 führenden Leasing-Anbietern
              </span>
              . Ihr Traumrad als Dienstrad &ndash; wir beraten Sie gerne!
            </p>
          </div>
          {/* Decorative lime line */}
          <div
            className="absolute bottom-0 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, #c8ff00 20%, #c8ff00 80%, transparent)",
            }}
          />
        </section>

        {/* Partner Grid */}
        <section className="bg-[#1a1f1c] py-16 md:py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-[#c8ff00] mb-10 md:mb-14">
              Unsere Leasing-Partner
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
              {leasingPartners.map((partner) => (
                <a
                  key={partner.name}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col items-center justify-center rounded-xl bg-[#f5f5f0] p-6 md:p-8 transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_24px_rgba(200,255,0,0.25)] border-2 border-transparent hover:border-[#c8ff00]"
                >
                  <div className="relative w-full h-16 md:h-20 flex items-center justify-center">
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      width={200}
                      height={100}
                      className="object-contain max-h-full"
                    />
                  </div>
                  <p className="mt-3 text-sm font-heading font-semibold text-[#363935] text-center">
                    {partner.name}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#0f1210] py-20 md:py-32 px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2
              className="font-heading font-bold uppercase tracking-tight text-[#f5f5f0] mb-6"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
            >
              Interesse<span className="text-[#c8ff00]">?</span>
            </h2>
            <p className="text-lg md:text-xl text-[#9ca39e] leading-relaxed mb-4">
              Besuchen Sie uns in Diepholz oder rufen Sie uns an.
              <br />
              Wir helfen Ihnen, das passende Leasing-Modell zu finden!
            </p>
            <p className="text-2xl md:text-3xl font-heading font-bold text-[#f5f5f0] mb-10">
              <a
                href={`tel:${contactInfo.phone.replace("/", "")}`}
                className="hover:text-[#c8ff00] transition-colors"
              >
                {contactInfo.phone}
              </a>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#c8ff00] text-[#0f1210] font-heading font-bold uppercase tracking-wide rounded-full hover:scale-105 hover:shadow-[0_0_24px_rgba(200,255,0,0.3)] transition-all text-lg"
              >
                <MessageCircle className="size-5" />
                WhatsApp schreiben
              </a>
              <a
                href="/kontakt"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#c8ff00] text-[#c8ff00] font-heading font-bold uppercase tracking-wide rounded-full hover:bg-[#c8ff00] hover:text-[#0f1210] transition-all text-lg"
              >
                Kontakt aufnehmen
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
