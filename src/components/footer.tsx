import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
} from "lucide-react";
import { navigation, contactInfo } from "@/data/products";

export default function Footer() {
  const whatsappUrl = `https://wa.me/49${contactInfo.mobile}`;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#1a1f1c] text-[#f5f5f0]">
      {/* Top lime accent line */}
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, #c8ff00 20%, #c8ff00 80%, transparent)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        {/* Big brand heading */}
        <div className="mb-10 sm:mb-14">
          <h2 className="font-heading text-4xl font-bold uppercase tracking-tight sm:text-5xl lg:text-6xl">
            Rad<span className="text-[#c8ff00]">Schlo&szlig;</span>
          </h2>
          <p className="mt-2 max-w-md font-heading text-base font-medium uppercase tracking-widest text-[#f5f5f0]/50 sm:text-lg">
            Diepholz &mdash; Fahrrad-Fachhandel &amp; Meisterwerkstatt
          </p>
        </div>

        {/* Three-column grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
          {/* Column 1: Navigation */}
          <div>
            <h3 className="mb-4 font-heading text-xs font-bold uppercase tracking-[0.2em] text-[#c8ff00]">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#f5f5f0]/70 transition-colors hover:text-[#c8ff00]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Contact */}
          <div>
            <h3 className="mb-4 font-heading text-xs font-bold uppercase tracking-[0.2em] text-[#c8ff00]">
              Kontakt
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${contactInfo.phone.replace("/", "")}`}
                  className="flex items-start gap-3 text-[#f5f5f0]/70 transition-colors hover:text-[#c8ff00]"
                >
                  <Phone className="mt-0.5 size-4 shrink-0 text-[#c8ff00]" />
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-[#f5f5f0]/70 transition-colors hover:text-[#c8ff00]"
                >
                  <MessageCircle className="mt-0.5 size-4 shrink-0 text-[#c8ff00]" />
                  <span>
                    WhatsApp: {contactInfo.mobile.replace(/(\d{4})(\d{3})(\d{5})/, "$1 $2 $3")}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-start gap-3 text-[#f5f5f0]/70 transition-colors hover:text-[#c8ff00]"
                >
                  <Mail className="mt-0.5 size-4 shrink-0 text-[#c8ff00]" />
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-[#f5f5f0]/70 transition-colors hover:text-[#c8ff00]"
                >
                  <MapPin className="mt-0.5 size-4 shrink-0 text-[#c8ff00]" />
                  {contactInfo.address}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Opening Hours */}
          <div>
            <h3 className="mb-4 font-heading text-xs font-bold uppercase tracking-[0.2em] text-[#c8ff00]">
              &Ouml;ffnungszeiten
            </h3>
            <ul className="space-y-2.5 text-sm">
              {contactInfo.openingHours.map((entry) => (
                <li key={entry.day} className="flex items-start gap-3">
                  <Clock className="mt-0.5 size-4 shrink-0 text-[#c8ff00]/60" />
                  <span className="text-[#f5f5f0]/70">
                    <span className="font-medium text-[#f5f5f0]/90">
                      {entry.day}
                    </span>{" "}
                    {entry.time}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-[#f5f5f0]/40">
              sowie nach Vereinbarung
            </p>
          </div>
        </div>

        {/* WhatsApp banner */}
        <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl border border-[#c8ff00]/10 bg-[#0f1210] px-6 py-6 sm:mt-16 sm:flex-row sm:justify-between sm:px-8">
          <div>
            <p className="font-heading text-lg font-bold uppercase tracking-wide sm:text-xl">
              Fragen? Einfach <span className="text-[#c8ff00]">schreiben.</span>
            </p>
            <p className="mt-1 text-sm text-[#f5f5f0]/50">
              Wir antworten schnell per WhatsApp.
            </p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-[#c8ff00] px-6 py-3 font-heading text-sm font-bold uppercase tracking-wide text-[#0f1210] transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(200,255,0,0.3)]"
          >
            <MessageCircle className="size-4" />
            WhatsApp &ouml;ffnen
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#c8ff00]/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-4 py-5 text-xs text-[#f5f5f0]/40 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
          <p>
            &copy; {currentYear} RadSchlo&szlig; Diepholz &mdash;{" "}
            {contactInfo.owner}, {contactInfo.title}
          </p>
          <div className="flex gap-4">
            <Link
              href="/kontakt#impressum"
              className="transition-colors hover:text-[#c8ff00]"
            >
              Impressum
            </Link>
            <Link
              href="/kontakt#datenschutz"
              className="transition-colors hover:text-[#c8ff00]"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
