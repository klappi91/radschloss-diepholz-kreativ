import Image from "next/image";
import { Phone, Smartphone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Footer from "@/components/footer";

const brandImages = [
  { src: "/images/brand/cache_7483916.PNG", alt: "Victoria" },
  { src: "/images/brand/cache_15992187.jpg", alt: "Conway" },
  { src: "/images/brand/cache_13273215.jpg", alt: "HoheAcht" },
  { src: "/images/brand/cache_18683274.png", alt: "QiO" },
  { src: "/images/brand/cache_7483918.jpg", alt: "Excelsior" },
  { src: "/images/brand/cache_7483917.PNG", alt: "Kayza" },
];

const marqueeText =
  "Verkauf \u2022 Reparatur \u2022 E-Bikes \u2022 Service \u2022 Leasing \u2022 Meisterhand \u2022 ";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />

      {/* ─── Intro Section ─── */}
      <section className="relative bg-[#0f1210] px-5 py-24 sm:px-8 md:px-16 lg:px-20 xl:px-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:gap-16">
          {/* Left: Text (60%) */}
          <div className="lg:w-[60%]">
            <h2
              className="font-heading font-bold leading-[1.05] tracking-tight text-[#f5f5f0]"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
            >
              Servus, oder{" "}
              <span className="text-[#c8ff00]">Moin Moin!</span>
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-[#f5f5f0]/70 sm:text-xl">
              <p>
                Sie suchen erstklassigen Service aus Meisterhand, dann sind Sie
                bei uns genau richtig. Egal ob edler Carbon Schlitten, das
                betagte Dreigang Rad oder das neue E-Bike, wir bekommen alles
                wieder zum fahren.
              </p>
              <p>
                Bei uns finden Sie E-Bikes, Fahrr&auml;der aller Art, Ersatzteile und
                Zubeh&ouml;r. Nat&uuml;rlich sind wir auch Ansprechpartner in Sachen
                Reparatur oder Service Ihres Rades.
              </p>
            </div>
          </div>

          {/* Right: Contact Card (40%) */}
          <div className="lg:w-[40%]">
            <div className="rounded-2xl border border-[#c8ff00]/10 bg-[#1a1f1c] p-8 sm:p-10">
              <h3 className="font-heading text-xl font-semibold text-[#c8ff00]">
                Kontakt &amp; &Ouml;ffnungszeiten
              </h3>

              <div className="mt-6 space-y-5 text-[#f5f5f0]/80">
                {/* Phone */}
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 size-5 shrink-0 text-[#c8ff00]" strokeWidth={1.5} />
                  <div>
                    <p className="text-sm text-[#f5f5f0]/50">Telefon</p>
                    <a
                      href="tel:+4954419950044"
                      className="text-lg font-medium text-[#f5f5f0] transition-colors hover:text-[#c8ff00]"
                    >
                      05441/9950044
                    </a>
                  </div>
                </div>

                {/* Mobile / WhatsApp */}
                <div className="flex items-start gap-3">
                  <Smartphone className="mt-0.5 size-5 shrink-0 text-[#c8ff00]" strokeWidth={1.5} />
                  <div>
                    <p className="text-sm text-[#f5f5f0]/50">Handy / WhatsApp</p>
                    <a
                      href="https://wa.me/4917622649706"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-medium text-[#f5f5f0] transition-colors hover:text-[#c8ff00]"
                    >
                      0176 226 49706
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 size-5 shrink-0 text-[#c8ff00]" strokeWidth={1.5} />
                  <div>
                    <p className="text-sm text-[#f5f5f0]/50">E-Mail</p>
                    <a
                      href="mailto:radschloss-diepholz@web.de"
                      className="text-lg font-medium text-[#f5f5f0] transition-colors hover:text-[#c8ff00]"
                    >
                      radschloss-diepholz@web.de
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-[#c8ff00]" strokeWidth={1.5} />
                  <div>
                    <p className="text-sm text-[#f5f5f0]/50">Adresse</p>
                    <p className="text-[#f5f5f0]">
                      Amtsweide 2
                      <br />
                      49356 Diepholz
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 size-5 shrink-0 text-[#c8ff00]" strokeWidth={1.5} />
                  <div>
                    <p className="text-sm text-[#f5f5f0]/50">
                      &Ouml;ffnungszeiten
                    </p>
                    <div className="space-y-0.5 text-[#f5f5f0]">
                      <p>Di &ndash; Fr: 14:00 &ndash; 18:00 Uhr</p>
                      <p className="text-[#f5f5f0]/50">oder nach Vereinbarung</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Services Marquee ─── */}
      <section className="relative overflow-hidden bg-[#0f1210] py-2">
        {/* Skewed strip */}
        <div className="-mx-4 -rotate-1 bg-[#c8ff00] py-4 sm:py-5">
          <div className="flex whitespace-nowrap">
            <div className="animate-marquee flex shrink-0 items-center">
              {Array.from({ length: 6 }).map((_, i) => (
                <span
                  key={i}
                  className="font-heading text-lg font-bold uppercase tracking-[0.15em] text-[#0f1210] sm:text-2xl md:text-3xl"
                >
                  {marqueeText}
                </span>
              ))}
            </div>
            <div
              className="animate-marquee flex shrink-0 items-center"
              aria-hidden="true"
            >
              {Array.from({ length: 6 }).map((_, i) => (
                <span
                  key={i}
                  className="font-heading text-lg font-bold uppercase tracking-[0.15em] text-[#0f1210] sm:text-2xl md:text-3xl"
                >
                  {marqueeText}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Marquee keyframe animation */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-100%); }
              }
              .animate-marquee {
                animation: marquee 30s linear infinite;
              }
            `,
          }}
        />
      </section>

      {/* ─── Brands Section ─── */}
      <section className="bg-[#1a1f1c] px-5 py-24 sm:px-8 md:px-16 lg:px-20 xl:px-28">
        <div className="mx-auto max-w-7xl">
          <h2
            className="text-center font-heading font-bold tracking-tight text-[#f5f5f0]"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Unsere <span className="text-[#c8ff00]">Marken</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-lg text-[#f5f5f0]/50">
            Qualit&auml;t, der wir vertrauen &ndash; und die Sie begeistern wird.
          </p>

          <div className="mt-16 grid grid-cols-2 items-center gap-8 sm:grid-cols-3 lg:grid-cols-6">
            {brandImages.map((brand) => (
              <div
                key={brand.src}
                className="flex items-center justify-center rounded-xl border border-[#c8ff00]/10 bg-white/95 p-6 transition-all duration-300 hover:border-[#c8ff00]/30 hover:bg-white"
              >
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={200}
                  height={100}
                  className="h-auto max-h-20 w-full object-contain opacity-90 transition-opacity duration-300 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section className="relative overflow-hidden bg-[#0f1210] px-5 py-28 sm:px-8 md:px-16 lg:px-20 xl:px-28">
        {/* Decorative glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
          <div className="h-[400px] w-[600px] rounded-full bg-[#c8ff00]/5 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-4xl text-center">
          <h2
            className="font-heading font-bold tracking-tight text-[#f5f5f0]"
            style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
          >
            Besuchen Sie{" "}
            <span className="text-[#c8ff00]">uns</span>
          </h2>

          <div className="mt-10 flex flex-col items-center gap-6 text-lg text-[#f5f5f0]/70 sm:text-xl">
            <p>
              <span className="font-semibold text-[#f5f5f0]">
                RadSchlo&szlig; Diepholz
              </span>
              <br />
              Inh. Max Borchering
              <br />
              Zweiradmechanikermeister
            </p>
            <p>
              Amtsweide 2 &middot; 49356 Diepholz
            </p>
            <div className="flex flex-col gap-1 text-center">
              <p>Di &ndash; Fr: 14:00 &ndash; 18:00 Uhr</p>
              <p className="text-[#f5f5f0]/50">oder nach Vereinbarung</p>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c8ff00] px-10 py-4 font-heading text-sm font-semibold uppercase tracking-widest text-[#0f1210] transition-all duration-300 hover:scale-[1.03] hover:bg-[#d4ff33] hover:shadow-[0_0_30px_rgba(200,255,0,0.3)] sm:text-base"
            >
              Kontakt aufnehmen
              <ArrowRight className="size-4" strokeWidth={2.5} />
            </a>
            <a
              href="tel:+4954419950044"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#c8ff00]/30 px-10 py-4 font-heading text-sm font-semibold uppercase tracking-widest text-[#f5f5f0] transition-all duration-300 hover:border-[#c8ff00]/60 hover:bg-[#c8ff00]/10 sm:text-base"
            >
              <Phone className="size-4" />
              Jetzt anrufen
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
