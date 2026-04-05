import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { contactInfo } from "@/data/products";
import { Phone, Smartphone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Kontakt & Impressum — RadSchloß Diepholz",
  description:
    "Kontaktieren Sie RadSchloß Diepholz. Adresse, Öffnungszeiten, Kontaktformular und Impressum.",
};

export default function KontaktPage() {
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
              Kon<span className="text-[#c8ff00]">takt</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg md:text-xl text-[#9ca39e] leading-relaxed">
              Besuchen Sie uns in Diepholz, rufen Sie an oder schreiben Sie uns.
              Wir freuen uns auf Sie!
            </p>
          </div>
          <div
            className="absolute bottom-0 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, #c8ff00 20%, #c8ff00 80%, transparent)",
            }}
          />
        </section>

        {/* Contact Grid */}
        <section className="bg-[#1a1f1c] py-16 md:py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
              {/* Contact Info Card (shown first on mobile) */}
              <div className="order-1 lg:order-2 lg:col-span-2">
                <div className="rounded-2xl bg-[#0f1210] border border-[#c8ff00]/10 p-6 md:p-8">
                  <h2 className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-[#c8ff00] mb-6">
                    Kontaktdaten
                  </h2>
                  <ul className="space-y-4">
                    <li>
                      <a
                        href={`tel:${contactInfo.phone.replace("/", "")}`}
                        className="flex items-start gap-4 text-[#f5f5f0]/80 hover:text-[#c8ff00] transition-colors"
                      >
                        <Phone className="mt-0.5 size-5 shrink-0 text-[#c8ff00]" />
                        <div>
                          <span className="text-xs uppercase tracking-wider text-[#f5f5f0]/40 block mb-0.5">
                            Telefon
                          </span>
                          <span className="font-semibold text-[#f5f5f0]">
                            {contactInfo.phone}
                          </span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-4 text-[#f5f5f0]/80 hover:text-[#c8ff00] transition-colors"
                      >
                        <Smartphone className="mt-0.5 size-5 shrink-0 text-[#c8ff00]" />
                        <div>
                          <span className="text-xs uppercase tracking-wider text-[#f5f5f0]/40 block mb-0.5">
                            Mobil / WhatsApp
                          </span>
                          <span className="font-semibold text-[#f5f5f0]">
                            {contactInfo.mobile.replace(
                              /(\d{4})(\d{3})(\d{5})/,
                              "$1 $2 $3"
                            )}
                          </span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="flex items-start gap-4 text-[#f5f5f0]/80 hover:text-[#c8ff00] transition-colors"
                      >
                        <Mail className="mt-0.5 size-5 shrink-0 text-[#c8ff00]" />
                        <div>
                          <span className="text-xs uppercase tracking-wider text-[#f5f5f0]/40 block mb-0.5">
                            E-Mail
                          </span>
                          <span className="font-semibold text-[#f5f5f0]">
                            {contactInfo.email}
                          </span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-4 text-[#f5f5f0]/80 hover:text-[#c8ff00] transition-colors"
                      >
                        <MapPin className="mt-0.5 size-5 shrink-0 text-[#c8ff00]" />
                        <div>
                          <span className="text-xs uppercase tracking-wider text-[#f5f5f0]/40 block mb-0.5">
                            Adresse
                          </span>
                          <span className="font-semibold text-[#f5f5f0]">
                            {contactInfo.address}
                          </span>
                        </div>
                      </a>
                    </li>
                  </ul>

                  {/* Opening Hours */}
                  <div className="mt-8 pt-6 border-t border-[#c8ff00]/10">
                    <h3 className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-[#c8ff00] mb-4 flex items-center gap-2">
                      <Clock className="size-4" />
                      Öffnungszeiten
                    </h3>
                    <div className="space-y-2">
                      {contactInfo.openingHours.map((entry) => (
                        <div
                          key={entry.day}
                          className="flex justify-between text-sm"
                        >
                          <span className="text-[#f5f5f0]/70 font-medium">
                            {entry.day}
                          </span>
                          <span className="text-[#f5f5f0] font-semibold">
                            {entry.time}
                          </span>
                        </div>
                      ))}
                    </div>
                    <p className="mt-3 text-xs text-[#f5f5f0]/40">
                      sowie nach Vereinbarung
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="order-2 lg:order-1 lg:col-span-3">
                <h2 className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-[#c8ff00] mb-6">
                  Nachricht senden
                </h2>
                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-[#f5f5f0]/70 mb-1.5"
                      >
                        Name <span className="text-[#c8ff00]">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full rounded-lg border border-[#363935] bg-[#0f1210] px-4 py-3 text-[#f5f5f0] placeholder-[#f5f5f0]/30 outline-none transition-all focus:border-[#c8ff00] focus:ring-2 focus:ring-[#c8ff00]/20"
                        placeholder="Ihr Name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-[#f5f5f0]/70 mb-1.5"
                      >
                        E-Mail <span className="text-[#c8ff00]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full rounded-lg border border-[#363935] bg-[#0f1210] px-4 py-3 text-[#f5f5f0] placeholder-[#f5f5f0]/30 outline-none transition-all focus:border-[#c8ff00] focus:ring-2 focus:ring-[#c8ff00]/20"
                        placeholder="ihre@email.de"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-[#f5f5f0]/70 mb-1.5"
                    >
                      Telefon{" "}
                      <span className="text-[#f5f5f0]/30">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full rounded-lg border border-[#363935] bg-[#0f1210] px-4 py-3 text-[#f5f5f0] placeholder-[#f5f5f0]/30 outline-none transition-all focus:border-[#c8ff00] focus:ring-2 focus:ring-[#c8ff00]/20"
                      placeholder="Ihre Telefonnummer"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[#f5f5f0]/70 mb-1.5"
                    >
                      Nachricht <span className="text-[#c8ff00]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="w-full rounded-lg border border-[#363935] bg-[#0f1210] px-4 py-3 text-[#f5f5f0] placeholder-[#f5f5f0]/30 outline-none transition-all focus:border-[#c8ff00] focus:ring-2 focus:ring-[#c8ff00]/20 resize-y"
                      placeholder="Wie können wir Ihnen helfen?"
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      required
                      className="mt-1 size-4 shrink-0 rounded border-[#363935] bg-[#0f1210] accent-[#c8ff00]"
                    />
                    <label
                      htmlFor="consent"
                      className="text-xs text-[#f5f5f0]/50 leading-relaxed"
                    >
                      Hiermit erkläre ich mich einverstanden, dass meine in das
                      Kontaktformular eingegebenen Daten elektronisch gespeichert
                      und zum Zweck der Kontaktaufnahme verarbeitet und genutzt
                      werden.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center px-8 py-4 bg-[#c8ff00] text-[#0f1210] font-heading font-bold uppercase tracking-wide rounded-lg hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(200,255,0,0.3)] transition-all text-base"
                  >
                    Nachricht senden
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Impressum */}
        <section id="impressum" className="bg-[#0f1210] py-16 md:py-24 px-4 scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <h2
              className="font-heading font-bold uppercase tracking-tight text-[#f5f5f0] mb-10"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              Impres<span className="text-[#c8ff00]">sum</span>
            </h2>
            <div className="max-w-3xl space-y-1 text-[#f5f5f0]/70 leading-relaxed">
              <p className="text-[#f5f5f0] font-semibold text-lg">
                RadSchloß
              </p>
              <p>
                {contactInfo.title} {contactInfo.owner}
              </p>
              <p>{contactInfo.address}</p>
              <p className="pt-3">
                <span className="text-[#f5f5f0]/40">Telefon:</span>{" "}
                {contactInfo.phone}
              </p>
              <p>
                <span className="text-[#f5f5f0]/40">E-Mail:</span>{" "}
                {contactInfo.email}
              </p>
              <p className="pt-3">
                <span className="text-[#f5f5f0]/40">USt-ID:</span>{" "}
                {contactInfo.ustId}
              </p>
              <p className="pt-3">
                <span className="text-[#f5f5f0]/40">
                  Inhaltlich Verantwortlicher gem. &sect; 55 II RStV:
                </span>{" "}
                {contactInfo.owner}
              </p>
            </div>
          </div>
        </section>

        {/* Haftungsausschluss */}
        <section className="bg-[#1a1f1c] py-16 md:py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <h2
              className="font-heading font-bold uppercase tracking-tight text-[#f5f5f0] mb-10"
              style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}
            >
              Haftungs<span className="text-[#c8ff00]">ausschluss</span>
            </h2>
            <div className="max-w-3xl space-y-8 text-[#f5f5f0]/60 leading-relaxed text-sm">
              <div>
                <h3 className="text-[#f5f5f0] font-heading font-semibold text-base mb-2">
                  1. Inhalt des Onlineangebotes
                </h3>
                <p>
                  Der Autor übernimmt keinerlei Gewähr für die Aktualität,
                  Richtigkeit und Vollständigkeit der bereitgestellten
                  Informationen auf unserer Website. Haftungsansprüche gegen den
                  Autor, welche sich auf Schäden materieller oder ideeller Art
                  beziehen, die durch die Nutzung oder Nichtnutzung der
                  dargebotenen Informationen bzw. durch die Nutzung fehlerhafter
                  und unvollständiger Informationen verursacht wurden, sind
                  grundsätzlich ausgeschlossen, sofern seitens des Autors kein
                  nachweislich vorsätzliches oder grob fahrlässiges Verschulden
                  vorliegt.
                </p>
              </div>
              <div>
                <h3 className="text-[#f5f5f0] font-heading font-semibold text-base mb-2">
                  2. Verweise und Links
                </h3>
                <p>
                  Bei direkten oder indirekten Verweisen auf fremde Webseiten
                  (&quot;Hyperlinks&quot;), die außerhalb des
                  Verantwortungsbereiches des Autors liegen, würde eine
                  Haftungsverpflichtung ausschließlich in dem Fall in Kraft
                  treten, in dem der Autor von den Inhalten Kenntnis hat und es
                  ihm technisch möglich und zumutbar wäre, die Nutzung im Falle
                  rechtswidriger Inhalte zu verhindern.
                </p>
              </div>
              <div>
                <h3 className="text-[#f5f5f0] font-heading font-semibold text-base mb-2">
                  3. Urheber- und Kennzeichenrecht
                </h3>
                <p>
                  Der Autor ist bestrebt, in allen Publikationen die
                  Urheberrechte der verwendeten Bilder, Grafiken, Tondokumente,
                  Videosequenzen und Texte zu beachten.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Datenschutz */}
        <section id="datenschutz" className="bg-[#0f1210] py-16 md:py-24 px-4 scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <h2
              className="font-heading font-bold uppercase tracking-tight text-[#f5f5f0] mb-10"
              style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}
            >
              Daten<span className="text-[#c8ff00]">schutz</span>
            </h2>
            <div className="max-w-3xl space-y-8 text-[#f5f5f0]/60 leading-relaxed text-sm">
              <div>
                <h3 className="text-[#f5f5f0] font-heading font-semibold text-base mb-2">
                  4. Datenschutz
                </h3>
                <p>
                  Sofern innerhalb des Internetangebotes die Möglichkeit zur
                  Eingabe persönlicher oder geschäftlicher Daten besteht, so
                  erfolgt die Preisgabe dieser Daten seitens des Nutzers auf
                  ausdrücklich freiwilliger Basis.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
